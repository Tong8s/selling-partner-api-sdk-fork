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
    instance = new AmazonShippingApi.GetTrackingResult();
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

  describe('GetTrackingResult', function() {
    it('should create an instance of GetTrackingResult', function() {
      // uncomment below and update the code to test GetTrackingResult
      //var instance = new AmazonShippingApi.GetTrackingResult();
      //expect(instance).to.be.a(AmazonShippingApi.GetTrackingResult);
    });

    it('should have the property trackingId (base name: "trackingId")', function() {
      // uncomment below and update the code to test the property trackingId
      //var instance = new AmazonShippingApi.GetTrackingResult();
      //expect(instance).to.be();
    });

    it('should have the property alternateLegTrackingId (base name: "alternateLegTrackingId")', function() {
      // uncomment below and update the code to test the property alternateLegTrackingId
      //var instance = new AmazonShippingApi.GetTrackingResult();
      //expect(instance).to.be();
    });

    it('should have the property eventHistory (base name: "eventHistory")', function() {
      // uncomment below and update the code to test the property eventHistory
      //var instance = new AmazonShippingApi.GetTrackingResult();
      //expect(instance).to.be();
    });

    it('should have the property promisedDeliveryDate (base name: "promisedDeliveryDate")', function() {
      // uncomment below and update the code to test the property promisedDeliveryDate
      //var instance = new AmazonShippingApi.GetTrackingResult();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new AmazonShippingApi.GetTrackingResult();
      //expect(instance).to.be();
    });

  });

}));
