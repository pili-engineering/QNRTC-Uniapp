/**
 * 音频设备
 */
export declare enum QNAudioDevice {
    /**
     * 扬声器
     */
    SPEAKER_PHONE = "SPEAKER_PHONE",
    /**
     * 听筒
     */
    EARPIECE = "EARPIECE",
    /**
     * 有线耳机
     */
    WIRED_HEADSET = "WIRED_HEADSET",
    /**
     * 蓝牙设备
     */
    BLUETOOTH = "BLUETOOTH",
    /**
     * 无
     */
    NONE = "NONE"
}

/**
 * 音频帧数据
 * @internal 音频数据帧回调，性能原因，暂不支持
 */
export declare interface QNAudioFrame {
    data: string;
    size: number;
    bitsPerSample: number;
    sampleRate: number;
    numberOfChannels: number;
}

export declare class QNAudioMixer {
    /**
     * @internal
     */
    private identifyID;
    /**
     * @internal
     */
    private url;
    /**
     * @internal
     */
    private variationList;
    constructor(identifyID: string, url: string);
    /**
     * 函数变异
     * @internal
     * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
     * @param listener 包装前的 callback
     * @returns 包装后的 callback
     */
    private createAudioMixerCallback;
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    on<event extends keyof QNRTCAudioMixerEvent>(name: event, listener: QNRTCAudioMixerEvent[event]): void;
    /**
     * 取消监听对应的事件
     * @remarks 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    off<event extends keyof QNRTCAudioMixerEvent>(name: event, listener: QNRTCAudioMixerEvent[event]): void;
    /**
     * 开始混音
     * @remarks 开始指定次数的混音并播放
     * @param loopTimes 循环次数
     */
    start(loopTimes: number): void;
    /**
     * 停止混音操作
     */
    stop(): void;
    /**
     * 混音恢复操作
     */
    resume(): void;
    /**
     * 暂停混音操作
     */
    pause(): void;
    /**
     * 跳到指定位置混音
     * @param timeUs 指定位置的时间戳，单位: us
     */
    seekTo(timeUs: number): void;
    /**
     * 设置混音中麦克风和音乐的混音音量
     * @param microphoneVolume 麦克风混音音量 [0,1]
     * @param musicVolume 音乐混音音量 [0,1]
     */
    setMixingVolume(microphoneVolume: number, musicVolume: number): void;
    /**
     * 设置混音音乐本地播放的音量
     * @description 如果不希望本地播放混音的音乐，可以通过该方法将 volume 设置为 0
     * @param volume 混音音乐本地播放音量 [0,1]
     */
    setPlayingVolume(volume: number): void;
    /**
     * 获取音频文件的时长
     * @remarks 单位: us
     * @returns 播放时长
     */
    getDuration(): number;
    /**
     * 获取当前音频混音的位置
     * @remarks 单位: us
     * @returns 当前播放位置
     */
    getCurrentPosition(): number;
    /**
     * 设置是否开启返听
     * @remarks 只支持ios
     * @param playBack 是否开启耳返
     */
    setPlayBack(playBack: boolean): void;
}

/**
 * 混音状态
 */
export declare enum QNAudioMixerState {
    /**
     * 混音操作进行中的状态
     */
    MIXING = "MIXING",
    /**
     * 混音操作暂停时的状态
     */
    PAUSED = "PAUSED",
    /**
     * 混音操作停止时的状态
     */
    STOPPED = "STOPPED",
    /**
     * 混音操作完成时的状态
     */
    COMPLETED = "COMPLETED"
}

/**
 * 音频数据描述
 * @internal 混音音频帧数据，性能原因，暂不支持
 */
export declare interface QNAudioStreamBasicDescription {
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
 * 视频方向
 */
export declare enum QNAVCaptureVideoOrientation {
    /**
     * 视频垂直定向，顶部位于手机顶部
     */
    AVCaptureVideoOrientationPortrait = "AVCaptureVideoOrientationPortrait",
    /**
     * 视频水平定向，顶部位于手机右部
     */
    AVCaptureVideoOrientationLandscapeRight = "AVCaptureVideoOrientationLandscapeRight",
    /**
     * 视频水平定向，顶部位于手机左部
     */
    AVCaptureVideoOrientationLandscapeLeft = "AVCaptureVideoOrientationLandscapeLeft"
}

/**
 * 美颜配置
 */
export declare interface QNBeautySetting {
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

export declare class QNCameraVideoTrack extends QNLocalVideoTrack {
    /**
     * 销毁本地创建的 track
     */
    destroy(): void;
    /**
     * 设置采集分辨率
     * @remarks 只支持ios
     * @param sessionPreset 分辨率
     */
    setSessionPreset(sessionPreset: QNSessionPresetType): void;
    /**
     * 开启摄像头采集
     */
    startCapture(): void;
    /**
     * 关闭摄像头采集
     */
    stopCapture(): void;
    /**
     * 切换相机前后置
     */
    switchCamera(): void;
    /**
     * 开启闪光灯
     */
    turnLightOn(): void;
    /**
     * 关闭闪光灯
     */
    turnLightOff(): void;
    /**
     * 手动聚焦
     * @remarks 对于前置摄像头，大部分机型并不支持手动对焦，因此，请勿调用该接口，否则会抛异常
     * @param x 焦点 x 轴绝对位置，范围 0 - 1
     * @param y 焦点 y 轴绝对位置，范围 0 - 1
     */
    manualFocus(x: number, y: number): void;
    /**
     * 设置曝光度
     * @remarks 只支持安卓
     * @param value 曝光度
     */
    setExposureCompensation(value: number): void;
    /**
     * 获取最大曝光度
     * @description 只支持安卓
     * @returns 曝光度
     */
    getMaxExposureCompensation(): number;
    /**
     * 获取最小曝光度
     * @description 只支持安卓
     * @returns 曝光度
     */
    getMinExposureCompensation(): number;
    /**
     *  设置 camera 时的采集摄像头的旋转方向
     * @remarks 只支持ios，默认 AVCaptureVideoOrientationPortrait
     * @param videoOrientation 旋转方向
     */
    setVideoOrientation(videoOrientation: QNAVCaptureVideoOrientation): void;
    /**
     * 获取camera 时的采集摄像头的旋转方向
     * @remarks 只支持ios
     * @returns 旋转方向
     */
    getVideoOrientation(): QNAVCaptureVideoOrientation;
    /**
     * 设置缩放大小
     * @param zoom 缩放大小
     */
    setZoom(zoom: number): void;
    /**
     * 获取支持的缩放大小列表
     * @remarks 缩放大小范围为 0.0 - 1.0
     * @returns 缩放大小列表
     */
    getZooms(): number[];
    /**
     * 设置是否允许预览
     * @param isEnabled 是否允许预览
     */
    setPreviewEnabled(isEnabled: boolean): void;
    /**
     * 设置是否启用美颜
     * @param  beautySetting 美颜配置
     */
    setBeauty(beautySetting: QNBeautySetting): void;
    /**
     * 前置摄像头预览是否开启镜像
     * @remarks 默认 YES
     * @param previewMirrorFrontFacing 是否开启镜像
     */
    previewMirrorFrontFacing(previewMirrorFrontFacing: boolean): void;
    /**
     * 后置摄像头预览是否开启镜像
     * @remarks 默认 NO
     * @param previewMirrorRearFacing 是否开启镜像
     */
    previewMirrorRearFacing(previewMirrorRearFacing: boolean): void;
    /**
     * 前置摄像头，编码以及预览是否开启镜像
     * @remarks 默认 NO
     * @param encodeMirrorFrontFacing 是否开启镜像
     */
    encodeMirrorFrontFacing(encodeMirrorFrontFacing: boolean): void;
    /**
     * 后置摄像头，编码以及预览是否开启镜像
     * @remarks 默认 NO
     * @param encodeMirrorRearFacing 是否开启镜像
     */
    encodeMirrorRearFacing(encodeMirrorRearFacing: boolean): void;
    /**
     * 使用图片替代相机画面
     * @remarks 如需取消图片替代相机 resourcePath 传空字符串即可
     * @param image 图片配置
     */
    pushImage(image: QNImage): void;
    /**
     * 设置水印
     * @param waterMark 水印配置
     */
    setWaterMark(waterMark: QNVideoWaterMark): void;
    /**
     * 清空水印配置
     */
    clearWaterMark(): void;
}

/**
 * QNCameraVideoTrackConfig
 * @description 摄像头采集配置项
 * @namespace
 */
export declare interface QNCameraVideoTrackConfig {
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
 * 断开连接信息
 */
export declare interface QNConnectionDisconnectedInfo {
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
 * 连接失败原因
 */
export declare enum QNConnectionDisconnectedReason {
    /**
     * 主动退出
     */
    LEAVE = "LEAVE",
    /**
     * 被踢出房间
     */
    KICKED_OUT = "KICKED_OUT",
    /**
     * 房间被关
     */
    ROOM_CLOSED = "ROOM_CLOSED",
    /**
     * 房间人数已满
     */
    ROOM_FULL = "ROOM_FULL",
    /**
     * 发生错误异常断开
     */
    ERROR = "ERROR"
}

/**
 * 连接状态
 */
export declare enum QNConnectionState {
    /**
     * 未连接
     */
    DISCONNECTED = "DISCONNECTED",
    /**
     * 连接中
     */
    CONNECTING = "CONNECTING",
    /**
     * 连接成功
     */
    CONNECTED = "CONNECTED",
    /**
     * 重连中
     */
    RECONNECTING = "RECONNECTING",
    /**
     * 已重连
     */
    RECONNECTED = "RECONNECTED"
}

/**
 * 自定义音频采集配置
 * @internal 暂不支持自定义 track
 */
export declare interface QNCustomAudioTrackConfig {
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
 * 自定义消息配置
 */
export declare interface QNCustomMessage {
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
 * 自定义视频采集配置项
 * @internal 暂不支持自定义 track
 */
export declare interface QNCustomVideoTrackConfig {
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
 * CDN 转推配置
 */
export declare interface QNDirectLiveStreamingConfig {
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
 * 图片替换 track 配置信息
 */
export declare interface QNImage {
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
 * 合流失败信息
 */
export declare interface QNLiveStreamingErrorInfo {
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
 * 合流失败原因
 */
export declare enum QNLiveStreamingErrorInfoCode {
    /**
     * 无操作权限，请检查用户的操作权限
     */
    ERROR_NO_PERMISSION = "ERROR_NO_PERMISSION",
    /**
     * 状态异常，请检查房间状态
     */
    ERROR_INVALID_STATE = "ERROR_INVALID_STATE",
    /**
     * 参数错误，请检查参数是否合法
     */
    ERROR_INVALID_PARAMETER = "ERROR_INVALID_PARAMETER",
    /**
     * 操作超时，请重新尝试操作
     */
    ERROR_SIGNAL_TIMEOUT = "ERROR_SIGNAL_TIMEOUT",
    /**
     * 服务端错误，请重新尝试操作
     */
    SERVER_ERROR = "SERVER_ERROR"
}

/**
 * 转推失败原因
 */
export declare enum QNLiveStreamingErrorInfoType {
    /**
     * 开始转推操作异常，请检查房间状态、单路转推配置等信息
     */
    START = "START",
    /**
     * 停止转推操作异常，请检查房间状态
     */
    STOP = "STOP",
    /**
     * 更改合流布局配置操作异常，请检查房间状态、合流布局配置等信息
     */
    UPDATE = "UPDATE"
}

export declare class QNLocalAudioTrack extends QNLocalTrack {
}

/**
 * 本地音频 track 的统计信息
 */
export declare interface QNLocalAudioTrackStats {
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

export declare class QNLocalTrack extends QNTrack {
    /**
     * 设置 mute
     * @remarks 更新当前 Track 的 mute 值
     * @param  muted 是否 mute
     */
    setMuted(muted: boolean): void;
}

export declare class QNLocalVideoTrack extends QNLocalTrack {
    /**
     * 发送 SEI
     * @param message 消息内容
     * @param repeatCount 重复次数，-1 为每一帧都发送
     * @param uuid 唯一 ID
     */
    sendSEI(message: string, repeatCount: number, uuid?: string): void;
}

/**
 * 本地视频 track 的统计信息
 */
export declare interface QNLocalVideoTrackStats {
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

export declare class QNMicrophoneAudioTrack extends QNLocalAudioTrack {
    /**
     * 设置音量
     * @remarks 设置设备上当前音频输入设备采集后音量，默认 1 范围 [0,10]
     * @param volume 音量值
     */
    setVolume(volume: number): void;
    /**
     * 创建混音控制器对象
     * @remarks 创建混音控制器对象，当前仅支持同一时间混一路音频，重复对不同的 QNAudioMixer 执行 start 操作，后面的会覆盖前面的，即以后执行 start 的音频混音控制器为准进行混音
     * @param url 音频文件路径
     * @returns 混音控制器对象
     */
    createAudioMixer(url: string): QNAudioMixer;
}

/**
 * 麦克风采集配置
 */
export declare interface QNMicrophoneAudioTrackConfig {
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
 * 网络质量
 */
export declare enum QNNetworkGrade {
    /**
     * 网络未知
     */
    INVALID = "INVALID",
    /**
     * 网络优
     */
    EXCELLENT = "EXCELLENT",
    /**
     * 网络良
     */
    GOOD = "GOOD",
    /**
     * 网络一般
     */
    FAIR = "FAIR",
    /**
     * 网络差
     */
    POOR = "POOR"
}

/**
 * 网络质量
 */
export declare interface QNNetworkQuality {
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
 * 发布成功后回调
 * @param onPublished 发布结果
 * @param data identifyID 与 trackID kv对应关系
 * @param error 发布失败信息
 */
export declare type QNPublishResultCallback = ((onPublished: boolean, error: QNPublishResultError) => void);

/**
 * 发布失败信息
 * @param message 失败原因
 * @param code 失败错误码
 */
export declare interface QNPublishResultError {
    message: string;
    code: number;
}

export declare class QNRemoteAudioTrack extends QNRemoteTrack {
    /**
     * 设置音量
     * @remarks 设置当前 Track 播放音量大小
     * @param volume 音量值 默认 1 范围 [0,10]
     */
    setRemoteVolume(volume: number): void;
    /**
     * 获取音量
     * @remarks 获取当前 Track 播放的音量大小
     * @returns 音量值
     */
    getRemoteVolume(): number;
}

/**
 * 远端音频 track 的统计信息
 */
export declare interface QNRemoteAudioTrackStats {
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

export declare class QNRemoteTrack extends QNTrack {
    /**
     * 是否订阅
     * @description 该 Track 是否被订阅
     * @returns 1 订阅 2 未订阅
     */
    isSubscribed(): number;
}

/**
 * 远端用户
 */
export declare interface QNRemoteUser {
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

export declare class QNRemoteVideoTrack extends QNRemoteTrack {
    /**
     * 设置当前视频轨道质量等级
     * @param profile 质量等级
     */
    setProfile(profile: QNTrackProfile): void;
    /**
     * 获取当前 track 是否开启了大小流发布
     * @returns 1 开启 0 未开启
     */
    isMultiProfileEnabled(): number;
    /**
     * 获取当前视频轨道的分辨率等级
     */
    getProfile(): QNTrackProfile;
}

/**
 * 远端视频 track 的统计信息
 */
export declare interface QNRemoteVideoTrackStats {
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
 * 渲染模式
 */
export declare enum QNRenderMode {
    /**
     * 不保持长宽比,图片在容器内完整显示出来
     */
    FILL = "FILL",
    /**
     * 在保持长宽比的前提下，缩放图片，使图片充满容器
     */
    ASPECT_FILL = "ASPECT_FILL",
    /**
     * 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
     */
    ASPECT_FIT = "ASPECT_FIT"
}

declare class QNRTC {
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    static on<event extends keyof QNRTCEngineEvent>(name: event, listener: QNRTCEngineEvent[event]): void;
    /**
     * 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    static off<event extends keyof QNRTCEngineEvent>(name: event, listener: QNRTCEngineEvent[event]): void;
    /**
     * 请求录屏权限
     * @remarks 只支持安卓，创建 QNScreenVideoTrack 前安卓需要调用此接口获取对应权限
     * @param callback 请求录屏权限后回调
     */
    static requestPermission(callback: QNScreenPermissionResultCallback): void;
    /**
     * 判断屏幕录制功能是否可用
     * @remarks 建议创建 QNScreenVideoTrack 前先调用次接口确认是否支持录屏
     * @returns 可用 1 不可用 0
     */
    static isScreenCaptureSupported(): number;
    /**
     * 初始化 SDK
     * @remarks 必须在使用其它接口前调用
     * @param config 初始化配置项
     */
    static configRTC(config: QNRTCConfiguration): void;
    /**
     * 反初始化操作
     * @remarks 在确认不再使用实时音视频后调用此接口释放其占用的资源，此后如果再使用需要再次调用 configRTC 方法
     */
    static deinit(): void;
    /**
     * 创建 QNRTCClient 对象
     * @remarks 全局只可存在一个
     * @returns RTC 管理对象
     */
    static createClient(): QNRTCClient;
    /**
     * 创建麦克风音频轨
     * @remarks 默认 tag 为 ""
     * @param config 采集音频的配置，可指定音频质量等级与开关通讯模式
     * @returns Track 实例
     */
    static createMicrophoneAudioTrack(config: QNMicrophoneAudioTrackConfig): QNMicrophoneAudioTrack;
    /**
     * 创建摄像头视频轨
     * @remarks 默认 tag 为 ""
     * @param config 摄像头 Track 的配置，可设置视频的采集配置、编码配置等
     * @returns QNCameraVideoTrack 实例
     */
    static createCameraVideoTrack(config: QNCameraVideoTrackConfig): QNCameraVideoTrack;
    /**
     * 创建屏幕录制轨
     * @remarks 默认 tag 为 ""
     * @param config 屏幕录制 Track 的配置，可设置视频的编码配置与开关大小流功能
     * @returns QNScreenVideoTrack 实例
     */
    static createScreenVideoTrack(config: QNScreenVideoTrackConfig): QNScreenVideoTrack;
    /**
     * 创建自定义音频轨
     * @internal 暂不支持自定义轨
     * @remarks 默认 tag 为 ""
     * @param config 采集音频的配置，可指定音频质量等级
     * @returns Track 实例
     */
    static createCustomAudioTrack(config: QNCustomAudioTrackConfig): QNTrack;
    /**
     * 创建自定义视频采集轨
     * @internal 暂不支持自定义轨
     * @remarks 默认 tag 为 ""
     * @param config 自定义视频采集 Track 的配置，可设置视频的编码配置与开关大小流功能
     * @returns Track 实例
     */
    static createCustomVideoTrack(config: QNCustomVideoTrackConfig): QNTrack;
    /**
     * 音频路由切换
     * @remarks 设置是否将音频路由切换到扬声器，默认音频路由为扬声器
     * @param audioRouteToSpeakerphone 初始化配置项
     */
    static setAudioRouteToSpeakerphone(audioRouteToSpeakerphone: boolean): void;
    /**
     * 设置是否开启本地日志保存
     * @remarks 设置是否开启本地日志保存
     */
    static enableFileLogging(): void;
}
export default QNRTC;

export declare interface QNRTCAudioMixerEvent {
    /**
     * 混音状态改变时触发此回调
     */
    onStateChanged: (params: {
        state: QNAudioMixerState;
    }) => void;
    /**
     * 混音操作进行过程中会不断触发此回调
     */
    onMixing: (params: {
        currentTimeUs: number;
    }) => void;
    /**
     * 混音操作发生错误时会触发此回调
     */
    onError: (params: {
        message: string;
        code: number;
    }) => void;
}

/**
 * BwePolicy
 */
export declare enum QNRTCBwePolicy {
    /**
     * 使用 TCC
     */
    TCC = "TCC",
    /**
     * 使用 GCC
     */
    GCC = "GCC"
}

/**
 * 摄像头类型
 */
export declare enum QNRTCCameraFacing {
    /**
     * 后置摄像头
     */
    back = "back",
    /**
     * 前置摄像头
     */
    front = "front"
}

export declare class QNRTCClient {
    /**
     * @internal
     */
    private variationList;
    /**
     * remote Track 类型转换
     * @internal
     * @remarks 将 QNUNIRemoteTrack JSON 对象包装成 QNRemoteTrack 类
     * @param trackList QNUNIRemoteTrack 对象数组
     * @returns QNRemoteTrack 类对象
     */
    private transformRemoteRTCTrack;
    /**
     * local Track 类型转换
     * @internal
     * @remarks 将 QNUNILocalTrack JSON 对象包装成 QNLocalTrack 类
     * @param trackList QNUNILocalTrack 对象数组
     * @returns QNLocalTrack 类对象
     */
    private transformLocalRTCTrack;
    /**
     * 函数变异
     * @internal
     * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
     * @param listener 包装前的 callback
     * @returns 包装后的 callback
     */
    private createRemoteTrackDataCallback;
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    on<event extends keyof QNRTCClinetEvent>(name: event, listener: QNRTCClinetEvent[event]): void;
    /**
     * 取消监听对应的事件
     * @remarks 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    off<event extends keyof QNRTCClinetEvent>(name: event, listener: QNRTCClinetEvent[event]): void;
    /**
     * 加入房间
     * @param token 房间 Token
     * @param userData 用户信息
     */
    join(token: string, userData: string): void;
    /**
     * 离开房间
     */
    leave(): void;
    /**
     * 发布本地 Track 列表
     * @param tracks 要发布的本地 Track 列表
     * @param callback 发布结果回调
     */
    publish(tracks: QNLocalTrack[], callback: QNPublishResultCallback): void;
    /**
     * 取消发布本地 Track
     * @param tracks 要取消的本地 Track 列表
     */
    unpublish(tracks: QNLocalTrack[]): void;
    /**
     * 订阅远端 Track
     * @param tracks 要订阅的远端 Track
     */
    subscribe(tracks: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>): void;
    /**
     * 取消订阅远端 Track
     * @param tracks 要取消订阅的远端 Track
     */
    unsubscribe(tracks: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>): void;
    /**
     * 获取指定用户已被自己订阅的 Tracks
     * @param userID 用户 ID
     * @returns 订阅的 Track 列表
     */
    getSubscribedTracks(userID: string): Array<QNRemoteAudioTrack | QNRemoteVideoTrack>;
    /**
     * 获取已发布的近端音频轨道统计信息
     * @remarks 返回以 trackID 为 key，{{QNLocalAudioTrackStats}} 为 value 的对象
     * @returns 统计信息
     */
    getLocalAudioTrackStats(): Record<string, QNLocalAudioTrackStats>;
    /**
     * 获取已发布的近端视频轨道统计信息
     * @remarks 返回以 trackID 为 {{QNLocalVideoTrackStats}}[] 为 value 的对象，数组表示包括各个大小流信息
     * @returns 统计信息
     */
    getLocalVideoTrackStats(): Record<string, QNLocalVideoTrackStats[]>;
    /**
     * 获取已订阅的远端音频轨道统计信息
     * @remarks 返回以 trackID 为 key，{{QNLocalAudioTrackStats}} 为 value 的对象
     * @returns 统计信息
     */
    getRemoteAudioTrackStats(): Record<string, QNLocalAudioTrackStats>;
    /**
     * 获取已订阅的远端视频轨道统计信息
     * @remarks 返回以 trackID 为 {{QNRemoteVideoTrackStats}} 为 value 的对象
     * @returns 统计信息
     */
    getRemoteVideoTrackStats(): Record<string, QNRemoteVideoTrackStats>;
    /**
     * getUserNetworkQuality
     * @remarks 获取当前订阅的远端用户网络质量
     * @param userID 用户 ID
     * @returns 质量列表
     */
    getUserNetworkQuality(userID: string): QNNetworkQuality;
    /**
     * getRemoteUsers
     * @remarks 获取房间内所有的远端用户
     * @returns 远端用户列表
     */
    getRemoteUsers(): QNRemoteUser[];
    /**
     * 获取已发布 Track 列表
     * @returns Track 列表
     */
    getPublishedTracks(): QNLocalTrack[];
    /**
     * 发送自定义消息到指定用户群
     * @param message 自定义消息内容
     * @param  users 用户 ID 列表
     * @param messageId 自定义消息 ID
     */
    sendMessage(message: string, users: string[], messageId: string): void;
    /**
     * 获取 RTC client 的房间状态
     * @returns 房间状态
     */
    getConnectionState(): QNConnectionState;
    /**
     * 设置是否自动订阅
     * @remarks 默认开启自动订阅
     * @param autoSubscribe 是否自动订阅
     */
    setAutoSubscribe(autoSubscribe: boolean): void;
    /**
     * 开始单路 CDN 转推
     * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
     * @param config 单路转推配置
     */
    startLiveStreamingWithDirect(config: QNDirectLiveStreamingConfig): void;
    /**
     * 开始合流转码 CDN 转推
     * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
     * @param config 合流转推配置
     */
    startLiveStreamingWithTranscoding(config: QNTranscodingLiveStreamingConfig): void;
    /**
     * 停止单路 CDN 转推
     * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
     * @param config 单路转推配置
     */
    stopLiveStreamingWithDirect(config: QNDirectLiveStreamingConfig): void;
    /**
     * 停止合流转码 CDN 转推
     * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
     * @param config 合流转推配置
     */
    stopLiveStreamingWithTranscoding(config: QNTranscodingLiveStreamingConfig): void;
    /**
     * 新增、更新合流转推布局配置
     * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
     * 新增 Track 布局以及对已有的 Track 的合流布局进行更新均可通过该接口实现，只需修改 transcodingTracks 对应的 Track 内容即可
     * @param streamID 合流 ID
     * @param transcodingTracks 待新增、更新的合流转推布局配置
     */
    setTranscodingLiveStreamingTracks(streamID: string, transcodingTracks: QNTranscodingLiveStreamingTrack[]): void;
    /**
     * 移除合流转推布局配置
     * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
     * @param streamID 合流 ID
     * @param transcodingTracks 待移除合流转推布局配置
     */
    removeTranscodingLiveStreamingTracks(streamID: string, transcodingTracks: QNTranscodingLiveStreamingTrack[]): void;
}

export declare interface QNRTCClinetEvent {
    /**
     * 当房间状态改变时会触发此回调
     */
    onConnectionStateChanged: (params: {
        state: QNConnectionState;
        info?: QNConnectionDisconnectedInfo;
    }) => void;
    /**
     * 当远端用户加入房间时会触发此回调
     */
    onUserJoined: (params: {
        remoteUserID: string;
        userData: string;
    }) => void;
    /**
     * 当远端用户进入重连时会触发此回调
     */
    onUserReconnecting: (params: {
        remoteUserID: string;
    }) => void;
    /**
     * 当远端用户重连成功时会触发此回调
     */
    onUserReconnected: (params: {
        remoteUserID: string;
    }) => void;
    /**
     * 当远端用户离开房间时会触发此回调
     */
    onUserLeft: (params: {
        remoteUserID: string;
    }) => void;
    /**
     * 当远端 Track 发布时会触发此回调
     */
    onUserPublished: (params: {
        remoteUserID: string;
        trackList: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>;
    }) => void;
    /**
     * 当远端 Track 取消发布时会触发此回调
     */
    onUserUnpublished: (params: {
        remoteUserID: string;
        trackList: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>;
    }) => void;
    /**
     * 当订阅 audio Track 成功时会触发此回调
     */
    onAudioSubscribed: (params: {
        remoteUserID: string;
        trackList: Array<QNRemoteAudioTrack>;
    }) => void;
    /**
     * 当订阅 video Track 成功时会触发此回调
     */
    onVideoSubscribed: (params: {
        remoteUserID: string;
        trackList: Array<QNRemoteVideoTrack>;
    }) => void;
    /**
     * 当收到自定义消息时发此回调
     */
    onMessageReceived: (message: QNCustomMessage) => void;
    /**
     * 转推任务出错时触发此回调
     */
    onErrorLiveStreaming: (params: {
        streamID: string;
        info: QNLiveStreamingErrorInfo;
    }) => void;
    /**
     * 转推任务合流布局更新时触发此回调
     */
    onUpdatedLiveStreaming: (params: {
        streamID: string;
    }) => void;
    /**
     * 转推任务成功停止时触发此回调
     */
    onStoppedLiveStreaming: (params: {
        streamID: string;
    }) => void;
    /**
     * 转推任务成功创建时触发此回调
     */
    onStartLiveStreaming: (params: {
        streamID: string;
    }) => void;
}

/**
 * QNRTC 初始化配置项
 */
export declare interface QNRTCConfiguration {
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
}

export declare interface QNRTCEngineEvent {
    /**
     * 当本地音频播放设备改变时会触发此回调
     * @param device 设备类型
     */
    onAudioRouteChanged: (params: {
        device: QNAudioDevice;
    }) => void;
}

/**
 * 日志等级
 */
export declare enum QNRTCLogLevel {
    /**
     * Verbose 日志输出
     */
    verbose = "verbose",
    /**
     * Info 日志输出
     */
    info = "info",
    /**
     * Warning 日志输出
     */
    warning = "warning",
    /**
     * Error 日志输出
     */
    error = "error",
    /**
     * None 不输出日志
     */
    none = "none"
}

/**
 * 网络传输模式
 */
export declare enum QNRTCPolicy {
    /**
     * 使用 UDP
     */
    forceUDP = "forceUDP",
    /**
     * 使用 TCP
     */
    forceTCP = "forceTCP",
    /**
     * 优先 UDP，不通的话自动改为 TCP
     */
    preferUDP = "preferUDP"
}

export declare interface QNRTCTrackEvent {
    /**
     * 音视频 track 视频质量改变回调
     */
    onVideoProfileChanged: (params: {
        profile: QNTrackProfile;
        trackID: string;
    }) => void;
    /**
     * 音视频 track 静默状态改变时回调
     */
    onMuteStateChanged: (params: {
        isMuted: boolean;
        trackID: string;
    }) => void;
}

/**
 * 轨类型
 */
export declare enum QNRTCTrackKind {
    /**
     * 音频
     */
    audio = "audio",
    /**
     * 视频
     */
    video = "video"
}

/**
 * 请求录屏权限后回调
 * @param result 请求权限结果
 */
export declare type QNScreenPermissionResultCallback = ((result: boolean) => void);

export declare class QNScreenVideoTrack extends QNLocalVideoTrack {
    /**
     * 设置屏幕录制的帧率
     * @remarks 默认值 20
     * @param screenRecorderFrameRate 帧率
     */
    setScreenRecorderFrameRate(screenRecorderFrameRate: number): void;
}

/**
 * 录屏采集配置项
 */
export declare interface QNScreenVideoTrackConfig {
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
 * 采集分辨率
 */
export declare enum QNSessionPresetType {
    /**
     * 采集分辨率 352x288
     */
    AVCaptureSessionPreset352x288 = "AVCaptureSessionPreset352x288",
    /**
     * 采集分辨率 640x480
     */
    AVCaptureSessionPreset640x480 = "AVCaptureSessionPreset640x480",
    /**
     * 采集分辨率 1280x720
     */
    AVCaptureSessionPreset1280x720 = "AVCaptureSessionPreset1280x720",
    /**
     * 采集分辨率 1920x1080
     */
    AVCaptureSessionPreset1920x1080 = "AVCaptureSessionPreset1920x1080",
    /**
     * 采集分辨率 3840x2160
     */
    AVCaptureSessionPreset3840x2160 = "AVCaptureSessionPreset3840x2160",
    /**
     * 采集分辨率 960x540
     */
    AVCaptureSessionPresetiFrame960x540 = "AVCaptureSessionPresetiFrame960x540",
    /**
     * 采集分辨率 1280x720
     */
    AVCaptureSessionPresetiFrame1280x720 = "AVCaptureSessionPresetiFrame1280x720"
}

/**
 * 纹理数据
 * @internal 纹理数据回调，前端无法直接操作原生内存信息，暂不支持
 */
export declare interface QNTextureFrame {
    textureID: number;
    type: QNVideoFrameType;
    width: number;
    height: number;
    rotation: number;
    timestampNs: number;
    transformMatrix: number[];
}

export declare class QNTrack {
    /**
     * 本地唯一标识符
     */
    identifyID: string;
    /**
     * 类型
     */
    kind: QNRTCTrackKind;
    /**
     * 自定义 tag
     */
    tag: string;
    /**
     * trackID
     */
    trackID: string;
    /**
     * 用户 ID
     */
    userID: string;
    /**
     * @internal
     */
    raw: QNUNILocalTrack | QNUNIRemoteTrack;
    constructor({ identifyID, kind, tag, trackID, raw, userID }: QNTrackParams);
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    on<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void;
    /**
     * 取消监听对应的事件
     * @remarks 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    off<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void;
    /**
     * 标识 Track 是否为 mute 状态
     * @returns 是否被 mute
     */
    getMuted(): number;
}

declare interface QNTrackParams {
    identifyID: string;
    kind: QNRTCTrackKind;
    tag: string;
    trackID: string;
    userID: string;
    raw: QNUNILocalTrack | QNUNIRemoteTrack;
}

/**
 * 大小流类型
 */
export declare enum QNTrackProfile {
    /**
     * 低分辨率
     */
    LOW = "LOW",
    /**
     * 中分辨率
     */
    MEDIUM = "MEDIUM",
    /**
     * 高分辨率
     */
    HIGH = "HIGH"
}

/**
 * 合流配置
 */
export declare interface QNTranscodingLiveStreamingConfig {
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
 * 合流图片或背景配置
 */
export declare interface QNTranscodingLiveStreamingImage {
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
 * 合流 track 配置信息
 */
export declare interface QNTranscodingLiveStreamingTrack {
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
 * 用于原生与前端通讯的 localtrack 信息
 * @internal
 */
export declare interface QNUNILocalTrack {
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
export declare interface QNUNIRemoteTrack {
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
 *  用于原生与前端通讯的远端用户信息
 * @internal
 */
export declare interface QNUNIRemoteUser {
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
 * 填充模式
 */
export declare enum QNVideoFillModeType {
    /**
     * 默认填充，QNVideoFillModePreserveAspectRatioAndFill
     */
    QNVideoFillModeNone = "QNVideoFillModeNone",
    /**
     * 不保持长宽比，图片在容器内完整显示出来，可能会变形
     */
    QNVideoFillModeStretch = "QNVideoFillModeStretch",
    /**
     * 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
     */
    QNVideoFillModePreserveAspectRatio = "QNVideoFillModePreserveAspectRatio",
    /**
     * 在保持长宽比的前提下，缩放图片，使图片充满容器
     */
    QNVideoFillModePreserveAspectRatioAndFill = "QNVideoFillModePreserveAspectRatioAndFill"
}

/**
 * 数据模式
 * @internal 数据帧暂时使用不到
 */
export declare enum QNVideoFrameType {
    /**
     *  NV21 数据类型
     */
    YUV_NV21 = "YUV_NV21",
    /**
     * TEXTURE 2D RGB 数据类型
     */
    TEXTURE_RGB = "TEXTURE_RGB",
    /**
     * TEXTURE OES RGB 数据类型量
     */
    TEXTURE_OES = "TEXTURE_OES"
}

/**
 * 水印配置
 */
export declare interface QNVideoWaterMark {
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
 * 水印尺寸
 */
export declare enum QNVideoWaterMarkSize {
    /**
     * 水印尺寸大
     */
    LARGE = "LARGE",
    /**
     * 正常水印尺寸
     */
    MEDIUM = "MEDIUM",
    /**
     * 水印尺寸小
     */
    SMALL = "SMALL"
}

/**
 * YUV 原数据
 * @internal YUV数据帧回调，需要通过转 base64 再转 Uint8Array，会造成卡顿，暂不支持
 */
export declare interface QNYUVFrame {
    data: string;
    type: QNVideoFrameType;
    width: number;
    height: number;
    rotation: number;
    timestampNs: number;
}

export { }
