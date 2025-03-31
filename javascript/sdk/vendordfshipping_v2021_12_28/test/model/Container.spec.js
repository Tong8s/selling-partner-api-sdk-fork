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

  describe('Container', function() {
    it('should create an instance of Container', function() {
      // uncomment below and update the code to test Container
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.Container);
    });

    it('should have the property containerType (base name: "containerType")', function() {
      // uncomment below and update the code to test the property containerType
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property containerIdentifier (base name: "containerIdentifier")', function() {
      // uncomment below and update the code to test the property containerIdentifier
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property manifestId (base name: "manifestId")', function() {
      // uncomment below and update the code to test the property manifestId
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property manifestDate (base name: "manifestDate")', function() {
      // uncomment below and update the code to test the property manifestDate
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property shipMethod (base name: "shipMethod")', function() {
      // uncomment below and update the code to test the property shipMethod
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property scacCode (base name: "scacCode")', function() {
      // uncomment below and update the code to test the property scacCode
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property carrier (base name: "carrier")', function() {
      // uncomment below and update the code to test the property carrier
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property containerSequenceNumber (base name: "containerSequenceNumber")', function() {
      // uncomment below and update the code to test the property containerSequenceNumber
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

    it('should have the property packedItems (base name: "packedItems")', function() {
      // uncomment below and update the code to test the property packedItems
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.Container();
      //expect(instance).to.be();
    });

  });

}));