import QNTrack from './RTCTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack')
export default class QNRemoteTrack extends QNTrack {
  /**
   * isSubscribed
   * @description 是否订阅，该 Track 是否被订阅
   * @returns { number } 1 订阅 2 未订阅
   */
  isSubscribed (): number {
    return QNRtcTrack.isSubscribed(this.identifyID)
  }
}
