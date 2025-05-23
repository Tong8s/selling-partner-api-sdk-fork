/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** The start and end time that specifies the time interval of an event. */
@Schema(description = "The start and end time that specifies the time interval of an event.")
public class TimeWindow {
    @SerializedName("start")
    private OffsetDateTime start = null;

    @SerializedName("end")
    private OffsetDateTime end = null;

    public TimeWindow start(OffsetDateTime start) {
        this.start = start;
        return this;
    }

    /**
     * The start time of the time window.
     *
     * @return start
     */
    @Schema(description = "The start time of the time window.")
    public OffsetDateTime getStart() {
        return start;
    }

    public void setStart(OffsetDateTime start) {
        this.start = start;
    }

    public TimeWindow end(OffsetDateTime end) {
        this.end = end;
        return this;
    }

    /**
     * The end time of the time window.
     *
     * @return end
     */
    @Schema(description = "The end time of the time window.")
    public OffsetDateTime getEnd() {
        return end;
    }

    public void setEnd(OffsetDateTime end) {
        this.end = end;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeWindow timeWindow = (TimeWindow) o;
        return Objects.equals(this.start, timeWindow.start) && Objects.equals(this.end, timeWindow.end);
    }

    @Override
    public int hashCode() {
        return Objects.hash(start, end);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TimeWindow {\n");

        sb.append("    start: ").append(toIndentedString(start)).append("\n");
        sb.append("    end: ").append(toIndentedString(end)).append("\n");
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
