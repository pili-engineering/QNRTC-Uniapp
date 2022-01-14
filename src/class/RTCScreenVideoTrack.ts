import { QNLocalVideoTrack } from './RTCLocalVideoTrack'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')

/**
 * 屏幕录制轨
 */
export class QNScreenVideoTrack extends QNLocalVideoTrack {
  /**
   * 设置屏幕录制的帧率
   * @remarks 默认值 20
   * @param screenRecorderFrameRate 帧率
   */
  setScreenRecorderFrameRate(screenRecorderFrameRate: number): void {
    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate)
  }
}
