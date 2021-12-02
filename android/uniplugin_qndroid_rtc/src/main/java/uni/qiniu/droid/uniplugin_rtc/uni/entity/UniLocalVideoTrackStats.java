package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniLocalVideoTrackStats {
    private final String profile;
    private final int uplinkFrameRate;
    private final int uplinkBitrate;
    private final int uplinkRTT;
    private final int uplinkLostRate;

    public UniLocalVideoTrackStats(String profile, int uplinkFrameRate, int uplinkBitrate, int uplinkRTT, int uplinkLostRate) {
        this.profile = profile;
        this.uplinkFrameRate = uplinkFrameRate;
        this.uplinkBitrate = uplinkBitrate;
        this.uplinkRTT = uplinkRTT;
        this.uplinkLostRate = uplinkLostRate;
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

    @Override
    public String toString() {
        return "UniLocalVideoTrackStats{" +
                "profile='" + profile + '\'' +
                ", uplinkFrameRate=" + uplinkFrameRate +
                ", uplinkBitrate=" + uplinkBitrate +
                ", uplinkRTT=" + uplinkRTT +
                ", uplinkLostRate=" + uplinkLostRate +
                '}';
    }
}
