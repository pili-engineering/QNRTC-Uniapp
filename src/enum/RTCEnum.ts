/* eslint-disable no-unused-vars */
/**
 * QNRTCCameraFacing
 * @description 摄像头类型
 * @namespace
 */
export enum QNRTCCameraFacing {
  /**
   * back
   * @description 后置摄像头
   * @sign back = 'back'
   */
  back = 'back',
  /**
   * front
   * @description 前置摄像头
   * @sign front = 'front'
   */
  front = 'front'
}

/**
 * QNRTCPolicy
 * @description 网络传输模式
 * @namespace
 */
export enum QNRTCPolicy {
  /**
   * forceUDP
   * @description 使用 UDP
   * @sign forceUDP = 'forceUDP'
   */
  forceUDP = 'forceUDP',
  /**
   * forceTCP
   * @description 使用 TCP
   * @sign forceTCP = 'forceTCP'
   */
  forceTCP = 'forceTCP',
  /**
   * preferUDP
   * @description 优先 UDP，不通的话自动改为 TCP
   * @sign preferUDP = 'preferUDP'
   */
  preferUDP = 'preferUDP'
}

/**
 * QNRTCBwePolicy
 * @description BwePolicy
 * @namespace
 */
export enum QNRTCBwePolicy {
  /**
   * TCC
   * @description 使用 TCC
   * @sign TCC = 'TCC'
   */
  TCC = 'TCC',
  /**
   * GCC
   * @description 使用 GCC
   * @sign GCC = 'GCC'
   */
  GCC = 'GCC'
}

/**
 * QNRTCTrackKind
 * @description 轨类型
 * @namespace
 */
export enum QNRTCTrackKind {
  /**
   * audio
   * @description 音频
   * @sign audio = 'audio'
   */
  audio = 'audio',
  /**
   * video
   * @description 视频
   * @sign video = 'video'
   */
  video = 'video'
}

/**
 * QNRTCLogLevel
 * @description 日志等级
 * @namespace
 */
export enum QNRTCLogLevel {
  /**
   * verbose
   * @description Verbose 日志输出
   * @sign verbose = 'verbose'
   */
  verbose = 'verbose',
  /**
   * info
   * @description Info 日志输出
   * @sign info = 'info'
   */
  info = 'info',
  /**
   * warning
   * @description Warning 日志输出
   * @sign warning = 'warning'
   */
  warning = 'warning',
  /**
   * error
   * @description Error 日志输出
   * @sign error = 'error'
   */
  error = 'error',
  /**
   * none
   * @description None 不输出日志
   * @sign none = 'none'
   */
  none = 'none'
}

/**
 * QNConnectionState
 * @description 连接状态
 * @namespace
 */
export enum QNConnectionState {
  /**
   * DISCONNECTED
   * @description 未连接
   * @sign DISCONNECTED = 'DISCONNECTED'
   */
  DISCONNECTED = 'DISCONNECTED',
  /**
   * CONNECTING
   * @description 连接中
   * @sign CONNECTING = 'CONNECTING'
   */
  CONNECTING = 'CONNECTING',
  /**
   * CONNECTED
   * @description 连接成功
   * @sign CONNECTED = 'CONNECTED'
   */
  CONNECTED = 'CONNECTED',
  /**
   * RECONNECTING
   * @description 重连中
   * @sign RECONNECTING = 'RECONNECTING'
   */
  RECONNECTING = 'RECONNECTING',
  /**
   * RECONNECTED
   * @description 已重连
   * @sign RECONNECTED = 'RECONNECTED'
   */
  RECONNECTED = 'RECONNECTED'
}

/**
 * QNRenderMode
 * @description 渲染模式
 * @namespace
 */
export enum QNRenderMode {
  /**
   * FILL
   * @description 不保持长宽比,图片在容器内完整显示出来
   * @sign FILL = 'FILL'
   */
  FILL = 'FILL',
  /**
   * ASPECT_FILL
   * @description 在保持长宽比的前提下，缩放图片，使图片充满容器
   * @sign ASPECT_FILL = 'ASPECT_FILL'
   */
  ASPECT_FILL = 'ASPECT_FILL',
  /**
   * ASPECT_FIT
   * @description 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
   * @sign ASPECT_FIT = 'ASPECT_FIT'
   */
  ASPECT_FIT = 'ASPECT_FIT'
}

/**
 * QNTrackProfile
 * @description 轨质量
 * @namespace
 */
export enum QNTrackProfile {
  /**
   * LOW
   * @description 低分辨率
   * @sign LOW = 'LOW'
   */
  LOW = 'LOW',
  /**
   * MEDIUM
   * @description 中分辨率
   * @sign MEDIUM = 'MEDIUM'
   */
  MEDIUM = 'MEDIUM',
  /**
   * HIGH
   * @description 高分辨率
   * @sign HIGH = 'HIGH'
   */
  HIGH = 'HIGH'
}

/**
 * QNNetworkGrade
 * @description 网络质量
 * @namespace
 */
export enum QNNetworkGrade {
  /**
   * INVALID
   * @description 网络未知
   * @sign INVALID = 'INVALID'
   */
  INVALID = 'INVALID',
  /**
   * EXCELLENT
   * @description 网络优
   * @sign EXCELLENT = 'EXCELLENT'
   */
  EXCELLENT = 'EXCELLENT',
  /**
   * GOOD
   * @description 网络良
   * @sign GOOD = 'GOOD'
   */
  GOOD = 'GOOD',
  /**
   * FAIR
   * @description 网络一般
   * @sign FAIR = 'FAIR'
   */
  FAIR = 'FAIR',
  /**
   * POOR
   * @description 网络差
   * @sign POOR = 'POOR'
   */
  POOR = 'POOR'
}

/**
 * QNConnectionDisconnectedReason
 * @description 连接失败原因
 * @namespace
 */
export enum QNConnectionDisconnectedReason {
  /**
   * LEAVE
   * @description 主动退出
   * @sign LEAVE = 'LEAVE'
   */
  LEAVE = 'LEAVE',
  /**
   * KICKED_OUT
   * @description 被踢出房间
   * @sign KICKED_OUT = 'KICKED_OUT'
   */
  KICKED_OUT = 'KICKED_OUT',
  /**
   * ROOM_CLOSED
   * @description 房间被关
   * @sign ROOM_CLOSED = 'ROOM_CLOSED'
   */
  ROOM_CLOSED = 'ROOM_CLOSED',
  /**
   * ROOM_FULL
   * @description 房间人数已满
   * @sign ROOM_FULL = 'ROOM_FULL'
   */
  ROOM_FULL = 'ROOM_FULL',
  /**
   * ERROR
   * @description 发生错误异常断开
   * @sign ERROR = 'ERROR'
   */
  ERROR = 'ERROR'
}

/**
 * QNLiveStreamingErrorInfoType
 * @description 转推失败原因
 * @namespace
 */
export enum QNLiveStreamingErrorInfoType {
  /**
   * START
   * @description 开始转推操作异常，请检查房间状态、单路转推配置等信息
   * @sign START = 'START'
   */
  START = 'START',
  /**
   * STOP
   * @description 停止转推操作异常，请检查房间状态
   * @sign STOP = 'STOP'
   */
  STOP = 'STOP',
  /**
   * UPDATE
   * @description 更改合流布局配置操作异常，请检查房间状态、合流布局配置等信息
   * @sign UPDATE = 'UPDATE'
   */
  UPDATE = 'UPDATE'
}

/**
 * QNLiveStreamingErrorInfoCode
 * @description 合流失败原因
 * @namespace
 */
export enum QNLiveStreamingErrorInfoCode {
  /**
   * ERROR_NO_PERMISSION
   * @description 无操作权限，请检查用户的操作权限
   * @sign ERROR_NO_PERMISSION = 'ERROR_NO_PERMISSION'
   */
  ERROR_NO_PERMISSION = 'ERROR_NO_PERMISSION',
  /**
   * ERROR_INVALID_STATE
   * @description 状态异常，请检查房间状态，加入房间后才可以创建转推任务
   * @sign ERROR_INVALID_STATE = 'ERROR_INVALID_STATE'
   */
  ERROR_INVALID_STATE = 'ERROR_INVALID_STATE',
  /**
   * ERROR_INVALID_PARAMETER
   * @description 参数错误，请检查参数是否合法
   * @sign ERROR_INVALID_PARAMETER = 'ERROR_INVALID_PARAMETER'
   */
  ERROR_INVALID_PARAMETER = 'ERROR_INVALID_PARAMETER',
  /**
   * ERROR_SIGNAL_TIMEOUT
   * @description 操作超时，请重新尝试操作
   * @sign ERROR_SIGNAL_TIMEOUT = 'ERROR_SIGNAL_TIMEOUT'
   */
  ERROR_SIGNAL_TIMEOUT = 'ERROR_SIGNAL_TIMEOUT',
  /**
   * SERVER_ERROR
   * @description 服务端错误，请重新尝试操作
   * @sign SERVER_ERROR = 'SERVER_ERROR'
   */
  SERVER_ERROR = 'SERVER_ERROR'
}

/**
 * QNAudioDevice
 * @description 音频设备
 * @namespace
 */
export enum QNAudioDevice {
  /**
   * SPEAKER_PHONE
   * @description 扬声器
   * @sign SPEAKER_PHONE = 'SPEAKER_PHONE'
   */
  SPEAKER_PHONE = 'SPEAKER_PHONE',
  /**
   * EARPIECE
   * @description 听筒
   * @sign EARPIECE = 'EARPIECE'
   */
  EARPIECE = 'EARPIECE',
  /**
   * WIRED_HEADSET
   * @description 有线耳机
   * @sign WIRED_HEADSET = 'WIRED_HEADSET'
   */
  WIRED_HEADSET = 'WIRED_HEADSET',
  /**
   * BLUETOOTH
   * @description 蓝牙设备
   * @sign BLUETOOTH = 'BLUETOOTH'
   */
  BLUETOOTH = 'BLUETOOTH',
  /**
   * NONE
   * @description 无
   * @sign NONE = 'NONE'
   */
  NONE = 'NONE'
}

/**
 * QNVideoWaterMarkSize
 * @description 水印尺寸
 * @namespace
 */
export enum QNVideoWaterMarkSize {
  /**
   * LARGE
   * @description 水印尺寸大
   * @sign LARGE = 'LARGE'
   */
  LARGE = 'LARGE',
  /**
   * MEDIUM
   * @description 正常水印尺寸
   * @sign MEDIUM = 'MEDIUM'
   */
  MEDIUM = 'MEDIUM',
  /**
   * SMALL
   * @description 水印尺寸小
   * @sign SMALL = 'SMALL'
   */
  SMALL = 'SMALL'
}

/**
 * QNAVCaptureVideoOrientation
 * @description 视频方向
 * @namespace
 */
export enum QNAVCaptureVideoOrientation {
  /**
   * AVCaptureVideoOrientationPortrait
   * @description 视频垂直定向，顶部位于手机顶部
   * @sign AVCaptureVideoOrientationPortrait = 'AVCaptureVideoOrientationPortrait'
   */
  AVCaptureVideoOrientationPortrait = 'AVCaptureVideoOrientationPortrait',
  /**
   * AVCaptureVideoOrientationLandscapeRight
   * @description 视频水平定向，顶部位于手机右部
   * @sign AVCaptureVideoOrientationLandscapeRight = 'AVCaptureVideoOrientationLandscapeRight'
   */
  AVCaptureVideoOrientationLandscapeRight = 'AVCaptureVideoOrientationLandscapeRight',
  /**
   * AVCaptureVideoOrientationLandscapeLeft
   * @description 视频水平定向，顶部位于手机左部
   * @sign AVCaptureVideoOrientationLandscapeLeft = 'AVCaptureVideoOrientationLandscapeLeft'
   */
  AVCaptureVideoOrientationLandscapeLeft = 'AVCaptureVideoOrientationLandscapeLeft'
}

/**
 * QNVideoFillModeType
 * @description 填充模式
 * @namespace
 */
export enum QNVideoFillModeType {
  /**
   * QNVideoFillModeNone
   * @description 默认填充，QNVideoFillModePreserveAspectRatioAndFill
   * @sign QNVideoFillModeNone = 'QNVideoFillModeNone'
   */
  QNVideoFillModeNone = 'QNVideoFillModeNone',
  /**
   * QNVideoFillModeStretch
   * @description 不保持长宽比，图片在容器内完整显示出来，可能会变形
   * @sign QNVideoFillModeStretch = 'QNVideoFillModeStretch'
   */
  QNVideoFillModeStretch = 'QNVideoFillModeStretch',
  /**
   * QNVideoFillModePreserveAspectRatio
   * @description 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
   * @sign QNVideoFillModePreserveAspectRatio = 'QNVideoFillModePreserveAspectRatio'
   */
  QNVideoFillModePreserveAspectRatio = 'QNVideoFillModePreserveAspectRatio',
  /**
   * QNVideoFillModePreserveAspectRatioAndFill
   * @description 在保持长宽比的前提下，缩放图片，使图片充满容器
   * @sign QNVideoFillModePreserveAspectRatioAndFill = 'QNVideoFillModePreserveAspectRatioAndFill'
   */
  QNVideoFillModePreserveAspectRatioAndFill = 'QNVideoFillModePreserveAspectRatioAndFill'
}

/**
 * QNSessionPresetType
 * @description 采集分辨率
 * @namespace
 */
export enum QNSessionPresetType {
  /**
   * AVCaptureSessionPreset352x288
   * @description 采集分辨率 352x288
   * @sign AVCaptureSessionPreset352x288 = 'AVCaptureSessionPreset352x288'
   */
  AVCaptureSessionPreset352x288 = 'AVCaptureSessionPreset352x288',
  /**
   * AVCaptureSessionPreset640x480
   * @description 采集分辨率 640x480
   * @sign AVCaptureSessionPreset640x480 = 'AVCaptureSessionPreset640x480'
   */
  AVCaptureSessionPreset640x480 = 'AVCaptureSessionPreset640x480',
  /**
   * AVCaptureSessionPreset1280x720
   * @description 采集分辨率 1280x720
   * @sign AVCaptureSessionPreset1280x720 = 'AVCaptureSessionPreset1280x720'
   */
  AVCaptureSessionPreset1280x720 = 'AVCaptureSessionPreset1280x720',
  /**
   * AVCaptureSessionPreset1920x1080
   * @description 采集分辨率 1920x1080
   * @sign AVCaptureSessionPreset1920x1080 = 'AVCaptureSessionPreset1920x1080'
   */
  AVCaptureSessionPreset1920x1080 = 'AVCaptureSessionPreset1920x1080',
  /**
   * AVCaptureSessionPreset3840x2160
   * @description 采集分辨率 3840x2160
   * @sign AVCaptureSessionPreset3840x2160 = 'AVCaptureSessionPreset3840x2160'
   */
  AVCaptureSessionPreset3840x2160 = 'AVCaptureSessionPreset3840x2160',
  /**
   * AVCaptureSessionPresetiFrame960x540
   * @description 采集分辨率 960x540
   * @sign AVCaptureSessionPresetiFrame960x540 = 'AVCaptureSessionPresetiFrame960x540'
   */
  AVCaptureSessionPresetiFrame960x540 = 'AVCaptureSessionPresetiFrame960x540',
  /**
   * AVCaptureSessionPresetiFrame1280x720
   * @description 采集分辨率 1280x720
   * @sign AVCaptureSessionPresetiFrame1280x720 = 'AVCaptureSessionPresetiFrame1280x720'
   */
  AVCaptureSessionPresetiFrame1280x720 = 'AVCaptureSessionPresetiFrame1280x720',
}

/**
 * QNAudioMixerState
 * @description 混音状态
 * @namespace
 */
export enum QNAudioMixerState {
  /**
   * MIXING
   * @description 混音操作进行中的状态
   * @sign MIXING = 'MIXING'
   */
  MIXING = 'MIXING',
  /**
   * PAUSED
   * @description 混音操作暂停时的状态
   * @sign PAUSED = 'PAUSED'
   */
  PAUSED = 'PAUSED',
  /**
   * STOPPED
   * @description 混音操作停止时的状态
   * @sign STOPPED = 'STOPPED'
   */
  STOPPED = 'STOPPED',
  /**
   * COMPLETED
   * @description 混音操作完成时的状态
   * @sign COMPLETED = 'COMPLETED'
   */
  COMPLETED = 'COMPLETED'
}

/**
 * QNVideoFrameType
 * @ignore
 * @todo 数据帧暂时使用不到
 * @description 数据模式
 * @namespace
 */
export enum QNVideoFrameType {
  /**
   * YUV_NV21
   * @ignore
   * @description NV21 数据类型
   * @sign YUV_NV21 = 'YUV_NV21'
   */
  YUV_NV21 = 'YUV_NV21',
  /**
   * TEXTURE_RGB
   * @ignore
   * @description TEXTURE 2D RGB 数据类型
   * @sign TEXTURE_RGB = 'TEXTURE_RGB'
   */
  TEXTURE_RGB = 'TEXTURE_RGB',
  /**
   * TEXTURE_OES
   * @ignore
   * @description TEXTURE OES RGB 数据类型量
   * @sign TEXTURE_OES = 'TEXTURE_OES'
   */
  TEXTURE_OES = 'TEXTURE_OES'
}
