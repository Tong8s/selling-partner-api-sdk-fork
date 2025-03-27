/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * The version of the OpenAPI document: v0
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
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForOrders.BuyerTaxInfo();
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

  describe('BuyerTaxInfo', function() {
    it('should create an instance of BuyerTaxInfo', function() {
      // uncomment below and update the code to test BuyerTaxInfo
      //var instance = new SellingPartnerApiForOrders.BuyerTaxInfo();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.BuyerTaxInfo);
    });

    it('should have the property companyLegalName (base name: "CompanyLegalName")', function() {
      // uncomment below and update the code to test the property companyLegalName
      //var instance = new SellingPartnerApiForOrders.BuyerTaxInfo();
      //expect(instance).to.be();
    });

    it('should have the property taxingRegion (base name: "TaxingRegion")', function() {
      // uncomment below and update the code to test the property taxingRegion
      //var instance = new SellingPartnerApiForOrders.BuyerTaxInfo();
      //expect(instance).to.be();
    });

    it('should have the property taxClassifications (base name: "TaxClassifications")', function() {
      // uncomment below and update the code to test the property taxClassifications
      //var instance = new SellingPartnerApiForOrders.BuyerTaxInfo();
      //expect(instance).to.be();
    });

  });

}));
