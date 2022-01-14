import { QNRTCCameraFacing, QNRTCPolicy, QNRTCBwePolicy, QNRTCLogLevel, QNSessionPresetType } from './enum/RTCEnum';
export declare const QNRTCConfigurationPreset: {
    policy: QNRTCPolicy;
    stereo: boolean;
    logLevel: QNRTCLogLevel;
    bwePolicy: QNRTCBwePolicy;
    allowAudioMixWithOthers: boolean;
    hWCodecEnabled: boolean;
    maintainResolution: boolean;
    fieldTrials: string;
    encoderQualityMode: boolean;
    isAEC3Enabled: boolean;
};
export declare const QNMicrophoneAudioTrackConfigPreset: {
    tag: string;
    bitrate: number;
    BitsPerSample: number;
    ChannelCount: number;
    SampleRate: number;
    communicationModeOn: boolean;
};
export declare const QNCustomAudioTrackConfigPreset: {
    tag: string;
    bitrate: number;
    BitsPerSample: number;
    ChannelCount: number;
    SampleRate: number;
};
export declare const QNCameraVideoTrackConfigPreset: {
    tag: string;
    bitrate: number;
    width: number;
    height: number;
    multiStreamEnable: boolean;
    cameraFacing: QNRTCCameraFacing;
    frameRate: number;
    captureWidth: number;
    captureHeight: number;
    captureFrameRate: number;
    sessionPreset: QNSessionPresetType;
};
export declare const QNScreenVideoTrackConfigPreset: {
    tag: string;
    bitrate: number;
    width: number;
    height: number;
    multiStreamEnable: boolean;
    frameRate: number;
};
export declare const QNCustomVideoTrackConfigPreset: {
    tag: string;
    bitrate: number;
    width: number;
    height: number;
    multiStreamEnable: boolean;
    frameRate: number;
};
/**
 * 发布成功后回调
 */
export declare type QNPublishResultCallback = ((params: {
    onPublished: boolean;
    data: {
        [identifyID: string]: string;
    };
    error: {
        message: string;
        code: number;
    };
}) => void);
/**
 * 请求录屏权限后回调
 */
export declare type QNScreenPermissionResultCallback = ((result: boolean) => void);
