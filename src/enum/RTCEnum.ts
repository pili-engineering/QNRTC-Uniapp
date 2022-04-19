/* eslint-disable no-unused-vars */
/**
 * 摄像头类型
 */
export enum QNRTCCameraFacing {
  /**
   * 后置摄像头
   */
  back = 'back',
  /**
   * 前置摄像头
   */
  front = 'front'
}

/**
 * 网络传输模式
 */
export enum QNRTCPolicy {
  /**
   * 使用 UDP
   */
  forceUDP = 'forceUDP',
  /**
   * 使用 TCP
   */
  forceTCP = 'forceTCP',
  /**
   * 优先 UDP，不通的话自动改为 TCP
   */
  preferUDP = 'preferUDP'
}

/**
 * BwePolicy
 */
export enum QNRTCBwePolicy {
  /**
   * 使用 TCC
   */
  TCC = 'TCC',
  /**
   * 使用 GCC
   */
  GCC = 'GCC'
}

/**
 * 轨类型
 */
export enum QNRTCTrackKind {
  /**
   * 音频
   */
  audio = 'audio',
  /**
   * 视频
   */
  video = 'video'
}

/**
 * 日志等级
 */
export enum QNRTCLogLevel {
  /**
   * Verbose 日志输出
   */
  verbose = 'verbose',
  /**
   * Info 日志输出
   */
  info = 'info',
  /**
   * Warning 日志输出
   */
  warning = 'warning',
  /**
   * Error 日志输出
   */
  error = 'error',
  /**
   * None 不输出日志
   */
  none = 'none'
}

/**
 * 连接状态
 */
export enum QNConnectionState {
  /**
   * 未连接
   */
  DISCONNECTED = 'DISCONNECTED',
  /**
   * 连接中
   */
  CONNECTING = 'CONNECTING',
  /**
   * 连接成功
   */
  CONNECTED = 'CONNECTED',
  /**
   * 重连中
   */
  RECONNECTING = 'RECONNECTING',
  /**
   * 已重连
   */
  RECONNECTED = 'RECONNECTED'
}

/**
 * 渲染模式
 */
export enum QNRenderMode {
  /**
   * 不保持长宽比,图片在容器内完整显示出来
   */
  FILL = 'FILL',
  /**
   * 在保持长宽比的前提下，缩放图片，使图片充满容器
   */
  ASPECT_FILL = 'ASPECT_FILL',
  /**
   * 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
   */
  ASPECT_FIT = 'ASPECT_FIT'
}

/**
 * 大小流类型
 */
export enum QNTrackProfile {
  /**
   * 低分辨率
   */
  LOW = 'LOW',
  /**
   * 中分辨率
   */
  MEDIUM = 'MEDIUM',
  /**
   * 高分辨率
   */
  HIGH = 'HIGH'
}

/**
 * 网络质量
 */
export enum QNNetworkGrade {
  /**
   * 网络未知
   */
  INVALID = 'INVALID',
  /**
   * 网络优
   */
  EXCELLENT = 'EXCELLENT',
  /**
   * 网络良
   */
  GOOD = 'GOOD',
  /**
   * 网络一般
   */
  FAIR = 'FAIR',
  /**
   * 网络差
   */
  POOR = 'POOR'
}

/**
 * 连接失败原因
 */
export enum QNConnectionDisconnectedReason {
  /**
   * 主动退出
   */
  LEAVE = 'LEAVE',
  /**
   * 被踢出房间
   */
  KICKED_OUT = 'KICKED_OUT',
  /**
   * 房间被关
   */
  ROOM_CLOSED = 'ROOM_CLOSED',
  /**
   * 房间人数已满
   */
  ROOM_FULL = 'ROOM_FULL',
  /**
   * 发生错误异常断开
   */
  ERROR = 'ERROR'
}

/**
 * 转推失败原因
 */
export enum QNLiveStreamingErrorInfoType {
  /**
   * 开始转推操作异常，请检查房间状态、单路转推配置等信息
   */
  START = 'START',
  /**
   * 停止转推操作异常，请检查房间状态
   */
  STOP = 'STOP',
  /**
   * 更改合流布局配置操作异常，请检查房间状态、合流布局配置等信息
   */
  UPDATE = 'UPDATE'
}

/**
 * 合流失败原因
 */
export enum QNLiveStreamingErrorInfoCode {
  /**
   * 无操作权限，请检查用户的操作权限
   */
  ERROR_NO_PERMISSION = 'ERROR_NO_PERMISSION',
  /**
   * 状态异常，请检查房间状态
   */
  ERROR_INVALID_STATE = 'ERROR_INVALID_STATE',
  /**
   * 参数错误，请检查参数是否合法
   */
  ERROR_INVALID_PARAMETER = 'ERROR_INVALID_PARAMETER',
  /**
   * 操作超时，请重新尝试操作
   */
  ERROR_SIGNAL_TIMEOUT = 'ERROR_SIGNAL_TIMEOUT',
  /**
   * 服务端错误，请重新尝试操作
   */
  SERVER_ERROR = 'SERVER_ERROR'
}

/**
 * 音频设备
 */
export enum QNAudioDevice {
  /**
   * 扬声器
   */
  SPEAKER_PHONE = 'SPEAKER_PHONE',
  /**
   * 听筒
   */
  EARPIECE = 'EARPIECE',
  /**
   * 有线耳机
   */
  WIRED_HEADSET = 'WIRED_HEADSET',
  /**
   * 蓝牙设备
   */
  BLUETOOTH = 'BLUETOOTH',
  /**
   * 无
   */
  NONE = 'NONE'
}

/**
 * 水印尺寸
 */
export enum QNVideoWaterMarkSize {
  /**
   * 水印尺寸大
   */
  LARGE = 'LARGE',
  /**
   * 正常水印尺寸
   */
  MEDIUM = 'MEDIUM',
  /**
   * 水印尺寸小
   */
  SMALL = 'SMALL'
}

/**
 * 视频方向
 */
export enum QNAVCaptureVideoOrientation {
  /**
   * 视频垂直定向，顶部位于手机顶部
   */
  AVCaptureVideoOrientationPortrait = 'AVCaptureVideoOrientationPortrait',
  /**
   * 视频水平定向，顶部位于手机右部
   */
  AVCaptureVideoOrientationLandscapeRight = 'AVCaptureVideoOrientationLandscapeRight',
  /**
   * 视频水平定向，顶部位于手机左部
   */
  AVCaptureVideoOrientationLandscapeLeft = 'AVCaptureVideoOrientationLandscapeLeft'
}

/**
 * 填充模式
 */
export enum QNVideoFillModeType {
  /**
   * 默认填充，QNVideoFillModePreserveAspectRatioAndFill
   */
  QNVideoFillModeNone = 'QNVideoFillModeNone',
  /**
   * 不保持长宽比，图片在容器内完整显示出来，可能会变形
   */
  QNVideoFillModeStretch = 'QNVideoFillModeStretch',
  /**
   * 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
   */
  QNVideoFillModePreserveAspectRatio = 'QNVideoFillModePreserveAspectRatio',
  /**
   * 在保持长宽比的前提下，缩放图片，使图片充满容器
   */
  QNVideoFillModePreserveAspectRatioAndFill = 'QNVideoFillModePreserveAspectRatioAndFill'
}

/**
 * 采集分辨率
 */
export enum QNSessionPresetType {
  /**
   * 采集分辨率 352x288
   */
  AVCaptureSessionPreset352x288 = 'AVCaptureSessionPreset352x288',
  /**
   * 采集分辨率 640x480
   */
  AVCaptureSessionPreset640x480 = 'AVCaptureSessionPreset640x480',
  /**
   * 采集分辨率 1280x720
   */
  AVCaptureSessionPreset1280x720 = 'AVCaptureSessionPreset1280x720',
  /**
   * 采集分辨率 1920x1080
   */
  AVCaptureSessionPreset1920x1080 = 'AVCaptureSessionPreset1920x1080',
  /**
   * 采集分辨率 3840x2160
   */
  AVCaptureSessionPreset3840x2160 = 'AVCaptureSessionPreset3840x2160',
  /**
   * 采集分辨率 960x540
   */
  AVCaptureSessionPresetiFrame960x540 = 'AVCaptureSessionPresetiFrame960x540',
  /**
   * 采集分辨率 1280x720
   */
  AVCaptureSessionPresetiFrame1280x720 = 'AVCaptureSessionPresetiFrame1280x720',
}

/**
 * 混音状态
 */
export enum QNAudioMixerState {
  /**
   * 混音操作进行中的状态
   */
  MIXING = 'MIXING',
  /**
   * 混音操作暂停时的状态
   */
  PAUSED = 'PAUSED',
  /**
   * 混音操作停止时的状态
   */
  STOPPED = 'STOPPED',
  /**
   * 混音操作完成时的状态
   */
  COMPLETED = 'COMPLETED'
}

/**
 * 数据模式
 * @internal 数据帧暂时使用不到
 */
export enum QNVideoFrameType {
  /**
   *  NV21 数据类型
   */
  YUV_NV21 = 'YUV_NV21',
  /**
   * TEXTURE 2D RGB 数据类型
   */
  TEXTURE_RGB = 'TEXTURE_RGB',
  /**
   * TEXTURE OES RGB 数据类型量
   */
  TEXTURE_OES = 'TEXTURE_OES'
}
