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
var QNRTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');
var QNEvent = uni.requireNativePlugin('globalEvent');
var RTCClient = (function () {
    function RTCClient() {
        this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];
    }
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
    RTCClient.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createRemoteTrackDataCallback(listener);
            QNEvent.addEventListener(name, callback);
        }
        else {
            QNEvent.addEventListener(name, listener);
        }
    };
    RTCClient.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    RTCClient.prototype.join = function (token, userData) {
        return QNRTCClient.join(token, userData);
    };
    RTCClient.prototype.leave = function () {
        return QNRTCClient.leave();
    };
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
    RTCClient.prototype.unpublish = function (tracks) {
        return QNRTCClient.unpublish(tracks);
    };
    RTCClient.prototype.subscribe = function (tracks) {
        return QNRTCClient.subscribe(tracks);
    };
    RTCClient.prototype.unsubscribe = function (tracks) {
        return QNRTCClient.unsubscribe(tracks);
    };
    RTCClient.prototype.getSubscribedTracks = function (userID) {
        var remoteTrack = QNRTCClient.getSubscribedTracks(userID);
        return this.transformRTCTrack(remoteTrack);
    };
    RTCClient.prototype.getLocalAudioTrackStats = function () {
        return QNRTCClient.getLocalAudioTrackStats();
    };
    RTCClient.prototype.getLocalVideoTrackStats = function () {
        return QNRTCClient.getLocalVideoTrackStats();
    };
    RTCClient.prototype.getRemoteAudioTrackStats = function () {
        return QNRTCClient.getRemoteAudioTrackStats();
    };
    RTCClient.prototype.getRemoteVideoTrackStats = function () {
        return QNRTCClient.getRemoteVideoTrackStats();
    };
    RTCClient.prototype.getUserNetworkQuality = function (userID) {
        return QNRTCClient.getUserNetworkQuality(userID);
    };
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
    RTCClient.prototype.getPublishedTracks = function () {
        var remoteTrack = QNRTCClient.getPublishedTracks();
        return this.transformRTCTrack(remoteTrack);
    };
    RTCClient.prototype.sendMessage = function (message, users, messageId) {
        return QNRTCClient.sendMessage(message, users, messageId);
    };
    RTCClient.prototype.getConnectionState = function () {
        return QNRTCClient.getConnectionState();
    };
    RTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {
        return QNRTCClient.setAutoSubscribe(autoSubscribe);
    };
    RTCClient.prototype.startLiveStreamingWithDirect = function (config) {
        return QNRTCClient.startLiveStreamingWithDirect(config);
    };
    RTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {
        return QNRTCClient.startLiveStreamingWithTranscoding(config);
    };
    RTCClient.prototype.stopLiveStreamingWithDirect = function (config) {
        return QNRTCClient.stopLiveStreamingWithDirect(config);
    };
    RTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {
        return QNRTCClient.stopLiveStreamingWithTranscoding(config);
    };
    RTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return QNRTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    RTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return QNRTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    return RTCClient;
}());
exports["default"] = RTCClient;
