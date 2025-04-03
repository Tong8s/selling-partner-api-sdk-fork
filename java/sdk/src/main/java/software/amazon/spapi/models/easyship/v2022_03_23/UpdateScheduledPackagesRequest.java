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

/** The request schema for the &#x60;updateScheduledPackages&#x60; operation. */
@Schema(description = "The request schema for the `updateScheduledPackages` operation.")
public class UpdateScheduledPackagesRequest {
    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    @SerializedName("updatePackageDetailsList")
    private UpdatePackageDetailsList updatePackageDetailsList = null;

    public UpdateScheduledPackagesRequest marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * Get marketplaceId
     *
     * @return marketplaceId
     */
    @Schema(required = true, description = "")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public UpdateScheduledPackagesRequest updatePackageDetailsList(UpdatePackageDetailsList updatePackageDetailsList) {
        this.updatePackageDetailsList = updatePackageDetailsList;
        return this;
    }

    /**
     * Get updatePackageDetailsList
     *
     * @return updatePackageDetailsList
     */
    @Schema(required = true, description = "")
    public UpdatePackageDetailsList getUpdatePackageDetailsList() {
        return updatePackageDetailsList;
    }

    public void setUpdatePackageDetailsList(UpdatePackageDetailsList updatePackageDetailsList) {
        this.updatePackageDetailsList = updatePackageDetailsList;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UpdateScheduledPackagesRequest updateScheduledPackagesRequest = (UpdateScheduledPackagesRequest) o;
        return Objects.equals(this.marketplaceId, updateScheduledPackagesRequest.marketplaceId)
                && Objects.equals(
                        this.updatePackageDetailsList, updateScheduledPackagesRequest.updatePackageDetailsList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(marketplaceId, updatePackageDetailsList);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class UpdateScheduledPackagesRequest {\n");

        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    updatePackageDetailsList: ")
                .append(toIndentedString(updatePackageDetailsList))
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
