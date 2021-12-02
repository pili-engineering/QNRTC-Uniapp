package uni.qiniu.droid.uniplugin_rtc.uni.module;

import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;

public class QNRTCAudioMixerModule extends UniModule implements QNRTCGlobalListener {

    public QNRTCManager getManager() {
        return QNRTCModule.sRTCManager;
    }

    @UniJSMethod(uiThread = false)
    public void initDelegate() {
        getManager().setAudioMixerListener(this);
    }

    @UniJSMethod(uiThread = false)
    public void start(String identifyID, int loopTimes) {
        getManager().getAudioMixer().start(loopTimes);
    }

    @UniJSMethod(uiThread = false)
    public void stop(String identifyID) {
        getManager().getAudioMixer().stop();
    }

    @UniJSMethod(uiThread = false)
    public void resume(String identifyID) {
        getManager().getAudioMixer().resume();
    }

    @UniJSMethod(uiThread = false)
    public void pause(String identifyID) {
        getManager().getAudioMixer().pause();
    }

    @UniJSMethod(uiThread = false)
    public void seekTo(String identifyID, long timeUs) {
        getManager().getAudioMixer().seekTo(timeUs);
    }

    @UniJSMethod(uiThread = false)
    public void setMixingVolume(String identifyID, float microphoneVolume, float musicVolume) {
        getManager().getAudioMixer().setMixingVolume(microphoneVolume, musicVolume);
    }

    @UniJSMethod(uiThread = false)
    public void setPlayingVolume(String identifyID, float volume) {
        getManager().getAudioMixer().setPlayingVolume(volume);
    }

    @UniJSMethod(uiThread = false)
    public long getDuration(String identifyID) {
        return getManager().getAudioMixer().getDuration();
    }

    @UniJSMethod(uiThread = false)
    public long getCurrentPosition(String identifyID) {
        return getManager().getAudioMixer().getCurrentPosition();
    }

    @Override
    public void onEvent(String method, Map<String, Object> params) {
        mUniSDKInstance.fireGlobalEventCallback(method, params);
    }
}
