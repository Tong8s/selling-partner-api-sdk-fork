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

package com.amazon.SellingPartnerAPI.models.services.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.services.v1.AppointmentTimeInput;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Input for add appointment operation.
 */
@Schema(description = "Input for add appointment operation.")


public class AddAppointmentRequest {
  @SerializedName("appointmentTime")
  private AppointmentTimeInput appointmentTime = null;

  public AddAppointmentRequest appointmentTime(AppointmentTimeInput appointmentTime) {
    this.appointmentTime = appointmentTime;
    return this;
  }

   /**
   * Get appointmentTime
   * @return appointmentTime
  **/
  @Schema(required = true, description = "")
  public AppointmentTimeInput getAppointmentTime() {
    return appointmentTime;
  }

  public void setAppointmentTime(AppointmentTimeInput appointmentTime) {
    this.appointmentTime = appointmentTime;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AddAppointmentRequest addAppointmentRequest = (AddAppointmentRequest) o;
    return Objects.equals(this.appointmentTime, addAppointmentRequest.appointmentTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(appointmentTime);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AddAppointmentRequest {\n");
    
    sb.append("    appointmentTime: ").append(toIndentedString(appointmentTime)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
