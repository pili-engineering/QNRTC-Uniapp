//
//  QNRtcEngine.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2021/10/8.
//  Copyright © 2020 DCloud. All rights reserved.
//

#import "QNRtcEngine.h"
#import "QNRtcNative.h"

@interface QNRtcEngine () <QNRtcEngineDelegate>

@end

@implementation QNRtcEngine
@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(initDelegate))
// 设置代理
- (void)initDelegate {
    [RtcNativePlugin setEngineDelegate:self];
}

WX_EXPORT_METHOD_SYNC(@selector(configRTC:))
// 初始化 SDK，必须在使用其它接口前调用
- (void)configRTC:(NSDictionary *)configParam {
    [RtcNativePlugin configRTC:configParam];
}

WX_EXPORT_METHOD_SYNC(@selector(deinit))
// 反初始化操作，在确认不再使用实时音视频后调用此接口释放其占用的资源，此后如果再使用需要再次调用 configRTC 方法
- (void)deinit {
    [RtcNativePlugin deinit];
}

WX_EXPORT_METHOD_SYNC(@selector(createRTCClient))
// 创建 QNRTCClient 对象，且全局只可存在一个
- (void)createRTCClient {
    [RtcNativePlugin createRTCClient];
}

WX_EXPORT_METHOD_SYNC(@selector(createMicrophoneAudioTrack:))
// 创建麦克风音频轨
- (NSDictionary *)createMicrophoneAudioTrack:(NSDictionary *)trackConfig {
    return [RtcNativePlugin createMicrophoneAudioTrack:trackConfig];
}

WX_EXPORT_METHOD_SYNC(@selector(createCustomAudioTrack:))
// 创建自定义音频轨
- (NSDictionary *)createCustomAudioTrack:(NSDictionary *)trackConfig {
    return [RtcNativePlugin createCustomAudioTrack:trackConfig];
}

WX_EXPORT_METHOD_SYNC(@selector(createCameraVideoTrack:))
// 创建摄像头视频轨
- (NSDictionary *)createCameraVideoTrack:(NSDictionary *)trackConfig {
    return [RtcNativePlugin createCameraVideoTrack:trackConfig];
}

WX_EXPORT_METHOD_SYNC(@selector(createScreenVideoTrack:))
// 创建屏幕录制视频轨
- (NSDictionary *)createScreenVideoTrack:(NSDictionary *)trackConfig {
    return [RtcNativePlugin createScreenVideoTrack:trackConfig];
}

WX_EXPORT_METHOD_SYNC(@selector(createCustomVideoTrack:))
// 创建自定义视频轨
- (NSDictionary *)createCustomVideoTrack:(NSDictionary *)trackConfig {
    return [RtcNativePlugin createCustomVideoTrack:trackConfig];
}

WX_EXPORT_METHOD_SYNC(@selector(setAudioRouteToSpeakerphone:))
// 设置是否将音频路由切换到扬声器，默认音频路由为扬声器
- (void)setAudioRouteToSpeakerphone:(BOOL)audioRouteToSpeakerphone {
    [RtcNativePlugin setAudioRouteToSpeakerphone:audioRouteToSpeakerphone];
}

WX_EXPORT_METHOD_SYNC(@selector(enableFileLogging))
// 开启日志
- (void)enableFileLogging {
    [RtcNativePlugin enableFileLogging];
}

#pragma mark - QNRtcNativeDelegate
// 音频输出设备变更的回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioRouteChanged:(NSDictionary *)param {
    [self.weexInstance fireGlobalEvent:@"onAudioRouteChanged" params:param];
}

@end

