import QNTrack from './RTCTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')

/**
 * 本地轨
 */
export default class QNLocalTrack extends QNTrack {
  /**
   * 设置 mute
   * @remarks 更新当前 Track 的 mute 值
   * @param muted 是否 mute
   */
  setMuted (muted: boolean): void {
    return QNRtcTrack.setMuted(this.identifyID, muted)
  }
}
