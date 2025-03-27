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
    instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
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

  describe('NetworkComminglingTransactionEvent', function() {
    it('should create an instance of NetworkComminglingTransactionEvent', function() {
      // uncomment below and update the code to test NetworkComminglingTransactionEvent
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be.a(SellingPartnerApiForFinances.NetworkComminglingTransactionEvent);
    });

    it('should have the property transactionType (base name: "TransactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property postedDate (base name: "PostedDate")', function() {
      // uncomment below and update the code to test the property postedDate
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property netCoTransactionID (base name: "NetCoTransactionID")', function() {
      // uncomment below and update the code to test the property netCoTransactionID
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property swapReason (base name: "SwapReason")', function() {
      // uncomment below and update the code to test the property swapReason
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property taxExclusiveAmount (base name: "TaxExclusiveAmount")', function() {
      // uncomment below and update the code to test the property taxExclusiveAmount
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "TaxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instance = new SellingPartnerApiForFinances.NetworkComminglingTransactionEvent();
      //expect(instance).to.be();
    });

  });

}));
