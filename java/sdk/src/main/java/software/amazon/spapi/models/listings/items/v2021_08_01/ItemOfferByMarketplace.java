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

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** Offer details of a listings item for an Amazon marketplace. */
@Schema(description = "Offer details of a listings item for an Amazon marketplace.")
public class ItemOfferByMarketplace {
    @SerializedName("marketplaceId")
    private String marketplaceId = null;

    /** Type of offer for the listings item. */
    @JsonAdapter(OfferTypeEnum.Adapter.class)
    public enum OfferTypeEnum {
        @SerializedName("B2C")
        B2C("B2C"),
        @SerializedName("B2B")
        B2B("B2B");

        private String value;

        OfferTypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static OfferTypeEnum fromValue(String input) {
            for (OfferTypeEnum b : OfferTypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<OfferTypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final OfferTypeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public OfferTypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return OfferTypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("offerType")
    private OfferTypeEnum offerType = null;

    @SerializedName("price")
    private Money price = null;

    @SerializedName("points")
    private Points points = null;

    @SerializedName("audience")
    private Audience audience = null;

    public ItemOfferByMarketplace marketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
        return this;
    }

    /**
     * The Amazon marketplace identifier.
     *
     * @return marketplaceId
     */
    @Schema(required = true, description = "The Amazon marketplace identifier.")
    public String getMarketplaceId() {
        return marketplaceId;
    }

    public void setMarketplaceId(String marketplaceId) {
        this.marketplaceId = marketplaceId;
    }

    public ItemOfferByMarketplace offerType(OfferTypeEnum offerType) {
        this.offerType = offerType;
        return this;
    }

    /**
     * Type of offer for the listings item.
     *
     * @return offerType
     */
    @Schema(required = true, description = "Type of offer for the listings item.")
    public OfferTypeEnum getOfferType() {
        return offerType;
    }

    public void setOfferType(OfferTypeEnum offerType) {
        this.offerType = offerType;
    }

    public ItemOfferByMarketplace price(Money price) {
        this.price = price;
        return this;
    }

    /**
     * Get price
     *
     * @return price
     */
    @Schema(required = true, description = "")
    public Money getPrice() {
        return price;
    }

    public void setPrice(Money price) {
        this.price = price;
    }

    public ItemOfferByMarketplace points(Points points) {
        this.points = points;
        return this;
    }

    /**
     * Get points
     *
     * @return points
     */
    @Schema(description = "")
    public Points getPoints() {
        return points;
    }

    public void setPoints(Points points) {
        this.points = points;
    }

    public ItemOfferByMarketplace audience(Audience audience) {
        this.audience = audience;
        return this;
    }

    /**
     * Get audience
     *
     * @return audience
     */
    @Schema(description = "")
    public Audience getAudience() {
        return audience;
    }

    public void setAudience(Audience audience) {
        this.audience = audience;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemOfferByMarketplace itemOfferByMarketplace = (ItemOfferByMarketplace) o;
        return Objects.equals(this.marketplaceId, itemOfferByMarketplace.marketplaceId)
                && Objects.equals(this.offerType, itemOfferByMarketplace.offerType)
                && Objects.equals(this.price, itemOfferByMarketplace.price)
                && Objects.equals(this.points, itemOfferByMarketplace.points)
                && Objects.equals(this.audience, itemOfferByMarketplace.audience);
    }

    @Override
    public int hashCode() {
        return Objects.hash(marketplaceId, offerType, price, points, audience);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemOfferByMarketplace {\n");

        sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
        sb.append("    offerType: ").append(toIndentedString(offerType)).append("\n");
        sb.append("    price: ").append(toIndentedString(price)).append("\n");
        sb.append("    points: ").append(toIndentedString(points)).append("\n");
        sb.append("    audience: ").append(toIndentedString(audience)).append("\n");
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
