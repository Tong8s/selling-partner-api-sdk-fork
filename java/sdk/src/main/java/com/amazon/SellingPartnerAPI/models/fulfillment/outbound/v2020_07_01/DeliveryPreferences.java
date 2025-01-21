/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.outbound.v2020_07_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.outbound.v2020_07_01.DropOffLocation;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The delivery preferences applied to the destination address. These preferences are applied when possible and are best effort. This feature is currently supported only in the JP marketplace and not applicable for other marketplaces. For eligible orders, the default delivery preference will be to deliver the package unattended at the front door, unless you specify otherwise.
 */
@Schema(description = "The delivery preferences applied to the destination address. These preferences are applied when possible and are best effort. This feature is currently supported only in the JP marketplace and not applicable for other marketplaces. For eligible orders, the default delivery preference will be to deliver the package unattended at the front door, unless you specify otherwise.")


public class DeliveryPreferences {
  @SerializedName("deliveryInstructions")
  private String deliveryInstructions = null;

  @SerializedName("dropOffLocation")
  private DropOffLocation dropOffLocation = null;

  public DeliveryPreferences deliveryInstructions(String deliveryInstructions) {
    this.deliveryInstructions = deliveryInstructions;
    return this;
  }

   /**
   * Additional delivery instructions. For example, this could be instructions on how to enter a building, nearby landmark or navigation instructions, &#x27;Beware of dogs&#x27;, etc.
   * @return deliveryInstructions
  **/
  @Schema(description = "Additional delivery instructions. For example, this could be instructions on how to enter a building, nearby landmark or navigation instructions, 'Beware of dogs', etc.")
  public String getDeliveryInstructions() {
    return deliveryInstructions;
  }

  public void setDeliveryInstructions(String deliveryInstructions) {
    this.deliveryInstructions = deliveryInstructions;
  }

  public DeliveryPreferences dropOffLocation(DropOffLocation dropOffLocation) {
    this.dropOffLocation = dropOffLocation;
    return this;
  }

   /**
   * Get dropOffLocation
   * @return dropOffLocation
  **/
  @Schema(description = "")
  public DropOffLocation getDropOffLocation() {
    return dropOffLocation;
  }

  public void setDropOffLocation(DropOffLocation dropOffLocation) {
    this.dropOffLocation = dropOffLocation;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeliveryPreferences deliveryPreferences = (DeliveryPreferences) o;
    return Objects.equals(this.deliveryInstructions, deliveryPreferences.deliveryInstructions) &&
        Objects.equals(this.dropOffLocation, deliveryPreferences.dropOffLocation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(deliveryInstructions, dropOffLocation);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeliveryPreferences {\n");
    
    sb.append("    deliveryInstructions: ").append(toIndentedString(deliveryInstructions)).append("\n");
    sb.append("    dropOffLocation: ").append(toIndentedString(dropOffLocation)).append("\n");
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
