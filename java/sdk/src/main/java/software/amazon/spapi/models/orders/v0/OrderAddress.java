/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.orders.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The shipping address for the order. */
@Schema(description = "The shipping address for the order.")
public class OrderAddress {
    @SerializedName("AmazonOrderId")
    private String amazonOrderId = null;

    @SerializedName("BuyerCompanyName")
    private String buyerCompanyName = null;

    @SerializedName("ShippingAddress")
    private Address shippingAddress = null;

    @SerializedName("DeliveryPreferences")
    private DeliveryPreferences deliveryPreferences = null;

    public OrderAddress amazonOrderId(String amazonOrderId) {
        this.amazonOrderId = amazonOrderId;
        return this;
    }

    /**
     * An Amazon-defined order identifier, in 3-7-7 format.
     *
     * @return amazonOrderId
     */
    @Schema(required = true, description = "An Amazon-defined order identifier, in 3-7-7 format.")
    public String getAmazonOrderId() {
        return amazonOrderId;
    }

    public void setAmazonOrderId(String amazonOrderId) {
        this.amazonOrderId = amazonOrderId;
    }

    public OrderAddress buyerCompanyName(String buyerCompanyName) {
        this.buyerCompanyName = buyerCompanyName;
        return this;
    }

    /**
     * The company name of the contact buyer. For IBA orders, the buyer company must be Amazon entities.
     *
     * @return buyerCompanyName
     */
    @Schema(
            description =
                    "The company name of the contact buyer. For IBA orders, the buyer company must be Amazon entities.")
    public String getBuyerCompanyName() {
        return buyerCompanyName;
    }

    public void setBuyerCompanyName(String buyerCompanyName) {
        this.buyerCompanyName = buyerCompanyName;
    }

    public OrderAddress shippingAddress(Address shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }

    /**
     * Get shippingAddress
     *
     * @return shippingAddress
     */
    @Schema(description = "")
    public Address getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(Address shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public OrderAddress deliveryPreferences(DeliveryPreferences deliveryPreferences) {
        this.deliveryPreferences = deliveryPreferences;
        return this;
    }

    /**
     * Get deliveryPreferences
     *
     * @return deliveryPreferences
     */
    @Schema(description = "")
    public DeliveryPreferences getDeliveryPreferences() {
        return deliveryPreferences;
    }

    public void setDeliveryPreferences(DeliveryPreferences deliveryPreferences) {
        this.deliveryPreferences = deliveryPreferences;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OrderAddress orderAddress = (OrderAddress) o;
        return Objects.equals(this.amazonOrderId, orderAddress.amazonOrderId)
                && Objects.equals(this.buyerCompanyName, orderAddress.buyerCompanyName)
                && Objects.equals(this.shippingAddress, orderAddress.shippingAddress)
                && Objects.equals(this.deliveryPreferences, orderAddress.deliveryPreferences);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amazonOrderId, buyerCompanyName, shippingAddress, deliveryPreferences);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OrderAddress {\n");

        sb.append("    amazonOrderId: ").append(toIndentedString(amazonOrderId)).append("\n");
        sb.append("    buyerCompanyName: ")
                .append(toIndentedString(buyerCompanyName))
                .append("\n");
        sb.append("    shippingAddress: ")
                .append(toIndentedString(shippingAddress))
                .append("\n");
        sb.append("    deliveryPreferences: ")
                .append(toIndentedString(deliveryPreferences))
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
