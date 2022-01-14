import { QNRTCTrackKind } from '../enum/RTCEnum';
import { QNUNILocalTrack, QNUNIRemoteTrack } from '../interface/RTCInterface';
import { QNRTCTrackEvent } from '../RTCEvent';
interface QNTrackParams {
    identifyID: string;
    kind: QNRTCTrackKind;
    tag: string;
    trackID: string;
    userID: string;
    raw: QNUNILocalTrack | QNUNIRemoteTrack;
}
/**
 * 轨
 * @remarks 所有的轨继承此类
 */
export declare class QNTrack {
    /**
     * identifyID
     */
    identifyID: string;
    /**
     * 媒体类型
     */
    kind: QNRTCTrackKind;
    /**
     * 自定义 tag
     */
    tag: string;
    /**
     * trackID
     */
    trackID: string;
    /**
     * userID
     */
    userID: string;
    /**
     * @internal
     */
    raw: QNUNILocalTrack | QNUNIRemoteTrack;
    constructor({ identifyID, kind, tag, trackID, raw, userID }: QNTrackParams);
    /**
     * 监听对应的事件，支持多次调用同一事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    on<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void;
    /**
     * 取消监听对应的事件
     * @param name 事件名
     * @param listener 事件句柄
     */
    off<event extends keyof QNRTCTrackEvent>(name: event, listener: QNRTCTrackEvent[event]): void;
    /**
     * 标识 Track 是否为 mute 状态
     * @returns 是否被 mute
     */
    getMuted(): number;
}
export {};
