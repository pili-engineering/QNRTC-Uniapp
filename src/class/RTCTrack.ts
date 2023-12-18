import { QNRTCTrackKind } from '../enum/RTCEnum'
import { QNUNILocalTrack, QNUNIRemoteTrack } from '../interface/RTCInterface'
import { QNRTCTrackEvent } from '../event/RTCEvent'
/**
 * @internal
 */
export interface QNTrackParams {
  identifyID: string
  kind: QNRTCTrackKind
  tag: string
  trackID: string
  userID: string
  raw: QNUNILocalTrack | QNUNIRemoteTrack
}
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
const QNEvent = uni.requireNativePlugin('globalEvent')
export class QNTrack {
  /**
   * 本地唯一标识符
   * @internal
   */
  public identifyID: string
  /**
   * 类型
   * @deprecated 该接口已废弃，请使用 {@link QNTrack.isAudio} 或者 {@link QNTrack.isVideo}
   */
  public kind: QNRTCTrackKind
  /**
   * 自定义 tag
   * @deprecated 该接口已废弃，请使用 {@link QNTrack.getTag}
   */
  public tag: string
  /**
   * trackID
   * @deprecated 该接口已废弃，请使用 {@link QNTrack.getTrackID}
   */
  public trackID: string
  /**
   * 用户 ID
   * @deprecated 该接口已废弃，请使用 {@link QNTrack.getUserID}
   */
  public userID: string
  /** @internal */
  public raw: QNUNILocalTrack | QNUNIRemoteTrack
  /** @internal */
  constructor({ identifyID, kind, tag, trackID, raw, userID }: QNTrackParams) {
    this.identifyID = identifyID
    this.kind = kind
    this.tag = tag
    this.trackID = trackID
    this.raw = raw
    this.userID = userID
  }

  /**
   * 监听对应的事件
   * @remarks 支持多次调用同一事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  on<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void {
    const _listener = (params: { [key: string]: string | number }) => {
      const { trackID, ...arguv } = params
      if (trackID && trackID === this.trackID) {
        // @ts-ignore
        listener(arguv as any)
      }
    }
    QNEvent.addEventListener(name, _listener)
  }

  /**
   * 取消监听对应的事件
   * @remarks 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 获取 TrackID
   * @since 5.2.5
   * @remarks 对于本地 Track，当且仅当 Track 发布后才可获取到有效的 TrackID；对于远端 Track，可随时获取到有效的 TrackID
   */
  getTrackID(): string {
    return this.trackID
  }

  /**
   * 获取 UserID
   * @since 5.2.5
   */
  getUserID(): string {
    return this.userID
  }

  /**
   * 获取 Tag
   * @since 5.2.5
   */
  getTag(): string {
    return this.tag
  }

  /**
   * 是否为音频 Track
   * @since 5.2.5
   */
  isAudio(): boolean {
    return this.kind === QNRTCTrackKind.audio
  }

  /**
   * 是否为视频 Track
   * @since 5.2.5
   */
  isVideo(): boolean {
    return this.kind === QNRTCTrackKind.video
  }

  /**
   * 是否 muted
   * @since 5.2.5
   */
  isMuted(): boolean {
    return QNRtcTrack.getMuted(this.identifyID)
  }

  /**
   * 是否 muted
   * @deprecated 该接口已废弃，请使用 {@link QNTrack.isMuted}
   */
  getMuted = this.isMuted
}
