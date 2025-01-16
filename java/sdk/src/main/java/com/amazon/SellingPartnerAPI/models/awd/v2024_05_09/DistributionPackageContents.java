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
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.DistributionPackageQuantity;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.ProductQuantity;
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
 * Represents the contents inside a package, which can be products or a nested package.
 */
@Schema(description = "Represents the contents inside a package, which can be products or a nested package.")


public class DistributionPackageContents {
  @SerializedName("packages")
  private List<DistributionPackageQuantity> packages = null;

  @SerializedName("products")
  private List<ProductQuantity> products = null;

  public DistributionPackageContents packages(List<DistributionPackageQuantity> packages) {
    this.packages = packages;
    return this;
  }

  public DistributionPackageContents addPackagesItem(DistributionPackageQuantity packagesItem) {
    if (this.packages == null) {
      this.packages = new ArrayList<DistributionPackageQuantity>();
    }
    this.packages.add(packagesItem);
    return this;
  }

   /**
   * This is required only when &#x60;DistributionPackageType&#x3D;PALLET&#x60;.
   * @return packages
  **/
  @Schema(description = "This is required only when `DistributionPackageType=PALLET`.")
  public List<DistributionPackageQuantity> getPackages() {
    return packages;
  }

  public void setPackages(List<DistributionPackageQuantity> packages) {
    this.packages = packages;
  }

  public DistributionPackageContents products(List<ProductQuantity> products) {
    this.products = products;
    return this;
  }

  public DistributionPackageContents addProductsItem(ProductQuantity productsItem) {
    if (this.products == null) {
      this.products = new ArrayList<ProductQuantity>();
    }
    this.products.add(productsItem);
    return this;
  }

   /**
   * This is required only when &#x60;DistributionPackageType&#x3D;CASE&#x60;.
   * @return products
  **/
  @Schema(description = "This is required only when `DistributionPackageType=CASE`.")
  public List<ProductQuantity> getProducts() {
    return products;
  }

  public void setProducts(List<ProductQuantity> products) {
    this.products = products;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DistributionPackageContents distributionPackageContents = (DistributionPackageContents) o;
    return Objects.equals(this.packages, distributionPackageContents.packages) &&
        Objects.equals(this.products, distributionPackageContents.products);
  }

  @Override
  public int hashCode() {
    return Objects.hash(packages, products);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DistributionPackageContents {\n");
    
    sb.append("    packages: ").append(toIndentedString(packages)).append("\n");
    sb.append("    products: ").append(toIndentedString(products)).append("\n");
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
