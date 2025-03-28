/**
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForReplenishment);
  }
}(this, function(expect, SellingPartnerApiForReplenishment) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetSellingPartnerMetricsResponseMetric', function() {
    it('should create an instance of GetSellingPartnerMetricsResponseMetric', function() {
      // uncomment below and update the code to test GetSellingPartnerMetricsResponseMetric
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be.a(SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric);
    });

    it('should have the property notDeliveredDueToOOS (base name: "notDeliveredDueToOOS")', function() {
      // uncomment below and update the code to test the property notDeliveredDueToOOS
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property totalSubscriptionsRevenue (base name: "totalSubscriptionsRevenue")', function() {
      // uncomment below and update the code to test the property totalSubscriptionsRevenue
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property shippedSubscriptionUnits (base name: "shippedSubscriptionUnits")', function() {
      // uncomment below and update the code to test the property shippedSubscriptionUnits
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property activeSubscriptions (base name: "activeSubscriptions")', function() {
      // uncomment below and update the code to test the property activeSubscriptions
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property subscriberAverageRevenue (base name: "subscriberAverageRevenue")', function() {
      // uncomment below and update the code to test the property subscriberAverageRevenue
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property nonSubscriberAverageRevenue (base name: "nonSubscriberAverageRevenue")', function() {
      // uncomment below and update the code to test the property nonSubscriberAverageRevenue
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property lostRevenueDueToOOS (base name: "lostRevenueDueToOOS")', function() {
      // uncomment below and update the code to test the property lostRevenueDueToOOS
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property subscriberAverageReorders (base name: "subscriberAverageReorders")', function() {
      // uncomment below and update the code to test the property subscriberAverageReorders
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property nonSubscriberAverageReorders (base name: "nonSubscriberAverageReorders")', function() {
      // uncomment below and update the code to test the property nonSubscriberAverageReorders
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property couponsRevenuePenetration (base name: "couponsRevenuePenetration")', function() {
      // uncomment below and update the code to test the property couponsRevenuePenetration
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenueFromSubscriptionsWithMultipleDeliveries (base name: "revenueFromSubscriptionsWithMultipleDeliveries")', function() {
      // uncomment below and update the code to test the property revenueFromSubscriptionsWithMultipleDeliveries
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenueFromActiveSubscriptionsWithSingleDelivery (base name: "revenueFromActiveSubscriptionsWithSingleDelivery")', function() {
      // uncomment below and update the code to test the property revenueFromActiveSubscriptionsWithSingleDelivery
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenueFromCancelledSubscriptionsAfterSingleDelivery (base name: "revenueFromCancelledSubscriptionsAfterSingleDelivery")', function() {
      // uncomment below and update the code to test the property revenueFromCancelledSubscriptionsAfterSingleDelivery
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property subscriberRetentionFor30Days (base name: "subscriberRetentionFor30Days")', function() {
      // uncomment below and update the code to test the property subscriberRetentionFor30Days
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property subscriberRetentionFor90Days (base name: "subscriberRetentionFor90Days")', function() {
      // uncomment below and update the code to test the property subscriberRetentionFor90Days
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenuePenetrationFor0PercentSellerFunding (base name: "revenuePenetrationFor0PercentSellerFunding")', function() {
      // uncomment below and update the code to test the property revenuePenetrationFor0PercentSellerFunding
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenuePenetrationFor5PercentSellerFunding (base name: "revenuePenetrationFor5PercentSellerFunding")', function() {
      // uncomment below and update the code to test the property revenuePenetrationFor5PercentSellerFunding
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenuePenetrationFor10PercentSellerFunding (base name: "revenuePenetrationFor10PercentSellerFunding")', function() {
      // uncomment below and update the code to test the property revenuePenetrationFor10PercentSellerFunding
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property revenuePenetrationFor5PlusPercentSellerFunding (base name: "revenuePenetrationFor5PlusPercentSellerFunding")', function() {
      // uncomment below and update the code to test the property revenuePenetrationFor5PlusPercentSellerFunding
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property shareOfCouponSubscriptions (base name: "shareOfCouponSubscriptions")', function() {
      // uncomment below and update the code to test the property shareOfCouponSubscriptions
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property timeInterval (base name: "timeInterval")', function() {
      // uncomment below and update the code to test the property timeInterval
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currencyCode")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instance = new SellingPartnerApiForReplenishment.GetSellingPartnerMetricsResponseMetric();
      //expect(instance).to.be();
    });

  });

}));
