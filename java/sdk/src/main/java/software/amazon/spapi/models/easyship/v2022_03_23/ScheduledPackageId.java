/*
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * OpenAPI spec version: 2022-03-23
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.easyship.v2022_03_23;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** Identifies the scheduled package to be updated. */
@Schema(description = "Identifies the scheduled package to be updated.")
public class ScheduledPackageId {
    @SerializedName("amazonOrderId")
    private String amazonOrderId = null;

    @SerializedName("packageId")
    private String packageId = null;

    public ScheduledPackageId amazonOrderId(String amazonOrderId) {
        this.amazonOrderId = amazonOrderId;
        return this;
    }

    /**
     * Get amazonOrderId
     *
     * @return amazonOrderId
     */
    @Schema(required = true, description = "")
    public String getAmazonOrderId() {
        return amazonOrderId;
    }

    public void setAmazonOrderId(String amazonOrderId) {
        this.amazonOrderId = amazonOrderId;
    }

    public ScheduledPackageId packageId(String packageId) {
        this.packageId = packageId;
        return this;
    }

    /**
     * Get packageId
     *
     * @return packageId
     */
    @Schema(description = "")
    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ScheduledPackageId scheduledPackageId = (ScheduledPackageId) o;
        return Objects.equals(this.amazonOrderId, scheduledPackageId.amazonOrderId)
                && Objects.equals(this.packageId, scheduledPackageId.packageId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amazonOrderId, packageId);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ScheduledPackageId {\n");

        sb.append("    amazonOrderId: ").append(toIndentedString(amazonOrderId)).append("\n");
        sb.append("    packageId: ").append(toIndentedString(packageId)).append("\n");
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
