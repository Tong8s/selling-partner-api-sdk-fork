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

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Box;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Pagination;
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
 * The &#x60;listPackingGroupBoxes&#x60; response.
 */
@Schema(description = "The `listPackingGroupBoxes` response.")


public class ListPackingGroupBoxesResponse {
  @SerializedName("boxes")
  private List<Box> boxes = new ArrayList<Box>();

  @SerializedName("pagination")
  private Pagination pagination = null;

  public ListPackingGroupBoxesResponse boxes(List<Box> boxes) {
    this.boxes = boxes;
    return this;
  }

  public ListPackingGroupBoxesResponse addBoxesItem(Box boxesItem) {
    this.boxes.add(boxesItem);
    return this;
  }

   /**
   * Provides the information about the list of boxes in the packing group.
   * @return boxes
  **/
  @Schema(required = true, description = "Provides the information about the list of boxes in the packing group.")
  public List<Box> getBoxes() {
    return boxes;
  }

  public void setBoxes(List<Box> boxes) {
    this.boxes = boxes;
  }

  public ListPackingGroupBoxesResponse pagination(Pagination pagination) {
    this.pagination = pagination;
    return this;
  }

   /**
   * Get pagination
   * @return pagination
  **/
  @Schema(description = "")
  public Pagination getPagination() {
    return pagination;
  }

  public void setPagination(Pagination pagination) {
    this.pagination = pagination;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListPackingGroupBoxesResponse listPackingGroupBoxesResponse = (ListPackingGroupBoxesResponse) o;
    return Objects.equals(this.boxes, listPackingGroupBoxesResponse.boxes) &&
        Objects.equals(this.pagination, listPackingGroupBoxesResponse.pagination);
  }

  @Override
  public int hashCode() {
    return Objects.hash(boxes, pagination);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListPackingGroupBoxesResponse {\n");
    
    sb.append("    boxes: ").append(toIndentedString(boxes)).append("\n");
    sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
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
