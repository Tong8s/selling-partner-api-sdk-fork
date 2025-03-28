/**
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * The version of the OpenAPI document: 2022-03-23
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
    factory(root.expect, root.SellingPartnerApiForEasyShip);
  }
}(this, function(expect, SellingPartnerApiForEasyShip) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForEasyShip.Package();
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

  describe('Package', function() {
    it('should create an instance of Package', function() {
      // uncomment below and update the code to test Package
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be.a(SellingPartnerApiForEasyShip.Package);
    });

    it('should have the property scheduledPackageId (base name: "scheduledPackageId")', function() {
      // uncomment below and update the code to test the property scheduledPackageId
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property packageDimensions (base name: "packageDimensions")', function() {
      // uncomment below and update the code to test the property packageDimensions
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property packageWeight (base name: "packageWeight")', function() {
      // uncomment below and update the code to test the property packageWeight
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property packageItems (base name: "packageItems")', function() {
      // uncomment below and update the code to test the property packageItems
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property packageTimeSlot (base name: "packageTimeSlot")', function() {
      // uncomment below and update the code to test the property packageTimeSlot
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property packageIdentifier (base name: "packageIdentifier")', function() {
      // uncomment below and update the code to test the property packageIdentifier
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property invoice (base name: "invoice")', function() {
      // uncomment below and update the code to test the property invoice
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property packageStatus (base name: "packageStatus")', function() {
      // uncomment below and update the code to test the property packageStatus
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

    it('should have the property trackingDetails (base name: "trackingDetails")', function() {
      // uncomment below and update the code to test the property trackingDetails
      //var instance = new SellingPartnerApiForEasyShip.Package();
      //expect(instance).to.be();
    });

  });

}));
