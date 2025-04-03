/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.finances.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** A TaxWithholding event on seller&#x27;s account. */
@Schema(description = "A TaxWithholding event on seller's account.")
public class TaxWithholdingEvent {
    @SerializedName("PostedDate")
    private OffsetDateTime postedDate = null;

    @SerializedName("BaseAmount")
    private Currency baseAmount = null;

    @SerializedName("WithheldAmount")
    private Currency withheldAmount = null;

    @SerializedName("TaxWithholdingPeriod")
    private TaxWithholdingPeriod taxWithholdingPeriod = null;

    public TaxWithholdingEvent postedDate(OffsetDateTime postedDate) {
        this.postedDate = postedDate;
        return this;
    }

    /**
     * Get postedDate
     *
     * @return postedDate
     */
    @Schema(description = "")
    public OffsetDateTime getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(OffsetDateTime postedDate) {
        this.postedDate = postedDate;
    }

    public TaxWithholdingEvent baseAmount(Currency baseAmount) {
        this.baseAmount = baseAmount;
        return this;
    }

    /**
     * Get baseAmount
     *
     * @return baseAmount
     */
    @Schema(description = "")
    public Currency getBaseAmount() {
        return baseAmount;
    }

    public void setBaseAmount(Currency baseAmount) {
        this.baseAmount = baseAmount;
    }

    public TaxWithholdingEvent withheldAmount(Currency withheldAmount) {
        this.withheldAmount = withheldAmount;
        return this;
    }

    /**
     * Get withheldAmount
     *
     * @return withheldAmount
     */
    @Schema(description = "")
    public Currency getWithheldAmount() {
        return withheldAmount;
    }

    public void setWithheldAmount(Currency withheldAmount) {
        this.withheldAmount = withheldAmount;
    }

    public TaxWithholdingEvent taxWithholdingPeriod(TaxWithholdingPeriod taxWithholdingPeriod) {
        this.taxWithholdingPeriod = taxWithholdingPeriod;
        return this;
    }

    /**
     * Get taxWithholdingPeriod
     *
     * @return taxWithholdingPeriod
     */
    @Schema(description = "")
    public TaxWithholdingPeriod getTaxWithholdingPeriod() {
        return taxWithholdingPeriod;
    }

    public void setTaxWithholdingPeriod(TaxWithholdingPeriod taxWithholdingPeriod) {
        this.taxWithholdingPeriod = taxWithholdingPeriod;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TaxWithholdingEvent taxWithholdingEvent = (TaxWithholdingEvent) o;
        return Objects.equals(this.postedDate, taxWithholdingEvent.postedDate)
                && Objects.equals(this.baseAmount, taxWithholdingEvent.baseAmount)
                && Objects.equals(this.withheldAmount, taxWithholdingEvent.withheldAmount)
                && Objects.equals(this.taxWithholdingPeriod, taxWithholdingEvent.taxWithholdingPeriod);
    }

    @Override
    public int hashCode() {
        return Objects.hash(postedDate, baseAmount, withheldAmount, taxWithholdingPeriod);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TaxWithholdingEvent {\n");

        sb.append("    postedDate: ").append(toIndentedString(postedDate)).append("\n");
        sb.append("    baseAmount: ").append(toIndentedString(baseAmount)).append("\n");
        sb.append("    withheldAmount: ")
                .append(toIndentedString(withheldAmount))
                .append("\n");
        sb.append("    taxWithholdingPeriod: ")
                .append(toIndentedString(taxWithholdingPeriod))
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
