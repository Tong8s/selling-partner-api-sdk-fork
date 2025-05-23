/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.shipments.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/**
 * Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is
 * appropriate.
 */
@Schema(
        description =
                "Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.")
public class ItemDetails {
    @SerializedName("purchaseOrderNumber")
    private String purchaseOrderNumber = null;

    @SerializedName("lotNumber")
    private String lotNumber = null;

    @SerializedName("expiry")
    private Expiry expiry = null;

    @SerializedName("maximumRetailPrice")
    private Money maximumRetailPrice = null;

    /** Identification of the instructions on how specified item/carton/pallet should be handled. */
    @JsonAdapter(HandlingCodeEnum.Adapter.class)
    public enum HandlingCodeEnum {
        @SerializedName("Oversized")
        OVERSIZED("Oversized"),
        @SerializedName("Fragile")
        FRAGILE("Fragile"),
        @SerializedName("Food")
        FOOD("Food"),
        @SerializedName("HandleWithCare")
        HANDLEWITHCARE("HandleWithCare");

        private String value;

        HandlingCodeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static HandlingCodeEnum fromValue(String input) {
            for (HandlingCodeEnum b : HandlingCodeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<HandlingCodeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final HandlingCodeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public HandlingCodeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return HandlingCodeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("handlingCode")
    private HandlingCodeEnum handlingCode = null;

    public ItemDetails purchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
        return this;
    }

    /**
     * The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple
     * purchase order numbers that are in particular carton or pallet within the shipment, then provide the
     * purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code.
     *
     * @return purchaseOrderNumber
     */
    @Schema(
            description =
                    "The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple purchase order numbers that are in particular carton or pallet within the shipment, then provide the purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code.")
    public String getPurchaseOrderNumber() {
        return purchaseOrderNumber;
    }

    public void setPurchaseOrderNumber(String purchaseOrderNumber) {
        this.purchaseOrderNumber = purchaseOrderNumber;
    }

    public ItemDetails lotNumber(String lotNumber) {
        this.lotNumber = lotNumber;
        return this;
    }

    /**
     * The batch or lot number associates an item with information the manufacturer considers relevant for traceability
     * of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items
     * contained. This field is mandatory for all perishable items.
     *
     * @return lotNumber
     */
    @Schema(
            description =
                    "The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items contained. This field is mandatory for all perishable items.")
    public String getLotNumber() {
        return lotNumber;
    }

    public void setLotNumber(String lotNumber) {
        this.lotNumber = lotNumber;
    }

    public ItemDetails expiry(Expiry expiry) {
        this.expiry = expiry;
        return this;
    }

    /**
     * Get expiry
     *
     * @return expiry
     */
    @Schema(description = "")
    public Expiry getExpiry() {
        return expiry;
    }

    public void setExpiry(Expiry expiry) {
        this.expiry = expiry;
    }

    public ItemDetails maximumRetailPrice(Money maximumRetailPrice) {
        this.maximumRetailPrice = maximumRetailPrice;
        return this;
    }

    /**
     * Get maximumRetailPrice
     *
     * @return maximumRetailPrice
     */
    @Schema(description = "")
    public Money getMaximumRetailPrice() {
        return maximumRetailPrice;
    }

    public void setMaximumRetailPrice(Money maximumRetailPrice) {
        this.maximumRetailPrice = maximumRetailPrice;
    }

    public ItemDetails handlingCode(HandlingCodeEnum handlingCode) {
        this.handlingCode = handlingCode;
        return this;
    }

    /**
     * Identification of the instructions on how specified item/carton/pallet should be handled.
     *
     * @return handlingCode
     */
    @Schema(description = "Identification of the instructions on how specified item/carton/pallet should be handled.")
    public HandlingCodeEnum getHandlingCode() {
        return handlingCode;
    }

    public void setHandlingCode(HandlingCodeEnum handlingCode) {
        this.handlingCode = handlingCode;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemDetails itemDetails = (ItemDetails) o;
        return Objects.equals(this.purchaseOrderNumber, itemDetails.purchaseOrderNumber)
                && Objects.equals(this.lotNumber, itemDetails.lotNumber)
                && Objects.equals(this.expiry, itemDetails.expiry)
                && Objects.equals(this.maximumRetailPrice, itemDetails.maximumRetailPrice)
                && Objects.equals(this.handlingCode, itemDetails.handlingCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(purchaseOrderNumber, lotNumber, expiry, maximumRetailPrice, handlingCode);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemDetails {\n");

        sb.append("    purchaseOrderNumber: ")
                .append(toIndentedString(purchaseOrderNumber))
                .append("\n");
        sb.append("    lotNumber: ").append(toIndentedString(lotNumber)).append("\n");
        sb.append("    expiry: ").append(toIndentedString(expiry)).append("\n");
        sb.append("    maximumRetailPrice: ")
                .append(toIndentedString(maximumRetailPrice))
                .append("\n");
        sb.append("    handlingCode: ").append(toIndentedString(handlingCode)).append("\n");
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
