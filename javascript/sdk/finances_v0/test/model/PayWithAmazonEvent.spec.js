/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
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

  describe('PayWithAmazonEvent', function() {
    it('should create an instance of PayWithAmazonEvent', function() {
      // uncomment below and update the code to test PayWithAmazonEvent
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be.a(SellingPartnerApiForFinances.PayWithAmazonEvent);
    });

    it('should have the property sellerOrderId (base name: "SellerOrderId")', function() {
      // uncomment below and update the code to test the property sellerOrderId
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property transactionPostedDate (base name: "TransactionPostedDate")', function() {
      // uncomment below and update the code to test the property transactionPostedDate
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property businessObjectType (base name: "BusinessObjectType")', function() {
      // uncomment below and update the code to test the property businessObjectType
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property salesChannel (base name: "SalesChannel")', function() {
      // uncomment below and update the code to test the property salesChannel
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property charge (base name: "Charge")', function() {
      // uncomment below and update the code to test the property charge
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property feeList (base name: "FeeList")', function() {
      // uncomment below and update the code to test the property feeList
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property paymentAmountType (base name: "PaymentAmountType")', function() {
      // uncomment below and update the code to test the property paymentAmountType
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property amountDescription (base name: "AmountDescription")', function() {
      // uncomment below and update the code to test the property amountDescription
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentChannel (base name: "FulfillmentChannel")', function() {
      // uncomment below and update the code to test the property fulfillmentChannel
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

    it('should have the property storeName (base name: "StoreName")', function() {
      // uncomment below and update the code to test the property storeName
      //var instance = new SellingPartnerApiForFinances.PayWithAmazonEvent();
      //expect(instance).to.be();
    });

  });

}));
