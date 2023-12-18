import { QNLocalVideoTrack } from './RTCLocalVideoTrack'
import { QNScreenPermissionResultCallback } from '../preset/RTCPreset'
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNScreenVideoTrack extends QNLocalVideoTrack {
  /**
   * 设置屏幕录制的帧率
   * @deprecated 该接口已弃用，请使用 {@link QNLocalVideoTrack.setVideoEncoderConfig} 动态调整帧率
   * @remarks 默认值 20
   * @param screenRecorderFrameRate 帧率
   */
  setScreenRecorderFrameRate(screenRecorderFrameRate: number): void {
    return QNRtcTrack.setScreenRecorderFrameRate(this.identifyID, screenRecorderFrameRate)
  }

  /**
   * 请求录屏权限
   * @since 5.2.5
   * @remarks 只支持安卓，创建 QNScreenVideoTrack 前安卓需要调用此接口获取对应权限
   * @param callback 请求录屏权限后回调
   */
  static requestPermission(callback: QNScreenPermissionResultCallback): void {
    return QNRtcTrack.requestPermission(callback)
  }

  /**
   * 判断屏幕录制功能是否可用
   * @since 5.2.5
   * @remarks 建议创建 QNScreenVideoTrack 前先调用次接口确认是否支持录屏
   * @returns 是否可用
   */
  static isScreenCaptureSupported(): boolean {
    return QNRtcTrack.isScreenCaptureSupported() === 1
  }
}
