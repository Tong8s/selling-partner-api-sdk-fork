/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * OpenAPI spec version: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.awd.v2024_05_09;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** Represents an AWD inbound order. */
@Schema(description = "Represents an AWD inbound order.")
public class InboundOrder {
    @SerializedName("createdAt")
    private OffsetDateTime createdAt = null;

    @SerializedName("destinationDetails")
    private DestinationDetails destinationDetails = null;

    @SerializedName("externalReferenceId")
    private String externalReferenceId = null;

    @SerializedName("orderId")
    private String orderId = null;

    @SerializedName("orderStatus")
    private InboundStatus orderStatus = null;

    @SerializedName("originAddress")
    private Address originAddress = null;

    @SerializedName("packagesToInbound")
    private List<DistributionPackageQuantity> packagesToInbound = new ArrayList<DistributionPackageQuantity>();

    @SerializedName("preferences")
    private InboundPreferences preferences = null;

    @SerializedName("updatedAt")
    private OffsetDateTime updatedAt = null;

    public InboundOrder createdAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    /**
     * Date when this order was created.
     *
     * @return createdAt
     */
    @Schema(required = true, description = "Date when this order was created.")
    public OffsetDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public InboundOrder destinationDetails(DestinationDetails destinationDetails) {
        this.destinationDetails = destinationDetails;
        return this;
    }

    /**
     * Get destinationDetails
     *
     * @return destinationDetails
     */
    @Schema(description = "")
    public DestinationDetails getDestinationDetails() {
        return destinationDetails;
    }

    public void setDestinationDetails(DestinationDetails destinationDetails) {
        this.destinationDetails = destinationDetails;
    }

    public InboundOrder externalReferenceId(String externalReferenceId) {
        this.externalReferenceId = externalReferenceId;
        return this;
    }

    /**
     * Reference ID that can be used to correlate the order with partner resources.
     *
     * @return externalReferenceId
     */
    @Schema(
            example = "TestReferenceId",
            description = "Reference ID that can be used to correlate the order with partner resources.")
    public String getExternalReferenceId() {
        return externalReferenceId;
    }

    public void setExternalReferenceId(String externalReferenceId) {
        this.externalReferenceId = externalReferenceId;
    }

    public InboundOrder orderId(String orderId) {
        this.orderId = orderId;
        return this;
    }

    /**
     * Inbound order ID.
     *
     * @return orderId
     */
    @Schema(required = true, description = "Inbound order ID.")
    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public InboundOrder orderStatus(InboundStatus orderStatus) {
        this.orderStatus = orderStatus;
        return this;
    }

    /**
     * Get orderStatus
     *
     * @return orderStatus
     */
    @Schema(required = true, description = "")
    public InboundStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(InboundStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public InboundOrder originAddress(Address originAddress) {
        this.originAddress = originAddress;
        return this;
    }

    /**
     * Get originAddress
     *
     * @return originAddress
     */
    @Schema(required = true, description = "")
    public Address getOriginAddress() {
        return originAddress;
    }

    public void setOriginAddress(Address originAddress) {
        this.originAddress = originAddress;
    }

    public InboundOrder packagesToInbound(List<DistributionPackageQuantity> packagesToInbound) {
        this.packagesToInbound = packagesToInbound;
        return this;
    }

    public InboundOrder addPackagesToInboundItem(DistributionPackageQuantity packagesToInboundItem) {
        this.packagesToInbound.add(packagesToInboundItem);
        return this;
    }

    /**
     * List of packages to be inbounded.
     *
     * @return packagesToInbound
     */
    @Schema(required = true, description = "List of packages to be inbounded.")
    public List<DistributionPackageQuantity> getPackagesToInbound() {
        return packagesToInbound;
    }

    public void setPackagesToInbound(List<DistributionPackageQuantity> packagesToInbound) {
        this.packagesToInbound = packagesToInbound;
    }

    public InboundOrder preferences(InboundPreferences preferences) {
        this.preferences = preferences;
        return this;
    }

    /**
     * Get preferences
     *
     * @return preferences
     */
    @Schema(description = "")
    public InboundPreferences getPreferences() {
        return preferences;
    }

    public void setPreferences(InboundPreferences preferences) {
        this.preferences = preferences;
    }

    public InboundOrder updatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }

    /**
     * Date when this order was last updated.
     *
     * @return updatedAt
     */
    @Schema(description = "Date when this order was last updated.")
    public OffsetDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InboundOrder inboundOrder = (InboundOrder) o;
        return Objects.equals(this.createdAt, inboundOrder.createdAt)
                && Objects.equals(this.destinationDetails, inboundOrder.destinationDetails)
                && Objects.equals(this.externalReferenceId, inboundOrder.externalReferenceId)
                && Objects.equals(this.orderId, inboundOrder.orderId)
                && Objects.equals(this.orderStatus, inboundOrder.orderStatus)
                && Objects.equals(this.originAddress, inboundOrder.originAddress)
                && Objects.equals(this.packagesToInbound, inboundOrder.packagesToInbound)
                && Objects.equals(this.preferences, inboundOrder.preferences)
                && Objects.equals(this.updatedAt, inboundOrder.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                createdAt,
                destinationDetails,
                externalReferenceId,
                orderId,
                orderStatus,
                originAddress,
                packagesToInbound,
                preferences,
                updatedAt);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class InboundOrder {\n");

        sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
        sb.append("    destinationDetails: ")
                .append(toIndentedString(destinationDetails))
                .append("\n");
        sb.append("    externalReferenceId: ")
                .append(toIndentedString(externalReferenceId))
                .append("\n");
        sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
        sb.append("    orderStatus: ").append(toIndentedString(orderStatus)).append("\n");
        sb.append("    originAddress: ").append(toIndentedString(originAddress)).append("\n");
        sb.append("    packagesToInbound: ")
                .append(toIndentedString(packagesToInbound))
                .append("\n");
        sb.append("    preferences: ").append(toIndentedString(preferences)).append("\n");
        sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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
