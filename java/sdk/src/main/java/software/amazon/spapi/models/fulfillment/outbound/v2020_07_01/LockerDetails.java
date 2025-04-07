/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.outbound.v2020_07_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The locker details, which you can use to access the locker delivery box. */
@Schema(description = "The locker details, which you can use to access the locker delivery box.")
public class LockerDetails {
    @SerializedName("lockerNumber")
    private String lockerNumber = null;

    @SerializedName("lockerAccessCode")
    private String lockerAccessCode = null;

    public LockerDetails lockerNumber(String lockerNumber) {
        this.lockerNumber = lockerNumber;
        return this;
    }

    /**
     * Indicates the locker number
     *
     * @return lockerNumber
     */
    @Schema(description = "Indicates the locker number")
    public String getLockerNumber() {
        return lockerNumber;
    }

    public void setLockerNumber(String lockerNumber) {
        this.lockerNumber = lockerNumber;
    }

    public LockerDetails lockerAccessCode(String lockerAccessCode) {
        this.lockerAccessCode = lockerAccessCode;
        return this;
    }

    /**
     * Indicates the locker access code
     *
     * @return lockerAccessCode
     */
    @Schema(description = "Indicates the locker access code")
    public String getLockerAccessCode() {
        return lockerAccessCode;
    }

    public void setLockerAccessCode(String lockerAccessCode) {
        this.lockerAccessCode = lockerAccessCode;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        LockerDetails lockerDetails = (LockerDetails) o;
        return Objects.equals(this.lockerNumber, lockerDetails.lockerNumber)
                && Objects.equals(this.lockerAccessCode, lockerDetails.lockerAccessCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(lockerNumber, lockerAccessCode);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class LockerDetails {\n");

        sb.append("    lockerNumber: ").append(toIndentedString(lockerNumber)).append("\n");
        sb.append("    lockerAccessCode: ")
                .append(toIndentedString(lockerAccessCode))
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
