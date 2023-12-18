import { QNTrack } from './RTCTrack'

const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNRemoteTrack extends QNTrack {
  /**
   * 是否订阅
   * @description 该 Track 是否被订阅
   * @returns 1 订阅 2 未订阅
   */
  isSubscribed(): number {
    return QNRtcTrack.isSubscribed(this.identifyID)
  }
}
