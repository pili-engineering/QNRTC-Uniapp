import QNLocalTrack from './RTCLocalTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack')
export default class QNLocalVideoTrack extends QNLocalTrack {
  /**
   * sendSEI
   * @description 发送 SEI
   * @param { string } message 消息内容
   * @param { number } repeatCount 重复次数，-1 为每一帧都发送
   * @param { string } uuid 唯一 ID
   * @returns { void }
   */
  sendSEI (message: string, repeatCount: number, uuid?: string): void {
    return QNRtcTrack.sendSEI(this.identifyID, message, repeatCount, uuid)
  }
}
