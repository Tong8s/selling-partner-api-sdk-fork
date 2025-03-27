/**
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
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
    factory(root.expect, root.AmazonShippingApi);
  }
}(this, function(expect, AmazonShippingApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
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

  describe('GetCollectionFormHistoryRequest', function() {
    it('should create an instance of GetCollectionFormHistoryRequest', function() {
      // uncomment below and update the code to test GetCollectionFormHistoryRequest
      //var instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      //expect(instance).to.be.a(AmazonShippingApi.GetCollectionFormHistoryRequest);
    });

    it('should have the property clientReferenceDetails (base name: "clientReferenceDetails")', function() {
      // uncomment below and update the code to test the property clientReferenceDetails
      //var instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxResults (base name: "maxResults")', function() {
      // uncomment below and update the code to test the property maxResults
      //var instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrierId")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property shipFromAddress (base name: "shipFromAddress")', function() {
      // uncomment below and update the code to test the property shipFromAddress
      //var instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property dateRange (base name: "dateRange")', function() {
      // uncomment below and update the code to test the property dateRange
      //var instance = new AmazonShippingApi.GetCollectionFormHistoryRequest();
      //expect(instance).to.be();
    });

  });

}));
