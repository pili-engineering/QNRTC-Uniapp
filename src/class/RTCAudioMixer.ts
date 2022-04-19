import { QNRTCAudioMixerEvent } from '../RTCEvent'
import { QNAudioMixerState } from '../interface/RTCInterface'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcAudioMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNEvent = uni.requireNativePlugin('globalEvent')
export class QNAudioMixer {
  /**
   * @internal
   */
  private identifyID: string
  /**
   * @internal
   */
  private url: string
  /**
   * @internal
   */
  private variationList = ["onStateChanged"]
  constructor (identifyID: string, url: string) {
    this.identifyID = identifyID
    this.url = url
  }

  /**
   * 函数变异
   * @internal
   * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
   * @param listener 包装前的 callback
   * @returns 包装后的 callback
   */
   private createAudioMixerCallback<event extends keyof QNRTCAudioMixerEvent > (name: string, listener:QNRTCAudioMixerEvent[event]) {
    if(name === "onStateChanged") {
      const variationCallback = (params: { state: QNAudioMixerState}) => {
        if(params.state) {
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
  on<event extends keyof QNRTCAudioMixerEvent> (name: event, listener: QNRTCAudioMixerEvent[event]): void {
    if (this.variationList.some(item => item === name)) {
      const callback = this.createAudioMixerCallback(name, listener)
      QNEvent.addEventListener(name, callback)
    } else {
      QNEvent.addEventListener(name, listener)
    }
  }

  /**
   * 取消监听对应的事件
   * @remarks 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  off<event extends keyof QNRTCAudioMixerEvent> (name: event, listener: QNRTCAudioMixerEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 开始混音
   * @remarks 开始指定次数的混音并播放
   * @param loopTimes 循环次数
   */
  start (loopTimes: number): void {
    QNRtcAudioMixer.start(this.identifyID, loopTimes)
  }

  /**
   * 停止混音操作
   */
  stop (): void {
    QNRtcAudioMixer.stop(this.identifyID)
  }

  /**
   * 混音恢复操作
   */
  resume (): void {
    QNRtcAudioMixer.resume(this.identifyID)
  }

  /**
   * 暂停混音操作
   */
  pause (): void {
    QNRtcAudioMixer.pause(this.identifyID)
  }

  /**
   * 跳到指定位置混音
   * @param timeUs 指定位置的时间戳，单位: us
   */
  seekTo (timeUs: number): void {
    QNRtcAudioMixer.seekTo(this.identifyID, timeUs)
  }

  /**
   * 设置混音中麦克风和音乐的混音音量
   * @param microphoneVolume 麦克风混音音量 [0,1]
   * @param musicVolume 音乐混音音量 [0,1]
   */
  setMixingVolume (microphoneVolume: number, musicVolume: number): void {
    QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume)
  }

  /**
   * 设置混音音乐本地播放的音量
   * @description 如果不希望本地播放混音的音乐，可以通过该方法将 volume 设置为 0
   * @param volume 混音音乐本地播放音量 [0,1]
   */
  setPlayingVolume (volume: number): void {
    QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume)
  }

  /**
   * 获取音频文件的时长
   * @remarks 单位: us
   * @returns 播放时长
   */
  getDuration (): number {
    return QNRtcAudioMixer.getDuration(this.identifyID)
  }

  /**
   * 获取当前音频混音的位置
   * @remarks 单位: us
   * @returns 当前播放位置
   */
  getCurrentPosition (): number {
    return QNRtcAudioMixer.getCurrentPosition(this.identifyID)
  }

  /**
   * 设置是否开启返听
   * @remarks 只支持ios
   * @param playBack 是否开启耳返
   */
  setPlayBack (playBack: boolean): void {
    QNRtcAudioMixer.setPlayBack(this.identifyID, playBack)
  }
}