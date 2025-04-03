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

/** Indicates the tax specifications associated with the shipment for customs compliance purposes in certain regions. */
@Schema(
        description =
                "Indicates the tax specifications associated with the shipment for customs compliance purposes in certain regions.")
public class TaxDetail {
    @SerializedName("taxType")
    private TaxType taxType = null;

    @SerializedName("taxRegistrationNumber")
    private String taxRegistrationNumber = null;

    public TaxDetail taxType(TaxType taxType) {
        this.taxType = taxType;
        return this;
    }

    /**
     * Get taxType
     *
     * @return taxType
     */
    @Schema(required = true, description = "")
    public TaxType getTaxType() {
        return taxType;
    }

    public void setTaxType(TaxType taxType) {
        this.taxType = taxType;
    }

    public TaxDetail taxRegistrationNumber(String taxRegistrationNumber) {
        this.taxRegistrationNumber = taxRegistrationNumber;
        return this;
    }

    /**
     * The shipper&#x27;s tax registration number associated with the shipment for customs compliance purposes in
     * certain regions.
     *
     * @return taxRegistrationNumber
     */
    @Schema(
            required = true,
            description =
                    "The shipper's tax registration number associated with the shipment for customs compliance purposes in certain regions.")
    public String getTaxRegistrationNumber() {
        return taxRegistrationNumber;
    }

    public void setTaxRegistrationNumber(String taxRegistrationNumber) {
        this.taxRegistrationNumber = taxRegistrationNumber;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TaxDetail taxDetail = (TaxDetail) o;
        return Objects.equals(this.taxType, taxDetail.taxType)
                && Objects.equals(this.taxRegistrationNumber, taxDetail.taxRegistrationNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taxType, taxRegistrationNumber);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TaxDetail {\n");

        sb.append("    taxType: ").append(toIndentedString(taxType)).append("\n");
        sb.append("    taxRegistrationNumber: ")
                .append(toIndentedString(taxRegistrationNumber))
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
