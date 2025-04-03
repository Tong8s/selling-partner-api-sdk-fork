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

/**
 * Package details. Includes &#x60;packageItems&#x60;, &#x60;packageTimeSlot&#x60;, and &#x60;packageIdentifier&#x60;.
 */
@Schema(description = "Package details. Includes `packageItems`, `packageTimeSlot`, and `packageIdentifier`.")
public class PackageDetails {
    @SerializedName("packageItems")
    private Items packageItems = null;

    @SerializedName("packageTimeSlot")
    private TimeSlot packageTimeSlot = null;

    @SerializedName("packageIdentifier")
    private String packageIdentifier = null;

    public PackageDetails packageItems(Items packageItems) {
        this.packageItems = packageItems;
        return this;
    }

    /**
     * Get packageItems
     *
     * @return packageItems
     */
    @Schema(description = "")
    public Items getPackageItems() {
        return packageItems;
    }

    public void setPackageItems(Items packageItems) {
        this.packageItems = packageItems;
    }

    public PackageDetails packageTimeSlot(TimeSlot packageTimeSlot) {
        this.packageTimeSlot = packageTimeSlot;
        return this;
    }

    /**
     * Get packageTimeSlot
     *
     * @return packageTimeSlot
     */
    @Schema(required = true, description = "")
    public TimeSlot getPackageTimeSlot() {
        return packageTimeSlot;
    }

    public void setPackageTimeSlot(TimeSlot packageTimeSlot) {
        this.packageTimeSlot = packageTimeSlot;
    }

    public PackageDetails packageIdentifier(String packageIdentifier) {
        this.packageIdentifier = packageIdentifier;
        return this;
    }

    /**
     * Get packageIdentifier
     *
     * @return packageIdentifier
     */
    @Schema(description = "")
    public String getPackageIdentifier() {
        return packageIdentifier;
    }

    public void setPackageIdentifier(String packageIdentifier) {
        this.packageIdentifier = packageIdentifier;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PackageDetails packageDetails = (PackageDetails) o;
        return Objects.equals(this.packageItems, packageDetails.packageItems)
                && Objects.equals(this.packageTimeSlot, packageDetails.packageTimeSlot)
                && Objects.equals(this.packageIdentifier, packageDetails.packageIdentifier);
    }

    @Override
    public int hashCode() {
        return Objects.hash(packageItems, packageTimeSlot, packageIdentifier);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PackageDetails {\n");

        sb.append("    packageItems: ").append(toIndentedString(packageItems)).append("\n");
        sb.append("    packageTimeSlot: ")
                .append(toIndentedString(packageTimeSlot))
                .append("\n");
        sb.append("    packageIdentifier: ")
                .append(toIndentedString(packageIdentifier))
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
