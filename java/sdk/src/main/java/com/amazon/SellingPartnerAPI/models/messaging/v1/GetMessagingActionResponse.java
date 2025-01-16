/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.messaging.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.messaging.v1.ErrorList;
import com.amazon.SellingPartnerAPI.models.messaging.v1.GetMessagingActionResponseEmbedded;
import com.amazon.SellingPartnerAPI.models.messaging.v1.GetMessagingActionResponseLinks;
import com.amazon.SellingPartnerAPI.models.messaging.v1.MessagingAction;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Describes a messaging action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
 */
@Schema(description = "Describes a messaging action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.")


public class GetMessagingActionResponse {
  @SerializedName("_links")
  private GetMessagingActionResponseLinks _links = null;

  @SerializedName("_embedded")
  private GetMessagingActionResponseEmbedded _embedded = null;

  @SerializedName("payload")
  private MessagingAction payload = null;

  @SerializedName("errors")
  private ErrorList errors = null;

  public GetMessagingActionResponse _links(GetMessagingActionResponseLinks _links) {
    this._links = _links;
    return this;
  }

   /**
   * Get _links
   * @return _links
  **/
  @Schema(description = "")
  public GetMessagingActionResponseLinks getLinks() {
    return _links;
  }

  public void setLinks(GetMessagingActionResponseLinks _links) {
    this._links = _links;
  }

  public GetMessagingActionResponse _embedded(GetMessagingActionResponseEmbedded _embedded) {
    this._embedded = _embedded;
    return this;
  }

   /**
   * Get _embedded
   * @return _embedded
  **/
  @Schema(description = "")
  public GetMessagingActionResponseEmbedded getEmbedded() {
    return _embedded;
  }

  public void setEmbedded(GetMessagingActionResponseEmbedded _embedded) {
    this._embedded = _embedded;
  }

  public GetMessagingActionResponse payload(MessagingAction payload) {
    this.payload = payload;
    return this;
  }

   /**
   * Get payload
   * @return payload
  **/
  @Schema(description = "")
  public MessagingAction getPayload() {
    return payload;
  }

  public void setPayload(MessagingAction payload) {
    this.payload = payload;
  }

  public GetMessagingActionResponse errors(ErrorList errors) {
    this.errors = errors;
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @Schema(description = "")
  public ErrorList getErrors() {
    return errors;
  }

  public void setErrors(ErrorList errors) {
    this.errors = errors;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetMessagingActionResponse getMessagingActionResponse = (GetMessagingActionResponse) o;
    return Objects.equals(this._links, getMessagingActionResponse._links) &&
        Objects.equals(this._embedded, getMessagingActionResponse._embedded) &&
        Objects.equals(this.payload, getMessagingActionResponse.payload) &&
        Objects.equals(this.errors, getMessagingActionResponse.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(_links, _embedded, payload, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetMessagingActionResponse {\n");
    
    sb.append("    _links: ").append(toIndentedString(_links)).append("\n");
    sb.append("    _embedded: ").append(toIndentedString(_embedded)).append("\n");
    sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
