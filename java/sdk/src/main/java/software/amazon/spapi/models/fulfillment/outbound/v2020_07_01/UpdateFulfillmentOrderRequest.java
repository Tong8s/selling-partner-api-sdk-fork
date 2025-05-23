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
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** The request body schema for the &#x60;updateFulfillmentOrder&#x60; operation. */
@Schema(description = "The request body schema for the `updateFulfillmentOrder` operation.")
public class UpdateFulfillmentOrderRequest {
    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    @SerializedName("displayableOrderId")
    private String displayableOrderId = null;

    @SerializedName("displayableOrderDate")
    private OffsetDateTime displayableOrderDate = null;

    @SerializedName("displayableOrderComment")
    private String displayableOrderComment = null;

    @SerializedName("shippingSpeedCategory")
    private ShippingSpeedCategory shippingSpeedCategory = null;

    @SerializedName("destinationAddress")
    private Address destinationAddress = null;

    @SerializedName("fulfillmentAction")
    private FulfillmentAction fulfillmentAction = null;

    @SerializedName("fulfillmentPolicy")
    private FulfillmentPolicy fulfillmentPolicy = null;

    @SerializedName("shipFromCountryCode")
    private String shipFromCountryCode = null;

    @SerializedName("notificationEmails")
    private NotificationEmailList notificationEmails = null;

    @SerializedName("featureConstraints")
    private List<FeatureSettings> featureConstraints = null;

    @SerializedName("items")
    private UpdateFulfillmentOrderItemList items = null;

    public UpdateFulfillmentOrderRequest marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * The marketplace the fulfillment order is placed against.
     *
     * @return marketplaceId
     */
    @Schema(description = "The marketplace the fulfillment order is placed against.")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public UpdateFulfillmentOrderRequest displayableOrderId(String displayableOrderId) {
        this.displayableOrderId = displayableOrderId;
        return this;
    }

    /**
     * A fulfillment order identifier that the seller creates. This value displays as the order identifier in
     * recipient-facing materials such as the outbound shipment packing slip. The value of
     * &#x60;DisplayableOrderId&#x60; should match the order identifier that the seller provides to the recipient. The
     * seller can use the &#x60;SellerFulfillmentOrderId&#x60; for this value or they can specify an alternate value if
     * they want the recipient to reference an alternate order identifier.
     *
     * @return displayableOrderId
     */
    @Schema(
            description =
                    "A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of `DisplayableOrderId` should match the order identifier that the seller provides to the recipient. The seller can use the `SellerFulfillmentOrderId` for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.")
    public String getDisplayableOrderId() {
        return displayableOrderId;
    }

    public void setDisplayableOrderId(String displayableOrderId) {
        this.displayableOrderId = displayableOrderId;
    }

    public UpdateFulfillmentOrderRequest displayableOrderDate(OffsetDateTime displayableOrderDate) {
        this.displayableOrderDate = displayableOrderDate;
        return this;
    }

    /**
     * Get displayableOrderDate
     *
     * @return displayableOrderDate
     */
    @Schema(description = "")
    public OffsetDateTime getDisplayableOrderDate() {
        return displayableOrderDate;
    }

    public void setDisplayableOrderDate(OffsetDateTime displayableOrderDate) {
        this.displayableOrderDate = displayableOrderDate;
    }

    public UpdateFulfillmentOrderRequest displayableOrderComment(String displayableOrderComment) {
        this.displayableOrderComment = displayableOrderComment;
        return this;
    }

    /**
     * Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     *
     * @return displayableOrderComment
     */
    @Schema(
            description =
                    "Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.")
    public String getDisplayableOrderComment() {
        return displayableOrderComment;
    }

    public void setDisplayableOrderComment(String displayableOrderComment) {
        this.displayableOrderComment = displayableOrderComment;
    }

    public UpdateFulfillmentOrderRequest shippingSpeedCategory(ShippingSpeedCategory shippingSpeedCategory) {
        this.shippingSpeedCategory = shippingSpeedCategory;
        return this;
    }

    /**
     * Get shippingSpeedCategory
     *
     * @return shippingSpeedCategory
     */
    @Schema(description = "")
    public ShippingSpeedCategory getShippingSpeedCategory() {
        return shippingSpeedCategory;
    }

    public void setShippingSpeedCategory(ShippingSpeedCategory shippingSpeedCategory) {
        this.shippingSpeedCategory = shippingSpeedCategory;
    }

    public UpdateFulfillmentOrderRequest destinationAddress(Address destinationAddress) {
        this.destinationAddress = destinationAddress;
        return this;
    }

    /**
     * Get destinationAddress
     *
     * @return destinationAddress
     */
    @Schema(description = "")
    public Address getDestinationAddress() {
        return destinationAddress;
    }

    public void setDestinationAddress(Address destinationAddress) {
        this.destinationAddress = destinationAddress;
    }

    public UpdateFulfillmentOrderRequest fulfillmentAction(FulfillmentAction fulfillmentAction) {
        this.fulfillmentAction = fulfillmentAction;
        return this;
    }

    /**
     * Get fulfillmentAction
     *
     * @return fulfillmentAction
     */
    @Schema(description = "")
    public FulfillmentAction getFulfillmentAction() {
        return fulfillmentAction;
    }

    public void setFulfillmentAction(FulfillmentAction fulfillmentAction) {
        this.fulfillmentAction = fulfillmentAction;
    }

    public UpdateFulfillmentOrderRequest fulfillmentPolicy(FulfillmentPolicy fulfillmentPolicy) {
        this.fulfillmentPolicy = fulfillmentPolicy;
        return this;
    }

    /**
     * Get fulfillmentPolicy
     *
     * @return fulfillmentPolicy
     */
    @Schema(description = "")
    public FulfillmentPolicy getFulfillmentPolicy() {
        return fulfillmentPolicy;
    }

    public void setFulfillmentPolicy(FulfillmentPolicy fulfillmentPolicy) {
        this.fulfillmentPolicy = fulfillmentPolicy;
    }

    public UpdateFulfillmentOrderRequest shipFromCountryCode(String shipFromCountryCode) {
        this.shipFromCountryCode = shipFromCountryCode;
        return this;
    }

    /**
     * The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1
     * alpha-2 format.
     *
     * @return shipFromCountryCode
     */
    @Schema(
            description =
                    "The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.")
    public String getShipFromCountryCode() {
        return shipFromCountryCode;
    }

    public void setShipFromCountryCode(String shipFromCountryCode) {
        this.shipFromCountryCode = shipFromCountryCode;
    }

    public UpdateFulfillmentOrderRequest notificationEmails(NotificationEmailList notificationEmails) {
        this.notificationEmails = notificationEmails;
        return this;
    }

    /**
     * Get notificationEmails
     *
     * @return notificationEmails
     */
    @Schema(description = "")
    public NotificationEmailList getNotificationEmails() {
        return notificationEmails;
    }

    public void setNotificationEmails(NotificationEmailList notificationEmails) {
        this.notificationEmails = notificationEmails;
    }

    public UpdateFulfillmentOrderRequest featureConstraints(List<FeatureSettings> featureConstraints) {
        this.featureConstraints = featureConstraints;
        return this;
    }

    public UpdateFulfillmentOrderRequest addFeatureConstraintsItem(FeatureSettings featureConstraintsItem) {
        if (this.featureConstraints == null) {
            this.featureConstraints = new ArrayList<FeatureSettings>();
        }
        this.featureConstraints.add(featureConstraintsItem);
        return this;
    }

    /**
     * A list of features and their fulfillment policies to apply to the order.
     *
     * @return featureConstraints
     */
    @Schema(description = "A list of features and their fulfillment policies to apply to the order.")
    public List<FeatureSettings> getFeatureConstraints() {
        return featureConstraints;
    }

    public void setFeatureConstraints(List<FeatureSettings> featureConstraints) {
        this.featureConstraints = featureConstraints;
    }

    public UpdateFulfillmentOrderRequest items(UpdateFulfillmentOrderItemList items) {
        this.items = items;
        return this;
    }

    /**
     * Get items
     *
     * @return items
     */
    @Schema(description = "")
    public UpdateFulfillmentOrderItemList getItems() {
        return items;
    }

    public void setItems(UpdateFulfillmentOrderItemList items) {
        this.items = items;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UpdateFulfillmentOrderRequest updateFulfillmentOrderRequest = (UpdateFulfillmentOrderRequest) o;
        return Objects.equals(this.marketplaceId, updateFulfillmentOrderRequest.marketplaceId)
                && Objects.equals(this.displayableOrderId, updateFulfillmentOrderRequest.displayableOrderId)
                && Objects.equals(this.displayableOrderDate, updateFulfillmentOrderRequest.displayableOrderDate)
                && Objects.equals(this.displayableOrderComment, updateFulfillmentOrderRequest.displayableOrderComment)
                && Objects.equals(this.shippingSpeedCategory, updateFulfillmentOrderRequest.shippingSpeedCategory)
                && Objects.equals(this.destinationAddress, updateFulfillmentOrderRequest.destinationAddress)
                && Objects.equals(this.fulfillmentAction, updateFulfillmentOrderRequest.fulfillmentAction)
                && Objects.equals(this.fulfillmentPolicy, updateFulfillmentOrderRequest.fulfillmentPolicy)
                && Objects.equals(this.shipFromCountryCode, updateFulfillmentOrderRequest.shipFromCountryCode)
                && Objects.equals(this.notificationEmails, updateFulfillmentOrderRequest.notificationEmails)
                && Objects.equals(this.featureConstraints, updateFulfillmentOrderRequest.featureConstraints)
                && Objects.equals(this.items, updateFulfillmentOrderRequest.items);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                marketplaceId,
                displayableOrderId,
                displayableOrderDate,
                displayableOrderComment,
                shippingSpeedCategory,
                destinationAddress,
                fulfillmentAction,
                fulfillmentPolicy,
                shipFromCountryCode,
                notificationEmails,
                featureConstraints,
                items);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class UpdateFulfillmentOrderRequest {\n");

        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    displayableOrderId: ")
                .append(toIndentedString(displayableOrderId))
                .append("\n");
        sb.append("    displayableOrderDate: ")
                .append(toIndentedString(displayableOrderDate))
                .append("\n");
        sb.append("    displayableOrderComment: ")
                .append(toIndentedString(displayableOrderComment))
                .append("\n");
        sb.append("    shippingSpeedCategory: ")
                .append(toIndentedString(shippingSpeedCategory))
                .append("\n");
        sb.append("    destinationAddress: ")
                .append(toIndentedString(destinationAddress))
                .append("\n");
        sb.append("    fulfillmentAction: ")
                .append(toIndentedString(fulfillmentAction))
                .append("\n");
        sb.append("    fulfillmentPolicy: ")
                .append(toIndentedString(fulfillmentPolicy))
                .append("\n");
        sb.append("    shipFromCountryCode: ")
                .append(toIndentedString(shipFromCountryCode))
                .append("\n");
        sb.append("    notificationEmails: ")
                .append(toIndentedString(notificationEmails))
                .append("\n");
        sb.append("    featureConstraints: ")
                .append(toIndentedString(featureConstraints))
                .append("\n");
        sb.append("    items: ").append(toIndentedString(items)).append("\n");
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
