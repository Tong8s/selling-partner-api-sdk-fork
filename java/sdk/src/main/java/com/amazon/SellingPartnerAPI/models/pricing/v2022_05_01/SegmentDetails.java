/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.pricing.v2022_05_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.pricing.v2022_05_01.SampleLocation;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.math.BigDecimal;
/**
 * The details about the segment. The FeaturedOfferExpectedPrice API uses only the sampleLocation portion as input.
 */
@Schema(description = "The details about the segment. The FeaturedOfferExpectedPrice API uses only the sampleLocation portion as input.")


public class SegmentDetails {
  @SerializedName("glanceViewWeightPercentage")
  private BigDecimal glanceViewWeightPercentage = null;

  @SerializedName("sampleLocation")
  private SampleLocation sampleLocation = null;

  public SegmentDetails glanceViewWeightPercentage(BigDecimal glanceViewWeightPercentage) {
    this.glanceViewWeightPercentage = glanceViewWeightPercentage;
    return this;
  }

   /**
   * The glance view weighted percentage for this segment, which is the glance views for this segment as a percentage of total glance views across all segments for the ASIN. A higher percentage indicates that more Amazon customers receive this offer as the Featured Offer.
   * @return glanceViewWeightPercentage
  **/
  @Schema(description = "The glance view weighted percentage for this segment, which is the glance views for this segment as a percentage of total glance views across all segments for the ASIN. A higher percentage indicates that more Amazon customers receive this offer as the Featured Offer.")
  public BigDecimal getGlanceViewWeightPercentage() {
    return glanceViewWeightPercentage;
  }

  public void setGlanceViewWeightPercentage(BigDecimal glanceViewWeightPercentage) {
    this.glanceViewWeightPercentage = glanceViewWeightPercentage;
  }

  public SegmentDetails sampleLocation(SampleLocation sampleLocation) {
    this.sampleLocation = sampleLocation;
    return this;
  }

   /**
   * Get sampleLocation
   * @return sampleLocation
  **/
  @Schema(description = "")
  public SampleLocation getSampleLocation() {
    return sampleLocation;
  }

  public void setSampleLocation(SampleLocation sampleLocation) {
    this.sampleLocation = sampleLocation;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SegmentDetails segmentDetails = (SegmentDetails) o;
    return Objects.equals(this.glanceViewWeightPercentage, segmentDetails.glanceViewWeightPercentage) &&
        Objects.equals(this.sampleLocation, segmentDetails.sampleLocation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(glanceViewWeightPercentage, sampleLocation);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SegmentDetails {\n");
    
    sb.append("    glanceViewWeightPercentage: ").append(toIndentedString(glanceViewWeightPercentage)).append("\n");
    sb.append("    sampleLocation: ").append(toIndentedString(sampleLocation)).append("\n");
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
