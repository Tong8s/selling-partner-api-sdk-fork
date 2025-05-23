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

/**
 * Benefits that are included and excluded for each shipping offer. Benefits represents services provided by Amazon (eg.
 * CLAIMS_PROTECTED, etc.) when sellers purchase shipping through Amazon. Benefit details will be made available for any
 * shipment placed on or after January 1st 2024 00:00 UTC.
 */
@Schema(
        description =
                "Benefits that are included and excluded for each shipping offer. Benefits represents services provided by Amazon (eg. CLAIMS_PROTECTED, etc.) when sellers purchase shipping through Amazon. Benefit details will be made available for any shipment placed on or after January 1st 2024 00:00 UTC.")
public class Benefits {
    @SerializedName("includedBenefits")
    private IncludedBenefits includedBenefits = null;

    @SerializedName("excludedBenefits")
    private ExcludedBenefits excludedBenefits = null;

    public Benefits includedBenefits(IncludedBenefits includedBenefits) {
        this.includedBenefits = includedBenefits;
        return this;
    }

    /**
     * Get includedBenefits
     *
     * @return includedBenefits
     */
    @Schema(required = true, description = "")
    public IncludedBenefits getIncludedBenefits() {
        return includedBenefits;
    }

    public void setIncludedBenefits(IncludedBenefits includedBenefits) {
        this.includedBenefits = includedBenefits;
    }

    public Benefits excludedBenefits(ExcludedBenefits excludedBenefits) {
        this.excludedBenefits = excludedBenefits;
        return this;
    }

    /**
     * Get excludedBenefits
     *
     * @return excludedBenefits
     */
    @Schema(required = true, description = "")
    public ExcludedBenefits getExcludedBenefits() {
        return excludedBenefits;
    }

    public void setExcludedBenefits(ExcludedBenefits excludedBenefits) {
        this.excludedBenefits = excludedBenefits;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Benefits benefits = (Benefits) o;
        return Objects.equals(this.includedBenefits, benefits.includedBenefits)
                && Objects.equals(this.excludedBenefits, benefits.excludedBenefits);
    }

    @Override
    public int hashCode() {
        return Objects.hash(includedBenefits, excludedBenefits);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Benefits {\n");

        sb.append("    includedBenefits: ")
                .append(toIndentedString(includedBenefits))
                .append("\n");
        sb.append("    excludedBenefits: ")
                .append(toIndentedString(excludedBenefits))
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
