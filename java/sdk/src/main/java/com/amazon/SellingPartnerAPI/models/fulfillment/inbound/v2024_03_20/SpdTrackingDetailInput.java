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
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.SpdTrackingItemInput;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/**
 * Contains input information to update Small Parcel Delivery (SPD) tracking information.
 */
@Schema(description = "Contains input information to update Small Parcel Delivery (SPD) tracking information.")


public class SpdTrackingDetailInput {
  @SerializedName("spdTrackingItems")
  private List<SpdTrackingItemInput> spdTrackingItems = new ArrayList<SpdTrackingItemInput>();

  public SpdTrackingDetailInput spdTrackingItems(List<SpdTrackingItemInput> spdTrackingItems) {
    this.spdTrackingItems = spdTrackingItems;
    return this;
  }

  public SpdTrackingDetailInput addSpdTrackingItemsItem(SpdTrackingItemInput spdTrackingItemsItem) {
    this.spdTrackingItems.add(spdTrackingItemsItem);
    return this;
  }

   /**
   * List of Small Parcel Delivery (SPD) tracking items input.
   * @return spdTrackingItems
  **/
  @Schema(required = true, description = "List of Small Parcel Delivery (SPD) tracking items input.")
  public List<SpdTrackingItemInput> getSpdTrackingItems() {
    return spdTrackingItems;
  }

  public void setSpdTrackingItems(List<SpdTrackingItemInput> spdTrackingItems) {
    this.spdTrackingItems = spdTrackingItems;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SpdTrackingDetailInput spdTrackingDetailInput = (SpdTrackingDetailInput) o;
    return Objects.equals(this.spdTrackingItems, spdTrackingDetailInput.spdTrackingItems);
  }

  @Override
  public int hashCode() {
    return Objects.hash(spdTrackingItems);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SpdTrackingDetailInput {\n");
    
    sb.append("    spdTrackingItems: ").append(toIndentedString(spdTrackingItems)).append("\n");
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
