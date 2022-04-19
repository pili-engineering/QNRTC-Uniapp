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
exports.QNRTCClient = void 0;
var RTCEnum_1 = require("../enum/RTCEnum");
var RTCRemoteVideoTrack_1 = require("./RTCRemoteVideoTrack");
var RTCRemoteAudioTrack_1 = require("./RTCRemoteAudioTrack");
var RTCLocalTrack_1 = require("./RTCLocalTrack");
// @ts-ignore
// eslint-disable-next-line no-undef
var RTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNRTCClient = /** @class */ (function () {
    function QNRTCClient() {
        /**
         * @internal
         */
        this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];
    }
    /**
     * remote Track 类型转换
     * @internal
     * @remarks 将 QNUNIRemoteTrack JSON 对象包装成 QNRemoteTrack 类
     * @param trackList QNUNIRemoteTrack 对象数组
     * @returns QNRemoteTrack 类对象
     */
    QNRTCClient.prototype.transformRemoteRTCTrack = function (trackList) {
        var result = [];
        for (var _i = 0, trackList_1 = trackList; _i < trackList_1.length; _i++) {
            var i = trackList_1[_i];
            var config = __assign({ identifyID: i.trackID, raw: i }, i);
            if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {
                result.push(new RTCRemoteAudioTrack_1.QNRemoteAudioTrack(config));
            }
            else {
                result.push(new RTCRemoteVideoTrack_1.QNRemoteVideoTrack(config));
            }
        }
        return result;
    };
    /**
     * local Track 类型转换
     * @internal
     * @remarks 将 QNUNILocalTrack JSON 对象包装成 QNLocalTrack 类
     * @param trackList QNUNILocalTrack 对象数组
     * @returns QNLocalTrack 类对象
     */
    QNRTCClient.prototype.transformLocalRTCTrack = function (trackList) {
        var result = [];
        for (var _i = 0, trackList_2 = trackList; _i < trackList_2.length; _i++) {
            var i = trackList_2[_i];
            var config = __assign({ identifyID: i.trackID, userID: '', raw: i }, i);
            if (i.kind === RTCEnum_1.QNRTCTrackKind.audio) {
                result.push(new RTCLocalTrack_1.QNLocalTrack(config));
            }
            else {
                result.push(new RTCLocalTrack_1.QNLocalTrack(config));
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
    QNRTCClient.prototype.createRemoteTrackDataCallback = function (listener) {
        var _this = this;
        var variationCallback = function (params) {
            var result = _this.transformRemoteRTCTrack(params.trackList);
            var callbackData = {
                remoteUserID: params.remoteUserID,
                trackList: result
            };
            var callback = listener;
            // @ts-ignore
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
    QNRTCClient.prototype.on = function (name, listener) {
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
     * @remarks 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    QNRTCClient.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    /**
     * 加入房间
     * @param token 房间 Token
     * @param userData 用户信息
     */
    QNRTCClient.prototype.join = function (token, userData) {
        return RTCClient.join(token, userData);
    };
    /**
     * 离开房间
     */
    QNRTCClient.prototype.leave = function () {
        return RTCClient.leave();
    };
    /**
     * 发布本地 Track 列表
     * @param tracks 要发布的本地 Track 列表
     * @param callback 发布结果回调
     */
    QNRTCClient.prototype.publish = function (tracks, callback) {
        return RTCClient.publish(tracks, function (_a) {
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
            callback(onPublished, error);
        });
    };
    /**
     * 取消发布本地 Track
     * @param tracks 要取消的本地 Track 列表
     */
    QNRTCClient.prototype.unpublish = function (tracks) {
        return RTCClient.unpublish(tracks);
    };
    /**
     * 订阅远端 Track
     * @param tracks 要订阅的远端 Track
     */
    QNRTCClient.prototype.subscribe = function (tracks) {
        return RTCClient.subscribe(tracks);
    };
    /**
     * 取消订阅远端 Track
     * @param tracks 要取消订阅的远端 Track
     */
    QNRTCClient.prototype.unsubscribe = function (tracks) {
        return RTCClient.unsubscribe(tracks);
    };
    /**
     * 获取指定用户已被自己订阅的 Tracks
     * @param userID 用户 ID
     * @returns 订阅的 Track 列表
     */
    QNRTCClient.prototype.getSubscribedTracks = function (userID) {
        var remoteTrack = RTCClient.getSubscribedTracks(userID);
        return this.transformRemoteRTCTrack(remoteTrack);
    };
    /**
     * 获取已发布的近端音频轨道统计信息
     * @remarks 返回以 trackID 为 key，{{QNLocalAudioTrackStats}} 为 value 的对象
     * @returns 统计信息
     */
    QNRTCClient.prototype.getLocalAudioTrackStats = function () {
        return RTCClient.getLocalAudioTrackStats();
    };
    /**
     * 获取已发布的近端视频轨道统计信息
     * @remarks 返回以 trackID 为 {{QNLocalVideoTrackStats}}[] 为 value 的对象，数组表示包括各个大小流信息
     * @returns 统计信息
     */
    QNRTCClient.prototype.getLocalVideoTrackStats = function () {
        return RTCClient.getLocalVideoTrackStats();
    };
    /**
     * 获取已订阅的远端音频轨道统计信息
     * @remarks 返回以 trackID 为 key，{{QNLocalAudioTrackStats}} 为 value 的对象
     * @returns 统计信息
     */
    QNRTCClient.prototype.getRemoteAudioTrackStats = function () {
        return RTCClient.getRemoteAudioTrackStats();
    };
    /**
     * 获取已订阅的远端视频轨道统计信息
     * @remarks 返回以 trackID 为 {{QNRemoteVideoTrackStats}} 为 value 的对象
     * @returns 统计信息
     */
    QNRTCClient.prototype.getRemoteVideoTrackStats = function () {
        return RTCClient.getRemoteVideoTrackStats();
    };
    /**
     * getUserNetworkQuality
     * @remarks 获取当前订阅的远端用户网络质量
     * @param userID 用户 ID
     * @returns 质量列表
     */
    QNRTCClient.prototype.getUserNetworkQuality = function (userID) {
        return RTCClient.getUserNetworkQuality(userID);
    };
    /**
     * getRemoteUsers
     * @remarks 获取房间内所有的远端用户
     * @returns 远端用户列表
     */
    QNRTCClient.prototype.getRemoteUsers = function () {
        var remoteUser = RTCClient.getRemoteUsers();
        var result = [];
        for (var _i = 0, remoteUser_1 = remoteUser; _i < remoteUser_1.length; _i++) {
            var i = remoteUser_1[_i];
            var audioTracks = this.transformRemoteRTCTrack(i.audioTracks);
            var videoTracks = this.transformRemoteRTCTrack(i.videoTracks);
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
    QNRTCClient.prototype.getPublishedTracks = function () {
        var locakTrack = RTCClient.getPublishedTracks();
        return this.transformLocalRTCTrack(locakTrack);
    };
    /**
     * 发送自定义消息到指定用户群
     * @param message 自定义消息内容
     * @param  users 用户 ID 列表
     * @param messageId 自定义消息 ID
     */
    QNRTCClient.prototype.sendMessage = function (message, users, messageId) {
        return RTCClient.sendMessage(message, users, messageId);
    };
    /**
     * 获取 RTC client 的房间状态
     * @returns 房间状态
     */
    QNRTCClient.prototype.getConnectionState = function () {
        return RTCClient.getConnectionState();
    };
    /**
     * 设置是否自动订阅
     * @remarks 默认开启自动订阅
     * @param autoSubscribe 是否自动订阅
     */
    QNRTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {
        return RTCClient.setAutoSubscribe(autoSubscribe);
    };
    /**
     * 开始单路 CDN 转推
     * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
     * @param config 单路转推配置
     */
    QNRTCClient.prototype.startLiveStreamingWithDirect = function (config) {
        return RTCClient.startLiveStreamingWithDirect(config);
    };
    /**
     * 开始合流转码 CDN 转推
     * @remarks 转推成功会触发 RTCClinetEvent.onStartLiveStreaming 回调
     * @param config 合流转推配置
     */
    QNRTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {
        return RTCClient.startLiveStreamingWithTranscoding(config);
    };
    /**
     * 停止单路 CDN 转推
     * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
     * @param config 单路转推配置
     */
    QNRTCClient.prototype.stopLiveStreamingWithDirect = function (config) {
        return RTCClient.stopLiveStreamingWithDirect(config);
    };
    /**
     * 停止合流转码 CDN 转推
     * @remarks 停止成功会触发 RTCClinetEvent.onStoppedLiveStreaming 回调
     * @param config 合流转推配置
     */
    QNRTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {
        return RTCClient.stopLiveStreamingWithTranscoding(config);
    };
    /**
     * 新增、更新合流转推布局配置
     * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
     * 新增 Track 布局以及对已有的 Track 的合流布局进行更新均可通过该接口实现，只需修改 transcodingTracks 对应的 Track 内容即可
     * @param streamID 合流 ID
     * @param transcodingTracks 待新增、更新的合流转推布局配置
     */
    QNRTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    /**
     * 移除合流转推布局配置
     * @remarks 更新成功会触发 RTCClinetEvent.onUpdatedLiveStreaming 回调
     * @param streamID 合流 ID
     * @param transcodingTracks 待移除合流转推布局配置
     */
    QNRTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    return QNRTCClient;
}());
exports.QNRTCClient = QNRTCClient;
