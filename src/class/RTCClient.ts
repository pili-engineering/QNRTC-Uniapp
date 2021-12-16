import { QNUNIRemoteTrack, QNLocalAudioTrackStats, QNLocalVideoTrackStats, QNRemoteAudioTrackStats, QNRemoteVideoTrackStats, QNNetworkQuality, QNRemoteUser, QNUNIRemoteUser, QNDirectLiveStreamingConfig, QNTranscodingLiveStreamingConfig, QNTranscodingLiveStreamingTrack, QNTrackStateList } from '../interface/RTCInterface'
import { QNPublishResultCallback } from '../RTCPreset'
import { QNConnectionState, QNRTCTrackKind } from '../enum/RTCEnum'
import { QNRTCClinetEvent } from '../RTCEvent'
import QNRemoteVideoTrack from './RTCRemoteVideoTrack'
import QNRemoteAudioTrack from './RTCRemoteAudioTrack'
import QNLocalTrack from './RTCLocalTrack'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNEvent = uni.requireNativePlugin('globalEvent')
/**
 * RTCClient 核心类
 * @remarks 包含加入房间，离开房间，订阅、发布 Track，获取统计信息等功能
 */
export default class RTCClient {
  private variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed']

  /**
   * Track 类型转换
   * @internal
   * @remarks 将 QNUNIRemoteTrack JSON 对象包装成 QNRemoteTrack 类
   * @param trackList QNUNIRemoteTrack 对象数组
   * @returns QNRemoteTrack 类对象
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
   * @internal
   * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
   * @param listener 包装前的 callback
   * @returns 包装后的 callback
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
   * 监听对应的事件
   * @remarks 支持多次调用同一事件
   * @param name 事件名
   * @param listener 事件句柄
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
   * 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCClinetEvent> (name: event, listener: QNRTCClinetEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 加入房间
   * @remarks 接口调用成功后，将会触发 onConnectionStateChanged 回调
   * @param token 房间 Token
   * @param userData 用户信息
   */
  join (token: string, userData: string): void {
    return QNRTCClient.join(token, userData)
  }

  /**
   * 离开房间
   * @remarks 成功离开后，将会触发 onConnectionStateChanged 回调
   */
  leave (): void {
    return QNRTCClient.leave()
  }

  /**
   * 发布本地 Track 列表
   * @remarks 若想获取发布结果，可通过 QNPublishResultCallback 实现
   * @param tracks 要发布的本地 Track 列表
   * @param callback - 发布结果回调
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
   * 取消发布本地 Track
   * @param tracks 要取消的本地 Track 列表
   */
  unpublish (tracks: QNLocalTrack[]): void {
    return QNRTCClient.unpublish(tracks)
  }

  /**
   * 订阅远端 Track
   * @remarks 订阅成功后，根据订阅类型会触发 RTCClinetEvent.onAudioSubscribed 或 RTCClinetEvent.onVideoSubscribed
   * @param tracks 要订阅的远端 Track
   */
  subscribe (tracks: QNUNIRemoteTrack[]): void {
    return QNRTCClient.subscribe(tracks)
  }

  /**
   * 取消订阅远端 Track
   * @param tracks 要取消订阅的远端 Track
   */
  unsubscribe (tracks: QNUNIRemoteTrack[]): void {
    return QNRTCClient.unsubscribe(tracks)
  }

  /**
   * 获取指定用户已被自己订阅的 Tracks
   * @param userID 用户 ID
   * @returns 订阅的 Track 列表
   */
  getSubscribedTracks (userID: string): Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const remoteTrack: QNUNIRemoteTrack[] = QNRTCClient.getSubscribedTracks(userID)
    return this.transformRTCTrack(remoteTrack)
  }

  /**
   * 获取已发布的近端音频轨道统计信息
   * @returns 统计信息
   */
  getLocalAudioTrackStats (): QNTrackStateList<QNLocalAudioTrackStats> {
    return QNRTCClient.getLocalAudioTrackStats()
  }

  /**
   * 获取已发布的近端视频轨道统计信息
   * @remarks 包括大小流数据信息
   * @returns 统计信息
   */
  getLocalVideoTrackStats (): QNTrackStateList<QNLocalVideoTrackStats[]> {
    return QNRTCClient.getLocalVideoTrackStats()
  }

  /**
   * 获取已订阅的远端音频轨道统计信息
   * @returns 统计信息
   */
  getRemoteAudioTrackStats (): QNTrackStateList<QNRemoteAudioTrackStats> {
    return QNRTCClient.getRemoteAudioTrackStats()
  }

  /**
   * 获取已订阅的远端视频轨道统计信息
   * @returns 统计信息
   */
  getRemoteVideoTrackStats (): QNTrackStateList<QNRemoteVideoTrackStats> {
    return QNRTCClient.getRemoteVideoTrackStats()
  }

  /**
   * 获取当前订阅的远端用户网络质量
   * @param userID 用户 ID
   * @returns 质量列表
   */
  getUserNetworkQuality (userID: string): QNNetworkQuality {
    return QNRTCClient.getUserNetworkQuality(userID)
  }

  /**
   * 获取房间内所有的远端用户
   * @returns 远端用户列表
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
   * 获取已发布 Track 列表
   * @returns Track 列表
   */
  getPublishedTracks (): Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const remoteTrack: QNUNIRemoteTrack[] = QNRTCClient.getPublishedTracks()
    return this.transformRTCTrack(remoteTrack)
  }

  /**
   * 发送自定义消息到指定用户群
   * @remarks 发送成功后，会触发远端用户的 RTCClinetEvent.onMessageReceived 回调接口
   * @param message 自定义消息内容
   * @param users 用户 ID 列表
   * @param messageId 自定义消息 ID
   */
  sendMessage (message: string, users: string[], messageId: string): void {
    return QNRTCClient.sendMessage(message, users, messageId)
  }

  /**
   * RTC client 的房间状态
   * @returns 房间状态
   */
  getConnectionState (): QNConnectionState {
    return QNRTCClient.getConnectionState()
  }

  /**
   * 设置是否自动订阅
   * @remarks 默认开启自动订阅
   * @param autoSubscribe 是否自动订阅
   */
  setAutoSubscribe (autoSubscribe: boolean): void {
    return QNRTCClient.setAutoSubscribe(autoSubscribe)
  }

  /**
   * 开始单路 CDN 转推
   * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
   * @param config 单路转推配置
   */
  startLiveStreamingWithDirect (config: QNDirectLiveStreamingConfig): void {
    return QNRTCClient.startLiveStreamingWithDirect(config)
  }

  /**
   * 开始合流转码 CDN 转推
   * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
   * @param config 合流转推配置
   */
  startLiveStreamingWithTranscoding (config: QNTranscodingLiveStreamingConfig): void {
    return QNRTCClient.startLiveStreamingWithTranscoding(config)
  }

  /**
   * 停止单路 CDN 转推
   * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
   * @param config 单路转推配置
   */
  stopLiveStreamingWithDirect (config: QNDirectLiveStreamingConfig): void {
    return QNRTCClient.stopLiveStreamingWithDirect(config)
  }

  /**
   * 停止合流转码 CDN 转推
   * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
   * @param config 合流转推配置
   */
  stopLiveStreamingWithTranscoding (config: QNTranscodingLiveStreamingConfig): void {
    return QNRTCClient.stopLiveStreamingWithTranscoding(config)
  }

  /**
   * 新增、更新合流转推布局配置
   * @remarks 
   * 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调。
   * 新增 Track 布局以及对已有的 Track 的合流布局进行更新均可通过该接口实现，只需修改 transcodingTracks 对应的 Track 内容即可。
   * @param streamID 合流 ID
   * @param config 待新增、更新的合流转推布局配置
   */
  setTranscodingLiveStreamingTracks (streamID: string, transcodingTracks: QNTranscodingLiveStreamingTrack[]): void {
    return QNRTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks)
  }

  /**
   * 移除合流转推布局配置
   * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
   * @param streamID 合流 ID
   * @param config 待移除合流转推布局配置
   */
  removeTranscodingLiveStreamingTracks (streamID: string, transcodingTracks: QNTranscodingLiveStreamingTrack[]): void {
    return QNRTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks)
  }
}
