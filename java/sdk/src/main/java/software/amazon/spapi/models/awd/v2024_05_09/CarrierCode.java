/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * OpenAPI spec version: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.awd.v2024_05_09;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** Identifies the carrier that will deliver the shipment. */
@Schema(description = "Identifies the carrier that will deliver the shipment.")
public class CarrierCode {
    @SerializedName("carrierCodeType")
    private CarrierCodeType carrierCodeType = null;

    @SerializedName("carrierCodeValue")
    private String carrierCodeValue = null;

    public CarrierCode carrierCodeType(CarrierCodeType carrierCodeType) {
        this.carrierCodeType = carrierCodeType;
        return this;
    }

    /**
     * Get carrierCodeType
     *
     * @return carrierCodeType
     */
    @Schema(description = "")
    public CarrierCodeType getCarrierCodeType() {
        return carrierCodeType;
    }

    public void setCarrierCodeType(CarrierCodeType carrierCodeType) {
        this.carrierCodeType = carrierCodeType;
    }

    public CarrierCode carrierCodeValue(String carrierCodeValue) {
        this.carrierCodeValue = carrierCodeValue;
        return this;
    }

    /**
     * Value of the carrier code.
     *
     * @return carrierCodeValue
     */
    @Schema(example = "TestCarrierCode", description = "Value of the carrier code.")
    public String getCarrierCodeValue() {
        return carrierCodeValue;
    }

    public void setCarrierCodeValue(String carrierCodeValue) {
        this.carrierCodeValue = carrierCodeValue;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CarrierCode carrierCode = (CarrierCode) o;
        return Objects.equals(this.carrierCodeType, carrierCode.carrierCodeType)
                && Objects.equals(this.carrierCodeValue, carrierCode.carrierCodeValue);
    }

    @Override
    public int hashCode() {
        return Objects.hash(carrierCodeType, carrierCodeValue);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CarrierCode {\n");

        sb.append("    carrierCodeType: ")
                .append(toIndentedString(carrierCodeType))
                .append("\n");
        sb.append("    carrierCodeValue: ")
                .append(toIndentedString(carrierCodeValue))
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
