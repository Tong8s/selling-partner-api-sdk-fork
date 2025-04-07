/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.listings.items.v2021_08_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** Identity attributes associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
@Schema(
        description =
                "Identity attributes associated with the item in the Amazon catalog for the indicated Amazon marketplace.")
public class ItemIdentifiersByMarketplace {
    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    @SerializedName("asin")
    private String asin = null;

    public ItemIdentifiersByMarketplace marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * A marketplace identifier. Identifies the Amazon marketplace for the listings item.
     *
     * @return marketplaceId
     */
    @Schema(description = "A marketplace identifier. Identifies the Amazon marketplace for the listings item.")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public ItemIdentifiersByMarketplace asin(String asin) {
        this.asin = asin;
        return this;
    }

    /**
     * Amazon Standard Identification Number (ASIN) of the listings item.
     *
     * @return asin
     */
    @Schema(description = "Amazon Standard Identification Number (ASIN) of the listings item.")
    public String getAsin() {
        return asin;
    }

    public void setAsin(String asin) {
        this.asin = asin;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemIdentifiersByMarketplace itemIdentifiersByMarketplace = (ItemIdentifiersByMarketplace) o;
        return Objects.equals(this.marketplaceId, itemIdentifiersByMarketplace.marketplaceId)
                && Objects.equals(this.asin, itemIdentifiersByMarketplace.asin);
    }

    @Override
    public int hashCode() {
        return Objects.hash(marketplaceId, asin);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemIdentifiersByMarketplace {\n");

        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    asin: ").append(toIndentedString(asin)).append("\n");
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
