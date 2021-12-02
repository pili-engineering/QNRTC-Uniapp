package uni.qiniu.droid.uniplugin_rtc.uni.entity;

public class UniNetworkQuality {
    private final String uplinkNetworkGrade;
    private final String downlinkNetworkGrade;

    public UniNetworkQuality(String uplinkNetworkGrade, String downlinkNetworkGrade) {
        this.uplinkNetworkGrade = uplinkNetworkGrade;
        this.downlinkNetworkGrade = downlinkNetworkGrade;
    }

    public String getUplinkNetworkGrade() {
        return uplinkNetworkGrade;
    }

    public String getDownlinkNetworkGrade() {
        return downlinkNetworkGrade;
    }

    @Override
    public String toString() {
        return "UniNetworkQuality{" +
                "uplinkNetworkGrade='" + uplinkNetworkGrade + '\'' +
                ", downlinkNetworkGrade='" + downlinkNetworkGrade + '\'' +
                '}';
    }
}
