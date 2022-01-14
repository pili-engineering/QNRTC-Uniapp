import { QNConnectionState, QNAudioDevice, QNAudioMixerState, QNTrackProfile } from './enum/RTCEnum';
import { QNConnectionDisconnectedInfo, QNCustomMessage, QNLiveStreamingErrorInfo, QNUNIRemoteTrack, QNAudioStreamBasicDescription, QNYUVFrame, QNTextureFrame, QNAudioFrame } from './interface/RTCInterface';
/**
 * 当房间状态改变时会触发此回调
 * @eventProperty
 */
export declare type onConnectionStateChanged = (params: {
    state: QNConnectionState;
    info?: QNConnectionDisconnectedInfo;
}) => void;
/**
 * 当远端用户加入房间时会触发此回调
 * @eventProperty
 */
export declare type onUserJoined = (params: {
    remoteUserID: string;
    userData: string;
}) => void;
/**
 * 当远端用户进入重连时会触发此回调
 * @eventProperty
 */
export declare type onUserReconnecting = (params: {
    remoteUserID: string;
}) => void;
/**
 * 当远端用户重连成功时会触发此回调
 * @eventProperty
 */
export declare type onUserReconnected = (params: {
    remoteUserID: string;
}) => void;
/**
 * 当远端用户离开房间时会触发此回调
 * @eventProperty
 */
export declare type onUserLeft = (params: {
    remoteUserID: string;
}) => void;
/**
 * 当远端 Track 发布时会触发此回调
 * @eventProperty
 */
export declare type onUserPublished = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当远端 Track 取消发布时会触发此回调
 * @eventProperty
 */
export declare type onUserUnpublished = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当订阅audio Track 成功时会触发此回调
 * @eventProperty
 */
export declare type onAudioSubscribed = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当订阅video Track 成功时会触发此回调
 * @eventProperty
 */
export declare type onVideoSubscribed = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当收到自定义消息时发此回调
 * @eventProperty
 */
export declare type onMessageReceived = (params: QNCustomMessage) => void;
/**
 * 当本地音频播放设备改变时会触发此回调
 * @eventProperty
 */
export declare type onAudioRouteChanged = (params: {
    device: QNAudioDevice;
}) => void;
/**
 * 转推任务成功创建时触发此回调
 * @eventProperty
 */
export declare type onStartLiveStreaming = (params: {
    streamID: string;
}) => void;
/**
 * 转推任务成功停止时触发此回调
 * @eventProperty
 */
export declare type onStoppedLiveStreaming = (params: {
    streamID: string;
}) => void;
/**
 * 转推任务合流布局更新时触发此回调
 * @eventProperty
 */
export declare type onUpdatedLiveStreaming = (params: {
    streamID: string;
}) => void;
/**
 * 转推任务出错时触发此回调
 * @eventProperty
 */
export declare type onErrorLiveStreaming = (params: {
    streamID: string;
    info: QNLiveStreamingErrorInfo;
}) => void;
/**
 * @internal
 * QNAudioMixer 在运行过程中，麦克风音频数据的回调  buffer => base64 encode
 * @eventProperty
 */
export declare type onMicrophoneSourceDidGetAudioBuffer = (params: {
    audioBuffer: string;
    asbd: QNAudioStreamBasicDescription;
}) => void;
/**
 * @internal
 * QNAudioMixer 在运行过程中，音乐音频数据的回调  buffer => base64 encode
 * @eventProperty
 */
export declare type onMusicSourceDidGetAudioBuffer = (params: {
    audioBuffer: string;
    asbd: QNAudioStreamBasicDescription;
}) => void;
/**
 * @internal
 * QNAudioMixer 在运行过程中，混音数据的回调  buffer => base64 encode
 * @eventProperty
 */
export declare type onMixedSourceDidGetAudioBuffer = (params: {
    audioBuffer: string;
    asbd: QNAudioStreamBasicDescription;
}) => void;
/**
 * 混音状态改变时触发此回调
 * @eventProperty
 */
export declare type onStateChanged = (params: {
    state: QNAudioMixerState;
}) => void;
/**
 * 混音操作进行过程中会不断触发此回调
 * @eventProperty
 */
export declare type onMixing = (params: {
    currentTimeUs: number;
}) => void;
/**
 * 混音操作发生错误时会触发此回调
 * @eventProperty
 */
export declare type onError = (params: {
    message: string;
    code: number;
}) => void;
/**
 * @internal
 * @eventProperty
 * 视频 YUV 数据回调
 */
export declare type onYUVFrameAvailable = (params: {
    data: QNYUVFrame;
}) => void;
/**
 * @internal
 * @eventProperty
 * 视频纹理数据回调, 并返回处理后的纹理 ID
 */
export declare type onTextureFrameAvailable = (params: {
    data: QNTextureFrame;
}) => void;
/**
 * @internal
 * @eventProperty
 * 获取音频数据
 */
export declare type onAudioFrameAvailable = (params: {
    data: QNAudioFrame;
}) => void;
/**
 * 音视频 track 视频质量改变回调
 * @eventProperty
 */
export declare type onVideoProfileChanged = (params: {
    profile: QNTrackProfile;
    trackID: string;
}) => void;
/**
 * 音视频 track 静默状态改变时回调
 * @eventProperty
 */
export declare type onMuteStateChanged = (params: {
    isMuted: boolean;
    trackID: string;
}) => void;
/**
 * 导出 RTC 类的事件
 */
export interface QNRTCEngineEvent {
    /**
     * 当本地音频播放设备改变时会触发此回调
     */
    audioRouteChanged: onAudioRouteChanged;
}
/**
 * 导出 RTClient 类的事件
 */
export interface QNRTCClinetEvent {
    /**
     * 当房间状态改变时会触发此回调
     */
    connectionStateChanged: onConnectionStateChanged;
    /**
     * 当远端用户加入房间时会触发此回调
     */
    userJoined: onUserJoined;
    /**
     * 当远端用户进入重连时会触发此回调
     */
    userReconnecting: onUserReconnecting;
    /**
     * 当远端用户重连成功时会触发此回调
     */
    userReconnected: onUserReconnected;
    /**
     * 当远端用户离开房间时会触发此回调
     */
    userLeft: onUserLeft;
    /**
     * 当远端 Track 发布时会触发此回调
     */
    userPublished: onUserPublished;
    /**
     * 当远端 Track 取消发布时会触发此回调
     */
    userUnpublished: onUserUnpublished;
    /**
     * 当订阅audio Track 成功时会触发此回调
     */
    audioSubscribed: onAudioSubscribed;
    /**
     * 当订阅video Track 成功时会触发此回调
     */
    videoSubscribed: onVideoSubscribed;
    /**
     * 当收到自定义消息时发此回调
     */
    messageReceived: onMessageReceived;
    /**
     * 转推任务出错时触发此回调
     */
    errorLiveStreaming: onErrorLiveStreaming;
    /**
     * 转推任务合流布局更新时触发此回调
     */
    updatedLiveStreaming: onUpdatedLiveStreaming;
    /**
     * 转推任务成功停止时触发此回调
     */
    stoppedLiveStreaming: onStoppedLiveStreaming;
    /**
     * 转推任务成功创建时触发此回调
     */
    startLiveStreaming: onStartLiveStreaming;
}
/**
 * 导出 RTCAudioMixer 类的事件
 */
export interface QNRTCAudioMixerEvent {
    /**
     * 混音状态改变时触发此回调
     */
    stateChanged: onStateChanged;
    /**
     * 混音操作进行过程中会不断触发此回调
     */
    mixing: onMixing;
    /**
     * 混音操作发生错误时会触发此回调
     */
    error: onError;
}
/**
 * 导出 Track 类的事件
 */
export interface QNRTCTrackEvent {
    /**
     * 音视频 track 视频质量改变回调
     */
    videoProfileChanged: onVideoProfileChanged;
    /**
     * 音视频 track 静默状态改变时回调
     */
    muteStateChanged: onMuteStateChanged;
}
