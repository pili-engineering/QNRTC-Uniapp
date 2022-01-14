import { QNTrack } from './RTCTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')

/**
 * 远端轨
 */
export class QNRemoteTrack extends QNTrack {
  /**
   * 是否订阅
   * @returns 1 订阅 2 未订阅
   */
  isSubscribed(): number {
    return QNRtcTrack.isSubscribed(this.identifyID)
  }
}
