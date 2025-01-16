/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.productfees.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.productfees.v0.FeesEstimateRequest;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Request schema.
 */
@Schema(description = "Request schema.")


public class GetMyFeesEstimateRequest {
  @SerializedName("FeesEstimateRequest")
  private FeesEstimateRequest feesEstimateRequest = null;

  public GetMyFeesEstimateRequest feesEstimateRequest(FeesEstimateRequest feesEstimateRequest) {
    this.feesEstimateRequest = feesEstimateRequest;
    return this;
  }

   /**
   * Get feesEstimateRequest
   * @return feesEstimateRequest
  **/
  @Schema(description = "")
  public FeesEstimateRequest getFeesEstimateRequest() {
    return feesEstimateRequest;
  }

  public void setFeesEstimateRequest(FeesEstimateRequest feesEstimateRequest) {
    this.feesEstimateRequest = feesEstimateRequest;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetMyFeesEstimateRequest getMyFeesEstimateRequest = (GetMyFeesEstimateRequest) o;
    return Objects.equals(this.feesEstimateRequest, getMyFeesEstimateRequest.feesEstimateRequest);
  }

  @Override
  public int hashCode() {
    return Objects.hash(feesEstimateRequest);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetMyFeesEstimateRequest {\n");
    
    sb.append("    feesEstimateRequest: ").append(toIndentedString(feesEstimateRequest)).append("\n");
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
