/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.replenishment.v2022_11_07;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.replenishment.v2022_11_07.TimeInterval;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.math.BigDecimal;
/**
 * An object which contains metric data for a selling partner.
 */
@Schema(description = "An object which contains metric data for a selling partner.")


public class GetSellingPartnerMetricsResponseMetric {
  @SerializedName("notDeliveredDueToOOS")
  private Double notDeliveredDueToOOS = null;

  @SerializedName("totalSubscriptionsRevenue")
  private Double totalSubscriptionsRevenue = null;

  @SerializedName("shippedSubscriptionUnits")
  private BigDecimal shippedSubscriptionUnits = null;

  @SerializedName("activeSubscriptions")
  private BigDecimal activeSubscriptions = null;

  @SerializedName("subscriberAverageRevenue")
  private Double subscriberAverageRevenue = null;

  @SerializedName("nonSubscriberAverageRevenue")
  private Double nonSubscriberAverageRevenue = null;

  @SerializedName("lostRevenueDueToOOS")
  private Double lostRevenueDueToOOS = null;

  @SerializedName("subscriberAverageReorders")
  private Double subscriberAverageReorders = null;

  @SerializedName("nonSubscriberAverageReorders")
  private Double nonSubscriberAverageReorders = null;

  @SerializedName("couponsRevenuePenetration")
  private Double couponsRevenuePenetration = null;

  @SerializedName("revenueFromSubscriptionsWithMultipleDeliveries")
  private Double revenueFromSubscriptionsWithMultipleDeliveries = null;

  @SerializedName("revenueFromActiveSubscriptionsWithSingleDelivery")
  private Double revenueFromActiveSubscriptionsWithSingleDelivery = null;

  @SerializedName("revenueFromCancelledSubscriptionsAfterSingleDelivery")
  private Double revenueFromCancelledSubscriptionsAfterSingleDelivery = null;

  @SerializedName("subscriberRetentionFor30Days")
  private Double subscriberRetentionFor30Days = null;

  @SerializedName("subscriberRetentionFor90Days")
  private Double subscriberRetentionFor90Days = null;

  @SerializedName("revenuePenetrationFor0PercentSellerFunding")
  private Double revenuePenetrationFor0PercentSellerFunding = null;

  @SerializedName("revenuePenetrationFor5PercentSellerFunding")
  private Double revenuePenetrationFor5PercentSellerFunding = null;

  @SerializedName("revenuePenetrationFor10PercentSellerFunding")
  private Double revenuePenetrationFor10PercentSellerFunding = null;

  @SerializedName("revenuePenetrationFor5PlusPercentSellerFunding")
  private Double revenuePenetrationFor5PlusPercentSellerFunding = null;

  @SerializedName("shareOfCouponSubscriptions")
  private Double shareOfCouponSubscriptions = null;

  @SerializedName("timeInterval")
  private TimeInterval timeInterval = null;

  @SerializedName("currencyCode")
  private String currencyCode = null;

  public GetSellingPartnerMetricsResponseMetric notDeliveredDueToOOS(Double notDeliveredDueToOOS) {
    this.notDeliveredDueToOOS = notDeliveredDueToOOS;
    return this;
  }

   /**
   * The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return notDeliveredDueToOOS
  **/
  @Schema(description = "The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable to PERFORMANCE timePeriodType.")
  public Double getNotDeliveredDueToOOS() {
    return notDeliveredDueToOOS;
  }

  public void setNotDeliveredDueToOOS(Double notDeliveredDueToOOS) {
    this.notDeliveredDueToOOS = notDeliveredDueToOOS;
  }

  public GetSellingPartnerMetricsResponseMetric totalSubscriptionsRevenue(Double totalSubscriptionsRevenue) {
    this.totalSubscriptionsRevenue = totalSubscriptionsRevenue;
    return this;
  }

   /**
   * The revenue generated from subscriptions over a period of time. Applicable for both the PERFORMANCE and FORECAST timePeriodType.
   * minimum: 0
   * @return totalSubscriptionsRevenue
  **/
  @Schema(description = "The revenue generated from subscriptions over a period of time. Applicable for both the PERFORMANCE and FORECAST timePeriodType.")
  public Double getTotalSubscriptionsRevenue() {
    return totalSubscriptionsRevenue;
  }

  public void setTotalSubscriptionsRevenue(Double totalSubscriptionsRevenue) {
    this.totalSubscriptionsRevenue = totalSubscriptionsRevenue;
  }

  public GetSellingPartnerMetricsResponseMetric shippedSubscriptionUnits(BigDecimal shippedSubscriptionUnits) {
    this.shippedSubscriptionUnits = shippedSubscriptionUnits;
    return this;
  }

   /**
   * The number of units shipped to the subscribers over a period of time. Applicable for both the PERFORMANCE and FORECAST timePeriodType.
   * minimum: 0
   * @return shippedSubscriptionUnits
  **/
  @Schema(description = "The number of units shipped to the subscribers over a period of time. Applicable for both the PERFORMANCE and FORECAST timePeriodType.")
  public BigDecimal getShippedSubscriptionUnits() {
    return shippedSubscriptionUnits;
  }

  public void setShippedSubscriptionUnits(BigDecimal shippedSubscriptionUnits) {
    this.shippedSubscriptionUnits = shippedSubscriptionUnits;
  }

  public GetSellingPartnerMetricsResponseMetric activeSubscriptions(BigDecimal activeSubscriptions) {
    this.activeSubscriptions = activeSubscriptions;
    return this;
  }

   /**
   * The number of active subscriptions present at the end of the period. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return activeSubscriptions
  **/
  @Schema(description = "The number of active subscriptions present at the end of the period. Applicable to PERFORMANCE timePeriodType.")
  public BigDecimal getActiveSubscriptions() {
    return activeSubscriptions;
  }

  public void setActiveSubscriptions(BigDecimal activeSubscriptions) {
    this.activeSubscriptions = activeSubscriptions;
  }

  public GetSellingPartnerMetricsResponseMetric subscriberAverageRevenue(Double subscriberAverageRevenue) {
    this.subscriberAverageRevenue = subscriberAverageRevenue;
    return this;
  }

   /**
   * The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return subscriberAverageRevenue
  **/
  @Schema(description = "The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable to PERFORMANCE timePeriodType.")
  public Double getSubscriberAverageRevenue() {
    return subscriberAverageRevenue;
  }

  public void setSubscriberAverageRevenue(Double subscriberAverageRevenue) {
    this.subscriberAverageRevenue = subscriberAverageRevenue;
  }

  public GetSellingPartnerMetricsResponseMetric nonSubscriberAverageRevenue(Double nonSubscriberAverageRevenue) {
    this.nonSubscriberAverageRevenue = nonSubscriberAverageRevenue;
    return this;
  }

   /**
   * The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return nonSubscriberAverageRevenue
  **/
  @Schema(description = "The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable to PERFORMANCE timePeriodType.")
  public Double getNonSubscriberAverageRevenue() {
    return nonSubscriberAverageRevenue;
  }

  public void setNonSubscriberAverageRevenue(Double nonSubscriberAverageRevenue) {
    this.nonSubscriberAverageRevenue = nonSubscriberAverageRevenue;
  }

  public GetSellingPartnerMetricsResponseMetric lostRevenueDueToOOS(Double lostRevenueDueToOOS) {
    this.lostRevenueDueToOOS = lostRevenueDueToOOS;
    return this;
  }

   /**
   * The revenue that would have been generated had there not been out of stock. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return lostRevenueDueToOOS
  **/
  @Schema(description = "The revenue that would have been generated had there not been out of stock. Applicable to PERFORMANCE timePeriodType.")
  public Double getLostRevenueDueToOOS() {
    return lostRevenueDueToOOS;
  }

  public void setLostRevenueDueToOOS(Double lostRevenueDueToOOS) {
    this.lostRevenueDueToOOS = lostRevenueDueToOOS;
  }

  public GetSellingPartnerMetricsResponseMetric subscriberAverageReorders(Double subscriberAverageReorders) {
    this.subscriberAverageReorders = subscriberAverageReorders;
    return this;
  }

   /**
   * The average reorders per subscriber of the program over a period of 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return subscriberAverageReorders
  **/
  @Schema(description = "The average reorders per subscriber of the program over a period of 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getSubscriberAverageReorders() {
    return subscriberAverageReorders;
  }

  public void setSubscriberAverageReorders(Double subscriberAverageReorders) {
    this.subscriberAverageReorders = subscriberAverageReorders;
  }

  public GetSellingPartnerMetricsResponseMetric nonSubscriberAverageReorders(Double nonSubscriberAverageReorders) {
    this.nonSubscriberAverageReorders = nonSubscriberAverageReorders;
    return this;
  }

   /**
   * The average reorders per non-subscriber of the program over a period of past 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return nonSubscriberAverageReorders
  **/
  @Schema(description = "The average reorders per non-subscriber of the program over a period of past 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getNonSubscriberAverageReorders() {
    return nonSubscriberAverageReorders;
  }

  public void setNonSubscriberAverageReorders(Double nonSubscriberAverageReorders) {
    this.nonSubscriberAverageReorders = nonSubscriberAverageReorders;
  }

  public GetSellingPartnerMetricsResponseMetric couponsRevenuePenetration(Double couponsRevenuePenetration) {
    this.couponsRevenuePenetration = couponsRevenuePenetration;
    return this;
  }

   /**
   * The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return couponsRevenuePenetration
  **/
  @Schema(description = "The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable to PERFORMANCE timePeriodType.")
  public Double getCouponsRevenuePenetration() {
    return couponsRevenuePenetration;
  }

  public void setCouponsRevenuePenetration(Double couponsRevenuePenetration) {
    this.couponsRevenuePenetration = couponsRevenuePenetration;
  }

  public GetSellingPartnerMetricsResponseMetric revenueFromSubscriptionsWithMultipleDeliveries(Double revenueFromSubscriptionsWithMultipleDeliveries) {
    this.revenueFromSubscriptionsWithMultipleDeliveries = revenueFromSubscriptionsWithMultipleDeliveries;
    return this;
  }

   /**
   * The subscription revenue generated from subscriptions with over two deliveries over the past 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return revenueFromSubscriptionsWithMultipleDeliveries
  **/
  @Schema(description = "The subscription revenue generated from subscriptions with over two deliveries over the past 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenueFromSubscriptionsWithMultipleDeliveries() {
    return revenueFromSubscriptionsWithMultipleDeliveries;
  }

  public void setRevenueFromSubscriptionsWithMultipleDeliveries(Double revenueFromSubscriptionsWithMultipleDeliveries) {
    this.revenueFromSubscriptionsWithMultipleDeliveries = revenueFromSubscriptionsWithMultipleDeliveries;
  }

  public GetSellingPartnerMetricsResponseMetric revenueFromActiveSubscriptionsWithSingleDelivery(Double revenueFromActiveSubscriptionsWithSingleDelivery) {
    this.revenueFromActiveSubscriptionsWithSingleDelivery = revenueFromActiveSubscriptionsWithSingleDelivery;
    return this;
  }

   /**
   * The subscription revenue generated from active subscriptions with one delivery over the past 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return revenueFromActiveSubscriptionsWithSingleDelivery
  **/
  @Schema(description = "The subscription revenue generated from active subscriptions with one delivery over the past 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenueFromActiveSubscriptionsWithSingleDelivery() {
    return revenueFromActiveSubscriptionsWithSingleDelivery;
  }

  public void setRevenueFromActiveSubscriptionsWithSingleDelivery(Double revenueFromActiveSubscriptionsWithSingleDelivery) {
    this.revenueFromActiveSubscriptionsWithSingleDelivery = revenueFromActiveSubscriptionsWithSingleDelivery;
  }

  public GetSellingPartnerMetricsResponseMetric revenueFromCancelledSubscriptionsAfterSingleDelivery(Double revenueFromCancelledSubscriptionsAfterSingleDelivery) {
    this.revenueFromCancelledSubscriptionsAfterSingleDelivery = revenueFromCancelledSubscriptionsAfterSingleDelivery;
    return this;
  }

   /**
   * The subscription revenue generated from subscriptions which are cancelled after one delivery over the past 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * @return revenueFromCancelledSubscriptionsAfterSingleDelivery
  **/
  @Schema(description = "The subscription revenue generated from subscriptions which are cancelled after one delivery over the past 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenueFromCancelledSubscriptionsAfterSingleDelivery() {
    return revenueFromCancelledSubscriptionsAfterSingleDelivery;
  }

  public void setRevenueFromCancelledSubscriptionsAfterSingleDelivery(Double revenueFromCancelledSubscriptionsAfterSingleDelivery) {
    this.revenueFromCancelledSubscriptionsAfterSingleDelivery = revenueFromCancelledSubscriptionsAfterSingleDelivery;
  }

  public GetSellingPartnerMetricsResponseMetric subscriberRetentionFor30Days(Double subscriberRetentionFor30Days) {
    this.subscriberRetentionFor30Days = subscriberRetentionFor30Days;
    return this;
  }

   /**
   * The percentage of subscriptions retained after 30 days of subscription creation. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return subscriberRetentionFor30Days
  **/
  @Schema(description = "The percentage of subscriptions retained after 30 days of subscription creation. Applicable to PERFORMANCE timePeriodType.")
  public Double getSubscriberRetentionFor30Days() {
    return subscriberRetentionFor30Days;
  }

  public void setSubscriberRetentionFor30Days(Double subscriberRetentionFor30Days) {
    this.subscriberRetentionFor30Days = subscriberRetentionFor30Days;
  }

  public GetSellingPartnerMetricsResponseMetric subscriberRetentionFor90Days(Double subscriberRetentionFor90Days) {
    this.subscriberRetentionFor90Days = subscriberRetentionFor90Days;
    return this;
  }

   /**
   * The percentage of subscriptions retained after 90 days of subscription creation. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return subscriberRetentionFor90Days
  **/
  @Schema(description = "The percentage of subscriptions retained after 90 days of subscription creation. Applicable to PERFORMANCE timePeriodType.")
  public Double getSubscriberRetentionFor90Days() {
    return subscriberRetentionFor90Days;
  }

  public void setSubscriberRetentionFor90Days(Double subscriberRetentionFor90Days) {
    this.subscriberRetentionFor90Days = subscriberRetentionFor90Days;
  }

  public GetSellingPartnerMetricsResponseMetric revenuePenetrationFor0PercentSellerFunding(Double revenuePenetrationFor0PercentSellerFunding) {
    this.revenuePenetrationFor0PercentSellerFunding = revenuePenetrationFor0PercentSellerFunding;
    return this;
  }

   /**
   * The percentage of subscription revenue generated by offers with 0% seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return revenuePenetrationFor0PercentSellerFunding
  **/
  @Schema(description = "The percentage of subscription revenue generated by offers with 0% seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenuePenetrationFor0PercentSellerFunding() {
    return revenuePenetrationFor0PercentSellerFunding;
  }

  public void setRevenuePenetrationFor0PercentSellerFunding(Double revenuePenetrationFor0PercentSellerFunding) {
    this.revenuePenetrationFor0PercentSellerFunding = revenuePenetrationFor0PercentSellerFunding;
  }

  public GetSellingPartnerMetricsResponseMetric revenuePenetrationFor5PercentSellerFunding(Double revenuePenetrationFor5PercentSellerFunding) {
    this.revenuePenetrationFor5PercentSellerFunding = revenuePenetrationFor5PercentSellerFunding;
    return this;
  }

   /**
   * [Applicable only for Sellers] The percentage of subscription revenue generated by offers with 5% seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return revenuePenetrationFor5PercentSellerFunding
  **/
  @Schema(description = "[Applicable only for Sellers] The percentage of subscription revenue generated by offers with 5% seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenuePenetrationFor5PercentSellerFunding() {
    return revenuePenetrationFor5PercentSellerFunding;
  }

  public void setRevenuePenetrationFor5PercentSellerFunding(Double revenuePenetrationFor5PercentSellerFunding) {
    this.revenuePenetrationFor5PercentSellerFunding = revenuePenetrationFor5PercentSellerFunding;
  }

  public GetSellingPartnerMetricsResponseMetric revenuePenetrationFor10PercentSellerFunding(Double revenuePenetrationFor10PercentSellerFunding) {
    this.revenuePenetrationFor10PercentSellerFunding = revenuePenetrationFor10PercentSellerFunding;
    return this;
  }

   /**
   * [Applicable only for Sellers] The percentage of subscription revenue generated by offers with 10% seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return revenuePenetrationFor10PercentSellerFunding
  **/
  @Schema(description = "[Applicable only for Sellers] The percentage of subscription revenue generated by offers with 10% seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenuePenetrationFor10PercentSellerFunding() {
    return revenuePenetrationFor10PercentSellerFunding;
  }

  public void setRevenuePenetrationFor10PercentSellerFunding(Double revenuePenetrationFor10PercentSellerFunding) {
    this.revenuePenetrationFor10PercentSellerFunding = revenuePenetrationFor10PercentSellerFunding;
  }

  public GetSellingPartnerMetricsResponseMetric revenuePenetrationFor5PlusPercentSellerFunding(Double revenuePenetrationFor5PlusPercentSellerFunding) {
    this.revenuePenetrationFor5PlusPercentSellerFunding = revenuePenetrationFor5PlusPercentSellerFunding;
    return this;
  }

   /**
   * [Applicable only for vendors] The percentage of subscription revenue generated by offers with 5% or above seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return revenuePenetrationFor5PlusPercentSellerFunding
  **/
  @Schema(description = "[Applicable only for vendors] The percentage of subscription revenue generated by offers with 5% or above seller-funded discount over the last 12 months. Applicable to PERFORMANCE timePeriodType.")
  public Double getRevenuePenetrationFor5PlusPercentSellerFunding() {
    return revenuePenetrationFor5PlusPercentSellerFunding;
  }

  public void setRevenuePenetrationFor5PlusPercentSellerFunding(Double revenuePenetrationFor5PlusPercentSellerFunding) {
    this.revenuePenetrationFor5PlusPercentSellerFunding = revenuePenetrationFor5PlusPercentSellerFunding;
  }

  public GetSellingPartnerMetricsResponseMetric shareOfCouponSubscriptions(Double shareOfCouponSubscriptions) {
    this.shareOfCouponSubscriptions = shareOfCouponSubscriptions;
    return this;
  }

   /**
   * The percentage of new subscriptions acquired through coupons. Applicable to PERFORMANCE timePeriodType.
   * minimum: 0
   * maximum: 100
   * @return shareOfCouponSubscriptions
  **/
  @Schema(description = "The percentage of new subscriptions acquired through coupons. Applicable to PERFORMANCE timePeriodType.")
  public Double getShareOfCouponSubscriptions() {
    return shareOfCouponSubscriptions;
  }

  public void setShareOfCouponSubscriptions(Double shareOfCouponSubscriptions) {
    this.shareOfCouponSubscriptions = shareOfCouponSubscriptions;
  }

  public GetSellingPartnerMetricsResponseMetric timeInterval(TimeInterval timeInterval) {
    this.timeInterval = timeInterval;
    return this;
  }

   /**
   * Get timeInterval
   * @return timeInterval
  **/
  @Schema(description = "")
  public TimeInterval getTimeInterval() {
    return timeInterval;
  }

  public void setTimeInterval(TimeInterval timeInterval) {
    this.timeInterval = timeInterval;
  }

  public GetSellingPartnerMetricsResponseMetric currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * The currency code in ISO 4217 format.
   * @return currencyCode
  **/
  @Schema(description = "The currency code in ISO 4217 format.")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetSellingPartnerMetricsResponseMetric getSellingPartnerMetricsResponseMetric = (GetSellingPartnerMetricsResponseMetric) o;
    return Objects.equals(this.notDeliveredDueToOOS, getSellingPartnerMetricsResponseMetric.notDeliveredDueToOOS) &&
        Objects.equals(this.totalSubscriptionsRevenue, getSellingPartnerMetricsResponseMetric.totalSubscriptionsRevenue) &&
        Objects.equals(this.shippedSubscriptionUnits, getSellingPartnerMetricsResponseMetric.shippedSubscriptionUnits) &&
        Objects.equals(this.activeSubscriptions, getSellingPartnerMetricsResponseMetric.activeSubscriptions) &&
        Objects.equals(this.subscriberAverageRevenue, getSellingPartnerMetricsResponseMetric.subscriberAverageRevenue) &&
        Objects.equals(this.nonSubscriberAverageRevenue, getSellingPartnerMetricsResponseMetric.nonSubscriberAverageRevenue) &&
        Objects.equals(this.lostRevenueDueToOOS, getSellingPartnerMetricsResponseMetric.lostRevenueDueToOOS) &&
        Objects.equals(this.subscriberAverageReorders, getSellingPartnerMetricsResponseMetric.subscriberAverageReorders) &&
        Objects.equals(this.nonSubscriberAverageReorders, getSellingPartnerMetricsResponseMetric.nonSubscriberAverageReorders) &&
        Objects.equals(this.couponsRevenuePenetration, getSellingPartnerMetricsResponseMetric.couponsRevenuePenetration) &&
        Objects.equals(this.revenueFromSubscriptionsWithMultipleDeliveries, getSellingPartnerMetricsResponseMetric.revenueFromSubscriptionsWithMultipleDeliveries) &&
        Objects.equals(this.revenueFromActiveSubscriptionsWithSingleDelivery, getSellingPartnerMetricsResponseMetric.revenueFromActiveSubscriptionsWithSingleDelivery) &&
        Objects.equals(this.revenueFromCancelledSubscriptionsAfterSingleDelivery, getSellingPartnerMetricsResponseMetric.revenueFromCancelledSubscriptionsAfterSingleDelivery) &&
        Objects.equals(this.subscriberRetentionFor30Days, getSellingPartnerMetricsResponseMetric.subscriberRetentionFor30Days) &&
        Objects.equals(this.subscriberRetentionFor90Days, getSellingPartnerMetricsResponseMetric.subscriberRetentionFor90Days) &&
        Objects.equals(this.revenuePenetrationFor0PercentSellerFunding, getSellingPartnerMetricsResponseMetric.revenuePenetrationFor0PercentSellerFunding) &&
        Objects.equals(this.revenuePenetrationFor5PercentSellerFunding, getSellingPartnerMetricsResponseMetric.revenuePenetrationFor5PercentSellerFunding) &&
        Objects.equals(this.revenuePenetrationFor10PercentSellerFunding, getSellingPartnerMetricsResponseMetric.revenuePenetrationFor10PercentSellerFunding) &&
        Objects.equals(this.revenuePenetrationFor5PlusPercentSellerFunding, getSellingPartnerMetricsResponseMetric.revenuePenetrationFor5PlusPercentSellerFunding) &&
        Objects.equals(this.shareOfCouponSubscriptions, getSellingPartnerMetricsResponseMetric.shareOfCouponSubscriptions) &&
        Objects.equals(this.timeInterval, getSellingPartnerMetricsResponseMetric.timeInterval) &&
        Objects.equals(this.currencyCode, getSellingPartnerMetricsResponseMetric.currencyCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(notDeliveredDueToOOS, totalSubscriptionsRevenue, shippedSubscriptionUnits, activeSubscriptions, subscriberAverageRevenue, nonSubscriberAverageRevenue, lostRevenueDueToOOS, subscriberAverageReorders, nonSubscriberAverageReorders, couponsRevenuePenetration, revenueFromSubscriptionsWithMultipleDeliveries, revenueFromActiveSubscriptionsWithSingleDelivery, revenueFromCancelledSubscriptionsAfterSingleDelivery, subscriberRetentionFor30Days, subscriberRetentionFor90Days, revenuePenetrationFor0PercentSellerFunding, revenuePenetrationFor5PercentSellerFunding, revenuePenetrationFor10PercentSellerFunding, revenuePenetrationFor5PlusPercentSellerFunding, shareOfCouponSubscriptions, timeInterval, currencyCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetSellingPartnerMetricsResponseMetric {\n");
    
    sb.append("    notDeliveredDueToOOS: ").append(toIndentedString(notDeliveredDueToOOS)).append("\n");
    sb.append("    totalSubscriptionsRevenue: ").append(toIndentedString(totalSubscriptionsRevenue)).append("\n");
    sb.append("    shippedSubscriptionUnits: ").append(toIndentedString(shippedSubscriptionUnits)).append("\n");
    sb.append("    activeSubscriptions: ").append(toIndentedString(activeSubscriptions)).append("\n");
    sb.append("    subscriberAverageRevenue: ").append(toIndentedString(subscriberAverageRevenue)).append("\n");
    sb.append("    nonSubscriberAverageRevenue: ").append(toIndentedString(nonSubscriberAverageRevenue)).append("\n");
    sb.append("    lostRevenueDueToOOS: ").append(toIndentedString(lostRevenueDueToOOS)).append("\n");
    sb.append("    subscriberAverageReorders: ").append(toIndentedString(subscriberAverageReorders)).append("\n");
    sb.append("    nonSubscriberAverageReorders: ").append(toIndentedString(nonSubscriberAverageReorders)).append("\n");
    sb.append("    couponsRevenuePenetration: ").append(toIndentedString(couponsRevenuePenetration)).append("\n");
    sb.append("    revenueFromSubscriptionsWithMultipleDeliveries: ").append(toIndentedString(revenueFromSubscriptionsWithMultipleDeliveries)).append("\n");
    sb.append("    revenueFromActiveSubscriptionsWithSingleDelivery: ").append(toIndentedString(revenueFromActiveSubscriptionsWithSingleDelivery)).append("\n");
    sb.append("    revenueFromCancelledSubscriptionsAfterSingleDelivery: ").append(toIndentedString(revenueFromCancelledSubscriptionsAfterSingleDelivery)).append("\n");
    sb.append("    subscriberRetentionFor30Days: ").append(toIndentedString(subscriberRetentionFor30Days)).append("\n");
    sb.append("    subscriberRetentionFor90Days: ").append(toIndentedString(subscriberRetentionFor90Days)).append("\n");
    sb.append("    revenuePenetrationFor0PercentSellerFunding: ").append(toIndentedString(revenuePenetrationFor0PercentSellerFunding)).append("\n");
    sb.append("    revenuePenetrationFor5PercentSellerFunding: ").append(toIndentedString(revenuePenetrationFor5PercentSellerFunding)).append("\n");
    sb.append("    revenuePenetrationFor10PercentSellerFunding: ").append(toIndentedString(revenuePenetrationFor10PercentSellerFunding)).append("\n");
    sb.append("    revenuePenetrationFor5PlusPercentSellerFunding: ").append(toIndentedString(revenuePenetrationFor5PlusPercentSellerFunding)).append("\n");
    sb.append("    shareOfCouponSubscriptions: ").append(toIndentedString(shareOfCouponSubscriptions)).append("\n");
    sb.append("    timeInterval: ").append(toIndentedString(timeInterval)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
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
