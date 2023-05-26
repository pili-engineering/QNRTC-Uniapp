import { QNRTCCameraFacing, QNRTCPolicy, QNRTCBwePolicy, QNRTCLogLevel, QNSessionPresetType } from './enum/RTCEnum';
export var QNRTCConfigurationPreset = {
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
};
export var QNMicrophoneAudioTrackConfigPreset = {
    tag: '',
    bitrate: 24,
    BitsPerSample: 16,
    ChannelCount: 1,
    SampleRate: 16000,
    communicationModeOn: true
};
export var QNCustomAudioTrackConfigPreset = {
    tag: '',
    bitrate: 24,
    BitsPerSample: 16,
    ChannelCount: 1,
    SampleRate: 16000
};
export var QNCameraVideoTrackConfigPreset = {
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
};
export var QNScreenVideoTrackConfigPreset = {
    tag: '',
    bitrate: 800,
    width: 640,
    height: 480,
    multiStreamEnable: false,
    frameRate: 20
};
export var QNCustomVideoTrackConfigPreset = {
    tag: '',
    bitrate: 800,
    width: 640,
    height: 480,
    multiStreamEnable: false,
    frameRate: 20
};
