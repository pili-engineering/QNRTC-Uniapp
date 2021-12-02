import { QNUNIRemoteTrack, QNLocalAudioTrackStats, QNLocalVideoTrackStats, QNRemoteAudioTrackStats, QNRemoteVideoTrackStats, QNNetworkQuality, QNRemoteUser, QNUNIRemoteUser, QNDirectLiveStreamingConfig, QNTranscodingLiveStreamingConfig, QNTranscodingLiveStreamingTrack, QNTrackStateList } from '../interface/RTCInterface'
import { QNPublishResultCallback } from '../RTCPreset'
import { QNConnectionState, QNRTCTrackKind } from '../enum/RTCEnum'
import { QNRTCClinetEvent } from '../RTCEvent'
import QNRemoteVideoTrack from './RTCRemoteVideoTrack'
import QNRemoteAudioTrack from './RTCRemoteAudioTrack'
import QNLocalTrack from './RTCLocalTrack'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRTCClient = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcClient')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNEvent = uni.requireNativePlugin('globalEvent')
export default class RTCClient {
  private variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed']

  /**
   * Track 类型转换
   * @ignore
   * @private
   * @description 将 QNUNIRemoteTrack JSON 对象包装成 QNRemoteTrack 类
   * @param { QNUNIRemoteTrack[] } trackList QNUNIRemoteTrack 对象数组
   * @returns { QNRemoteTrack } QNRemoteTrack 类对象
   */
  private transformRTCTrack (trackList:QNUNIRemoteTrack[]):Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const result: Array<QNRemoteAudioTrack | QNRemoteVideoTrack> = []
    for (const i of trackList) {
      const config = {
        identifyID: i.trackID,
        raw: i,
        ...i
      }
      if (i.kind === QNRTCTrackKind.audio) {
        result.push(new QNRemoteAudioTrack(config))
      } else {
        result.push(new QNRemoteVideoTrack(config))
      }
    }
    return result
  }

  /**
   * 函数变异
   * @ignore
   * @private
   * @description 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
   * @param { Function } listener 包装前的 callback
   * @returns { Function } 包装后的 callback
   */
  private createRemoteTrackDataCallback<event extends keyof QNRTCClinetEvent > (listener:QNRTCClinetEvent[event]) {
    const variationCallback = (params: { remoteUserID: string, trackList: QNUNIRemoteTrack[] }) => {
      const result = this.transformRTCTrack(params.trackList)
      const callbackData: any = {
        remoteUserID: params.remoteUserID,
        trackList: result
      }
      const callback = listener
      callback(callbackData)
    }
    return variationCallback
  }

  /**
   * on
   * @description 监听对应的事件，支持多次调用同一事件
   * @param { string } name 事件名
   * @param { QNRTCClinetEvent } listener 事件句柄
   * @returns { void }
   */
  on<event extends keyof QNRTCClinetEvent > (name: event, listener: QNRTCClinetEvent[event]): void {
    if (this.variationList.some(item => item === name)) {
      const callback = this.createRemoteTrackDataCallback(listener)
      QNEvent.addEventListener(name, callback)
    } else {
      QNEvent.addEventListener(name, listener)
    }
  }

  /**
   * off
   * @description 取消监听对应的事件
   * @param { string } name 事件名
   * @param { QNRTCClinetEvent } listener 事件句柄
   * @returns { void }
   */
  off<event extends keyof QNRTCClinetEvent> (name: event, listener: QNRTCClinetEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * join
   * @description 加入房间，接口调用成功后，将会触发 {{onConnectionStateChanged}} 回调
   * @param { string } token 房间 Token
   * @param { string } userData 用户信息
   * @returns { void }
   */
  join (token: string, userData: string): void {
    return QNRTCClient.join(token, userData)
  }

  /**
   * leave
   * @description 离开房间，成功离开后，将会触发 onConnectionStateChanged 回调
   * @returns { void }
   */
  leave (): void {
    return QNRTCClient.leave()
  }

  /**
   * publish
   * @description 发布本地 Track 列表，若想获取发布结果，可通过 QNPublishResultCallback 实现
   * @param { QNLocalTrack[] } tracks 要发布的本地 Track 列表
   * @param { QNPublishResultCallback } callback - 发布结果回调
   * @returns { void }
   */
  publish (tracks: QNLocalTrack[], callback: QNPublishResultCallback): void {
    return QNRTCClient.publish(tracks, ({ onPublished, data, error }: {
            onPublished: boolean,
            data: { [identifyID: string]: string },
            error: { message: string, code: number }
        }) => {
      if (onPublished) {
        for (const key in data) {
          const index = tracks.findIndex(item => item.identifyID === key)
          if (index >= 0) {
            tracks[index].trackID = data[key]
          }
        }
      }
      callback({ onPublished, data, error })
    })
  }

  /**
   * unpublish
   * @description 取消发布本地 Track
   * @param { QNLocalTrack[] } tracks 要取消的本地 Track 列表
   * @returns { void }
   */
  unpublish (tracks: QNLocalTrack[]): void {
    return QNRTCClient.unpublish(tracks)
  }

  /**
   * subscribe
   * @description 订阅远端 Track，订阅成功后，根据订阅类型会触发 RTCClinetEvent.onAudioSubscribed 或 RTCClinetEvent.onVideoSubscribed
   * @param { QNUNIRemoteTrack[] } tracks 要订阅的远端 Track
   * @returns { void }
   */
  subscribe (tracks: QNUNIRemoteTrack[]): void {
    return QNRTCClient.subscribe(tracks)
  }

  /**
   * unsubscribe
   * @description 取消订阅远端 Track
   * @param { QNUNIRemoteTrack[] } tracks 要取消订阅的远端 Track
   * @returns { void }
   */
  unsubscribe (tracks: QNUNIRemoteTrack[]): void {
    return QNRTCClient.unsubscribe(tracks)
  }

  /**
   * getSubscribedTracks
   * @description 获取指定用户已被自己订阅的 Tracks
   * @param { string } userID 用户 ID
   * @returns { QNRemoteTrack[] } 订阅的 Track 列表
   */
  getSubscribedTracks (userID: string): Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const remoteTrack: QNUNIRemoteTrack[] = QNRTCClient.getSubscribedTracks(userID)
    return this.transformRTCTrack(remoteTrack)
  }

  /**
   * getLocalAudioTrackStats
   * @description 获取已发布的近端音频轨道统计信息
   * @returns { QNTrackStateList<QNLocalAudioTrackStats> } 统计信息
   */
  getLocalAudioTrackStats (): QNTrackStateList<QNLocalAudioTrackStats> {
    return QNRTCClient.getLocalAudioTrackStats()
  }

  /**
   * getLocalVideoTrackStats
   * @description 获取已发布的近端视频轨道统计信息，包括大小流数据信息
   * @returns { QNTrackStateList<QNLocalVideoTrackStats[]> } 统计信息
   */
  getLocalVideoTrackStats (): QNTrackStateList<QNLocalVideoTrackStats[]> {
    return QNRTCClient.getLocalVideoTrackStats()
  }

  /**
   * getRemoteAudioTrackStats
   * @description 获取已订阅的远端音频轨道统计信息
   * @returns { QNTrackStateList<QNRemoteAudioTrackStats> } 统计信息
   */
  getRemoteAudioTrackStats (): QNTrackStateList<QNRemoteAudioTrackStats> {
    return QNRTCClient.getRemoteAudioTrackStats()
  }

  /**
   * getRemoteVideoTrackStats
   * @description 获取已订阅的远端视频轨道统计信息
   * @returns { QNTrackStateList<QNRemoteVideoTrackStats> } 统计信息
   */
  getRemoteVideoTrackStats (): QNTrackStateList<QNRemoteVideoTrackStats> {
    return QNRTCClient.getRemoteVideoTrackStats()
  }

  /**
   * getUserNetworkQuality
   * @description 获取当前订阅的远端用户网络质量
   * @param { string } userID 用户 ID
   * @returns { QNNetworkQuality } 质量列表
   */
  getUserNetworkQuality (userID: string): QNNetworkQuality {
    return QNRTCClient.getUserNetworkQuality(userID)
  }

  /**
   * getRemoteUsers
   * @description 获取房间内所有的远端用户
   * @returns { QNRemoteUser[] } 远端用户列表
   */
  getRemoteUsers (): QNRemoteUser[] {
    const remoteUser: QNUNIRemoteUser[] = QNRTCClient.getRemoteUsers()
    const result: QNRemoteUser[] = []
    for (const i of remoteUser) {
      const audioTracks = this.transformRTCTrack(i.audioTracks)
      const videoTracks = this.transformRTCTrack(i.videoTracks)
      result.push({
        userID: i.userID,
        videoTracks: <QNRemoteVideoTrack[]>videoTracks,
        audioTracks: <QNRemoteAudioTrack[]>audioTracks,
        userData: i.userData
      })
    }
    return result
  }

  /**
   * getPublishedTracks
   * @description 获取已发布 Track 列表
   * @returns { QNRemoteTrack[] } Track 列表
   */
  getPublishedTracks (): Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const remoteTrack: QNUNIRemoteTrack[] = QNRTCClient.getPublishedTracks()
    return this.transformRTCTrack(remoteTrack)
  }

  /**
   * sendMessage
   * @description 发送自定义消息到指定用户群，发送成功后，会触发远端用户的 RTCClinetEvent.onMessageReceived 回调接口
   * @param { string } message 自定义消息内容
   * @param { string[] } users 用户 ID 列表
   * @param { string } messageId 自定义消息 ID
   * @returns { void }
   */
  sendMessage (message: string, users: string[], messageId: string): void {
    return QNRTCClient.sendMessage(message, users, messageId)
  }

  /**
   * getConnectionState
   * @description RTC client 的房间状态
   * @returns { QNConnectionState } 房间状态
   */
  getConnectionState (): QNConnectionState {
    return QNRTCClient.getConnectionState()
  }

  /**
   * setAutoSubscribe
   * @description 设置是否自动订阅，默认开启自动订阅
   * @param { boolean } autoSubscribe 是否自动订阅
   * @returns { void }
   */
  setAutoSubscribe (autoSubscribe: boolean): void {
    return QNRTCClient.setAutoSubscribe(autoSubscribe)
  }

  /**
   * startLiveStreamingWithDirect
   * @description 开始单路 CDN 转推，转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
   * @param { QNDirectLiveStreamingConfig } config 单路转推配置
   * @returns { void }
   */
  startLiveStreamingWithDirect (config: QNDirectLiveStreamingConfig): void {
    return QNRTCClient.startLiveStreamingWithDirect(config)
  }

  /**
   * startLiveStreamingWithTranscoding
   * @description 开始合流转码 CDN 转推，转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
   * @param { QNTranscodingLiveStreamingConfig } config 合流转推配置
   * @returns { void }
   */
  startLiveStreamingWithTranscoding (config: QNTranscodingLiveStreamingConfig): void {
    return QNRTCClient.startLiveStreamingWithTranscoding(config)
  }

  /**
   * stopLiveStreamingWithDirect
   * @description 停止单路 CDN 转推，停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
   * @param { QNDirectLiveStreamingConfig } config 单路转推配置
   * @returns { void }
   */
  stopLiveStreamingWithDirect (config: QNDirectLiveStreamingConfig): void {
    return QNRTCClient.stopLiveStreamingWithDirect(config)
  }

  /**
   * stopLiveStreamingWithTranscoding
   * @description 停止合流转码 CDN 转推，停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
   * @param { QNTranscodingLiveStreamingConfig } config 合流转推配置
   * @returns { void }
   */
  stopLiveStreamingWithTranscoding (config: QNTranscodingLiveStreamingConfig): void {
    return QNRTCClient.stopLiveStreamingWithTranscoding(config)
  }

  /**
   * setTranscodingLiveStreamingTracks
   * @description 新增、更新合流转推布局配置，更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
   * 新增 Track 布局以及对已有的 Track 的合流布局进行更新均可通过该接口实现，只需修改 transcodingTracks 对应的 Track 内容即可。
   * @param { string } streamID 合流 ID
   * @param { QNTranscodingLiveStreamingTrack[] } config 待新增、更新的合流转推布局配置
   * @returns { void }
   */
  setTranscodingLiveStreamingTracks (streamID: string, transcodingTracks: QNTranscodingLiveStreamingTrack[]): void {
    return QNRTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks)
  }

  /**
   * removeTranscodingLiveStreamingTracks
   * @description 移除合流转推布局配置，更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
   * @param { string } streamID 合流 ID
   * @param { QNTranscodingLiveStreamingTrack[] } config 待移除合流转推布局配置
   * @returns { void }
   */
  removeTranscodingLiveStreamingTracks (streamID: string, transcodingTracks: QNTranscodingLiveStreamingTrack[]): void {
    return QNRTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks)
  }
}
