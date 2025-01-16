/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.shipping.v2;

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
 * Denotes time of the day, used for defining opening or closing time of access points
 */
@Schema(description = "Denotes time of the day, used for defining opening or closing time of access points")


public class TimeOfDay {
  @SerializedName("hourOfDay")
  private Integer hourOfDay = null;

  @SerializedName("minuteOfHour")
  private Integer minuteOfHour = null;

  @SerializedName("secondOfMinute")
  private Integer secondOfMinute = null;

  public TimeOfDay hourOfDay(Integer hourOfDay) {
    this.hourOfDay = hourOfDay;
    return this;
  }

   /**
   * Get hourOfDay
   * @return hourOfDay
  **/
  @Schema(description = "")
  public Integer getHourOfDay() {
    return hourOfDay;
  }

  public void setHourOfDay(Integer hourOfDay) {
    this.hourOfDay = hourOfDay;
  }

  public TimeOfDay minuteOfHour(Integer minuteOfHour) {
    this.minuteOfHour = minuteOfHour;
    return this;
  }

   /**
   * Get minuteOfHour
   * @return minuteOfHour
  **/
  @Schema(description = "")
  public Integer getMinuteOfHour() {
    return minuteOfHour;
  }

  public void setMinuteOfHour(Integer minuteOfHour) {
    this.minuteOfHour = minuteOfHour;
  }

  public TimeOfDay secondOfMinute(Integer secondOfMinute) {
    this.secondOfMinute = secondOfMinute;
    return this;
  }

   /**
   * Get secondOfMinute
   * @return secondOfMinute
  **/
  @Schema(description = "")
  public Integer getSecondOfMinute() {
    return secondOfMinute;
  }

  public void setSecondOfMinute(Integer secondOfMinute) {
    this.secondOfMinute = secondOfMinute;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeOfDay timeOfDay = (TimeOfDay) o;
    return Objects.equals(this.hourOfDay, timeOfDay.hourOfDay) &&
        Objects.equals(this.minuteOfHour, timeOfDay.minuteOfHour) &&
        Objects.equals(this.secondOfMinute, timeOfDay.secondOfMinute);
  }

  @Override
  public int hashCode() {
    return Objects.hash(hourOfDay, minuteOfHour, secondOfMinute);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TimeOfDay {\n");
    
    sb.append("    hourOfDay: ").append(toIndentedString(hourOfDay)).append("\n");
    sb.append("    minuteOfHour: ").append(toIndentedString(minuteOfHour)).append("\n");
    sb.append("    secondOfMinute: ").append(toIndentedString(secondOfMinute)).append("\n");
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
