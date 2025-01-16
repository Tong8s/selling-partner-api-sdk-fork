/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.notifications.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.notifications.v1.AggregationSettings;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * A filter used to select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications).
 */
@Schema(description = "A filter used to select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications).")


public class AggregationFilter {
  @SerializedName("aggregationSettings")
  private AggregationSettings aggregationSettings = null;

  public AggregationFilter aggregationSettings(AggregationSettings aggregationSettings) {
    this.aggregationSettings = aggregationSettings;
    return this;
  }

   /**
   * Get aggregationSettings
   * @return aggregationSettings
  **/
  @Schema(description = "")
  public AggregationSettings getAggregationSettings() {
    return aggregationSettings;
  }

  public void setAggregationSettings(AggregationSettings aggregationSettings) {
    this.aggregationSettings = aggregationSettings;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AggregationFilter aggregationFilter = (AggregationFilter) o;
    return Objects.equals(this.aggregationSettings, aggregationFilter.aggregationSettings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(aggregationSettings);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AggregationFilter {\n");
    
    sb.append("    aggregationSettings: ").append(toIndentedString(aggregationSettings)).append("\n");
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
