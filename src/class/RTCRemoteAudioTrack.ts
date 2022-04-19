import { QNRemoteTrack } from './RTCRemoteTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNRemoteAudioTrack extends QNRemoteTrack {
  /**
   * 设置音量
   * @remarks 设置当前 Track 播放音量大小
   * @param volume 音量值 默认 1 范围 [0,10]
   */
  setRemoteVolume (volume: number): void {
    return QNRtcTrack.setRemoteVolume(this.identifyID, volume)
  }

  /**
   * 获取音量
   * @remarks 获取当前 Track 播放的音量大小，只支持安卓
   * @returns 音量值
   */
  getRemoteVolume (): number {
    return QNRtcTrack.getRemoteVolume(this.identifyID)
  }
}
