"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var RTCEnum_1 = require("../enum/RTCEnum");
var RTCRemoteVideoTrack_1 = require("./RTCRemoteVideoTrack");
var RTCRemoteAudioTrack_1 = require("./RTCRemoteAudioTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNEvent = uni.requireNativePlugin('globalEvent');
/**
 * RTCClient 核心类
 * @remarks 包含加入房间，离开房间，订阅、发布 Track，获取统计信息等功能
 */
var RTCClient = /** @class */ (function () {
    function RTCClient() {
        this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];
    }
    /**
     * Track 类型转换
     * @internal
     * @remarks 将 QNUNIRemoteTrack JSON 对象包装成 QNRemoteTrack 类
     * @param trackList QNUNIRemoteTrack 对象数组
     * @returns QNRemoteTrack 类对象
     */
    RTCClient.prototype.transformRTCTrack = function (trackList) {
        var result = [];
        for (var _i = 0, trackList_1 = trackList; _i < trackList_1.length; _i++) {
            var i = trackList_1[_i];
            var config = __assign({ identifyID: i.trackID, raw: i }, i);
            if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {
                result.push(new RTCRemoteAudioTrack_1["default"](config));
            }
            else {
                result.push(new RTCRemoteVideoTrack_1["default"](config));
            }
        }
        return result;
    };
    /**
     * 函数变异
     * @internal
     * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
     * @param listener 包装前的 callback
     * @returns 包装后的 callback
     */
    RTCClient.prototype.createRemoteTrackDataCallback = function (listener) {
        var _this = this;
        var variationCallback = function (params) {
            var result = _this.transformRTCTrack(params.trackList);
            var callbackData = {
                remoteUserID: params.remoteUserID,
                trackList: result
            };
            var callback = listener;
            callback(callbackData);
        };
        return variationCallback;
    };
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    RTCClient.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createRemoteTrackDataCallback(listener);
            QNEvent.addEventListener(name, callback);
        }
        else {
            QNEvent.addEventListener(name, listener);
        }
    };
    /**
     * 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    RTCClient.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    /**
     * 加入房间
     * @remarks 接口调用成功后，将会触发 onConnectionStateChanged 回调
     * @param token 房间 Token
     * @param userData 用户信息
     */
    RTCClient.prototype.join = function (token, userData) {
        return QNRTCClient.join(token, userData);
    };
    /**
     * 离开房间
     * @remarks 成功离开后，将会触发 onConnectionStateChanged 回调
     */
    RTCClient.prototype.leave = function () {
        return QNRTCClient.leave();
    };
    /**
     * 发布本地 Track 列表
     * @remarks 若想获取发布结果，可通过 QNPublishResultCallback 实现
     * @param tracks 要发布的本地 Track 列表
     * @param callback - 发布结果回调
     */
    RTCClient.prototype.publish = function (tracks, callback) {
        return QNRTCClient.publish(tracks, function (_a) {
            var onPublished = _a.onPublished, data = _a.data, error = _a.error;
            if (onPublished) {
                var _loop_1 = function (key) {
                    var index = tracks.findIndex(function (item) { return item.identifyID === key; });
                    if (index >= 0) {
                        tracks[index].trackID = data[key];
                    }
                };
                for (var key in data) {
                    _loop_1(key);
                }
            }
            callback({ onPublished: onPublished, data: data, error: error });
        });
    };
    /**
     * 取消发布本地 Track
     * @param tracks 要取消的本地 Track 列表
     */
    RTCClient.prototype.unpublish = function (tracks) {
        return QNRTCClient.unpublish(tracks);
    };
    /**
     * 订阅远端 Track
     * @remarks 订阅成功后，根据订阅类型会触发 RTCClinetEvent.onAudioSubscribed 或 RTCClinetEvent.onVideoSubscribed
     * @param tracks 要订阅的远端 Track
     */
    RTCClient.prototype.subscribe = function (tracks) {
        return QNRTCClient.subscribe(tracks);
    };
    /**
     * 取消订阅远端 Track
     * @param tracks 要取消订阅的远端 Track
     */
    RTCClient.prototype.unsubscribe = function (tracks) {
        return QNRTCClient.unsubscribe(tracks);
    };
    /**
     * 获取指定用户已被自己订阅的 Tracks
     * @param userID 用户 ID
     * @returns 订阅的 Track 列表
     */
    RTCClient.prototype.getSubscribedTracks = function (userID) {
        var remoteTrack = QNRTCClient.getSubscribedTracks(userID);
        return this.transformRTCTrack(remoteTrack);
    };
    /**
     * 获取已发布的近端音频轨道统计信息
     * @returns 统计信息
     */
    RTCClient.prototype.getLocalAudioTrackStats = function () {
        return QNRTCClient.getLocalAudioTrackStats();
    };
    /**
     * 获取已发布的近端视频轨道统计信息
     * @remarks 包括大小流数据信息
     * @returns 统计信息
     */
    RTCClient.prototype.getLocalVideoTrackStats = function () {
        return QNRTCClient.getLocalVideoTrackStats();
    };
    /**
     * 获取已订阅的远端音频轨道统计信息
     * @returns 统计信息
     */
    RTCClient.prototype.getRemoteAudioTrackStats = function () {
        return QNRTCClient.getRemoteAudioTrackStats();
    };
    /**
     * 获取已订阅的远端视频轨道统计信息
     * @returns 统计信息
     */
    RTCClient.prototype.getRemoteVideoTrackStats = function () {
        return QNRTCClient.getRemoteVideoTrackStats();
    };
    /**
     * 获取当前订阅的远端用户网络质量
     * @param userID 用户 ID
     * @returns 质量列表
     */
    RTCClient.prototype.getUserNetworkQuality = function (userID) {
        return QNRTCClient.getUserNetworkQuality(userID);
    };
    /**
     * 获取房间内所有的远端用户
     * @returns 远端用户列表
     */
    RTCClient.prototype.getRemoteUsers = function () {
        var remoteUser = QNRTCClient.getRemoteUsers();
        var result = [];
        for (var _i = 0, remoteUser_1 = remoteUser; _i < remoteUser_1.length; _i++) {
            var i = remoteUser_1[_i];
            var audioTracks = this.transformRTCTrack(i.audioTracks);
            var videoTracks = this.transformRTCTrack(i.videoTracks);
            result.push({
                userID: i.userID,
                videoTracks: videoTracks,
                audioTracks: audioTracks,
                userData: i.userData
            });
        }
        return result;
    };
    /**
     * 获取已发布 Track 列表
     * @returns Track 列表
     */
    RTCClient.prototype.getPublishedTracks = function () {
        var remoteTrack = QNRTCClient.getPublishedTracks();
        return this.transformRTCTrack(remoteTrack);
    };
    /**
     * 发送自定义消息到指定用户群
     * @remarks 发送成功后，会触发远端用户的 RTCClinetEvent.onMessageReceived 回调接口
     * @param message 自定义消息内容
     * @param users 用户 ID 列表
     * @param messageId 自定义消息 ID
     */
    RTCClient.prototype.sendMessage = function (message, users, messageId) {
        return QNRTCClient.sendMessage(message, users, messageId);
    };
    /**
     * RTC client 的房间状态
     * @returns 房间状态
     */
    RTCClient.prototype.getConnectionState = function () {
        return QNRTCClient.getConnectionState();
    };
    /**
     * 设置是否自动订阅
     * @remarks 默认开启自动订阅
     * @param autoSubscribe 是否自动订阅
     */
    RTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {
        return QNRTCClient.setAutoSubscribe(autoSubscribe);
    };
    /**
     * 开始单路 CDN 转推
     * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
     * @param config 单路转推配置
     */
    RTCClient.prototype.startLiveStreamingWithDirect = function (config) {
        return QNRTCClient.startLiveStreamingWithDirect(config);
    };
    /**
     * 开始合流转码 CDN 转推
     * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
     * @param config 合流转推配置
     */
    RTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {
        return QNRTCClient.startLiveStreamingWithTranscoding(config);
    };
    /**
     * 停止单路 CDN 转推
     * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
     * @param config 单路转推配置
     */
    RTCClient.prototype.stopLiveStreamingWithDirect = function (config) {
        return QNRTCClient.stopLiveStreamingWithDirect(config);
    };
    /**
     * 停止合流转码 CDN 转推
     * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
     * @param config 合流转推配置
     */
    RTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {
        return QNRTCClient.stopLiveStreamingWithTranscoding(config);
    };
    /**
     * 新增、更新合流转推布局配置
     * @remarks
     * 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调。
     * 新增 Track 布局以及对已有的 Track 的合流布局进行更新均可通过该接口实现，只需修改 transcodingTracks 对应的 Track 内容即可。
     * @param streamID 合流 ID
     * @param config 待新增、更新的合流转推布局配置
     */
    RTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return QNRTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    /**
     * 移除合流转推布局配置
     * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
     * @param streamID 合流 ID
     * @param config 待移除合流转推布局配置
     */
    RTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return QNRTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    return RTCClient;
}());
exports["default"] = RTCClient;
