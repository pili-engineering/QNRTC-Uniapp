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
export default class QNTrack {
  public identifyID: string
  public kind: QNRTCTrackKind
  public tag: string
  public trackID: string
  public userID: string
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
   * on
   * @description 监听对应的事件，支持多次调用同一事件
   * @param { string } name 事件名
   * @param { QNRTCTrackEvent } listener 事件句柄
   * @returns { void }
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
   * off
   * @description 取消监听对应的事件
   * @param { string } name 事件名
   * @param { QNRTCClinetEvent } listener 事件句柄
   * @returns { void }
   */
  off<event extends keyof QNRTCTrackEvent> (name: event, listener: QNRTCTrackEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * getMuted
   * @description 标识 Track 是否为 mute 状态
   * @returns { number } 是否被 mute
   */
  getMuted (): number {
    return QNRtcTrack.getMuted(this.identifyID)
  }
}
