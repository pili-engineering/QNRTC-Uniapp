import { QNAVCaptureVideoOrientation, QNSessionPresetType } from '../enum/RTCEnum'
import { QNBeautySetting, QNImage, QNVideoWaterMark } from '../interface/RTCInterface'
import { QNLocalVideoTrack } from './RTCLocalVideoTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRTC-UniPlugin-QNRtcTrack')
export class QNCameraVideoTrack extends QNLocalVideoTrack {
  /**
   * 销毁本地创建的 track
   */
  destroy (): void {
    return QNRtcTrack.destroy(this.identifyID)
  }

  /**
   * 设置采集分辨率
   * @remarks 只支持ios
   * @param sessionPreset 分辨率
   */
  setSessionPreset (sessionPreset: QNSessionPresetType): void {
    return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset)
  }

  /**
   * 开启摄像头采集
   */
  startCapture (): void {
    return QNRtcTrack.startCapture(this.identifyID)
  }

  /**
   * 关闭摄像头采集
   */
  stopCapture (): void {
    return QNRtcTrack.stopCapture(this.identifyID)
  }

  /**
   * 切换相机前后置
   */
  switchCamera (): void {
    return QNRtcTrack.switchCamera(this.identifyID)
  }

  /**
   * 开启闪光灯
   */
  turnLightOn (): void {
    return QNRtcTrack.turnLightOn(this.identifyID)
  }

  /**
   * 关闭闪光灯
   */
  turnLightOff (): void {
    return QNRtcTrack.turnLightOff(this.identifyID)
  }

  /**
   * 手动聚焦
   * @remarks 对于前置摄像头，大部分机型并不支持手动对焦，因此，请勿调用该接口，否则会抛异常
   * @param x 焦点 x 轴绝对位置，范围 0 - 1
   * @param y 焦点 y 轴绝对位置，范围 0 - 1
   */
  manualFocus (x: number, y: number): void {
    return QNRtcTrack.manualFocus(this.identifyID, x, y)
  }

  /**
   * 设置曝光度
   * @remarks 只支持安卓
   * @param value 曝光度
   */
  setExposureCompensation (value: number): void {
    return QNRtcTrack.setExposureCompensation(this.identifyID, value)
  }

  /**
   * 获取最大曝光度
   * @description 只支持安卓
   * @returns 曝光度
   */
  getMaxExposureCompensation (): number {
    return QNRtcTrack.getMaxExposureCompensation(this.identifyID)
  }

  /**
   * 获取最小曝光度
   * @description 只支持安卓
   * @returns 曝光度
   */
  getMinExposureCompensation (): number {
    return QNRtcTrack.getMinExposureCompensation(this.identifyID)
  }

  /**
   *  设置 camera 时的采集摄像头的旋转方向
   * @remarks 只支持ios，默认 AVCaptureVideoOrientationPortrait
   * @param videoOrientation 旋转方向
   */
  setVideoOrientation (videoOrientation: QNAVCaptureVideoOrientation): void {
    return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation)
  }

  /**
   * 获取camera 时的采集摄像头的旋转方向
   * @remarks 只支持ios
   * @returns 旋转方向
   */
  getVideoOrientation (): QNAVCaptureVideoOrientation {
    return QNRtcTrack.getVideoOrientation(this.identifyID)
  }

  /**
   * 设置缩放大小
   * @param zoom 缩放大小
   */
  setZoom (zoom: number): void {
    return QNRtcTrack.setZoom(this.identifyID, zoom)
  }

  /**
   * 获取支持的缩放大小列表
   * @remarks 缩放大小范围为 0.0 - 1.0
   * @returns 缩放大小列表
   */
  getZooms (): number[] {
    return QNRtcTrack.getZooms(this.identifyID)
  }

  /**
   * 设置是否允许预览
   * @param isEnabled 是否允许预览
   */
  setPreviewEnabled (isEnabled: boolean): void {
    return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled)
  }

  /**
   * 设置是否启用美颜
   * @param  beautySetting 美颜配置
   */
  setBeauty (beautySetting: QNBeautySetting): void {
    return QNRtcTrack.setBeauty(this.identifyID, beautySetting)
  }

  /**
   * 前置摄像头预览是否开启镜像
   * @remarks 默认 YES
   * @param previewMirrorFrontFacing 是否开启镜像
   */
  previewMirrorFrontFacing (previewMirrorFrontFacing: boolean): void {
    return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing)
  }

  /**
   * 后置摄像头预览是否开启镜像
   * @remarks 默认 NO
   * @param previewMirrorRearFacing 是否开启镜像
   */
  previewMirrorRearFacing (previewMirrorRearFacing: boolean): void {
    return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing)
  }

  /**
   * 前置摄像头，编码以及预览是否开启镜像
   * @remarks 默认 NO
   * @param encodeMirrorFrontFacing 是否开启镜像
   */
  encodeMirrorFrontFacing (encodeMirrorFrontFacing: boolean): void {
    return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing)
  }

  /**
   * 后置摄像头，编码以及预览是否开启镜像
   * @remarks 默认 NO
   * @param encodeMirrorRearFacing 是否开启镜像
   */
  encodeMirrorRearFacing (encodeMirrorRearFacing: boolean): void {
    return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing)
  }

  /**
   * 使用图片替代相机画面
   * @remarks 如需取消图片替代相机 resourcePath 传空字符串即可
   * @param image 图片配置
   */
  pushImage (image: QNImage): void {
    return QNRtcTrack.pushImage(this.identifyID, image)
  }

  /**
   * 设置水印
   * @param waterMark 水印配置
   */
  setWaterMark (waterMark: QNVideoWaterMark): void {
    return QNRtcTrack.setWaterMark(this.identifyID, waterMark)
  }

  /**
   * 清空水印配置
   */
  clearWaterMark (): void {
    return QNRtcTrack.clearWaterMark(this.identifyID)
  }
}
