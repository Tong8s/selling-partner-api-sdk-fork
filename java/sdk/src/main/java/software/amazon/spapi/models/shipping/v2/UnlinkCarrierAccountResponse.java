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

/** The Response for the UnlinkCarrierAccountResponse operation. */
@Schema(description = "The Response  for the UnlinkCarrierAccountResponse operation.")
public class UnlinkCarrierAccountResponse {
    @SerializedName("isUnlinked")
    private Boolean isUnlinked = null;

    public UnlinkCarrierAccountResponse isUnlinked(Boolean isUnlinked) {
        this.isUnlinked = isUnlinked;
        return this;
    }

    /**
     * Is Carrier unlinked from Merchant
     *
     * @return isUnlinked
     */
    @Schema(description = "Is Carrier unlinked from Merchant")
    public Boolean isIsUnlinked() {
        return isUnlinked;
    }

    public void setIsUnlinked(Boolean isUnlinked) {
        this.isUnlinked = isUnlinked;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UnlinkCarrierAccountResponse unlinkCarrierAccountResponse = (UnlinkCarrierAccountResponse) o;
        return Objects.equals(this.isUnlinked, unlinkCarrierAccountResponse.isUnlinked);
    }

    @Override
    public int hashCode() {
        return Objects.hash(isUnlinked);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class UnlinkCarrierAccountResponse {\n");

        sb.append("    isUnlinked: ").append(toIndentedString(isUnlinked)).append("\n");
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
