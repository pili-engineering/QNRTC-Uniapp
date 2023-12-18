package uni.qiniu.droid.uniplugin_rtc.uni.module;

import android.util.Log;

import com.qiniu.droid.rtc.QNAudioMusicMixer;
import com.qiniu.droid.rtc.QNAudioEffect;

import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;

public class QNRTCAudioEffectMixerModule extends UniModule implements QNRTCGlobalListener {

    public QNRTCManager getManager() {
        return QNRTCModule.sRTCManager;
    }

    @UniJSMethod(uiThread = false)
    public void initDelegate() {
        getManager().setAudioEffectMixerListener(this);
    }

    @UniJSMethod(uiThread = false)
    public void createAudioEffect(int effectID, String filePath) {
        QNAudioEffect audioEffect =  getManager().getAudioEffectMixer().createAudioEffect(effectID, filePath);
        getManager().addAudioEffect(effectID, audioEffect);
    }

    @UniJSMethod(uiThread = false)
    public void start(int effectID) {
        getManager().getAudioEffectMixer().start(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void setPublishEnabled(int effectID, boolean enabled) {
        getManager().getAudioEffectMixer().setPublishEnabled(effectID, enabled);
    }

    @UniJSMethod(uiThread = false)
    public boolean isPublishEnabled(int effectID) {
        return getManager().getAudioEffectMixer().isPublishEnabled(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void stop(int effectID) {
        getManager().getAudioEffectMixer().stop(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void pause(int effectID) {
        getManager().getAudioEffectMixer().pause(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void resume(int effectID) {
        getManager().getAudioEffectMixer().resume(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void stopAll() {
        getManager().getAudioEffectMixer().stopAll();
    }

    @UniJSMethod(uiThread = false)
    public void pauseAll() {
        getManager().getAudioEffectMixer().pauseAll();
    }

    @UniJSMethod(uiThread = false)
    public void resumeAll() {
        getManager().getAudioEffectMixer().resumeAll();
    }

    @UniJSMethod(uiThread = false)
    public long getCurrentPosition(int effectID) {
        return getManager().getAudioEffectMixer().getCurrentPosition(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void setVolume(int effectID, float volume) {
        getManager().getAudioEffectMixer().setVolume(effectID, volume);
    }

    @UniJSMethod(uiThread = false)
    public float getVolume(int effectID) {
        return getManager().getAudioEffectMixer().getVolume(effectID);
    }

    @UniJSMethod(uiThread = false)
    public void setAllEffectsVolume(float volume) {
        getManager().getAudioEffectMixer().setAllEffectsVolume(volume);
    }

    @Override
    public void onEvent(String method, Map<String, Object> params) {
        mUniSDKInstance.fireGlobalEventCallback(method, params);
    }
}
