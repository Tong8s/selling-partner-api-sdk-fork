/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.shipments.v1;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** A list of one or more ShipmentLabels. */
@Schema(description = "A list of one or more ShipmentLabels.")
public class TransportLabel {
    @SerializedName("labelCreateDateTime")
    private OffsetDateTime labelCreateDateTime = null;

    @SerializedName("shipmentInformation")
    private ShipmentInformation shipmentInformation = null;

    @SerializedName("labelData")
    private List<LabelData> labelData = null;

    public TransportLabel labelCreateDateTime(OffsetDateTime labelCreateDateTime) {
        this.labelCreateDateTime = labelCreateDateTime;
        return this;
    }

    /**
     * Date on which label is created.
     *
     * @return labelCreateDateTime
     */
    @Schema(description = "Date on which label is created.")
    public OffsetDateTime getLabelCreateDateTime() {
        return labelCreateDateTime;
    }

    public void setLabelCreateDateTime(OffsetDateTime labelCreateDateTime) {
        this.labelCreateDateTime = labelCreateDateTime;
    }

    public TransportLabel shipmentInformation(ShipmentInformation shipmentInformation) {
        this.shipmentInformation = shipmentInformation;
        return this;
    }

    /**
     * Get shipmentInformation
     *
     * @return shipmentInformation
     */
    @Schema(description = "")
    public ShipmentInformation getShipmentInformation() {
        return shipmentInformation;
    }

    public void setShipmentInformation(ShipmentInformation shipmentInformation) {
        this.shipmentInformation = shipmentInformation;
    }

    public TransportLabel labelData(List<LabelData> labelData) {
        this.labelData = labelData;
        return this;
    }

    public TransportLabel addLabelDataItem(LabelData labelDataItem) {
        if (this.labelData == null) {
            this.labelData = new ArrayList<LabelData>();
        }
        this.labelData.add(labelDataItem);
        return this;
    }

    /**
     * Indicates the label data,format and type associated .
     *
     * @return labelData
     */
    @Schema(description = "Indicates the label data,format and type associated .")
    public List<LabelData> getLabelData() {
        return labelData;
    }

    public void setLabelData(List<LabelData> labelData) {
        this.labelData = labelData;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TransportLabel transportLabel = (TransportLabel) o;
        return Objects.equals(this.labelCreateDateTime, transportLabel.labelCreateDateTime)
                && Objects.equals(this.shipmentInformation, transportLabel.shipmentInformation)
                && Objects.equals(this.labelData, transportLabel.labelData);
    }

    @Override
    public int hashCode() {
        return Objects.hash(labelCreateDateTime, shipmentInformation, labelData);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TransportLabel {\n");

        sb.append("    labelCreateDateTime: ")
                .append(toIndentedString(labelCreateDateTime))
                .append("\n");
        sb.append("    shipmentInformation: ")
                .append(toIndentedString(shipmentInformation))
                .append("\n");
        sb.append("    labelData: ").append(toIndentedString(labelData)).append("\n");
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
