/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.orders.v2021_12_28;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** Dates for the scheduled delivery shipments. */
@Schema(description = "Dates for the scheduled delivery shipments.")
public class ScheduledDeliveryShipment {
    @SerializedName("scheduledDeliveryServiceType")
    private String scheduledDeliveryServiceType = null;

    @SerializedName("earliestNominatedDeliveryDate")
    private OffsetDateTime earliestNominatedDeliveryDate = null;

    @SerializedName("latestNominatedDeliveryDate")
    private OffsetDateTime latestNominatedDeliveryDate = null;

    public ScheduledDeliveryShipment scheduledDeliveryServiceType(String scheduledDeliveryServiceType) {
        this.scheduledDeliveryServiceType = scheduledDeliveryServiceType;
        return this;
    }

    /**
     * Scheduled delivery service type.
     *
     * @return scheduledDeliveryServiceType
     */
    @Schema(description = "Scheduled delivery service type.")
    public String getScheduledDeliveryServiceType() {
        return scheduledDeliveryServiceType;
    }

    public void setScheduledDeliveryServiceType(String scheduledDeliveryServiceType) {
        this.scheduledDeliveryServiceType = scheduledDeliveryServiceType;
    }

    public ScheduledDeliveryShipment earliestNominatedDeliveryDate(OffsetDateTime earliestNominatedDeliveryDate) {
        this.earliestNominatedDeliveryDate = earliestNominatedDeliveryDate;
        return this;
    }

    /**
     * Earliest nominated delivery date for the scheduled delivery.
     *
     * @return earliestNominatedDeliveryDate
     */
    @Schema(description = "Earliest nominated delivery date for the scheduled delivery.")
    public OffsetDateTime getEarliestNominatedDeliveryDate() {
        return earliestNominatedDeliveryDate;
    }

    public void setEarliestNominatedDeliveryDate(OffsetDateTime earliestNominatedDeliveryDate) {
        this.earliestNominatedDeliveryDate = earliestNominatedDeliveryDate;
    }

    public ScheduledDeliveryShipment latestNominatedDeliveryDate(OffsetDateTime latestNominatedDeliveryDate) {
        this.latestNominatedDeliveryDate = latestNominatedDeliveryDate;
        return this;
    }

    /**
     * Latest nominated delivery date for the scheduled delivery.
     *
     * @return latestNominatedDeliveryDate
     */
    @Schema(description = "Latest nominated delivery date for the scheduled delivery.")
    public OffsetDateTime getLatestNominatedDeliveryDate() {
        return latestNominatedDeliveryDate;
    }

    public void setLatestNominatedDeliveryDate(OffsetDateTime latestNominatedDeliveryDate) {
        this.latestNominatedDeliveryDate = latestNominatedDeliveryDate;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ScheduledDeliveryShipment scheduledDeliveryShipment = (ScheduledDeliveryShipment) o;
        return Objects.equals(this.scheduledDeliveryServiceType, scheduledDeliveryShipment.scheduledDeliveryServiceType)
                && Objects.equals(
                        this.earliestNominatedDeliveryDate, scheduledDeliveryShipment.earliestNominatedDeliveryDate)
                && Objects.equals(
                        this.latestNominatedDeliveryDate, scheduledDeliveryShipment.latestNominatedDeliveryDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(scheduledDeliveryServiceType, earliestNominatedDeliveryDate, latestNominatedDeliveryDate);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ScheduledDeliveryShipment {\n");

        sb.append("    scheduledDeliveryServiceType: ")
                .append(toIndentedString(scheduledDeliveryServiceType))
                .append("\n");
        sb.append("    earliestNominatedDeliveryDate: ")
                .append(toIndentedString(earliestNominatedDeliveryDate))
                .append("\n");
        sb.append("    latestNominatedDeliveryDate: ")
                .append(toIndentedString(latestNominatedDeliveryDate))
                .append("\n");
        sb.append("}");
        return sb.toString();
    }

    /** Convert the given object to string with each line indented by 4 spaces (except the first line). */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
