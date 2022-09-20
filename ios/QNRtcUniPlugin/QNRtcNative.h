//
//  QNRtcNative.h
//  QNRtcUniPlugin
//
//  Created by WorkSpace_Sun on 2021/10/29.
//

#import <Foundation/Foundation.h>
#import <UIKIT/UIKIT.h>
#import "QNRtcEvent.h"

#define RtcNativePlugin [QNRtcNative sharedInstance]

@interface QNRtcNative : NSObject

/*!
 * @abstract 获取 QNRtcNative 实例对象
 *
 * @return QNRtcNative 单例
 */
+ (instancetype)sharedInstance;

@end

@interface QNRtcNative (QNRtcEngine)

/*!
 * @abstract 设置 QNRtcEngineDelegate 代理
 *
 * @param delegate QNRtcEngineDelegate 协议代理
 */
- (void)setEngineDelegate:(id<QNRtcEngineDelegate>)delegate;

/*!
 * @abstract 初始化配置信息
 *
 * @param configParam 配置信息
 */
- (void)configRTC:(NSDictionary *)configParam;

/*!
 * @abstract 取消初始化
 */
- (void)deinit;

/*!
 * @abstract 创建 RTC Client
 */
- (void)createRTCClient;

/*!
 * @abstract 创建一路以麦克风采集为数据源的音频 Track
 *
 * @param trackConfig 麦克风音频 Track 配置信息
 *
 * @return 麦克风音频 Track 信息
 */
- (NSDictionary *)createMicrophoneAudioTrack:(NSDictionary *)trackConfig;

/*!
 * @abstract 创建一路以外部数据导入为数据源的音频 Track
 *
 * @param trackConfig 外部数据音频 Track 配置信息
 *
 * @return 外部数据音频 Track 信息
 */
- (NSDictionary *)createCustomAudioTrack:(NSDictionary *)trackConfig;

/*!
 * @abstract 创建一路以摄像头采集为数据源的视频 Track
 *
 * @param trackConfig 摄像头视频 Track 配置信息
 *
 * @return 摄像头视频 Track 信息
 */
- (NSDictionary *)createCameraVideoTrack:(NSDictionary *)trackConfig;

/*!
 * @abstract 创建一路以屏幕录制采集为数据源的视频 Track
 *
 * @param trackConfig 屏幕录制视频 Track 配置信息
 *
 * @return 屏幕录制视频 Track 信息
 */
- (NSDictionary *)createScreenVideoTrack:(NSDictionary *)trackConfig;

/*!
 * @abstract 创建一路以外部数据导入为数据源的视频 Track
 *
 * @param trackConfig 外部数据视频 Track 配置信息
 *
 * @return 外部数据视频 Track 信息
 */
- (NSDictionary *)createCustomVideoTrack:(NSDictionary *)trackConfig;

/*!
 * @abstract 是否将声音从扬声器输出。
 *
 * @discussion 传入 YES 时，强制声音从扬声器输出。
 */
- (void)setAudioRouteToSpeakerphone:(BOOL)audioRouteToSpeakerphone;

/*!
 * @abstract 开启文件日志
 *
 * @discussion 为了不错过日志，建议在 App 启动时即开启，日志文件位于 App Container/Library/Caches/Pili/Logs 目录下以 QNRTC+当前时间命名的目录内
 * 注意：文件日志功能主要用于排查问题，打开文件日志功能会对性能有一定影响，上线前请记得关闭文件日志功能！
*/
- (void)enableFileLogging;

@end

@interface QNRtcNative (QNRtcClient)

/*!
 * @abstract 设置 QNRtcClientDelegate 代理
 *
 * @param delegate QNRtcClientDelegate 协议代理
 */
- (void)setClientDelegate:(id<QNRtcClientDelegate>)delegate;

/*!
 * @abstract 加入房间
 *
 * @param token  房间凭证
 * @param userData  用户信息
 */
- (void)join:(NSString *)token userData:(NSString *)userData;

/*!
 * @abstract 退出房间
 */
- (void)leave;

/*!
 * @abstract 获取房间状态
 *
 * @return 房间状态
 */
- (NSString *)getConnectionState;

/*!
 * @abstract 远端用户列表
 *
 * @return 远端用户数组
 */
- (NSArray<NSDictionary *> *)getRemoteUsers;

/*!
 * @abstract 发布 Tracks
 *
 * @param tracks 待发布的 Track 信息
 * @param callback 发布回调函数
 */
- (void)publish:(NSArray<NSDictionary *> *)tracks callback:(void(^)(id result))callback;

/*!
 * @abstract 取消发布 Tracks
 *
 * @param tracks 待取消发布的 Track 信息
 */
- (void)unpublish:(NSArray<NSDictionary *> *)tracks;

/*!
 * @abstract 获取已发布 Track 列表
 *
 * @return 已发布的 Track 数组
 */
- (NSArray<NSDictionary *> *)getPublishedTracks;

/*!
 * @abstract 订阅 Tracks
 *
 * @param tracks 待订阅的 Track 信息
 */
- (void)subscribe:(NSArray<NSDictionary *> *)tracks;

/*!
 * @abstract 取消订阅 Tracks
 *
 * @param tracks 待取消订阅的 Track 信息
 */
- (void)unsubscribe:(NSArray<NSDictionary *> *)tracks;

/*!
 * @abstract 是否自动订阅远端的流，默认为 YES
 *
 * @param autoSubscribe YES/NO
 */
- (void)setAutoSubscribe:(BOOL)autoSubscribe;

/*!
 * @abstract 获取指定用户已被自己订阅的 Tracks
 *
 * @param userID 用户名
 *
 * @return 已被订阅的 Track 数组
 */
- (NSArray<NSDictionary *> *)getSubscribedTracks:(NSString *)userID;

/*!
 * @abstract 获取某个用户的网路质量等级
 *
 * @param userID 用户名
 *
 * @return 用户网络质量信息
 */
- (NSDictionary *)getUserNetworkQuality:(NSString *)userID;

/*!
 * @abstract 获取本地音频传输统计信息
 *
 * @return 本地音频传输统计信息
 */
- (NSDictionary *)getLocalAudioTrackStats;

/*!
 * @abstract 获取本地视频传输统计信息
 *
 * @return 本地视频传输统计信息
 */
- (NSDictionary *)getLocalVideoTrackStats;

/*!
 * @abstract 获取远端用户音频传输统计信息
 *
 * @return 远端用户音频传输统计信息
 */
- (NSDictionary *)getRemoteAudioTrackStats;

/*!
 * @abstract 获取远端用户视频传输统计信息
 *
 * @return 远端用户视频传输统计信息
 */
- (NSDictionary *)getRemoteVideoTrackStats;

/*!
 * @abstract 开启单路转推
 *
 * @param config 单路转推配置
 */
- (void)startLiveStreamingWithDirect:(NSDictionary *)config;

/*!
 * @abstract 开启合流转推
 *
 * @param config 合流转推配置
 */
- (void)startLiveStreamingWithTranscoding:(NSDictionary *)config;

/*!
 * @abstract 停止单路转推
 *
 * @param config 单路转推配置
 */
- (void)stopLiveStreamingWithDirect:(NSDictionary *)config;

/*!
 * @abstract 停止合流转推
 *
 * @param config 合流转推配置
 */
- (void)stopLiveStreamingWithTranscoding:(NSDictionary *)config;

/*!
 * @abstract 将对应的音视频 Track 加入合流
 *
 * @param streamID 合流任务 ID
 * @param transcodingTracks 合流 Track 配置
 */
- (void)setTranscodingLiveStreamingTracks:(NSString *)streamID transcodingTracks:(NSArray<NSDictionary *> *)transcodingTracks;

/*!
 * @abstract 将对应的音视频 Track 从合流中移除
 *
 * @param streamID 合流任务 ID
 * @param transcodingTracks 合流 Track 配置
 */
- (void)removeTranscodingLiveStreamingTracks:(NSString *)streamID transcodingTracks:(NSArray<NSDictionary *> *)transcodingTracks;

/*!
 * @abstract 发送消息给 users 数组中的所有 userID
 *
 * @param message 消息内容
 * @param users 用户列表，为空时默认给房间内所有用户发送该消息
 * @param messageId 消息 ID
 */
- (void)sendMessage:(NSString *)message users:(NSArray<NSString *> *)users messageId:(NSString *)messageId;

@end

@interface QNRtcNative (QNRtcSurfaceView)

/*!
 * @abstract 发送消息给 users 数组中的所有 userID
 *
 * @param renderView    view基座
 * @param local             0：local 1：remote
 * @param identifyID       本地 Track 标识
 * @param userID           用户名
 * @param trackID          远端 Track 标识
 */
- (void)play:(UIView *)renderView
       local:(BOOL)local
      userID:(NSString *)userID
  identityID:(NSString *)identifyID
     trackID:(NSString *)trackID;

@end

@interface QNRtcNative (QNRtcTrack)

/*!
 * @abstract 设置 QNRtcTrackDelegate 代理
 *
 * @param delegate QNRtcTrackDelegate 协议代理
 */
- (void)setTrackDelegate:(id<QNRtcTrackDelegate>)delegate;

/*!
 * @abstract 获取 Track 静音状态
 *
 * @param identifyID Track 标识
 *
 * @return Track 静音状态
 *
 * @discussion QNTrack 属性方法
 */
- (NSNumber *)getMuted:(NSString *)identifyID;

/*!
 * @abstract 设置 Track 静音状态
 *
 * @param identifyID Track 标识
 *
 * @discussion QNLocalTrack 属性方法
 */
- (void)setMuted:(NSString *)identifyID muted:(BOOL)muted;

/*!
 * @abstract 获取该 Track 是否已被订阅
 *
 * @param identifyID Track 标识
 *
 * @return 订阅状态
 *
 * @discussion QNRemoteTrack 属性方法
 */
- (NSNumber *)isSubscribed:(NSString *)identifyID;

/*!
 * @abstract 发送 SEI
 *
 * @param identifyID Track 标识
 * @param message 消息内容
 * @param repeatCount 重复发送次数，-1 为永久发送
 *
 * @discussion QNLocalVideoTrack 属性方法
 */
- (void)sendSEI:(NSString *)identifyID message:(NSString *)message repeatCount:(NSNumber *)repeatCount;

/*!
 * @abstract 获取远端视频 Track 是否支持大小流
 *
 * @param identifyID Track 标识
 *
 * @return 是否支持
 *
 * @discussion QNRemoteVideoTrack 属性方法
 */
- (NSNumber *)isMultiProfileEnabled:(NSString *)identifyID;

/*!
 * @abstract 获取远端视频 Track 的当前流等级
 *
 * @param identifyID Track 标识
 *
 * @return 该 Track 当前流等级
 *
 * @discussion QNRemoteVideoTrack 属性方法
 */
- (NSString *)getProfile:(NSString *)identifyID;

/*!
 * @abstract 设置远端视频 Track 的当前流等级
 *
 * @param identifyID Track 标识
 *
 * @discussion QNRemoteVideoTrack 属性方法
 */
- (void)setProfile:(NSString *)identifyID profile:(NSString *)profile;

/*!
 * @abstract 设置远端 Track 的音量
 *
 * @param identifyID Track 标识
 *
 * @discussion QNRemoteAudioTrack 属性方法
 */
- (void)setRemoteVolume:(NSString *)identifyID volume:(NSNumber *)volume;

/*!
 * @abstract 获取远端 Track 的音量
 *
 * @param identifyID Track 标识
 *
 * @discussion QNRemoteAudioTrack 属性方法
 */
- (NSNumber *)getRemoteVolume:(NSString *)identifyID;

/*!
 * @abstract 设置前置摄像头预览镜像
 *
 * @param identifyID Track 标识
 * @param previewMirrorFrontFacing     是否镜像
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)previewMirrorFrontFacing:(NSString *)identifyID previewMirrorFrontFacing:(BOOL)previewMirrorFrontFacing;

/*!
 * @abstract 设置后置摄像头预览镜像
 *
 * @param identifyID Track 标识
 * @param previewMirrorRearFacing 是否镜像
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)previewMirrorRearFacing:(NSString *)identifyID previewMirrorRearFacing:(BOOL)previewMirrorRearFacing;

/*!
 * @abstract 设置前置摄像头编码镜像
 *
 * @param identifyID Track 标识
 * @param encodeMirrorFrontFacing 是否镜像
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)encodeMirrorFrontFacing:(NSString *)identifyID encodeMirrorFrontFacing:(BOOL)encodeMirrorFrontFacing;

/*!
 * @abstract 设置后置摄像头编码镜像
 *
 * @param identifyID Track 标识
 * @param encodeMirrorRearFacing 是否镜像
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)encodeMirrorRearFacing:(NSString *)identifyID encodeMirrorRearFacing:(BOOL)encodeMirrorRearFacing;

/*!
 * @abstract 开始摄像头采集
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)startCapture:(NSString *)identifyID;

/*!
 * @abstract 停止摄像头采集
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)stopCapture:(NSString *)identifyID;

/*!
 * @abstract 切换摄像头
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)switchCamera:(NSString *)identifyID;

/*!
 * @abstract 开启闪光灯
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)turnLightOn:(NSString *)identifyID;

/*!
 * @abstract 关闭闪光灯
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)turnLightOff:(NSString *)identifyID;

/*!
 * @abstract 相机对焦
 *
 * @param identifyID Track 标识
 * @param x 焦点横坐标
 * @param y 焦点纵坐标
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)manualFocus:(NSString *)identifyID x:(NSNumber *)x y:(NSNumber *)y;

/*!
 * @abstract 设置摄像头旋转方向
 *
 * @param identifyID Track 标识
 * @param videoOrientation 旋转方向
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)setVideoOrientation:(NSString *)identifyID videoOrientation:(NSString *)videoOrientation;

/*!
 * @abstract 获取摄像头旋转方向
 *
 * @param identifyID Track 标识
 *
 * @return 当前摄像头旋转方向
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (NSString *)getVideoOrientation:(NSString *)identifyID;

/*!
 * @abstract 设置预览画面填充方式
 *
 * @param identifyID Track 标识
 * @param fillMode 填充方式
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)setFillMode:(NSString *)identifyID fillMode:(NSString *)fillMode;

/*!
 * @abstract 获取预览画面填充方式
 *
 * @param identifyID Track 标识
 *
 * @return 当前填充方式
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (NSString *)getFillMode:(NSString *)identifyID;

/*!
 * @abstract 设置预览分辨率
 *
 * @param identifyID Track 标识
 * @param sessionPreset 预览分辨率
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)setSessionPreset:(NSString *)identifyID sessionPreset:(NSString *)sessionPreset;

/*!
 * @abstract 获取可缩放范围区间
 *
 * @param identifyID Track 标识
 *
 * @return 摄像头可缩放范围
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (NSArray<NSNumber *> *)getZooms:(NSString *)identifyID;

/*!
 * @abstract 设置缩放比例
 *
 * @param identifyID Track 标识
 * @param zoom 缩放比例
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)setZoom:(NSString *)identifyID zoom:(NSNumber *)zoom;

/*!
 * @abstract 设置美颜参数
 *
 * @param identifyID Track 标识
 * @param beautySetting 美颜配置
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)setBeauty:(NSString *)identifyID beautySetting:(NSDictionary *)beautySetting;

/*!
 * @abstract 设置图片推流
 *
 * @param identifyID Track 标识
 * @param image 图片配置信息
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)pushImage:(NSString *)identifyID image:(NSDictionary *)image;

/*!
 * @abstract 设置水印
 *
 * @param identifyID Track 标识
 * @param waterMark 水印配置信息
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)setWaterMark:(NSString *)identifyID waterMark:(NSDictionary *)waterMark;

/*!
 * @abstract 清除水印
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法
 */
- (void)clearWaterMark:(NSString *)identifyID;

/*!
 * @abstract 销毁 Track
 *
 * @param identifyID Track 标识
 *
 * @discussion QNCameraVideoTrack 属性方法（目前只支持 QNCameraVideoTrack 调用）
 */
- (void)destroy:(NSString *)identifyID;

/*!
 * @abstract 获取设备是否支持录屏
 *
 * @return 是否支持
 *
 * @discussion QNScreenVideoTrack 属性方法
 */
- (NSNumber *)isScreenCaptureSupported;

/*!
 * @abstract 设置录屏帧率
 *
 * @param identifyID Track 标识
 * @param screenRecorderFrameRate 帧率
 *
 * @discussion QNScreenVideoTrack 属性方法
 */
- (void)setScreenRecorderFrameRate:(NSString *)identifyID screenRecorderFrameRate:(NSNumber *)screenRecorderFrameRate;

/*!
 * @abstract 设置本地 Track 的音量大小
 *
 * @param identifyID Track 标识
 * @param volume 音量大小
 *
 * @discussion QNMicrophoneAudioTrack 属性方法
 */
- (void)setVolume:(NSString *)identifyID volume:(NSNumber *)volume;

/*!
 * @abstract 创建 Audio Mixer
 *
 * @param identifyID Track 标识
 * @param url 混音资源路径
 *
 * @discussion QNMicrophoneAudioTrack 属性方法
 */
- (void)createAudioMixer:(NSString *)identifyID url:(NSString *)url;
/*!
 * @abstract 截图
 *
 * @param identifyID Track 标识
 *
 * @discussion QNLocalVideoTrack 与 QNRemoteVideoTrack 属性方法
 */
- (void)takeVideoSnapshot:(NSString *)identifyID;

@end

@interface QNRtcNative (QNRtcAudioMixer)

/*!
 * @abstract 设置 QNRtcAudioMixDelegate 代理
 *
 * @param delegate QNRtcAudioMixDelegate 协议代理
 */
- (void)setAudioMixDelegate:(id<QNRtcAudioMixDelegate>)delegate;

/*!
 * @abstract 设置混音资源路径
 *
 * @param identifyID Track 标识
 * @param url 资源路径
 */
- (void)setAudioURL:(NSString *)identifyID url:(NSString *)url;

/*!
 * @abstract 开始混音
 *
 * @param identifyID Track 标识
 * @param loopTimes 重复播放次数
 */
- (void)start:(NSString *)identifyID loopTimes:(NSNumber *)loopTimes;

/*!
 * @abstract 结束混音
 *
 * @param identifyID Track 标识
 */
- (void)stop:(NSString *)identifyID;

/*!
 * @abstract 恢复混音
 *
 * @param identifyID Track 标识
 */
- (void)resume:(NSString *)identifyID;

/*!
 * @abstract 暂停混音
 *
 * @param identifyID Track 标识
 */
- (void)pause:(NSString *)identifyID;

/*!
 * @abstract 跳转到指定时间点播放
 *
 * @param identifyID Track 标识
 * @param timeUs 时间点 单位us
 */
- (void)seekTo:(NSString *)identifyID timeUs:(NSNumber *)timeUs;

/*!
 * @abstract 设置混音音量
 *
 * @param identifyID Track 标识
 * @param microphoneVolume 麦克风输入音量
 * @param musicVolume 音乐输入音量
 */
- (void)setMixingVolume:(NSString *)identifyID microphoneVolume:(NSNumber *)microphoneVolume musicVolume:(NSNumber *)musicVolume;

/*!
 * @abstract 设置本地播放音量
 *
 * @param identifyID Track 标识
 * @param volume 音量大小
 */
- (void)setPlayingVolume:(NSString *)identifyID volume:(NSNumber *)volume;

/*!
 * @abstract 设置返听
 *
 * @param identifyID Track 标识
 * @param playBack 是否开启
 */
- (void)setPlayBack:(NSString *)identifyID playBack:(BOOL)playBack;

/*!
 * @abstract 获取资源总时长
 *
 * @param identifyID Track 标识
 *
 * @return 资源总时长
 */
- (NSNumber *)getDuration:(NSString *)identifyID;

/*!
 * @abstract 获取当前播放时间
 *
 * @param identifyID Track 标识
 *
 * @return 当前播放时间
 */
- (NSNumber *)getCurrentPosition:(NSString *)identifyID;

@end
