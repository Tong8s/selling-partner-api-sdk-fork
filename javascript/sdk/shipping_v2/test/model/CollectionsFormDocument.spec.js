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
    instance = new AmazonShippingApi.CollectionsFormDocument();
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

  describe('CollectionsFormDocument', function() {
    it('should create an instance of CollectionsFormDocument', function() {
      // uncomment below and update the code to test CollectionsFormDocument
      //var instance = new AmazonShippingApi.CollectionsFormDocument();
      //expect(instance).to.be.a(AmazonShippingApi.CollectionsFormDocument);
    });

    it('should have the property base64EncodedContent (base name: "base64EncodedContent")', function() {
      // uncomment below and update the code to test the property base64EncodedContent
      //var instance = new AmazonShippingApi.CollectionsFormDocument();
      //expect(instance).to.be();
    });

    it('should have the property documentFormat (base name: "documentFormat")', function() {
      // uncomment below and update the code to test the property documentFormat
      //var instance = new AmazonShippingApi.CollectionsFormDocument();
      //expect(instance).to.be();
    });

  });

}));
