package uni.qiniu.droid.uniplugin_rtc.uni.module;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.qiniu.droid.rtc.QNCameraVideoTrack;
import com.qiniu.droid.rtc.QNCustomAudioTrack;
import com.qiniu.droid.rtc.QNCustomVideoTrack;
import com.qiniu.droid.rtc.QNLocalAudioTrackStats;
import com.qiniu.droid.rtc.QNLocalVideoTrackStats;
import com.qiniu.droid.rtc.QNMicrophoneAudioTrack;
import com.qiniu.droid.rtc.QNNetworkQuality;
import com.qiniu.droid.rtc.QNRemoteAudioTrackStats;
import com.qiniu.droid.rtc.QNRemoteTrack;
import com.qiniu.droid.rtc.QNRemoteUser;
import com.qiniu.droid.rtc.QNRemoteVideoTrackStats;
import com.qiniu.droid.rtc.QNScreenVideoTrack;
import com.qiniu.droid.rtc.QNTrack;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;
import uni.qiniu.droid.uniplugin_rtc.base.Constants;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCGlobalListener;
import uni.qiniu.droid.uniplugin_rtc.base.QNRTCManager;
import uni.qiniu.droid.uniplugin_rtc.base.Utils;
import uni.qiniu.droid.uniplugin_rtc.uni.UniCallback;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniLocalAudioTrackStats;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniLocalTrack;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniNetworkQuality;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniRemoteAudioTrackStats;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniRemoteUser;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniRemoteVideoTrackStats;

public class QNRTCClientModule extends UniModule implements QNRTCGlobalListener {

    public QNRTCManager getManager() {
        return QNRTCModule.sRTCManager;
    }

    @UniJSMethod(uiThread = false)
    public void initDelegate() {
        getManager().setClientEventListener(this);
        getManager().setLiveStreamingListener(this);
    }

    @UniJSMethod(uiThread = false)
    public void join(String token, String userData) {
        getManager().join(token, userData);
    }

    @UniJSMethod(uiThread = false)
    public void leave() {
        getManager().leave();
    }

    @UniJSMethod(uiThread = false)
    public void publish(JSONArray localTracks, UniJSCallback callback) {
        getManager().publish(Utils.toLocalTracks(localTracks), new UniCallback(callback));
    }

    @UniJSMethod(uiThread = false)
    public void unpublish(JSONArray localTracks) {
        getManager().unpublish(Utils.toLocalTracks(localTracks));
    }

    @UniJSMethod(uiThread = false)
    public void subscribe(JSONArray remoteTracks) {
        getManager().subscribe(Utils.toRemoteTracks(remoteTracks));
    }

    @UniJSMethod(uiThread = false)
    public void unsubscribe(JSONArray remoteTracks) {
        getManager().unsubscribe(Utils.toRemoteTracks(remoteTracks));
    }

    @UniJSMethod(uiThread = false)
    public String getConnectionState() {
        return getManager().getConnectionState().name();
    }

    @UniJSMethod(uiThread = false)
    public void setAutoSubscribe(boolean autoSubscribe) {
        getManager().setAutoSubscribe(autoSubscribe);
    }

    @UniJSMethod(uiThread = false)
    public JSONArray getSubscribedTracks(String userID) {
        List<QNRemoteTrack> subscribedTracks = getManager().getSubscribedTracks(userID);
        return JSONArray.parseArray(JSONObject.toJSONString(Utils.convertToUniRemoteTracks(subscribedTracks)));
    }

    @UniJSMethod(uiThread = false)
    public JSONArray getRemoteUsers() {
        List<QNRemoteUser> remoteUsers = getManager().getRemoteUsers();
        JSONArray users = new JSONArray();
        for (QNRemoteUser remoteUser : remoteUsers) {
            UniRemoteUser user = new UniRemoteUser(remoteUser.getUserID(), remoteUser.getUserData(),
                    Utils.convertToUniRemoteTracks(new ArrayList<>(remoteUser.getAudioTracks())),
                    Utils.convertToUniRemoteTracks(new ArrayList<>(remoteUser.getVideoTracks())));
            users.add(JSON.toJSON(user));
        }
        return users;
    }

    @UniJSMethod(uiThread = false)
    public JSONArray getPublishedTracks() {
        JSONArray result = new JSONArray();
        List<QNTrack> publishedTracks = getManager().getPublishedTracks();
        for (QNTrack localTrack : publishedTracks) {
            if (localTrack instanceof QNCameraVideoTrack) {
                UniLocalTrack uniLocalTrack = new UniLocalTrack(Constants.ID_CAMERA_VIDEO_TRACK,
                        localTrack.getTrackID(), Constants.TRACK_KIND_VIDEO, localTrack.getTag());
                result.add(JSON.toJSON(uniLocalTrack));
            } else if (localTrack instanceof QNScreenVideoTrack) {
                UniLocalTrack uniLocalTrack = new UniLocalTrack(Constants.ID_SCREEN_VIDEO_TRACK,
                        localTrack.getTrackID(), Constants.TRACK_KIND_VIDEO, localTrack.getTag());
                result.add(JSON.toJSON(uniLocalTrack));
            } else if (localTrack instanceof QNCustomVideoTrack) {
                UniLocalTrack uniLocalTrack = new UniLocalTrack(Constants.ID_CUSTOM_VIDEO_TRACK,
                        localTrack.getTrackID(), Constants.TRACK_KIND_VIDEO, localTrack.getTag());
                result.add(JSON.toJSON(uniLocalTrack));
            } else if (localTrack instanceof QNMicrophoneAudioTrack) {
                UniLocalTrack uniLocalTrack = new UniLocalTrack(Constants.ID_MICROPHONE_AUDIO_TRACK,
                        localTrack.getTrackID(), Constants.TRACK_KIND_AUDIO, localTrack.getTag());
                result.add(JSON.toJSON(uniLocalTrack));
            } else if (localTrack instanceof QNCustomAudioTrack) {
                UniLocalTrack uniLocalTrack = new UniLocalTrack(Constants.ID_CUSTOM_AUDIO_TRACK,
                        localTrack.getTrackID(), Constants.TRACK_KIND_AUDIO, localTrack.getTag());
                result.add(JSON.toJSON(uniLocalTrack));
            }
        }
        return result;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject getLocalAudioTrackStats() {
        Map<String, QNLocalAudioTrackStats> audioTrackStats = getManager().getLocalAudioTrackStats();
        JSONObject result = new JSONObject();
        for (Map.Entry<String, QNLocalAudioTrackStats> entry : audioTrackStats.entrySet()) {
            UniLocalAudioTrackStats localAudioTrackStats = new UniLocalAudioTrackStats(
                    entry.getValue().uplinkBitrate, entry.getValue().uplinkRTT, entry.getValue().uplinkLostRate);
            result.put(entry.getKey(), JSON.toJSON(localAudioTrackStats));
        }
        return result;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject getLocalVideoTrackStats() {
        Map<String, List<QNLocalVideoTrackStats>> videoTrackStats = getManager().getLocalVideoTrackStats();
        JSONObject result = new JSONObject();
        for (Map.Entry<String, List<QNLocalVideoTrackStats>> entry : videoTrackStats.entrySet()) {
            result.put(entry.getKey(), JSONArray.parseArray(JSONObject.toJSONString(Utils.convertToUniLocalVideoTrackStats(entry.getValue()))));
        }
        return result;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject getRemoteAudioTrackStats() {
        Map<String, QNRemoteAudioTrackStats> audioTrackStats = getManager().getRemoteAudioTrackStats();
        JSONObject result = new JSONObject();
        for (Map.Entry<String, QNRemoteAudioTrackStats> entry : audioTrackStats.entrySet()) {
            UniRemoteAudioTrackStats remoteAudioTrackStats = new UniRemoteAudioTrackStats(
                    entry.getValue().downlinkBitrate, entry.getValue().downlinkLostRate,
                    entry.getValue().uplinkRTT, entry.getValue().uplinkLostRate);
            result.put(entry.getKey(), JSON.toJSON(remoteAudioTrackStats));
        }
        return result;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject getRemoteVideoTrackStats() {
        Map<String, QNRemoteVideoTrackStats> videoTrackStats = getManager().getRemoteVideoTrackStats();
        JSONObject result = new JSONObject();
        for (Map.Entry<String, QNRemoteVideoTrackStats> entry : videoTrackStats.entrySet()) {
            UniRemoteVideoTrackStats remoteVideoTrackStats = new UniRemoteVideoTrackStats(
                    entry.getValue().profile == null ? "" : entry.getValue().profile.name(),
                    entry.getValue().downlinkFrameRate, entry.getValue().downlinkBitrate,
                    entry.getValue().downlinkLostRate, entry.getValue().uplinkRTT,
                    entry.getValue().uplinkLostRate);
            result.put(entry.getKey(), JSON.toJSON(remoteVideoTrackStats));
        }
        return result;
    }

    @UniJSMethod(uiThread = false)
    public JSONObject getUserNetworkQuality(String userID) {
        QNNetworkQuality networkQuality = getManager().getUserNetworkQuality(userID);
        UniNetworkQuality uniNetworkQuality = new UniNetworkQuality(
                networkQuality.uplinkNetworkGrade.name(), networkQuality.downlinkNetworkGrade.name());
        return JSONObject.parseObject(JSON.toJSONString(uniNetworkQuality));
    }

    @UniJSMethod(uiThread = false)
    public void sendMessage(String message, JSONArray users, String messageID) {
        List<String> userList =JSONObject.parseArray(users.toJSONString(), String.class);
        getManager().sendMessage(message, userList, messageID);
    }

    @UniJSMethod(uiThread = false)
    public void startLiveStreamingWithDirect(JSONObject config) {
        getManager().startLiveStreamingWithDirect(config.getString(Constants.KEY_STREAM_ID),
                config.getString(Constants.KEY_AUDIO_TRACKS), config.getString(Constants.KEY_VIDEO_TRACKS),
                config.getString(Constants.KEY_URL));
    }

    @UniJSMethod(uiThread = false)
    public void stopLiveStreamingWithDirect(JSONObject config) {
        getManager().stopLiveStreamingWithDirect(config.getString(Constants.KEY_STREAM_ID));
    }

    @UniJSMethod(uiThread = false)
    public void startLiveStreamingWithTranscoding(JSONObject config) {
        getManager().startLiveStreamingWithTranscoding(Utils.toTranscodingLiveStreamingConfig(config));
    }

    @UniJSMethod(uiThread = false)
    public void stopLiveStreamingWithTranscoding(JSONObject config) {
        getManager().stopLiveStreamingWithTranscoding(config.getString(Constants.KEY_STREAM_ID));
    }

    @UniJSMethod(uiThread = false)
    public void setTranscodingLiveStreamingTracks(String streamID, JSONArray transcodingTracks) {
        getManager().setTranscodingLiveStreamingTracks(streamID, Utils.toTranscodingTracks(transcodingTracks));
    }

    @UniJSMethod(uiThread = false)
    public void removeTranscodingLiveStreamingTracks(String streamID, JSONArray transcodingTracks) {
        getManager().removeTranscodingLiveStreamingTracks(streamID, Utils.toTranscodingTracks(transcodingTracks));
    }

    @Override
    public void onEvent(String method, Map<String, Object> params) {
        mUniSDKInstance.fireGlobalEventCallback(method, params);
    }
}
