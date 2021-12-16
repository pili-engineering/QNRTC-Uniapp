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
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNEvent = uni.requireNativePlugin('globalEvent');
/**
 * 轨
 * @remarks 所有的轨继承此类
 */
var QNTrack = /** @class */ (function () {
    function QNTrack(_a) {
        var identifyID = _a.identifyID, kind = _a.kind, tag = _a.tag, trackID = _a.trackID, raw = _a.raw, userID = _a.userID;
        this.identifyID = identifyID;
        this.kind = kind;
        this.tag = tag;
        this.trackID = trackID;
        this.raw = raw;
        this.userID = userID;
    }
    /**
     * 监听对应的事件，支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
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
    /**
     * 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    QNTrack.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    /**
     * 标识 Track 是否为 mute 状态
     * @returns 是否被 mute
     */
    QNTrack.prototype.getMuted = function () {
        return QNRtcTrack.getMuted(this.identifyID);
    };
    return QNTrack;
}());
exports["default"] = QNTrack;
