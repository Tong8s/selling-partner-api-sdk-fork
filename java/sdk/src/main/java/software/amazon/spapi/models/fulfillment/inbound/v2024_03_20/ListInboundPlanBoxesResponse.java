/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** The &#x60;listInboundPlanBoxes&#x60; response. */
@Schema(description = "The `listInboundPlanBoxes` response.")
public class ListInboundPlanBoxesResponse {
    @SerializedName("boxes")
    private List<Box> boxes = new ArrayList<Box>();

    @SerializedName("pagination")
    private Pagination pagination = null;

    public ListInboundPlanBoxesResponse boxes(List<Box> boxes) {
        this.boxes = boxes;
        return this;
    }

    public ListInboundPlanBoxesResponse addBoxesItem(Box boxesItem) {
        this.boxes.add(boxesItem);
        return this;
    }

    /**
     * A list of boxes in an inbound plan.
     *
     * @return boxes
     */
    @Schema(required = true, description = "A list of boxes in an inbound plan.")
    public List<Box> getBoxes() {
        return boxes;
    }

    public void setBoxes(List<Box> boxes) {
        this.boxes = boxes;
    }

    public ListInboundPlanBoxesResponse pagination(Pagination pagination) {
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

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ListInboundPlanBoxesResponse listInboundPlanBoxesResponse = (ListInboundPlanBoxesResponse) o;
        return Objects.equals(this.boxes, listInboundPlanBoxesResponse.boxes)
                && Objects.equals(this.pagination, listInboundPlanBoxesResponse.pagination);
    }

    @Override
    public int hashCode() {
        return Objects.hash(boxes, pagination);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ListInboundPlanBoxesResponse {\n");

        sb.append("    boxes: ").append(toIndentedString(boxes)).append("\n");
        sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
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
