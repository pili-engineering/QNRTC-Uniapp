package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniRemoteAudioTrackStats {
    private final int downlinkBitrate;
    private final int downlinkLostRate;
    private final int uplinkRTT;
    private final int uplinkLostRate;

    public UniRemoteAudioTrackStats(int downlinkBitrate, int downlinkLostRate, int uplinkRTT, int uplinkLostRate) {
        this.downlinkBitrate = downlinkBitrate;
        this.downlinkLostRate = downlinkLostRate;
        this.uplinkRTT = uplinkRTT;
        this.uplinkLostRate = uplinkLostRate;
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
        return "UniRemoteAudioTrackStats{" +
                "downlinkBitrate=" + downlinkBitrate +
                ", downlinkLostRate=" + downlinkLostRate +
                ", uplinkRTT=" + uplinkRTT +
                ", uplinkLostRate=" + uplinkLostRate +
                '}';
    }
}
