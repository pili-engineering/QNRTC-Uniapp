package uni.qiniu.droid.uniplugin_rtc.uni.entity;

import com.alibaba.fastjson.JSONObject;

import uni.qiniu.droid.uniplugin_rtc.base.Constants;

public class UniLocalTrack {
    private final String identifyID;
    private final String trackID;
    private final String kind;
    private final String tag;

    public UniLocalTrack(String identifyID, String trackID, String kind, String tag) {
        this.identifyID = identifyID;
        this.trackID = trackID;
        this.kind = kind;
        this.tag = tag;
    }

    public String getIdentifyID() {
        return identifyID;
    }

    public String getTrackID() {
        return trackID;
    }

    public String getKind() {
        return kind;
    }

    public String getTag() {
        return tag;
    }

    @Override
    public String toString() {
        return "UniLocalTrack{" +
                "identifyID='" + identifyID + '\'' +
                ", trackID='" + trackID + '\'' +
                ", kind='" + kind + '\'' +
                ", tag='" + tag + '\'' +
                '}';
    }
}
