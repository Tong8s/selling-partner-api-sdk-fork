/*
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * OpenAPI spec version: 2020-11-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.apluscontent.v2020_11_01;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The content&#x27;s relative positioning. */
@JsonAdapter(PositionType.Adapter.class)
public enum PositionType {
    @SerializedName("LEFT")
    LEFT("LEFT"),
    @SerializedName("RIGHT")
    RIGHT("RIGHT");

    private String value;

    PositionType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static PositionType fromValue(String input) {
        for (PositionType b : PositionType.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<PositionType> {
        @Override
        public void write(final JsonWriter jsonWriter, final PositionType enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public PositionType read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return PositionType.fromValue((String) (value));
        }
    }
}
