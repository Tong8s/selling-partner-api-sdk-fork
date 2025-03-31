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

  describe('TaxRegistrationDetails', function() {
    it('should create an instance of TaxRegistrationDetails', function() {
      // uncomment below and update the code to test TaxRegistrationDetails
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails);
    });

    it('should have the property taxRegistrationType (base name: "taxRegistrationType")', function() {
      // uncomment below and update the code to test the property taxRegistrationType
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxRegistrationNumber (base name: "taxRegistrationNumber")', function() {
      // uncomment below and update the code to test the property taxRegistrationNumber
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxRegistrationAddress (base name: "taxRegistrationAddress")', function() {
      // uncomment below and update the code to test the property taxRegistrationAddress
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails();
      //expect(instance).to.be();
    });

    it('should have the property taxRegistrationMessages (base name: "taxRegistrationMessages")', function() {
      // uncomment below and update the code to test the property taxRegistrationMessages
      //var instance = new SellingPartnerApiForDirectFulfillmentShipping.TaxRegistrationDetails();
      //expect(instance).to.be();
    });

  });

}));