//
//  QNRtcUniAdapter.h
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/29.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>
#import "QNRtcLocalTrack.h"
#import <QNRTCKit/QNRTCKit.h>

@class QNCameraVideoTrackSetting;
@class QNScreenVideoTrackSetting;
@class QNBeautySetting;
@class QNPushImageSetting;
@class QNWaterMarkSetting;

// 处理 Uni-App 和 Native 的数据转换
@interface QNRtcUniAdapter : NSObject

@end

@interface QNRtcUniAdapter (UniToNative)

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniConfig Uni RTC配置信息
 *
 * @return Native RTC配置信息
 */
+ (QNRTCConfiguration *)getNativeConfig:(NSDictionary *)uniConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniMicrophoneAudioTrackConfig Uni 麦克风音频 Track 配置信息
 *
 * @return Native 麦克风音频 Track 配置信息
 */
+ (QNMicrophoneAudioTrackConfig *)getNativeMicrophoneAudioTrackConfig:(NSDictionary *)uniMicrophoneAudioTrackConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniCustomAudioTrackConfig Uni 自定义音频 Track 配置信息
 *
 * @return Native 自定义音频 Track 配置信息
 */
+ (QNCustomAudioTrackConfig *)getNativeCustomAudioTrackConfig:(NSDictionary *)uniCustomAudioTrackConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniCameraVideoTrackConfig Uni 相机视频 Track 配置信息
 *
 * @return Native 相机视频 Track 配置信息
 */
+ (QNCameraVideoTrackConfig *)getNativeCameraVideoTrackConfig:(NSDictionary *)uniCameraVideoTrackConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniCameraVideoTrackSetting Uni 相机视频 Track 方法参数配置信息
 *
 * @return Native 相机视频 Track 方法参数配置信息
 */
+ (QNCameraVideoTrackSetting *)getNativeCameraVideoTrackSetting:(NSDictionary *)uniCameraVideoTrackSetting;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniScreenVideoTrackConfig Uni 录屏视频 Track 配置信息
 *
 * @return Native 录屏视频 Track 配置信息
 */
+ (QNScreenVideoTrackConfig *)getNativeScreenVideoTrackConfig:(NSDictionary *)uniScreenVideoTrackConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniScreenVideoTrackSetting Uni 录屏视频 Track 方法参数配置信息
 *
 * @return Native 录屏视频 Track 方法参数配置信息
 */
+ (QNScreenVideoTrackSetting *)getNativeScreenVideoTrackSetting:(NSDictionary *)uniScreenVideoTrackSetting;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniCustomVideoTrackConfig Uni 自定义视频 Track 配置信息
 *
 * @return Native 自定义视频 Track 配置信息
 */
+ (QNCustomVideoTrackConfig *)getNativeCustomVideoTrackConfig:(NSDictionary *)uniCustomVideoTrackConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param nativePublishLocalTracks Native 待发布的 Local Tracks
 * @param nativePublishRtcLocalTracks Native 待发布的 Rtc Local Tracks
 * @param uniPublishLocalTracks Uni 待发布的 Local Tracks 信息
 * @param createdNativeRtcLocalTracks Native 已创建的 Rtc Local Tracks
 */
+ (void)getNativePublishLocalTracks:(NSMutableArray<QNLocalTrack *> **)nativePublishLocalTracks
        nativePublishRtcLocalTracks:(NSMutableArray<QNRtcLocalTrack *> **)nativePublishRtcLocalTracks
          fromUniPublishLocalTracks:(NSArray<NSDictionary *> *)uniPublishLocalTracks
    withCreatedNativeRtcLocalTracks:(NSArray<QNRtcLocalTrack *> *)createdNativeRtcLocalTracks;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniUnPublishLocalTracks Uni 待取消发布的 Local Tracks
 * @param publishedLocalTracks Native 已发布的 Local Tracks
 *
 * @return Native 待取消发布的 Local Tracks
 */
+ (NSArray<QNLocalTrack *> *)getNativeUnPublishLocalTracks:(NSArray<NSDictionary *> *)uniUnPublishLocalTracks publishedLocalTracks:(NSArray<QNLocalTrack *> *)publishedLocalTracks;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniSubscribeRemoteTracks Uni 待订阅的 Remote Tracks
 *
 * @return Native 待订阅的 Remote Tracks
 */
+ (NSArray<QNRemoteTrack *> *)getNativeSubscribeRemoteTracks:(NSArray<NSDictionary *> *)uniSubscribeRemoteTracks;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniUnSubscribeRemoteTracks Uni 待取消订阅的 Remote Tracks
 * @param subscribedRemoteTracks Native 已订阅的 Remote Tracks
 *
 * @return Native 待取消订阅的 Remote Tracks
 */
+ (NSArray<QNRemoteTrack *> *)getNativeUnSubscribeRemoteTracks:(NSArray<NSDictionary *> *)uniUnSubscribeRemoteTracks subscribedRemoteTracks:(NSArray<QNRemoteTrack *> *)subscribedRemoteTracks;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniDirectLiveStreamingConfig Uni 单人转推配置信息
 *
 * @return Native 单人转推配置信息
 */
+ (QNDirectLiveStreamingConfig *)getNativeDirectLiveStreamingConfig:(NSDictionary *)uniDirectLiveStreamingConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniTranscodingLiveStreamingConfig Uni 合流转推配置信息
 *
 * @return Native 合流转推配置信息
 */
+ (QNTranscodingLiveStreamingConfig *)getNativeTranscodingLiveStreamingConfig:(NSDictionary *)uniTranscodingLiveStreamingConfig;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniTranscodingLiveStreamingTracks Uni 合流布局配置信息
 *
 * @return Native 合流布局配置信息
 */
+ (NSArray <QNTranscodingLiveStreamingTrack *> *)getNativeTranscodingLiveStreamingTracks:(NSArray<NSDictionary *> *)uniTranscodingLiveStreamingTracks;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniProfile Uni 大小流 profile
 *
 * @return Native 大小流 profile
 */
+ (QNTrackProfile)getNativeProfile:(NSString *)uniProfile;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniCaptureVideoOrientation Uni 摄像头旋转方向
 *
 * @return Native 摄像头旋转方向
 */
+ (AVCaptureVideoOrientation)getNativeCaptureVideoOrientation:(NSString *)uniCaptureVideoOrientation;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniSessionPreset Uni 预览分辨率
 *
 * @return Native 预览分辨率
 */
+ (AVCaptureSessionPreset)getNativeSessionPreset:(NSString *)uniSessionPreset;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniFillMode Uni 预览填充方式
 *
 * @return Native 预览填充方式
 */
+ (QNVideoFillModeType)getNativeFillMode:(NSString *)uniFillMode;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniBeautySetting Uni 美颜配置信息
 *
 * @return Native 美颜配置信息
 */
+ (QNBeautySetting *)getNativeBeautySetting:(NSDictionary *)uniBeautySetting;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniPushImageSetting Uni 图片推流配置信息
 *
 * @return Native 图片推流配置信息
 */
+ (QNPushImageSetting *)getNativePushImageSetting:(NSDictionary *)uniPushImageSetting;

/*!
 * @abstract Uni-App配置 转换 Native配置
 *
 * @param uniWaterMarkSetting Uni 水印配置信息
 * @param nativeSessionPresetDimensions 预览分辨率宽高
 *
 * @return Native 水印配置信息
 */
+ (QNWaterMarkSetting *)getNativeWaterMarkSetting:(NSDictionary *)uniWaterMarkSetting nativeSessionPresetDimensions:(CMVideoDimensions)nativeSessionPresetDimensions;

@end

// 处理 Uni-App 和 Native 的数据转换
@interface QNRtcUniAdapter (NativeToUni)

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeConnectionState Native 房间状态信息
 *
 * @return Uni 房间状态信息
 */
+ (NSString *)getUniConnectionState:(QNConnectionState)nativeConnectionState;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeProfile Native 大小流 profile
 *
 * @return Uni 大小流 profile
 */
+ (NSString *)getUniProfile:(QNTrackProfile)nativeProfile;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeCaptureVideoOrientation Native 摄像头旋转方向
 *
 * @return Uni 摄像头旋转方向
 */
+ (NSString *)getUniCaptureVideoOrientation:(AVCaptureVideoOrientation)nativeCaptureVideoOrientation;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeFillMode Native 填充模式
 *
 * @return Uni 填充模式
 */
+ (NSString *)getUniFillMode:(QNVideoFillModeType)nativeFillMode;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeRtcLocalTrack Native 本地 Track 信息
 *
 * @return Uni 本地 Track 信息
 */
+ (NSDictionary *)getUniLocalTrack:(QNRtcLocalTrack *)nativeRtcLocalTrack;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeUserNetworkQuality Native 用户网络质量
 *
 * @return Uni 用户网络质量
 */
+ (NSDictionary *)getUniUserNetworkQuality:(QNNetworkQuality *)nativeUserNetworkQuality;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeLocalAudioTrackStats Native 本地音频 Track 发布状态信息
 *
 * @return Uni 本地音频 Track 发布状态信息
 */
+ (NSDictionary *)getUniLocalAudioTrackStats:(NSDictionary *)nativeLocalAudioTrackStats;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeLocalVideoTrackStats Native 本地视频 Track 发布状态信息
 *
 * @return Uni 本地视频 Track 发布状态信息
 */
+ (NSDictionary *)getUniLocalVideoTrackStats:(NSDictionary *)nativeLocalVideoTrackStats;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeRemoteAudioTrackStats Native 远端音频 Track 发布状态信息
 *
 * @return Uni 远端音频 Track 发布状态信息
 */
+ (NSDictionary *)getUniRemoteAudioTrackStats:(NSDictionary *)nativeRemoteAudioTrackStats;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeRemoteVideoTrackStats Native 远端视频 Track 发布状态信息
 *
 * @return Uni 远端视频 Track 发布状态信息
 */
+ (NSDictionary *)getUniRemoteVideoTrackStats:(NSDictionary *)nativeRemoteVideoTrackStats;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativePublishingLocalTracks Native 正在发布的 Rtc Local Track
 * @param onPublished 发布是否成功
 * @param error 报错信息
 *
 * @return Uni 本地 Track 的发布情况
 */
+ (NSDictionary *)getUniPublishCallBackWithNativePublishingLocalTracks:(NSArray<QNRtcLocalTrack *> *)nativePublishingLocalTracks onPublished:(BOOL)onPublished error:(NSError *)error;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param deviceType Native 音频输出设备类型
 *
 * @return Uni 音频输出设备类型
 */
+ (NSDictionary *)getUniAudioDeviceChangedCallBackWithDeviceType:(QNAudioDeviceType)deviceType;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param state Native 当前房间状态
 * @param info Native 重连错误信息
 *
 * @return Uni 房间状态信息
 */
+ (NSDictionary *)getUniConnectionStateChangedCallBackWithRoomState:(QNConnectionState)state disconnectedInfo:(QNConnectionDisconnectedInfo *)info;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param userID Native 加入房间的用户名
 * @param userData Native 用户信息
 *
 * @return Uni 加入房间的用户信息
 */
+ (NSDictionary *)getUniUserJoinedCallBackWithUserID:(NSString *)userID userData:(NSString *)userData;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param userID Native 正在重连的用户名
 *
 * @return Uni 正在重连的用户信息
 */
+ (NSDictionary *)getUniUserReconnectingCallBackWithUserID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param userID Native 重连成功的用户名
 *
 * @return Uni 重连成功的用户信息
 */
+ (NSDictionary *)getUniUserReconnectedCallBackWithUserID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param userID Native 离开房间的用户名
 *
 * @return Uni 离开房间的用户信息
 */
+ (NSDictionary *)getUniUserLeftCallBackWithUserID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param tracks Native 远端发布的 Track 信息
 * @param userID Native 发布 Track 的用户名
 *
 * @return Uni 远端发布的 Track 信息
 */
+ (NSDictionary *)getUniUserPublishedCallBackWithTracks:(NSArray<QNRemoteTrack *> *)tracks userID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param tracks Native 远端取消发布的 Track 信息
 * @param userID Native 取消发布 Track 的用户名
 *
 * @return Uni 远端取消发布的 Track 信息
 */
+ (NSDictionary *)getUniUserUnpublishedCallBackWithTracks:(NSArray<QNRemoteTrack *> *)tracks userID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param audioTracks Native 订阅远端的音频 Track 信息
 * @param userID Native 发布音频 Track 的用户名
 *
 * @return Uni 订阅远端音频 Track 信息
 */
+ (NSDictionary *)getUniAudioSubscribedCallBackWithAudioTracks:(NSArray<QNRemoteAudioTrack *> *)audioTracks userID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param videoTrack Native 订阅远端的视频 Track 信息
 * @param userID Native 发布视频 Track 的用户名
 *
 * @return Uni 订阅远端视频 Track 信息
 */
+ (NSDictionary *)getUniVideoSubscribedCallBackWithVideoTrack:(QNRemoteVideoTrack *)videoTrack userID:(NSString *)userID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param message Native 接收到的房间消息
 *
 * @return Uni 接收到房间消息的回调信息
 */
+ (NSDictionary *)getUniMessageReceivedCallBackWithMessage:(QNMessageInfo *)message;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param streamID Native 开始转推的 StreamID
 *
 * @return Uni 开始转推的 StreamID
 */
+ (NSDictionary *)getUniStartLiveStreamingCallBackWithStreamID:(NSString *)streamID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param streamID Native 停止转推的 StreamID
 *
 * @return Uni 停止转推的 StreamID
 */
+ (NSDictionary *)getUniStoppedLiveStreamingCallBackWithStreamID:(NSString *)streamID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param streamID Native 更新布局信息的 StreamID
 *
 * @return Uni 更新布局信息的 StreamID
 */
+ (NSDictionary *)getUniUpdatedLiveStreamingCallBackWithStreamID:(NSString *)streamID;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param streamID Native 合流报错的 StreamID
 * @param errorInfo Native 报错信息
 *
 * @return Uni 合流报错信息
 */
+ (NSDictionary *)getUniErrorLiveStreamingCallBackWithStreamID:(NSString *)streamID errorInfo:(QNLiveStreamingErrorInfo *)errorInfo;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param trackID Native 远端更新 Muted 的 trackID
 * @param isMuted Native 该 Track 的 muted 状态
 *
 * @return Uni 远端静默信息
 */
+ (NSDictionary *)getUniMuteStateChangedCallBackWithTrackID:(NSString *)trackID isMuted:(BOOL)isMuted;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param trackID Native 订阅 profile 改变的 trackID
 * @param profile Native 变化后的 profile
 *
 * @return Uni 订阅远端 profile 改变的回调信息
 */
+ (NSDictionary *)getUniVideoProfileChangedCallBackWithTrackID:(NSString *)trackID profile:(QNTrackProfile)profile;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param playState Native 混音状态
 *
 * @return Uni 混音状态
 */
+ (NSDictionary *)getUniAudioMixStateChangedCallBackWithPlayState:(QNAudioPlayState)playState;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param currentTime Native 混音当前进度
 *
 * @return Uni 混音当前进度
 */
+ (NSDictionary *)getUniMixingCallBackWithCurrentTime:(NSTimeInterval)currentTime;

/*!
 * @abstract Native回调信息 转换 Uni-App回调信息
 *
 * @param error Native 混音报错信息
 *
 * @return Uni 混音报错信息
 */
+ (NSDictionary *)getUniAudioMixErrorCallBackWithError:(NSError *)error;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeVideoMaxZoomFactor Native 最大缩放比例
 *
 * @return Uni 可缩放范围
 */
+ (NSArray<NSNumber *> *)getUniZooms:(CGFloat)nativeVideoMaxZoomFactor;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeRemoteUsers Native 远端用户信息
 *
 * @return Uni 远端用户信息
 */
+ (NSArray<NSDictionary *> *)getUniRemoteUsers:(NSArray<QNRemoteUser *>*)nativeRemoteUsers;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativePublishedTracks Native 已发布的本地 Track 列表
 *
 * @return Uni 已发布的本地 Track 列表
 */
+ (NSArray<NSDictionary *> *)getUniPublishedTracks:(NSArray<QNTrack *> *)nativePublishedTracks;

/*!
 * @abstract Native配置 转换 Uni-App配置
 *
 * @param nativeSubscribedTracks Native 已订阅该用户的 Track 列表
 * @param userID Native 用户名
 *
 * @return Uni 已订阅该用户的 Track 列表
 */
+ (NSArray<NSDictionary *> *)getUniSubscribedTracks:(NSArray<QNTrack *> *)nativeSubscribedTracks userID:(NSString *)userID;

@end

// 相机 Track 初始化时使用的方法参数配置类
@interface QNCameraVideoTrackSetting : NSObject

/*!
 * @abstract 摄像头旋转方向
 */
@property (nonatomic, assign) AVCaptureDevicePosition captureDevicePosition;

/*!
 * @abstract 预览分辨率
 */
@property (nonatomic, copy) AVCaptureSessionPreset sessionPreset;

/*!
 * @abstract 采集编码帧率
 */
@property (nonatomic, strong) NSNumber *videoFrameRate;

@end

// 录屏 Track 初始化时使用的方法参数配置类
@interface QNScreenVideoTrackSetting : NSObject

/*!
 * @abstract 录屏采集帧率
 */
@property (nonatomic, strong) NSNumber *screenRecorderFrameRate;

@end

// 美颜参数配置类
@interface QNBeautySetting : NSObject

/*!
 * @abstract 美颜开关
 */
@property (nonatomic, strong) NSNumber *enabled;

/*!
 * @abstract 美颜程度
 */
@property (nonatomic, strong) NSNumber *smoothLevel;

/*!
 * @abstract 美白程度
 */
@property (nonatomic, strong) NSNumber *whiten;

/*!
 * @abstract 红润程度
 */
@property (nonatomic, strong) NSNumber *redden;

@end

// 图片推流参数配置类
@interface QNPushImageSetting : NSObject

/*!
 * @abstract 图片实例
 */
@property (nonatomic, strong) UIImage *image;

/*!
 * @abstract 宽（暂未使用）
 */
@property (nonatomic, strong) NSNumber *width;

/*!
 * @abstract 高（暂未使用）
 */
@property (nonatomic, strong) NSNumber *height;

@end

// 水印参数配置类
@interface QNWaterMarkSetting : NSObject

/*!
 * @abstract 图片实例
 */
@property (nonatomic, strong) UIImage *image;

/*!
 * @abstract 横轴起始点
 */
@property (nonatomic, strong) NSNumber *x;

/*!
 * @abstract 纵轴起始点
 */
@property (nonatomic, strong) NSNumber *y;

@end

