//
//  QNRtcNative.m
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/29.
//

#import "QNRtcNative.h"
#import <QNRTCKit/QNRTCKit.h>
#import "QNRtcLocalTrack.h"
#import "QNRtcUniAdapter.h"
#import "QNRtcTools.h"

typedef enum : NSUInteger {
    QNRtcTrackTypeLocal = 1 << 0,
    QNRtcTrackTypeRemote = 1 << 1
} QNRtcTrackType;

@interface QNRtcNative () <QNRTCDelegate, QNRTCClientDelegate, QNRemoteTrackDelegate, QNRemoteTrackVideoDataDelegate, QNCameraTrackVideoDataDelegate, QNAudioMixerDelegate>

@property (nonatomic, strong) QNRTCClient *client;

@property (atomic, strong) NSMutableArray<QNRtcLocalTrack *> *localTracks;

@property (atomic, strong) NSMutableDictionary *localRenderViews;

@property (atomic, strong) NSMutableDictionary *remoteRenderViews;

@property (atomic, strong) NSMutableDictionary *snapshotList;

@property (nonatomic, weak) id<QNRtcEngineDelegate> rtcEngineDelegate;

@property (nonatomic, weak) id<QNRtcClientDelegate> rtcClientDelegate;

@property (nonatomic, weak) id<QNRtcTrackDelegate> rtcTrackDelegate;

@property (nonatomic, weak) id<QNRtcAudioMixDelegate> rtcAudioMixDelegate;

@end

@implementation QNRtcNative
+ (instancetype)sharedInstance {
    static QNRtcNative *sharedInstance;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[QNRtcNative alloc] init];
        sharedInstance.localTracks = [NSMutableArray array];
        sharedInstance.localRenderViews = [NSMutableDictionary dictionary];
        sharedInstance.remoteRenderViews = [NSMutableDictionary dictionary];
        sharedInstance.snapshotList = [NSMutableDictionary dictionary];
    });
    return sharedInstance;
}

#pragma mark - QNRtcEngine
- (void)setEngineDelegate:(id<QNRtcEngineDelegate>)delegate {
    self.rtcEngineDelegate = delegate;
}

- (void)configRTC:(NSDictionary *)configParam {
    QNRTCConfiguration *configuration = [QNRtcUniAdapter getNativeConfig:configParam];
    [QNRTC configRTC:configuration];
    [QNRTC setAudioRouteDelegate:self];
}

- (void)deinit {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        // 释放相机
        for (QNRtcLocalTrack *localTrack in self.localTracks) {
            if ([localTrack.identifyID isEqualToString:LOCAL_CAMERA_VIDEO_IDENTIFY_ID]) {
                QNCameraVideoTrack *cameraTrack = (QNCameraVideoTrack *)localTrack.nativeTrack;
                [cameraTrack stopCapture];
                break;
            }
        }
        // 释放本地渲染图层
        for (NSInteger i = 0; i < self.localRenderViews.allKeys.count; i++) {
            NSString *key = self.localRenderViews.allKeys[i];
            QNGLKView *localPreview = self.localRenderViews[key];
            [localPreview removeFromSuperview];
        }
        // 释放远端渲染图层
        for (NSInteger i = 0; i < self.remoteRenderViews.allKeys.count; i++) {
            NSString *key = self.remoteRenderViews.allKeys[i];
            QNVideoView *remotePreview = self.remoteRenderViews[key];
            [remotePreview removeFromSuperview];
        }
        
        // 清空渲染图层数组
        [self.localRenderViews removeAllObjects];
        [self.remoteRenderViews removeAllObjects];
        
        // 移除 localTracks
        [self.localTracks removeAllObjects];
        
        // 移除截图列表
        [self.snapshotList removeAllObjects];
        
        // 离开房间   清空 client 和 delegate
        [self.client leave];
        self.client = nil;
        self.rtcEngineDelegate = nil;
        self.rtcClientDelegate = nil;
        self.rtcTrackDelegate = nil;
        self.rtcAudioMixDelegate = nil;
        
        // 清理配置
        [QNRTC deinit];
    }];
}

- (void)createRTCClient {
    self.client = [QNRTC createRTCClient];
    self.client.delegate = self;
}

- (NSDictionary *)createMicrophoneAudioTrack:(NSDictionary *)trackConfig {
    QNMicrophoneAudioTrack *microphoneAudioTrack;
    QNMicrophoneAudioTrackConfig *microphoneAudioTrackConfig = [QNRtcUniAdapter getNativeMicrophoneAudioTrackConfig:trackConfig];
    if (microphoneAudioTrackConfig) {
        microphoneAudioTrack = [QNRTC createMicrophoneAudioTrackWithConfig:microphoneAudioTrackConfig];
    } else {
        microphoneAudioTrack = [QNRTC createMicrophoneAudioTrack];
    }
    microphoneAudioTrack.audioMixer.delegate = self;
    QNRtcLocalTrack *localTrack = [QNRtcLocalTrack instanceWithIdentifyID:LOCAL_MIC_AUDIO_IDENTIFY_ID nativeTrack:microphoneAudioTrack];
    [self.localTracks addObject:localTrack];
    return [QNRtcUniAdapter getUniLocalTrack:localTrack];
}

- (NSDictionary *)createCustomAudioTrack:(NSDictionary *)trackConfig {
    QNCustomAudioTrack *customAudioTrack;
    QNCustomAudioTrackConfig *customAudioTrackConfig = [QNRtcUniAdapter getNativeCustomAudioTrackConfig:trackConfig];
    if (customAudioTrackConfig) {
        customAudioTrack = [QNRTC createCustomAudioTrackWithConfig:customAudioTrackConfig];
    } else {
        customAudioTrack = [QNRTC createCustomAudioTrack];
    }
    QNRtcLocalTrack *localTrack = [QNRtcLocalTrack instanceWithIdentifyID:LOCAL_CUSTOM_AUDIO_IDENTIFY_ID nativeTrack:customAudioTrack];
    [self.localTracks addObject:localTrack];
    return [QNRtcUniAdapter getUniLocalTrack:localTrack];
}

- (NSDictionary *)createCameraVideoTrack:(NSDictionary *)trackConfig {
    QNCameraVideoTrack *cameraVideoTrack;
    
    // 解析 QNCameraVideoTrackConfig 配置
    QNCameraVideoTrackConfig *cameraVideoTrackConfig = [QNRtcUniAdapter getNativeCameraVideoTrackConfig:trackConfig];
    if (cameraVideoTrackConfig) {
        cameraVideoTrack = [QNRTC createCameraVideoTrackWithConfig:cameraVideoTrackConfig];
    } else {
        cameraVideoTrack = [QNRTC createCameraVideoTrack];
    }
    cameraVideoTrack.videoDelegate = self;
    
    // 解析 QNCameraVideoTrack 属性方法配置
    QNCameraVideoTrackSetting *cameraVideoTrackSetting = [QNRtcUniAdapter getNativeCameraVideoTrackSetting:trackConfig];
    cameraVideoTrack.captureDevicePosition = cameraVideoTrackSetting.captureDevicePosition;
    cameraVideoTrack.sessionPreset = cameraVideoTrackSetting.sessionPreset;
    if (cameraVideoTrack.videoFrameRate) cameraVideoTrack.videoFrameRate = cameraVideoTrackSetting.videoFrameRate.unsignedIntegerValue;
    
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNGLKView *cameraPreview = [[QNGLKView alloc] init];
        [cameraVideoTrack play:cameraPreview];
        [self.localRenderViews setObject:cameraPreview forKey:LOCAL_CAMERA_VIDEO_IDENTIFY_ID];
    }];
    
    QNRtcLocalTrack *localTrack = [QNRtcLocalTrack instanceWithIdentifyID:LOCAL_CAMERA_VIDEO_IDENTIFY_ID nativeTrack:cameraVideoTrack];
    [self.localTracks addObject:localTrack];
    return [QNRtcUniAdapter getUniLocalTrack:localTrack];
}

- (NSDictionary *)createScreenVideoTrack:(NSDictionary *)trackConfig {
    QNScreenVideoTrack *screenVideoTrack;
    
    // 解析 QNScreenVideoTrackConfig 配置
    QNScreenVideoTrackConfig *screenVideoTrackConfig = [QNRtcUniAdapter getNativeScreenVideoTrackConfig:trackConfig];
    if (screenVideoTrackConfig) {
        screenVideoTrack = [QNRTC createScreenVideoTrackWithConfig:screenVideoTrackConfig];
    } else {
        screenVideoTrack = [QNRTC createScreenVideoTrack];
    }

    // 解析 QNScreenVideoTrack 属性方法配置
    QNScreenVideoTrackSetting *screenVideoTrackSetting = [QNRtcUniAdapter getNativeScreenVideoTrackSetting:trackConfig];
    if (screenVideoTrackSetting.screenRecorderFrameRate) [screenVideoTrack setScreenRecorderFrameRate:screenVideoTrackSetting.screenRecorderFrameRate.unsignedIntegerValue];
    
    QNRtcLocalTrack *localTrack = [QNRtcLocalTrack instanceWithIdentifyID:LOCAL_SCREEN_VIDEO_IDENTIFY_ID nativeTrack:screenVideoTrack];
    [self.localTracks addObject:localTrack];
    return [QNRtcUniAdapter getUniLocalTrack:localTrack];
}

- (NSDictionary *)createCustomVideoTrack:(NSDictionary *)trackConfig {
    QNCustomVideoTrack *customVideoTrack;
    QNCustomVideoTrackConfig *customVideoTrackConfig = [QNRtcUniAdapter getNativeCustomVideoTrackConfig:trackConfig];
    if (customVideoTrackConfig) {
        customVideoTrack = [QNRTC createCustomVideoTrackWithConfig:customVideoTrackConfig];
    } else {
        customVideoTrack = [QNRTC createCustomVideoTrack];
    }
    QNRtcLocalTrack *localTrack = [QNRtcLocalTrack instanceWithIdentifyID:LOCAL_CUSTOM_VIDEO_IDENTIFY_ID nativeTrack:customVideoTrack];
    [self.localTracks addObject:localTrack];
    return [QNRtcUniAdapter getUniLocalTrack:localTrack];
}

- (void)setAudioRouteToSpeakerphone:(BOOL)audioRouteToSpeakerphone {
    [QNRTC setAudioRouteToSpeakerphone:audioRouteToSpeakerphone];
}

- (void)enableFileLogging {
    [QNRTC enableFileLogging];
}

#pragma mark - QNRtcClient
- (void)setClientDelegate:(id<QNRtcClientDelegate>)delegate {
    self.rtcClientDelegate = delegate;
}

- (void)join:(NSString *)token userData:(NSString *)userData {
    if (!self.client) return;
    if(userData && ![userData isEqualToString:@""]) {
        [self.client join:token userData:userData];
    }else {
        [self.client join:token];
    }
}

- (void)leave {
    if (!self.client) return;
    [self.client leave];
}

- (NSString *)getConnectionState {
    if (!self.client) return @"";
    return [QNRtcUniAdapter getUniConnectionState:self.client.roomState];
}

- (NSArray<NSDictionary *> *)getRemoteUsers {
    if (!self.client) return @[];
    return [QNRtcUniAdapter getUniRemoteUsers:self.client.remoteUserList];
}

- (void)publish:(NSArray<NSDictionary *> *)tracks callback:(void(^)(id result))callback {
    if (!self.client) return;
    NSMutableArray<QNLocalTrack *> *publishLocalTracks = [NSMutableArray arrayWithCapacity:tracks.count];
    NSMutableArray<QNRtcLocalTrack *> *publishRtcLocalTracks = [NSMutableArray arrayWithCapacity:tracks.count];
    
    [QNRtcUniAdapter getNativePublishLocalTracks:&publishLocalTracks
                     nativePublishRtcLocalTracks:&publishRtcLocalTracks
                       fromUniPublishLocalTracks:tracks
                 withCreatedNativeRtcLocalTracks:self.localTracks];
    
    [self.client publish:publishLocalTracks completeCallback:^(BOOL onPublished, NSError *error) {
        callback([QNRtcUniAdapter getUniPublishCallBackWithNativePublishingLocalTracks:publishRtcLocalTracks onPublished:onPublished error:error]);
    }];
}

- (void)unpublish:(NSArray<NSDictionary *> *)tracks {
    if (!self.client) return;
    NSArray<QNLocalTrack *> *localTracks = [QNRtcUniAdapter getNativeUnPublishLocalTracks:tracks publishedLocalTracks:(NSArray<QNLocalTrack *> *)self.client.publishedTracks];
    [self.client unpublish:localTracks];
}

- (NSArray<NSDictionary *> *)getPublishedTracks {
    if (!self.client) return @[];
    return [QNRtcUniAdapter getUniPublishedTracks:self.client.publishedTracks];
}

- (void)subscribe:(NSArray<NSDictionary *> *)tracks {
    if (!self.client) return;
    NSArray<QNRemoteTrack *> *remoteTracks = [QNRtcUniAdapter getNativeSubscribeRemoteTracks:tracks];
    [self.client subscribe:remoteTracks];
}

- (void)unsubscribe:(NSArray<NSDictionary *> *)tracks {
    if (!self.client) return;
    NSArray<QNRemoteTrack *> *remoteTracks = [QNRtcUniAdapter getNativeUnSubscribeRemoteTracks:tracks subscribedRemoteTracks:[self getSubscribedTracks]];
    [self.client unsubscribe:remoteTracks];
}

- (void)setAutoSubscribe:(BOOL)autoSubscribe {
    if (!self.client) return;
    [self.client setAutoSubscribe:autoSubscribe];
}

- (NSArray<NSDictionary *> *)getSubscribedTracks:(NSString *)userID {
    if (!self.client) return @[];
    return [QNRtcUniAdapter getUniSubscribedTracks:[self.client getSubscribedTracks:userID] userID:userID];
}

- (NSDictionary *)getUserNetworkQuality:(NSString *)userID {
    if (!self.client) return @{};
    return [QNRtcUniAdapter getUniUserNetworkQuality:[self.client getUserNetworkQuality:userID]];
}

- (NSDictionary *)getLocalAudioTrackStats {
    if (!self.client) return @{};
    return [QNRtcUniAdapter getUniLocalAudioTrackStats:[self.client getLocalAudioTrackStats]];
}

- (NSDictionary *)getLocalVideoTrackStats {
    if (!self.client) return @{};
    return [QNRtcUniAdapter getUniLocalVideoTrackStats:[self.client getLocalVideoTrackStats]];
}

- (NSDictionary *)getRemoteAudioTrackStats {
    if (!self.client) return @{};
    return [QNRtcUniAdapter getUniRemoteAudioTrackStats:[self.client getRemoteAudioTrackStats]];
}

- (NSDictionary *)getRemoteVideoTrackStats {
    if (!self.client) return @{};
    return [QNRtcUniAdapter getUniRemoteVideoTrackStats:[self.client getRemoteVideoTrackStats]];;
}

- (void)startLiveStreamingWithDirect:(NSDictionary *)config {
    if (!self.client) return;
    QNDirectLiveStreamingConfig *directLiveStreamingConfig = [QNRtcUniAdapter getNativeDirectLiveStreamingConfig:config];
    [self.client startLiveStreamingWithDirect:directLiveStreamingConfig];
}

- (void)startLiveStreamingWithTranscoding:(NSDictionary *)config {
    if (!self.client) return;
    QNTranscodingLiveStreamingConfig *transcodingLiveStreamingConfig = [QNRtcUniAdapter getNativeTranscodingLiveStreamingConfig:config];
    [self.client startLiveStreamingWithTranscoding:transcodingLiveStreamingConfig];
}

- (void)stopLiveStreamingWithDirect:(NSDictionary *)config {
    if (!self.client) return;
    QNDirectLiveStreamingConfig *directLiveStreamingConfig = [QNRtcUniAdapter getNativeDirectLiveStreamingConfig:config];
    [self.client stopLiveStreamingWithDirect:directLiveStreamingConfig];
}

- (void)stopLiveStreamingWithTranscoding:(NSDictionary *)config {
    if (!self.client) return;
    QNTranscodingLiveStreamingConfig *transcodingLiveStreamingConfig = [QNRtcUniAdapter getNativeTranscodingLiveStreamingConfig:config];
    [self.client stopLiveStreamingWithTranscoding:transcodingLiveStreamingConfig];
}

- (void)setTranscodingLiveStreamingTracks:(NSString *)streamID transcodingTracks:(NSArray<NSDictionary *> *)transcodingTracks {
    if (!self.client) return;
    NSArray<QNTranscodingLiveStreamingTrack *> *transcodingLiveStreamingTracks = [QNRtcUniAdapter getNativeTranscodingLiveStreamingTracks:transcodingTracks];
    [self.client setTranscodingLiveStreamingID:(![streamID isEqualToString:@""] ? streamID : nil) withTracks:transcodingLiveStreamingTracks];
}

- (void)removeTranscodingLiveStreamingTracks:(NSString *)streamID transcodingTracks:(NSArray<NSDictionary *> *)transcodingTracks {
    if (!self.client) return;
    NSArray<QNTranscodingLiveStreamingTrack *> *transcodingLiveStreamingTracks = [QNRtcUniAdapter getNativeTranscodingLiveStreamingTracks:transcodingTracks];
    [self.client removeTranscodingLiveStreamingID:streamID withTracks:transcodingLiveStreamingTracks];
}

- (void)sendMessage:(NSString *)message users:(NSArray<NSString *> *)users messageId:(NSString *)messageId {
    if (!self.client) return;
    [self.client sendMessage:message toUsers:users messageId:messageId];
}

#pragma mark - QNRtcSurfaceView
- (void)play:(UIView *)renderView local:(BOOL)local userID:(NSString *)userID identityID:(NSString *)identifyID trackID:(NSString *)trackID {
    if (local == 0) {
        for(QNRtcLocalTrack *localTrack in self.localTracks) {
            if ([localTrack.identifyID isEqualToString:identifyID]) {
                if (self.localRenderViews && self.localRenderViews[identifyID]) {
                    for (UIView *subview in renderView.subviews) {
                        if ([subview isKindOfClass:[QNGLKView class]]) {
                            [subview removeFromSuperview];
                        }
                    }
                    QNGLKView *localPreview = self.localRenderViews[identifyID];
                    localPreview.frame = renderView.bounds;
                    [renderView addSubview:localPreview];
                }
            }
        }
    } else {
        NSArray <QNTrack *> *subscribedTracks = [self.client getSubscribedTracks:userID];
        for (QNTrack *track in subscribedTracks) {
            if(track.kind == QNTrackKindVideo && [track.trackID isEqual:trackID]) {
                if (self.remoteRenderViews && self.remoteRenderViews[trackID]) {
                    for (UIView *subview in renderView.subviews) {
                        if ([subview isKindOfClass:[QNVideoView class]]) {
                            [subview removeFromSuperview];
                        }
                    }
                    QNVideoView *remotePreview = self.remoteRenderViews[trackID];
                    remotePreview.frame = renderView.bounds;
                    [renderView addSubview:remotePreview];
                }
            }
        }
    }
}

#pragma mark - QNRtcTrack
- (void)setTrackDelegate:(id<QNRtcTrackDelegate>)delegate {
    self.rtcTrackDelegate = delegate;
}

- (NSNumber *)getMuted:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal | QNRtcTrackTypeRemote];
    return targetTrack ? @(targetTrack.muted) : @NO;
}

- (void)setMuted:(NSString *)identifyID muted:(BOOL)muted {
    QNLocalTrack *targetTrack = (QNLocalTrack *)[self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack) {
        [targetTrack updateMute:muted];
    }
}

- (NSNumber *)isSubscribed:(NSString *)identifyID {
    QNRemoteTrack *targetTrack = (QNRemoteTrack *)[self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeRemote];
    return targetTrack ? @(targetTrack.isSubscribed) : @NO;
}

- (void)sendSEI:(NSString *)identifyID message:(NSString *)message repeatCount:(NSNumber *)repeatCount {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNLocalVideoTrack class]]) {
        QNLocalVideoTrack *localVideoTrack = (QNLocalVideoTrack *)targetTrack;
        [localVideoTrack sendSEI:message repeatNmuber:repeatCount];
    }
}

- (NSNumber *)isMultiProfileEnabled:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeRemote];
    if (targetTrack && [targetTrack isKindOfClass:[QNRemoteVideoTrack class]]) {
        QNRemoteVideoTrack *remoteVideoTrack = (QNRemoteVideoTrack *)targetTrack;
        return @(remoteVideoTrack.isMultiProfileEnabled);
    }
    return @NO;
}

- (NSString *)getProfile:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeRemote];
    if (targetTrack && [targetTrack isKindOfClass:[QNRemoteVideoTrack class]]) {
        QNRemoteVideoTrack *remoteVideoTrack = (QNRemoteVideoTrack *)targetTrack;
        return [QNRtcUniAdapter getUniProfile:remoteVideoTrack.profile];
    }
    return @"";
}

- (void)setProfile:(NSString *)identifyID profile:(NSString *)profile {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeRemote];
    if (targetTrack && [targetTrack isKindOfClass:[QNRemoteVideoTrack class]]) {
        QNRemoteVideoTrack *remoteVideoTrack = (QNRemoteVideoTrack *)targetTrack;
        remoteVideoTrack.profile = [QNRtcUniAdapter getNativeProfile:profile];
    }
}

- (void)setRemoteVolume:(NSString *)identifyID volume:(NSNumber *)volume {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeRemote];
    if (targetTrack && [targetTrack isKindOfClass:[QNRemoteAudioTrack class]]) {
        QNRemoteAudioTrack *remoteAudioTrack = (QNRemoteAudioTrack *)targetTrack;
        [remoteAudioTrack setVolume:volume.floatValue];
    }
}

- (NSNumber *)getRemoteVolume:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeRemote];
    if (targetTrack && [targetTrack isKindOfClass:[QNRemoteAudioTrack class]]) {
        QNRemoteAudioTrack *remoteAudioTrack = (QNRemoteAudioTrack *)targetTrack;
        return [NSNumber numberWithFloat: [remoteAudioTrack getVolumeLevel]];
    }
    return 0;
}

- (void)previewMirrorFrontFacing:(NSString *)identifyID previewMirrorFrontFacing:(BOOL)previewMirrorFrontFacing {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            cameraVideoTrack.previewMirrorFrontFacing = previewMirrorFrontFacing;
        }
    }];
}

- (void)previewMirrorRearFacing:(NSString *)identifyID previewMirrorRearFacing:(BOOL)previewMirrorRearFacing {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            cameraVideoTrack.previewMirrorRearFacing = previewMirrorRearFacing;
        }
    }];
}

- (void)encodeMirrorFrontFacing:(NSString *)identifyID encodeMirrorFrontFacing:(BOOL)encodeMirrorFrontFacing {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            cameraVideoTrack.encodeMirrorFrontFacing = encodeMirrorFrontFacing;
        }
    }];
}

- (void)encodeMirrorRearFacing:(NSString *)identifyID encodeMirrorRearFacing:(BOOL)encodeMirrorRearFacing {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            cameraVideoTrack.encodeMirrorRearFacing = encodeMirrorRearFacing;
        }
    }];
}

- (void)startCapture:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack startCapture];
        }
    }];
}

- (void)stopCapture:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack stopCapture];
        }
    }];
}

- (void)switchCamera:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack switchCamera];
        }
    }];
}

- (void)turnLightOn:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setTorchOn:YES];
        }
    }];
}

- (void)turnLightOff:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setTorchOn:NO];
        }
    }];
}

- (void)manualFocus:(NSString *)identifyID x:(NSNumber *)x y:(NSNumber *)y {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setFocusPointOfInterest:CGPointMake(x.floatValue, y.floatValue)];
        }
    }];
}

- (void)setVideoOrientation:(NSString *)identifyID videoOrientation:(NSString *)videoOrientation {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setVideoOrientation:[QNRtcUniAdapter getNativeCaptureVideoOrientation:videoOrientation]];
        }
    }];
}

- (NSString *)getVideoOrientation:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
        QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
        return [QNRtcUniAdapter getUniCaptureVideoOrientation:cameraVideoTrack.videoOrientation];
    }
    return @"";
}

- (void)setFillMode:(NSString *)identifyID fillMode:(NSString *)fillMode {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setFillMode:[QNRtcUniAdapter getNativeFillMode:fillMode]];
        }
    }];
}

- (NSString *)getFillMode:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
        QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
        return [QNRtcUniAdapter getUniFillMode:cameraVideoTrack.fillMode];
    }
    return @"";
}

- (void)setSessionPreset:(NSString *)identifyID sessionPreset:(NSString *)sessionPreset {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setSessionPreset:[QNRtcUniAdapter getNativeSessionPreset:sessionPreset]];
        }
    }];
}

- (NSArray<NSNumber *> *)getZooms:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
        QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
        return [QNRtcUniAdapter getUniZooms:cameraVideoTrack.videoActiveFormat.videoMaxZoomFactor];
    }
    return @[];
}

- (void)setZoom:(NSString *)identifyID zoom:(NSNumber *)zoom {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack setVideoZoomFactor:zoom.floatValue];
        }
    }];
}

- (void)setBeauty:(NSString *)identifyID beautySetting:(NSDictionary *)beautySetting {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            QNBeautySetting *nativeBeautySetting = [QNRtcUniAdapter getNativeBeautySetting:beautySetting];
            if (nativeBeautySetting.enabled) [cameraVideoTrack setBeautifyModeOn:nativeBeautySetting.enabled.boolValue];
            if (nativeBeautySetting.smoothLevel) [cameraVideoTrack setBeautify:nativeBeautySetting.smoothLevel.floatValue];
            if (nativeBeautySetting.whiten) [cameraVideoTrack setWhiten:nativeBeautySetting.whiten.floatValue];
            if (nativeBeautySetting.redden) [cameraVideoTrack setRedden:nativeBeautySetting.redden.floatValue];
        }
    }];
}

- (void)pushImage:(NSString *)identifyID image:(NSDictionary *)image {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            QNPushImageSetting *pushImageSetting = [QNRtcUniAdapter getNativePushImageSetting:image];
            [cameraVideoTrack pushCameraTrackWithImage:pushImageSetting.image];
        }
    }];
}

- (void)setWaterMark:(NSString *)identifyID waterMark:(NSDictionary *)waterMark {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;

            // 获取当前预览分辨率
            AVCaptureInputPort *port = [cameraVideoTrack.videoCaptureDeviceInput.ports objectAtIndex:0];
            CMFormatDescriptionRef formatDescription = port.formatDescription;
            CMVideoDimensions dimensions = CMVideoFormatDescriptionGetDimensions(formatDescription);
            
            QNWaterMarkSetting *waterMarkSetting = [QNRtcUniAdapter getNativeWaterMarkSetting:waterMark nativeSessionPresetDimensions:dimensions];
            if (waterMarkSetting.image) {
                [cameraVideoTrack setWaterMarkWithImage:waterMarkSetting.image
                                               position:CGPointMake(waterMarkSetting.x ? waterMarkSetting.x.intValue : 0, waterMarkSetting.y ? waterMarkSetting.y.intValue : 0)];
            }
        }
    }];
}

- (void)clearWaterMark:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNCameraVideoTrack class]]) {
            QNCameraVideoTrack *cameraVideoTrack = (QNCameraVideoTrack *)targetTrack;
            [cameraVideoTrack clearWaterMark];
        }
    }];
}

// 截图
- (void)takeVideoSnapshot:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        [self.snapshotList setObject:@YES forKey:identifyID];
    }];
}

- (void)destroy:(NSString *)identifyID {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        if ([identifyID isEqualToString:LOCAL_CAMERA_VIDEO_IDENTIFY_ID]) {
            QNRtcLocalTrack *cameraRtcLocalTrack;
            for (QNRtcLocalTrack *localTrack in self.localTracks) {
                if ([localTrack.identifyID isEqualToString:LOCAL_CAMERA_VIDEO_IDENTIFY_ID]) {
                    cameraRtcLocalTrack = localTrack;
                }
            }
            QNCameraVideoTrack *cameraLocalTrack = (QNCameraVideoTrack *)cameraRtcLocalTrack.nativeTrack;
            [cameraLocalTrack stopCapture];
            cameraLocalTrack = nil;
            [self.localTracks removeObject:cameraRtcLocalTrack];
        }
    }];
}

- (NSNumber *)isScreenCaptureSupported {
    BOOL isAvailable = [QNScreenVideoTrack isScreenRecorderAvailable];
    return @(isAvailable);
}

- (void)setScreenRecorderFrameRate:(NSString *)identifyID screenRecorderFrameRate:(NSNumber *)screenRecorderFrameRate {
    [QNRtcTools dispatchSyncMainThreadSafe:^{
        QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
        if (targetTrack && [targetTrack isKindOfClass:[QNScreenVideoTrack class]]) {
            QNScreenVideoTrack *screenVideoTrack = (QNScreenVideoTrack *)targetTrack;
            [screenVideoTrack setScreenRecorderFrameRate:screenRecorderFrameRate.unsignedIntegerValue];
        }
    }];
}

- (void)setVolume:(NSString *)identifyID volume:(NSNumber *)volume {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNMicrophoneAudioTrack class]]) {
        QNMicrophoneAudioTrack *microphoneAudioTrack = (QNMicrophoneAudioTrack *)targetTrack;
        [microphoneAudioTrack setVolume:volume.floatValue];
    }
}

- (void)createAudioMixer:(NSString *)identifyID url:(NSString *)url {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNMicrophoneAudioTrack class]]) {
        QNMicrophoneAudioTrack *microphoneAudioTrack = (QNMicrophoneAudioTrack *)targetTrack;
        microphoneAudioTrack.audioMixer.audioURL = [NSURL URLWithString:url];
        microphoneAudioTrack.audioMixer.rateInterval = 1;
    }
}

#pragma mark - QNRtcAudioMixer
- (void)setAudioMixDelegate:(id<QNRtcAudioMixDelegate>)delegate {
    self.rtcAudioMixDelegate = delegate;
}

- (void)setAudioURL:(NSString *)identifyID url:(NSString *)url {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        audioMixer.audioURL = [NSURL URLWithString:url];
    }
}

- (void)start:(NSString *)identifyID loopTimes:(NSNumber *)loopTimes {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer start:loopTimes.integerValue];
    }
}

- (void)stop:(NSString *)identifyID {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer stop];
    }
}

- (void)resume:(NSString *)identifyID {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer resume];
    }
}

- (void)pause:(NSString *)identifyID {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer pause];
    }
}

- (void)seekTo:(NSString *)identifyID timeUs:(NSNumber *)timeUs {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer seekTo:CMTimeMake(timeUs.doubleValue, 1e6)];
    }
}

- (void)setMixingVolume:(NSString *)identifyID microphoneVolume:(NSNumber *)microphoneVolume musicVolume:(NSNumber *)musicVolume {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer setMicrophoneInputVolume:microphoneVolume.floatValue];
        [audioMixer setMusicInputVolume:musicVolume.floatValue];
    }
}

- (void)setPlayingVolume:(NSString *)identifyID volume:(NSNumber *)volume {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer setMusicOutputVolume:volume.floatValue];
    }
}

- (void)setPlayBack:(NSString *)identifyID playBack:(BOOL)playBack {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        [audioMixer setPlayBack:playBack];
    }
}

- (NSNumber *)getDuration:(NSString *)identifyID {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        return @(audioMixer.duration * 1000000);
    }
    return @0;
}

- (NSNumber *)getCurrentPosition:(NSString *)identifyID {
    QNAudioMixer *audioMixer = [self getAudioMixerWithIdentifyID:identifyID];
    if (audioMixer) {
        return @(audioMixer.currentTime * 1000000);
    }
    return @0;
}

- (QNAudioMixer *)getAudioMixerWithIdentifyID:(NSString *)identifyID {
    QNTrack *targetTrack = [self getTrackWithIdentifyID:identifyID type:QNRtcTrackTypeLocal];
    if (targetTrack && [targetTrack isKindOfClass:[QNMicrophoneAudioTrack class]]) {
        QNMicrophoneAudioTrack *microphoneAudioTrack = (QNMicrophoneAudioTrack *)targetTrack;
        return microphoneAudioTrack.audioMixer;
    }
    return nil;
}

#pragma mark - QNRtcNativeExtension
/*!
 * @abstract 获取已订阅的远端 Track
 */
- (NSArray<QNRemoteTrack *> *)getSubscribedTracks {
    NSMutableArray<QNRemoteTrack *> *subscribedTrack = [NSMutableArray array];
    for (QNRemoteUser *remoteUser in self.client.remoteUserList) {
        NSArray<QNRemoteTrack *> *remoteTracks = (NSArray<QNRemoteTrack *> *)[self.client getSubscribedTracks:remoteUser.userID];
        [subscribedTrack addObjectsFromArray:remoteTracks];
    }
    return subscribedTrack;
}

/*!
 * @abstract 根据 identifyID/trackID 查找 Track
 */
- (QNTrack *)getTrackWithIdentifyID:(NSString *)identifyID type:(QNRtcTrackType)type {
    if (!identifyID) return nil;
    if (type & QNRtcTrackTypeLocal) {
        // 查找 local track
        NSArray *localTracks = [self.localTracks copy];
        for (QNRtcLocalTrack *localTrack in localTracks) {
            if ([localTrack.identifyID isEqualToString:identifyID]) {
                return localTrack.nativeTrack;
            }
        }
    }

    if (type & QNRtcTrackTypeRemote) {
        // 查找 remote track
        NSArray<QNRemoteUser *> *remoteUsers = [[self.client remoteUserList] copy];
        for (QNRemoteUser *remoteUser in remoteUsers) {
            for (QNTrack *remoteAudioTrack in remoteUser.audioTrack) {
                if ([remoteAudioTrack.trackID isEqualToString:identifyID]) {
                    return remoteAudioTrack;
                }
            }
            for (QNTrack *remoteVideoTrack in remoteUser.videoTrack) {
                if ([remoteVideoTrack.trackID isEqualToString:identifyID]) {
                    return remoteVideoTrack;
                }
            }
        }
    }
    
    return nil;
}

#pragma mark - QNRTCDelegate
- (void)QNRTCDidChangeRTCAudioOutputToDevice:(QNAudioDeviceType)deviceType {
    if (self.rtcEngineDelegate && [self.rtcEngineDelegate respondsToSelector:@selector(rtcNative:onAudioRouteChanged:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcEngineDelegate rtcNative:self onAudioRouteChanged:[QNRtcUniAdapter getUniAudioDeviceChangedCallBackWithDeviceType:deviceType]];
        });
    }
}

#pragma mark - QNRTCClientDelegate
- (void)RTCClient:(QNRTCClient *)client didConnectionStateChanged:(QNConnectionState)state disconnectedInfo:(QNConnectionDisconnectedInfo *)info {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onConnectionStateChanged:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onConnectionStateChanged:[QNRtcUniAdapter getUniConnectionStateChangedCallBackWithRoomState:state disconnectedInfo:info]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didJoinOfUserID:(NSString *)userID userData:(NSString *)userData {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUserJoined:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUserJoined:[QNRtcUniAdapter getUniUserJoinedCallBackWithUserID:userID userData:userData]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didReconnectingOfUserID:(NSString *)userID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUserReconnecting:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUserReconnecting:[QNRtcUniAdapter getUniUserReconnectingCallBackWithUserID:userID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didReconnectedOfUserID:(NSString *)userID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUserReconnected:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUserReconnected:[QNRtcUniAdapter getUniUserReconnectedCallBackWithUserID:userID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didLeaveOfUserID:(NSString *)userID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUserLeft:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUserLeft:[QNRtcUniAdapter getUniUserLeftCallBackWithUserID:userID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didUserPublishTracks:(NSArray<QNRemoteTrack *> *)tracks ofUserID:(NSString *)userID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUserPublished:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUserPublished:[QNRtcUniAdapter getUniUserPublishedCallBackWithTracks:tracks userID:userID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didUserUnpublishTracks:(NSArray<QNRemoteTrack *> *)tracks ofUserID:(NSString *)userID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUserUnpublished:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUserUnpublished:[QNRtcUniAdapter getUniUserUnpublishedCallBackWithTracks:tracks userID:userID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didSubscribedRemoteVideoTracks:(NSArray<QNRemoteVideoTrack *> *)videoTracks audioTracks:(NSArray<QNRemoteAudioTrack *> *)audioTracks ofUserID:(NSString *)userID {
    for (QNRemoteVideoTrack *remoteVideoTrack in videoTracks) {
        remoteVideoTrack.videoDelegate = self;
        remoteVideoTrack.remoteDelegate = self;
    }
    for (QNRemoteAudioTrack *remoteAudioTrack in audioTracks) {
        remoteAudioTrack.remoteDelegate = self;
    }
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onAudioSubscribed:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onAudioSubscribed:[QNRtcUniAdapter getUniAudioSubscribedCallBackWithAudioTracks:audioTracks userID:userID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client firstVideoDidDecodeOfTrack:(QNRemoteVideoTrack *)videoTrack remoteUserID:(NSString *)userID {
    // 创建远端渲染图层
    QNVideoView *remotePreview = [[QNVideoView alloc] init];
    [videoTrack play:remotePreview];
    [self.remoteRenderViews setObject:remotePreview forKey:videoTrack.trackID];
    
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onVideoSubscribed:)]) {
        [self.rtcClientDelegate rtcNative:self onVideoSubscribed:[QNRtcUniAdapter getUniVideoSubscribedCallBackWithVideoTrack:videoTrack userID:userID]];
    }
}

/*!
 * @abstract 远端视频轨道取消渲染回调
 */
- (void)RTCClient:(QNRTCClient *)client didDetachRenderTrack:(QNRemoteVideoTrack *)videoTrack remoteUserID:(NSString *)userID {
    // 停止渲染
    [videoTrack play:nil];
    
    // 移除远端渲染图层
    for (NSInteger i = 0; i < self.remoteRenderViews.allKeys.count; i++) {
        NSString *currentKey = self.remoteRenderViews.allKeys[i];
        if ([currentKey isEqualToString:videoTrack.trackID]) {
            QNVideoView *remotePreview = self.remoteRenderViews[currentKey];
            [self.remoteRenderViews removeObjectForKey:currentKey];
            [remotePreview removeFromSuperview];
            remotePreview = nil;
            break;
        }
    }
}

- (void)RTCClient:(QNRTCClient *)client didReceiveMessage:(QNMessageInfo *)message {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onMessageReceived:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onMessageReceived:[QNRtcUniAdapter getUniMessageReceivedCallBackWithMessage:message]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didStartLiveStreamingWith:(NSString *)streamID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onStartLiveStreaming:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onStartLiveStreaming:[QNRtcUniAdapter getUniStartLiveStreamingCallBackWithStreamID:streamID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didStopLiveStreamingWith:(NSString *)streamID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onStoppedLiveStreaming:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onStoppedLiveStreaming:[QNRtcUniAdapter getUniStoppedLiveStreamingCallBackWithStreamID:streamID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didTranscodingTracksUpdated:(BOOL)success withStreamID:(NSString *)streamID {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onUpdatedLiveStreaming:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onUpdatedLiveStreaming:[QNRtcUniAdapter getUniUpdatedLiveStreamingCallBackWithStreamID:streamID]];
        });
    }
}

- (void)RTCClient:(QNRTCClient *)client didErrorLiveStreamingWith:(NSString *)streamID errorInfo:(QNLiveStreamingErrorInfo *)errorInfo {
    if (self.rtcClientDelegate && [self.rtcClientDelegate respondsToSelector:@selector(rtcNative:onErrorLiveStreaming:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcClientDelegate rtcNative:self onErrorLiveStreaming:[QNRtcUniAdapter getUniErrorLiveStreamingCallBackWithStreamID:streamID errorInfo:errorInfo]];
        });
    }
}

#pragma mark - QNTrackDelegate
- (void)remoteTrack:(QNRemoteTrack *)remoteTrack didMutedByRemoteUserID:(NSString *)userID {
    if (self.rtcTrackDelegate && [self.rtcTrackDelegate respondsToSelector:@selector(rtcNative:onMuteStateChanged:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcTrackDelegate rtcNative:self onMuteStateChanged:[QNRtcUniAdapter getUniMuteStateChangedCallBackWithTrackID:remoteTrack.trackID   isMuted:remoteTrack.muted]];
        });
    }
}

- (void)remoteVideoTrack:(QNRemoteVideoTrack *)remoteVideoTrack didSubscribeProfileChanged:(QNTrackProfile)profile {
    if (self.rtcTrackDelegate && [self.rtcTrackDelegate respondsToSelector:@selector(rtcNative:onVideoProfileChanged:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcTrackDelegate rtcNative:self onVideoProfileChanged:[QNRtcUniAdapter getUniVideoProfileChangedCallBackWithTrackID:remoteVideoTrack.trackID profile:profile]];
        });
    }
}

// 远端视频 Track 根据 TrackID 获取 key
- (void)remoteVideoTrack:(QNRemoteVideoTrack *)remoteVideoTrack didGetPixelBuffer:(CVPixelBufferRef)pixelBuffer {
    if (self.rtcTrackDelegate && [self.rtcTrackDelegate respondsToSelector:@selector(rtcNative:onRemoteVideoFrame:trackID:)]) {
            if([self.snapshotList[remoteVideoTrack.trackID]  isEqual: @YES]) {
                [self.rtcTrackDelegate rtcNative:self onRemoteVideoFrame:pixelBuffer trackID:remoteVideoTrack.trackID];
                [self.snapshotList setObject:@NO forKey:remoteVideoTrack.trackID];
            }
    }
}

// 本地视频 Track 根据 identifyID 获取 key
- (void)cameraVideoTrack:(QNCameraVideoTrack *)cameraVideoTrack didGetSampleBuffer:(CMSampleBufferRef)sampleBuffer {
    if (self.rtcTrackDelegate && [self.rtcTrackDelegate respondsToSelector:@selector(rtcNative:onLocalVideoFrame:)]) {
//        dispatch_async(dispatch_get_main_queue(), ^{
            for (QNRtcLocalTrack *localTrack in self.localTracks) {
                if(localTrack.nativeTrack == cameraVideoTrack) {
                    if([self.snapshotList[localTrack.identifyID]  isEqual: @YES]) {
                        [self.rtcTrackDelegate rtcNative:self onLocalVideoFrame:sampleBuffer];
                        [self.snapshotList setObject:@NO forKey:localTrack.identifyID];
                    }
                    break;
                }
            }
//        });
    }
}

#pragma mark - QNAudioMixerDelegate
- (void)audioMixer:(QNAudioMixer *)audioMixer playStateDidChange:(QNAudioPlayState)playState {
    if (self.rtcAudioMixDelegate && [self.rtcAudioMixDelegate respondsToSelector:@selector(rtcNative:onAudioMixStateChanged:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcAudioMixDelegate rtcNative:self onAudioMixStateChanged:[QNRtcUniAdapter getUniAudioMixStateChangedCallBackWithPlayState:playState]];
        });
    }
}

- (void)audioMixer:(QNAudioMixer *)audioMixer didMixing:(NSTimeInterval)currentTime {
    if (self.rtcAudioMixDelegate && [self.rtcAudioMixDelegate respondsToSelector:@selector(rtcNative:onMixing:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcAudioMixDelegate rtcNative:self onMixing:[QNRtcUniAdapter getUniMixingCallBackWithCurrentTime:currentTime]];
        });
    }
}

- (void)audioMixer:(QNAudioMixer *)audioMixer didFailWithError:(NSError *)error {
    if (self.rtcAudioMixDelegate && [self.rtcAudioMixDelegate respondsToSelector:@selector(rtcNative:onAudioMixError:)]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self.rtcAudioMixDelegate rtcNative:self onAudioMixError:[QNRtcUniAdapter getUniAudioMixErrorCallBackWithError:error]];
        });
    }
}

@end

