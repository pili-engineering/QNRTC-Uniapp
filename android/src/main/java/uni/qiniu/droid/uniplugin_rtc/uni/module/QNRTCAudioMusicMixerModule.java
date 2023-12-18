package uni.qiniu.droid.uniplugin_rtc.uni.module;

import android.util.Log;

import com.qiniu.droid.rtc.QNAudioMusicMixer;

import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;

public class QNRTCAudioMusicMixerModule extends UniModule implements QNRTCGlobalListener {

    public QNRTCManager getManager() {
        return QNRTCModule.sRTCManager;
    }

    @UniJSMethod(uiThread = false)
    public void initDelegate() {
        getManager().setAudioMusicMixerListener(this);
    }

    @UniJSMethod(uiThread = false)
    public void setPublishEnabled(boolean enabled) {
        getManager().getAudioMusicMixer().setPublishEnabled(enabled);
    }

    @UniJSMethod(uiThread = false)
    public boolean isPublishEnabled() {
        return getManager().getAudioMusicMixer().isPublishEnabled();
    }

    @UniJSMethod(uiThread = false)
    public long getDuration(String filePath) {
        return QNAudioMusicMixer.getDuration(filePath);
    }

    @UniJSMethod(uiThread = false)
    public void start(int loopCount) {
        getManager().getAudioMusicMixer().start(loopCount);
    }

    @UniJSMethod(uiThread = false)
    public void stop(String identifyID) {
        getManager().getAudioMusicMixer().stop();
    }

    @UniJSMethod(uiThread = false)
    public void resume() {
        getManager().getAudioMusicMixer().resume();
    }

    @UniJSMethod(uiThread = false)
    public void pause() {
        getManager().getAudioMusicMixer().pause();
    }

    @UniJSMethod(uiThread = false)
    public long getCurrentPosition() {
        return getManager().getAudioMusicMixer().getCurrentPosition();
    }

    @UniJSMethod(uiThread = false)
    public void seekTo(long position) {
        getManager().getAudioMusicMixer().seekTo(position);
    }

    @UniJSMethod(uiThread = false)
    public void setMusicVolume(float musicVolume) {
        getManager().getAudioMusicMixer().setMusicVolume(musicVolume);
    }

    @UniJSMethod(uiThread = false)
    public float getMusicVolume() {
        return getManager().getAudioMusicMixer().getMusicVolume();
    }

    @UniJSMethod(uiThread = false)
    public void setStartPosition(long position) {
        getManager().getAudioMusicMixer().setStartPosition(position);
    }

    @UniJSMethod(uiThread = false)
    public long getStartPosition() {
        return getManager().getAudioMusicMixer().getStartPosition();
    }

    @Override
    public void onEvent(String method, Map<String, Object> params) {
        mUniSDKInstance.fireGlobalEventCallback(method, params);
    }
}
