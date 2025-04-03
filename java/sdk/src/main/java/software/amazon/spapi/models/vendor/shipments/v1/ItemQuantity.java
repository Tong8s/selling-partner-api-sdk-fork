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

/** Details of item quantity. */
@Schema(description = "Details of item quantity.")
public class ItemQuantity {
    @SerializedName("amount")
    private Integer amount = null;

    /** Unit of measure for the shipped quantity. */
    @JsonAdapter(UnitOfMeasureEnum.Adapter.class)
    public enum UnitOfMeasureEnum {
        @SerializedName("Cases")
        CASES("Cases"),
        @SerializedName("Eaches")
        EACHES("Eaches");

        private String value;

        UnitOfMeasureEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static UnitOfMeasureEnum fromValue(String input) {
            for (UnitOfMeasureEnum b : UnitOfMeasureEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<UnitOfMeasureEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final UnitOfMeasureEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public UnitOfMeasureEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return UnitOfMeasureEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("unitOfMeasure")
    private UnitOfMeasureEnum unitOfMeasure = null;

    @SerializedName("unitSize")
    private Integer unitSize = null;

    @SerializedName("totalWeight")
    private TotalWeight totalWeight = null;

    public ItemQuantity amount(Integer amount) {
        this.amount = amount;
        return this;
    }

    /**
     * Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons
     * or pallets within the shipment, please provide this at the appropriate carton or pallet level.
     *
     * @return amount
     */
    @Schema(
            required = true,
            description =
                    "Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level.")
    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public ItemQuantity unitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
        return this;
    }

    /**
     * Unit of measure for the shipped quantity.
     *
     * @return unitOfMeasure
     */
    @Schema(required = true, description = "Unit of measure for the shipped quantity.")
    public UnitOfMeasureEnum getUnitOfMeasure() {
        return unitOfMeasure;
    }

    public void setUnitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
        this.unitOfMeasure = unitOfMeasure;
    }

    public ItemQuantity unitSize(Integer unitSize) {
        this.unitSize = unitSize;
        return this;
    }

    /**
     * The case size, in the event that we ordered using cases. Otherwise, 1.
     *
     * @return unitSize
     */
    @Schema(description = "The case size, in the event that we ordered using cases. Otherwise, 1.")
    public Integer getUnitSize() {
        return unitSize;
    }

    public void setUnitSize(Integer unitSize) {
        this.unitSize = unitSize;
    }

    public ItemQuantity totalWeight(TotalWeight totalWeight) {
        this.totalWeight = totalWeight;
        return this;
    }

    /**
     * Get totalWeight
     *
     * @return totalWeight
     */
    @Schema(description = "")
    public TotalWeight getTotalWeight() {
        return totalWeight;
    }

    public void setTotalWeight(TotalWeight totalWeight) {
        this.totalWeight = totalWeight;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ItemQuantity itemQuantity = (ItemQuantity) o;
        return Objects.equals(this.amount, itemQuantity.amount)
                && Objects.equals(this.unitOfMeasure, itemQuantity.unitOfMeasure)
                && Objects.equals(this.unitSize, itemQuantity.unitSize)
                && Objects.equals(this.totalWeight, itemQuantity.totalWeight);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amount, unitOfMeasure, unitSize, totalWeight);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ItemQuantity {\n");

        sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
        sb.append("    unitOfMeasure: ").append(toIndentedString(unitOfMeasure)).append("\n");
        sb.append("    unitSize: ").append(toIndentedString(unitSize)).append("\n");
        sb.append("    totalWeight: ").append(toIndentedString(totalWeight)).append("\n");
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
