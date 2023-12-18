import { QNRTCAudioEffectMixerEvent } from '../event/RTCEvent'
import { QNAudioEffect } from './RTCAudioEffect'
const QNRtcAudioEffectMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffectMixer')
const QNEvent = uni.requireNativePlugin('globalEvent')
export class QNAudioEffectMixer {
    /** @internal */
    public id = "audioEffectMixer"
  /**
   * @internal
   * 由于胶水层面 class 代理 listener，但是多个 class 共用一个 listener name，所以需要添加前缀区分不同的事件
   */
  private eventMap = {
    onEffectFinished: 'onEffectFinished',
    onEffectError: 'onEffectEffectError',
    onError: 'onEffectError'
  }

  /**
   * 监听对应的事件
   * @remarks 支持多次调用同一事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  on<event extends keyof QNRTCAudioEffectMixerEvent>(
    name: event,
    listener: QNRTCAudioEffectMixerEvent[event]
  ): void {
    QNEvent.addEventListener(this.eventMap[name], listener)
  }

  /**
   * 取消监听对应的事件
   * @remarks 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCAudioEffectMixerEvent>(
    name: event,
    listener: QNRTCAudioEffectMixerEvent[event]
  ): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 创建音效混音配置类实例
   * @remarks 每一路参与混音的音效都需要对应一个 {@link QNAudioEffect} 实例
   * @param effectID
   * @param filePath
   */
  createAudioEffect(effectID: number, filePath: string): QNAudioEffect {
    QNRtcAudioEffectMixer.createAudioEffect(effectID, filePath)
    return new QNAudioEffect(effectID, filePath)
  }

  /**
   * 开始音效混音
   * @remarks 混音的次数可以通过 {@link QNAudioEffect.setLoopCount} 接口配置
   * @param effectID 音效文件的唯一标识符
   */
  start(effectID: number) {
    QNRtcAudioEffectMixer.start(effectID)
  }

  /**
   * 设置是否推送到远端，默认推送
   * @param effectID 音效文件的唯一标识符
   * @param enabled false: 只在本地播放音效，true: 将本地播放的音效发布至远端
   */
  setPublishEnabled(effectID: number, enabled: boolean) {
    QNRtcAudioEffectMixer.setPublishEnabled(effectID, enabled)
  }

  /**
   * 是否推送到远端
   * @param effectID 音效文件的唯一标识符
   * @returns false: 只在本地播放音效， true: 将本地播放的音效发布至远端
   */
  isPublishEnabled(effectID: number): boolean {
    return QNRtcAudioEffectMixer.isPublishEnabled(effectID)
  }

  /**
   * 停止混音操作
   * @param effectID 音效文件的唯一标识符
   */
  stop(effectID: number) {
    QNRtcAudioEffectMixer.stop(effectID)
  }

  /**
   * 混音恢复操作
   * @param effectID 音效文件的唯一标识符
   */
  resume(effectID: number) {
    QNRtcAudioEffectMixer.resume(effectID)
  }

  /**
   * 暂停混音操作
   * @param effectID 音效文件的唯一标识符
   */
  pause(effectID: number) {
    QNRtcAudioEffectMixer.pause(effectID)
  }

  /**
   * 停止所有正在混音的音效
   */
  stopAll() {
    QNRtcAudioEffectMixer.stopAll()
  }

  /**
   * 暂停所有正在混音的音效
   */
  pauseAll() {
    QNRtcAudioEffectMixer.pauseAll()
  }

  /**
   * 恢复所有暂停混音的音效
   */
  resumeAll() {
    QNRtcAudioEffectMixer.resumeAll()
  }

  /**
   * 获取指定音效混音的位置
   * @remarks 单位: ms
   * @param effectID 音效文件的唯一标识符
   * @returns 指定音效混音的位置，单位: ms
   */
  getCurrentPosition(effectID: number): number {
    return QNRtcAudioEffectMixer.getCurrentPosition(effectID)
  }

  /**
   * 设置指定音效的混音音量
   * @remarks 默认音量为 1.0f
   * 若想修改混音中麦克风采集音频的音量，可通过 {@link QNMicrophoneAudioTrack.setVolume} 接口实现
   */
  setVolume(effectID: number, volume: number) {
    QNRtcAudioEffectMixer.setVolume(effectID, volume)
  }

  /**
   * 获取指定音效的混音音量
   * @param effectID 音效文件的唯一标识符
   * @returns 指定音效的混音音量，[0.0f - 1.0f]
   */
  getVolume(effectID: number): number {
    return QNRtcAudioEffectMixer.getVolume(effectID)
  }

  /**
   * 设置所有正在混音的音效的混音音量
   * @param volume 音效的混音音量，[0.0f - 1.0f]
   */
  setAllEffectsVolume(volume: number) {
    QNRtcAudioEffectMixer.setAllEffectsVolume(volume)
  }
}
