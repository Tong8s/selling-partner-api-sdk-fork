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
    instance = new SellingPartnerApiForOrders.SubstitutionOption();
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

  describe('SubstitutionOption', function() {
    it('should create an instance of SubstitutionOption', function() {
      // uncomment below and update the code to test SubstitutionOption
      //var instance = new SellingPartnerApiForOrders.SubstitutionOption();
      //expect(instance).to.be.a(SellingPartnerApiForOrders.SubstitutionOption);
    });

    it('should have the property ASIN (base name: "ASIN")', function() {
      // uncomment below and update the code to test the property ASIN
      //var instance = new SellingPartnerApiForOrders.SubstitutionOption();
      //expect(instance).to.be();
    });

    it('should have the property quantityOrdered (base name: "QuantityOrdered")', function() {
      // uncomment below and update the code to test the property quantityOrdered
      //var instance = new SellingPartnerApiForOrders.SubstitutionOption();
      //expect(instance).to.be();
    });

    it('should have the property sellerSKU (base name: "SellerSKU")', function() {
      // uncomment below and update the code to test the property sellerSKU
      //var instance = new SellingPartnerApiForOrders.SubstitutionOption();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "Title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new SellingPartnerApiForOrders.SubstitutionOption();
      //expect(instance).to.be();
    });

    it('should have the property measurement (base name: "Measurement")', function() {
      // uncomment below and update the code to test the property measurement
      //var instance = new SellingPartnerApiForOrders.SubstitutionOption();
      //expect(instance).to.be();
    });

  });

}));
