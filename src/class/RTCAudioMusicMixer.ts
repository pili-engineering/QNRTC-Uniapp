import { QNRTCAudioMusicMixerEvent } from '../event/RTCEvent'
import { QNAudioMusicMixerState } from '../interface/RTCInterface'
const QNRtcAudioMusicMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer')
const QNEvent = uni.requireNativePlugin('globalEvent')
export class QNAudioMusicMixer {
  /** @internal */
  public id = "audioMusicMixer"
  /** @internal */
  private variationList = ['onStateChanged']
  /**
   * @internal
   * 由于胶水层面 class 代理 listener，但是多个 class 共用一个 listener name，所以需要添加前缀区分不同的事件
   */
  private eventMap = {
    onStateChanged: 'onMusicStateChanged',
    onMixing: 'onMusicMixing',
    onError: 'onMusicError',
  }

  /**
   * 函数变异
   * @internal
   * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
   * @param listener 包装前的 callback
   * @returns 包装后的 callback
   */
  private createAudioMusicMixerCallback<event extends keyof QNRTCAudioMusicMixerEvent>(
    name: string,
    listener: QNRTCAudioMusicMixerEvent[event]
  ) {
    if (name === 'onStateChanged') {
      const variationCallback = (params: { state: QNAudioMusicMixerState }) => {
        if (params.state) {
          // @ts-ignore
          listener(params)
        }
      }
      return variationCallback
    }
  }

  /**
   * 监听对应的事件
   * @remarks 支持多次调用同一事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  on<event extends keyof QNRTCAudioMusicMixerEvent>(
    name: event,
    listener: QNRTCAudioMusicMixerEvent[event]
  ): void {
    if (this.variationList.some((item) => item === name)) {
      const callback = this.createAudioMusicMixerCallback(name, listener)
      QNEvent.addEventListener(this.eventMap[name], callback)
    } else {
      QNEvent.addEventListener(this.eventMap[name], listener)
    }
  }

  /**
   * 取消监听对应的事件
   * @remarks 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCAudioMusicMixerEvent>(
    name: event,
    listener: QNRTCAudioMusicMixerEvent[event]
  ): void {
    QNEvent.removeEventListener(this.eventMap[name], listener)
  }

  /**
   * 设置是否推送到远端
   * @remarks 默认推送
   * @param enabled false: 只在本地播放音乐，true: 将本地播放的音乐发布至远端
   */
  setPublishEnabled(enabled: boolean) {
    QNRtcAudioMusicMixer.setPublishEnabled(enabled)
  }

  /**
   * 是否推送到远端
   * @returns false: 只在本地播放音效， true: 将本地播放的音效发布至远端
   */
  isPublishEnabled() {
    return QNRtcAudioMusicMixer.isPublishEnabled()
  }

  /**
   * 获取音频文件的时长
   * @remarks 单位: ms
   * 该接口为同步方法，对于在线音频文件，获取时长会存在一定的耗时
   * @param 文件路径
   * @returns 播放时长
   */
  getDuration(filePath: string): number {
    return QNRtcAudioMusicMixer.getDuration(filePath)
  }

  /**
   * 开始混音
   * @remarks 开始指定次数的混音并播放
   * @param loopTimes 循环次数
   */
  start(loopCount = 1): void {
    QNRtcAudioMusicMixer.start(loopCount)
  }

  /**
   * 停止混音操作
   */
  stop(): void {
    QNRtcAudioMusicMixer.stop()
  }

  /**
   * 混音恢复操作
   */
  resume(): void {
    QNRtcAudioMusicMixer.resume()
  }

  /**
   * 暂停混音操作
   */
  pause(): void {
    QNRtcAudioMusicMixer.pause()
  }

  /**
   * 获取当前音频混音的位置
   * @remarks 单位: ms
   * @returns 当前播放位置
   */
  getCurrentPosition(): number {
    return QNRtcAudioMusicMixer.getCurrentPosition()
  }

  /**
   * 跳到指定位置混音
   * @param timeUs 指定位置的时间戳，单位: ms
   */
  seekTo(timeUs: number) {
    QNRtcAudioMusicMixer.seekTo(timeUs)
  }

  /**
   * 设置背景音乐的混音音量
   * @param musicVolume 音乐混音音量 [0,1]
   */
  setMusicVolume(musicVolume: number) {
    QNRtcAudioMusicMixer.setMusicVolume(musicVolume)
  }

  /**
   * 获取背景音乐混音的音量
   * @returns 音乐混音音量 [0,1]
   */
  getMusicVolume(): number {
    return QNRtcAudioMusicMixer.getMusicVolume()
  }

  /**
   * 设置背景音乐混音的起始位置
   * @remarks 起始位置的有效值为 0 - duration 之间的值
   * @param position 背景音乐混音的起始位置，单位：ms
   */
  setStartPosition(position: number) {
    QNRtcAudioMusicMixer.setStartPosition(position)
  }

  /**
   * 获取背景音乐混音的起始位置
   * @returns 背景音乐混音的起始位置，单位：ms
   */
  getStartPosition(): number {
    return QNRtcAudioMusicMixer.getStartPosition()
  }
}
