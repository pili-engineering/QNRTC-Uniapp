//
//  QNRtcClient.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2023/10/8.
//  Copyright © 2023 DCloud. All rights reserved.
//

#import "QNRtcClient.h"
#import "QNRtcNative.h"

@interface QNRtcClient () <QNRtcClientDelegate>

@end

@implementation QNRtcClient
@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(initDelegate))
// 设置代理
- (void)initDelegate {
    [RtcNativePlugin setClientDelegate:self];
}

WX_EXPORT_METHOD_SYNC(@selector(join:userData:))
// 加入房间
- (void)join:(NSString *)token userData:(NSString *)userData {
    [RtcNativePlugin join:token userData:userData];
}

WX_EXPORT_METHOD_SYNC(@selector(leave))
// 离开房间
- (void)leave {
    [RtcNativePlugin leave];
}

WX_EXPORT_METHOD_SYNC(@selector(publish:callback:))
// 发布本地track
- (void)publish:(NSArray<NSDictionary *> *)tracks callback:(WXModuleCallback)callback {
    [RtcNativePlugin publish:tracks callback:callback];
}

WX_EXPORT_METHOD_SYNC(@selector(unpublish:))
// 取消发布本地track
- (void)unpublish:(NSArray<NSDictionary *> *)tracks {
    [RtcNativePlugin unpublish:tracks];
}

WX_EXPORT_METHOD_SYNC(@selector(subscribe:))
// 订阅远端track
- (void)subscribe:(NSArray<NSDictionary *> *)tracks {
    [RtcNativePlugin subscribe:tracks];
}

WX_EXPORT_METHOD_SYNC(@selector(unsubscribe:))
// 取消订阅远端track
- (void)unsubscribe:(NSArray<NSDictionary *> *)tracks {
    [RtcNativePlugin unsubscribe:tracks];
}

WX_EXPORT_METHOD_SYNC(@selector(getConnectionState))
// 获取当前房间状态
- (NSString *)getConnectionState {
    return [RtcNativePlugin getConnectionState];
}

WX_EXPORT_METHOD_SYNC(@selector(getRemoteUsers))
// 获取房间内远端用户列表
- (NSArray<NSDictionary *> *)getRemoteUsers {
    return [RtcNativePlugin getRemoteUsers];
}

WX_EXPORT_METHOD_SYNC(@selector(setAutoSubscribe:))
// 是否自动订阅
- (void)setAutoSubscribe:(BOOL)autoSubscribe {
    [RtcNativePlugin setAutoSubscribe:autoSubscribe];
}

WX_EXPORT_METHOD_SYNC(@selector(sendMessage:users:messageId:))
// 发送房间消息
- (void)sendMessage:(NSString *)message users:(NSArray<NSString *> *)users messageId:(NSString *)messageId {
    [RtcNativePlugin sendMessage:message users:users messageId:messageId];
}

WX_EXPORT_METHOD_SYNC(@selector(getPublishedTracks))
// 获取已发布的本地 track 列表
- (NSArray<NSDictionary *> *)getPublishedTracks {
    return [RtcNativePlugin getPublishedTracks];
}

WX_EXPORT_METHOD_SYNC(@selector(getSubscribedTracks:))
// 获取已订阅的远端 track 列表
- (NSArray<NSDictionary *> *)getSubscribedTracks:(NSString *)userID {
    return [RtcNativePlugin getSubscribedTracks:userID];
}

WX_EXPORT_METHOD_SYNC(@selector(getUserNetworkQuality:))
// 获取房间内用户网络状态
- (NSDictionary *)getUserNetworkQuality:(NSString *)userID {
    return [RtcNativePlugin getUserNetworkQuality:userID];
}

WX_EXPORT_METHOD_SYNC(@selector(getLocalAudioTrackStats))
// 获取本地音频 track 发布状态统计
- (NSDictionary *)getLocalAudioTrackStats {
    return [RtcNativePlugin getLocalAudioTrackStats];
}

WX_EXPORT_METHOD_SYNC(@selector(getLocalVideoTrackStats))
// 获取本地视频 track 发布状态统计
- (NSDictionary *)getLocalVideoTrackStats {
    return [RtcNativePlugin getLocalVideoTrackStats];
}

WX_EXPORT_METHOD_SYNC(@selector(getRemoteAudioTrackStats))
// 获取远端音频 track 发布状态统计
- (NSDictionary *)getRemoteAudioTrackStats {
    return [RtcNativePlugin getRemoteAudioTrackStats];
}

WX_EXPORT_METHOD_SYNC(@selector(getRemoteVideoTrackStats))
// 获取远端视频 track 发布状态统计
- (NSDictionary *)getRemoteVideoTrackStats {
    return [RtcNativePlugin getRemoteVideoTrackStats];
}

WX_EXPORT_METHOD_SYNC(@selector(startLiveStreamingWithDirect:))
// 开启单人转推
- (void)startLiveStreamingWithDirect:(NSDictionary *)config {
    [RtcNativePlugin startLiveStreamingWithDirect:config];
}

WX_EXPORT_METHOD_SYNC(@selector(startLiveStreamingWithTranscoding:))
// 开启合流转推
- (void)startLiveStreamingWithTranscoding:(NSDictionary *)config {
    [RtcNativePlugin startLiveStreamingWithTranscoding:config];
}

WX_EXPORT_METHOD_SYNC(@selector(stopLiveStreamingWithDirect:))
// 停止单人转推
- (void)stopLiveStreamingWithDirect:(NSDictionary *)config {
    [RtcNativePlugin stopLiveStreamingWithDirect:config];
}

WX_EXPORT_METHOD_SYNC(@selector(stopLiveStreamingWithTranscoding:))
// 停止合流转推
- (void)stopLiveStreamingWithTranscoding:(NSDictionary *)config {
    [RtcNativePlugin stopLiveStreamingWithTranscoding:config];
}

WX_EXPORT_METHOD_SYNC(@selector(setTranscodingLiveStreamingTracks:transcodingTracks:))
// 设置合流布局
- (void)setTranscodingLiveStreamingTracks:(NSString *)streamID transcodingTracks:(NSArray<NSDictionary *> *)transcodingTracks {
    [RtcNativePlugin setTranscodingLiveStreamingTracks:streamID transcodingTracks:transcodingTracks];
}

WX_EXPORT_METHOD_SYNC(@selector(removeTranscodingLiveStreamingTracks:transcodingTracks:))
// 移除合流布局
- (void)removeTranscodingLiveStreamingTracks:(NSString *)streamID transcodingTracks:(NSArray<NSDictionary *> *)transcodingTracks {
    [RtcNativePlugin removeTranscodingLiveStreamingTracks:streamID transcodingTracks:transcodingTracks];
}

WX_EXPORT_METHOD_SYNC(@selector(startMediaRelay:callback:))
// 开启跨房媒体转发
- (void)startMediaRelay:(NSDictionary *)config callback:(WXModuleCallback)callback {
    [RtcNativePlugin startRoomMediaRelay:config callback:callback];
}

WX_EXPORT_METHOD_SYNC(@selector(updateMediaRelay:callback:))
// 更新跨房媒体转发
- (void)updateMediaRelay:(NSDictionary *)config callback:(WXModuleCallback)callback {
    [RtcNativePlugin updateRoomMediaRelay:config callback:callback];
}

WX_EXPORT_METHOD_SYNC(@selector(stopMediaRelay:))
// 停止跨房媒体转发
- (void)stopMediaRelay:(WXModuleCallback)callback {
    [RtcNativePlugin stopRoomMediaRelay: callback];
}

WX_EXPORT_METHOD_SYNC(@selector(setClientRole:callback:))
// 设置用户角色
- (void)setClientRole:(NSString *)role callback:(WXModuleCallback)callback {
    [RtcNativePlugin setClientRole:role callback:callback];
}

#pragma mark - QNRtcNativeClientDelegate
// 房间状态回调
- (void)rtcNative:(QNRtcNative *)rtcNative onConnectionStateChanged:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onConnectionStateChanged" params:params];
}

// 远端用户加入房间回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUserJoined:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUserJoined" params:params];
}

// 远端用户重连中状态回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUserReconnecting:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUserReconnecting" params:params];
}

// 远端用户重连成功状态回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUserReconnected:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUserReconnected" params:params];
}

// 远端用户离开房间回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUserLeft:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUserLeft" params:params];
}

// 远端用户发布成功回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUserPublished:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUserPublished" params:params];
}

// 远端用户取消发布成功回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUserUnpublished:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUserUnpublished" params:params];
}

// 订阅远端用户音频 track 成功回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioSubscribed:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onAudioSubscribed" params:params];
}

// 订阅远端用户视频 track 成功回调
- (void)rtcNative:(QNRtcNative *)rtcNative onVideoSubscribed:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onVideoSubscribed" params:params];
}

// 自定义消息回调
- (void)rtcNative:(QNRtcNative *)rtcNative onMessageReceived:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onMessageReceived" params:params];
}

// 合流 or 单人转推开始回调
- (void)rtcNative:(QNRtcNative *)rtcNative onStartLiveStreaming:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onStartLiveStreaming" params:params];
}

// 合流 or 单人转推停止回调
- (void)rtcNative:(QNRtcNative *)rtcNative onStoppedLiveStreaming:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onStoppedLiveStreaming" params:params];
}

// 合流布局更新回调
- (void)rtcNative:(QNRtcNative *)rtcNative onUpdatedLiveStreaming:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onUpdatedLiveStreaming" params:params];
}

// 合流 or 单人转推 error 回调
- (void)rtcNative:(QNRtcNative *)rtcNative onErrorLiveStreaming:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onErrorLiveStreaming" params:params];
}

@end
