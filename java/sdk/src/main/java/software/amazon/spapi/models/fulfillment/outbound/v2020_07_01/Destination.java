/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.outbound.v2020_07_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The destination for the delivery offer. */
@Schema(description = "The destination for the delivery offer.")
public class Destination {
    @SerializedName("deliveryAddress")
    private VariablePrecisionAddress deliveryAddress = null;

    @SerializedName("ipAddress")
    private String ipAddress = null;

    public Destination deliveryAddress(VariablePrecisionAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
        return this;
    }

    /**
     * Get deliveryAddress
     *
     * @return deliveryAddress
     */
    @Schema(description = "")
    public VariablePrecisionAddress getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(VariablePrecisionAddress deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Destination ipAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }

    /**
     * Get ipAddress
     *
     * @return ipAddress
     */
    @Schema(description = "")
    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Destination destination = (Destination) o;
        return Objects.equals(this.deliveryAddress, destination.deliveryAddress)
                && Objects.equals(this.ipAddress, destination.ipAddress);
    }

    @Override
    public int hashCode() {
        return Objects.hash(deliveryAddress, ipAddress);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Destination {\n");

        sb.append("    deliveryAddress: ")
                .append(toIndentedString(deliveryAddress))
                .append("\n");
        sb.append("    ipAddress: ").append(toIndentedString(ipAddress)).append("\n");
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
