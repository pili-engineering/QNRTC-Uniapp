import { QNRTCCameraFacing, QNRTCPolicy, QNRTCBwePolicy, QNRTCLogLevel, QNSessionPresetType } from './enum/RTCEnum'

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
  isAEC3Enabled: true
}

export const QNMicrophoneAudioTrackConfigPreset = {
  tag: '',
  bitrate: 24,
  BitsPerSample: 16,
  ChannelCount: 1,
  SampleRate: 16000,
  communicationModeOn: true
}

export const QNCustomAudioTrackConfigPreset = {
  tag: '',
  bitrate: 24,
  BitsPerSample: 16,
  ChannelCount: 1,
  SampleRate: 16000
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
  sessionPreset: QNSessionPresetType.AVCaptureSessionPreset640x480
}

export const QNScreenVideoTrackConfigPreset = {
  tag: '',
  bitrate: 800,
  width: 640,
  height: 480,
  multiStreamEnable: false,
  frameRate: 20
}

export const QNCustomVideoTrackConfigPreset = {
  tag: '',
  bitrate: 800,
  width: 640,
  height: 480,
  multiStreamEnable: false,
  frameRate: 20
}

/**
 * 发布成功后回调
 */
export type QNPublishResultCallback = ((params: { onPublished: boolean, data: { [identifyID: string]: string }, error: { message: string, code: number } }) => void)

/**
 * 请求录屏权限后回调
 */
export type QNScreenPermissionResultCallback = ((result: boolean) => void)
