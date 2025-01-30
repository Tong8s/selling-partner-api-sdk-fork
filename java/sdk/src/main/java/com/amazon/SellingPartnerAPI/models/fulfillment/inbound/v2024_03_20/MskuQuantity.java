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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Represents an MSKU and the related quantity.
 */
@Schema(description = "Represents an MSKU and the related quantity.")


public class MskuQuantity {
  @SerializedName("msku")
  private String msku = null;

  @SerializedName("quantity")
  private Integer quantity = null;

  public MskuQuantity msku(String msku) {
    this.msku = msku;
    return this;
  }

   /**
   * The merchant SKU, a merchant-supplied identifier for a specific SKU.
   * @return msku
  **/
  @Schema(required = true, description = "The merchant SKU, a merchant-supplied identifier for a specific SKU.")
  public String getMsku() {
    return msku;
  }

  public void setMsku(String msku) {
    this.msku = msku;
  }

  public MskuQuantity quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * A positive integer.
   * minimum: 1
   * maximum: 10000
   * @return quantity
  **/
  @Schema(required = true, description = "A positive integer.")
  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MskuQuantity mskuQuantity = (MskuQuantity) o;
    return Objects.equals(this.msku, mskuQuantity.msku) &&
        Objects.equals(this.quantity, mskuQuantity.quantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(msku, quantity);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MskuQuantity {\n");
    
    sb.append("    msku: ").append(toIndentedString(msku)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
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
