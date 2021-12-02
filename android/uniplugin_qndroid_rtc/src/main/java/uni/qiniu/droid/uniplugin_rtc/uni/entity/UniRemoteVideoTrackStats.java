package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniRemoteVideoTrackStats {
    private final String profile;
    private final int downlinkFrameRate;
    private final int downlinkBitrate;
    private final int downlinkLostRate;
    private final int uplinkRTT;
    private final int uplinkLostRate;

    public UniRemoteVideoTrackStats(String profile, int downlinkFrameRate, int downlinkBitrate, int downlinkLostRate, int uplinkRTT, int uplinkLostRate) {
        this.profile = profile;
        this.downlinkFrameRate = downlinkFrameRate;
        this.downlinkBitrate = downlinkBitrate;
        this.downlinkLostRate = downlinkLostRate;
        this.uplinkRTT = uplinkRTT;
        this.uplinkLostRate = uplinkLostRate;
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

    @Override
    public String toString() {
        return "UniRemoteVideoTrackStats{" +
                "profile='" + profile + '\'' +
                ", downlinkFrameRate=" + downlinkFrameRate +
                ", downlinkBitrate=" + downlinkBitrate +
                ", downlinkLostRate=" + downlinkLostRate +
                ", uplinkRTT=" + uplinkRTT +
                ", uplinkLostRate=" + uplinkLostRate +
                '}';
    }
}
