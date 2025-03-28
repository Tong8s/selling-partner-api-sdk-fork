/**
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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
    factory(root.expect, root.SellingPartnerApiForShipmentInvoicing);
  }
}(this, function(expect, SellingPartnerApiForShipmentInvoicing) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
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

  describe('ShipmentDetail', function() {
    it('should create an instance of ShipmentDetail', function() {
      // uncomment below and update the code to test ShipmentDetail
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be.a(SellingPartnerApiForShipmentInvoicing.ShipmentDetail);
    });

    it('should have the property warehouseId (base name: "WarehouseId")', function() {
      // uncomment below and update the code to test the property warehouseId
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property amazonOrderId (base name: "AmazonOrderId")', function() {
      // uncomment below and update the code to test the property amazonOrderId
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property amazonShipmentId (base name: "AmazonShipmentId")', function() {
      // uncomment below and update the code to test the property amazonShipmentId
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property purchaseDate (base name: "PurchaseDate")', function() {
      // uncomment below and update the code to test the property purchaseDate
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "ShippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodDetails (base name: "PaymentMethodDetails")', function() {
      // uncomment below and update the code to test the property paymentMethodDetails
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceId (base name: "MarketplaceId")', function() {
      // uncomment below and update the code to test the property marketplaceId
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property sellerId (base name: "SellerId")', function() {
      // uncomment below and update the code to test the property sellerId
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property buyerName (base name: "BuyerName")', function() {
      // uncomment below and update the code to test the property buyerName
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property buyerCounty (base name: "BuyerCounty")', function() {
      // uncomment below and update the code to test the property buyerCounty
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property buyerTaxInfo (base name: "BuyerTaxInfo")', function() {
      // uncomment below and update the code to test the property buyerTaxInfo
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property marketplaceTaxInfo (base name: "MarketplaceTaxInfo")', function() {
      // uncomment below and update the code to test the property marketplaceTaxInfo
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property sellerDisplayName (base name: "SellerDisplayName")', function() {
      // uncomment below and update the code to test the property sellerDisplayName
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

    it('should have the property shipmentItems (base name: "ShipmentItems")', function() {
      // uncomment below and update the code to test the property shipmentItems
      //var instance = new SellingPartnerApiForShipmentInvoicing.ShipmentDetail();
      //expect(instance).to.be();
    });

  });

}));
