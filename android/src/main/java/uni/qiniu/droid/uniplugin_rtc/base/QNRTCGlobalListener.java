package uni.qiniu.droid.uniplugin_rtc.base;

import java.util.Map;

public interface QNRTCGlobalListener {
    void onEvent(String method, Map<String, Object> params);
}
