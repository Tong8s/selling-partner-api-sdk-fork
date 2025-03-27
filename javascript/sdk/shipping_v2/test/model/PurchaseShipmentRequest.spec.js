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
    instance = new AmazonShippingApi.PurchaseShipmentRequest();
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

  describe('PurchaseShipmentRequest', function() {
    it('should create an instance of PurchaseShipmentRequest', function() {
      // uncomment below and update the code to test PurchaseShipmentRequest
      //var instance = new AmazonShippingApi.PurchaseShipmentRequest();
      //expect(instance).to.be.a(AmazonShippingApi.PurchaseShipmentRequest);
    });

    it('should have the property requestToken (base name: "requestToken")', function() {
      // uncomment below and update the code to test the property requestToken
      //var instance = new AmazonShippingApi.PurchaseShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property rateId (base name: "rateId")', function() {
      // uncomment below and update the code to test the property rateId
      //var instance = new AmazonShippingApi.PurchaseShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestedDocumentSpecification (base name: "requestedDocumentSpecification")', function() {
      // uncomment below and update the code to test the property requestedDocumentSpecification
      //var instance = new AmazonShippingApi.PurchaseShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestedValueAddedServices (base name: "requestedValueAddedServices")', function() {
      // uncomment below and update the code to test the property requestedValueAddedServices
      //var instance = new AmazonShippingApi.PurchaseShipmentRequest();
      //expect(instance).to.be();
    });

    it('should have the property additionalInputs (base name: "additionalInputs")', function() {
      // uncomment below and update the code to test the property additionalInputs
      //var instance = new AmazonShippingApi.PurchaseShipmentRequest();
      //expect(instance).to.be();
    });

  });

}));
