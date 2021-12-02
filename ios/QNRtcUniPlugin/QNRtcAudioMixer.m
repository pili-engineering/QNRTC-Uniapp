//
//  QNRtcAudioMixer.m
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/28.
//

#import "QNRtcAudioMixer.h"
#import "QNRtcNative.h"

@interface QNRtcAudioMixer () <QNRtcAudioMixDelegate>

@end

@implementation QNRtcAudioMixer

@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(initDelegate))
// 设置代理
- (void)initDelegate {
    [RtcNativePlugin setAudioMixDelegate:self];
}

WX_EXPORT_METHOD_SYNC(@selector(start:loopTimes:))
// 开始混音
- (void)start:(NSString *)identifyID loopTimes:(NSNumber *)loopTimes {
    [RtcNativePlugin start:identifyID loopTimes:loopTimes];
}

WX_EXPORT_METHOD_SYNC(@selector(stop:))
// 停止混音
- (void)stop:(NSString *)identifyID {
    [RtcNativePlugin stop:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(resume:))
// 恢复混音
- (void)resume:(NSString *)identifyID {
    [RtcNativePlugin resume:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(pause:))
// 暂停混音
- (void)pause:(NSString *)identifyID {
    [RtcNativePlugin pause:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(seekTo:timeUs:))
// 跳转到指定时间点混音
- (void)seekTo:(NSString *)identifyID timeUs:(NSNumber *)timeUs {
    [RtcNativePlugin seekTo:identifyID timeUs:timeUs];
}

WX_EXPORT_METHOD_SYNC(@selector(setMixingVolume:microphoneVolume:musicVolume:))
// 设置混音音量
- (void)setMixingVolume:(NSString *)identifyID microphoneVolume:(NSNumber *)microphoneVolume musicVolume:(NSNumber *)musicVolume {
    [RtcNativePlugin setMixingVolume:identifyID microphoneVolume:microphoneVolume musicVolume:musicVolume];
}

WX_EXPORT_METHOD_SYNC(@selector(setPlayingVolume:volume:))
// 设置本地播放音量
- (void)setPlayingVolume:(NSString *)identifyID volume:(NSNumber *)volume {
    [RtcNativePlugin setPlayingVolume:identifyID volume:volume];
}

WX_EXPORT_METHOD_SYNC(@selector(getDuration:))
// 获取资源总时长
- (NSNumber *)getDuration:(NSString *)identifyID {
    return [RtcNativePlugin getDuration:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(getCurrentPosition:))
// 获取当前混音进度
- (NSNumber *)getCurrentPosition:(NSString *)identifyID {
    return [RtcNativePlugin getCurrentPosition:identifyID];
}

WX_EXPORT_METHOD_SYNC(@selector(setPlayBack:playBack:))
// 设置返听
- (void)setPlayBack:(NSString *)identifyID playBack:(BOOL)playBack {
    [RtcNativePlugin setPlayBack:identifyID playBack:playBack];
}

#pragma mark - QNRtcAudioMixDelegate
// 混音状态回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMixStateChanged:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onStateChanged" params:params];
}

// 混音进度回调
- (void)rtcNative:(QNRtcNative *)rtcNative onMixing:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onMixing" params:params];
}

// 混音报错回调
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMixError:(NSDictionary *)params {
    [self.weexInstance fireGlobalEvent:@"onError" params:params];
}

@end
