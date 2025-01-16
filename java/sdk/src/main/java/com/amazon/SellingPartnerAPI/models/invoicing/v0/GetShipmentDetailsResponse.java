/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.invoicing.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.invoicing.v0.ErrorList;
import com.amazon.SellingPartnerAPI.models.invoicing.v0.ShipmentDetail;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The response schema for the getShipmentDetails operation.
 */
@Schema(description = "The response schema for the getShipmentDetails operation.")


public class GetShipmentDetailsResponse {
  @SerializedName("payload")
  private ShipmentDetail payload = null;

  @SerializedName("errors")
  private ErrorList errors = null;

  public GetShipmentDetailsResponse payload(ShipmentDetail payload) {
    this.payload = payload;
    return this;
  }

   /**
   * Get payload
   * @return payload
  **/
  @Schema(description = "")
  public ShipmentDetail getPayload() {
    return payload;
  }

  public void setPayload(ShipmentDetail payload) {
    this.payload = payload;
  }

  public GetShipmentDetailsResponse errors(ErrorList errors) {
    this.errors = errors;
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @Schema(description = "")
  public ErrorList getErrors() {
    return errors;
  }

  public void setErrors(ErrorList errors) {
    this.errors = errors;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetShipmentDetailsResponse getShipmentDetailsResponse = (GetShipmentDetailsResponse) o;
    return Objects.equals(this.payload, getShipmentDetailsResponse.payload) &&
        Objects.equals(this.errors, getShipmentDetailsResponse.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(payload, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetShipmentDetailsResponse {\n");
    
    sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
