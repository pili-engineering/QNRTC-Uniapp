export var QNRTCCameraFacing;
(function (QNRTCCameraFacing) {
    QNRTCCameraFacing["back"] = "back";
    QNRTCCameraFacing["front"] = "front";
})(QNRTCCameraFacing || (QNRTCCameraFacing = {}));
export var QNRTCPolicy;
(function (QNRTCPolicy) {
    QNRTCPolicy["forceUDP"] = "forceUDP";
    QNRTCPolicy["forceTCP"] = "forceTCP";
    QNRTCPolicy["preferUDP"] = "preferUDP";
})(QNRTCPolicy || (QNRTCPolicy = {}));
export var QNRTCBwePolicy;
(function (QNRTCBwePolicy) {
    QNRTCBwePolicy["TCC"] = "TCC";
    QNRTCBwePolicy["GCC"] = "GCC";
})(QNRTCBwePolicy || (QNRTCBwePolicy = {}));
export var QNRTCTrackKind;
(function (QNRTCTrackKind) {
    QNRTCTrackKind["audio"] = "audio";
    QNRTCTrackKind["video"] = "video";
})(QNRTCTrackKind || (QNRTCTrackKind = {}));
export var QNRTCLogLevel;
(function (QNRTCLogLevel) {
    QNRTCLogLevel["verbose"] = "verbose";
    QNRTCLogLevel["info"] = "info";
    QNRTCLogLevel["warning"] = "warning";
    QNRTCLogLevel["error"] = "error";
    QNRTCLogLevel["none"] = "none";
})(QNRTCLogLevel || (QNRTCLogLevel = {}));
export var QNConnectionState;
(function (QNConnectionState) {
    QNConnectionState["DISCONNECTED"] = "DISCONNECTED";
    QNConnectionState["CONNECTING"] = "CONNECTING";
    QNConnectionState["CONNECTED"] = "CONNECTED";
    QNConnectionState["RECONNECTING"] = "RECONNECTING";
    QNConnectionState["RECONNECTED"] = "RECONNECTED";
})(QNConnectionState || (QNConnectionState = {}));
export var QNRenderMode;
(function (QNRenderMode) {
    QNRenderMode["FILL"] = "FILL";
    QNRenderMode["ASPECT_FILL"] = "ASPECT_FILL";
    QNRenderMode["ASPECT_FIT"] = "ASPECT_FIT";
})(QNRenderMode || (QNRenderMode = {}));
export var QNTrackProfile;
(function (QNTrackProfile) {
    QNTrackProfile["LOW"] = "LOW";
    QNTrackProfile["MEDIUM"] = "MEDIUM";
    QNTrackProfile["HIGH"] = "HIGH";
})(QNTrackProfile || (QNTrackProfile = {}));
export var QNNetworkGrade;
(function (QNNetworkGrade) {
    QNNetworkGrade["INVALID"] = "INVALID";
    QNNetworkGrade["EXCELLENT"] = "EXCELLENT";
    QNNetworkGrade["GOOD"] = "GOOD";
    QNNetworkGrade["FAIR"] = "FAIR";
    QNNetworkGrade["POOR"] = "POOR";
})(QNNetworkGrade || (QNNetworkGrade = {}));
export var QNConnectionDisconnectedReason;
(function (QNConnectionDisconnectedReason) {
    QNConnectionDisconnectedReason["LEAVE"] = "LEAVE";
    QNConnectionDisconnectedReason["KICKED_OUT"] = "KICKED_OUT";
    QNConnectionDisconnectedReason["ROOM_CLOSED"] = "ROOM_CLOSED";
    QNConnectionDisconnectedReason["ROOM_FULL"] = "ROOM_FULL";
    QNConnectionDisconnectedReason["ERROR"] = "ERROR";
})(QNConnectionDisconnectedReason || (QNConnectionDisconnectedReason = {}));
export var QNLiveStreamingErrorInfoType;
(function (QNLiveStreamingErrorInfoType) {
    QNLiveStreamingErrorInfoType["START"] = "START";
    QNLiveStreamingErrorInfoType["STOP"] = "STOP";
    QNLiveStreamingErrorInfoType["UPDATE"] = "UPDATE";
})(QNLiveStreamingErrorInfoType || (QNLiveStreamingErrorInfoType = {}));
export var QNLiveStreamingErrorInfoCode;
(function (QNLiveStreamingErrorInfoCode) {
    QNLiveStreamingErrorInfoCode["ERROR_NO_PERMISSION"] = "ERROR_NO_PERMISSION";
    QNLiveStreamingErrorInfoCode["ERROR_INVALID_STATE"] = "ERROR_INVALID_STATE";
    QNLiveStreamingErrorInfoCode["ERROR_INVALID_PARAMETER"] = "ERROR_INVALID_PARAMETER";
    QNLiveStreamingErrorInfoCode["ERROR_SIGNAL_TIMEOUT"] = "ERROR_SIGNAL_TIMEOUT";
    QNLiveStreamingErrorInfoCode["SERVER_ERROR"] = "SERVER_ERROR";
})(QNLiveStreamingErrorInfoCode || (QNLiveStreamingErrorInfoCode = {}));
export var QNAudioDevice;
(function (QNAudioDevice) {
    QNAudioDevice["SPEAKER_PHONE"] = "SPEAKER_PHONE";
    QNAudioDevice["EARPIECE"] = "EARPIECE";
    QNAudioDevice["WIRED_HEADSET"] = "WIRED_HEADSET";
    QNAudioDevice["BLUETOOTH"] = "BLUETOOTH";
    QNAudioDevice["NONE"] = "NONE";
})(QNAudioDevice || (QNAudioDevice = {}));
export var QNVideoWaterMarkSize;
(function (QNVideoWaterMarkSize) {
    QNVideoWaterMarkSize["LARGE"] = "LARGE";
    QNVideoWaterMarkSize["MEDIUM"] = "MEDIUM";
    QNVideoWaterMarkSize["SMALL"] = "SMALL";
})(QNVideoWaterMarkSize || (QNVideoWaterMarkSize = {}));
export var QNAVCaptureVideoOrientation;
(function (QNAVCaptureVideoOrientation) {
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationPortrait"] = "AVCaptureVideoOrientationPortrait";
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationLandscapeRight"] = "AVCaptureVideoOrientationLandscapeRight";
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationLandscapeLeft"] = "AVCaptureVideoOrientationLandscapeLeft";
})(QNAVCaptureVideoOrientation || (QNAVCaptureVideoOrientation = {}));
export var QNVideoFillModeType;
(function (QNVideoFillModeType) {
    QNVideoFillModeType["QNVideoFillModeNone"] = "QNVideoFillModeNone";
    QNVideoFillModeType["QNVideoFillModeStretch"] = "QNVideoFillModeStretch";
    QNVideoFillModeType["QNVideoFillModePreserveAspectRatio"] = "QNVideoFillModePreserveAspectRatio";
    QNVideoFillModeType["QNVideoFillModePreserveAspectRatioAndFill"] = "QNVideoFillModePreserveAspectRatioAndFill";
})(QNVideoFillModeType || (QNVideoFillModeType = {}));
export var QNSessionPresetType;
(function (QNSessionPresetType) {
    QNSessionPresetType["AVCaptureSessionPreset352x288"] = "AVCaptureSessionPreset352x288";
    QNSessionPresetType["AVCaptureSessionPreset640x480"] = "AVCaptureSessionPreset640x480";
    QNSessionPresetType["AVCaptureSessionPreset1280x720"] = "AVCaptureSessionPreset1280x720";
    QNSessionPresetType["AVCaptureSessionPreset1920x1080"] = "AVCaptureSessionPreset1920x1080";
    QNSessionPresetType["AVCaptureSessionPreset3840x2160"] = "AVCaptureSessionPreset3840x2160";
    QNSessionPresetType["AVCaptureSessionPresetiFrame960x540"] = "AVCaptureSessionPresetiFrame960x540";
    QNSessionPresetType["AVCaptureSessionPresetiFrame1280x720"] = "AVCaptureSessionPresetiFrame1280x720";
})(QNSessionPresetType || (QNSessionPresetType = {}));
export var QNAudioMixerState;
(function (QNAudioMixerState) {
    QNAudioMixerState["MIXING"] = "MIXING";
    QNAudioMixerState["PAUSED"] = "PAUSED";
    QNAudioMixerState["STOPPED"] = "STOPPED";
    QNAudioMixerState["COMPLETED"] = "COMPLETED";
})(QNAudioMixerState || (QNAudioMixerState = {}));
export var QNVideoFrameType;
(function (QNVideoFrameType) {
    QNVideoFrameType["YUV_NV21"] = "YUV_NV21";
    QNVideoFrameType["TEXTURE_RGB"] = "TEXTURE_RGB";
    QNVideoFrameType["TEXTURE_OES"] = "TEXTURE_OES";
})(QNVideoFrameType || (QNVideoFrameType = {}));
