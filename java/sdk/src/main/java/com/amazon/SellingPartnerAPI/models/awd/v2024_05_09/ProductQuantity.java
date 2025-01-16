/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.awd.v2024_05_09;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.PrepDetails;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.ProductAttribute;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
/**
 * Represents a product with the SKU details and the corresponding quantity.
 */
@Schema(description = "Represents a product with the SKU details and the corresponding quantity.")


public class ProductQuantity {
  @SerializedName("attributes")
  private List<ProductAttribute> attributes = null;

  @SerializedName("quantity")
  private Integer quantity = null;

  @SerializedName("sku")
  private String sku = null;

  @SerializedName("expiration")
  private OffsetDateTime expiration = null;

  @SerializedName("prepDetails")
  private PrepDetails prepDetails = null;

  public ProductQuantity attributes(List<ProductAttribute> attributes) {
    this.attributes = attributes;
    return this;
  }

  public ProductQuantity addAttributesItem(ProductAttribute attributesItem) {
    if (this.attributes == null) {
      this.attributes = new ArrayList<ProductAttribute>();
    }
    this.attributes.add(attributesItem);
    return this;
  }

   /**
   * Attributes for this instance of the product. For example, already-prepped, or other attributes that distinguish the product beyond the SKU.
   * @return attributes
  **/
  @Schema(example = "{\"name\":\"TestAttribute\",\"value\":\"TestAttributeValue\"}", description = "Attributes for this instance of the product. For example, already-prepped, or other attributes that distinguish the product beyond the SKU.")
  public List<ProductAttribute> getAttributes() {
    return attributes;
  }

  public void setAttributes(List<ProductAttribute> attributes) {
    this.attributes = attributes;
  }

  public ProductQuantity quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Product quantity.
   * @return quantity
  **/
  @Schema(required = true, description = "Product quantity.")
  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public ProductQuantity sku(String sku) {
    this.sku = sku;
    return this;
  }

   /**
   * The seller or merchant SKU.
   * @return sku
  **/
  @Schema(required = true, description = "The seller or merchant SKU.")
  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public ProductQuantity expiration(OffsetDateTime expiration) {
    this.expiration = expiration;
    return this;
  }

   /**
   * The expiration date for the SKU. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
   * @return expiration
  **/
  @Schema(description = "The expiration date for the SKU. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.")
  public OffsetDateTime getExpiration() {
    return expiration;
  }

  public void setExpiration(OffsetDateTime expiration) {
    this.expiration = expiration;
  }

  public ProductQuantity prepDetails(PrepDetails prepDetails) {
    this.prepDetails = prepDetails;
    return this;
  }

   /**
   * Get prepDetails
   * @return prepDetails
  **/
  @Schema(description = "")
  public PrepDetails getPrepDetails() {
    return prepDetails;
  }

  public void setPrepDetails(PrepDetails prepDetails) {
    this.prepDetails = prepDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductQuantity productQuantity = (ProductQuantity) o;
    return Objects.equals(this.attributes, productQuantity.attributes) &&
        Objects.equals(this.quantity, productQuantity.quantity) &&
        Objects.equals(this.sku, productQuantity.sku) &&
        Objects.equals(this.expiration, productQuantity.expiration) &&
        Objects.equals(this.prepDetails, productQuantity.prepDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(attributes, quantity, sku, expiration, prepDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductQuantity {\n");
    
    sb.append("    attributes: ").append(toIndentedString(attributes)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
    sb.append("    expiration: ").append(toIndentedString(expiration)).append("\n");
    sb.append("    prepDetails: ").append(toIndentedString(prepDetails)).append("\n");
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
