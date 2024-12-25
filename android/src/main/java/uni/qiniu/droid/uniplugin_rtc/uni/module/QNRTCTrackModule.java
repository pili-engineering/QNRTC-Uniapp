package uni.qiniu.droid.uniplugin_rtc.uni.module;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.qiniu.droid.rtc.QNCameraFacing;
import com.qiniu.droid.rtc.QNCameraSwitchResultCallback;
import com.qiniu.droid.rtc.QNCameraVideoTrack;
import com.qiniu.droid.rtc.QNLocalAudioTrack;
import com.qiniu.droid.rtc.QNLocalTrack;
import com.qiniu.droid.rtc.QNLocalVideoTrack;
import com.qiniu.droid.rtc.QNRemoteAudioTrack;
import com.qiniu.droid.rtc.QNRemoteTrack;
import com.qiniu.droid.rtc.QNRemoteVideoTrack;
import com.qiniu.droid.rtc.QNScreenVideoTrack;
import com.qiniu.droid.rtc.QNTrackProfile;

import java.util.List;
import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.Constants;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;
import uni.qiniu.droid.uniplugin_rtc.base.Utils;

public class QNRTCTrackModule extends UniModule implements QNRTCGlobalListener {
    private static final String TAG = "QNRTCTrackModule";
    public UniJSCallback mScreenTrackCallback;

    public QNRTCManager getManager() {
        return QNRTCModule.sRTCManager;
    }

    @UniJSMethod
    public void initDelegate() {
        getManager().setRemoteTrackInfoListener(this);
    }

    @UniJSMethod
    public void destroy(String identifyID) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack != null) {
            localTrack.destroy();
        }
    }

    @UniJSMethod
    public void startCapture(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.startCapture();
        }
    }

    @UniJSMethod
    public void stopCapture(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.stopCapture();
        }
    }

    @UniJSMethod
    public void switchCamera(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.switchCamera(new QNCameraSwitchResultCallback() {
                @Override
                public void onSwitched(boolean isFrontCamera) {
                    getManager().setCameraFacing(isFrontCamera ? QNCameraFacing.FRONT : QNCameraFacing.BACK);
                }

                @Override
                public void onError(String errorMessage) {

                }
            });
        }
    }

    @UniJSMethod
    public void turnLightOn(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.turnLightOn();
        }
    }

    @UniJSMethod
    public void turnLightOff(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.turnLightOff();
        }
    }

    @UniJSMethod
    public void manualFocus(String identifyID, float x, float y) {
        if (getManager().isFrontCamera()) {
            Log.w(TAG, "Front camera can not manual focus!");
            return;
        }
        int viewWidth = 0;
        int viewHeight = 0;
        if (mUniSDKInstance.getContext() instanceof Activity) {
            viewWidth = ((Activity) mUniSDKInstance.getContext()).getWindow().getDecorView().getWidth();
            viewHeight = ((Activity) mUniSDKInstance.getContext()).getWindow().getDecorView().getHeight();
        }
        if (viewWidth > 0 && viewHeight > 0) {
            QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
            if (cameraVideoTrack != null) {
                cameraVideoTrack.manualFocus(x * viewWidth, y * viewHeight, viewWidth, viewHeight);
            }
        }
    }

    @UniJSMethod
    public void setExposureCompensation(String identifyID, int exposureCompensation) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setExposureCompensation(exposureCompensation);
        }
    }

    @UniJSMethod(uiThread = false)
    public int getMaxExposureCompensation(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            return cameraVideoTrack.getMaxExposureCompensation();
        }
        return 0;
    }

    @UniJSMethod(uiThread = false)
    public int getMinExposureCompensation(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            return cameraVideoTrack.getMinExposureCompensation();
        }
        return 0;
    }

    @UniJSMethod
    public void setZoom(String identifyID, float zoom) {
        float targetZoom = 1;
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            for (float supportedZoom : cameraVideoTrack.getZooms()) {
                if (supportedZoom >= zoom) {
                    targetZoom = supportedZoom;
                    break;
                }
            }
            cameraVideoTrack.setZoom(targetZoom);
        }
    }

    @UniJSMethod(uiThread = false)
    public JSONArray getZooms(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        JSONArray result = new JSONArray();
        if (cameraVideoTrack != null) {
            List<Float> zooms = cameraVideoTrack.getZooms();
            result.add(zooms.get(0));
            result.add(zooms.get(zooms.size() - 1));
        }
        return result;
    }

    @UniJSMethod
    public void setPreviewEnabled(String identifyID, boolean isEnabled) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setPreviewEnabled(isEnabled);
        }
    }

    @UniJSMethod
    public void setBeauty(String identifyID, JSONObject beautySetting) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setBeauty(Utils.toBeautySetting(beautySetting));
        }
    }

    @UniJSMethod
    public void previewMirrorFrontFacing(String identifyID, boolean isMirror) {
        getManager().getRenderView(identifyID).setMirror(isMirror);
    }

    @UniJSMethod
    public void previewMirrorRearFacing(String identifyID, boolean isMirror) {
        getManager().getRenderView(identifyID).setMirror(isMirror);
    }

    @UniJSMethod
    public void encodeMirrorFrontFacing(String identifyID, boolean isMirror) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setMirror(isMirror);
        }
    }

    @UniJSMethod
    public void encodeMirrorRearFacing(String identifyID, boolean isMirror) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setMirror(isMirror);
        }
    }

    @UniJSMethod
    public void pushImage(String identifyID, JSONObject image) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.pushImage(Utils.toQNImage(mUniSDKInstance.getContext().getApplicationContext(), image));
        }
    }

    @UniJSMethod
    public void setWaterMark(String identifyID, JSONObject watermark) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setWaterMark(Utils.toVideoWatermark(mUniSDKInstance.getContext().getApplicationContext(), watermark));
        }
    }

    @UniJSMethod
    public void clearWaterMark(String identifyID) {
        QNCameraVideoTrack cameraVideoTrack = (QNCameraVideoTrack) getManager().getLocalTrack(identifyID);
        if (cameraVideoTrack != null) {
            cameraVideoTrack.setWaterMark(null);
        }
    }

    @UniJSMethod
    public void setMuted(String identifyID, boolean muted) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack != null) {
            localTrack.setMuted(muted);
        }
    }

    @UniJSMethod(uiThread = false)
    public int getMuted(String identifyID) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack != null) {
            return localTrack.isMuted() ? 1 : 0;
        }
        return 0;
    }

    @UniJSMethod
    public void sendSEI(String identifyID, String message, int repeatCount, String uuid) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack instanceof QNLocalVideoTrack) {
            ((QNLocalVideoTrack) localTrack).sendSEI(message, uuid.getBytes(), repeatCount);
        }
    }

    @UniJSMethod
    public void setVolume(String identifyID, double volume) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack instanceof QNLocalAudioTrack) {
            ((QNLocalAudioTrack) localTrack).setVolume(volume);
        }
    }

    @UniJSMethod
    public void setRemoteVolume(String trackID, double volume) {
        QNRemoteTrack remoteTrack = getManager().getRemoteTrack(trackID);
        if (remoteTrack instanceof QNRemoteAudioTrack) {
            ((QNRemoteAudioTrack) remoteTrack).setVolume(volume);
        }
    }

    @UniJSMethod(uiThread = false)
    public float getRemoteVolume(String trackID) {
        QNRemoteTrack remoteTrack = getManager().getRemoteTrack(trackID);
        if (remoteTrack instanceof QNRemoteAudioTrack) {
            return ((QNRemoteAudioTrack) remoteTrack).getVolumeLevel();
        }
        return 0;
    }

    @UniJSMethod(uiThread = false)
    public float getVolumeLevel(String trackID) {
        QNLocalTrack localTrack = getManager().getLocalTrack(trackID);
        if (localTrack instanceof QNLocalAudioTrack) {
            return ((QNLocalAudioTrack) localTrack).getVolumeLevel();
        }
        return 0;
    }

    @UniJSMethod(uiThread = false)
    public int isSubscribed(String trackID) {
        QNRemoteTrack remoteTrack = getManager().getRemoteTrack(trackID);
        if (remoteTrack != null) {
            return remoteTrack.isSubscribed() ? 1 : 0;
        }
        return 0;
    }

    @UniJSMethod
    public void setProfile(String trackID, String profile) {
        QNRemoteTrack remoteTrack = getManager().getRemoteTrack(trackID);
        if (remoteTrack instanceof QNRemoteVideoTrack) {
            if (QNTrackProfile.HIGH.name().equals(profile)) {
                ((QNRemoteVideoTrack) remoteTrack).setProfile(QNTrackProfile.HIGH);
            } else if (QNTrackProfile.MEDIUM.name().equals(profile)) {
                ((QNRemoteVideoTrack) remoteTrack).setProfile(QNTrackProfile.MEDIUM);
            } else if (QNTrackProfile.LOW.name().equals(profile)) {
                ((QNRemoteVideoTrack) remoteTrack).setProfile(QNTrackProfile.LOW);
            }
        }
    }

    @UniJSMethod(uiThread = false)
    public int isMultiProfileEnabled(String trackID) {
        QNRemoteTrack remoteTrack = getManager().getRemoteTrack(trackID);
        if (remoteTrack instanceof QNRemoteVideoTrack) {
            return ((QNRemoteVideoTrack) remoteTrack).isMultiProfileEnabled() ? 1 : 0;
        }
        return 0;
    }

    @UniJSMethod
    public void setScreenRecorderFrameRate(String identifyID, int screenRecorderFrameRate) {

    }

    @UniJSMethod(uiThread = false)
    public void requestPermission(UniJSCallback callback) {
        mScreenTrackCallback = callback;
        if (mUniSDKInstance.getContext() instanceof Activity) {
            QNScreenVideoTrack.requestPermission((Activity) mUniSDKInstance.getContext());
        }
    }

    @UniJSMethod(uiThread = false)
    public int isScreenCaptureSupported() {
        return QNScreenVideoTrack.isScreenCaptureSupported() ? 1 : 0;
    }

    @UniJSMethod(uiThread = false)
    public void addAudioFilter(String identifyID, String filterId) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack instanceof QNLocalAudioTrack) {
            QNLocalAudioTrack track = (QNLocalAudioTrack) localTrack;
            getManager().addAudioFilter(track , filterId);
        }
    }

    @UniJSMethod(uiThread = false)
    public void removeAudioFilter(String identifyID, String filterId) {
        QNLocalTrack localTrack = getManager().getLocalTrack(identifyID);
        if (localTrack instanceof QNLocalAudioTrack) {
            QNLocalAudioTrack track = (QNLocalAudioTrack) localTrack;
            getManager().removeAudioFilter(track, filterId);
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == QNScreenVideoTrack.SCREEN_CAPTURE_PERMISSION_REQUEST_CODE && mScreenTrackCallback != null) {
            JSONObject result = new JSONObject();
            result.put(Constants.KEY_RESULT, QNScreenVideoTrack.checkActivityResult(requestCode, resultCode, data));
            mScreenTrackCallback.invoke(result);
        }
    }

    @Override
    public void onEvent(String method, Map<String, Object> params) {
        mUniSDKInstance.fireGlobalEventCallback(method, params);
    }

    @UniJSMethod(uiThread = false)
    public void takeVideoSnapshot(String trackID,  UniJSCallback callback) {
        getManager().takeVideoSnapshot(trackID, callback);
    }
}
