import { QNRTCCameraFacing, QNRTCPolicy, QNRTCBwePolicy, QNRTCTrackKind, QNRenderMode, QNTrackProfile, QNNetworkGrade, QNConnectionDisconnectedReason, QNLiveStreamingErrorInfoCode, QNLiveStreamingErrorInfoType, QNRTCLogLevel, QNVideoWaterMarkSize, QNSessionPresetType, QNVideoFrameType } from '../enum/RTCEnum'
import QNRemoteAudioTrack from '../class/RTCRemoteAudioTrack'
import QNRemoteVideoTrack from '../class/RTCRemoteVideoTrack'
export * from '../enum/RTCEnum'

/**
 * QNRTCConfiguration
 * @description QNRTC 初始化配置项
 * @namespace
 */
export interface QNRTCConfiguration {
  /**
   * policy
   * @description 媒体流的连接方式，默认为 QNRTCPolicy.forceUDP
   * @sign policy: QNRTCPolicy
   */
  policy: QNRTCPolicy,
  /**
   * logLevel
   * @description 日志等级，默认为 QNRTCLogLevel.info
   * @sign logLevel: QNRTCLogLevel
   */
  logLevel: QNRTCLogLevel,
  /**
   * stereo
   * @description 是否使用立体声，默认为 NO，只支持ios
   * @sign stereo?: boolean
   */
  stereo?: boolean,
  /**
   * bwePolicy
   * @description 带宽评估策略，默认为 QNRTCBwePolicy.TCC，只支持ios
   * @sign bwePolicy?: QNRTCBwePolicy
   */
  bwePolicy?: QNRTCBwePolicy,
  /**
   * allowAudioMixWithOthers
   * @description 是否允许和其它音频一起播放，默认为 true，只支持ios
   * @sign allowAudioMixWithOthers?: boolean
   */
  allowAudioMixWithOthers?: boolean,
  /**
   * hWCodecEnabled
   * @description 是否开启硬编，默认为 true，只支持安卓
   * @sign hWCodecEnabled?: boolean
   */
  hWCodecEnabled?: boolean,
  /**
   * maintainResolution
   * @description 是否固定分辨率，默认为 false，只支持安卓
   * @sign maintainResolution?: boolean
   */
  maintainResolution?: boolean,
  /**
   * fieldTrials
   * @description 扩展配置，只支持安卓
   * @sign fieldTrials?: string
   */
  fieldTrials?: string,
  /**
   * encoderQualityMode
   * @description 是否开启质量模式，默认为 false，只支持安卓
   * @sign encoderQualityMode?: boolean
   */
  encoderQualityMode?: boolean,
  /**
   * isAEC3Enabled
   * @description 是否开启ACE3，默认为 true，只支持安卓
   * @sign isAEC3Enabled: boolean
   */
}

/**
 * QNMicrophoneAudioTrackConfig
 * @description 麦克风采集配置
 * @namespace
 */
export interface QNMicrophoneAudioTrackConfig {
  /**
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string,
  /**
   * bitrate
   * @description 码率 (单位 kbps)，默认码率为 24kbps
   * @sign bitrate: number
   */
  bitrate: number,
  /**
   * bitsPerSample
   * @description 位宽，默认位宽为 16bit，只支持安卓
   * @sign bitsPerSample?: number
   */
  bitsPerSample?: number,
  /**
   * channelCount
   * @description 声道数，默认声道数为 1，只支持安卓
   * @sign channelCount?: number
   */
  channelCount?: number,
  /**
   * sampleRate
   * @description 采样率，默认采样率为 48000kHz，只支持安卓
   * @sign sampleRate?: number
   */
  sampleRate?: number,
  /**
   * communicationModeOn
   * @description 是否开启通话模式，默认true，只支持安卓
   * @sign communicationModeOn?: boolean
   */
  communicationModeOn?: boolean
}

/**
 * QNCustomAudioTrackConfig
 * @description 自定义音频采集配置
 * @todo 暂不支持自定义 track
 * @ignore
 * @namespace
 */
export interface QNCustomAudioTrackConfig {
  /**
   * tag
   * @ignore
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string,
  /**
   * bitrate
   * @ignore
   * @description 码率 (单位 kbps)，默认码率为 24kbps
   * @sign bitrate: number
   */
  bitrate: number,
  /**
   * bitsPerSample
   * @ignore
   * @description 位宽，默认位宽为 16bit，只支持安卓
   * @sign bitsPerSample?: number
   */
  bitsPerSample?: number,
  /**
   * channelCount
   * @ignore
   * @description 声道数，默认声道数为 1，只支持安卓
   * @sign channelCount?: number
   */
  channelCount?: number,
  /**
   * sampleRate
   * @ignore
   * @description 采样率，默认采样率为 48000kHz，只支持安卓
   * @sign sampleRate?: number
   */
  sampleRate?: number
}

/**
 * QNCameraVideoTrackConfig
 * @description 摄像头采集配置项
 * @namespace
 */
export interface QNCameraVideoTrackConfig {
  /**
   * tag
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string,
  /**
   * bitrate
   * @description 码率 (单位 kbps)，默认码率为 800kbps
   * @sign bitrate: number
   */
  bitrate: number,
  /**
   * width
   * @description 编码宽度，默认 640
   * @sign width: number
   */
  width: number,
  /**
   * height
   * @description 编码高度，默认 480
   * @sign height: number
   */
  height: number,
  /**
   * multiStreamEnable
   * @description 是否开启大小流，默认 false
   * @sign multiStreamEnable: boolean
   */
  multiStreamEnable: boolean,
  /**
   * cameraFacing
   * @description 选择前后置摄像头，默认前置
   * @sign cameraFacing: QNRTCCameraFacing
   */
  cameraFacing: QNRTCCameraFacing,
  /**
   * frameRate
   * @description 帧率，默认 20，只支持安卓
   * @sign frameRate?: number
   */
  frameRate?: number,
  /**
   * captureWidth
   * @description 采集宽度，默认640，只支持安卓
   * @sign captureWidth?: number
   */
  captureWidth?: number,
  /**
   * captureHeight
   * @description 采集高度，默认480，只支持安卓
   * @sign captureHeight?: number
   */
  captureHeight?: number,
  /**
   * captureFrameRate
   * @description 采集帧率，默认20，只支持安卓
   * @sign captureFrameRate?: number
   */
  captureFrameRate?: number,
  /**
   * sessionPreset
   * @description 采集分辨率，默认QNSessionPresetType.AVCaptureSessionPreset640x480，只支持ios（ios只支持固定枚举值）
   * @sign sessionPreset: QNSessionPresetType
   */
  sessionPreset: QNSessionPresetType
}

/**
 * QNScreenVideoTrackConfig
 * @description 录屏采集配置项
 * @namespace
 */
export interface QNScreenVideoTrackConfig {
  /**
   * tag
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string,
  /**
   * bitrate
   * @description 码率 (单位 kbps)，默认码率为 800kbps
   * @sign bitrate: number
   */
  bitrate: number,
  /**
   * width
   * @description 编码宽度，默认 640
   * @sign width: number
   */
  width: number,
  /**
   * height
   * @description 编码高度，默认 480
   * @sign height: number
   */
  height: number,
  /**
   * multiStreamEnable
   * @description 是否开启大小流，默认 false
   * @sign multiStreamEnable: boolean
   */
  multiStreamEnable: boolean,
  /**
   * frameRate
   * @description 帧率，默认 20，只支持安卓
   * @sign frameRate?: number
   */
  frameRate?: number
}

/**
 * QNCustomVideoTrackConfig
 * @description 自定义视频采集配置项
 * @todo 暂不支持自定义 track
 * @ignore
 * @namespace
 */
export interface QNCustomVideoTrackConfig {
  /**
   * tag
   * @ignore
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string,
  /**
   * bitrate
   * @ignore
   * @description 码率 (单位 kbps)，默认码率为 800kbps
   * @sign bitrate: number
   */
  bitrate: number,
  /**
   * width
   * @ignore
   * @description 编码宽度，默认 640
   * @sign width: number
   */
  width: number,
  /**
   * height
   * @ignore
   * @description 编码高度，默认 480
   * @sign height: number
   */
  height: number,
  /**
   * multiStreamEnable
   * @ignore
   * @description 是否开启大小流，默认 false
   * @sign multiStreamEnable: boolean
   */
  multiStreamEnable: boolean,
  /**
   * frameRate
   * @ignore
   * @description 帧率，默认 20，只支持安卓
   * @sign frameRate?: number
   */
  frameRate?: number
}

/**
 * QNUNILocalTrack
 * @description 用于原生与前端通讯的 localtrack 信息
 * @namespace
 */
export interface QNUNILocalTrack {
  /**
   * identifyID
   * @description 前端与原生端通讯调用接口的凭证，内部使用该id
   * @sign identifyID: string
   */
  identifyID: string,
  /**
   * trackID
   * @description track ID，只有在发布成功后，才会有 trackID
   * @sign trackID: string
   */
  trackID: string,
  /**
   * kind
   * @description track 的类型
   * @sign kind: QNRTCTrackKind
   */
  kind: QNRTCTrackKind,
  /**
   * tag
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string
}

/**
 * QNUNIRemoteTrack
 * @description 用于原生与前端通讯的 remotetrack 信息
 * @namespace
 */
export interface QNUNIRemoteTrack {
  /**
   * userID
   * @description 发布该 track 的 用户 ID
   * @sign userID: string
   */
  userID: string,
  /**
   * trackID
   * @description track ID
   * @sign trackID: string
   */
  trackID: string,
  /**
   * kind
   * @description track 的类型
   * @sign kind: QNRTCTrackKind
   */
  kind: QNRTCTrackKind,
  /**
   * tag
   * @description tag 标记，SDK 会将其透传到远端，当发布多路 Track 时可用 tag 来作区分
   * @sign tag: string
   */
  tag: string
}

/**
 * QNLocalAudioTrackStats
 * @description 本地音频 track 的统计信息
 * @namespace
 */
export interface QNLocalAudioTrackStats {
  /**
   * uplinkBitrate
   * @description 上行音频码率
   * @sign uplinkBitrate: number
   */
  uplinkBitrate: number,
  /**
   * uplinkRTT
   * @description 上行网络 rtt
   * @sign uplinkRTT: number
   */
  uplinkRTT: number,
  /**
   * uplinkLostRate
   * @description 上行网络丢包率
   * @sign uplinkLostRate: number
   */
  uplinkLostRate: number
}

/**
 * QNLocalVideoTrackStats
 * @description 本地视频 track 的统计信息
 * @namespace
 */
export interface QNLocalVideoTrackStats {
  /**
   * profile
   * @description track 质量
   * @sign profile: QNTrackProfile
   */
  profile: QNTrackProfile,
  /**
   * uplinkFrameRate
   * @description 上行帧率
   * @sign uplinkFrameRate: number
   */
  uplinkFrameRate: number,
  /**
   * uplinkBitrate
   * @description 上行视频码率
   * @sign uplinkBitrate: number
   */
  uplinkBitrate: number,
  /**
   * uplinkRTT
   * @description 上行网络 rtt
   * @sign uplinkRTT: number
   */
  uplinkRTT: number,
  /**
   * uplinkLostRate
   * @description 上行网络丢包率
   * @sign uplinkLostRate: number
   */
  uplinkLostRate: number
}

/**
 * QNRemoteAudioTrackStats
 * @description 远端音频 track 的统计信息
 * @namespace
 */
export interface QNRemoteAudioTrackStats {
  /**
   * downlinkBitrate
   * @description 下行音频码率
   * @sign downlinkBitrate: number
   */
  downlinkBitrate: number,
  /**
   * downlinkLostRate
   * @description 下行网络丢包率
   * @sign downlinkLostRate: number
   */
  downlinkLostRate: number,
  /**
   * uplinkRTT
   * @description 上行网络 rtt
   * @sign uplinkRTT: number
   */
  uplinkRTT: number,
  /**
   * uplinkLostRate
   * @description 上行网络丢包率
   * @sign uplinkLostRate: number
   */
  uplinkLostRate: number
}

/**
 * QNRemoteVideoTrackStats
 * @description 远端视频 track 的统计信息
 * @namespace
 */
export interface QNRemoteVideoTrackStats {
  /**
   * profile
   * @description track 质量
   * @sign profile: QNTrackProfile
   */
  profile: QNTrackProfile,
  /**
   * downlinkFrameRate
   * @description 下行帧率
   * @sign downlinkFrameRate: number
   */
  downlinkFrameRate: number,
  /**
   * downlinkBitrate
   * @description 下行视频码率
   * @sign downlinkBitrate: number
   */
  downlinkBitrate: number,
  /**
   * downlinkLostRate
   * @description 下行网络丢包率
   * @sign downlinkLostRate: number
   */
  downlinkLostRate: number,
  /**
   * uplinkRTT
   * @description 上行网络 rtt
   * @sign uplinkRTT: number
   */
  uplinkRTT: number,
  /**
   * uplinkLostRate
   * @description 上行网络丢包率
   * @sign uplinkLostRate: number
   */
  uplinkLostRate: number
}

/**
 * QNNetworkQuality
 * @description 网络质量
 * @namespace
 */
export interface QNNetworkQuality {
  /**
   * uplinkNetworkGrade
   * @description 上行网络质量
   * @sign uplinkNetworkGrade: QNNetworkGrade
   */
  uplinkNetworkGrade: QNNetworkGrade,
  /**
   * downlinkNetworkGrade
   * @description 下行网络质量
   * @sign downlinkNetworkGrade: QNNetworkGrade
   */
  downlinkNetworkGrade: QNNetworkGrade
}

/**
 * QNUNIRemoteUser
 * @description 用于原生与前端通讯的远端用户信息
 * @namespace
 */
export interface QNUNIRemoteUser {
  /**
   * userID
   * @description 用户 ID
   * @sign userID: string
   */
  userID: string,
  /**
   * videoTracks
   * @description 用户所发布的视频 track 列表
   * @sign videoTracks: Array[QNUNIRemoteTrack]
   */
  videoTracks: QNUNIRemoteTrack[],
  /**
   * audioTracks
   * @description 用户所发布的音频 track 列表
   * @sign audioTracks: Array[QNUNIRemoteTrack]
   */
  audioTracks: QNUNIRemoteTrack[],
  /**
   * userData
   * @description 自定义用户数据
   * @sign userData: string
   */
  userData: string
}

/**
 * QNRemoteUser
 * @description 远端用户
 * @namespace
 */
export interface QNRemoteUser {
  /**
   * userID
   * @description 用户 ID
   * @sign userID: string
   */
  userID: string,
  /**
   * videoTracks
   * @description 用户所发布的视频 track 列表
   * @sign videoTracks: Array[QNRemoteVideoTrack]
   */
  videoTracks: QNRemoteVideoTrack[],
  /**
   * audioTracks
   * @description 用户所发布的音频 track 列表
   * @sign audioTracks: Array[QNRemoteAudioTrack]
   */
  audioTracks: QNRemoteAudioTrack[],
  /**
   * userData
   * @description 自定义用户数据
   * @sign userData: string
   */
  userData: string
}

/**
 * QNDirectLiveStreamingConfig
 * @description CDN 转推配置
 * @namespace
 */
export interface QNDirectLiveStreamingConfig {
  /**
   * streamID
   * @description 自定义 CDN 转推流 ID
   * @sign streamID: string
   */
  streamID: string,
  /**
   * url
   * @description CDN 转推地址
   * @sign url: string
   */
  url: string,
  /**
   * audioTracks
   * @description 需要转推的 audio trackID
   * @sign audioTracks: string
   */
  audioTracks: string,
  /**
   * videoTracks
   * @description 需要转推的 video trackID
   * @sign videoTracks: string
   */
  videoTracks: string
}

/**
 * QNTranscodingLiveStreamingImage
 * @description 合流图片或背景配置
 * @namespace
 */
export interface QNTranscodingLiveStreamingImage {
  /**
   * url
   * @description 合流图片或背景图片 url
   * @sign url: string
   */
  url: string,
  /**
   * x
   * @description 合流画布中 x 轴位置
   * @sign x: number
   */
  x: number,
  /**
   * y
   * @description 合流画布中 y 轴位置
   * @sign y: number
   */
  y: number,
  /**
   * w
   * @description 图片宽度
   * @sign w: number
   */
  w: number,
  /**
   * h
   * @description 图片高度
   * @sign h: number
   */
  h: number
}

/**
 * QNTranscodingLiveStreamingConfig
 * @description 合流配置
 * @namespace
 */
export interface QNTranscodingLiveStreamingConfig {
  /**
   * streamID
   * @description 自定义合流 ID
   * @sign streamID: string
   */
  streamID: string,
  /**
   * url
   * @description 合流的转推地址
   * @sign url: string
   */
  url: string,
  /**
   * width
   * @description 图像的宽度
   * @sign width: number
   */
  width: number,
  /**
   * height
   * @description 图像的高度
   * @sign height: number
   */
  height: number,
  /**
   * videoFrameRate
   * @description 帧率
   * @sign videoFrameRate: number
   */
  videoFrameRate: number,
  /**
   * bitrate
   * @description 码率
   * @sign bitrate: number
   */
  bitrate: number,
  /**
   * minBitrate
   * @description 最小码率
   * @sign minBitrate: number
   */
  minBitrate: number,
  /**
   * maxBitrate
   * @description 最大码率
   * @sign maxBitrate: number
   */
  maxBitrate: number,
  /**
   * renderMode
   * @description 图像的填充模式
   * @sign renderMode: QNRenderMode
   */
  renderMode: QNRenderMode,
  /**
   * watermarks
   * @description 水印设置信息
   * @sign watermarks: Array[QNTranscodingLiveStreamingImage]
   */
  watermarks: QNTranscodingLiveStreamingImage[],
  /**
   * background
   * @description 背景图片信息
   * @sign background: QNTranscodingLiveStreamingImage
   */
  background: QNTranscodingLiveStreamingImage,
  /**
   * holdLastFrame
   * @description 是否在 Track 没有数据的情况下在合流画布中保持最后一帧
   * @sign holdLastFrame: boolean
   */
  holdLastFrame: boolean
}

/**
 * QNTranscodingLiveStreamingTrack
 * @description 合流 track 配置信息
 * @namespace
 */
export interface QNTranscodingLiveStreamingTrack {
  /**
   * trackID
   * @description 当前要操作的 Track 的 id
   * @sign trackID: string
   */
  trackID: string,
  /**
   * x
   * @description 该 Track 在合流画面中 x 轴位置，该属性仅对视频 Track 有效
   * @sign x: number
   */
  x: number,
  /**
   * y
   * @description 该 Track 在合流画面中 y 轴位置，该属性仅对视频 Track 有效
   * @sign y: number
   */
  y: number,
  /**
   * width
   * @description 该 Track 在合流画面中宽度，该属性仅对视频 Track 有效
   * @sign width: number
   */
  width: number,
  /**
   * height
   * @description 该 Track 在合流画面中高度，该属性仅对视频 Track 有效
   * @sign height: number
   */
  height: number,
  /**
   * zOrder
   * @description 该 Track 在合流画面中的层次，0 为最底层。该属性仅对视频 Track 有效。
   * @sign zOrder: number
   */
  zOrder: number,
  /**
   * renderMode
   * @description 图像的填充模式, 默认设置填充模式将继承 QNTranscodingLiveStreamingConfig 中数值
   * @sign renderMode: QNRenderMode
   */
  renderMode: QNRenderMode,
  /**
   * SEIEnabled
   * @description 是否在合流中添加视频 Track 的 SEI 内容，针对所有合流视频 Track，默认只能设置一路 SEI
   * @sign SEIEnabled: boolean
   */
  SEIEnabled: boolean
}

/**
 * QNConnectionDisconnectedInfo
 * @description 断开连接信息
 * @namespace
 */
export interface QNConnectionDisconnectedInfo {
  /**
   * reason
   * @description 断开连接原因
   * @sign reason: QNConnectionDisconnectedReason
   */
  reason: QNConnectionDisconnectedReason,
  /**
   * errorMessage
   * @description 错误信息
   * @sign errorMessage: string
   */
  errorMessage: string,
  /**
   * errorCode
   * @description 错误码
   * @sign errorCode: number
   */
  errorCode: number
}

/**
 * QNCustomMessage
 * @description 自定义消息配置
 * @namespace
 */
export interface QNCustomMessage {
  /**
   * id
   * @description 消息 ID
   * @sign id: string
   */
  id: string,
  /**
   * userId
   * @description 发送消息的用户 ID
   * @sign userId: string
   */
  userId: string,
  /**
   * content
   * @description 消息内容
   * @sign content: string
   */
  content: string,
  /**
   * timestamp
   * @description 时间戳
   * @sign timestamp: number
   */
  timestamp: number
}

/**
 * QNLiveStreamingErrorInfo
 * @description 合流失败信息
 * @namespace
 */
export interface QNLiveStreamingErrorInfo {
  /**
   * type
   * @description 触发错误归属类型
   * @sign type: QNLiveStreamingErrorInfoType
   */
  type: QNLiveStreamingErrorInfoType,
  /**
   * code
   * @description 触发错误归属 code 码
   * @sign code: QNLiveStreamingErrorInfoCode
   */
  code: QNLiveStreamingErrorInfoCode,
  /**
   * message
   * @description 错误信息
   * @sign message?: string
   */
  message?: string
}

/**
 * QNBeautySetting
 * @description 美颜配置
 * @namespace
 */
export interface QNBeautySetting {
  /**
   * enabled
   * @description 是否开启美颜
   * @sign enabled: boolean
   */
  enabled: boolean,
  /**
   * smoothLevel
   * @description 美颜程度，范围从 0 - 1
   * @sign smoothLevel: number
   */
  smoothLevel: number,
  /**
   * whiten
   * @description 美白程度，范围从 0 - 1
   * @sign whiten: number
   */
  whiten: number,
  /**
   * redden
   * @description 红润程度，范围从 0 - 1
   * @sign redden: number
   */
  redden: number
}

/**
 * QNVideoWaterMark
 * @description 水印配置
 * @namespace
 */
export interface QNVideoWaterMark {
  /**
   * waterMarkRelativeSize
   * @description 水印尺寸，只支持安卓
   * @sign waterMarkRelativeSize: QNVideoWaterMarkSize
   */
  waterMarkRelativeSize: QNVideoWaterMarkSize,
  /**
   * resourcePath
   * @description 本地图片地址
   * @sign resourcePath: string
   */
  resourcePath: string,
  /**
   * x
   * @description 水印在 track 中 x 轴的绝对距离，轴绝对位置，范围 0 - 1
   * @sign x: number
   */
  x: number,
  /**
   * y
   * @description 水印在 track 中 y 轴的绝对距离，轴绝对位置，范围 0 - 1
   * @sign y: number
   */
  y: number,
  /**
   * alpha
   * @description 透明度，只支持安卓
   * @sign alpha: number
   */
  alpha: number
}

/**
 * QNImage
 * @description 图片替换 track 配置信息
 * @namespace
 */
export interface QNImage {
  /**
   * resourcePath
   * @description 本地图片地址
   * @sign resourcePath: string
   */
  resourcePath: string,
  /**
   * width
   * @description 图片宽度
   * @sign width: number
   */
  width: number,
  /**
   * height
   * @description 图片高度
   * @sign height: number
   */
  height: number
}

/**
 * QNAudioStreamBasicDescription
 * @description 音频数据描述
 * @todo 混音音频帧数据，性能原因，暂不支持
 * @ignore
 * @namespace
 */
export interface QNAudioStreamBasicDescription {
  sampleRate: number,
  formatID: number,
  formatFlags: number,
  bytesPerPacket: number,
  framesPerPacket: number,
  bytesPerFrame: number,
  channelsPerFrame: number,
  bitsPerChannel: number,
  reserved: number
}

/**
 * QNTextureFrame
 * @description 纹理数据
 * @todo 纹理数据回调，前端无法直接操作原生内存信息，暂不支持
 * @ignore
 * @namespace
 */
export interface QNTextureFrame {
  textureID: number,
  type: QNVideoFrameType,
  width: number,
  height: number,
  rotation: number,
  timestampNs: number,
  transformMatrix: number[]
}

/**
 * QNYUVFrame
 * @description YUV 原数据
 * @todo YUV数据帧回调，需要通过转 base64 再转 Uint8Array，会造成卡顿，暂不支持
 * @ignore
 * @namespace
 */
export interface QNYUVFrame {
  data: string,
  type: QNVideoFrameType,
  width: number,
  height: number,
  rotation: number,
  timestampNs: number
}

/**
 * QNAudioFrame
 * @description 音频帧数据
 * @todo 音频数据帧回调，性能原因，暂不支持
 * @ignore
 * @namespace
 */
export interface QNAudioFrame {
  data: string,
  size: number,
  bitsPerSample: number,
  sampleRate: number,
  numberOfChannels: number
}

/**
 * QNTrackStateList
 * @description trackID 为 key ，TrackStateType 为 value 的 map 对象
 * @namespace
 */
export interface QNTrackStateList<TrackStateType> {
  [trackID: string]: TrackStateType
}
