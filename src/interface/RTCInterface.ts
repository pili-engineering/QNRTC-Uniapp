import {
  QNRTCCameraFacing,
  QNRTCPolicy,
  QNRTCBwePolicy,
  QNRTCTrackKind,
  QNRenderMode,
  QNTrackProfile,
  QNNetworkGrade,
  QNConnectionDisconnectedReason,
  QNLiveStreamingErrorInfoCode,
  QNLiveStreamingErrorInfoType,
  QNRTCLogLevel,
  QNVideoWaterMarkSize,
  QNSessionPresetType,
  QNVideoFrameType,
} from "../enum/RTCEnum";
import { QNRemoteAudioTrack } from "../class/RTCRemoteAudioTrack";
import { QNRemoteVideoTrack } from "../class/RTCRemoteVideoTrack";
export * from "../enum/RTCEnum";

/**
 * QNRTC 初始化配置项
 */
export interface QNRTCConfiguration {
  /**
   * 媒体流的连接方式
   * @defaultValue `QNRTCPolicy.forceUDP`
   */
  policy: QNRTCPolicy;
  /**
   * 日志等级
   * @defaultValue `QNRTCLogLevel.info`
   */
  logLevel: QNRTCLogLevel;
  /**
   * 是否使用立体声
   * @defaultValue false
   * @remarks 只支持ios
   */
  stereo?: boolean;
  /**
   * 带宽评估策略
   * @defaultValue `QNRTCBwePolicy.TCC`
   * @remarks 只支持ios
   */
  bwePolicy?: QNRTCBwePolicy;
  /**
   *  是否允许和其它音频一起播放
   * @defaultValue true
   * @remarks 只支持ios
   */
  allowAudioMixWithOthers?: boolean;
  /**
   * 是否开启硬编
   * @defaultValue true
   * @remarks 只支持安卓
   */
  hWCodecEnabled?: boolean;
  /**
   * 是否固定分辨率
   * @defaultValue false
   * @remarks 只支持安卓
   */
  maintainResolution?: boolean;
  /**
   * 扩展配置
   * @remarks 只支持安卓
   */
  fieldTrials?: string;
  /**
   * 是否开启质量模式
   * @defaultValue false
   * @remarks 只支持安卓
   */
  encoderQualityMode?: boolean;
  /**
   * 是否开启ACE3
   * @defaultValue true
   * @remarks 只支持安卓
   */
}

/**
 * 麦克风采集配置
 */
export interface QNMicrophoneAudioTrackConfig {
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag?: string;
  /**
   * 码率 (单位 kbps)
   * @defaultValue 24
   */
  bitrate: number;
  /**
   * 位宽
   * @defaultValue 16
   * @remarks 只支持安卓
   */
  bitsPerSample?: number;
  /**
   * 声道数
   * @defaultValue 1
   * @remarks 只支持安卓
   */
  channelCount?: number;
  /**
   * 采样率（单位 KHz）
   * @defaultValue 48000
   * @remarks 只支持安卓
   */
  sampleRate?: number;
  /**
   * 是否开启通话模式
   * @defaultValue true
   * @remarks 只支持安卓
   */
  communicationModeOn?: boolean;
}

/**
 * 自定义音频采集配置
 * @internal 暂不支持自定义 track
 */
export interface QNCustomAudioTrackConfig {
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag?: string;
  /**
   * 码率 (单位 kbps)
   * @defaultValue 24
   */
  bitrate: number;
  /**
   * 位宽
   * @defaultValue 16
   * @remarks 只支持安卓
   */
  bitsPerSample?: number;
  /**
   * 声道数
   * @defaultValue 1
   * @remarks 只支持安卓
   */
  channelCount?: number;
  /**
   * 采样率（单位 KHz）
   * @defaultValue 48000
   * @remarks 只支持安卓
   */
  sampleRate?: number;
}

/**
 * QNCameraVideoTrackConfig
 * @description 摄像头采集配置项
 * @namespace
 */
export interface QNCameraVideoTrackConfig {
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag?: string;
  /**
   * 码率 (单位 kbps)
   * @defaultValue 24
   */
  bitrate: number;
  /**
   * 编码宽度
   * @defaultValue 640
   */
  width: number;
  /**
   * 编码高度
   * @defaultValue 480
   */
  height: number;
  /**
   * 是否开启大小流
   * @defaultValue false
   */
  multiStreamEnable: boolean;
  /**
   * 选择前后置摄像头
   * @defaultValue `QNRTCCameraFacing.front`
   */
  cameraFacing: QNRTCCameraFacing;
  /**
   * 帧率
   * @defaultValue 20
   * @remarks 只支持安卓
   */
  frameRate?: number;
  /**
   * 采集宽度
   * @defaultValue 640
   * @remarks 只支持安卓
   */
  captureWidth?: number;
  /**
   * 采集高度
   * @defaultValue 480
   * @remarks 只支持安卓
   */
  captureHeight?: number;
  /**
   * 采集帧率
   * @defaultValue 20
   * @remarks 只支持安卓
   */
  captureFrameRate?: number;
  /**
   * 采集分辨率
   * @defaultValue `QNSessionPresetType.AVCaptureSessionPreset640x480`
   * @remarks 只支持ios（ios只支持固定枚举值）
   */
  sessionPreset: QNSessionPresetType;
}

/**
 * 录屏采集配置项
 */
export interface QNScreenVideoTrackConfig {
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag?: string;
  /**
   * 码率 (单位 kbps)
   * @defaultValue 24
   */
  bitrate: number;
  /**
   * 编码宽度
   * @defaultValue 640
   */
  width: number;
  /**
   * 编码高度
   * @defaultValue 480
   */
  height: number;
  /**
   * 是否开启大小流
   * @defaultValue false
   */
  multiStreamEnable: boolean;
  /**
   * 帧率
   * @defaultValue 20
   * @remarks 只支持安卓
   */
  frameRate?: number;
}

/**
 * 自定义视频采集配置项
 * @internal 暂不支持自定义 track
 */
export interface QNCustomVideoTrackConfig {
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag?: string;
  /**
   * 码率 (单位 kbps)
   * @defaultValue 24
   */
  bitrate: number;
  /**
   * 编码宽度
   * @defaultValue 640
   */
  width: number;
  /**
   * 编码高度
   * @defaultValue 480
   */
  height: number;
  /**
   * 是否开启大小流
   * @defaultValue false
   */
  multiStreamEnable: boolean;
  /**
   * 帧率
   * @defaultValue 20
   * @remarks 只支持安卓
   */
  frameRate?: number;
}

/**
 * 用于原生与前端通讯的 localtrack 信息
 * @internal
 */
export interface QNUNILocalTrack {
  /**
   * identifyID
   * @remarks 前端与原生端通讯调用接口的凭证，内部使用该id
   */
  identifyID: string;
  /**
   * trackID
   * @remarks 只有在发布成功后，才会有 trackID
   */
  trackID: string;
  /**
   * track 的类型
   */
  kind: QNRTCTrackKind;
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag: string;
}

/**
 * 用于原生与前端通讯的 remotetrack 信息
 * @internal
 */
export interface QNUNIRemoteTrack {
  /**
   * 发布该 track 的 用户 ID
   */
  userID: string;
  /**
   * trackID
   */
  trackID: string;
  /**
   * track 的类型
   */
  kind: QNRTCTrackKind;
  /**
   * tag 标记
   * @remarks SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   */
  tag: string;
}

/**
 * 本地音频 track 的统计信息
 */
export interface QNLocalAudioTrackStats {
  /**
   * 上行音频码率
   */
  uplinkBitrate: number;
  /**
   * 上行网络 rtt
   */
  uplinkRTT: number;
  /**
   * 上行网络丢包率
   */
  uplinkLostRate: number;
}

/**
 * 本地视频 track 的统计信息
 */
export interface QNLocalVideoTrackStats {
  /**
   * track 大小流类型
   */
  profile: QNTrackProfile;
  /**
   * 上行帧率
   */
  uplinkFrameRate: number;
  /**
   * 上行视频码率
   */
  uplinkBitrate: number;
  /**
   * 上行网络 rtt
   */
  uplinkRTT: number;
  /**
   * 上行网络丢包率
   */
  uplinkLostRate: number;
}

/**
 * 远端音频 track 的统计信息
 */
export interface QNRemoteAudioTrackStats {
  /**
   * 下行音频码率
   */
  downlinkBitrate: number;
  /**
   * 下行网络丢包率
   */
  downlinkLostRate: number;
  /**
   * 上行网络 rtt
   */
  uplinkRTT: number;
  /**
   * 上行网络丢包率
   */
  uplinkLostRate: number;
}

/**
 * 远端视频 track 的统计信息
 */
export interface QNRemoteVideoTrackStats {
  /**
   * track 质量
   */
  profile: QNTrackProfile;
  /**
   * 下行帧率
   */
  downlinkFrameRate: number;
  /**
   * 下行视频码率
   */
  downlinkBitrate: number;
  /**
   * 下行网络丢包率
   */
  downlinkLostRate: number;
  /**
   * 上行网络 rtt
   */
  uplinkRTT: number;
  /**
   * 上行网络丢包率
   */
  uplinkLostRate: number;
}

/**
 * 网络质量
 */
export interface QNNetworkQuality {
  /**
   * 上行网络质量
   */
  uplinkNetworkGrade: QNNetworkGrade;
  /**
   * 下行网络质量
   */
  downlinkNetworkGrade: QNNetworkGrade;
}

/**
 *  用于原生与前端通讯的远端用户信息
 * @internal
 */
export interface QNUNIRemoteUser {
  /**
   * 用户 ID
   */
  userID: string;
  /**
   * 用户所发布的视频 track 列表
   */
  videoTracks: QNUNIRemoteTrack[];
  /**
   * 用户所发布的音频 track 列表
   */
  audioTracks: QNUNIRemoteTrack[];
  /**
   * 自定义用户数据
   */
  userData: string;
}

/**
 * 远端用户
 */
export interface QNRemoteUser {
  /**
   * 用户 ID
   */
  userID: string;
  /**
   * 用户所发布的视频 track 列表
   */
  videoTracks: QNRemoteVideoTrack[];
  /**
   * 用户所发布的音频 track 列表
   */
  audioTracks: QNRemoteAudioTrack[];
  /**
   * 自定义用户数据
   */
  userData: string;
}

/**
 * CDN 转推配置
 */
export interface QNDirectLiveStreamingConfig {
  /**
   * 自定义 CDN 转推流 ID
   */
  streamID: string;
  /**
   * CDN 转推地址
   */
  url: string;
  /**
   * 需要转推的 audio trackID
   */
  audioTracks: string;
  /**
   * 需要转推的 video trackID
   */
  videoTracks: string;
}

/**
 * 合流图片或背景配置
 */
export interface QNTranscodingLiveStreamingImage {
  /**
   * 合流图片或背景图片 url
   */
  url: string;
  /**
   * 合流画布中 x 轴位置
   */
  x: number;
  /**
   * 合流画布中 y 轴位置
   */
  y: number;
  /**
   * 图片宽度
   */
  w: number;
  /**
   * 图片高度
   */
  h: number;
}

/**
 * 合流配置
 */
export interface QNTranscodingLiveStreamingConfig {
  /**
   * 自定义合流 ID
   */
  streamID: string;
  /**
   * 合流的转推地址
   */
  url: string;
  /**
   * 图像的宽度
   */
  width: number;
  /**
   * 图像的高度
   */
  height: number;
  /**
   * 帧率
   */
  videoFrameRate: number;
  /**
   * 码率
   */
  bitrate: number;
  /**
   * 最小码率
   */
  minBitrate: number;
  /**
   * 最大码率
   */
  maxBitrate: number;
  /**
   * 图像的填充模式
   */
  renderMode: QNRenderMode;
  /**
   * 水印设置信息
   */
  watermarks: QNTranscodingLiveStreamingImage[];
  /**
   * 背景图片信息
   */
  background: QNTranscodingLiveStreamingImage;
  /**
   * 是否在 Track 没有数据的情况下在合流画布中保持最后一帧
   */
  holdLastFrame: boolean;
}

/**
 * 合流 track 配置信息
 */
export interface QNTranscodingLiveStreamingTrack {
  /**
   * 当前要操作的 Track 的 id
   */
  trackID: string;
  /**
   * x 轴距离
   * @remarks 该 Track 在合流画面中 x 轴位置，该属性仅对视频 Track 有效
   */
  x: number;
  /**
   * y 轴距离
   * @remarks 该 Track 在合流画面中 y 轴位置，该属性仅对视频 Track 有效
   */
  y: number;
  /**
   * 宽度
   * @remarks 该 Track 在合流画面中宽度，该属性仅对视频 Track 有效
   */
  width: number;
  /**
   * 高度
   * @remakrs 该 Track 在合流画面中高度，该属性仅对视频 Track 有效
   */
  height: number;
  /**
   * 层级
   * @remarks 该 Track 在合流画面中的层次，0 为最底层。该属性仅对视频 Track 有效。
   */
  zOrder: number;
  /**
   * 图像的填充模式
   * @remarks 默认设置填充模式将继承 QNTranscodingLiveStreamingConfig 中数值
   */
  renderMode: QNRenderMode;
  /**
   * 开启 SEI
   * @remarks 是否在合流中添加视频 Track 的 SEI 内容，针对所有合流视频 Track，默认只能设置一路 SEI
   */
  SEIEnabled: boolean;
}

/**
 * 断开连接信息
 */
export interface QNConnectionDisconnectedInfo {
  /**
   * 断开连接原因
   */
  reason: QNConnectionDisconnectedReason;
  /**
   * 错误信息
   */
  errorMessage: string;
  /**
   * 错误码
   */
  errorCode: number;
}

/**
 * 自定义消息配置
 */
export interface QNCustomMessage {
  /**
   * 消息 ID
   */
  id: string;
  /**
   * 发送消息的用户 ID
   */
  userId: string;
  /**
   * 消息内容
   */
  content: string;
  /**
   * 时间戳
   */
  timestamp: number;
}

/**
 * 合流失败信息
 */
export interface QNLiveStreamingErrorInfo {
  /**
   * 触发错误归属类型
   */
  type: QNLiveStreamingErrorInfoType;
  /**
   * 触发错误归属 code 码
   */
  code: QNLiveStreamingErrorInfoCode;
  /**
   * 错误信息
   */
  message?: string;
}

/**
 * 美颜配置
 */
export interface QNBeautySetting {
  /**
   * 是否开启美颜
   */
  enabled: boolean;
  /**
   * 美颜程度
   * @remarks 范围从 0 - 1
   */
  smoothLevel: number;
  /**
   * 美白程度
   * @remarks 范围从 0 - 1
   */
  whiten: number;
  /**
   * 红润程度
   * @remarks 范围从 0 - 1
   */
  redden: number;
}

/**
 * 水印配置
 */
export interface QNVideoWaterMark {
  /**
   * 水印尺寸
   * @remarks 只支持安卓
   */
  waterMarkRelativeSize: QNVideoWaterMarkSize;
  /**
   * 本地图片地址
   */
  resourcePath: string;
  /**
   * x 轴距离
   * @remarks 水印在 track 中 x 轴的绝对距离，轴绝对位置，范围 0 - 1
   */
  x: number;
  /**
   * y 轴距离
   * @remarks 水印在 track 中 y 轴的绝对距离，轴绝对位置，范围 0 - 1
   */
  y: number;
  /**
   * 透明度
   * @remarks 只支持安卓
   */
  alpha: number;
}

/**
 * 图片替换 track 配置信息
 */
export interface QNImage {
  /**
   * 本地图片地址
   */
  resourcePath: string;
  /**
   * 图片宽度
   */
  width: number;
  /**
   * 图片高度
   */
  height: number;
}

/**
 * 音频数据描述
 * @internal 混音音频帧数据，性能原因，暂不支持
 */
export interface QNAudioStreamBasicDescription {
  sampleRate: number;
  formatID: number;
  formatFlags: number;
  bytesPerPacket: number;
  framesPerPacket: number;
  bytesPerFrame: number;
  channelsPerFrame: number;
  bitsPerChannel: number;
  reserved: number;
}

/**
 * 纹理数据
 * @internal 纹理数据回调，前端无法直接操作原生内存信息，暂不支持
 */
export interface QNTextureFrame {
  textureID: number;
  type: QNVideoFrameType;
  width: number;
  height: number;
  rotation: number;
  timestampNs: number;
  transformMatrix: number[];
}

/**
 * YUV 原数据
 * @internal YUV数据帧回调，需要通过转 base64 再转 Uint8Array，会造成卡顿，暂不支持
 */
export interface QNYUVFrame {
  data: string;
  type: QNVideoFrameType;
  width: number;
  height: number;
  rotation: number;
  timestampNs: number;
}

/**
 * 音频帧数据
 * @internal 音频数据帧回调，性能原因，暂不支持
 */
export interface QNAudioFrame {
  data: string;
  size: number;
  bitsPerSample: number;
  sampleRate: number;
  numberOfChannels: number;
}


/**
 * 发布失败信息
 * @param message 失败原因
 * @param code 失败错误码
 */
export interface QNPublishResultError {
  message: string;
  code: number
}