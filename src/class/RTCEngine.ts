import { QNRTCConfigurationPreset, QNMicrophoneAudioTrackConfigPreset, QNCustomAudioTrackConfigPreset, QNCameraVideoTrackConfigPreset, QNScreenVideoTrackConfigPreset, QNCustomVideoTrackConfigPreset, QNScreenPermissionResultCallback } from '../RTCPreset'
import { QNRTCConfiguration, QNMicrophoneAudioTrackConfig, QNUNILocalTrack, QNCustomAudioTrackConfig, QNCameraVideoTrackConfig, QNScreenVideoTrackConfig, QNCustomVideoTrackConfig } from '../interface/RTCInterface'
import QNRTCClient from './RTCClient'
import QNCameraVideoTrack from './RTCCameraVideoTrack'
import QNMicrophoneAudioTrack from './RTCMicrophoneAudioTrack'
import QNScreenVideoTrack from './RTCScreenVideoTrack'
import QNTrack from './RTCTrack'
import { QNRTCEngineEvent } from '../RTCEvent'
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcEngine = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNEvent = uni.requireNativePlugin('globalEvent')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
// @ts-ignore
// eslint-disable-next-line no-undef
const QNRTCClientPlugin = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient')
export default class RTCEngine {
  /**
   * on
   * @static
   * @description 监听对应的事件，支持多次调用同一事件
   * @param { string } name 事件名
   * @param { QNRTCClinetEvent } listener 事件句柄
   * @returns { void }
   */
  static on<event extends keyof QNRTCEngineEvent> (name: event, listener: QNRTCEngineEvent[event]): void {
    QNEvent.addEventListener(name, listener)
  }

  /**
   * off
   * @static
   * @description 取消监听对应的事件
   * @param { string } name 事件名
   * @param { QNRTCClinetEvent } listener 事件句柄
   * @returns { void }
   */
  static off<event extends keyof QNRTCEngineEvent> (name: event, listener: QNRTCEngineEvent[event]): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * requestPermission
   * @description 请求录屏权限，只支持安卓，创建 QNScreenVideoTrack 前安卓需要调用此接口获取对应权限
   * @param { QNScreenPermissionResultCallback } 请求录屏权限后回调
   * @returns { void }
   */
  static requestPermission (callback: QNScreenPermissionResultCallback): void {
    return QNRtcTrack.requestPermission(callback)
  }

  /**
   * isScreenCaptureSupported
   * @description 请判断屏幕录制功能是否可用，建议创建 QNScreenVideoTrack 前先调用次接口确认是否支持录屏
   * @returns { number } 可用 1 不可用 0
   */
  static isScreenCaptureSupported (): number {
    return QNRtcTrack.isScreenCaptureSupported()
  }

  /**
   * configRTC
   * @static
   * @description 初始化 SDK，必须在使用其它接口前调用
   * @param { QNRTCConfiguration } config 初始化配置项
   * @returns { void }
   */
  static configRTC (config: QNRTCConfiguration): void {
    const _config = {
      ...QNRTCConfigurationPreset,
      ...config
    }
    QNRtcTrack.initDelegate()
    QNRTCClientPlugin.initDelegate()
    return QNRtcEngine.configRTC(_config)
  }

  /**
   * deinit
   * @static
   * @description 反初始化操作，在确认不再使用实时音视频后调用此接口释放其占用的资源，此后如果再使用需要再次调用 configRTC 方法
   * @returns { void }
   */
  static deinit (): void {
    return QNRtcEngine.deinit()
  }

  /**
   * createClient
   * @static
   * @description 创建 QNRTCClient 对象，全局只可存在一个
   * @returns { QNRTCClient } RTC 管理对象
   */
  static createClient (): QNRTCClient {
    QNRtcEngine.createRTCClient()
    return new QNRTCClient()
  }

  /**
   * createMicrophoneAudioTrack
   * @static
   * @description 创建麦克风音频轨，默认 tag 为 ""
   * @param { QNMicrophoneAudioTrackConfig } config 采集音频的配置，可指定音频质量等级与开关通讯模式
   * @returns { QNMicrophoneAudioTrack } Track 实例
   */
  static createMicrophoneAudioTrack (config: QNMicrophoneAudioTrackConfig): QNMicrophoneAudioTrack {
    const _config = {
      ...QNMicrophoneAudioTrackConfigPreset,
      ...config
    }
    const result: QNUNILocalTrack = QNRtcEngine.createMicrophoneAudioTrack(_config)
    return new QNMicrophoneAudioTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result
    })
  }

  /**
   * createCameraVideoTrack
   * @static
   * @description 创建摄像头视频轨，默认 tag 为 ""
   * @param { QNCameraVideoTrackConfig } config 摄像头 Track 的配置，可设置视频的采集配置、编码配置等
   * @returns { QNCameraVideoTrack } QNCameraVideoTrack 实例
   */
  static createCameraVideoTrack (config: QNCameraVideoTrackConfig): QNCameraVideoTrack {
    const _config = {
      ...QNCameraVideoTrackConfigPreset,
      ...config
    }
    const result: QNUNILocalTrack = QNRtcEngine.createCameraVideoTrack(_config)
    return new QNCameraVideoTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result
    })
  }

  /**
   * createScreenVideoTrack
   * @static
   * @description 创建屏幕录制轨，默认 tag 为 ""
   * @param { QNScreenVideoTrackConfig } config 屏幕录制 Track 的配置，可设置视频的编码配置与开关大小流功能
   * @returns { QNScreenVideoTrack } QNScreenVideoTrack 实例
   */
  static createScreenVideoTrack (config: QNScreenVideoTrackConfig): QNScreenVideoTrack {
    const _config = {
      ...QNScreenVideoTrackConfigPreset,
      ...config
    }
    const result: QNUNILocalTrack = QNRtcEngine.createScreenVideoTrack(_config)
    return new QNScreenVideoTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result
    })
  }

  /**
   * createCustomAudioTrack
   * @static
   * @todo 暂不支持自定义轨
   * @description 创建自定义音频轨，默认 tag 为 ""
   * @param { QNCustomAudioTrackConfig } config 采集音频的配置，可指定音频质量等级
   * @returns { QNTrack } Track 实例
   */
  static createCustomAudioTrack (config: QNCustomAudioTrackConfig): QNTrack {
    const _config = {
      ...QNCustomAudioTrackConfigPreset,
      ...config
    }
    const result: QNUNILocalTrack = QNRtcEngine.createCustomAudioTrack(_config)
    return new QNTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result
    })
  }

  /**
   * createCustomVideoTrack
   * @static
   * @todo 暂不支持自定义轨
   * @description 创建自定义视频采集轨，默认 tag 为 ""
   * @param { QNCustomVideoTrackConfig } config 自定义视频采集 Track 的配置，可设置视频的编码配置与开关大小流功能
   * @returns { QNTrack } Track 实例
   */
  static createCustomVideoTrack (config: QNCustomVideoTrackConfig): QNTrack {
    const _config = {
      ...QNCustomVideoTrackConfigPreset,
      ...config
    }
    const result: QNUNILocalTrack = QNRtcEngine.createCustomVideoTrack(_config)
    return new QNTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result
    })
  }

  /**
   * setAudioRouteToSpeakerphone
   * @static
   * @description 音频路由切换，设置是否将音频路由切换到扬声器，默认音频路由为扬声器
   * @param { boolean } audioRouteToSpeakerphone 初始化配置项
   * @returns { void }
   */
  static setAudioRouteToSpeakerphone (audioRouteToSpeakerphone: boolean): void {
    return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone)
  }

  /**
   * enableFileLogging
   * @static
   * @description 设置是否开启本地日志保存
   * @returns { void }
   */
  static enableFileLogging (): void {
    return QNRtcEngine.enableFileLogging()
  }
}
