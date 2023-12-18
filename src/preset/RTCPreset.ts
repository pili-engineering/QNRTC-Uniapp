import {
  QNRTCCameraFacing,
  QNRTCPolicy,
  QNRTCBwePolicy,
  QNRTCLogLevel,
  QNSessionPresetType,
  QNMediaRelayState,
  QNClientRole,
  QNClientMode,
  QNAudioScene
} from '../enum/RTCEnum'
import { QNPublishResultError, QNMediaRelayResultError } from '../interface/RTCInterface'

export const QNRTCConfigurationPreset = {
  policy: QNRTCPolicy.forceUDP,
  stereo: false,
  logLevel: QNRTCLogLevel.info,
  bwePolicy: QNRTCBwePolicy.TCC,
  allowAudioMixWithOthers: true,
  hWCodecEnabled: true,
  maintainResolution: false,
  fieldTrials: '',
  encoderQualityMode: false,
  isAEC3Enabled: true,
  audioScene: QNAudioScene.DEFAULT,
  defaultAudioRouteToSpeakerphone: true,
  reconnectionTimeout: 30000
}

export const QNMicrophoneAudioTrackConfigPreset = {
  tag: '',
  bitrate: 24,
  BitsPerSample: 16,
  ChannelCount: 1,
  SampleRate: 16000,
  communicationModeOn: true,
}

export const QNCustomAudioTrackConfigPreset = {
  tag: '',
  bitrate: 24,
  BitsPerSample: 16,
  ChannelCount: 1,
  SampleRate: 16000,
}

export const QNCameraVideoTrackConfigPreset = {
  tag: '',
  bitrate: 800,
  width: 640,
  height: 480,
  multiStreamEnable: false,
  cameraFacing: QNRTCCameraFacing.front,
  frameRate: 20,
  captureWidth: 640,
  captureHeight: 480,
  captureFrameRate: 20,
  sessionPreset: QNSessionPresetType.AVCaptureSessionPreset640x480,
}

export const QNScreenVideoTrackConfigPreset = {
  tag: '',
  bitrate: 800,
  width: 640,
  height: 480,
  multiStreamEnable: false,
  frameRate: 20,
}

export const QNCustomVideoTrackConfigPreset = {
  tag: '',
  bitrate: 800,
  width: 640,
  height: 480,
  multiStreamEnable: false,
  frameRate: 20,
}

export const QNClientConfigPreset = {
  mode: QNClientMode.RTC,
  role: QNClientRole.BROADCASTER
}

/**
 * 发布成功后回调
 * @param onPublished 发布结果
 * @param data identifyID 与 trackID kv对应关系
 * @param error 发布失败信息
 */
export type QNPublishResultCallback = (onPublished: boolean, error: QNPublishResultError) => void

/**
 * 请求录屏权限后回调
 * @param result 请求权限结果
 */
export type QNScreenPermissionResultCallback = (result: boolean) => void

/**
 * 请求
 */
export type QNClientRoleResultCallback = (role: QNClientRole) => void

/**
 * 跨房媒体转发回调
 * @since 5.2.5
 * @param result 具体目标房间状态， key 为房间名， value 为状态
 * @param error 接口失败回调
 * @remarks
 * result 回调的结果是全量的跨房状态，包含所有跨房目标。具体每个目标房间是否转发成功，需要参考回调参数中目标房间对应的 QNMediaRelayState
 */
export type QNMediaRelayResultCallback = (
  result: Record<string, QNMediaRelayState>,
  error: QNMediaRelayResultError
) => void
