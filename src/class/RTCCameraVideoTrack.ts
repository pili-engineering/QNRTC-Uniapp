import { QNAVCaptureVideoOrientation, QNSessionPresetType } from '../enum/RTCEnum'
import { QNBeautySetting, QNImage, QNVideoWaterMark } from '../interface/RTCInterface'
import QNLocalVideoTrack from './RTCLocalVideoTrack'

// @ts-ignore
// eslint-disable-next-line no-undef
const QNRtcTrack = uni.requireNativePlugin('QNRtcUniPlugin-QNRtcTrack')
export default class QNCameraVideoTrack extends QNLocalVideoTrack {
  /**
   * destroy
   * @description 销毁本地创建的 track
   * @returns { void }
   */
  destroy (): void {
    return QNRtcTrack.destroy(this.identifyID)
  }

  /**
   * setSessionPreset
   * @description 设置采集分辨率，只支持ios
   * @param { QNSessionPresetType } sessionPreset 分辨率
   * @returns { void }
   */
  setSessionPreset (sessionPreset: QNSessionPresetType): void {
    return QNRtcTrack.setSessionPreset(this.identifyID, sessionPreset)
  }

  /**
   * startCapture
   * @description 开启摄像头采集
   * @returns { void }
   */
  startCapture (): void {
    return QNRtcTrack.startCapture(this.identifyID)
  }

  /**
   * stopCapture
   * @description 关闭摄像头采集
   * @returns { void }
   */
  stopCapture (): void {
    return QNRtcTrack.stopCapture(this.identifyID)
  }

  /**
   * switchCamera
   * @description 切换相机前后置
   * @returns { void }
   */
  switchCamera (): void {
    return QNRtcTrack.switchCamera(this.identifyID)
  }

  /**
   * turnLightOn
   * @description 开启闪光灯
   * @returns { void }
   */
  turnLightOn (): void {
    return QNRtcTrack.turnLightOn(this.identifyID)
  }

  /**
   * turnLightOff
   * @description 关闭闪光灯
   * @returns { void }
   */
  turnLightOff (): void {
    return QNRtcTrack.turnLightOff(this.identifyID)
  }

  /**
   * manualFocus
   * @description 手动聚焦，对于前置摄像头，大部分机型并不支持手动对焦，因此，请勿调用该接口，否则会抛异常
   * @param { number } x 焦点 x 轴绝对位置，范围 0 - 1
   * @param { number } y 焦点 y 轴绝对位置，范围 0 - 1
   * @returns { void }
   */
  manualFocus (x: number, y: number): void {
    return QNRtcTrack.manualFocus(this.identifyID, x, y)
  }

  /**
   * setExposureCompensation
   * @description 设置曝光度，只支持安卓
   * @param { number } value 曝光度
   * @returns { void }
   */
  setExposureCompensation (value: number): void {
    return QNRtcTrack.setExposureCompensation(this.identifyID, value)
  }

  /**
   * getMaxExposureCompensation
   * @description 获取最大曝光度，只支持安卓
   * @returns { number } 曝光度
   */
  getMaxExposureCompensation (): number {
    return QNRtcTrack.getMaxExposureCompensation(this.identifyID)
  }

  /**
   * getMinExposureCompensation
   * @description 获取最小曝光度，只支持安卓
   * @returns { number } 曝光度
   */
  getMinExposureCompensation (): number {
    return QNRtcTrack.getMinExposureCompensation(this.identifyID)
  }

  /**
   * setVideoOrientation
   * @description 设置 camera 时的采集摄像头的旋转方向，只支持 默认 AVCaptureVideoOrientationPortrait
   * @param { QNAVCaptureVideoOrientation } videoOrientation 旋转方向
   * @returns { void }
   */
  setVideoOrientation (videoOrientation: QNAVCaptureVideoOrientation): void {
    return QNRtcTrack.setVideoOrientation(this.identifyID, videoOrientation)
  }

  /**
   * getVideoOrientation
   * @description 获取camera 时的采集摄像头的旋转方向，只支持ios
   * @returns { QNAVCaptureVideoOrientation } 旋转方向
   */
  getVideoOrientation (): QNAVCaptureVideoOrientation {
    return QNRtcTrack.getVideoOrientation(this.identifyID)
  }

  /**
   * setZoom
   * @description 设置缩放大小
   * @param { number } zoom 缩放大小
   * @returns { void }
   */
  setZoom (zoom: number): void {
    return QNRtcTrack.setZoom(this.identifyID, zoom)
  }

  /**
   * getZooms
   * @description 获取支持的缩放大小列表
   * @returns { number[] } 缩放大小列表 [0.4,0.8]
   */
  getZooms (): number[] {
    return QNRtcTrack.getZooms(this.identifyID)
  }

  /**
   * setPreviewEnabled
   * @description 设置是否允许预览
   * @param { boolean } isEnabled 是否允许预览
   * @returns { void }
   */
  setPreviewEnabled (isEnabled: boolean): void {
    return QNRtcTrack.setPreviewEnabled(this.identifyID, isEnabled)
  }

  /**
   * setBeauty
   * @description 设置是否启用美颜
   * @param { QNBeautySetting } beautySetting 美颜配置
   * @returns { void }
   */
  setBeauty (beautySetting: QNBeautySetting): void {
    return QNRtcTrack.setBeauty(this.identifyID, beautySetting)
  }

  /**
   * previewMirrorFrontFacing
   * @description 前置摄像头预览是否开启镜像，默认 YES
   * @param { boolean } previewMirrorFrontFacing 是否开启镜像
   * @returns { void }
   */
  previewMirrorFrontFacing (previewMirrorFrontFacing: boolean): void {
    return QNRtcTrack.previewMirrorFrontFacing(this.identifyID, previewMirrorFrontFacing)
  }

  /**
   * previewMirrorRearFacing
   * @description 后置摄像头预览是否开启镜像，默认 NO
   * @param { boolean } previewMirrorRearFacing 是否开启镜像
   * @returns { void }
   */
  previewMirrorRearFacing (previewMirrorRearFacing: boolean): void {
    return QNRtcTrack.previewMirrorRearFacing(this.identifyID, previewMirrorRearFacing)
  }

  /**
   * encodeMirrorFrontFacing
   * @description 前置摄像头，编码以及预览是否开启镜像，默认 NO
   * @param { boolean } encodeMirrorFrontFacing 是否开启镜像
   * @returns { void }
   */
  encodeMirrorFrontFacing (encodeMirrorFrontFacing: boolean): void {
    return QNRtcTrack.encodeMirrorFrontFacing(this.identifyID, encodeMirrorFrontFacing)
  }

  /**
   * encodeMirrorRearFacing
   * @description 后置摄像头，编码以及预览是否开启镜像，默认 NO
   * @param { boolean } encodeMirrorRearFacing 是否开启镜像
   * @returns { void }
   */
  encodeMirrorRearFacing (encodeMirrorRearFacing: boolean): void {
    return QNRtcTrack.encodeMirrorRearFacing(this.identifyID, encodeMirrorRearFacing)
  }

  /**
   * pushImage
   * @description 使用图片替代相机画面，如需取消图片替代相机 resourcePath 传空字符串即可
   * @param { QNImage } image 图片配置
   * @returns { void }
   */
  pushImage (image: QNImage): void {
    return QNRtcTrack.pushImage(this.identifyID, image)
  }

  /**
   * setWaterMark
   * @description 设置水印
   * @param { QNVideoWaterMark } waterMark 水印配置
   * @returns { void }
   */
  setWaterMark (waterMark: QNVideoWaterMark): void {
    return QNRtcTrack.setWaterMark(this.identifyID, waterMark)
  }

  /**
   * clearWaterMark
   * @description 清空水印配置
   * @returns { void }
   */
  clearWaterMark (): void {
    return QNRtcTrack.clearWaterMark(this.identifyID)
  }
}
