package uni.qiniu.droid.uniplugin_rtc.base;

import android.content.Context;
import android.graphics.Bitmap;
import android.util.Log;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.qiniu.droid.rtc.QNAudioMixer;
import com.qiniu.droid.rtc.QNAudioMixerListener;
import com.qiniu.droid.rtc.QNAudioMixerState;
import com.qiniu.droid.rtc.QNCameraFacing;
import com.qiniu.droid.rtc.QNCameraVideoTrack;
import com.qiniu.droid.rtc.QNCameraVideoTrackConfig;
import com.qiniu.droid.rtc.QNClientEventListener;
import com.qiniu.droid.rtc.QNClientRole;
import com.qiniu.droid.rtc.QNConnectionDisconnectedInfo;
import com.qiniu.droid.rtc.QNConnectionState;
import com.qiniu.droid.rtc.QNCustomAudioTrack;
import com.qiniu.droid.rtc.QNCustomAudioTrackConfig;
import com.qiniu.droid.rtc.QNCustomMessage;
import com.qiniu.droid.rtc.QNCustomVideoTrack;
import com.qiniu.droid.rtc.QNCustomVideoTrackConfig;
import com.qiniu.droid.rtc.QNDirectLiveStreamingConfig;
import com.qiniu.droid.rtc.QNLiveStreamingConfig;
import com.qiniu.droid.rtc.QNLiveStreamingErrorInfo;
import com.qiniu.droid.rtc.QNLiveStreamingListener;
import com.qiniu.droid.rtc.QNLocalAudioTrack;
import com.qiniu.droid.rtc.QNLocalAudioTrackStats;
import com.qiniu.droid.rtc.QNLocalTrack;
import com.qiniu.droid.rtc.QNLocalVideoTrack;
import com.qiniu.droid.rtc.QNLocalVideoTrackStats;
import com.qiniu.droid.rtc.QNMediaRelayState;
import com.qiniu.droid.rtc.QNMicrophoneAudioTrack;
import com.qiniu.droid.rtc.QNMicrophoneAudioTrackConfig;
import com.qiniu.droid.rtc.QNNetworkQuality;
import com.qiniu.droid.rtc.QNPublishResultCallback;
import com.qiniu.droid.rtc.QNRTC;
import com.qiniu.droid.rtc.QNRTCClient;
import com.qiniu.droid.rtc.QNRTCClientConfig;
import com.qiniu.droid.rtc.QNRTCEventListener;
import com.qiniu.droid.rtc.QNRTCSetting;
import com.qiniu.droid.rtc.QNRemoteAudioTrack;
import com.qiniu.droid.rtc.QNRemoteAudioTrackStats;
import com.qiniu.droid.rtc.QNRemoteTrack;
import com.qiniu.droid.rtc.QNRemoteUser;
import com.qiniu.droid.rtc.QNRemoteVideoTrack;
import com.qiniu.droid.rtc.QNRemoteVideoTrackStats;
import com.qiniu.droid.rtc.QNRenderView;
import com.qiniu.droid.rtc.QNScreenVideoTrack;
import com.qiniu.droid.rtc.QNScreenVideoTrackConfig;
import com.qiniu.droid.rtc.QNTrack;
import com.qiniu.droid.rtc.QNTrackInfoChangedListener;
import com.qiniu.droid.rtc.QNTrackProfile;
import com.qiniu.droid.rtc.QNTranscodingLiveStreamingConfig;
import com.qiniu.droid.rtc.QNTranscodingLiveStreamingTrack;
import com.qiniu.droid.rtc.QNVideoFrameListener;
import com.qiniu.droid.rtc.QNVideoFrameType;
import com.qiniu.droid.rtc.model.QNAudioDevice;
import com.qiniu.droid.rtc.QNAudioScene;
import com.qiniu.droid.rtc.QNClientRoleResultCallback;
import com.qiniu.droid.rtc.QNMediaRelayConfiguration;
import com.qiniu.droid.rtc.QNMediaRelayResultCallback;
import com.qiniu.droid.rtc.QNAudioMusicMixer;
import com.qiniu.droid.rtc.QNAudioMusicMixerListener;
import com.qiniu.droid.rtc.QNAudioMusicMixerState;
import com.qiniu.droid.rtc.QNAudioEffectMixerListener;
import com.qiniu.droid.rtc.QNAudioEffectMixer;
import com.qiniu.droid.rtc.QNAudioEffect;
import com.qiniu.droid.rtc.QNAudioVolumeInfo;
import com.taobao.weex.utils.tools.LogDetail;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import androidx.annotation.Nullable;

import org.qnwebrtc.Size;

import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import uni.qiniu.droid.uniplugin_rtc.uni.UniCallback;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniRemoteTrack;

public class QNRTCManager implements QNRTCEventListener, QNClientEventListener, QNLiveStreamingListener {
    private static final String TAG = "QNRTCManager";

    private QNRTCClient mClient;
    private QNMicrophoneAudioTrack mMicrophoneAudioTrack;
    private QNCustomAudioTrack mCustomAudioTrack;
    private QNCameraVideoTrack mCameraVideoTrack;
    private QNCustomVideoTrack mCustomVideoTrack;
    private QNScreenVideoTrack mScreenVideoTrack;
    private QNCameraFacing mCameraFacing;
    private final Map<String, QNLocalTrack> mLocalTracks = new HashMap<>();
    private final Map<Integer, QNAudioEffect> mAudioEffect = new HashMap<>();
    private final List<QNLocalVideoTrack> mLocalVideoTracks = new ArrayList<>();
    private final Map<String, QNRenderView> mRenderViews = new HashMap<>();
    private final Map<String, QNLiveStreamingConfig> mLiveStreamingConfigs = new HashMap<>();
    private QNAudioMixer mAudioMixer = null;
    private QNAudioMusicMixer mAudioMusicMixer = null;
    private QNAudioEffectMixer mAudioEffectMixer = null;
    private QNRTCGlobalListener mRTCEventListener;
    private QNRTCGlobalListener mClientEventListener;
    private QNRTCGlobalListener mLiveStreamingListener;
    private QNRTCGlobalListener mAudioMixerListener;
    private QNRTCGlobalListener mRemoteTrackInfoListener;
    private QNRTCGlobalListener mAudioMusicMixerListener;
    private QNRTCGlobalListener mAudioEffectMixerListener;
    private Context context;

    private Map<String, Boolean> frameAvailableMap = new HashMap<>();
    private Map<String, UniJSCallback> callbackMap = new HashMap<>();

    public void configRTC(Context context, QNRTCSetting setting, QNRTCGlobalListener listener) {
        mRTCEventListener = listener;
        QNRTC.init(context, setting, this);
        this.context = context;
    }

    public void deinit() {
        QNRTC.deinit();
        mLocalTracks.clear();
        mRenderViews.clear();
        mAudioEffect.clear();
        mLiveStreamingConfigs.clear();
    }

    public void createClient(QNRTCClientConfig config) {
        mClient = QNRTC.createClient(config,this);
        mClient.setLiveStreamingListener(this);
    }

    public void setClientEventListener(QNRTCGlobalListener listener) {
        mClientEventListener = listener;
    }

    public void setLiveStreamingListener(QNRTCGlobalListener listener) {
        mLiveStreamingListener = listener;
    }

    public void setAudioMixerListener(QNRTCGlobalListener listener) {
        mAudioMixerListener = listener;
    }

    public void setAudioMusicMixerListener(QNRTCGlobalListener listener) {
        mAudioMusicMixerListener = listener;
    }

    public void setAudioEffectMixerListener(QNRTCGlobalListener listener) {
        mAudioEffectMixerListener = listener;
    }

    public void setRemoteTrackInfoListener(QNRTCGlobalListener listener) {
        mRemoteTrackInfoListener = listener;
    }

    public void setCameraFacing(QNCameraFacing cameraFacing) {
        mCameraFacing = cameraFacing;
    }

    public boolean isFrontCamera() {
        return mCameraFacing == QNCameraFacing.FRONT;
    }

    public QNMicrophoneAudioTrack createMicrophoneAudioTrack(QNMicrophoneAudioTrackConfig microphoneAudioTrackConfig) {
        mMicrophoneAudioTrack = QNRTC.createMicrophoneAudioTrack(microphoneAudioTrackConfig);
        if (mMicrophoneAudioTrack != null) {
            mLocalTracks.put(Constants.ID_MICROPHONE_AUDIO_TRACK, mMicrophoneAudioTrack);
        }
        return mMicrophoneAudioTrack;
    }

    public QNCustomAudioTrack createCustomAudioTrack(QNCustomAudioTrackConfig customAudioTrackConfig) {
        mCustomAudioTrack = QNRTC.createCustomAudioTrack(customAudioTrackConfig);
        if (mCustomAudioTrack != null) {
            mLocalTracks.put(Constants.ID_CUSTOM_AUDIO_TRACK, mCustomAudioTrack);
        }
        return mCustomAudioTrack;
    }

    public QNCameraVideoTrack createCameraVideoTrack(QNCameraVideoTrackConfig cameraVideoTrackConfig) {
        mCameraFacing = cameraVideoTrackConfig.getCameraFacing();
        mCameraVideoTrack = QNRTC.createCameraVideoTrack(cameraVideoTrackConfig);
        if (mCameraVideoTrack != null) {
            mLocalTracks.put(Constants.ID_CAMERA_VIDEO_TRACK, mCameraVideoTrack);
            mLocalVideoTracks.add(mCameraVideoTrack);
        }
        return mCameraVideoTrack;
    }

    public QNCustomVideoTrack createCustomVideoTrack(QNCustomVideoTrackConfig customVideoTrackConfig) {
        mCustomVideoTrack = QNRTC.createCustomVideoTrack(customVideoTrackConfig);
        if (mCustomVideoTrack != null) {
            mLocalTracks.put(Constants.ID_CUSTOM_VIDEO_TRACK, mCustomVideoTrack);
            mLocalVideoTracks.add(mCustomVideoTrack);
        }
        return mCustomVideoTrack;
    }

    public QNScreenVideoTrack createScreenVideoTrack(QNScreenVideoTrackConfig screenVideoTrackConfig) {
        mScreenVideoTrack = QNRTC.createScreenVideoTrack(screenVideoTrackConfig);
        if (mScreenVideoTrack != null) {
            mLocalTracks.put(Constants.ID_SCREEN_VIDEO_TRACK, mScreenVideoTrack);
            mLocalVideoTracks.add(mScreenVideoTrack);
        }
        return mScreenVideoTrack;
    }

    public void setAudioRouteToSpeakerphone(boolean audioRouteToSpeakerphone) {
        QNRTC.setAudioRouteToSpeakerphone(audioRouteToSpeakerphone);
    }

    public void setAudioScene(QNAudioScene audioScene) {
        QNRTC.setAudioScene(audioScene);
    }

    public void setSpeakerphoneMuted(boolean muted) {
        QNRTC.setSpeakerphoneMuted(muted);
    }

    public void play(String trackID, QNRenderView renderView) {
        if (checkIsLocalTrack(trackID)) {
            if (mLocalTracks.get(trackID) instanceof QNLocalVideoTrack) {
                QNLocalVideoTrack videoTrack = (QNLocalVideoTrack) mLocalTracks.get(trackID);
                if (videoTrack != null) {
                    videoTrack.play(renderView);
                }
            }
        } else {
            for (Map.Entry<String, QNRenderView> entry : mRenderViews.entrySet()) {
                if (entry.getValue() == renderView) {
                    QNRemoteTrack remoteTrack = getRemoteTrack(entry.getKey());
                    if (remoteTrack instanceof QNRemoteVideoTrack) {
                        ((QNRemoteVideoTrack) remoteTrack).play(null);
                    }
                    mRenderViews.remove(entry.getKey());
                }
            }
            QNRemoteTrack remoteTrack = getRemoteTrack(trackID);
            if (remoteTrack instanceof QNRemoteVideoTrack) {
                ((QNRemoteVideoTrack) remoteTrack).play(renderView);
            }
        }
        mRenderViews.put(trackID, renderView);
    }

    public void enableFileLogging() {
        QNRTC.setLogFileEnabled(true);
    }

    public void join(String token, String userData) {
        if (mClient == null) {
            return;
        }
        mClient.join(token, userData);
    }

    public void leave() {
        if (mClient == null) {
            return;
        }
        mClient.leave();
    }

    public void publish(List<String> tracks, QNRTCCallback callback) {
        if (mClient == null) {
            return;
        }
        List<QNLocalTrack> localTracks = getLocalTracks(tracks);
        mClient.publish(new QNPublishResultCallback() {

            @Override
            public void onPublished() {
                JSONObject result = new JSONObject();
                JSONObject data = new JSONObject();
                result.put(Constants.KEY_PUBLISH_RESULT, true);
                for (QNLocalTrack localTrack : localTracks) {
                    String trackID = localTrack.getTrackID();
                    if (localTrack instanceof QNCameraVideoTrack) {
                        data.put(Constants.ID_CAMERA_VIDEO_TRACK, trackID);
                    } else if (localTrack instanceof QNScreenVideoTrack) {
                        data.put(Constants.ID_SCREEN_VIDEO_TRACK, trackID);
                    } else if (localTrack instanceof QNCustomVideoTrack) {
                        data.put(Constants.ID_CUSTOM_VIDEO_TRACK, trackID);
                    } else if (localTrack instanceof QNMicrophoneAudioTrack) {
                        data.put(Constants.ID_MICROPHONE_AUDIO_TRACK, trackID);
                    } else if (localTrack instanceof QNCustomAudioTrack) {
                        data.put(Constants.ID_CUSTOM_AUDIO_TRACK, trackID);
                    }
                }

                for (QNLocalVideoTrack localVideoTrack : mLocalVideoTracks) {
                    localVideoTrack.setVideoFrameListener(new QNVideoFrameListener() {
                        String trackID = localVideoTrack.getTrackID();
                        @Override
                        public void onYUVFrameAvailable(byte[] bytes, QNVideoFrameType qnVideoFrameType, int i, int i1, int i2, long l) {
                            snapshotBase64(bytes, i, i1, trackID);
                        }
                        @Override
                        public int onTextureFrameAvailable(int i, QNVideoFrameType qnVideoFrameType, int i1, int i2, int i3, long l, float[] floats) {
                            return i;
                        }
                    });
                }
                result.put(Constants.KEY_DATA, data);
                callback.onResponse(result);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                JSONObject result = new JSONObject();
                result.put(Constants.KEY_PUBLISH_RESULT, false);
                JSONObject error = new JSONObject();
                error.put(Constants.KEY_CODE, errorCode);
                error.put(Constants.KEY_MESSAGE, errorMessage);
                result.put(Constants.KEY_ERROR, error);
                callback.onResponse(result);
            }
        }, localTracks);
    }

    public void setClientRole(QNClientRole clientRole, QNRTCCallback callback) {
        mClient.setClientRole(clientRole, new QNClientRoleResultCallback() {

            @Override
            public void onResult(QNClientRole newRole) {
                JSONObject result = new JSONObject();
                JSONObject data = new JSONObject();
                result.put(Constants.KEY_RESULT, true);
                data.put(Constants.CLIENT_ROLE, newRole.equals(QNClientRole.BROADCASTER) ? "BROADCASTER" : "AUDIENCE");
                result.put(Constants.KEY_DATA, data);
                callback.onResponse(result);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                JSONObject result = new JSONObject();
                result.put(Constants.KEY_RESULT, false);
                JSONObject error = new JSONObject();
                error.put(Constants.KEY_CODE, errorCode);
                error.put(Constants.KEY_MESSAGE, errorMessage);
                result.put(Constants.KEY_ERROR, error);
                callback.onResponse(result);
            }
        });
    }

    public void startMediaRelay(QNMediaRelayConfiguration configuration, QNRTCCallback callback) {
        mClient.startMediaRelay(configuration, new QNMediaRelayResultCallback() {

            @Override
            public void onResult(Map<String, QNMediaRelayState> stateMap) {
                JSONObject result = new JSONObject();
                JSONObject data = new JSONObject();
                result.put(Constants.KEY_RESULT, true);
                for (Map.Entry<String, QNMediaRelayState> entry : stateMap.entrySet()) {
                    if (entry.getValue().equals(QNMediaRelayState.UNKNOWN)) {
                        data.put(entry.getKey(), "UNKNOWN");
                    } else if (entry.getValue().equals(QNMediaRelayState.SUCCESS)) {
                        data.put(entry.getKey(), "SUCCESS");
                    } else if (entry.getValue().equals(QNMediaRelayState.STOPPED)) {
                        data.put(entry.getKey(), "STOPPED");
                    } else if (entry.getValue().equals(QNMediaRelayState.INVALID_TOKEN)) {
                        data.put(entry.getKey(), "INVALID_TOKEN");
                    } else if (entry.getValue().equals(QNMediaRelayState.NO_ROOM)) {
                        data.put(entry.getKey(), "NO_ROOM");
                    } else if (entry.getValue().equals(QNMediaRelayState.ROOM_CLOSED)) {
                        data.put(entry.getKey(), "ROOM_CLOSED");
                    } else if (entry.getValue().equals(QNMediaRelayState.PLAYER_EXISTED)) {
                        data.put(entry.getKey(), "PLAYER_EXISTED");
                    }
                }
                result.put(Constants.KEY_DATA, data);
                callback.onResponse(result);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                JSONObject result = new JSONObject();
                result.put(Constants.KEY_RESULT, false);
                JSONObject error = new JSONObject();
                error.put(Constants.KEY_CODE, errorCode);
                error.put(Constants.KEY_MESSAGE, errorMessage);
                result.put(Constants.KEY_ERROR, error);
                callback.onResponse(result);
            }
        });
    }

    public void updateMediaRelay(QNMediaRelayConfiguration configuration, QNRTCCallback callback) {
        mClient.updateMediaRelay(configuration, new QNMediaRelayResultCallback() {

            @Override
            public void onResult(Map<String, QNMediaRelayState> stateMap) {
                JSONObject result = new JSONObject();
                JSONObject data = new JSONObject();
                result.put(Constants.KEY_RESULT, true);
                for (Map.Entry<String, QNMediaRelayState> entry : stateMap.entrySet()) {
                    if (entry.getValue().equals(QNMediaRelayState.UNKNOWN)) {
                        data.put(entry.getKey(), "UNKNOWN");
                    } else if (entry.getValue().equals(QNMediaRelayState.SUCCESS)) {
                        data.put(entry.getKey(), "SUCCESS");
                    } else if (entry.getValue().equals(QNMediaRelayState.STOPPED)) {
                        data.put(entry.getKey(), "STOPPED");
                    } else if (entry.getValue().equals(QNMediaRelayState.INVALID_TOKEN)) {
                        data.put(entry.getKey(), "INVALID_TOKEN");
                    } else if (entry.getValue().equals(QNMediaRelayState.NO_ROOM)) {
                        data.put(entry.getKey(), "NO_ROOM");
                    } else if (entry.getValue().equals(QNMediaRelayState.ROOM_CLOSED)) {
                        data.put(entry.getKey(), "ROOM_CLOSED");
                    } else if (entry.getValue().equals(QNMediaRelayState.PLAYER_EXISTED)) {
                        data.put(entry.getKey(), "PLAYER_EXISTED");
                    }
                }
                result.put(Constants.KEY_DATA, data);
                callback.onResponse(result);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                JSONObject result = new JSONObject();
                result.put(Constants.KEY_RESULT, false);
                JSONObject error = new JSONObject();
                error.put(Constants.KEY_CODE, errorCode);
                error.put(Constants.KEY_MESSAGE, errorMessage);
                result.put(Constants.KEY_ERROR, error);
                callback.onResponse(result);
            }
        });
    }

    public void stopMediaRelay(QNRTCCallback callback) {
        mClient.stopMediaRelay(new QNMediaRelayResultCallback() {

            @Override
            public void onResult(Map<String, QNMediaRelayState> stateMap) {
                JSONObject result = new JSONObject();
                JSONObject data = new JSONObject();
                result.put(Constants.KEY_RESULT, true);
                for (Map.Entry<String, QNMediaRelayState> entry : stateMap.entrySet()) {
                    if (entry.getValue().equals(QNMediaRelayState.UNKNOWN)) {
                        data.put(entry.getKey(), "UNKNOWN");
                    } else if (entry.getValue().equals(QNMediaRelayState.SUCCESS)) {
                        data.put(entry.getKey(), "SUCCESS");
                    } else if (entry.getValue().equals(QNMediaRelayState.STOPPED)) {
                        data.put(entry.getKey(), "STOPPED");
                    } else if (entry.getValue().equals(QNMediaRelayState.INVALID_TOKEN)) {
                        data.put(entry.getKey(), "INVALID_TOKEN");
                    } else if (entry.getValue().equals(QNMediaRelayState.NO_ROOM)) {
                        data.put(entry.getKey(), "NO_ROOM");
                    } else if (entry.getValue().equals(QNMediaRelayState.ROOM_CLOSED)) {
                        data.put(entry.getKey(), "ROOM_CLOSED");
                    } else if (entry.getValue().equals(QNMediaRelayState.PLAYER_EXISTED)) {
                        data.put(entry.getKey(), "PLAYER_EXISTED");
                    }
                }
                result.put(Constants.KEY_DATA, data);
                callback.onResponse(result);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                JSONObject result = new JSONObject();
                result.put(Constants.KEY_RESULT, false);
                JSONObject error = new JSONObject();
                error.put(Constants.KEY_CODE, errorCode);
                error.put(Constants.KEY_MESSAGE, errorMessage);
                result.put(Constants.KEY_ERROR, error);
                callback.onResponse(result);
            }
        });
    }

    private void snapshotBase64(byte[] nv21, int width, int height, String trackID) {
        //如果手动触发截图api，根据trackID获取标志flag flag为true，进行nv21转换base64
        if (frameAvailableMap.containsKey(trackID) && frameAvailableMap.get(trackID)) {
            frameAvailableMap.put(trackID, false);
            Bitmap bmpout = Utils.nv21ToBitmap(nv21, width, height);
            String base64Str = Utils.bitmapToBase64(bmpout);
            UniJSCallback uniJSCallback = callbackMap.get(trackID);
            if (uniJSCallback != null) {
                JSONObject base64JSON = new JSONObject();
                base64JSON.put("base64", base64Str);
                JSONObject result = new JSONObject();
                result.put(Constants.KEY_DATA, base64JSON);
                // 由于unicallback的invoke只能invoke一次，那么在每次需要回调的时候，
                // 创建新的unicallback实例，用来执行结果回调
                QNRTCCallback base64Callback = new UniCallback(uniJSCallback);
                base64Callback.onResponse(base64JSON);
            }
        }
    }


    public void takeVideoSnapshot(String trackID, UniJSCallback callback) {
        callbackMap.put(trackID, callback);
        frameAvailableMap.put(trackID, true);
    }

    public void unpublish(List<String> tracks) {
        if (mClient == null) {
            return;
        }
        List<QNLocalTrack> localTracks = getLocalTracks(tracks);
        for (QNLocalTrack localTrack : localTracks) {
            String trackID = localTrack.getTrackID();
            frameAvailableMap.remove(trackID);
            callbackMap.remove(trackID);
        }

        mClient.unpublish(localTracks);
    }

    public void subscribe(List<UniRemoteTrack> tracks) {
        List<QNRemoteTrack> remoteTracks = new ArrayList<>();
        List<QNRemoteVideoTrack> remoteVideoTracks = new ArrayList<>();
        for (UniRemoteTrack uniRemoteTrack : tracks) {
            QNRemoteTrack remoteTrack = getRemoteTrack(uniRemoteTrack.getUserID(), uniRemoteTrack.getTrackID());
            QNRemoteVideoTrack remoteVideoTrack = getRemoteVideoTrack(uniRemoteTrack.getUserID(), uniRemoteTrack.getTrackID());
            if(remoteVideoTrack != null) {
                remoteVideoTracks.add(remoteVideoTrack);
            }
            if (remoteTrack != null) {
                remoteTracks.add(remoteTrack);
            }
        }
        mClient.subscribe(remoteTracks);
        for (QNRemoteVideoTrack remoteVideoTrack : remoteVideoTracks) {
            String trackID = remoteVideoTrack.getTrackID();
            remoteVideoTrack.setVideoFrameListener(new QNVideoFrameListener() {
                @Override
                public void onYUVFrameAvailable(byte[] bytes, QNVideoFrameType qnVideoFrameType, int i, int i1, int i2, long l) {
                    snapshotBase64(bytes, i, i1, trackID);
                }

                @Override
                public int onTextureFrameAvailable(int i, QNVideoFrameType qnVideoFrameType, int i1, int i2, int i3, long l, float[] floats) {
                    return i;
                }
            });
        }
    }

    public void unsubscribe(List<UniRemoteTrack> tracks) {
        List<QNRemoteTrack> remoteTracks = new ArrayList<>();
        for (UniRemoteTrack uniRemoteTrack : tracks) {
            QNRemoteTrack remoteTrack = getRemoteTrack(uniRemoteTrack.getUserID(), uniRemoteTrack.getTrackID());
            if (remoteTrack != null) {
                remoteTracks.add(remoteTrack);
                String trackID = remoteTrack.getTrackID();
                callbackMap.remove(trackID);
                frameAvailableMap.remove(trackID);
            }
        }
        mClient.unsubscribe(remoteTracks);
    }

    public QNConnectionState getConnectionState() {
        return mClient.getConnectionState();
    }

    public void setAutoSubscribe(boolean autoSubscribe) {
        mClient.setAutoSubscribe(autoSubscribe);
    }

    public List<QNRemoteTrack> getSubscribedTracks(String userID) {
        QNRemoteUser remoteUser = mClient.getRemoteUser(userID);
        List<QNRemoteTrack> subscribedTracks = new ArrayList<>();
        for (QNRemoteTrack remoteVideoTrack : remoteUser.getVideoTracks()) {
            if (remoteVideoTrack.isSubscribed()) {
                subscribedTracks.add(remoteVideoTrack);
            }
        }
        for (QNRemoteTrack remoteAudioTrack : remoteUser.getAudioTracks()) {
            if (remoteAudioTrack.isSubscribed()) {
                subscribedTracks.add(remoteAudioTrack);
            }
        }
        
        return subscribedTracks;
    }

    public List<QNRemoteUser> getRemoteUsers() {
        return mClient.getRemoteUsers();
    }

    public List<QNTrack> getPublishedTracks() {
        return mClient.getPublishedTracks();
    }

    public Map<String, QNLocalAudioTrackStats> getLocalAudioTrackStats() {
        return mClient.getLocalAudioTrackStats();
    }

    public Map<String, List<QNLocalVideoTrackStats>> getLocalVideoTrackStats() {
        return mClient.getLocalVideoTrackStats();
    }

    public Map<String, QNRemoteAudioTrackStats> getRemoteAudioTrackStats() {
        return mClient.getRemoteAudioTrackStats();
    }

    public Map<String, QNRemoteVideoTrackStats> getRemoteVideoTrackStats() {
        return mClient.getRemoteVideoTrackStats();
    }

    public QNNetworkQuality getUserNetworkQuality(String userID) {
        Map<String, QNNetworkQuality> userNetworkQuality = mClient.getUserNetworkQuality();
        for (Map.Entry<String, QNNetworkQuality> entry : userNetworkQuality.entrySet()) {
            if (entry.getKey().equals(userID)) {
                return entry.getValue();
            }
        }
        return null;
    }

    public void sendMessage(String message, List<String> users, String messageID) {
        mClient.sendMessage(users, messageID, message);
    }

    public QNAudioMixer getAudioMixer() {
        return mAudioMixer;
    }

    public void addAudioEffect(int effectID, QNAudioEffect audioEffect) {
        mAudioEffect.put(effectID, audioEffect);
    }

    public QNAudioEffect getAudioEffect(int effectID) {
        return mAudioEffect.get(effectID);
    }

    public void createAudioMusicMixer(String musicPath) {
        mAudioMusicMixer = QNRTC.createAudioMusicMixer(musicPath, new QNAudioMusicMixerListener() {
            @Override
            public void onStateChanged(QNAudioMusicMixerState state) {
                if (mAudioMusicMixerListener == null) {
                    return;
                }
                Map<String, Object> params = new HashMap<>();
                params.put(Constants.KEY_STATE, state.name());
                mAudioMusicMixerListener.onEvent(Constants.EVENT_AUDIO_MUSIC_MIXER_STATE_CHANGED, params);
            }
            @Override
            public void onMixing(long position) {
                if (mAudioMusicMixerListener == null) {
                    return;
                }
                Map<String, Object> params = new HashMap<>();
                params.put(Constants.EVENT_AUDIO_MUSIC_MIXER_POSITION, position);
                mAudioMusicMixerListener.onEvent(Constants.EVENT_AUDIO_MUSIC_MIXER_MIXING, params);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                if (mAudioMusicMixerListener == null) {
                    return;
                }
                Map<String, Object> params = new HashMap<>();
                params.put(Constants.KEY_CODE, errorCode);
                params.put(Constants.KEY_MESSAGE, errorMessage);
                mAudioMusicMixerListener.onEvent(Constants.EVENT_AUDIO_MUSIC_MIXER_ERROR, params);
            }

        });
    }

    public QNAudioMusicMixer getAudioMusicMixer() { return mAudioMusicMixer; }

    public void addAudioFilter(QNLocalAudioTrack localTrack, String filterId) {
        if (filterId.equals("audioEffectMixer")) {
            localTrack.addAudioFilter(mAudioEffectMixer);
        } else if (filterId.equals("audioMusicMixer")) {
            localTrack.addAudioFilter(mAudioMusicMixer);
        }
    }

    public void removeAudioFilter(QNLocalAudioTrack localTrack, String filterId) {
        if (filterId.equals("audioEffectMixer") && mAudioEffectMixer != null) {
            localTrack.removeAudioFilter(mAudioEffectMixer);
        } else if (filterId.equals("audioMusicMixer")) {
            localTrack.removeAudioFilter(mAudioMusicMixer);
        }
    }

    public void createAudioEffectMixer() {
        mAudioEffectMixer = QNRTC.createAudioEffectMixer(new QNAudioEffectMixerListener() {
            @Override
            public void onEffectFinished(int effectID) {
                if (mAudioEffectMixerListener == null) {
                    return;
                }
                Map<String, Object> params = new HashMap<>();
                params.put(Constants.EFFECT_ID, effectID);
                mAudioEffectMixerListener.onEvent(Constants.EVENT_AUDIO_EFFECT_MIXER_FINISHED, params);
            }
            @Override
            public void onEffectError(int effectID, int errorCode, String errorMessage) {
                if (mAudioEffectMixerListener == null) {
                    return;
                }
                Map<String, Object> params = new HashMap<>();
                params.put(Constants.EFFECT_ID, effectID);
                params.put(Constants.KEY_CODE, errorCode);
                params.put(Constants.KEY_MESSAGE, errorMessage);
                mAudioEffectMixerListener.onEvent(Constants.EVENT_AUDIO_EFFECT_EFFECT_MIXER_ERROR, params);
            }

            @Override
            public void onError(int errorCode, String errorMessage) {
                if (mAudioEffectMixerListener == null) {
                    return;
                }
                Map<String, Object> params = new HashMap<>();
                params.put(Constants.KEY_CODE, errorCode);
                params.put(Constants.KEY_MESSAGE, errorMessage);
                mAudioEffectMixerListener.onEvent(Constants.EVENT_AUDIO_EFFECT_MIXER_ERROR, params);
            }

        });
    }

    public QNAudioEffectMixer getAudioEffectMixer() { return mAudioEffectMixer; };

    public void startLiveStreamingWithDirect(String streamID, String audioTrackID, String videoTrackID, String url) {
        QNDirectLiveStreamingConfig directLiveStreamingConfig = new QNDirectLiveStreamingConfig();
        directLiveStreamingConfig.setStreamID(streamID);
        directLiveStreamingConfig.setUrl(url);
        for (QNLocalTrack track : mLocalTracks.values()) {
            if (audioTrackID.equals(track.getTrackID())) {
                if (track instanceof QNLocalAudioTrack) {
                    directLiveStreamingConfig.setAudioTrack((QNLocalAudioTrack) track);
                }
                break;
            }
        }
        for (QNLocalTrack track : mLocalTracks.values()) {
            if (videoTrackID.equals(track.getTrackID())) {
                if (track instanceof QNLocalVideoTrack) {
                    directLiveStreamingConfig.setVideoTrack((QNLocalVideoTrack) track);
                }
                break;
            }
        }
        mClient.startLiveStreaming(directLiveStreamingConfig);
        mLiveStreamingConfigs.put(streamID, directLiveStreamingConfig);
    }

    public void stopLiveStreamingWithDirect(String streamID) {
        QNLiveStreamingConfig liveStreamingConfig = mLiveStreamingConfigs.get(streamID);
        if (liveStreamingConfig instanceof QNDirectLiveStreamingConfig) {
            mClient.stopLiveStreaming((QNDirectLiveStreamingConfig) liveStreamingConfig);
        }
        mLiveStreamingConfigs.remove(streamID);
    }

    public void startLiveStreamingWithTranscoding(QNTranscodingLiveStreamingConfig config) {
        mClient.startLiveStreaming(config);
        mLiveStreamingConfigs.put(config.getStreamID(), config);
    }

    public void stopLiveStreamingWithTranscoding(String streamID) {
        QNLiveStreamingConfig config = mLiveStreamingConfigs.get(streamID);
        if (config instanceof QNTranscodingLiveStreamingConfig) {
            mClient.stopLiveStreaming((QNTranscodingLiveStreamingConfig) config);
        }
        mLiveStreamingConfigs.remove(streamID);
    }

    public void setTranscodingLiveStreamingTracks(String streamID, List<QNTranscodingLiveStreamingTrack> transcodingTracks) {
        mClient.setTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    }

    public void removeTranscodingLiveStreamingTracks(String streamID, List<QNTranscodingLiveStreamingTrack> transcodingTracks) {
        mClient.removeTranscodingLiveStreamingTracks(streamID, transcodingTracks);
    }

    public QNLocalTrack getLocalTrack(String identifyID) {
        return mLocalTracks.get(identifyID);
    }

    public List<QNLocalTrack> getLocalTracks(List<String> tracks) {
        List<QNLocalTrack> localTracks = new ArrayList<>();
        for (String trackIdentifyID : tracks) {
            QNLocalTrack track = mLocalTracks.get(trackIdentifyID);
            if (track != null) {
                localTracks.add(track);
            }
        }
        return localTracks;
    }

    public QNRemoteTrack getRemoteTrack(String trackID) {
        QNRemoteTrack remoteTrack = null;
        for (QNRemoteUser remoteUser : mClient.getRemoteUsers()) {
            for (QNRemoteAudioTrack remoteAudioTrack : remoteUser.getAudioTracks()) {
                if (remoteAudioTrack.getTrackID().equals(trackID)) {
                    remoteTrack = remoteAudioTrack;
                    break;
                }
            }
            if (remoteTrack != null) {
                break;
            }
            for (QNRemoteVideoTrack remoteVideoTrack : remoteUser.getVideoTracks()) {
                if (remoteVideoTrack.getTrackID().equals(trackID)) {
                    remoteTrack = remoteVideoTrack;
                    break;
                }
            }
        }
        return remoteTrack;
    }

    public QNRemoteTrack getRemoteTrack(String userID, String trackID) {
        QNRemoteUser remoteUser = mClient.getRemoteUser(userID);
        for (QNRemoteAudioTrack remoteAudioTrack : remoteUser.getAudioTracks()) {
            if (remoteAudioTrack.getTrackID().equals(trackID)) {
                return remoteAudioTrack;
            }
        }
        for (QNRemoteVideoTrack remoteVideoTrack : remoteUser.getVideoTracks()) {
            if (remoteVideoTrack.getTrackID().equals(trackID)) {
                return remoteVideoTrack;
            }
        }
        return null;
    }

    private QNRemoteVideoTrack getRemoteVideoTrack(String userID, String trackID) {
        QNRemoteUser remoteUser = mClient.getRemoteUser(userID);
        for (QNRemoteVideoTrack remoteVideoTrack : remoteUser.getVideoTracks()) {
            if (remoteVideoTrack.getTrackID().equals(trackID)) {
                return remoteVideoTrack;
            }
        }
        return null;
    }

    public QNRenderView getRenderView(String trackID) {
        return mRenderViews.get(trackID);
    }

    private boolean checkIsLocalTrack(String trackID) {
        return mLocalTracks.containsKey(trackID);
    }

    @Override
    public void onConnectionStateChanged(QNConnectionState state, @Nullable QNConnectionDisconnectedInfo info) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_STATE, state.name());
        if (state == QNConnectionState.DISCONNECTED && info != null) {
            JSONObject disconnectedInfo = new JSONObject();
            disconnectedInfo.put(Constants.KEY_REASON, info.getReason().name());
            disconnectedInfo.put(Constants.KEY_ERROR_MESSAGE, info.getErrorMessage());
            params.put(Constants.KEY_CONNECTION_INFO, disconnectedInfo);
        }
        mClientEventListener.onEvent(Constants.EVENT_CONNECTION_STATE_CHANGED, params);
    }

    @Override
    public void onUserJoined(String remoteUserID, String userData) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
        params.put(Constants.KEY_USER_DATA, userData);
        mClientEventListener.onEvent(Constants.EVENT_USER_JOINED, params);
    }

    @Override
    public void onUserReconnecting(String remoteUserID) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
        mClientEventListener.onEvent(Constants.EVENT_USER_RECONNECTING, params);
    }

    @Override
    public void onUserReconnected(String remoteUserID) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
        mClientEventListener.onEvent(Constants.EVENT_USER_RECONNECTED, params);
    }

    @Override
    public void onUserLeft(String remoteUserID) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
        mClientEventListener.onEvent(Constants.EVENT_USER_LEFT, params);
    }

    @Override
    public void onUserPublished(String remoteUserID, List<QNRemoteTrack> trackList) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
        params.put(Constants.KEY_TRACK_LIST, JSONArray.parseArray(JSONObject.toJSONString(Utils.convertToUniRemoteTracks(trackList))));
        mClientEventListener.onEvent(Constants.EVENT_USER_PUBLISHED, params);
    }

    @Override
    public void onUserUnpublished(String remoteUserID, List<QNRemoteTrack> trackList) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
        params.put(Constants.KEY_TRACK_LIST, JSONArray.parseArray(JSONObject.toJSONString(Utils.convertToUniRemoteTracks(trackList))));
        mClientEventListener.onEvent(Constants.EVENT_USER_UNPUBLISHED, params);
    }

    @Override
    public void onSubscribed(String remoteUserID, List<QNRemoteAudioTrack> remoteAudioTracks, List<QNRemoteVideoTrack> remoteVideoTracks) {
        if (mClientEventListener == null) {
            return;
        }
        if (!remoteAudioTracks.isEmpty()) {
            for (QNRemoteAudioTrack remoteAudioTrack : remoteAudioTracks) {
                remoteAudioTrack.setTrackInfoChangedListener(new QNTrackInfoChangedListener() {
                    @Override
                    public void onMuteStateChanged(boolean isMuted) {
                        if (mRemoteTrackInfoListener != null) {
                            Map<String, Object> params = new HashMap<>();
                            params.put(Constants.KEY_IS_MUTED, isMuted);
                            params.put(Constants.KEY_TRACK_ID, remoteAudioTrack.getTrackID());
                            mRemoteTrackInfoListener.onEvent(Constants.EVENT_MUTE_STATE_CHANGED, params);
                        }
                    }
                });
            }

            Map<String, Object> params = new HashMap<>();
            params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
            params.put(Constants.KEY_TRACK_LIST,
                    JSONArray.parseArray(JSONObject.toJSONString(Utils.convertToUniRemoteTracks(new ArrayList<>(remoteAudioTracks)))));
            mClientEventListener.onEvent(Constants.EVENT_AUDIO_SUBSCRIBED, params);
        }
        if (!remoteVideoTracks.isEmpty()) {
            for (QNRemoteVideoTrack remoteVideoTrack : remoteVideoTracks) {
                remoteVideoTrack.setTrackInfoChangedListener(new QNTrackInfoChangedListener() {
                    @Override
                    public void onVideoProfileChanged(QNTrackProfile profile) {
                        if (mRemoteTrackInfoListener != null) {
                            Map<String, Object> params = new HashMap<>();
                            params.put(Constants.KEY_PROFILE, profile.name());
                            params.put(Constants.KEY_TRACK_ID, remoteVideoTrack.getTrackID());
                            mRemoteTrackInfoListener.onEvent(Constants.EVENT_VIDEO_PROFILE_CHANGED, params);
                        }
                    }

                    @Override
                    public void onMuteStateChanged(boolean isMuted) {
                        if (mRemoteTrackInfoListener != null) {
                            Map<String, Object> params = new HashMap<>();
                            params.put(Constants.KEY_IS_MUTED, isMuted);
                            params.put(Constants.KEY_TRACK_ID, remoteVideoTrack.getTrackID());
                            mRemoteTrackInfoListener.onEvent(Constants.EVENT_MUTE_STATE_CHANGED, params);
                        }
                    }
                });
            }

            Map<String, Object> params = new HashMap<>();
            params.put(Constants.KEY_REMOTE_USER_ID, remoteUserID);
            params.put(Constants.KEY_TRACK_LIST,
                    JSONArray.parseArray(JSONObject.toJSONString(Utils.convertToUniRemoteTracks(new ArrayList<>(remoteVideoTracks)))));
            mClientEventListener.onEvent(Constants.EVENT_VIDEO_SUBSCRIBED, params);
        }
    }

    @Override
    public void onMessageReceived(QNCustomMessage message) {
        if (mClientEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_CUSTOM_MESSAGE_ID, message.getID());
        params.put(Constants.KEY_CUSTOM_MESSAGE_USERID, message.getUserID());
        params.put(Constants.KEY_CUSTOM_MESSAGE_CONTENT, message.getContent());
        params.put(Constants.KEY_CUSTOM_MESSAGE_TIMESTAMP, message.getTimestamp());
        mClientEventListener.onEvent(Constants.EVENT_MESSAGE_RECEIVED, params);
    }

    @Override
    public void onMediaRelayStateChanged(String s, QNMediaRelayState qnMediaRelayState) {
        return;
    }

    @Override
    public void onAudioRouteChanged(QNAudioDevice device) {
        if (mRTCEventListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_AUDIO_DEVICE, device.name());
        mRTCEventListener.onEvent(Constants.EVENT_AUDIO_ROUTE_CHANGED, params);
    }

    @Override
    public void onStarted(String streamID) {
        if (mLiveStreamingListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_STREAM_ID, streamID);
        mLiveStreamingListener.onEvent(Constants.EVENT_LIVE_STREAMING_STARTED, params);
    }

    @Override
    public void onStopped(String streamID) {
        if (mLiveStreamingListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_STREAM_ID, streamID);
        mLiveStreamingListener.onEvent(Constants.EVENT_LIVE_STREAMING_STOPPED, params);
    }

    @Override
    public void onTranscodingTracksUpdated(String streamID) {
        if (mLiveStreamingListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_STREAM_ID, streamID);
        mLiveStreamingListener.onEvent(Constants.EVENT_LIVE_STREAMING_UPDATED, params);
    }

    @Override
    public void onError(String streamID, QNLiveStreamingErrorInfo errorInfo) {
        if (mLiveStreamingListener == null) {
            return;
        }
        Map<String, Object> params = new HashMap<>();
        params.put(Constants.KEY_STREAM_ID, streamID);
        JSONObject info = new JSONObject();
        info.put(Constants.KEY_TYPE, errorInfo.type.name());
        info.put(Constants.KEY_CODE, errorInfo.code);
        info.put(Constants.KEY_MESSAGE, errorInfo.message);
        params.put(Constants.KEY_CONNECTION_INFO, info);
        mLiveStreamingListener.onEvent(Constants.EVENT_LIVE_STREAMING_ERROR, params);
    }

    @Override
    public void onUserVolumeIndication(List<QNAudioVolumeInfo> info) {

    }
}
