/*
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * OpenAPI spec version: 2022-03-23
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.easyship.v2022_03_23;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** The request body for the POST /easyShip/2022-03-23/packages/bulk API. */
@Schema(description = "The request body for the POST /easyShip/2022-03-23/packages/bulk API.")
public class CreateScheduledPackagesRequest {
    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    @SerializedName("orderScheduleDetailsList")
    private List<OrderScheduleDetails> orderScheduleDetailsList = new ArrayList<OrderScheduleDetails>();

    @SerializedName("labelFormat")
    private LabelFormat labelFormat = null;

    public CreateScheduledPackagesRequest marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * Get marketplaceId
     *
     * @return marketplaceId
     */
    @Schema(required = true, description = "")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public CreateScheduledPackagesRequest orderScheduleDetailsList(
            List<OrderScheduleDetails> orderScheduleDetailsList) {
        this.orderScheduleDetailsList = orderScheduleDetailsList;
        return this;
    }

    public CreateScheduledPackagesRequest addOrderScheduleDetailsListItem(
            OrderScheduleDetails orderScheduleDetailsListItem) {
        this.orderScheduleDetailsList.add(orderScheduleDetailsListItem);
        return this;
    }

    /**
     * An array allowing users to specify orders to be scheduled.
     *
     * @return orderScheduleDetailsList
     */
    @Schema(required = true, description = "An array allowing users to specify orders to be scheduled.")
    public List<OrderScheduleDetails> getOrderScheduleDetailsList() {
        return orderScheduleDetailsList;
    }

    public void setOrderScheduleDetailsList(List<OrderScheduleDetails> orderScheduleDetailsList) {
        this.orderScheduleDetailsList = orderScheduleDetailsList;
    }

    public CreateScheduledPackagesRequest labelFormat(LabelFormat labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }

    /**
     * Get labelFormat
     *
     * @return labelFormat
     */
    @Schema(required = true, description = "")
    public LabelFormat getLabelFormat() {
        return labelFormat;
    }

    public void setLabelFormat(LabelFormat labelFormat) {
        this.labelFormat = labelFormat;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CreateScheduledPackagesRequest createScheduledPackagesRequest = (CreateScheduledPackagesRequest) o;
        return Objects.equals(this.marketplaceId, createScheduledPackagesRequest.marketplaceId)
                && Objects.equals(
                        this.orderScheduleDetailsList, createScheduledPackagesRequest.orderScheduleDetailsList)
                && Objects.equals(this.labelFormat, createScheduledPackagesRequest.labelFormat);
    }

    @Override
    public int hashCode() {
        return Objects.hash(marketplaceId, orderScheduleDetailsList, labelFormat);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CreateScheduledPackagesRequest {\n");

        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    orderScheduleDetailsList: ")
                .append(toIndentedString(orderScheduleDetailsList))
                .append("\n");
        sb.append("    labelFormat: ").append(toIndentedString(labelFormat)).append("\n");
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
