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

/** Represents a purchase order. */
@Schema(description = "Represents a purchase order.")
public class Order {
    @SerializedName("purchaseOrderNumber")
    private String purchaseOrderNumber = null;

    @SerializedName("orderDetails")
    private OrderDetails orderDetails = null;

    public Order purchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }

    /**
     * The purchase order number for this order. Formatting Notes: alpha-numeric code.
     *
     * @return purchaseOrderNumber
     */
    @Schema(
            required = true,
            description = "The purchase order number for this order. Formatting Notes: alpha-numeric code.")
    public String getPurchaseOrderNumber() {
        return purchaseOrderNumber;
    }

    public void setPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
    }

    public Order orderDetails(OrderDetails orderDetails) {
        this.orderDetails = orderDetails;
        return this;
    }

    /**
     * Get orderDetails
     *
     * @return orderDetails
     */
    @Schema(description = "")
    public OrderDetails getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(OrderDetails orderDetails) {
        this.orderDetails = orderDetails;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Order order = (Order) o;
        return Objects.equals(this.purchaseOrderNumber, order.purchaseOrderNumber)
                && Objects.equals(this.orderDetails, order.orderDetails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(purchaseOrderNumber, orderDetails);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Order {\n");

        sb.append("    purchaseOrderNumber: ")
                .append(toIndentedString(purchaseOrderNumber))
                .append("\n");
        sb.append("    orderDetails: ").append(toIndentedString(orderDetails)).append("\n");
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
