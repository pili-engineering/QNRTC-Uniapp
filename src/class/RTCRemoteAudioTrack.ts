import QNRemoteTrack from './RTCRemoteTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export default class QNRemoteAudioTrack extends QNRemoteTrack {
  /**
   * setRemoteVolume
   * @description 设置音量，设置当前 Track 播放音量大小
   * @param { number } volume 音量值 默认 1 范围 [0,10]
   * @returns { void }
   */
  setRemoteVolume (volume: number): void {
    return QNRtcTrack.setRemoteVolume(this.identifyID, volume)
  }

  /**
   * getRemoteVolume
   * @description 获取音量，获取当前 Track 播放的音量大小，只支持安卓
   * @returns { number } 音量值
   */
  getRemoteVolume (): number {
    return QNRtcTrack.getRemoteVolume(this.identifyID)
  }
}
