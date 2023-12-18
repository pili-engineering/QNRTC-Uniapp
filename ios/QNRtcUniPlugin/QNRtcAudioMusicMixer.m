//
//  QNRtcAudioMusicMixer.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2023/11/15.
//  Copyright © 2023 DCloud. All rights reserved.
//

#import "QNRtcAudioMusicMixer.h"
#import "QNRtcNative.h"

@interface QNRtcAudioMusicMixer () <QNRtcAudioMusicMixerDelegate>

@end

@implementation QNRtcAudioMusicMixer

@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(initDelegate))
// 设置代理
- (void)initDelegate {
    [RtcNativePlugin setAudioMusicMixerDelegate:self];
}

WX_EXPORT_METHOD_SYNC(@selector(getDuration:))
// 获取指定音频文件的总时长
- (NSNumber *)getDuration:(NSString *)filePath {
    return [RtcNativePlugin audioMusicMixerGetDuration:filePath];
}

WX_EXPORT_METHOD_SYNC(@selector(setPublishEnabled:))
// 设置某音源音频是否发布到远端
- (void)setPublishEnabled:(BOOL)publishEnabled {
    [RtcNativePlugin audioMusicMixerSetPublishEnabled:publishEnabled];
}

WX_EXPORT_METHOD_SYNC(@selector(isPublishEnabled))
// 获取某音源音频是否发布到远端
- (BOOL)isPublishEnabled {
    return [RtcNativePlugin audioMusicMixerIsPublishEnabled];
}

WX_EXPORT_METHOD_SYNC(@selector(getCurrentPosition))
// 获取当前时长
- (NSNumber *)getCurrentPosition {
    return [RtcNativePlugin audioMusicMixerGetCurrentPosition];
}


WX_EXPORT_METHOD_SYNC(@selector(start:))
// 指定循环次数开始混音
- (void)start:(int)loopCount {
    [RtcNativePlugin audioMusicMixerStart:loopCount];
}

WX_EXPORT_METHOD_SYNC(@selector(stop))
// 停止混音
- (void)stop {
    [RtcNativePlugin audioMusicMixerStop];
}

WX_EXPORT_METHOD_SYNC(@selector(pause))
// 暂停混音
- (void)pause {
    [RtcNativePlugin audioMusicMixerPause];
}

WX_EXPORT_METHOD_SYNC(@selector(resume))
// 恢复混音
- (void)resume {
    [RtcNativePlugin audioMusicMixerResume];
}

WX_EXPORT_METHOD_SYNC(@selector(seekTo:))
// 跳到指定位置混音，单位 ms
- (void)seekTo: (int64_t)position {
    [RtcNativePlugin audioMusicMixerSeekTo:position];
}

WX_EXPORT_METHOD_SYNC(@selector(setMusicVolume:))
// 设置背景音语参与混音的音量，范围 0 ～ 1.0
-  (void)setMusicVolume:(float)volume {
    [RtcNativePlugin audioMusicMixerSetMusicVolume:volume];
}

WX_EXPORT_METHOD_SYNC(@selector(getMusicVolume))
// 设置背景音语参与混音的音量，范围 0 ～ 1.0
-  (NSNumber *)getMusicVolume {
    return [RtcNativePlugin audioMusicMixerGetMusicVolume];
}

WX_EXPORT_METHOD_SYNC(@selector(setStartPosition:))
// 设置参与混音的起始位置，单位 ms
-  (void)setStartPosition:(int64_t)position {
    [RtcNativePlugin audioMusicMixerSetStartPosition:position];
}

WX_EXPORT_METHOD_SYNC(@selector(getStartPosition))
// 获取参与混音的起始位置
-  (NSNumber *)getStartPosition {
    return [RtcNativePlugin audioMusicMixerGetStartPosition];
}

#pragma mark - QNRtcAudioMixDelegate
// 混音状态回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMusicMixerStateChanged:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onMusicStateChanged" params:params];
}

// 混音进度回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMusicMixerMixing:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onMusicMixing" params:params];
}

// 混音报错回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMusicMixerError:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onMusicError" params:params];
}

@end
