package uni.qiniu.droid.uniplugin_rtc.base;

import android.content.Context;
import android.util.Log;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.google.gson.Gson;
import com.qiniu.droid.rtc.QNAudioQuality;
import com.qiniu.droid.rtc.QNBeautySetting;
import com.qiniu.droid.rtc.QNCameraFacing;
import com.qiniu.droid.rtc.QNCameraVideoTrackConfig;
import com.qiniu.droid.rtc.QNCustomAudioTrackConfig;
import com.qiniu.droid.rtc.QNCustomVideoTrackConfig;
import com.qiniu.droid.rtc.QNLocalVideoTrackStats;
import com.qiniu.droid.rtc.QNLogLevel;
import com.qiniu.droid.rtc.QNMicrophoneAudioTrackConfig;
import com.qiniu.droid.rtc.QNRTCSetting;
import com.qiniu.droid.rtc.QNRemoteTrack;
import com.qiniu.droid.rtc.QNRenderMode;
import com.qiniu.droid.rtc.QNScreenVideoTrackConfig;
import com.qiniu.droid.rtc.QNTranscodingLiveStreamingConfig;
import com.qiniu.droid.rtc.QNTranscodingLiveStreamingImage;
import com.qiniu.droid.rtc.QNTranscodingLiveStreamingTrack;
import com.qiniu.droid.rtc.QNVideoCaptureConfig;
import com.qiniu.droid.rtc.QNVideoEncoderConfig;
import com.qiniu.droid.rtc.model.QNImage;
import com.qiniu.droid.rtc.model.QNVideoWaterMark;

import java.util.ArrayList;
import java.util.List;

import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniLocalVideoTrackStats;
import uni.qiniu.droid.uniplugin_rtc.uni.entity.UniRemoteTrack;

public class Utils {
    public static QNRTCSetting toRTCSetting(JSONObject configuration) {
        boolean isHwEnabled = configuration.getBooleanValue(Constants.HW_CODEC_ENABLED);
        boolean isMaintainResolution = configuration.getBooleanValue(Constants.MAINTAIN_RESOLUTION);
        boolean isEncoderQualityMode = configuration.getBooleanValue(Constants.ENCODER_QUALITY_MODE);
        boolean isAec3Enabled = configuration.getBooleanValue(Constants.AEC3_ENABLED);
        String policy = configuration.getString(Constants.TRANSPORT_POLICY);
        String fieldTrails = configuration.getString(Constants.FIELD_TRAILS);
        String logLevel = configuration.getString(Constants.LOG_LEVEL);

        QNLogLevel level = QNLogLevel.INFO;
        switch (logLevel) {
            case "verbose":
                level = QNLogLevel.VERBOSE;
                break;
            case "warning":
                level = QNLogLevel.WARNING;
                break;
            case "error":
                level = QNLogLevel.ERROR;
                break;
            case "none":
                level = QNLogLevel.NONE;
                break;
        }

        QNRTCSetting setting = new QNRTCSetting()
                .setHWCodecEnabled(isHwEnabled)
                .setAEC3Enabled(isAec3Enabled)
                .setMaintainResolution(isMaintainResolution)
                .setEncoderQualityMode(isEncoderQualityMode)
                .setLogLevel(level)
                .setFieldTrials(fieldTrails);
        QNRTCSetting.TransportPolicy transportPolicy;
        if ("forceUDP".equals(policy)) {
            transportPolicy = QNRTCSetting.TransportPolicy.FORCE_UDP;
        } else if ("forceTCP".equals(policy)) {
            transportPolicy = QNRTCSetting.TransportPolicy.FORCE_TCP;
        } else {
            transportPolicy = QNRTCSetting.TransportPolicy.PREFER_UDP;
        }
        setting.setTransportPolicy(transportPolicy);
        return setting;
    }

    public static QNMicrophoneAudioTrackConfig toMicrophoneAudioTrackConfig(JSONObject audioConfig) {
        String tag = audioConfig.getString(Constants.TAG);
        int bitrate = audioConfig.getIntValue(Constants.BITRATE);
        int bitsPerSample = audioConfig.getIntValue(Constants.BITS_PER_SAMPLE);
        int channelCount = audioConfig.getInteger(Constants.CHANNEL_COUNT);
        int sampleRate = audioConfig.getInteger(Constants.SAMPLE_RATE);
        boolean communicationModeOn = audioConfig.getBooleanValue(Constants.COMMUNICATION_MODE_ON);

        return new QNMicrophoneAudioTrackConfig(tag)
                .setAudioQuality(new QNAudioQuality(sampleRate, channelCount, bitsPerSample, bitrate))
                .setCommunicationModeOn(communicationModeOn);
    }

    public static QNCustomAudioTrackConfig toCustomAudioTrackConfig(JSONObject audioConfig) {
        String tag = audioConfig.getString(Constants.TAG);
        int bitrate = audioConfig.getIntValue(Constants.BITRATE);
        int bitsPerSample = audioConfig.getIntValue(Constants.BITS_PER_SAMPLE);
        int channelCount = audioConfig.getInteger(Constants.CHANNEL_COUNT);
        int sampleRate = audioConfig.getInteger(Constants.SAMPLE_RATE);

        return new QNCustomAudioTrackConfig(tag)
                .setAudioQuality(new QNAudioQuality(sampleRate, channelCount, bitsPerSample, bitrate));
    }

    public static QNCameraVideoTrackConfig toCameraVideoTrackConfig(JSONObject videoConfig) {
        String tag = videoConfig.getString(Constants.TAG);
        int encodeBitrate = videoConfig.getIntValue(Constants.BITRATE);
        int encodeWidth = videoConfig.getIntValue(Constants.WIDTH);
        int encodeHeight = videoConfig.getIntValue(Constants.HEIGHT);
        int encodeFrameRate = videoConfig.getIntValue(Constants.FRAME_RATE);
        boolean isMultiStreamEnabled = videoConfig.getBooleanValue(Constants.MULTI_STREAM_ENABLED);
        String cameraFacing = videoConfig.getString(Constants.CAMERA_FACING);
        int captureWidth = videoConfig.getIntValue(Constants.CAPTURE_WIDTH);
        int captureHeight = videoConfig.getIntValue(Constants.CAPTURE_HEIGHT);
        int captureFrameRate = videoConfig.getIntValue(Constants.CAPTURE_FRAME_RATE);

        return new QNCameraVideoTrackConfig(tag)
                .setCameraFacing("front".equals(cameraFacing) ? QNCameraFacing.FRONT : QNCameraFacing.BACK)
                .setVideoCaptureConfig(new QNVideoCaptureConfig(captureWidth, captureHeight, captureFrameRate))
                .setVideoEncoderConfig(new QNVideoEncoderConfig(encodeWidth, encodeHeight, encodeFrameRate, encodeBitrate))
                .setMultiProfileEnabled(isMultiStreamEnabled);
    }

    public static QNCustomVideoTrackConfig toCustomVideoTrackConfig(JSONObject videoConfig) {
        String tag = videoConfig.getString(Constants.TAG);
        int encodeBitrate = videoConfig.getIntValue(Constants.BITRATE);
        int encodeWidth = videoConfig.getIntValue(Constants.WIDTH);
        int encodeHeight = videoConfig.getIntValue(Constants.HEIGHT);
        int encodeFrameRate = videoConfig.getIntValue(Constants.FRAME_RATE);
        boolean isMultiStreamEnabled = videoConfig.getBooleanValue(Constants.MULTI_STREAM_ENABLED);

        return new QNCustomVideoTrackConfig(tag)
                .setVideoEncoderConfig(new QNVideoEncoderConfig(encodeWidth, encodeHeight, encodeFrameRate, encodeBitrate))
                .setMultiProfileEnabled(isMultiStreamEnabled);
    }

    public static QNScreenVideoTrackConfig toScreenVideoTrackConfig(JSONObject videoConfig) {
        String tag = videoConfig.getString(Constants.TAG);
        int encodeBitrate = videoConfig.getIntValue(Constants.BITRATE);
        int encodeWidth = videoConfig.getIntValue(Constants.WIDTH);
        int encodeHeight = videoConfig.getIntValue(Constants.HEIGHT);
        int encodeFrameRate = videoConfig.getIntValue(Constants.FRAME_RATE);
        boolean isMultiStreamEnabled = videoConfig.getBooleanValue(Constants.MULTI_STREAM_ENABLED);

        return new QNScreenVideoTrackConfig(tag)
                .setVideoEncoderConfig(new QNVideoEncoderConfig(encodeWidth, encodeHeight, encodeFrameRate, encodeBitrate))
                .setMultiProfileEnabled(isMultiStreamEnabled);
    }

    public static List<String> toLocalTracks(JSONArray tracks) {
        List<String> localTracks = new ArrayList<>();
        for (Object track : tracks) {
            if (track instanceof JSONObject && ((JSONObject) track).containsKey(Constants.KEY_TRACK_IDENTIFY_ID)) {
                localTracks.add(((JSONObject) track).getString(Constants.KEY_TRACK_IDENTIFY_ID));
            }
        }
        return localTracks;
    }

    public static List<UniRemoteTrack> toRemoteTracks(JSONArray tracks) {
        Gson gson = new Gson();
        List<UniRemoteTrack> remoteTracks = new ArrayList<>();
        for (Object track : tracks) {
            if (track instanceof JSONObject) {
                UniRemoteTrack uniRemoteTrack = gson.fromJson(track.toString(), UniRemoteTrack.class);
                if (uniRemoteTrack != null) {
                    remoteTracks.add(uniRemoteTrack);
                }
            }
        }
        return remoteTracks;
    }

    public static List<UniRemoteTrack> convertToUniRemoteTracks(List<QNRemoteTrack> tracks) {
        List<UniRemoteTrack> remoteTracks = new ArrayList<>();
        for (QNRemoteTrack track : tracks) {
            UniRemoteTrack remoteTrack = new UniRemoteTrack(track.getUserID(), track.getTrackID(),
                    track.isAudio() ? Constants.TRACK_KIND_AUDIO : Constants.TRACK_KIND_VIDEO, track.getTag());
            remoteTracks.add(remoteTrack);
        }
        return remoteTracks;
    }

    public static List<UniLocalVideoTrackStats> convertToUniLocalVideoTrackStats(List<QNLocalVideoTrackStats> videoTrackStats) {
        List<UniLocalVideoTrackStats> statsList = new ArrayList<>();
        for (QNLocalVideoTrackStats stats : videoTrackStats) {
            UniLocalVideoTrackStats localVideoTrackStats = new UniLocalVideoTrackStats(
                    stats.profile.name(), stats.uplinkFrameRate, stats.uplinkBitrate, stats.uplinkRTT, stats.uplinkLostRate);
            statsList.add(localVideoTrackStats);
        }
        return statsList;
    }

    public static QNTranscodingLiveStreamingConfig toTranscodingLiveStreamingConfig(JSONObject config) {
        QNTranscodingLiveStreamingConfig transcodingLiveStreamingConfig = new QNTranscodingLiveStreamingConfig();
        transcodingLiveStreamingConfig.setStreamID(config.getString(Constants.KEY_STREAM_ID));
        transcodingLiveStreamingConfig.setUrl(config.getString(Constants.KEY_URL));
        transcodingLiveStreamingConfig.setWidth(config.getIntValue(Constants.WIDTH));
        transcodingLiveStreamingConfig.setHeight(config.getIntValue(Constants.HEIGHT));
        transcodingLiveStreamingConfig.setBitrate(config.getIntValue(Constants.BITRATE));
        transcodingLiveStreamingConfig.setBitrateRange(config.getIntValue(Constants.KEY_MIN_BITRATE), config.getIntValue(Constants.KEY_MAX_BITRATE));
        transcodingLiveStreamingConfig.setVideoFrameRate(config.getIntValue(Constants.KEY_FRAME_RATE));
        transcodingLiveStreamingConfig.setHoldLastFrame(config.getBoolean(Constants.KEY_HOLD_LAST_FRAME));

        String renderMode = config.getString(Constants.KEY_RENDER_MODE);
        QNRenderMode targetRenderMode = QNRenderMode.ASPECT_FILL;
        switch (renderMode) {
            case Constants.RENDER_MODE_FILL:
                targetRenderMode = QNRenderMode.FILL;
                break;
            case Constants.RENDER_MODE_ASPECT_FIT:
                targetRenderMode = QNRenderMode.ASPECT_FIT;
                break;
        }
        transcodingLiveStreamingConfig.setRenderMode(targetRenderMode);

        JSONObject backgroundImageJSON = config.getJSONObject(Constants.KEY_BACKGROUND);
        QNTranscodingLiveStreamingImage backgroundImage = new QNTranscodingLiveStreamingImage();
        backgroundImage.setUrl(backgroundImageJSON.getString(Constants.KEY_URL));
        backgroundImage.setX(backgroundImageJSON.getIntValue(Constants.KEY_X));
        backgroundImage.setY(backgroundImageJSON.getIntValue(Constants.KEY_Y));
        backgroundImage.setWidth(backgroundImageJSON.getIntValue(Constants.KEY_W));
        backgroundImage.setHeight(backgroundImageJSON.getIntValue(Constants.KEY_H));
        transcodingLiveStreamingConfig.setBackground(backgroundImage);

        List<QNTranscodingLiveStreamingImage> targetWatermarks = new ArrayList<>();
        JSONArray watermarks = config.getJSONArray(Constants.KEY_WATERMARKS);
        for (int i = 0; i < watermarks.size(); i++) {
            QNTranscodingLiveStreamingImage watermark = new QNTranscodingLiveStreamingImage();
            JSONObject watermarkJSON = watermarks.getJSONObject(i);
            watermark.setUrl(watermarkJSON.getString(Constants.KEY_URL));
            watermark.setX(watermarkJSON.getIntValue(Constants.KEY_X));
            watermark.setY(watermarkJSON.getIntValue(Constants.KEY_Y));
            watermark.setWidth(watermarkJSON.getIntValue(Constants.KEY_W));
            watermark.setHeight(watermarkJSON.getIntValue(Constants.KEY_H));
            targetWatermarks.add(watermark);
        }
        transcodingLiveStreamingConfig.setWatermarks(targetWatermarks);

        return transcodingLiveStreamingConfig;
    }

    public static List<QNTranscodingLiveStreamingTrack> toTranscodingTracks(JSONArray tracks) {
        List<QNTranscodingLiveStreamingTrack> transcodingLiveStreamingTracks = new ArrayList<>();
        for (int i = 0; i < tracks.size(); i++) {
            JSONObject trackJSON = tracks.getJSONObject(i);
            QNTranscodingLiveStreamingTrack transcodingLiveStreamingTrack = new QNTranscodingLiveStreamingTrack();
            transcodingLiveStreamingTrack.setTrackID(trackJSON.getString(Constants.KEY_TRACK_ID));
            transcodingLiveStreamingTrack.setX(trackJSON.getIntValue(Constants.KEY_X));
            transcodingLiveStreamingTrack.setY(trackJSON.getIntValue(Constants.KEY_Y));
            transcodingLiveStreamingTrack.setWidth(trackJSON.getIntValue(Constants.WIDTH));
            transcodingLiveStreamingTrack.setHeight(trackJSON.getIntValue(Constants.HEIGHT));
            transcodingLiveStreamingTrack.setZOrder(trackJSON.getInteger(Constants.KEY_Z_ORDER));
            transcodingLiveStreamingTrack.setSEIEnabled(trackJSON.getBoolean(Constants.KEY_SEI_ENABLED));

            String renderMode = trackJSON.getString(Constants.KEY_RENDER_MODE);
            QNRenderMode targetRenderMode = QNRenderMode.ASPECT_FILL;
            switch (renderMode) {
                case Constants.RENDER_MODE_FILL:
                    targetRenderMode = QNRenderMode.FILL;
                    break;
                case Constants.RENDER_MODE_ASPECT_FIT:
                    targetRenderMode = QNRenderMode.ASPECT_FIT;
                    break;
            }
            transcodingLiveStreamingTrack.setRenderMode(targetRenderMode);
            transcodingLiveStreamingTracks.add(transcodingLiveStreamingTrack);
        }
        return transcodingLiveStreamingTracks;
    }

    public static QNBeautySetting toBeautySetting(JSONObject setting) {
        QNBeautySetting beautySetting = new QNBeautySetting(setting.getFloat(Constants.KEY_SMOOTH_LEVEL),
                setting.getFloat(Constants.KEY_WHITEN), setting.getFloat(Constants.KEY_REDDEN));
        beautySetting.setEnable(setting.getBoolean(Constants.KEY_ENABLED));
        return beautySetting;
    }

    public static QNImage toQNImage(Context context, JSONObject image) {
        String resourcePath = image.getString(Constants.KEY_RESOURCE_PATH);
        if ("".equals(resourcePath)) {
            return null;
        }
        QNImage qnImage = new QNImage(context);
        qnImage.setResourcePath(resourcePath.substring(7));
        qnImage.setSize(image.getIntValue(Constants.WIDTH), image.getIntValue(Constants.HEIGHT));
        return qnImage;
    }

    public static QNVideoWaterMark toVideoWatermark(Context context, JSONObject watermarkJSON) {
        QNVideoWaterMark watermark = new QNVideoWaterMark(context);
        watermark.setResourcePath(watermarkJSON.getString(Constants.KEY_RESOURCE_PATH).substring(7));
        watermark.setAlpha(watermarkJSON.getIntValue(Constants.KEY_ALPHA));
        watermark.setRelativePosition(watermarkJSON.getFloat(Constants.KEY_X), watermarkJSON.getFloat(Constants.KEY_Y));
        String watermarkSize = watermarkJSON.getString(Constants.KEY_WATERMARK_RELATIVE_SIZE);
        if (QNVideoWaterMark.SIZE.LARGE.name().equals(watermarkSize)) {
            watermark.setRelativeSize(QNVideoWaterMark.SIZE.LARGE);
        } else if (QNVideoWaterMark.SIZE.MEDIUM.name().equals(watermarkSize)) {
            watermark.setRelativeSize(QNVideoWaterMark.SIZE.MEDIUM);
        } else if (QNVideoWaterMark.SIZE.SMALL.name().equals(watermarkSize)) {
            watermark.setRelativeSize(QNVideoWaterMark.SIZE.SMALL);
        }
        return watermark;
    }
}
