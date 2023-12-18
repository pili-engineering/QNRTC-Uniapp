//
//  QNRtcEvent.h
//  QNRtcUniPlugin
//
//  Created by 童捷 on 2023/10/8.
//  Copyright © 2023 DCloud. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreMedia/CoreMedia.h>
@class QNRtcNative;

@protocol QNRtcEngineDelegate <NSObject>

@optional

/*!
 * @abstract 音频输出设备变更的回调，主动调用的 `+ (void)setAudioRouteToSpeakerphone:(BOOL)audioRouteToSpeakerphone;` 不会有该回调
 *
 * @param params Audio Route 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioRouteChanged:(NSDictionary *)params;

@end


@protocol QNRtcAudioMusicMixerDelegate <NSObject>

@optional

- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMusicMixerStateChanged:(NSDictionary *)params;
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMusicMixerMixing:(NSDictionary *)params;
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMusicMixerError:(NSDictionary *)params;

@end

@protocol QNRtcAudioEffectMixerDelegate <NSObject>

@optional

- (void)rtcNative:(QNRtcNative *)rtcNative onAudioEffectMixerFinished:(NSDictionary *)params;
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioEffectMixerError:(NSDictionary *)params;

@end



@protocol QNRtcClientDelegate <NSObject>

@optional

/*!
 * @abstract 房间状态回调
 *
 * @param params 当前房间状态信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onConnectionStateChanged:(NSDictionary *)params;

/*!
 * @abstract 远端用户加入房间回调
 *
 * @param params 远端用户信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUserJoined:(NSDictionary *)params;

/*!
 * @abstract 远端用户重连中状态回调
 *
 * @param params 远端用户信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUserReconnecting:(NSDictionary *)params;

/*!
 * @abstract 远端用户重连完成回调
 *
 * @param params 远端用户信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUserReconnected:(NSDictionary *)params;

/*!
 * @abstract 远端用户离开房间回调
 *
 * @param params 远端用户信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUserLeft:(NSDictionary *)params;

/*!
 * @abstract 远端用户发布成功回调
 *
 * @param params 远端用户发布的 Track 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUserPublished:(NSDictionary *)params;

/*!
 * @abstract 远端用户取消发布成功回调
 *
 * @param params 远端用户发布的 Track 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUserUnpublished:(NSDictionary *)params;

/*!
 * @abstract 订阅远端音频 Track 成功回调
 *
 * @param params 订阅远端的音频 Track 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioSubscribed:(NSDictionary *)params;

/*!
 * @abstract 订阅远端视频 Track 成功回调
 *
 * @param params 订阅远端的视频 Track 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onVideoSubscribed:(NSDictionary *)params;

/*!
 * @abstract 远端视频 Track 首帧渲染回调
 *
 * @param params 远端用户视频 Track 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onFirstVideoRender:(NSDictionary *)params;

/*!
 * @abstract 自定义消息回调
 *
 * @param params 消息内容
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onMessageReceived:(NSDictionary *)params;

/*!
 * @abstract 单人转推、合流转推开始回调
 *
 * @param params 转推任务信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onStartLiveStreaming:(NSDictionary *)params;

/*!
 * @abstract 单人转推、合流转推停止回调
 *
 * @param params 转推任务信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onStoppedLiveStreaming:(NSDictionary *)params;

/*!
 * @abstract 合流转推更新布局完成回调
 *
 * @param params 转推任务信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onUpdatedLiveStreaming:(NSDictionary *)params;

/*!
 * @abstract 单人转推、合流转推 Error 回调
 *
 * @param params 转推任务报错信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onErrorLiveStreaming:(NSDictionary *)params;

@end

@protocol QNRtcTrackDelegate <NSObject>

@optional

/*!
 * @abstract 订阅的远端视频 profile 发生变化时的回调
 *
 * @param params 当前的 profile 信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onVideoProfileChanged:(NSDictionary *)params;

/*!
 * @abstract 订阅的远端视频 Track 开关静默时的回调
 *
 * @param params 静默信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onVideoMuteStateChanged:(NSDictionary *)params;

/*!
 * @abstract 订阅的远端音频 Track 开关静默时的回调
 *
 * @param params 静默信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMuteStateChanged:(NSDictionary *)params;

/*!
 * @abstract CVPixelBuffer 回调
 *
 * @param pixelBuffer pixelBuffer 数据回调
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onRemoteVideoFrame:(CVPixelBufferRef)pixelBuffer trackID:(NSString *)trackID;

/*!
 * @abstract CMSampleBuffer 回调
 *
 * @param sampleBuffer sampleBuffer 数据回调
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onLocalVideoFrame:(CMSampleBufferRef)sampleBuffer;

@end

@protocol QNRtcAudioMixDelegate <NSObject>

@optional

/*!
 * @abstract 混音状态回调
 *
 * @param params 当前混音状态信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMixStateChanged:(NSDictionary *)params;

/*!
 * @abstract 混音进度回调
 *
 * @param params 混音进度
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onMixing:(NSDictionary *)params;

/*!
 * @abstract 混音 Error 回调
 *
 * @param params 报错信息
 */
- (void)rtcNative:(QNRtcNative *)rtcNative onAudioMixError:(NSDictionary *)params;

@end
