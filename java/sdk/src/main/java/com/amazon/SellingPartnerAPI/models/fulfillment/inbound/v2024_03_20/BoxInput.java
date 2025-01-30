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
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.BoxContentInformationSource;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Dimensions;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ItemInput;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Weight;
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
 * Input information for a given box.
 */
@Schema(description = "Input information for a given box.")


public class BoxInput {
  @SerializedName("contentInformationSource")
  private BoxContentInformationSource contentInformationSource = null;

  @SerializedName("dimensions")
  private Dimensions dimensions = null;

  @SerializedName("items")
  private List<ItemInput> items = null;

  @SerializedName("quantity")
  private Integer quantity = null;

  @SerializedName("weight")
  private Weight weight = null;

  public BoxInput contentInformationSource(BoxContentInformationSource contentInformationSource) {
    this.contentInformationSource = contentInformationSource;
    return this;
  }

   /**
   * Get contentInformationSource
   * @return contentInformationSource
  **/
  @Schema(required = true, description = "")
  public BoxContentInformationSource getContentInformationSource() {
    return contentInformationSource;
  }

  public void setContentInformationSource(BoxContentInformationSource contentInformationSource) {
    this.contentInformationSource = contentInformationSource;
  }

  public BoxInput dimensions(Dimensions dimensions) {
    this.dimensions = dimensions;
    return this;
  }

   /**
   * Get dimensions
   * @return dimensions
  **/
  @Schema(required = true, description = "")
  public Dimensions getDimensions() {
    return dimensions;
  }

  public void setDimensions(Dimensions dimensions) {
    this.dimensions = dimensions;
  }

  public BoxInput items(List<ItemInput> items) {
    this.items = items;
    return this;
  }

  public BoxInput addItemsItem(ItemInput itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<ItemInput>();
    }
    this.items.add(itemsItem);
    return this;
  }

   /**
   * The items and their quantity in the box. This must be empty if the box &#x60;contentInformationSource&#x60; is &#x60;BARCODE_2D&#x60; or &#x60;MANUAL_PROCESS&#x60;.
   * @return items
  **/
  @Schema(description = "The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.")
  public List<ItemInput> getItems() {
    return items;
  }

  public void setItems(List<ItemInput> items) {
    this.items = items;
  }

  public BoxInput quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * The number of containers where all other properties like weight or dimensions are identical.
   * minimum: 1
   * maximum: 10000
   * @return quantity
  **/
  @Schema(required = true, description = "The number of containers where all other properties like weight or dimensions are identical.")
  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public BoxInput weight(Weight weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Get weight
   * @return weight
  **/
  @Schema(required = true, description = "")
  public Weight getWeight() {
    return weight;
  }

  public void setWeight(Weight weight) {
    this.weight = weight;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BoxInput boxInput = (BoxInput) o;
    return Objects.equals(this.contentInformationSource, boxInput.contentInformationSource) &&
        Objects.equals(this.dimensions, boxInput.dimensions) &&
        Objects.equals(this.items, boxInput.items) &&
        Objects.equals(this.quantity, boxInput.quantity) &&
        Objects.equals(this.weight, boxInput.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contentInformationSource, dimensions, items, quantity, weight);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BoxInput {\n");
    
    sb.append("    contentInformationSource: ").append(toIndentedString(contentInformationSource)).append("\n");
    sb.append("    dimensions: ").append(toIndentedString(dimensions)).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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
