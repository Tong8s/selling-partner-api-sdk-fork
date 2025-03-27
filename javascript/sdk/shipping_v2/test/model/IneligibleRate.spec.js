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
    instance = new AmazonShippingApi.IneligibleRate();
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

  describe('IneligibleRate', function() {
    it('should create an instance of IneligibleRate', function() {
      // uncomment below and update the code to test IneligibleRate
      //var instance = new AmazonShippingApi.IneligibleRate();
      //expect(instance).to.be.a(AmazonShippingApi.IneligibleRate);
    });

    it('should have the property serviceId (base name: "serviceId")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new AmazonShippingApi.IneligibleRate();
      //expect(instance).to.be();
    });

    it('should have the property serviceName (base name: "serviceName")', function() {
      // uncomment below and update the code to test the property serviceName
      //var instance = new AmazonShippingApi.IneligibleRate();
      //expect(instance).to.be();
    });

    it('should have the property carrierName (base name: "carrierName")', function() {
      // uncomment below and update the code to test the property carrierName
      //var instance = new AmazonShippingApi.IneligibleRate();
      //expect(instance).to.be();
    });

    it('should have the property carrierId (base name: "carrierId")', function() {
      // uncomment below and update the code to test the property carrierId
      //var instance = new AmazonShippingApi.IneligibleRate();
      //expect(instance).to.be();
    });

    it('should have the property ineligibilityReasons (base name: "ineligibilityReasons")', function() {
      // uncomment below and update the code to test the property ineligibilityReasons
      //var instance = new AmazonShippingApi.IneligibleRate();
      //expect(instance).to.be();
    });

  });

}));
