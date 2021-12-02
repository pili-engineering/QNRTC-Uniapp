import QNLocalVideoTrack from './RTCLocalVideoTrack'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack')
export default class QNScreenVideoTrack extends QNLocalVideoTrack {
  /**
   * setScreenRecorderFrameRate
   * @description 设置屏幕录制的帧率，默认值 20
   * @param { number } screenRecorderFrameRate 帧率
   * @returns { void }
   */
  setScreenRecorderFrameRate (screenRecorderFrameRate: number): void {
    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate)
  }
}
