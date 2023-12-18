package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniRemoteVideoTrackStats {
    private final String profile;
    private final int downlinkFrameRate;
    private final int downlinkBitrate;
    private final int downlinkLostRate;
    private final int uplinkRTT;
    private final int uplinkLostRate;
    private final int uplinkFrameWidth;
    private final int uplinkFrameHeight;

    public UniRemoteVideoTrackStats(String profile, int downlinkFrameRate, int downlinkBitrate, int downlinkLostRate, int uplinkRTT, int uplinkLostRate, int uplinkFrameWidth, int uplinkFrameHeight) {
        this.profile = profile;
        this.downlinkFrameRate = downlinkFrameRate;
        this.downlinkBitrate = downlinkBitrate;
        this.downlinkLostRate = downlinkLostRate;
        this.uplinkRTT = uplinkRTT;
        this.uplinkLostRate = uplinkLostRate;
        this.uplinkFrameWidth = uplinkFrameWidth;
        this.uplinkFrameHeight = uplinkFrameHeight;
    }

    public String getProfile() {
        return profile;
    }

    public int getDownlinkFrameRate() {
        return downlinkFrameRate;
    }

    public int getDownlinkBitrate() {
        return downlinkBitrate;
    }

    public int getDownlinkLostRate() {
        return downlinkLostRate;
    }

    public int getUplinkRTT() {
        return uplinkRTT;
    }

    public int getUplinkLostRate() {
        return uplinkLostRate;
    }

    public int getUplinkFrameWidth() { return uplinkFrameWidth; }

    public int getUplinkFrameHeight() { return uplinkFrameHeight; }

    @Override
    public String toString() {
        return "UniRemoteVideoTrackStats{" +
                "profile='" + profile + '\'' +
                ", downlinkFrameRate=" + downlinkFrameRate +
                ", downlinkBitrate=" + downlinkBitrate +
                ", downlinkLostRate=" + downlinkLostRate +
                ", uplinkRTT=" + uplinkRTT +
                ", uplinkLostRate=" + uplinkLostRate +
                ", uplinkFrameWidth=" + uplinkFrameWidth +
                ", uplinkFrameHeight=" + uplinkFrameHeight +
                '}';
    }
}
