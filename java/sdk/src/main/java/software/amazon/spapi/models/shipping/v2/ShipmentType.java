/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Shipment type. */
@JsonAdapter(ShipmentType.Adapter.class)
public enum ShipmentType {
    @SerializedName("FORWARD")
    FORWARD("FORWARD"),
    @SerializedName("RETURNS")
    RETURNS("RETURNS");

    private String value;

    ShipmentType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static ShipmentType fromValue(String input) {
        for (ShipmentType b : ShipmentType.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<ShipmentType> {
        @Override
        public void write(final JsonWriter jsonWriter, final ShipmentType enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public ShipmentType read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return ShipmentType.fromValue((String) (value));
        }
    }
}
