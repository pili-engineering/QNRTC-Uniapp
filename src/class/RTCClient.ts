import {
  QNTranscodingLiveStreamingImage,
  QNUNIRemoteTrack,
  QNLocalAudioTrackStats,
  QNLocalVideoTrackStats,
  QNRemoteAudioTrackStats,
  QNRemoteVideoTrackStats,
  QNNetworkQuality,
  QNRemoteUser,
  QNUNIRemoteUser,
  QNDirectLiveStreamingConfig,
  QNTranscodingLiveStreamingConfig,
  QNTranscodingLiveStreamingTrack,
  QNUNILocalTrack,
  QNMediaRelayConfiguration,
} from '../interface/RTCInterface'
import {
  QNPublishResultCallback,
  QNMediaRelayResultCallback,
  QNClientRoleResultCallback,
} from '../preset/RTCPreset'
import { QNConnectionState, QNRTCTrackKind, QNClientRole } from '../enum/RTCEnum'
import { QNRTCClinetEvent } from '../event/RTCEvent'
import { QNRemoteVideoTrack } from './RTCRemoteVideoTrack'
import { QNRemoteAudioTrack } from './RTCRemoteAudioTrack'
import { QNLocalTrack } from './RTCLocalTrack'
const RTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient')
const QNEvent = uni.requireNativePlugin('globalEvent')
export class QNRTCClient {
  /**
   * @internal
   */
  private variationList = [
    'onUserPublished',
    'onUserUnpublished',
    'onVideoSubscribed',
    'onAudioSubscribed',
  ]

  /**
   * @internal
   */
  private autoSubscribeListenr:(params: {
    remoteUserID: string
    trackList: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>
  }) => void = () => {}

  /**
   * remote Track 类型转换
   * @internal
   * @remarks 将 QNUNIRemoteTrack JSON 对象包装成 QNRemoteTrack 类
   * @param trackList QNUNIRemoteTrack 对象数组
   * @returns QNRemoteTrack 类对象
   */
  private transformRemoteRTCTrack(
    trackList: QNUNIRemoteTrack[]
  ): Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const result: Array<QNRemoteAudioTrack | QNRemoteVideoTrack> = []
    for (const i of trackList) {
      const config = {
        identifyID: i.trackID,
        raw: i,
        ...i,
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
   * local Track 类型转换
   * @internal
   * @remarks 将 QNUNILocalTrack JSON 对象包装成 QNLocalTrack 类
   * @param trackList QNUNILocalTrack 对象数组
   * @returns QNLocalTrack 类对象
   */
  private transformLocalRTCTrack(trackList: QNUNILocalTrack[]): Array<QNLocalTrack> {
    const result: Array<QNLocalTrack> = []
    for (const i of trackList) {
      const config = {
        identifyID: i.trackID,
        userID: '',
        raw: i,
        ...i,
      }
      if (i.kind === QNRTCTrackKind.audio) {
        result.push(new QNLocalTrack(config))
      } else {
        result.push(new QNLocalTrack(config))
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
  private createRemoteTrackDataCallback<event extends keyof QNRTCClinetEvent>(
    listener: QNRTCClinetEvent[event]
  ) {
    const variationCallback = (params: { remoteUserID: string; trackList: QNUNIRemoteTrack[] }) => {
      const result = this.transformRemoteRTCTrack(params.trackList)
      const callbackData: any = {
        remoteUserID: params.remoteUserID,
        trackList: result,
      }
      const callback = listener
      // @ts-ignore
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
  on<event extends keyof QNRTCClinetEvent>(name: event, listener: QNRTCClinetEvent[event]) {
    if (this.variationList.some((item) => item === name)) {
      const callback = this.createRemoteTrackDataCallback(listener)
      QNEvent.addEventListener(name, callback)
    } else {
      QNEvent.addEventListener(name, listener)
    }
  }

  /**
   * 取消监听对应的事件
   * @remarks 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCClinetEvent>(name: event, listener: QNRTCClinetEvent[event]) {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 加入房间
   * @param token 房间 Token
   * @param userData 用户信息
   */
  join(token: string, userData?: string) {
    RTCClient.join(token, userData ?? '')
  }

  /**
   * 离开房间
   */
  leave() {
    RTCClient.leave()
  }

  /**
   * 发布本地 Track 列表
   * @param tracks 要发布的本地 Track 列表
   * @param callback 发布结果回调
   */
  publish(tracks: QNLocalTrack[], callback: QNPublishResultCallback) {
    RTCClient.publish(
      tracks,
      ({
        onPublished,
        data,
        error,
      }: {
        onPublished: boolean
        data: { [identifyID: string]: string }
        error: { message: string; code: number }
      }) => {
        if (onPublished) {
          for (const key in data) {
            const index = tracks.findIndex((item) => item.identifyID === key)
            if (index >= 0) {
              tracks[index].trackID = data[key]
            }
          }
        }
        callback(onPublished, error)
      }
    )
  }

  /**
   * 取消发布本地 Track
   * @param tracks 要取消的本地 Track 列表
   */
  unpublish(tracks: QNLocalTrack[]) {
    RTCClient.unpublish(tracks)
  }

  /**
   * 订阅远端 Track
   * @param tracks 要订阅的远端 Track
   */
  subscribe(tracks: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>) {
    RTCClient.subscribe(tracks)
  }

  /**
   * 取消订阅远端 Track
   * @param tracks 要取消订阅的远端 Track
   */
  unsubscribe(tracks: Array<QNRemoteAudioTrack | QNRemoteVideoTrack>) {
    RTCClient.unsubscribe(tracks)
  }

  /**
   * 获取指定用户已被自己订阅的 Tracks
   * @param userID 用户 ID
   * @returns 订阅的 Track 列表
   */
  getSubscribedTracks(userID: string): Array<QNRemoteAudioTrack | QNRemoteVideoTrack> {
    const remoteTrack: QNUNIRemoteTrack[] = RTCClient.getSubscribedTracks(userID)
    return this.transformRemoteRTCTrack(remoteTrack)
  }

  /**
   * 获取已发布的近端音频轨道统计信息
   * @remarks 返回以 trackID 为 key，{{QNLocalAudioTrackStats}} 为 value 的对象
   * @returns 统计信息
   */
  getLocalAudioTrackStats(): Record<string, QNLocalAudioTrackStats> {
    return RTCClient.getLocalAudioTrackStats()
  }

  /**
   * 获取已发布的近端视频轨道统计信息
   * @remarks 返回以 trackID 为 {{QNLocalVideoTrackStats}}[] 为 value 的对象，数组表示包括各个大小流信息
   * @returns 统计信息
   */
  getLocalVideoTrackStats(): Record<string, QNLocalVideoTrackStats[]> {
    return RTCClient.getLocalVideoTrackStats()
  }

  /**
   * 获取已订阅的远端音频轨道统计信息
   * @remarks 返回以 trackID 为 key，{{QNLocalAudioTrackStats}} 为 value 的对象
   * @returns 统计信息
   */
  getRemoteAudioTrackStats(): Record<string, QNRemoteAudioTrackStats> {
    return RTCClient.getRemoteAudioTrackStats()
  }

  /**
   * 获取已订阅的远端视频轨道统计信息
   * @remarks 返回以 trackID 为 {{QNRemoteVideoTrackStats}} 为 value 的对象
   * @returns 统计信息
   */
  getRemoteVideoTrackStats(): Record<string, QNRemoteVideoTrackStats> {
    return RTCClient.getRemoteVideoTrackStats()
  }

  /**
   * 获取当前订阅的远端用户网络质量
   * @remarks 获取当前订阅的远端用户网络质量
   * @param userID 用户 ID
   * @returns 质量列表
   */
  getUserNetworkQuality(userID: string): QNNetworkQuality {
    return RTCClient.getUserNetworkQuality(userID)
  }

  /**
   * 获取对应 ID 的远端用户
   * @remarks 获取房间内所有的远端用户
   * @returns 远端用户列表
   */
  getRemoteUsers(): QNRemoteUser[] {
    const remoteUser: QNUNIRemoteUser[] = RTCClient.getRemoteUsers()
    const result: QNRemoteUser[] = []
    for (const i of remoteUser) {
      const audioTracks = this.transformRemoteRTCTrack(i.audioTracks)
      const videoTracks = this.transformRemoteRTCTrack(i.videoTracks)
      result.push({
        userID: i.userID,
        videoTracks: <QNRemoteVideoTrack[]>videoTracks,
        audioTracks: <QNRemoteAudioTrack[]>audioTracks,
        userData: i.userData,
      })
    }
    return result
  }

  /**
   * 获取已发布 Track 列表
   * @returns Track 列表
   */
  getPublishedTracks(): QNLocalTrack[] {
    const locakTrack: QNUNILocalTrack[] = RTCClient.getPublishedTracks()
    return this.transformLocalRTCTrack(locakTrack)
  }

  /**
   * 发送自定义消息到指定用户群
   * @param message 自定义消息内容
   * @param  users 用户 ID 列表
   * @param messageId 自定义消息 ID
   */
  sendMessage(message: string, users: string[], messageId: string) {
    RTCClient.sendMessage(message, users, messageId)
  }

  /**
   * 获取 RTC client 的房间状态
   * @returns 房间状态
   */
  getConnectionState(): QNConnectionState {
    return RTCClient.getConnectionState()
  }

  /**
   * 设置是否自动订阅
   * @remarks 默认开启自动订阅
   * @param autoSubscribe 是否自动订阅
   */
  setAutoSubscribe(autoSubscribe: boolean) {
    if (autoSubscribe) {
      this.autoSubscribeListenr = (params) => {
        this.subscribe(params.trackList)
      }
      this.on("onUserPublished", this.autoSubscribeListenr)
    } else {
      this.off("onUserPublished", this.autoSubscribeListenr)
    }
  }

  /**
   * 开始单路 CDN 转推
   * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
   * @param config 单路转推配置
   */
  startLiveStreamingWithDirect(config: QNDirectLiveStreamingConfig) {
    RTCClient.startLiveStreamingWithDirect(config)
  }

  /**
   * 开始合流转码 CDN 转推
   * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
   * @param config 合流转推配置
   */
  startLiveStreamingWithTranscoding(config: QNTranscodingLiveStreamingConfig) {
    !config.watermarks && (config.watermarks = [])
    !config.background && (config.background = {} as QNTranscodingLiveStreamingImage)
    RTCClient.startLiveStreamingWithTranscoding(config)
  }

  /**
   * 停止单路 CDN 转推
   * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
   * @param config 单路转推配置
   */
  stopLiveStreamingWithDirect(config: QNDirectLiveStreamingConfig) {
    RTCClient.stopLiveStreamingWithDirect(config)
  }

  /**
   * 停止合流转码 CDN 转推
   * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
   * @param config 合流转推配置
   */
  stopLiveStreamingWithTranscoding(config: QNTranscodingLiveStreamingConfig) {
    RTCClient.stopLiveStreamingWithTranscoding(config)
  }

  /**
   * 新增、更新合流转推布局配置
   * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
   * 新增 Track 布局以及对已有的 Track 的合流布局进行更新均可通过该接口实现，只需修改 transcodingTracks 对应的 Track 内容即可
   * @param streamID 合流 ID
   * @param transcodingTracks 待新增、更新的合流转推布局配置
   */
  setTranscodingLiveStreamingTracks(
    streamID: string,
    transcodingTracks: QNTranscodingLiveStreamingTrack[]
  ) {
    RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks)
  }

  /**
   * 移除合流转推布局配置
   * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
   * @param streamID 合流 ID
   * @param transcodingTracks 待移除合流转推布局配置
   */
  removeTranscodingLiveStreamingTracks(
    streamID: string,
    transcodingTracks: QNTranscodingLiveStreamingTrack[]
  ) {
    RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks)
  }

  /**
   * 设置互动直播场景下的用户角色
   * @since 5.2.5
   * @remarks 该方法在加入频道前后均可调用，该方法仅适用于直播场景
   * @see 该方法仅适用于直播场景 {@link QNClientMode.LIVE}
   */
  setClientRole(clientRole: QNClientRole, callback: QNClientRoleResultCallback) {
    RTCClient.setClientRole(clientRole, callback)
  }

  /**
   * 开启跨房媒体转发
   * @since 5.2.5
   * @remarks 如果已经开启，则调用失败
   * 当所有目标房间跨房媒体转发都失败，则本次跨房媒体转发请求视为失败，使用跨房媒体转发功能需要再次调用此方法
   * 当有任意一个目标或多个目标房间媒体转发成功，则本次跨房媒体转发请求视为成功，具体每个房间的状态参考回调结果
   * 注意：该方法仅适用于互动直播场景中角色类型为主播的用户
   * @param configuration 跨房媒体转发配置
   * @param callback 跨房媒体转发回调接口
   */
  startMediaRelay(configuration: QNMediaRelayConfiguration, callback: QNMediaRelayResultCallback) {
    RTCClient.startMediaRelay(configuration, callback)
  }

  /**
   * 更新跨房媒体转发
   * @since 5.2.5
   * @remarks 成功开启跨房媒体转发后，如果您希望将流转发到多个目标房间，或退出当前正在转发的房间，可以调用该方法
   * 此方法为全量更新，正在跨房媒体转发中却未被包含在参数 configuration 中的房间，将停止媒体转发
   * 注意：调用此方法前必须确保已经成功开启跨房媒体转发，否则将调用失败；该方法仅适用互动直播场景中角色类型为主播的用户
   * @param configuration 跨房媒体转发配置
   * @param callback 回调接口
   */
  updateMediaRelay(
    configuration: QNMediaRelayConfiguration,
    callback: QNMediaRelayResultCallback
  ) {
    RTCClient.updateMediaRelay(configuration, callback)
  }

  /**
   * 停止跨房媒体转发
   * @since 5.2.5
   * @remarks 如果未开启，则调用失败
   * 注意：此方法会停止在所有目标房间中的媒体转发；该方法仅适用互动直播场景中角色类型为主播的用户
   * @param callback 回调接口
   */
  stopMediaRelay(callback: QNMediaRelayResultCallback) {
    RTCClient.stopMediaRelay(callback)
  }
}
