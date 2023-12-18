//
//  QNRtcAudioEffectMixer.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2023/11/15.
//  Copyright © 2023 DCloud. All rights reserved.
//

#import "QNRtcAudioEffectMixer.h"
#import "QNRtcNative.h"

@interface QNRtcAudioEffectMixer () <QNRtcAudioEffectMixerDelegate>

@end

@implementation QNRtcAudioEffectMixer

@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(initDelegate))
// 设置代理
- (void)initDelegate {
    [RtcNativePlugin setAudioEffectMixerDelegate:self];
}

WX_EXPORT_METHOD_SYNC(@selector(createAudioEffect:filePath:))
// 创建音效混音配置类实例
- (void)createAudioEffect:(int)effectID filePath:(NSString *)filePath {
    [RtcNativePlugin createAudioEffect:effectID filePath:filePath];
}

WX_EXPORT_METHOD_SYNC(@selector(setPublishEnabled:publishEnabled:))
// 设置某音源音频是否发布到远端
- (void)setPublishEnabled:(int)effectID publishEnabled:(BOOL)publishEnabled {
    [RtcNativePlugin setPublishEnabled:publishEnabled effectID:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(isPublishEnabled:))
// 获取某音源音频是否发布到远端
-  (BOOL)isPublishEnabled:(int)effectID {
    return [RtcNativePlugin isPublishEnabled:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(start:))
// 开始混音某音效
- (void)start:(int)effectID {
    [RtcNativePlugin start:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(stop:))
// 停止混音某音效
- (void)stop:(int)effectID {
    [RtcNativePlugin stop:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(pause:))
// 暂停混音某音效
- (void)pause:(int)effectID {
    [RtcNativePlugin pause:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(resume:))
// 恢复混音某音效
- (void)resume:(int)effectID {
    [RtcNativePlugin resume:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(getCurrentPosition:))
// 获取当前时长
- (int64_t)getCurrentPosition:(int)effectID {
    return [RtcNativePlugin getCurrentPosition:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(setVolume:volume:))
// 设置某音效音量，音量范围 0～1.0
- (void)setVolume:(int)effectID volume:(float)volume {
    [RtcNativePlugin setVolume:volume effectID:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(getVolume:))
// 获取某音效音量
- (float)getVolume:(int)effectID {
    return [RtcNativePlugin getVolume:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(setAllEffectsVolume:))
// 设置所有音效的音量，范围 0～1.0
- (void)setAllEffectsVolume:(float)volume {
    [RtcNativePlugin setAllEffectsVolume:volume];
}

WX_EXPORT_METHOD_SYNC(@selector(stopAll))
// 停止混音所有音效
- (void)stopAll {
    [RtcNativePlugin stopAll];
}

WX_EXPORT_METHOD_SYNC(@selector(pauseAll))
// 暂停混音所有音效
- (void)pauseAll {
    [RtcNativePlugin pauseAll];
}

WX_EXPORT_METHOD_SYNC(@selector(resumeAll))
// 恢复混音所有音效
- (void)resumeAll {
    [RtcNativePlugin resumeAll];
}

#pragma mark - QNRtcAudioMixDelegate
// 混音完成回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioEffectMixerFinished:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onEffectFinished" params:params];
}

// 混音报错回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioEffectMixerError:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onEffectEffectError" params:params];
}

@end
