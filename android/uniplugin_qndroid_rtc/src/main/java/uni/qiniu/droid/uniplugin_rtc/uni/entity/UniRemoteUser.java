package uni.qiniu.droid.uniplugin_rtc.uni.entity;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.List;

import uni.qiniu.droid.uniplugin_rtc.base.Constants;

public class UniRemoteUser {
    private final String userID;
    private final String userData;
    private final List<UniRemoteTrack> videoTracks;
    private final List<UniRemoteTrack> audioTracks;

    public UniRemoteUser(String userID, String userData, List<UniRemoteTrack> videoTracks, List<UniRemoteTrack> audioTracks) {
        this.userID = userID;
        this.userData = userData;
        this.videoTracks = videoTracks;
        this.audioTracks = audioTracks;
    }

    public String getUserID() {
        return userID;
    }

    public String getUserData() {
        return userData;
    }

    public List<UniRemoteTrack> getVideoTracks() {
        return videoTracks;
    }

    public List<UniRemoteTrack> getAudioTracks() {
        return audioTracks;
    }

    @Override
    public String toString() {
        return "UniRemoteUser{" +
                "userID='" + userID + '\'' +
                ", userData='" + userData + '\'' +
                ", videoTracks=" + videoTracks +
                ", audioTracks=" + audioTracks +
                '}';
    }
}
