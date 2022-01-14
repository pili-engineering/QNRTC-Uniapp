import QNLocalAudioTrack from './RTCLocalAudioTrack'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')

/**
 * 本地麦克风轨
 */
export default class QNMicrophoneAudioTrack extends QNLocalAudioTrack {
  /**
   * 设置音量
   * @remarks 设置设备上当前音频输入设备采集后音量
   * @param volume 音量值 默认 1 范围 [0,10]
   */
  setVolume (volume: number): void {
    return QNRtcTrack.setVolume(this.identifyID, volume)
  }
}
