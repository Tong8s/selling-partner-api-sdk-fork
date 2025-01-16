/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;
/**
 * Selected delivery window attributes.
 */
@Schema(description = "Selected delivery window attributes.")


public class SelectedDeliveryWindow {
  @SerializedName("availabilityType")
  private String availabilityType = null;

  @SerializedName("deliveryWindowOptionId")
  private String deliveryWindowOptionId = null;

  @SerializedName("editableUntil")
  private OffsetDateTime editableUntil = null;

  @SerializedName("endDate")
  private OffsetDateTime endDate = null;

  @SerializedName("startDate")
  private OffsetDateTime startDate = null;

  public SelectedDeliveryWindow availabilityType(String availabilityType) {
    this.availabilityType = availabilityType;
    return this;
  }

   /**
   * Identifies type of Delivery Window Availability. Values: &#x60;AVAILABLE&#x60;, &#x60;CONGESTED&#x60;
   * @return availabilityType
  **/
  @Schema(required = true, description = "Identifies type of Delivery Window Availability. Values: `AVAILABLE`, `CONGESTED`")
  public String getAvailabilityType() {
    return availabilityType;
  }

  public void setAvailabilityType(String availabilityType) {
    this.availabilityType = availabilityType;
  }

  public SelectedDeliveryWindow deliveryWindowOptionId(String deliveryWindowOptionId) {
    this.deliveryWindowOptionId = deliveryWindowOptionId;
    return this;
  }

   /**
   * Identifier of a delivery window option. A delivery window option represent one option for when a shipment is expected to be delivered.
   * @return deliveryWindowOptionId
  **/
  @Schema(required = true, description = "Identifier of a delivery window option. A delivery window option represent one option for when a shipment is expected to be delivered.")
  public String getDeliveryWindowOptionId() {
    return deliveryWindowOptionId;
  }

  public void setDeliveryWindowOptionId(String deliveryWindowOptionId) {
    this.deliveryWindowOptionId = deliveryWindowOptionId;
  }

  public SelectedDeliveryWindow editableUntil(OffsetDateTime editableUntil) {
    this.editableUntil = editableUntil;
    return this;
  }

   /**
   * The timestamp at which this Window can no longer be edited.
   * @return editableUntil
  **/
  @Schema(description = "The timestamp at which this Window can no longer be edited.")
  public OffsetDateTime getEditableUntil() {
    return editableUntil;
  }

  public void setEditableUntil(OffsetDateTime editableUntil) {
    this.editableUntil = editableUntil;
  }

  public SelectedDeliveryWindow endDate(OffsetDateTime endDate) {
    this.endDate = endDate;
    return this;
  }

   /**
   * The end timestamp of the window.
   * @return endDate
  **/
  @Schema(required = true, description = "The end timestamp of the window.")
  public OffsetDateTime getEndDate() {
    return endDate;
  }

  public void setEndDate(OffsetDateTime endDate) {
    this.endDate = endDate;
  }

  public SelectedDeliveryWindow startDate(OffsetDateTime startDate) {
    this.startDate = startDate;
    return this;
  }

   /**
   * The start timestamp of the window.
   * @return startDate
  **/
  @Schema(required = true, description = "The start timestamp of the window.")
  public OffsetDateTime getStartDate() {
    return startDate;
  }

  public void setStartDate(OffsetDateTime startDate) {
    this.startDate = startDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SelectedDeliveryWindow selectedDeliveryWindow = (SelectedDeliveryWindow) o;
    return Objects.equals(this.availabilityType, selectedDeliveryWindow.availabilityType) &&
        Objects.equals(this.deliveryWindowOptionId, selectedDeliveryWindow.deliveryWindowOptionId) &&
        Objects.equals(this.editableUntil, selectedDeliveryWindow.editableUntil) &&
        Objects.equals(this.endDate, selectedDeliveryWindow.endDate) &&
        Objects.equals(this.startDate, selectedDeliveryWindow.startDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(availabilityType, deliveryWindowOptionId, editableUntil, endDate, startDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SelectedDeliveryWindow {\n");
    
    sb.append("    availabilityType: ").append(toIndentedString(availabilityType)).append("\n");
    sb.append("    deliveryWindowOptionId: ").append(toIndentedString(deliveryWindowOptionId)).append("\n");
    sb.append("    editableUntil: ").append(toIndentedString(editableUntil)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
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
