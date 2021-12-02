import QNTrack from './RTCTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack')
export default class QNLocalTrack extends QNTrack {
  /**
   * setMuted
   * @description 设置 mute，更新当前 Track 的 mute 值
   * @param { boolean } muted 是否 mute
   * @returns { void }
   */
  setMuted (muted: boolean): void {
    return QNRtcTrack.setMuted(this.identifyID, muted)
  }
}
