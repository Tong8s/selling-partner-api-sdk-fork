/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/**
 * Contains details for a transportation carrier appointment. This appointment is vended out by Amazon and is an
 * indicator for when a transportation carrier is accepting shipments to be picked up.
 */
@Schema(
        description =
                "Contains details for a transportation carrier appointment. This appointment is vended out by Amazon and is an indicator for when a transportation carrier is accepting shipments to be picked up.")
public class CarrierAppointment {
    @SerializedName("endTime")
    private OffsetDateTime endTime = null;

    @SerializedName("startTime")
    private OffsetDateTime startTime = null;

    public CarrierAppointment endTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }

    /**
     * The end timestamp of the appointment in UTC.
     *
     * @return endTime
     */
    @Schema(required = true, description = "The end timestamp of the appointment in UTC.")
    public OffsetDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
    }

    public CarrierAppointment startTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }

    /**
     * The start timestamp of the appointment in UTC.
     *
     * @return startTime
     */
    @Schema(required = true, description = "The start timestamp of the appointment in UTC.")
    public OffsetDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CarrierAppointment carrierAppointment = (CarrierAppointment) o;
        return Objects.equals(this.endTime, carrierAppointment.endTime)
                && Objects.equals(this.startTime, carrierAppointment.startTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(endTime, startTime);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CarrierAppointment {\n");

        sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
        sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
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
