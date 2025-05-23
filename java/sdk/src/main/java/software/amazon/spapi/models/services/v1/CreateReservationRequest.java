/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.services.v1;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** Request schema for the &#x60;createReservation&#x60; operation. */
@Schema(description = "Request schema for the `createReservation` operation.")
public class CreateReservationRequest {
    @SerializedName("resourceId")
    private String resourceId = null;

    @SerializedName("reservation")
    private Reservation reservation = null;

    public CreateReservationRequest resourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }

    /**
     * Resource (store) identifier.
     *
     * @return resourceId
     */
    @Schema(required = true, description = "Resource (store) identifier.")
    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId;
    }

    public CreateReservationRequest reservation(Reservation reservation) {
        this.reservation = reservation;
        return this;
    }

    /**
     * Get reservation
     *
     * @return reservation
     */
    @Schema(required = true, description = "")
    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CreateReservationRequest createReservationRequest = (CreateReservationRequest) o;
        return Objects.equals(this.resourceId, createReservationRequest.resourceId)
                && Objects.equals(this.reservation, createReservationRequest.reservation);
    }

    @Override
    public int hashCode() {
        return Objects.hash(resourceId, reservation);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CreateReservationRequest {\n");

        sb.append("    resourceId: ").append(toIndentedString(resourceId)).append("\n");
        sb.append("    reservation: ").append(toIndentedString(reservation)).append("\n");
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
