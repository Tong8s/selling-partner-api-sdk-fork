/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentShipping);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentShipping) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest();
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

  describe('SubmitShipmentConfirmationsRequest', function() {
    it('should create an instance of SubmitShipmentConfirmationsRequest', function() {
      // uncomment below and update the code to test SubmitShipmentConfirmationsRequest
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest);
    });

    it('should have the property shipmentConfirmations (base name: "shipmentConfirmations")', function() {
      // uncomment below and update the code to test the property shipmentConfirmations
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.SubmitShipmentConfirmationsRequest();
      //expect(instance).to.be();
    });

  });

}));
