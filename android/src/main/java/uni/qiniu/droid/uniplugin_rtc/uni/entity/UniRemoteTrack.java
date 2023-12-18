package uni.qiniu.droid.uniplugin_rtc.uni.entity;

import com.alibaba.fastjson.JSONObject;

import uni.qiniu.droid.uniplugin_rtc.base.Constants;

public class UniRemoteTrack {
    private final String userID;
    private final String trackID;
    private final String kind;
    private final String tag;

    public UniRemoteTrack(String userID, String trackID, String kind, String tag) {
        this.userID = userID;
        this.trackID = trackID;
        this.kind = kind;
        this.tag = tag;
    }

    public String getUserID() {
        return userID;
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
        return "UniRemoteTrack{" +
                "userID='" + userID + '\'' +
                ", trackID='" + trackID + '\'' +
                ", kind='" + kind + '\'' +
                ", tag='" + tag + '\'' +
                '}';
    }
}
