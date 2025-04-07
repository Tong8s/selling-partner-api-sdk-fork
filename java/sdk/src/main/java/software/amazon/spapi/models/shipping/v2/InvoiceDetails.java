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
import org.threeten.bp.OffsetDateTime;

/** The invoice details for charges associated with the goods in the package. Only applies to certain regions. */
@Schema(
        description =
                "The invoice details for charges associated with the goods in the package. Only applies to certain regions.")
public class InvoiceDetails {
    @SerializedName("invoiceNumber")
    private String invoiceNumber = null;

    @SerializedName("invoiceDate")
    private OffsetDateTime invoiceDate = null;

    public InvoiceDetails invoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }

    /**
     * The invoice number of the item.
     *
     * @return invoiceNumber
     */
    @Schema(description = "The invoice number of the item.")
    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public InvoiceDetails invoiceDate(OffsetDateTime invoiceDate) {
        this.invoiceDate = invoiceDate;
        return this;
    }

    /**
     * The invoice date of the item in ISO 8061 format.
     *
     * @return invoiceDate
     */
    @Schema(description = "The invoice date of the item in ISO 8061 format.")
    public OffsetDateTime getInvoiceDate() {
        return invoiceDate;
    }

    public void setInvoiceDate(OffsetDateTime invoiceDate) {
        this.invoiceDate = invoiceDate;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        InvoiceDetails invoiceDetails = (InvoiceDetails) o;
        return Objects.equals(this.invoiceNumber, invoiceDetails.invoiceNumber)
                && Objects.equals(this.invoiceDate, invoiceDetails.invoiceDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(invoiceNumber, invoiceDate);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class InvoiceDetails {\n");

        sb.append("    invoiceNumber: ").append(toIndentedString(invoiceNumber)).append("\n");
        sb.append("    invoiceDate: ").append(toIndentedString(invoiceDate)).append("\n");
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
