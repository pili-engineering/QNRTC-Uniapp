"use strict";
exports.__esModule = true;
exports.QNVideoFormatDefault = exports.QNDegradationPreference = exports.QNMediaRelayState = exports.QNClientMode = exports.QNClientRole = exports.QNAudioScene = exports.QNVideoFrameType = exports.QNAudioMusicMixerState = exports.QNAudioMixerState = exports.QNSessionPresetType = exports.QNVideoFillModeType = exports.QNAVCaptureVideoOrientation = exports.QNVideoWaterMarkSize = exports.QNAudioDevice = exports.QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoType = exports.QNConnectionDisconnectedReason = exports.QNNetworkGrade = exports.QNTrackProfile = exports.QNRenderMode = exports.QNConnectionState = exports.QNRTCLogLevel = exports.QNRTCTrackKind = exports.QNRTCBwePolicy = exports.QNRTCPolicy = exports.QNRTCCameraFacing = void 0;
var QNRTCCameraFacing;
(function (QNRTCCameraFacing) {
    QNRTCCameraFacing["back"] = "back";
    QNRTCCameraFacing["front"] = "front";
})(QNRTCCameraFacing = exports.QNRTCCameraFacing || (exports.QNRTCCameraFacing = {}));
var QNRTCPolicy;
(function (QNRTCPolicy) {
    QNRTCPolicy["forceUDP"] = "forceUDP";
    QNRTCPolicy["forceTCP"] = "forceTCP";
    QNRTCPolicy["preferUDP"] = "preferUDP";
})(QNRTCPolicy = exports.QNRTCPolicy || (exports.QNRTCPolicy = {}));
var QNRTCBwePolicy;
(function (QNRTCBwePolicy) {
    QNRTCBwePolicy["TCC"] = "TCC";
    QNRTCBwePolicy["GCC"] = "GCC";
})(QNRTCBwePolicy = exports.QNRTCBwePolicy || (exports.QNRTCBwePolicy = {}));
var QNRTCTrackKind;
(function (QNRTCTrackKind) {
    QNRTCTrackKind["audio"] = "audio";
    QNRTCTrackKind["video"] = "video";
})(QNRTCTrackKind = exports.QNRTCTrackKind || (exports.QNRTCTrackKind = {}));
var QNRTCLogLevel;
(function (QNRTCLogLevel) {
    QNRTCLogLevel["verbose"] = "verbose";
    QNRTCLogLevel["info"] = "info";
    QNRTCLogLevel["warning"] = "warning";
    QNRTCLogLevel["error"] = "error";
    QNRTCLogLevel["none"] = "none";
})(QNRTCLogLevel = exports.QNRTCLogLevel || (exports.QNRTCLogLevel = {}));
var QNConnectionState;
(function (QNConnectionState) {
    QNConnectionState["DISCONNECTED"] = "DISCONNECTED";
    QNConnectionState["CONNECTING"] = "CONNECTING";
    QNConnectionState["CONNECTED"] = "CONNECTED";
    QNConnectionState["RECONNECTING"] = "RECONNECTING";
    QNConnectionState["RECONNECTED"] = "RECONNECTED";
})(QNConnectionState = exports.QNConnectionState || (exports.QNConnectionState = {}));
var QNRenderMode;
(function (QNRenderMode) {
    QNRenderMode["FILL"] = "FILL";
    QNRenderMode["ASPECT_FILL"] = "ASPECT_FILL";
    QNRenderMode["ASPECT_FIT"] = "ASPECT_FIT";
})(QNRenderMode = exports.QNRenderMode || (exports.QNRenderMode = {}));
var QNTrackProfile;
(function (QNTrackProfile) {
    QNTrackProfile["LOW"] = "LOW";
    QNTrackProfile["MEDIUM"] = "MEDIUM";
    QNTrackProfile["HIGH"] = "HIGH";
})(QNTrackProfile = exports.QNTrackProfile || (exports.QNTrackProfile = {}));
var QNNetworkGrade;
(function (QNNetworkGrade) {
    QNNetworkGrade["INVALID"] = "INVALID";
    QNNetworkGrade["EXCELLENT"] = "EXCELLENT";
    QNNetworkGrade["GOOD"] = "GOOD";
    QNNetworkGrade["FAIR"] = "FAIR";
    QNNetworkGrade["POOR"] = "POOR";
})(QNNetworkGrade = exports.QNNetworkGrade || (exports.QNNetworkGrade = {}));
var QNConnectionDisconnectedReason;
(function (QNConnectionDisconnectedReason) {
    QNConnectionDisconnectedReason["LEAVE"] = "LEAVE";
    QNConnectionDisconnectedReason["KICKED_OUT"] = "KICKED_OUT";
    QNConnectionDisconnectedReason["ROOM_CLOSED"] = "ROOM_CLOSED";
    QNConnectionDisconnectedReason["ROOM_FULL"] = "ROOM_FULL";
    QNConnectionDisconnectedReason["ERROR"] = "ERROR";
})(QNConnectionDisconnectedReason = exports.QNConnectionDisconnectedReason || (exports.QNConnectionDisconnectedReason = {}));
var QNLiveStreamingErrorInfoType;
(function (QNLiveStreamingErrorInfoType) {
    QNLiveStreamingErrorInfoType["START"] = "START";
    QNLiveStreamingErrorInfoType["STOP"] = "STOP";
    QNLiveStreamingErrorInfoType["UPDATE"] = "UPDATE";
})(QNLiveStreamingErrorInfoType = exports.QNLiveStreamingErrorInfoType || (exports.QNLiveStreamingErrorInfoType = {}));
var QNLiveStreamingErrorInfoCode;
(function (QNLiveStreamingErrorInfoCode) {
    QNLiveStreamingErrorInfoCode["ERROR_NO_PERMISSION"] = "ERROR_NO_PERMISSION";
    QNLiveStreamingErrorInfoCode["ERROR_INVALID_STATE"] = "ERROR_INVALID_STATE";
    QNLiveStreamingErrorInfoCode["ERROR_INVALID_PARAMETER"] = "ERROR_INVALID_PARAMETER";
    QNLiveStreamingErrorInfoCode["ERROR_SIGNAL_TIMEOUT"] = "ERROR_SIGNAL_TIMEOUT";
    QNLiveStreamingErrorInfoCode["SERVER_ERROR"] = "SERVER_ERROR";
})(QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoCode || (exports.QNLiveStreamingErrorInfoCode = {}));
var QNAudioDevice;
(function (QNAudioDevice) {
    QNAudioDevice["SPEAKER_PHONE"] = "SPEAKER_PHONE";
    QNAudioDevice["EARPIECE"] = "EARPIECE";
    QNAudioDevice["WIRED_HEADSET"] = "WIRED_HEADSET";
    QNAudioDevice["BLUETOOTH"] = "BLUETOOTH";
    QNAudioDevice["NONE"] = "NONE";
})(QNAudioDevice = exports.QNAudioDevice || (exports.QNAudioDevice = {}));
var QNVideoWaterMarkSize;
(function (QNVideoWaterMarkSize) {
    QNVideoWaterMarkSize["LARGE"] = "LARGE";
    QNVideoWaterMarkSize["MEDIUM"] = "MEDIUM";
    QNVideoWaterMarkSize["SMALL"] = "SMALL";
})(QNVideoWaterMarkSize = exports.QNVideoWaterMarkSize || (exports.QNVideoWaterMarkSize = {}));
var QNAVCaptureVideoOrientation;
(function (QNAVCaptureVideoOrientation) {
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationPortrait"] = "AVCaptureVideoOrientationPortrait";
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationLandscapeRight"] = "AVCaptureVideoOrientationLandscapeRight";
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationLandscapeLeft"] = "AVCaptureVideoOrientationLandscapeLeft";
})(QNAVCaptureVideoOrientation = exports.QNAVCaptureVideoOrientation || (exports.QNAVCaptureVideoOrientation = {}));
var QNVideoFillModeType;
(function (QNVideoFillModeType) {
    QNVideoFillModeType["QNVideoFillModeNone"] = "QNVideoFillModeNone";
    QNVideoFillModeType["QNVideoFillModeStretch"] = "QNVideoFillModeStretch";
    QNVideoFillModeType["QNVideoFillModePreserveAspectRatio"] = "QNVideoFillModePreserveAspectRatio";
    QNVideoFillModeType["QNVideoFillModePreserveAspectRatioAndFill"] = "QNVideoFillModePreserveAspectRatioAndFill";
})(QNVideoFillModeType = exports.QNVideoFillModeType || (exports.QNVideoFillModeType = {}));
var QNSessionPresetType;
(function (QNSessionPresetType) {
    QNSessionPresetType["AVCaptureSessionPreset352x288"] = "AVCaptureSessionPreset352x288";
    QNSessionPresetType["AVCaptureSessionPreset640x480"] = "AVCaptureSessionPreset640x480";
    QNSessionPresetType["AVCaptureSessionPreset1280x720"] = "AVCaptureSessionPreset1280x720";
    QNSessionPresetType["AVCaptureSessionPreset1920x1080"] = "AVCaptureSessionPreset1920x1080";
    QNSessionPresetType["AVCaptureSessionPreset3840x2160"] = "AVCaptureSessionPreset3840x2160";
    QNSessionPresetType["AVCaptureSessionPresetiFrame960x540"] = "AVCaptureSessionPresetiFrame960x540";
    QNSessionPresetType["AVCaptureSessionPresetiFrame1280x720"] = "AVCaptureSessionPresetiFrame1280x720";
})(QNSessionPresetType = exports.QNSessionPresetType || (exports.QNSessionPresetType = {}));
var QNAudioMixerState;
(function (QNAudioMixerState) {
    QNAudioMixerState["MIXING"] = "MIXING";
    QNAudioMixerState["PAUSED"] = "PAUSED";
    QNAudioMixerState["STOPPED"] = "STOPPED";
    QNAudioMixerState["COMPLETED"] = "COMPLETED";
})(QNAudioMixerState = exports.QNAudioMixerState || (exports.QNAudioMixerState = {}));
var QNAudioMusicMixerState;
(function (QNAudioMusicMixerState) {
    QNAudioMusicMixerState["IDLE"] = "IDLE";
    QNAudioMusicMixerState["MIXING"] = "MIXING";
    QNAudioMusicMixerState["PAUSED"] = "PAUSED";
    QNAudioMusicMixerState["STOPPED"] = "STOPPED";
    QNAudioMusicMixerState["COMPLETED"] = "COMPLETED";
})(QNAudioMusicMixerState = exports.QNAudioMusicMixerState || (exports.QNAudioMusicMixerState = {}));
var QNVideoFrameType;
(function (QNVideoFrameType) {
    QNVideoFrameType["YUV_NV21"] = "YUV_NV21";
    QNVideoFrameType["TEXTURE_RGB"] = "TEXTURE_RGB";
    QNVideoFrameType["TEXTURE_OES"] = "TEXTURE_OES";
})(QNVideoFrameType = exports.QNVideoFrameType || (exports.QNVideoFrameType = {}));
var QNAudioScene;
(function (QNAudioScene) {
    QNAudioScene["DEFAULT"] = "DEFAULT";
    QNAudioScene["VOICE_CHAT"] = "VOICE_CHAT";
    QNAudioScene["SOUND_EQUALIZE"] = "SOUND_EQUALIZE";
})(QNAudioScene = exports.QNAudioScene || (exports.QNAudioScene = {}));
var QNClientRole;
(function (QNClientRole) {
    QNClientRole["BROADCASTER"] = "BROADCASTER";
    QNClientRole["AUDIENCE"] = "AUDIENCE";
})(QNClientRole = exports.QNClientRole || (exports.QNClientRole = {}));
var QNClientMode;
(function (QNClientMode) {
    QNClientMode["RTC"] = "RTC";
    QNClientMode["LIVE"] = "LIVE";
})(QNClientMode = exports.QNClientMode || (exports.QNClientMode = {}));
var QNMediaRelayState;
(function (QNMediaRelayState) {
    QNMediaRelayState["UNKNOWN"] = "UNKNOWN";
    QNMediaRelayState["SUCCESS"] = "SUCCESS";
    QNMediaRelayState["STOPPED"] = "STOPPED";
    QNMediaRelayState["INVALID_TOKEN"] = "INVALID_TOKEN";
    QNMediaRelayState["NO_ROOM"] = "NO_ROOM";
    QNMediaRelayState["ROOM_CLOSED"] = "ROOM_CLOSED";
    QNMediaRelayState["PLAYER_EXISTED"] = "PLAYER_EXISTED";
})(QNMediaRelayState = exports.QNMediaRelayState || (exports.QNMediaRelayState = {}));
var QNDegradationPreference;
(function (QNDegradationPreference) {
    QNDegradationPreference["DEFAULT"] = "DEFAULT";
    QNDegradationPreference["MAINTAIN_FRAMERATE"] = "MAINTAIN_FRAMERATE";
    QNDegradationPreference["MAINTAIN_RESOLUTION"] = "MAINTAIN_RESOLUTION";
    QNDegradationPreference["BALANCED"] = "BALANCED";
    QNDegradationPreference["ADAPT_BITRATE_ONLY"] = "ADAPT_BITRATE_ONLY";
})(QNDegradationPreference = exports.QNDegradationPreference || (exports.QNDegradationPreference = {}));
var QNVideoFormatDefault;
(function (QNVideoFormatDefault) {
    QNVideoFormatDefault["VIDEO_320x180_15"] = "VIDEO_320x180_15";
    QNVideoFormatDefault["VIDEO_320x240_15"] = "VIDEO_320x240_15";
    QNVideoFormatDefault["VIDEO_640x360_15"] = "VIDEO_640x360_15";
    QNVideoFormatDefault["VIDEO_640x360_30"] = "VIDEO_640x360_30";
    QNVideoFormatDefault["VIDEO_640x480_15"] = "VIDEO_640x480_15";
    QNVideoFormatDefault["VIDEO_640x480_30"] = "VIDEO_640x480_30";
    QNVideoFormatDefault["VIDEO_960x540_15"] = "VIDEO_960x540_15";
    QNVideoFormatDefault["VIDEO_960x540_30"] = "VIDEO_960x540_30";
    QNVideoFormatDefault["VIDEO_960x720_15"] = "VIDEO_960x720_15";
    QNVideoFormatDefault["VIDEO_960x720_30"] = "VIDEO_960x720_30";
    QNVideoFormatDefault["VIDEO_1280x720_15"] = "VIDEO_1280x720_15";
    QNVideoFormatDefault["VIDEO_1280x720_30"] = "VIDEO_1280x720_30";
})(QNVideoFormatDefault = exports.QNVideoFormatDefault || (exports.QNVideoFormatDefault = {}));
