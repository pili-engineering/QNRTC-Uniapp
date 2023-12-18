package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniLocalVideoTrackStats {
    private final String profile;
    private final int uplinkFrameRate;
    private final int uplinkBitrate;
    private final int uplinkRTT;
    private final int uplinkLostRate;
    private final int uplinkFrameWidth;
    private final int uplinkFrameHeight;
    private final int captureFrameRate;
    private final int captureFrameWidth;
    private final int captureFrameHeight;
    private final int targetFrameRate;
    private final int targetFrameWidth;
    private final int targetFrameHeight;

    public UniLocalVideoTrackStats(String profile, int uplinkFrameRate, int uplinkBitrate, int uplinkRTT, int uplinkLostRate, int uplinkFrameWidth, int uplinkFrameHeight, int captureFrameRate, int captureFrameWidth, int captureFrameHeight, int targetFrameRate, int targetFrameWidth, int targetFrameHeight) {
        this.profile = profile;
        this.uplinkFrameRate = uplinkFrameRate;
        this.uplinkBitrate = uplinkBitrate;
        this.uplinkRTT = uplinkRTT;
        this.uplinkLostRate = uplinkLostRate;
        this.uplinkFrameWidth = uplinkFrameWidth;
        this.uplinkFrameHeight = uplinkFrameHeight;
        this.captureFrameRate = captureFrameRate;
        this.captureFrameWidth = captureFrameWidth;
        this.captureFrameHeight = captureFrameHeight;
        this.targetFrameRate = targetFrameRate;
        this.targetFrameWidth = targetFrameWidth;
        this.targetFrameHeight = targetFrameHeight;
    }

    public String getProfile() {
        return profile;
    }

    public int getUplinkFrameRate() {
        return uplinkFrameRate;
    }

    public int getUplinkBitrate() {
        return uplinkBitrate;
    }

    public int getUplinkRTT() {
        return uplinkRTT;
    }

    public int getUplinkLostRate() {
        return uplinkLostRate;
    }

    public int getUplinkFrameWidth() { return uplinkFrameWidth; }

    public int getUplinkFrameHeight() {
        return uplinkFrameHeight;
    }

    public int getCaptureFrameRate() {
        return captureFrameRate;
    }

    public int getCaptureFrameWidth() {
        return captureFrameWidth;
    }

    public int getCaptureFrameHeight() {
        return captureFrameHeight;
    }

    public int getTargetFrameRate() {
        return targetFrameRate;
    }

    public int getTargetFrameWidth() {
        return targetFrameWidth;
    }

    public int getTargetFrameHeight() {
        return targetFrameHeight;
    }

    @Override
    public String toString() {
        return "UniLocalVideoTrackStats{" +
                "profile='" + profile + '\'' +
                ", uplinkFrameRate=" + uplinkFrameRate +
                ", uplinkBitrate=" + uplinkBitrate +
                ", uplinkRTT=" + uplinkRTT +
                ", uplinkLostRate=" + uplinkLostRate +
                ", uplinkFrameWidth=" + uplinkFrameWidth +
                ", uplinkFrameHeight=" + uplinkFrameHeight +
                ", captureFrameRate=" + captureFrameRate +
                ", captureFrameWidth=" + captureFrameWidth +
                ", captureFrameHeight=" + captureFrameHeight +
                ", targetFrameRate=" + targetFrameRate +
                ", targetFrameWidth=" + targetFrameWidth +
                ", targetFrameHeight=" + targetFrameHeight +
                '}';
    }
}
