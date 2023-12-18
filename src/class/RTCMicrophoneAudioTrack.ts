import { QNLocalAudioTrack } from './RTCLocalAudioTrack'

const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNMicrophoneAudioTrack extends QNLocalAudioTrack {

  /**
   * 创建混音控制器对象
   * @remarks 创建混音控制器对象，当前仅支持同一时间混一路音频，重复对不同的 QNAudioMixer 执行 start 操作，后面的会覆盖前面的，即以后执行 start 的音频混音控制器为准进行混音
   * @deprecated 该接口已废弃，请使用 {@link QNRTC.createAudioMusicMixer} 或者 {@link QNRTC.createAudioEffectMixer}
   * @param url 音频文件路径
   * @returns 混音控制器对象
   */
  createAudioMixer(url: string) {
  }
}
