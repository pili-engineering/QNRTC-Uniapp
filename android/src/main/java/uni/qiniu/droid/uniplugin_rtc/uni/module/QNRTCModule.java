package uni.qiniu.droid.uniplugin_rtc.uni.module;

import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.qiniu.droid.rtc.QNAudioScene;
import com.qiniu.droid.rtc.QNCameraVideoTrack;
import com.qiniu.droid.rtc.QNCustomAudioTrack;
import com.qiniu.droid.rtc.QNCustomVideoTrack;
import com.qiniu.droid.rtc.QNMicrophoneAudioTrack;
import com.qiniu.droid.rtc.QNRTC;
import com.qiniu.droid.rtc.QNScreenVideoTrack;

import java.util.Map;
import java.util.logging.Logger;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.Constants;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;
import uni.qiniu.droid.uniplugin_rtc.base.Utils;

public class QNRTCModule extends UniModule implements QNRTCGlobalListener {
    public static QNRTCManager sRTCManager = new QNRTCManager();

    @UniJSMethod(uiThread = false)
    public void configRTC(JSONObject configuration) {
        sRTCManager.configRTC(mUniSDKInstance.getContext().getApplicationContext(), Utils.toRTCSetting(configuration), this);
    }

    @UniJSMethod(uiThread = false)
    public void deinit() {
        sRTCManager.deinit();
    }

    @UniJSMethod(uiThread = false)
    public void createClient(JSONObject clientConfig) {
        sRTCManager.createClient(Utils.toClientConfig(clientConfig));
    }

    @UniJSMethod(uiThread = false)
    public JSONObject createMicrophoneAudioTrack(JSONObject microphoneAudioTrackConfig) {
        QNMicrophoneAudioTrack microphoneAudioTrack = sRTCManager.createMicrophoneAudioTrack(Utils.toMicrophoneAudioTrackConfig(microphoneAudioTrackConfig));
        JSONObject data = new JSONObject();
        if (microphoneAudioTrack != null) {
            data.put(Constants.KEY_TRACK_IDENTIFY_ID, Constants.ID_MICROPHONE_AUDIO_TRACK);
            data.put(Constants.KEY_TRACK_KIND, Constants.TRACK_KIND_AUDIO);
            data.put(Constants.KEY_TRACK_TAG, microphoneAudioTrack.getTag());
        }
        return data;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject createCustomAudioTrack(JSONObject customAudioTrackConfig) {
        QNCustomAudioTrack customAudioTrack = sRTCManager.createCustomAudioTrack(Utils.toCustomAudioTrackConfig(customAudioTrackConfig));
        JSONObject data = new JSONObject();
        if (customAudioTrack != null) {
            data.put(Constants.KEY_TRACK_IDENTIFY_ID, Constants.ID_CUSTOM_AUDIO_TRACK);
            data.put(Constants.KEY_TRACK_KIND, Constants.TRACK_KIND_AUDIO);
            data.put(Constants.KEY_TRACK_TAG, customAudioTrack.getTag());
        }
        return data;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject createCameraVideoTrack(JSONObject cameraVideoTrackConfig) {
        QNCameraVideoTrack cameraVideoTrack = sRTCManager.createCameraVideoTrack(Utils.toCameraVideoTrackConfig(cameraVideoTrackConfig));
        JSONObject data = new JSONObject();
        if (cameraVideoTrack != null) {
            data.put(Constants.KEY_TRACK_IDENTIFY_ID, Constants.ID_CAMERA_VIDEO_TRACK);
            data.put(Constants.KEY_TRACK_KIND, Constants.TRACK_KIND_VIDEO);
            data.put(Constants.KEY_TRACK_TAG, cameraVideoTrack.getTag());
        }
        return data;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject createCustomVideoTrack(JSONObject customVideoTrackConfig) {
        QNCustomVideoTrack customVideoTrack = sRTCManager.createCustomVideoTrack(Utils.toCustomVideoTrackConfig(customVideoTrackConfig));
        JSONObject data = new JSONObject();
        if (customVideoTrack != null) {
            data.put(Constants.KEY_TRACK_IDENTIFY_ID, Constants.ID_CUSTOM_VIDEO_TRACK);
            data.put(Constants.KEY_TRACK_KIND, Constants.TRACK_KIND_VIDEO);
            data.put(Constants.KEY_TRACK_TAG, customVideoTrack.getTag());
        }
        return data;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject createScreenVideoTrack(JSONObject screenVideoTrackConfig) {
        QNScreenVideoTrack screenVideoTrack = sRTCManager.createScreenVideoTrack(Utils.toScreenVideoTrackConfig(screenVideoTrackConfig));
        JSONObject data = new JSONObject();
        if (screenVideoTrack != null) {
            data.put(Constants.KEY_TRACK_IDENTIFY_ID, Constants.ID_SCREEN_VIDEO_TRACK);
            data.put(Constants.KEY_TRACK_KIND, Constants.TRACK_KIND_VIDEO);
            data.put(Constants.KEY_TRACK_TAG, screenVideoTrack.getTag());
        }
        return data;
    }

    @UniJSMethod(uiThread = false)
    public void setAudioRouteToSpeakerphone(boolean audioRouteToSpeakerphone) {
        sRTCManager.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);
    }

    @UniJSMethod(uiThread = false)
    public void enableFileLogging() {
        sRTCManager.enableFileLogging();
    }

    @UniJSMethod(uiThread = false)
    public void setAudioScene(String audioScene) {
        sRTCManager.setAudioScene(Utils.toAudioScene(audioScene));
    }

    @UniJSMethod(uiThread = false)
    public void setSpeakerphoneMuted(boolean muted) {
        sRTCManager.setSpeakerphoneMuted(muted);
    }

    @UniJSMethod(uiThread = false)
    public void createAudioMusicMixer(String musicPath) { sRTCManager.createAudioMusicMixer(musicPath); }

    @UniJSMethod(uiThread = false)
    public void createAudioEffectMixer() { sRTCManager.createAudioEffectMixer(); }

    @Override
    public void onEvent(String method, Map<String, Object> params) {
        mUniSDKInstance.fireGlobalEventCallback(method, params);
    }

    @Override
    public void onActivityDestroy() {
        super.onActivityDestroy();
        sRTCManager.deinit();
    }
}
