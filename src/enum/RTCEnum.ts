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
  front = 'front',
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
  preferUDP = 'preferUDP',
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
  GCC = 'GCC',
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
  video = 'video',
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
  none = 'none',
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
  RECONNECTED = 'RECONNECTED',
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
  ASPECT_FIT = 'ASPECT_FIT',
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
  HIGH = 'HIGH',
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
  POOR = 'POOR',
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
  ERROR = 'ERROR',
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
  UPDATE = 'UPDATE',
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
  SERVER_ERROR = 'SERVER_ERROR',
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
  NONE = 'NONE',
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
  SMALL = 'SMALL',
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
  AVCaptureVideoOrientationLandscapeLeft = 'AVCaptureVideoOrientationLandscapeLeft',
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
  QNVideoFillModePreserveAspectRatioAndFill = 'QNVideoFillModePreserveAspectRatioAndFill',
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
  COMPLETED = 'COMPLETED',
}

/**
 * 音乐混音状态
 */
export enum QNAudioMusicMixerState {
  /**
   * 混音控制器的初始状态
   */
  IDLE = 'IDLE',
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
  COMPLETED = 'COMPLETED',
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
  TEXTURE_OES = 'TEXTURE_OES',
}

/**
 * 音频场景
 * @since 5.2.5
 * @remarks 音频场景。可通过 @see {@link QNRTCConfiguration} 在初始化时指定，也可通过 @see {@link QNRTC.setAudioScene} 接口动态切换
 * @privateRemarks
 * 1. 不同的使用场景，最佳音频处理模式不一样，可根据使用场景及不同音频场景的定义选择最佳的音频场景
 * 2. 不同的音频场景，系统使用的音量类型是不一样的，详情可参考具体音频场景的定义
 * 3. 佩戴蓝牙耳机的场景，将恒定使用通话模式，在蓝牙通话过程中修改的音频场景将会在蓝牙连接断开后生效
 * 4. 佩戴有线耳机的场景，将恒定使用媒体模式，在通话过程中修改的音频场景将会在耳机拔出后生效
 *
 */
export enum QNAudioScene {
  /**
   * 默认音频场景
   * @remarks 该场景会根据发布和订阅的情况自动切换音频模式，仅发布或仅订阅时，SDK 使用媒体模式；同时发布和订阅时，SDK 将自动切换到通话模式
   */
  DEFAULT = 'DEFAULT',
  /**
   * 清晰语聊场景
   * @remarks 该场景恒定使用通话模式，调节的音量类型为通话音量，为了人声清晰，环境音和音乐声会有一定抑制
   */
  VOICE_CHAT = 'VOICE_CHAT',
  /**
   * 音质均衡场景
   * @remarks 该场景恒定使用媒体模式，调节的音量类型为媒体音量，对环境音和音乐声的还原性更优
   */
  SOUND_EQUALIZE = 'SOUND_EQUALIZE',
}

/**
 * 角色类型
 * @since 5.2.5
 * @remarks 仅在互动直播场景生效
 */
export enum QNClientRole {
  /**
   * 主播角色
   * @remarks 拥有发布和订阅媒体流的权限，仅适用于互动直播场景
   */
  BROADCASTER = 'BROADCASTER',
  /**
   * 观众角色
   * @remarks 仅有订阅媒体流的权限，仅适用于互动直播场景
   */
  AUDIENCE = 'AUDIENCE',
}

/**
 * 直播场景
 * @since 5.2.5
 */
export enum QNClientMode {
  /**
   * 通信场景
   * @remarks 用于常见的一对一通话或群聊，该场景中，所有用户均可以发布和订阅音视频轨道
   */
  RTC = 'RTC',
  /**
   * 直播场景
   * @remarks 有主播和观众两种用户角色，可以通过 @see {@link QNRTCClient.setClientRole} 方法设置用户角色为主播或观众。主播可以发布和订阅音视频轨道，而观众只能订阅音视频轨道，无法发布
   * @privateRemarks 直播场景中的用户角色默认为观众。如需发布音视频，必须将角色修改为主播
   */
  LIVE = 'LIVE',
}

/**
 * 跨房媒体转发状态
 * @since 5.2.5
 */
export enum QNMediaRelayState {
  /** 状态未知 */
  UNKNOWN = 'UNKNOWN',
  /** 成功 */
  SUCCESS = 'SUCCESS',
  /** 停止 */
  STOPPED = 'STOPPED',
  /** Token 失败 */
  INVALID_TOKEN = 'INVALID_TOKEN',
  /** 目标房间不存在 */
  NO_ROOM = 'NO_ROOM',
  /** 目标房间已关闭 */
  ROOM_CLOSED = 'ROOM_CLOSED',
  /** 目标房间存在相同用户名 */
  PLAYER_EXISTED = 'PLAYER_EXISTED',
}

/**
 * 视频质量降级模式
 * @since 5.2.5
 */
export enum QNDegradationPreference {
  /**
   * 默认模式
   * @remarks 默认模式会根据 {@link QNClientMode} 设置的场景智能选择最优的视频降级模式。若场景为 RTC，则使用 BALANCED 模式；若场景为 LIVE，则使用 MAINTAIN_RESOLUTION 模式
   * 若您同时有通过 {@link QNRTCConfiguration} maintainResolution 接口开启固定分辨率，则 DEFAULT 模式将会失效
   */
  DEFAULT = 'DEFAULT',
  /**
   * 保持帧率
   * @remarks 保持帧率, 降低分辨率和适当的码率
   */
  MAINTAIN_FRAMERATE = 'MAINTAIN_FRAMERATE',
  /**
   * 保持分辨率
   * @remarks 保持分辨率, 降低帧率和适当的码率
   */
  MAINTAIN_RESOLUTION = 'MAINTAIN_RESOLUTION',
  /**
   * 平衡调节分辨率和帧率
   * @remarks 平衡模式, 降低帧率，分辨率和适当的码率
   */
  BALANCED = 'BALANCED',
  /**
   * 保持分辨率和帧率，适当调整码率
   * 仅控制码率, 保持帧率和分辨率
   */
  ADAPT_BITRATE_ONLY = 'ADAPT_BITRATE_ONLY',
}

/**
 * 视频编码预设值
 * @since 5.2.5
 * @remarks 在使用编码预设值的情况下，SDK 会区分通话和直播场景，使用更适合该场景的码率。场景可通过 {@link QNRTC.createClient} 进行设置
 * 在使用编码预设值时，需保证采集分辨率的宽高比和预设相同，否则可能会出现编码分辨率与设置不符的情况
 */
export enum QNVideoFormatDefault {
  /** 分辨率 320x180，帧率 15fps */
  VIDEO_320x180_15 = 'VIDEO_320x180_15',
  /** 分辨率 320x240，帧率 15fps */
  VIDEO_320x240_15 = 'VIDEO_320x240_15',
  /** 分辨率 640x360，帧率 15fps */
  VIDEO_640x360_15 = 'VIDEO_640x360_15',
  /** 分辨率 640x360，帧率 30fps */
  VIDEO_640x360_30 = 'VIDEO_640x360_30',
  /** 分辨率 640x480，帧率 15fps */
  VIDEO_640x480_15 = 'VIDEO_640x480_15',
  /** 分辨率 640x480，帧率 30fps */
  VIDEO_640x480_30 = 'VIDEO_640x480_30',
  /** 分辨率 960x540，帧率 15fps */
  VIDEO_960x540_15 = 'VIDEO_960x540_15',
  /** 分辨率 960x540，帧率 30fps */
  VIDEO_960x540_30 = 'VIDEO_960x540_30',
  /** 分辨率 960x720，帧率 15fps */
  VIDEO_960x720_15 = 'VIDEO_960x720_15',
  /** 分辨率 960x720，帧率 30fps */
  VIDEO_960x720_30 = 'VIDEO_960x720_30',
  /** 分辨率 1280x720，帧率 15fps */
  VIDEO_1280x720_15 = 'VIDEO_1280x720_15',
  /** 分辨率 1280x720，帧率 30fps */
  VIDEO_1280x720_30 = 'VIDEO_1280x720_30',
}
