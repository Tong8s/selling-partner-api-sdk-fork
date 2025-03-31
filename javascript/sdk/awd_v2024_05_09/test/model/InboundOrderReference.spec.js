/**
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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
    factory(root.expect, root.TheSellingPartnerApiForAmazonWarehousingAndDistribution);
  }
}(this, function(expect, TheSellingPartnerApiForAmazonWarehousingAndDistribution) {
  'use strict';

  var instance;

  beforeEach(function() {
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

  describe('InboundOrderReference', function() {
    it('should create an instance of InboundOrderReference', function() {
      // uncomment below and update the code to test InboundOrderReference
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundOrderReference();
      //expect(instance).to.be.a(TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundOrderReference);
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundOrderReference();
      //expect(instance).to.be();
    });

  });

}));