import { QNLocalTrack } from './RTCLocalTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNLocalVideoTrack extends QNLocalTrack {
  /**
   * 发送 SEI
   * @param message 消息内容
   * @param repeatCount 重复次数，-1 为每一帧都发送
   * @param uuid 唯一 ID
   */
  sendSEI (message: string, repeatCount: number, uuid?: string): void {
    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid)
  }
}
