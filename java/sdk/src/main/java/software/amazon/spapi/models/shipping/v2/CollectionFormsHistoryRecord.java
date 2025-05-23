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

/** Active Account Details */
@Schema(description = "Active Account Details")
public class CollectionFormsHistoryRecord {
    @SerializedName("carrierName")
    private String carrierName = null;

    @SerializedName("creationDate")
    private String creationDate = null;

    @SerializedName("generationStatus")
    private GenerationStatus generationStatus = null;

    @SerializedName("collectionFormId")
    private String collectionFormId = null;

    @SerializedName("shipFromAddress")
    private Address shipFromAddress = null;

    public CollectionFormsHistoryRecord carrierName(String carrierName) {
        this.carrierName = carrierName;
        return this;
    }

    /**
     * Get carrierName
     *
     * @return carrierName
     */
    @Schema(description = "")
    public String getCarrierName() {
        return carrierName;
    }

    public void setCarrierName(String carrierName) {
        this.carrierName = carrierName;
    }

    public CollectionFormsHistoryRecord creationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }

    /**
     * Creation Time for this account.
     *
     * @return creationDate
     */
    @Schema(description = "Creation Time for this account.")
    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public CollectionFormsHistoryRecord generationStatus(GenerationStatus generationStatus) {
        this.generationStatus = generationStatus;
        return this;
    }

    /**
     * Get generationStatus
     *
     * @return generationStatus
     */
    @Schema(description = "")
    public GenerationStatus getGenerationStatus() {
        return generationStatus;
    }

    public void setGenerationStatus(GenerationStatus generationStatus) {
        this.generationStatus = generationStatus;
    }

    public CollectionFormsHistoryRecord collectionFormId(String collectionFormId) {
        this.collectionFormId = collectionFormId;
        return this;
    }

    /**
     * Get collectionFormId
     *
     * @return collectionFormId
     */
    @Schema(description = "")
    public String getCollectionFormId() {
        return collectionFormId;
    }

    public void setCollectionFormId(String collectionFormId) {
        this.collectionFormId = collectionFormId;
    }

    public CollectionFormsHistoryRecord shipFromAddress(Address shipFromAddress) {
        this.shipFromAddress = shipFromAddress;
        return this;
    }

    /**
     * Get shipFromAddress
     *
     * @return shipFromAddress
     */
    @Schema(description = "")
    public Address getShipFromAddress() {
        return shipFromAddress;
    }

    public void setShipFromAddress(Address shipFromAddress) {
        this.shipFromAddress = shipFromAddress;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CollectionFormsHistoryRecord collectionFormsHistoryRecord = (CollectionFormsHistoryRecord) o;
        return Objects.equals(this.carrierName, collectionFormsHistoryRecord.carrierName)
                && Objects.equals(this.creationDate, collectionFormsHistoryRecord.creationDate)
                && Objects.equals(this.generationStatus, collectionFormsHistoryRecord.generationStatus)
                && Objects.equals(this.collectionFormId, collectionFormsHistoryRecord.collectionFormId)
                && Objects.equals(this.shipFromAddress, collectionFormsHistoryRecord.shipFromAddress);
    }

    @Override
    public int hashCode() {
        return Objects.hash(carrierName, creationDate, generationStatus, collectionFormId, shipFromAddress);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CollectionFormsHistoryRecord {\n");

        sb.append("    carrierName: ").append(toIndentedString(carrierName)).append("\n");
        sb.append("    creationDate: ").append(toIndentedString(creationDate)).append("\n");
        sb.append("    generationStatus: ")
                .append(toIndentedString(generationStatus))
                .append("\n");
        sb.append("    collectionFormId: ")
                .append(toIndentedString(collectionFormId))
                .append("\n");
        sb.append("    shipFromAddress: ")
                .append(toIndentedString(shipFromAddress))
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
