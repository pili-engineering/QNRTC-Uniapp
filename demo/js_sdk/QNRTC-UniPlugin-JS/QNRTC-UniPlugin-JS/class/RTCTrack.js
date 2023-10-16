"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.QNTrack = void 0;
var RTCEnum_1 = require("../enum/RTCEnum");
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNTrack = (function () {
    function QNTrack(_a) {
        var identifyID = _a.identifyID, kind = _a.kind, tag = _a.tag, trackID = _a.trackID, raw = _a.raw, userID = _a.userID;
        this.getMuted = this.isMuted;
        this.identifyID = identifyID;
        this.kind = kind;
        this.tag = tag;
        this.trackID = trackID;
        this.raw = raw;
        this.userID = userID;
    }
    QNTrack.prototype.on = function (name, listener) {
        var _this = this;
        var _listener = function (params) {
            var trackID = params.trackID, arguv = __rest(params, ["trackID"]);
            if (trackID && trackID === _this.trackID) {
                listener(arguv);
            }
        };
        QNEvent.addEventListener(name, _listener);
    };
    QNTrack.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    QNTrack.prototype.getTrackID = function () {
        return this.trackID;
    };
    QNTrack.prototype.getUserID = function () {
        return this.userID;
    };
    QNTrack.prototype.getTag = function () {
        return this.tag;
    };
    QNTrack.prototype.isAudio = function () {
        return this.kind === RTCEnum_1.QNRTCTrackKind.audio;
    };
    QNTrack.prototype.isVideo = function () {
        return this.kind === RTCEnum_1.QNRTCTrackKind.video;
    };
    QNTrack.prototype.isMuted = function () {
        return QNRtcTrack.getMuted(this.identifyID);
    };
    return QNTrack;
}());
exports.QNTrack = QNTrack;
