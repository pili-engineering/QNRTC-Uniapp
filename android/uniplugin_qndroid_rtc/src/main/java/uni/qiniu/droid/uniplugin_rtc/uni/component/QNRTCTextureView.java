package uni.qiniu.droid.uniplugin_rtc.uni.component;

import android.content.Context;

import com.qiniu.droid.rtc.QNTextureView;

import androidx.annotation.NonNull;
import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.ui.action.AbsComponentData;
import io.dcloud.feature.uniapp.ui.component.AbsVContainer;
import io.dcloud.feature.uniapp.ui.component.UniComponent;
import io.dcloud.feature.uniapp.ui.component.UniComponentProp;
import uni.qiniu.droid.uniplugin_rtc.uni.module.QNRTCModule;

public class QNRTCTextureView extends UniComponent<QNTextureView> {

    public QNRTCTextureView(UniSDKInstance instance, AbsVContainer parent, int type, AbsComponentData componentData) {
        super(instance, parent, type, componentData);
    }

    public QNRTCTextureView(UniSDKInstance instance, AbsVContainer parent, AbsComponentData componentData) {
        super(instance, parent, componentData);
    }

    @Override
    protected QNTextureView initComponentHostView(@NonNull Context context) {
        return new QNTextureView(context);
    }

    @UniComponentProp(name = "identifyID")
    public void setTrackID(String trackID) {
        QNRTCModule.sRTCManager.play(trackID, getHostView());
    }
}
