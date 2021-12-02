//
//  QNRtcTrack.m
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/25.
//

#import "QNRtcTrack.h"
#import "QNRtcNative.h"

@interface QNRtcTrack () <QNRtcTrackDelegate>

@end

@implementation QNRtcTrack
@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(initDelegate))
// 设置代理
- (void)initDelegate {
    [RtcNativePlugin setTrackDelegate:self];
}

#pragma mark - QNTrack
WX_EXPORT_METHOD_SYNC(@selector(getMuted:))
// 获取 Track 静音状态
- (NSNumber *)getMuted:(NSString *)identifyID {
    return [RtcNativePlugin getMuted:identifyID];
}

#pragma mark - QNLocalTrack
WX_EXPORT_METHOD_SYNC(@selector(setMuted:muted:))
// 设置本地 Track 的静音状态
- (void)setMuted:(NSString *)identifyID muted:(BOOL)muted {
    [RtcNativePlugin setMuted:identifyID muted:muted];
}

#pragma mark - QNRemoteTrack
WX_EXPORT_METHOD_SYNC(@selector(isSubscribed:))
// 是否订阅了这路远端 Track
- (NSNumber *)isSubscribed:(NSString *)identifyID {
    return [RtcNativePlugin isSubscribed:identifyID];
}

#pragma mark - QNLocalVideoTrack
WX_EXPORT_METHOD_SYNC(@selector(sendSEI:message:repeatCount:))
// 发送 SEI
- (void)sendSEI:(NSString *)identifyID message:(NSString *)message repeatCount:(NSNumber *)repeatCount {
    return [RtcNativePlugin sendSEI:identifyID message:message repeatCount:repeatCount];
}

#pragma mark - QNRemoteVideoTrack
WX_EXPORT_METHOD_SYNC(@selector(isMultiProfileEnabled:))
// 获取远端视频 Track 是否支持大小流
- (NSNumber *)isMultiProfileEnabled:(NSString *)identifyID {
    return [RtcNativePlugin isMultiProfileEnabled:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(getProfiles:))
// 获取当前订阅的远端视频 Track 的大小流 profile
- (NSString *)getProfile:(NSString *)identifyID {
    return [RtcNativePlugin getProfile:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(setProfile:profile:))
// 设置订阅远端视频 Track 的大小流 profile
- (void)setProfile:(NSString *)identifyID profile:(NSString *)profile {
    [RtcNativePlugin setProfile:identifyID profile:profile];
}

#pragma mark - QNRemoteAudioTrack
WX_EXPORT_METHOD_SYNC(@selector(setRemoteVolume:volume:))
// 设置远端音频 Track 的音量大小
- (void)setRemoteVolume:(NSString *)identifyID volume:(NSNumber *)volume {
    [RtcNativePlugin setRemoteVolume:identifyID volume:volume];
}

#pragma mark - QNCameraVideoTrack
WX_EXPORT_METHOD_SYNC(@selector(previewMirrorFrontFacing:previewMirrorFrontFacing:))
// 设置前置摄像头预览镜像
- (void)previewMirrorFrontFacing:(NSString *)identifyID previewMirrorFrontFacing:(BOOL)previewMirrorFrontFacing {
    [RtcNativePlugin previewMirrorFrontFacing:identifyID previewMirrorFrontFacing:previewMirrorFrontFacing];
}

WX_EXPORT_METHOD_SYNC(@selector(previewMirrorRearFacing:previewMirrorRearFacing:))
// 设置后置摄像头预览镜像
- (void)previewMirrorRearFacing:(NSString *)identifyID previewMirrorRearFacing:(BOOL)previewMirrorRearFacing {
    [RtcNativePlugin previewMirrorRearFacing:identifyID previewMirrorRearFacing:previewMirrorRearFacing];
}

WX_EXPORT_METHOD_SYNC(@selector(encodeMirrorFrontFacing:encodeMirrorFrontFacing:))
// 设置前置摄像头编码镜像（兼容安卓：设置编码镜像时默认预览也镜像）
- (void)encodeMirrorFrontFacing:(NSString *)identifyID encodeMirrorFrontFacing:(BOOL)encodeMirrorFrontFacing {
    [RtcNativePlugin previewMirrorFrontFacing:identifyID previewMirrorFrontFacing:encodeMirrorFrontFacing];
    [RtcNativePlugin encodeMirrorFrontFacing:identifyID encodeMirrorFrontFacing:encodeMirrorFrontFacing];
}

WX_EXPORT_METHOD_SYNC(@selector(encodeMirrorRearFacing:encodeMirrorRearFacing:))
// 设置后置摄像头编码镜像（兼容安卓：设置编码镜像时默认预览也镜像）
- (void)encodeMirrorRearFacing:(NSString *)identifyID encodeMirrorRearFacing:(BOOL)encodeMirrorRearFacing {
    [RtcNativePlugin previewMirrorRearFacing:identifyID previewMirrorRearFacing:encodeMirrorRearFacing];
    [RtcNativePlugin encodeMirrorRearFacing:identifyID encodeMirrorRearFacing:encodeMirrorRearFacing];
}

WX_EXPORT_METHOD_SYNC(@selector(startCapture:))
// 开始相机采集
- (void)startCapture:(NSString *)identifyID {
    [RtcNativePlugin startCapture:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(stopCapture:))
// 停止相机采集
- (void)stopCapture:(NSString *)identifyID {
    [RtcNativePlugin stopCapture:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(switchCamera:))
// 切换摄像头
- (void)switchCamera:(NSString *)identifyID {
    [RtcNativePlugin switchCamera:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(turnLightOn:))
// 打开闪光灯
- (void)turnLightOn:(NSString *)identifyID {
    [RtcNativePlugin turnLightOn:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(turnLightOff:))
// 关闭闪光灯
- (void)turnLightOff:(NSString *)identifyID {
    [RtcNativePlugin turnLightOff:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(manualFocus:x:y:viewWidth:viewHeight:))
// 手动对焦
- (void)manualFocus:(NSString *)identifyID x:(NSNumber *)x y:(NSNumber *)y viewWidth:(NSNumber *)viewWidth viewHeight:(NSNumber *)viewHeight {
    [RtcNativePlugin manualFocus:identifyID x:x y:y];
}

WX_EXPORT_METHOD_SYNC(@selector(setVideoOrientation:videoOrientation:))
// 设置摄像头旋转方向
- (void)setVideoOrientation:(NSString *)identifyID videoOrientation:(NSString *)videoOrientation {
    [RtcNativePlugin setVideoOrientation:identifyID videoOrientation:videoOrientation];
}

WX_EXPORT_METHOD_SYNC(@selector(getVideoOrientation:))
// 获取当前摄像头旋转方向
- (NSString *)getVideoOrientation:(NSString *)identifyID {
    return [RtcNativePlugin getVideoOrientation:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(setFillMode:fillMode:))
// 设置预览画面填充方式
- (void)setFillMode:(NSString *)identifyID fillMode:(NSString *)fillMode {
    [RtcNativePlugin setFillMode:identifyID fillMode:fillMode];
}

WX_EXPORT_METHOD_SYNC(@selector(getFillMode:))
// 获取当前预览画面填充方式
- (NSString *)getFillMode:(NSString *)identifyID {
    return [RtcNativePlugin getFillMode:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(setSessionPreset:sessionPreset:))
// 设置预览分辨率
- (void)setSessionPreset:(NSString *)identifyID sessionPreset:(NSString *)sessionPreset {
    return [RtcNativePlugin setSessionPreset:identifyID sessionPreset:sessionPreset];
}

WX_EXPORT_METHOD_SYNC(@selector(getZooms:))
- (NSArray<NSNumber *> *)getZooms:(NSString *)identifyID {
    return [RtcNativePlugin getZooms:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(setZoom:zoom:))
// 设置缩放大小
- (void)setZoom:(NSString *)identifyID zoom:(NSNumber *)zoom {
    [RtcNativePlugin setZoom:identifyID zoom:zoom];
}

WX_EXPORT_METHOD_SYNC(@selector(setBeauty:beautySetting:))
// 设置美颜
- (void)setBeauty:(NSString *)identifyID beautySetting:(NSDictionary *)beautySetting {
    [RtcNativePlugin setBeauty:identifyID beautySetting:beautySetting];
}

WX_EXPORT_METHOD_SYNC(@selector(pushImage:image:))
// 设置图片推流
- (void)pushImage:(NSString *)identifyID image:(NSDictionary *)image {
    [RtcNativePlugin pushImage:identifyID image:image];
}

WX_EXPORT_METHOD_SYNC(@selector(setWaterMark:waterMark:))
// 设置水印
- (void)setWaterMark:(NSString *)identifyID waterMark:(NSDictionary *)waterMark {
    [RtcNativePlugin setWaterMark:identifyID waterMark:waterMark];
}

WX_EXPORT_METHOD_SYNC(@selector(clearWaterMark:))
// 清除水印
- (void)clearWaterMark:(NSString *)identifyID {
    [RtcNativePlugin clearWaterMark:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(destroy:))
// 销毁相机 Track
- (void)destroy:(NSString *)identifyID {
    [RtcNativePlugin destroy:identifyID];
}

#pragma mark - QNScreenVideoTrack
WX_EXPORT_METHOD_SYNC(@selector(isScreenCaptureSupported:))
// 获取设备对录屏的支持情况
- (NSNumber *)isScreenCaptureSupported:(NSString *)identifyID {
    return [RtcNativePlugin isScreenCaptureSupported];
}

WX_EXPORT_METHOD_SYNC(@selector(setScreenRecorderFrameRate:screenRecorderFrameRate:))
// 设置录屏采集帧率
- (void)setScreenRecorderFrameRate:(NSString *)identifyID screenRecorderFrameRate:(NSNumber *)screenRecorderFrameRate {
    [RtcNativePlugin setScreenRecorderFrameRate:identifyID screenRecorderFrameRate:screenRecorderFrameRate];
}

#pragma mark - QNMicrophoneAudioTrack
WX_EXPORT_METHOD_SYNC(@selector(setVolume:volume:))
// 设置本地麦克风音频 Track 的采集音量
- (void)setVolume:(NSString *)identifyID volume:(NSNumber *)volume {
    [RtcNativePlugin setVolume:identifyID volume:volume];
}

WX_EXPORT_METHOD_SYNC(@selector(createAudioMixer:url:))
// 创建 Audio Mixer
- (void)createAudioMixer:(NSString *)identifyID url:(NSString *)url {
    [RtcNativePlugin createAudioMixer:identifyID url:url];
}

#pragma mark - QNRtcTrackDelegate
// 订阅的远端视频 profile 发生变化时的回调
- (void)rtcNative:(QNRtcNative *)rtcNative onVideoProfileChanged:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onVideoProfileChanged" params:params];
}

// 订阅的远端 Track 开关静默时的回调
- (void)rtcNative:(QNRtcNative *)rtcNative onMuteStateChanged:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onMuteStateChanged" params:params];
}

@end
