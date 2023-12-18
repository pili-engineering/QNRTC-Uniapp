package uni.qiniu.droid.uniplugin_rtc.uni.module;

import com.qiniu.droid.rtc.QNAudioMusicMixer;
import com.qiniu.droid.rtc.QNAudioEffect;

import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;

public class QNRTCAudioEffectModule extends UniModule {

    public QNRTCManager getManager() {
        return QNRTCModule.sRTCManager;
    }

    @UniJSMethod(uiThread = false)
    public long getDuration(String filePath) {
        return QNAudioEffect.getDuration(filePath);
    }

    @UniJSMethod(uiThread = false)
    public int getID(int effectID) {
        return getManager().getAudioEffect(effectID).getID();
    }

    @UniJSMethod(uiThread = false)
    public String getFilePath(int effectID) {
        return getManager().getAudioEffect(effectID).getFilePath();
    }

    @UniJSMethod(uiThread = false)
    public void setStartPosition(int effectID, long position) {
        getManager().getAudioEffect(effectID).setStartPosition(position);
    }

    @UniJSMethod(uiThread = false)
    public long getStartPosition(int effectID) {
        return getManager().getAudioEffect(effectID).getStartPosition();
    }

    @UniJSMethod(uiThread = false)
    public void setLoopCount(int effectID, int loopCount) {
        getManager().getAudioEffect(effectID).setLoopCount(loopCount);
    }

    @UniJSMethod(uiThread = false)
    public int getLoopCount(int effectID) {
        return getManager().getAudioEffect(effectID).getLoopCount();
    }
}
