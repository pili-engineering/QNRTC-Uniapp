import { QNConnectionState, QNAudioDevice, QNAudioMixerState, QNTrackProfile } from './enum/RTCEnum';
import { QNConnectionDisconnectedInfo, QNCustomMessage, QNLiveStreamingErrorInfo, QNUNIRemoteTrack, QNAudioStreamBasicDescription, QNYUVFrame, QNTextureFrame, QNAudioFrame } from './interface/RTCInterface';
/**
 * 当房间状态改变时会触发此回调
 */
export declare type onConnectionStateChanged = (params: {
    state: QNConnectionState;
    info?: QNConnectionDisconnectedInfo;
}) => void;
/**
 * 当远端用户加入房间时会触发此回调
 */
export declare type onUserJoined = (params: {
    remoteUserID: string;
    userData: string;
}) => void;
/**
 * 当远端用户进入重连时会触发此回调
 */
export declare type onUserReconnecting = (params: {
    remoteUserID: string;
}) => void;
/**
 * 当远端用户重连成功时会触发此回调
 */
export declare type onUserReconnected = (params: {
    remoteUserID: string;
}) => void;
/**
 * 当远端用户离开房间时会触发此回调
 */
export declare type onUserLeft = (params: {
    remoteUserID: string;
}) => void;
/**
 * 当远端 Track 发布时会触发此回调
 */
export declare type onUserPublished = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当远端 Track 取消发布时会触发此回调
 */
export declare type onUserUnpublished = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当订阅audio Track 成功时会触发此回调
 */
export declare type onAudioSubscribed = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当订阅video Track 成功时会触发此回调
 */
export declare type onVideoSubscribed = (params: {
    remoteUserID: string;
    trackList: QNUNIRemoteTrack[];
}) => void;
/**
 * 当收到自定义消息时发此回调
 */
export declare type onMessageReceived = (params: QNCustomMessage) => void;
/**
 * 当本地音频播放设备改变时会触发此回调
 */
export declare type onAudioRouteChanged = (params: {
    device: QNAudioDevice;
}) => void;
/**
 * 转推任务成功创建时触发此回调
 */
export declare type onStartLiveStreaming = (params: {
    streamID: string;
}) => void;
/**
 * 转推任务成功停止时触发此回调
 */
export declare type onStoppedLiveStreaming = (params: {
    streamID: string;
}) => void;
/**
 * 转推任务合流布局更新时触发此回调
 */
export declare type onUpdatedLiveStreaming = (params: {
    streamID: string;
}) => void;
/**
 * 转推任务出错时触发此回调
 */
export declare type onErrorLiveStreaming = (params: {
    streamID: string;
    info: QNLiveStreamingErrorInfo;
}) => void;
/**
 * @internal
 * QNAudioMixer 在运行过程中，麦克风音频数据的回调  buffer => base64 encode
 */
export declare type onMicrophoneSourceDidGetAudioBuffer = (params: {
    audioBuffer: string;
    asbd: QNAudioStreamBasicDescription;
}) => void;
/**
 * @internal
 * QNAudioMixer 在运行过程中，音乐音频数据的回调  buffer => base64 encode
 */
export declare type onMusicSourceDidGetAudioBuffer = (params: {
    audioBuffer: string;
    asbd: QNAudioStreamBasicDescription;
}) => void;
/**
 * @internal
 * QNAudioMixer 在运行过程中，混音数据的回调  buffer => base64 encode
 */
export declare type onMixedSourceDidGetAudioBuffer = (params: {
    audioBuffer: string;
    asbd: QNAudioStreamBasicDescription;
}) => void;
/**
 * 混音状态改变时触发此回调
 */
export declare type onStateChanged = (params: {
    state: QNAudioMixerState;
}) => void;
/**
 * 混音操作进行过程中会不断触发此回调
 */
export declare type onMixing = (params: {
    currentTimeUs: number;
}) => void;
/**
 * 混音操作发生错误时会触发此回调
 */
export declare type onError = (params: {
    message: string;
    code: number;
}) => void;
/**
 * @internal
 * 视频 YUV 数据回调
 */
export declare type onYUVFrameAvailable = (params: {
    data: QNYUVFrame;
}) => void;
/**
 * @internal
 * 视频纹理数据回调, 并返回处理后的纹理 ID
 */
export declare type onTextureFrameAvailable = (params: {
    data: QNTextureFrame;
}) => void;
/**
 * @internal
 * 获取音频数据
 */
export declare type onAudioFrameAvailable = (params: {
    data: QNAudioFrame;
}) => void;
/**
 * 音视频 track 视频质量改变回调
 */
export declare type onVideoProfileChanged = (params: {
    profile: QNTrackProfile;
    trackID: string;
}) => void;
/**
 * 音视频 track 静默状态改变时回调
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
     * @eventProperty
     */
    audioRouteChanged: onAudioRouteChanged;
}
/**
 * 导出 RTClient 类的事件
 */
export interface QNRTCClinetEvent {
    /**
     * 当房间状态改变时会触发此回调
     * @eventProperty
     */
    connectionStateChanged: onConnectionStateChanged;
    /**
     * 当远端用户加入房间时会触发此回调
     * @eventProperty
     */
    userJoined: onUserJoined;
    /**
     * 当远端用户进入重连时会触发此回调
     * @eventProperty
     */
    userReconnecting: onUserReconnecting;
    /**
     * 当远端用户重连成功时会触发此回调
     * @eventProperty
     */
    userReconnected: onUserReconnected;
    /**
     * 当远端用户离开房间时会触发此回调
     * @eventProperty
     */
    userLeft: onUserLeft;
    /**
     * 当远端 Track 发布时会触发此回调
     * @eventProperty
     */
    userPublished: onUserPublished;
    /**
     * 当远端 Track 取消发布时会触发此回调
     * @eventProperty
     */
    userUnpublished: onUserUnpublished;
    /**
     * 当订阅audio Track 成功时会触发此回调
     * @eventProperty
     */
    audioSubscribed: onAudioSubscribed;
    /**
     * 当订阅video Track 成功时会触发此回调
     * @eventProperty
     */
    videoSubscribed: onVideoSubscribed;
    /**
     * 当收到自定义消息时发此回调
     * @eventProperty
     */
    messageReceived: onMessageReceived;
    /**
     * 转推任务出错时触发此回调
     * @eventProperty
     */
    errorLiveStreaming: onErrorLiveStreaming;
    /**
     * 转推任务合流布局更新时触发此回调
     * @eventProperty
     */
    updatedLiveStreaming: onUpdatedLiveStreaming;
    /**
     * 转推任务成功停止时触发此回调
     * @eventProperty
     */
    stoppedLiveStreaming: onStoppedLiveStreaming;
    /**
     * 转推任务成功创建时触发此回调
     * @eventProperty
     */
    startLiveStreaming: onStartLiveStreaming;
}
/**
 * 导出 RTCAudioMixer 类的事件
 */
export interface QNRTCAudioMixerEvent {
    /**
     * 混音状态改变时触发此回调
     * @eventProperty
     */
    stateChanged: onStateChanged;
    /**
     * 混音操作进行过程中会不断触发此回调
     * @eventProperty
     */
    mixing: onMixing;
    /**
     * 混音操作发生错误时会触发此回调
     * @eventProperty
     */
    error: onError;
}
/**
 * 导出 Track 类的事件
 */
export interface QNRTCTrackEvent {
    /**
     * 音视频 track 视频质量改变回调
     * @eventProperty
     */
    videoProfileChanged: onVideoProfileChanged;
    /**
     * 音视频 track 静默状态改变时回调
     * @eventProperty
     */
    muteStateChanged: onMuteStateChanged;
}
