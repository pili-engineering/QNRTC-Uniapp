package uni.qiniu.droid.uniplugin_rtc.uni;

import com.alibaba.fastjson.JSONObject;

import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCCallback;

public class UniCallback implements QNRTCCallback {
    private final UniJSCallback mJSCallback;

    public UniCallback(UniJSCallback callback) {
        mJSCallback = callback;
    }

    @Override
    public void onResponse(JSONObject response) {
        mJSCallback.invoke(response);
    }
}
