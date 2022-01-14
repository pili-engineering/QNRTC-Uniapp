"use strict";
exports.__esModule = true;
var QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack');
var QNTrack = (function () {
    function QNTrack(_a) {
        var identifyID = _a.identifyID, kind = _a.kind, tag = _a.tag, trackID = _a.trackID, raw = _a.raw, userID = _a.userID;
        this.identifyID = identifyID;
        this.kind = kind;
        this.tag = tag;
        this.trackID = trackID;
        this.raw = raw;
        this.userID = userID;
    }
    QNTrack.prototype.getMuted = function () {
        return QNRtcTrack.getMuted(this.identifyID);
    };
    return QNTrack;
}());
exports["default"] = QNTrack;
