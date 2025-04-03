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

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The &#x60;UpdateShipmentSourceAddress&#x60; request. */
@Schema(description = "The `UpdateShipmentSourceAddress` request.")
public class UpdateShipmentSourceAddressRequest {
    @SerializedName("address")
    private AddressInput address = null;

    public UpdateShipmentSourceAddressRequest address(AddressInput address) {
        this.address = address;
        return this;
    }

    /**
     * Get address
     *
     * @return address
     */
    @Schema(required = true, description = "")
    public AddressInput getAddress() {
        return address;
    }

    public void setAddress(AddressInput address) {
        this.address = address;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        UpdateShipmentSourceAddressRequest updateShipmentSourceAddressRequest = (UpdateShipmentSourceAddressRequest) o;
        return Objects.equals(this.address, updateShipmentSourceAddressRequest.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(address);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class UpdateShipmentSourceAddressRequest {\n");

        sb.append("    address: ").append(toIndentedString(address)).append("\n");
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
