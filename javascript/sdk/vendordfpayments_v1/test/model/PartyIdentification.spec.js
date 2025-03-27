/**
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * The version of the OpenAPI document: v1
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
    factory(root.expect, root.SellingPartnerApiForDirectFulfillmentPayments);
  }
}(this, function(expect, SellingPartnerApiForDirectFulfillmentPayments) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForDirectFulfillmentPayments.PartyIdentification();
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

  describe('PartyIdentification', function() {
    it('should create an instance of PartyIdentification', function() {
      // uncomment below and update the code to test PartyIdentification
      //var instance = new SellingPartnerApiForDirectFulfillmentPayments.PartyIdentification();
      //expect(instance).to.be.a(SellingPartnerApiForDirectFulfillmentPayments.PartyIdentification);
    });

    it('should have the property partyId (base name: "partyId")', function() {
      // uncomment below and update the code to test the property partyId
      //var instance = new SellingPartnerApiForDirectFulfillmentPayments.PartyIdentification();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new SellingPartnerApiForDirectFulfillmentPayments.PartyIdentification();
      //expect(instance).to.be();
    });

    it('should have the property taxRegistrationDetails (base name: "taxRegistrationDetails")', function() {
      // uncomment below and update the code to test the property taxRegistrationDetails
      //var instance = new SellingPartnerApiForDirectFulfillmentPayments.PartyIdentification();
      //expect(instance).to.be();
    });

  });

}));
