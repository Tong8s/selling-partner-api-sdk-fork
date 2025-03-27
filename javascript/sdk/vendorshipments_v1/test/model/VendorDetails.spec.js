/**
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
    factory(root.expect, root.SellingPartnerApiForRetailProcurementShipments);
  }
}(this, function(expect, SellingPartnerApiForRetailProcurementShipments) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForRetailProcurementShipments.VendorDetails();
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

  describe('VendorDetails', function() {
    it('should create an instance of VendorDetails', function() {
      // uncomment below and update the code to test VendorDetails
      //var instance = new SellingPartnerApiForRetailProcurementShipments.VendorDetails();
      //expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.VendorDetails);
    });

    it('should have the property sellingParty (base name: "sellingParty")', function() {
      // uncomment below and update the code to test the property sellingParty
      //var instance = new SellingPartnerApiForRetailProcurementShipments.VendorDetails();
      //expect(instance).to.be();
    });

    it('should have the property vendorShipmentIdentifier (base name: "vendorShipmentIdentifier")', function() {
      // uncomment below and update the code to test the property vendorShipmentIdentifier
      //var instance = new SellingPartnerApiForRetailProcurementShipments.VendorDetails();
      //expect(instance).to.be();
    });

  });

}));
