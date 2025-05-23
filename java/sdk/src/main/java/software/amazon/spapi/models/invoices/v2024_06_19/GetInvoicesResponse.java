/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.invoices.v2024_06_19;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** Success. */
@Schema(description = "Success.")
public class GetInvoicesResponse {
    @SerializedName("invoices")
    private List<Invoice> invoices = null;

    @SerializedName("nextToken")
    private String nextToken = null;

    public GetInvoicesResponse invoices(List<Invoice> invoices) {
        this.invoices = invoices;
        return this;
    }

    public GetInvoicesResponse addInvoicesItem(Invoice invoicesItem) {
        if (this.invoices == null) {
            this.invoices = new ArrayList<Invoice>();
        }
        this.invoices.add(invoicesItem);
        return this;
    }

    /**
     * A list of invoices.
     *
     * @return invoices
     */
    @Schema(description = "A list of invoices.")
    public List<Invoice> getInvoices() {
        return invoices;
    }

    public void setInvoices(List<Invoice> invoices) {
        this.invoices = invoices;
    }

    public GetInvoicesResponse nextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }

    /**
     * This token is returned when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the
     * next page of results, call the &#x60;getInvoices&#x60; operation and include this token with the previous call
     * parameters.
     *
     * @return nextToken
     */
    @Schema(
            description =
                    "This token is returned when the number of results exceeds the specified `pageSize` value. To get the next page of results, call the `getInvoices` operation and include this token with the previous call parameters.")
    public String getNextToken() {
        return nextToken;
    }

    public void setNextToken(String nextToken) {
        this.nextToken = nextToken;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GetInvoicesResponse getInvoicesResponse = (GetInvoicesResponse) o;
        return Objects.equals(this.invoices, getInvoicesResponse.invoices)
                && Objects.equals(this.nextToken, getInvoicesResponse.nextToken);
    }

    @Override
    public int hashCode() {
        return Objects.hash(invoices, nextToken);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class GetInvoicesResponse {\n");

        sb.append("    invoices: ").append(toIndentedString(invoices)).append("\n");
        sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
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
