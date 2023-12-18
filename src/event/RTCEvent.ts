import { QNConnectionState, QNAudioDevice, QNAudioMixerState, QNTrackProfile, QNAudioMusicMixerState } from '../enum/RTCEnum'
import {
  QNConnectionDisconnectedInfo,
  QNCustomMessage,
  QNLiveStreamingErrorInfo,
} from '../interface/RTCInterface'
import { QNRemoteAudioTrack } from '../class/RTCRemoteAudioTrack'
import { QNRemoteVideoTrack } from '../class/RTCRemoteVideoTrack'

/** 导出 RTC 类的事件 */
export interface QNRTCEngineEvent {
  /**
   * 当本地音频播放设备改变时会触发此回调
   */
  onAudioRouteChanged: (params: { device: QNAudioDevice }) => void
}

/** 导出 RTClient 类的事件 */
export interface QNRTCClinetEvent {
  /**
   * 当房间状态改变时会触发此回调
   */
  onConnectionStateChanged: (params: {
    state: QNConnectionState
    info?: QNConnectionDisconnectedInfo
  }) => void
  /**
   * 当远端用户加入房间时会触发此回调
   */
  onUserJoined: (params: { remoteUserID: string; userData: string }) => void
  /**
   * 当远端用户进入重连时会触发此回调
   */
  onUserReconnecting: (params: { remoteUserID: string }) => void
  /**
   * 当远端用户重连成功时会触发此回调
   */
  onUserReconnected: (params: { remoteUserID: string }) => void
  /**
   * 当远端用户离开房间时会触发此回调
   */
  onUserLeft: (params: { remoteUserID: string }) => void
  /**
   * 当远端 Track 发布时会触发此回调
   */
  onUserPublished: (params: {
    remoteUserID: string
    trackList: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>
  }) => void
  /**
   * 当远端 Track 取消发布时会触发此回调
   */
  onUserUnpublished: (params: {
    remoteUserID: string
    trackList: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>
  }) => void
  /**
   * 当订阅 audio Track 成功时会触发此回调
   */
  onAudioSubscribed: (params: {
    remoteUserID: string
    trackList: Array<QNRemoteAudioTrack>
  }) => void
  /**
   * 当订阅 video Track 成功时会触发此回调
   */
  onVideoSubscribed: (params: {
    remoteUserID: string
    trackList: Array<QNRemoteVideoTrack>
  }) => void
  /**
   * 当收到自定义消息时发此回调
   */
  onMessageReceived: (message: QNCustomMessage) => void
  /**
   * 转推任务出错时触发此回调
   */
  onErrorLiveStreaming: (params: { streamID: string; info: QNLiveStreamingErrorInfo }) => void
  /**
   * 转推任务合流布局更新时触发此回调
   */
  onUpdatedLiveStreaming: (params: { streamID: string }) => void
  /**
   * 转推任务成功停止时触发此回调
   */
  onStoppedLiveStreaming: (params: { streamID: string }) => void
  /**
   * 转推任务成功创建时触发此回调
   */
  onStartLiveStreaming: (params: { streamID: string }) => void
}

/** 导出 RTCAudioMixer 类的事件 */
export interface QNRTCAudioMixerEvent {
  /**
   * 混音状态改变时触发此回调
   */
  onStateChanged: (params: { state: QNAudioMixerState }) => void
  /**
   * 混音操作进行过程中会不断触发此回调
   */
  onMixing: (params: { currentTimeUs: number }) => void
  /**
   * 混音操作发生错误时会触发此回调
   */
  onError: (params: { message: string; code: number }) => void
}

/** 导出 RTCAudioMusicMixer 类的事件 */
export interface QNRTCAudioMusicMixerEvent {
  /**
   * 混音状态改变时触发此回调
   */
  onStateChanged: (params: { state: QNAudioMusicMixerState }) => void
  /**
   * 混音操作进行过程中会不断触发此回调
   * @param params 参数
   * @param params.position 当前正在执行混音操作的音频帧时间戳，单位: ms
   */
  onMixing: (params: { position: number }) => void
  /**
   * 混音操作发生错误时会触发此回调
   */
  onError: (params: { message: string; code: number }) => void
}

/** 导出 RTCAudioEffectMixer 类的事件 */
export interface QNRTCAudioEffectMixerEvent {
  /**
   * 音效混音完成时触发此回调
   * @param params 参数
   * @param params.effectID 音效文件的唯一标识符
   */
  onEffectFinished: (params: { effectID: number }) => void
  /**
   * 特定音效混音发生异常时会触发此回调
   */
  onEffectError: (parmas: { effectID: number, code: number, message: string }) => void
  /**
   * 音效混音发生错误时会触发此回调
   */
  onError: (params: { code: number, errorMemessagessage: string }) => void
}

/** 导出 Track 类的事件 */
export interface QNRTCTrackEvent {
  /**
   * 音视频 track 视频质量改变回调
   */
  onVideoProfileChanged: (params: { profile: QNTrackProfile; trackID: string }) => void
  /**
   * 音视频 track 静默状态改变时回调
   */
  onMuteStateChanged: (params: { isMuted: boolean; trackID: string }) => void
}
