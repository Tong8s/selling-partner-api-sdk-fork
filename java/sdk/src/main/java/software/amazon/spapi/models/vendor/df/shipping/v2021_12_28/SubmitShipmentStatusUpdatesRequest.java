/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.shipping.v2021_12_28;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** The request schema for the &#x60;submitShipmentStatusUpdates&#x60; operation. */
@Schema(description = "The request schema for the `submitShipmentStatusUpdates` operation.")
public class SubmitShipmentStatusUpdatesRequest {
    @SerializedName("shipmentStatusUpdates")
    private List<ShipmentStatusUpdate> shipmentStatusUpdates = null;

    public SubmitShipmentStatusUpdatesRequest shipmentStatusUpdates(List<ShipmentStatusUpdate> shipmentStatusUpdates) {
        this.shipmentStatusUpdates = shipmentStatusUpdates;
        return this;
    }

    public SubmitShipmentStatusUpdatesRequest addShipmentStatusUpdatesItem(
            ShipmentStatusUpdate shipmentStatusUpdatesItem) {
        if (this.shipmentStatusUpdates == null) {
            this.shipmentStatusUpdates = new ArrayList<ShipmentStatusUpdate>();
        }
        this.shipmentStatusUpdates.add(shipmentStatusUpdatesItem);
        return this;
    }

    /**
     * Contains a list of one or more &#x60;ShipmentStatusUpdate&#x60; objects. Each &#x60;ShipmentStatusUpdate&#x60;
     * object represents an update to the status of a specific shipment.
     *
     * @return shipmentStatusUpdates
     */
    @Schema(
            description =
                    "Contains a list of one or more `ShipmentStatusUpdate` objects. Each `ShipmentStatusUpdate` object represents an update to the status of a specific shipment.")
    public List<ShipmentStatusUpdate> getShipmentStatusUpdates() {
        return shipmentStatusUpdates;
    }

    public void setShipmentStatusUpdates(List<ShipmentStatusUpdate> shipmentStatusUpdates) {
        this.shipmentStatusUpdates = shipmentStatusUpdates;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SubmitShipmentStatusUpdatesRequest submitShipmentStatusUpdatesRequest = (SubmitShipmentStatusUpdatesRequest) o;
        return Objects.equals(this.shipmentStatusUpdates, submitShipmentStatusUpdatesRequest.shipmentStatusUpdates);
    }

    @Override
    public int hashCode() {
        return Objects.hash(shipmentStatusUpdates);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class SubmitShipmentStatusUpdatesRequest {\n");

        sb.append("    shipmentStatusUpdates: ")
                .append(toIndentedString(shipmentStatusUpdates))
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
