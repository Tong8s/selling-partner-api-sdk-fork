/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.orders.v0;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The verification status of the order. */
@JsonAdapter(VerificationStatus.Adapter.class)
public enum VerificationStatus {
    @SerializedName("Pending")
    PENDING("Pending"),
    @SerializedName("Approved")
    APPROVED("Approved"),
    @SerializedName("Rejected")
    REJECTED("Rejected"),
    @SerializedName("Expired")
    EXPIRED("Expired"),
    @SerializedName("Cancelled")
    CANCELLED("Cancelled");

    private String value;

    VerificationStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static VerificationStatus fromValue(String input) {
        for (VerificationStatus b : VerificationStatus.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<VerificationStatus> {
        @Override
        public void write(final JsonWriter jsonWriter, final VerificationStatus enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public VerificationStatus read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return VerificationStatus.fromValue((String) (value));
        }
    }
}
