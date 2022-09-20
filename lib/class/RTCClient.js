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
var RTCClient = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcClient');
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNRTCClient = (function () {
    function QNRTCClient() {
        this.variationList = ['onUserPublished', 'onUserUnpublished', 'onVideoSubscribed', 'onAudioSubscribed'];
    }
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
    QNRTCClient.prototype.createRemoteTrackDataCallback = function (listener) {
        var _this = this;
        var variationCallback = function (params) {
            var result = _this.transformRemoteRTCTrack(params.trackList);
            var callbackData = {
                remoteUserID: params.remoteUserID,
                trackList: result
            };
            var callback = listener;
            callback(callbackData);
        };
        return variationCallback;
    };
    QNRTCClient.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createRemoteTrackDataCallback(listener);
            QNEvent.addEventListener(name, callback);
        }
        else {
            QNEvent.addEventListener(name, listener);
        }
    };
    QNRTCClient.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    QNRTCClient.prototype.join = function (token, userData) {
        return RTCClient.join(token, userData);
    };
    QNRTCClient.prototype.leave = function () {
        return RTCClient.leave();
    };
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
    QNRTCClient.prototype.unpublish = function (tracks) {
        return RTCClient.unpublish(tracks);
    };
    QNRTCClient.prototype.subscribe = function (tracks) {
        return RTCClient.subscribe(tracks);
    };
    QNRTCClient.prototype.unsubscribe = function (tracks) {
        return RTCClient.unsubscribe(tracks);
    };
    QNRTCClient.prototype.getSubscribedTracks = function (userID) {
        var remoteTrack = RTCClient.getSubscribedTracks(userID);
        return this.transformRemoteRTCTrack(remoteTrack);
    };
    QNRTCClient.prototype.getLocalAudioTrackStats = function () {
        return RTCClient.getLocalAudioTrackStats();
    };
    QNRTCClient.prototype.getLocalVideoTrackStats = function () {
        return RTCClient.getLocalVideoTrackStats();
    };
    QNRTCClient.prototype.getRemoteAudioTrackStats = function () {
        return RTCClient.getRemoteAudioTrackStats();
    };
    QNRTCClient.prototype.getRemoteVideoTrackStats = function () {
        return RTCClient.getRemoteVideoTrackStats();
    };
    QNRTCClient.prototype.getUserNetworkQuality = function (userID) {
        return RTCClient.getUserNetworkQuality(userID);
    };
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
    QNRTCClient.prototype.getPublishedTracks = function () {
        var locakTrack = RTCClient.getPublishedTracks();
        return this.transformLocalRTCTrack(locakTrack);
    };
    QNRTCClient.prototype.sendMessage = function (message, users, messageId) {
        return RTCClient.sendMessage(message, users, messageId);
    };
    QNRTCClient.prototype.getConnectionState = function () {
        return RTCClient.getConnectionState();
    };
    QNRTCClient.prototype.setAutoSubscribe = function (autoSubscribe) {
        return RTCClient.setAutoSubscribe(autoSubscribe);
    };
    QNRTCClient.prototype.startLiveStreamingWithDirect = function (config) {
        return RTCClient.startLiveStreamingWithDirect(config);
    };
    QNRTCClient.prototype.startLiveStreamingWithTranscoding = function (config) {
        !config.watermarks && (config.watermarks = []);
        !config.background && (config.background = {});
        return RTCClient.startLiveStreamingWithTranscoding(config);
    };
    QNRTCClient.prototype.stopLiveStreamingWithDirect = function (config) {
        return RTCClient.stopLiveStreamingWithDirect(config);
    };
    QNRTCClient.prototype.stopLiveStreamingWithTranscoding = function (config) {
        return RTCClient.stopLiveStreamingWithTranscoding(config);
    };
    QNRTCClient.prototype.setTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return RTCClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    QNRTCClient.prototype.removeTranscodingLiveStreamingTracks = function (streamID, transcodingTracks) {
        return RTCClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    };
    return QNRTCClient;
}());
exports.QNRTCClient = QNRTCClient;
