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
import java.util.Objects;

/** The &#x60;updateInboundPlanName&#x60; request. */
@Schema(description = "The `updateInboundPlanName` request.")
public class UpdateInboundPlanNameRequest {
    @SerializedName("name")
    private String name = null;

    public UpdateInboundPlanNameRequest name(String name) {
        this.name = name;
        return this;
    }

    /**
     * A human-readable name to update the inbound plan name to.
     *
     * @return name
     */
    @Schema(required = true, description = "A human-readable name to update the inbound plan name to.")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UpdateInboundPlanNameRequest updateInboundPlanNameRequest = (UpdateInboundPlanNameRequest) o;
        return Objects.equals(this.name, updateInboundPlanNameRequest.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class UpdateInboundPlanNameRequest {\n");

        sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
