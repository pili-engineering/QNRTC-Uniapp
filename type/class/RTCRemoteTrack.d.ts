import { QNTrack } from './RTCTrack';
/**
 * 远端轨
 */
export declare class QNRemoteTrack extends QNTrack {
    /**
     * 是否订阅
     * @returns 1 订阅 2 未订阅
     */
    isSubscribed(): number;
}
