import {
  QNRTCConfigurationPreset,
  QNMicrophoneAudioTrackConfigPreset,
  QNCustomAudioTrackConfigPreset,
  QNCameraVideoTrackConfigPreset,
  QNScreenVideoTrackConfigPreset,
  QNCustomVideoTrackConfigPreset,
  QNClientConfigPreset,
  QNScreenPermissionResultCallback,
} from '../preset/RTCPreset'
import {
  QNRTCConfiguration,
  QNMicrophoneAudioTrackConfig,
  QNUNILocalTrack,
  QNCustomAudioTrackConfig,
  QNCameraVideoTrackConfig,
  QNScreenVideoTrackConfig,
  QNCustomVideoTrackConfig,
  QNClientConfig,
} from '../interface/RTCInterface'
import { QNAudioScene } from '../enum/RTCEnum'
import { QNRTCClient } from './RTCClient'
import { QNCameraVideoTrack } from './RTCCameraVideoTrack'
import { QNMicrophoneAudioTrack } from './RTCMicrophoneAudioTrack'
import { QNScreenVideoTrack } from './RTCScreenVideoTrack'
import { QNTrack } from './RTCTrack'
import { QNRTCEngineEvent } from '../event/RTCEvent'
import { QNAudioMusicMixer } from './RTCAudioMusicMixer'
import { QNAudioEffectMixer } from './RTCAudioEffectMixer'
const QNRtcEngine = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcEngine')
const QNEvent = uni.requireNativePlugin('globalEvent')
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
const QNRTCClientPlugin = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient')
const QNRtcAudioMusicMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMusicMixer')
const QNRtcAudioEffectMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioEffectMixer')
const RTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient')
export class QNRTC {
  /**
   * 监听对应的事件
   * @remarks 支持多次调用同一事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  static on<event extends keyof QNRTCEngineEvent>(
    name: event,
    listener: QNRTCEngineEvent[event]
  ): void {
    QNEvent.addEventListener(name, listener)
  }

  /**
   * 取消监听对应的事件
   * @param name 事件名
   * @param listener 事件句柄
   */
  static off<event extends keyof QNRTCEngineEvent>(
    name: event,
    listener: QNRTCEngineEvent[event]
  ): void {
    QNEvent.removeEventListener(name, listener)
  }

  /**
   * 请求录屏权限
   * @deprecated 该接口已废弃，请使用 {@link QNScreenVideoTrack.requestPermission}
   * @remarks 只支持安卓，创建 QNScreenVideoTrack 前安卓需要调用此接口获取对应权限
   * @param callback 请求录屏权限后回调
   */
  static requestPermission(callback: QNScreenPermissionResultCallback): void {
    return QNRtcTrack.requestPermission(callback)
  }

  /**
   * 判断屏幕录制功能是否可用
   * @deprecated 该接口已废弃，请使用 {@link QNScreenVideoTrack.isScreenCaptureSupported}
   * @remarks 建议创建 QNScreenVideoTrack 前先调用次接口确认是否支持录屏
   * @returns 可用 1 不可用 0
   */
  static isScreenCaptureSupported(): number {
    return QNRtcTrack.isScreenCaptureSupported()
  }

  /**
   * 初始化 SDK
   * @since 5.2.5
   * @remarks 必须在使用其它接口前调用
   * @param config 初始化配置项
   */
  static init(config?: QNRTCConfiguration): void {
    const _config = {
      ...QNRTCConfigurationPreset,
      ...config,
    }
    try {
      QNRtcEngine.initDelegate()
    } catch (e) {}
    QNRtcTrack.initDelegate()
    QNRTCClientPlugin.initDelegate()
    QNRtcAudioMusicMixer.initDelegate()
    QNRtcAudioEffectMixer.initDelegate()
    return QNRtcEngine.configRTC(_config)
  }

  /**
   * 初始化 SDK
   * @deprecated 该接口已废弃，请使用 init 方法
   * @remarks 必须在使用其它接口前调用
   * @param config 初始化配置项
   */
  static configRTC(config: QNRTCConfiguration): void {
    const _config = {
      ...QNRTCConfigurationPreset,
      ...config,
    }
    try {
      QNRtcEngine.initDelegate()
    } catch (e) {}
    QNRtcTrack.initDelegate()
    QNRTCClientPlugin.initDelegate()
    QNRtcAudioMusicMixer.initDelegate()
    QNRtcAudioEffectMixer.initDelegate()
    return QNRtcEngine.configRTC(_config)
  }

  /**
   * 反初始化操作
   * @remarks 在确认不再使用实时音视频后调用此接口释放其占用的资源，此后如果再使用需要再次调用 configRTC 方法
   */
  static deinit(): void {
    return QNRtcEngine.deinit()
  }

  /**
   * 创建 QNRTCClient 对象
   * @remarks 全局只可存在一个
   * @returns RTC 管理对象
   */
  static createClient(config?: QNClientConfig): QNRTCClient {
    const _config = {
      ...QNClientConfigPreset,
      ...config,
    }
    QNRtcEngine.createClient(_config)
    const client =  new QNRTCClient()
    RTCClient.setAutoSubscribe(false)
    client.setAutoSubscribe(true)
    return client
  }

  /**
   * 创建麦克风音频轨
   * @remarks 默认 tag 为 ""
   * @param config 采集音频的配置，可指定音频质量等级与开关通讯模式
   * @returns Track 实例
   */
  static createMicrophoneAudioTrack(config?: QNMicrophoneAudioTrackConfig): QNMicrophoneAudioTrack {
    const _config = {
      ...QNMicrophoneAudioTrackConfigPreset,
      ...config,
    }
    const result: QNUNILocalTrack = QNRtcEngine.createMicrophoneAudioTrack(_config)
    return new QNMicrophoneAudioTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result,
    })
  }

  /**
   * 创建摄像头视频轨
   * @remarks 默认 tag 为 ""
   * @param config 摄像头 Track 的配置，可设置视频的采集配置、编码配置等
   * @returns QNCameraVideoTrack 实例
   */
  static createCameraVideoTrack(config?: QNCameraVideoTrackConfig): QNCameraVideoTrack {
    const _config = {
      ...QNCameraVideoTrackConfigPreset,
      ...config,
    }
    const result: QNUNILocalTrack = QNRtcEngine.createCameraVideoTrack(_config)
    return new QNCameraVideoTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result,
    })
  }

  /**
   * 创建屏幕录制轨
   * @remarks 默认 tag 为 ""
   * @param config 屏幕录制 Track 的配置，可设置视频的编码配置与开关大小流功能
   * @returns QNScreenVideoTrack 实例
   */
  static createScreenVideoTrack(config?: QNScreenVideoTrackConfig): QNScreenVideoTrack {
    const _config = {
      ...QNScreenVideoTrackConfigPreset,
      ...config,
    }
    const result: QNUNILocalTrack = QNRtcEngine.createScreenVideoTrack(_config)
    return new QNScreenVideoTrack({
      trackID: '',
      raw: result,
      userID: '',
      ...result,
    })
  }

  /**
   * 切换音频场景
   * @since 5.2.5
   * @remarks
   * 音频场景包括 DEFAULT、VOICE_CHAT 和 SOUND_EQUALIZE 三种，不同场景下，设备的音量类型存在差异，其中：
   * 1. DEFAULT 场景会根据发布和订阅的情况自动切换音频模式，仅发布或仅订阅时，SDK 使用媒体模式；同时发布和订阅时，SDK 将自动切换到通话模式
   * 2. VOICE_CHAT 场景恒定使用通话模式，调节的音量类型为通话音量
   * 3. SOUND_EQUALIZE 场景恒定使用媒体模式，调节的音量类型为媒体音量
   * 4. 佩戴蓝牙耳机的场景，将恒定使用通话模式，在蓝牙通话过程中修改的音频场景将会在蓝牙连接断开后生效
   * 5. 佩戴有线耳机的场景，将恒定使用媒体模式，在通话过程中修改的音频场景将会在耳机拔出后生效
   */
  static setAudioScene(audioScene: QNAudioScene): void {
    return QNRtcEngine.setAudioScene(audioScene)
  }

  /**
   * 音频路由切换
   * @remarks 设置是否将音频路由切换到扬声器，默认音频路由为扬声器
   * @param audioRouteToSpeakerphone 初始化配置项
   */
  static setAudioRouteToSpeakerphone(audioRouteToSpeakerphone: boolean): void {
    return QNRtcEngine.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone)
  }

  /**
   * 设置是否静音扬声器
   * @since 5.2.5
   * @remarks 静音后将听不到远端用户的声音。默认为 false
   * @param muted 是否静音扬声器
   * @defaultValue false
   */
  static setSpeakerphoneMuted(muted: boolean): void {
    return QNRtcEngine.setSpeakerphoneMuted(muted)
  }

  /**
   * 设置是否开启本地日志保存
   * @deprecated 默认会进行本地日志的存储操作（SDK 最多允许保存 3 个日志文件）
   * @remarks 设置是否开启本地日志保存
   */
  static enableFileLogging(): void {
    return QNRtcEngine.enableFileLogging()
  }

  /**
   * 创建背景音乐混音控制器对象
   * @since 5.2.5
   * @remarks 仅支持在线文件，支持的文件格式为：aac、mp3、mp4、ogg、opus、wav、m4a、flac
   * 1.背景音乐混音仅支持同时混合一路背景音乐，若需要切换背景音乐，重新调用本接口创建 {@link QNAudioMusicMixer} 即可
   * 2.建议使用本地文件进行混音，以避免网络环境差引起的混音异常
   * 3.若您希望在混合背景音乐的同时添加音效，可参考音效混音相关接口({@link QNAudioEffectMixer})
   * @param url 音频文件路径
   * @returns 音乐混音控制器对象
   */
  static createAudioMusicMixer(url: string): QNAudioMusicMixer {
    QNRtcEngine.createAudioMusicMixer(url)
    return new QNAudioMusicMixer()
  }

  /**
   * 创建音效混音控制器对象
   * @since 5.2.5
   * @remarks 音效混音支持同时混合多路音效文件
   * @returns 音效混音控制器对象
   */
  static createAudioEffectMixer(): QNAudioEffectMixer {
    QNRtcEngine.createAudioEffectMixer()
    return new QNAudioEffectMixer()
  }

  /**
   * 设置日志
   * @since 5.2.5
   * @alpha
   */
  static setLogConfig(): void {}

  /**
   * 上传日志
   * @since 5.2.5
   * @alpha
   */
  static uploadLog(): void {}
}
