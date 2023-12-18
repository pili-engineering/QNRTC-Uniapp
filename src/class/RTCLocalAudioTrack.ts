import { QNLocalTrack } from './RTCLocalTrack'
import { QNAudioMusicMixer } from './RTCAudioMusicMixer'
import { QNAudioEffectMixer } from './RTCAudioEffectMixer'

const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNLocalAudioTrack extends QNLocalTrack {
  /**
   * 设置音量
   * @remarks 设置设备上当前音频输入设备采集后音量，默认 1 范围 [0,10]
   * @param volume 音量值
   */
  setVolume(volume: number): void {
    return QNRtcTrack.setVolume(this.identifyID, volume)
  }

  /**
   * 获取当前音频输入设备采集的音量大小
   * @since 5.2.5
   * @remarks 可通过定时调用该方法获取音量值的方式来判断当前用户是否在讲话
   * 在安静的环境下，获取到 0.0x 大小的数值为预期现象，您可根据您的需求自行决定判断的阈值
   */
  getVolumeLevel(): number {
    return QNRtcTrack.getVolumeLevel(this.identifyID)
  }

  /**
   * 增加 filter 模块
   * @since 5.2.5
   * @remarks 目前支持设置 QNAudioMusicMixer、QNAudioEffectMixer 等内置 Filter
   * @param filter 模块
   */
  addAudioFilter(filter: QNAudioMusicMixer | QNAudioEffectMixer) {
    QNRtcTrack.addAudioFilter(this.identifyID, filter.id)
  }

  /**
   * 移除 filter 模块
   * @since 5.2.5
   * @param filter 模块
   */
  removeAudioFilter(filter: QNAudioMusicMixer | QNAudioEffectMixer) {
    QNRtcTrack.removeAudioFilter(this.identifyID, filter.id)
  }

}
