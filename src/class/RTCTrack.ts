import { QNRTCTrackKind } from '../enum/RTCEnum'
import { QNUNILocalTrack, QNUNIRemoteTrack } from '../interface/RTCInterface'
import { QNRTCTrackEvent } from '../RTCEvent'
interface QNTrackParams {
    identifyID: string,
    kind: QNRTCTrackKind,
    tag: string,
    trackID: string,
    userID: string,
    raw: QNUNILocalTrack | QNUNIRemoteTrack
}
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNEvent = uni.requireNativePlugin('globalEvent')
/**
 * 轨
 * @remarks 所有的轨继承此类
 */
export default class QNTrack {
  /**
   * identifyID
   */
  public identifyID: string
  /**
   * 媒体类型
   */
  public kind: QNRTCTrackKind
  /**
   * 自定义 tag
   */
  public tag: string
  /**
   * trackID
   */
  public trackID: string
  /**
   * userID
   */
  public userID: string
  /**
   * @internal
   */
  public raw: QNUNILocalTrack | QNUNIRemoteTrack
  constructor ({ identifyID, kind, tag, trackID, raw, userID }: QNTrackParams) {
    this.identifyID = identifyID
    this.kind = kind
    this.tag = tag
    this.trackID = trackID
    this.raw = raw
    this.userID = userID
  }

  /**
   * 监听对应的事件，支持多次调用同一事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  on<event extends keyof QNRTCTrackEvent > (name: event, listener: QNRTCTrackEvent[event]): void {
    const _listener = (params: {[key: string]: string | number}) => {
      const { trackID, ...arguv } = params
      if (trackID && trackID === this.trackID) {
        listener(arguv as any)
      }
    }
    QNEvent.addEventListener(name, _listener)
  }

  /**
   * 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCTrackEvent> (name: event, listener: QNRTCTrackEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 标识 Track 是否为 mute 状态
   * @returns 是否被 mute
   */
  getMuted (): number {
    return QNRtcTrack.getMuted(this.identifyID)
  }
}
