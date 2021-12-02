package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniLocalAudioTrackStats {
    private final int uplinkBitrate;
    private final int uplinkRTT;
    private final int uplinkLostRate;

    public UniLocalAudioTrackStats(int uplinkBitrate, int uplinkRTT, int uplinkLostRate) {
        this.uplinkBitrate = uplinkBitrate;
        this.uplinkRTT = uplinkRTT;
        this.uplinkLostRate = uplinkLostRate;
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
        return "UniLocalAudioTrackStats{" +
                "uplinkBitrate=" + uplinkBitrate +
                ", uplinkRTT=" + uplinkRTT +
                ", uplinkLostRate=" + uplinkLostRate +
                '}';
    }
}
