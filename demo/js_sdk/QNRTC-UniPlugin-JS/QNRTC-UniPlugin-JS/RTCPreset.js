"use strict";
exports.__esModule = true;
exports.QNCustomVideoTrackConfigPreset = exports.QNScreenVideoTrackConfigPreset = exports.QNCameraVideoTrackConfigPreset = exports.QNCustomAudioTrackConfigPreset = exports.QNMicrophoneAudioTrackConfigPreset = exports.QNRTCConfigurationPreset = void 0;
var RTCEnum_1 = require("./enum/RTCEnum");
exports.QNRTCConfigurationPreset = {
    policy: RTCEnum_1.QNRTCPolicy.forceUDP,
    stereo: false,
    logLevel: RTCEnum_1.QNRTCLogLevel.info,
    bwePolicy: RTCEnum_1.QNRTCBwePolicy.TCC,
    allowAudioMixWithOthers: true,
    hWCodecEnabled: true,
    maintainResolution: false,
    fieldTrials: '',
    encoderQualityMode: false,
    isAEC3Enabled: true
};
exports.QNMicrophoneAudioTrackConfigPreset = {
    tag: '',
    bitrate: 24,
    BitsPerSample: 16,
    ChannelCount: 1,
    SampleRate: 16000,
    communicationModeOn: true
};
exports.QNCustomAudioTrackConfigPreset = {
    tag: '',
    bitrate: 24,
    BitsPerSample: 16,
    ChannelCount: 1,
    SampleRate: 16000
};
exports.QNCameraVideoTrackConfigPreset = {
    tag: '',
    bitrate: 800,
    width: 640,
    height: 480,
    multiStreamEnable: false,
    cameraFacing: RTCEnum_1.QNRTCCameraFacing.front,
    frameRate: 20,
    captureWidth: 640,
    captureHeight: 480,
    captureFrameRate: 20,
    sessionPreset: RTCEnum_1.QNSessionPresetType.AVCaptureSessionPreset640x480
};
exports.QNScreenVideoTrackConfigPreset = {
    tag: '',
    bitrate: 800,
    width: 640,
    height: 480,
    multiStreamEnable: false,
    frameRate: 20
};
exports.QNCustomVideoTrackConfigPreset = {
    tag: '',
    bitrate: 800,
    width: 640,
    height: 480,
    multiStreamEnable: false,
    frameRate: 20
};
