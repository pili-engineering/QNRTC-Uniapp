import { QNTrack } from './RTCTrack'

const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNLocalTrack extends QNTrack {
  /**
   * 设置 mute
   * @remarks 更新当前 Track 的 mute 值
   * @param  muted 是否 mute
   */
  setMuted(muted: boolean) {
    QNRtcTrack.setMuted(this.identifyID, muted)
  }

  /**
   * 销毁本地创建的 Track
   * @since 5.2.5
   */
  destroy() {
    QNRtcTrack.destroy(this.identifyID)
  }
}
