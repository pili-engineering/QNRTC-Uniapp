import { QNLocalAudioTrack } from './RTCLocalAudioTrack'
import { QNAudioMixer } from '../class/RTCAudioMixer'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNMicrophoneAudioTrack extends QNLocalAudioTrack {
  /**
   * 设置音量
   * @remarks 设置设备上当前音频输入设备采集后音量，默认 1 范围 [0,10]
   * @param volume 音量值
   */
  setVolume (volume: number): void {
    return QNRtcTrack.setVolume(this.identifyID, volume)
  }

  /**
   * 创建混音控制器对象
   * @remarks 创建混音控制器对象，当前仅支持同一时间混一路音频，重复对不同的 QNAudioMixer 执行 start 操作，后面的会覆盖前面的，即以后执行 start 的音频混音控制器为准进行混音
   * @param url 音频文件路径
   * @returns 混音控制器对象
   */
   createAudioMixer (url: string): QNAudioMixer {
    QNRtcTrack.createAudioMixer(this.identifyID, url)
    return new QNAudioMixer(this.identifyID, url)
  }
}
