//
//  QNRtcAudioEffect.m
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2023/11/15.
//  Copyright © 2023 DCloud. All rights reserved.
//

#import "QNRtcAudioEffect.h"
#import "QNRtcNative.h"

@interface QNRtcAudioEffect ()
@end

@implementation QNRtcAudioEffect

@synthesize weexInstance = _weexInstance;

- (void)setWeexInstance:(WXSDKInstance *)weexInstance {
    _weexInstance = weexInstance;
}

WX_EXPORT_METHOD_SYNC(@selector(getDuration:))
// 获取指定音频文件的总时长
- (int64_t)getDuration:(NSString *)filePath {
    return [RtcNativePlugin getDuration:filePath];
}

WX_EXPORT_METHOD_SYNC(@selector(getID:))
// 获取音效文件的唯一标识符
- (int)getID: (int)effectID {
    return [RtcNativePlugin getID:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(getFilePath:))
// 获取音效文件路径
- (NSString *)getFilePath: (int)effectID {
    return [RtcNativePlugin getFilePath:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(setStartPosition:position:))
// 获取音效文件路径
- (void)setStartPosition:(int)effectID position:(int64_t)position {
    [RtcNativePlugin setStartPosition:effectID position:position];
}

WX_EXPORT_METHOD_SYNC(@selector(getStartPosition:))
// 获取音效文件路径
- (int64_t)getStartPosition:(int)effectID {
    return [RtcNativePlugin getStartPosition:effectID];
}

WX_EXPORT_METHOD_SYNC(@selector(setLoopCount:loopCount:))
// 获取音效文件路径
- (void)setLoopCount:(int)effectID loopCount:(int)loopCount {
    [RtcNativePlugin setLoopCount:effectID loopCount:loopCount];
}

WX_EXPORT_METHOD_SYNC(@selector(getLoopCount:))
// 获取音效文件路径
- (int)getLoopCount:(int)effectID {
    return [RtcNativePlugin getLoopCount:effectID];
}

@end
