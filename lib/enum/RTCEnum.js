"use strict";
exports.__esModule = true;
exports.QNVideoFrameType = exports.QNAudioMixerState = exports.QNSessionPresetType = exports.QNVideoFillModeType = exports.QNAVCaptureVideoOrientation = exports.QNVideoWaterMarkSize = exports.QNAudioDevice = exports.QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoType = exports.QNConnectionDisconnectedReason = exports.QNNetworkGrade = exports.QNTrackProfile = exports.QNRenderMode = exports.QNConnectionState = exports.QNRTCLogLevel = exports.QNRTCTrackKind = exports.QNRTCBwePolicy = exports.QNRTCPolicy = exports.QNRTCCameraFacing = void 0;
/* eslint-disable no-unused-vars */
/**
 * 摄像头类型
 */
var QNRTCCameraFacing;
(function (QNRTCCameraFacing) {
    /**
     * 后置摄像头
     */
    QNRTCCameraFacing["back"] = "back";
    /**
     * 前置摄像头
     */
    QNRTCCameraFacing["front"] = "front";
})(QNRTCCameraFacing = exports.QNRTCCameraFacing || (exports.QNRTCCameraFacing = {}));
/**
 * 网络传输模式
 */
var QNRTCPolicy;
(function (QNRTCPolicy) {
    /**
     * 使用 UDP
     */
    QNRTCPolicy["forceUDP"] = "forceUDP";
    /**
     * 使用 TCP
     */
    QNRTCPolicy["forceTCP"] = "forceTCP";
    /**
     * 优先 UDP，不通的话自动改为 TCP
     */
    QNRTCPolicy["preferUDP"] = "preferUDP";
})(QNRTCPolicy = exports.QNRTCPolicy || (exports.QNRTCPolicy = {}));
/**
 * BwePolicy
 */
var QNRTCBwePolicy;
(function (QNRTCBwePolicy) {
    /**
     * 使用 TCC
     */
    QNRTCBwePolicy["TCC"] = "TCC";
    /**
     * 使用 GCC
     */
    QNRTCBwePolicy["GCC"] = "GCC";
})(QNRTCBwePolicy = exports.QNRTCBwePolicy || (exports.QNRTCBwePolicy = {}));
/**
 * 轨类型
 */
var QNRTCTrackKind;
(function (QNRTCTrackKind) {
    /**
     * 音频
     */
    QNRTCTrackKind["audio"] = "audio";
    /**
     * 视频
     */
    QNRTCTrackKind["video"] = "video";
})(QNRTCTrackKind = exports.QNRTCTrackKind || (exports.QNRTCTrackKind = {}));
/**
 * 日志等级
 */
var QNRTCLogLevel;
(function (QNRTCLogLevel) {
    /**
     * Verbose 日志输出
     */
    QNRTCLogLevel["verbose"] = "verbose";
    /**
     * Info 日志输出
     */
    QNRTCLogLevel["info"] = "info";
    /**
     * Warning 日志输出
     */
    QNRTCLogLevel["warning"] = "warning";
    /**
     * Error 日志输出
     */
    QNRTCLogLevel["error"] = "error";
    /**
     * None 不输出日志
     */
    QNRTCLogLevel["none"] = "none";
})(QNRTCLogLevel = exports.QNRTCLogLevel || (exports.QNRTCLogLevel = {}));
/**
 * 连接状态
 */
var QNConnectionState;
(function (QNConnectionState) {
    /**
     * 未连接
     */
    QNConnectionState["DISCONNECTED"] = "DISCONNECTED";
    /**
     * 连接中
     */
    QNConnectionState["CONNECTING"] = "CONNECTING";
    /**
     * 连接成功
     */
    QNConnectionState["CONNECTED"] = "CONNECTED";
    /**
     * 重连中
     */
    QNConnectionState["RECONNECTING"] = "RECONNECTING";
    /**
     * 已重连
     */
    QNConnectionState["RECONNECTED"] = "RECONNECTED";
})(QNConnectionState = exports.QNConnectionState || (exports.QNConnectionState = {}));
/**
 * 渲染模式
 */
var QNRenderMode;
(function (QNRenderMode) {
    /**
     * 不保持长宽比,图片在容器内完整显示出来
     */
    QNRenderMode["FILL"] = "FILL";
    /**
     * 在保持长宽比的前提下，缩放图片，使图片充满容器
     */
    QNRenderMode["ASPECT_FILL"] = "ASPECT_FILL";
    /**
     * 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
     */
    QNRenderMode["ASPECT_FIT"] = "ASPECT_FIT";
})(QNRenderMode = exports.QNRenderMode || (exports.QNRenderMode = {}));
/**
 * 大小流类型
 */
var QNTrackProfile;
(function (QNTrackProfile) {
    /**
     * 低分辨率
     */
    QNTrackProfile["LOW"] = "LOW";
    /**
     * 中分辨率
     */
    QNTrackProfile["MEDIUM"] = "MEDIUM";
    /**
     * 高分辨率
     */
    QNTrackProfile["HIGH"] = "HIGH";
})(QNTrackProfile = exports.QNTrackProfile || (exports.QNTrackProfile = {}));
/**
 * 网络质量
 */
var QNNetworkGrade;
(function (QNNetworkGrade) {
    /**
     * 网络未知
     */
    QNNetworkGrade["INVALID"] = "INVALID";
    /**
     * 网络优
     */
    QNNetworkGrade["EXCELLENT"] = "EXCELLENT";
    /**
     * 网络良
     */
    QNNetworkGrade["GOOD"] = "GOOD";
    /**
     * 网络一般
     */
    QNNetworkGrade["FAIR"] = "FAIR";
    /**
     * 网络差
     */
    QNNetworkGrade["POOR"] = "POOR";
})(QNNetworkGrade = exports.QNNetworkGrade || (exports.QNNetworkGrade = {}));
/**
 * 连接失败原因
 */
var QNConnectionDisconnectedReason;
(function (QNConnectionDisconnectedReason) {
    /**
     * 主动退出
     */
    QNConnectionDisconnectedReason["LEAVE"] = "LEAVE";
    /**
     * 被踢出房间
     */
    QNConnectionDisconnectedReason["KICKED_OUT"] = "KICKED_OUT";
    /**
     * 房间被关
     */
    QNConnectionDisconnectedReason["ROOM_CLOSED"] = "ROOM_CLOSED";
    /**
     * 房间人数已满
     */
    QNConnectionDisconnectedReason["ROOM_FULL"] = "ROOM_FULL";
    /**
     * 发生错误异常断开
     */
    QNConnectionDisconnectedReason["ERROR"] = "ERROR";
})(QNConnectionDisconnectedReason = exports.QNConnectionDisconnectedReason || (exports.QNConnectionDisconnectedReason = {}));
/**
 * 转推失败原因
 */
var QNLiveStreamingErrorInfoType;
(function (QNLiveStreamingErrorInfoType) {
    /**
     * 开始转推操作异常，请检查房间状态、单路转推配置等信息
     */
    QNLiveStreamingErrorInfoType["START"] = "START";
    /**
     * 停止转推操作异常，请检查房间状态
     */
    QNLiveStreamingErrorInfoType["STOP"] = "STOP";
    /**
     * 更改合流布局配置操作异常，请检查房间状态、合流布局配置等信息
     */
    QNLiveStreamingErrorInfoType["UPDATE"] = "UPDATE";
})(QNLiveStreamingErrorInfoType = exports.QNLiveStreamingErrorInfoType || (exports.QNLiveStreamingErrorInfoType = {}));
/**
 * 合流失败原因
 */
var QNLiveStreamingErrorInfoCode;
(function (QNLiveStreamingErrorInfoCode) {
    /**
     * 无操作权限，请检查用户的操作权限
     */
    QNLiveStreamingErrorInfoCode["ERROR_NO_PERMISSION"] = "ERROR_NO_PERMISSION";
    /**
     * 状态异常，请检查房间状态
     */
    QNLiveStreamingErrorInfoCode["ERROR_INVALID_STATE"] = "ERROR_INVALID_STATE";
    /**
     * 参数错误，请检查参数是否合法
     */
    QNLiveStreamingErrorInfoCode["ERROR_INVALID_PARAMETER"] = "ERROR_INVALID_PARAMETER";
    /**
     * 操作超时，请重新尝试操作
     */
    QNLiveStreamingErrorInfoCode["ERROR_SIGNAL_TIMEOUT"] = "ERROR_SIGNAL_TIMEOUT";
    /**
     * 服务端错误，请重新尝试操作
     */
    QNLiveStreamingErrorInfoCode["SERVER_ERROR"] = "SERVER_ERROR";
})(QNLiveStreamingErrorInfoCode = exports.QNLiveStreamingErrorInfoCode || (exports.QNLiveStreamingErrorInfoCode = {}));
/**
 * 音频设备
 */
var QNAudioDevice;
(function (QNAudioDevice) {
    /**
     * 扬声器
     */
    QNAudioDevice["SPEAKER_PHONE"] = "SPEAKER_PHONE";
    /**
     * 听筒
     */
    QNAudioDevice["EARPIECE"] = "EARPIECE";
    /**
     * 有线耳机
     */
    QNAudioDevice["WIRED_HEADSET"] = "WIRED_HEADSET";
    /**
     * 蓝牙设备
     */
    QNAudioDevice["BLUETOOTH"] = "BLUETOOTH";
    /**
     * 无
     */
    QNAudioDevice["NONE"] = "NONE";
})(QNAudioDevice = exports.QNAudioDevice || (exports.QNAudioDevice = {}));
/**
 * 水印尺寸
 */
var QNVideoWaterMarkSize;
(function (QNVideoWaterMarkSize) {
    /**
     * 水印尺寸大
     */
    QNVideoWaterMarkSize["LARGE"] = "LARGE";
    /**
     * 正常水印尺寸
     */
    QNVideoWaterMarkSize["MEDIUM"] = "MEDIUM";
    /**
     * 水印尺寸小
     */
    QNVideoWaterMarkSize["SMALL"] = "SMALL";
})(QNVideoWaterMarkSize = exports.QNVideoWaterMarkSize || (exports.QNVideoWaterMarkSize = {}));
/**
 * 视频方向
 */
var QNAVCaptureVideoOrientation;
(function (QNAVCaptureVideoOrientation) {
    /**
     * 视频垂直定向，顶部位于手机顶部
     */
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationPortrait"] = "AVCaptureVideoOrientationPortrait";
    /**
     * 视频水平定向，顶部位于手机右部
     */
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationLandscapeRight"] = "AVCaptureVideoOrientationLandscapeRight";
    /**
     * 视频水平定向，顶部位于手机左部
     */
    QNAVCaptureVideoOrientation["AVCaptureVideoOrientationLandscapeLeft"] = "AVCaptureVideoOrientationLandscapeLeft";
})(QNAVCaptureVideoOrientation = exports.QNAVCaptureVideoOrientation || (exports.QNAVCaptureVideoOrientation = {}));
/**
 * 填充模式
 */
var QNVideoFillModeType;
(function (QNVideoFillModeType) {
    /**
     * 默认填充，QNVideoFillModePreserveAspectRatioAndFill
     */
    QNVideoFillModeType["QNVideoFillModeNone"] = "QNVideoFillModeNone";
    /**
     * 不保持长宽比，图片在容器内完整显示出来，可能会变形
     */
    QNVideoFillModeType["QNVideoFillModeStretch"] = "QNVideoFillModeStretch";
    /**
     * 在保持长宽比的前提下，缩放图片，使得图片在容器内完整显示出来
     */
    QNVideoFillModeType["QNVideoFillModePreserveAspectRatio"] = "QNVideoFillModePreserveAspectRatio";
    /**
     * 在保持长宽比的前提下，缩放图片，使图片充满容器
     */
    QNVideoFillModeType["QNVideoFillModePreserveAspectRatioAndFill"] = "QNVideoFillModePreserveAspectRatioAndFill";
})(QNVideoFillModeType = exports.QNVideoFillModeType || (exports.QNVideoFillModeType = {}));
/**
 * 采集分辨率
 */
var QNSessionPresetType;
(function (QNSessionPresetType) {
    /**
     * 采集分辨率 352x288
     */
    QNSessionPresetType["AVCaptureSessionPreset352x288"] = "AVCaptureSessionPreset352x288";
    /**
     * 采集分辨率 640x480
     */
    QNSessionPresetType["AVCaptureSessionPreset640x480"] = "AVCaptureSessionPreset640x480";
    /**
     * 采集分辨率 1280x720
     */
    QNSessionPresetType["AVCaptureSessionPreset1280x720"] = "AVCaptureSessionPreset1280x720";
    /**
     * 采集分辨率 1920x1080
     */
    QNSessionPresetType["AVCaptureSessionPreset1920x1080"] = "AVCaptureSessionPreset1920x1080";
    /**
     * 采集分辨率 3840x2160
     */
    QNSessionPresetType["AVCaptureSessionPreset3840x2160"] = "AVCaptureSessionPreset3840x2160";
    /**
     * 采集分辨率 960x540
     */
    QNSessionPresetType["AVCaptureSessionPresetiFrame960x540"] = "AVCaptureSessionPresetiFrame960x540";
    /**
     * 采集分辨率 1280x720
     */
    QNSessionPresetType["AVCaptureSessionPresetiFrame1280x720"] = "AVCaptureSessionPresetiFrame1280x720";
})(QNSessionPresetType = exports.QNSessionPresetType || (exports.QNSessionPresetType = {}));
/**
 * 混音状态
 */
var QNAudioMixerState;
(function (QNAudioMixerState) {
    /**
     * 混音操作进行中的状态
     */
    QNAudioMixerState["MIXING"] = "MIXING";
    /**
     * 混音操作暂停时的状态
     */
    QNAudioMixerState["PAUSED"] = "PAUSED";
    /**
     * 混音操作停止时的状态
     */
    QNAudioMixerState["STOPPED"] = "STOPPED";
    /**
     * 混音操作完成时的状态
     */
    QNAudioMixerState["COMPLETED"] = "COMPLETED";
})(QNAudioMixerState = exports.QNAudioMixerState || (exports.QNAudioMixerState = {}));
/**
 * 数据模式
 * @internal 数据帧暂时使用不到
 */
var QNVideoFrameType;
(function (QNVideoFrameType) {
    /**
     *  NV21 数据类型
     */
    QNVideoFrameType["YUV_NV21"] = "YUV_NV21";
    /**
     * TEXTURE 2D RGB 数据类型
     */
    QNVideoFrameType["TEXTURE_RGB"] = "TEXTURE_RGB";
    /**
     * TEXTURE OES RGB 数据类型量
     */
    QNVideoFrameType["TEXTURE_OES"] = "TEXTURE_OES";
})(QNVideoFrameType = exports.QNVideoFrameType || (exports.QNVideoFrameType = {}));
