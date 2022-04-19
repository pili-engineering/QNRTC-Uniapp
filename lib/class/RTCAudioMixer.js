"use strict";
exports.__esModule = true;
exports.QNAudioMixer = void 0;
// @ts-ignore
// eslint-disable-next-line no-undef
var QNRtcAudioMixer = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcAudioMixer');
// @ts-ignore
// eslint-disable-next-line no-undef
var QNEvent = uni.requireNativePlugin('globalEvent');
var QNAudioMixer = /** @class */ (function () {
    function QNAudioMixer(identifyID, url) {
        /**
         * @internal
         */
        this.variationList = ["onStateChanged"];
        this.identifyID = identifyID;
        this.url = url;
    }
    /**
     * 函数变异
     * @internal
     * @remarks 劫持 variationList 中的函数 callback 并将其包装后返回新的函数
     * @param listener 包装前的 callback
     * @returns 包装后的 callback
     */
    QNAudioMixer.prototype.createAudioMixerCallback = function (name, listener) {
        if (name === "onStateChanged") {
            var variationCallback = function (params) {
                if (params.state) {
                    // @ts-ignore
                    listener(params);
                }
            };
            return variationCallback;
        }
    };
    /**
     * 监听对应的事件
     * @remarks 支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    QNAudioMixer.prototype.on = function (name, listener) {
        if (this.variationList.some(function (item) { return item === name; })) {
            var callback = this.createAudioMixerCallback(name, listener);
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
    QNAudioMixer.prototype.off = function (name, listener) {
        QNEvent.removeEventListener(name, listener);
    };
    /**
     * 开始混音
     * @remarks 开始指定次数的混音并播放
     * @param loopTimes 循环次数
     */
    QNAudioMixer.prototype.start = function (loopTimes) {
        QNRtcAudioMixer.start(this.identifyID, loopTimes);
    };
    /**
     * 停止混音操作
     */
    QNAudioMixer.prototype.stop = function () {
        QNRtcAudioMixer.stop(this.identifyID);
    };
    /**
     * 混音恢复操作
     */
    QNAudioMixer.prototype.resume = function () {
        QNRtcAudioMixer.resume(this.identifyID);
    };
    /**
     * 暂停混音操作
     */
    QNAudioMixer.prototype.pause = function () {
        QNRtcAudioMixer.pause(this.identifyID);
    };
    /**
     * 跳到指定位置混音
     * @param timeUs 指定位置的时间戳，单位: us
     */
    QNAudioMixer.prototype.seekTo = function (timeUs) {
        QNRtcAudioMixer.seekTo(this.identifyID, timeUs);
    };
    /**
     * 设置混音中麦克风和音乐的混音音量
     * @param microphoneVolume 麦克风混音音量 [0,1]
     * @param musicVolume 音乐混音音量 [0,1]
     */
    QNAudioMixer.prototype.setMixingVolume = function (microphoneVolume, musicVolume) {
        QNRtcAudioMixer.setMixingVolume(this.identifyID, microphoneVolume, musicVolume);
    };
    /**
     * 设置混音音乐本地播放的音量
     * @description 如果不希望本地播放混音的音乐，可以通过该方法将 volume 设置为 0
     * @param volume 混音音乐本地播放音量 [0,1]
     */
    QNAudioMixer.prototype.setPlayingVolume = function (volume) {
        QNRtcAudioMixer.setPlayingVolume(this.identifyID, volume);
    };
    /**
     * 获取音频文件的时长
     * @remarks 单位: us
     * @returns 播放时长
     */
    QNAudioMixer.prototype.getDuration = function () {
        return QNRtcAudioMixer.getDuration(this.identifyID);
    };
    /**
     * 获取当前音频混音的位置
     * @remarks 单位: us
     * @returns 当前播放位置
     */
    QNAudioMixer.prototype.getCurrentPosition = function () {
        return QNRtcAudioMixer.getCurrentPosition(this.identifyID);
    };
    /**
     * 设置是否开启返听
     * @remarks 只支持ios
     * @param playBack 是否开启耳返
     */
    QNAudioMixer.prototype.setPlayBack = function (playBack) {
        QNRtcAudioMixer.setPlayBack(this.identifyID, playBack);
    };
    return QNAudioMixer;
}());
exports.QNAudioMixer = QNAudioMixer;
