/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.finances.v2024_06_19;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.finances.v2024_06_19.Breakdowns;
import com.amazon.SellingPartnerAPI.models.finances.v2024_06_19.Contexts;
import com.amazon.SellingPartnerAPI.models.finances.v2024_06_19.Currency;
import com.amazon.SellingPartnerAPI.models.finances.v2024_06_19.ItemRelatedIdentifiers;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Additional information about the items in a transaction.
 */
@Schema(description = "Additional information about the items in a transaction.")


public class Item {
  @SerializedName("description")
  private String description = null;

  @SerializedName("relatedIdentifiers")
  private ItemRelatedIdentifiers relatedIdentifiers = null;

  @SerializedName("totalAmount")
  private Currency totalAmount = null;

  @SerializedName("breakdowns")
  private Breakdowns breakdowns = null;

  @SerializedName("contexts")
  private Contexts contexts = null;

  public Item description(String description) {
    this.description = description;
    return this;
  }

   /**
   * A description of the items in a transaction.
   * @return description
  **/
  @Schema(description = "A description of the items in a transaction.")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Item relatedIdentifiers(ItemRelatedIdentifiers relatedIdentifiers) {
    this.relatedIdentifiers = relatedIdentifiers;
    return this;
  }

   /**
   * Get relatedIdentifiers
   * @return relatedIdentifiers
  **/
  @Schema(description = "")
  public ItemRelatedIdentifiers getRelatedIdentifiers() {
    return relatedIdentifiers;
  }

  public void setRelatedIdentifiers(ItemRelatedIdentifiers relatedIdentifiers) {
    this.relatedIdentifiers = relatedIdentifiers;
  }

  public Item totalAmount(Currency totalAmount) {
    this.totalAmount = totalAmount;
    return this;
  }

   /**
   * Get totalAmount
   * @return totalAmount
  **/
  @Schema(description = "")
  public Currency getTotalAmount() {
    return totalAmount;
  }

  public void setTotalAmount(Currency totalAmount) {
    this.totalAmount = totalAmount;
  }

  public Item breakdowns(Breakdowns breakdowns) {
    this.breakdowns = breakdowns;
    return this;
  }

   /**
   * Get breakdowns
   * @return breakdowns
  **/
  @Schema(description = "")
  public Breakdowns getBreakdowns() {
    return breakdowns;
  }

  public void setBreakdowns(Breakdowns breakdowns) {
    this.breakdowns = breakdowns;
  }

  public Item contexts(Contexts contexts) {
    this.contexts = contexts;
    return this;
  }

   /**
   * Get contexts
   * @return contexts
  **/
  @Schema(description = "")
  public Contexts getContexts() {
    return contexts;
  }

  public void setContexts(Contexts contexts) {
    this.contexts = contexts;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Item item = (Item) o;
    return Objects.equals(this.description, item.description) &&
        Objects.equals(this.relatedIdentifiers, item.relatedIdentifiers) &&
        Objects.equals(this.totalAmount, item.totalAmount) &&
        Objects.equals(this.breakdowns, item.breakdowns) &&
        Objects.equals(this.contexts, item.contexts);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, relatedIdentifiers, totalAmount, breakdowns, contexts);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Item {\n");
    
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    relatedIdentifiers: ").append(toIndentedString(relatedIdentifiers)).append("\n");
    sb.append("    totalAmount: ").append(toIndentedString(totalAmount)).append("\n");
    sb.append("    breakdowns: ").append(toIndentedString(breakdowns)).append("\n");
    sb.append("    contexts: ").append(toIndentedString(contexts)).append("\n");
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
