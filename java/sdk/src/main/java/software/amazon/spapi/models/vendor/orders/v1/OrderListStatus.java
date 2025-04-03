/*
 * Selling Partner API for Retail Procurement Orders
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.orders.v1;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** A list of order statuses. */
@Schema(description = "A list of order statuses.")
public class OrderListStatus {
    @SerializedName("pagination")
    private Pagination pagination = null;

    @SerializedName("ordersStatus")
    private List<OrderStatus> ordersStatus = null;

    public OrderListStatus pagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }

    /**
     * Get pagination
     *
     * @return pagination
     */
    @Schema(description = "")
    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    public OrderListStatus ordersStatus(List<OrderStatus> ordersStatus) {
        this.ordersStatus = ordersStatus;
        return this;
    }

    public OrderListStatus addOrdersStatusItem(OrderStatus ordersStatusItem) {
        if (this.ordersStatus == null) {
            this.ordersStatus = new ArrayList<OrderStatus>();
        }
        this.ordersStatus.add(ordersStatusItem);
        return this;
    }

    /**
     * Represents an order status within the OrderListStatus.
     *
     * @return ordersStatus
     */
    @Schema(description = "Represents an order status within the OrderListStatus.")
    public List<OrderStatus> getOrdersStatus() {
        return ordersStatus;
    }

    public void setOrdersStatus(List<OrderStatus> ordersStatus) {
        this.ordersStatus = ordersStatus;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OrderListStatus orderListStatus = (OrderListStatus) o;
        return Objects.equals(this.pagination, orderListStatus.pagination)
                && Objects.equals(this.ordersStatus, orderListStatus.ordersStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pagination, ordersStatus);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OrderListStatus {\n");

        sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
        sb.append("    ordersStatus: ").append(toIndentedString(ordersStatus)).append("\n");
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
