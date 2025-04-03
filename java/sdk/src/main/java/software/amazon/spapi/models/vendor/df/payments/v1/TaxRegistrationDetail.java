/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.payments.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** Tax registration details of the entity. */
@Schema(description = "Tax registration details of the entity.")
public class TaxRegistrationDetail {
    /** Tax registration type for the entity. */
    @JsonAdapter(TaxRegistrationTypeEnum.Adapter.class)
    public enum TaxRegistrationTypeEnum {
        @SerializedName("VAT")
        VAT("VAT"),
        @SerializedName("GST")
        GST("GST");

        private String value;

        TaxRegistrationTypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static TaxRegistrationTypeEnum fromValue(String input) {
            for (TaxRegistrationTypeEnum b : TaxRegistrationTypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<TaxRegistrationTypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final TaxRegistrationTypeEnum enumeration)
                    throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public TaxRegistrationTypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return TaxRegistrationTypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("taxRegistrationType")
    private TaxRegistrationTypeEnum taxRegistrationType = null;

    @SerializedName("taxRegistrationNumber")
    private String taxRegistrationNumber = null;

    @SerializedName("taxRegistrationAddress")
    private Address taxRegistrationAddress = null;

    @SerializedName("taxRegistrationMessage")
    private String taxRegistrationMessage = null;

    public TaxRegistrationDetail taxRegistrationType(TaxRegistrationTypeEnum taxRegistrationType) {
        this.taxRegistrationType = taxRegistrationType;
        return this;
    }

    /**
     * Tax registration type for the entity.
     *
     * @return taxRegistrationType
     */
    @Schema(description = "Tax registration type for the entity.")
    public TaxRegistrationTypeEnum getTaxRegistrationType() {
        return taxRegistrationType;
    }

    public void setTaxRegistrationType(TaxRegistrationTypeEnum taxRegistrationType) {
        this.taxRegistrationType = taxRegistrationType;
    }

    public TaxRegistrationDetail taxRegistrationNumber(String taxRegistrationNumber) {
        this.taxRegistrationNumber = taxRegistrationNumber;
        return this;
    }

    /**
     * Tax registration number for the entity. For example, VAT ID, Consumption Tax ID.
     *
     * @return taxRegistrationNumber
     */
    @Schema(
            required = true,
            description = "Tax registration number for the entity. For example, VAT ID, Consumption Tax ID.")
    public String getTaxRegistrationNumber() {
        return taxRegistrationNumber;
    }

    public void setTaxRegistrationNumber(String taxRegistrationNumber) {
        this.taxRegistrationNumber = taxRegistrationNumber;
    }

    public TaxRegistrationDetail taxRegistrationAddress(Address taxRegistrationAddress) {
        this.taxRegistrationAddress = taxRegistrationAddress;
        return this;
    }

    /**
     * Get taxRegistrationAddress
     *
     * @return taxRegistrationAddress
     */
    @Schema(description = "")
    public Address getTaxRegistrationAddress() {
        return taxRegistrationAddress;
    }

    public void setTaxRegistrationAddress(Address taxRegistrationAddress) {
        this.taxRegistrationAddress = taxRegistrationAddress;
    }

    public TaxRegistrationDetail taxRegistrationMessage(String taxRegistrationMessage) {
        this.taxRegistrationMessage = taxRegistrationMessage;
        return this;
    }

    /**
     * Tax registration message that can be used for additional tax related details.
     *
     * @return taxRegistrationMessage
     */
    @Schema(description = "Tax registration message that can be used for additional tax related details.")
    public String getTaxRegistrationMessage() {
        return taxRegistrationMessage;
    }

    public void setTaxRegistrationMessage(String taxRegistrationMessage) {
        this.taxRegistrationMessage = taxRegistrationMessage;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TaxRegistrationDetail taxRegistrationDetail = (TaxRegistrationDetail) o;
        return Objects.equals(this.taxRegistrationType, taxRegistrationDetail.taxRegistrationType)
                && Objects.equals(this.taxRegistrationNumber, taxRegistrationDetail.taxRegistrationNumber)
                && Objects.equals(this.taxRegistrationAddress, taxRegistrationDetail.taxRegistrationAddress)
                && Objects.equals(this.taxRegistrationMessage, taxRegistrationDetail.taxRegistrationMessage);
    }

    @Override
    public int hashCode() {
        return Objects.hash(taxRegistrationType, taxRegistrationNumber, taxRegistrationAddress, taxRegistrationMessage);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TaxRegistrationDetail {\n");

        sb.append("    taxRegistrationType: ")
                .append(toIndentedString(taxRegistrationType))
                .append("\n");
        sb.append("    taxRegistrationNumber: ")
                .append(toIndentedString(taxRegistrationNumber))
                .append("\n");
        sb.append("    taxRegistrationAddress: ")
                .append(toIndentedString(taxRegistrationAddress))
                .append("\n");
        sb.append("    taxRegistrationMessage: ")
                .append(toIndentedString(taxRegistrationMessage))
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
