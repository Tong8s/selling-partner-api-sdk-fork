/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Specifies who will label the items. Options include &#x60;AMAZON&#x60;, &#x60;SELLER&#x60; or &#x60;NONE&#x60;. */
@JsonAdapter(LabelOwner.Adapter.class)
public enum LabelOwner {
    @SerializedName("AMAZON")
    AMAZON("AMAZON"),
    @SerializedName("SELLER")
    SELLER("SELLER"),
    @SerializedName("NONE")
    NONE("NONE");

    private String value;

    LabelOwner(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static LabelOwner fromValue(String input) {
        for (LabelOwner b : LabelOwner.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<LabelOwner> {
        @Override
        public void write(final JsonWriter jsonWriter, final LabelOwner enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public LabelOwner read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return LabelOwner.fromValue((String) (value));
        }
    }
}
