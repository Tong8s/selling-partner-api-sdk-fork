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
    try{
     instance = new SellingPartnerApiForRetailProcurementShipments.ShipmentMeasurements();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(SellingPartnerApiForRetailProcurementShipments.ShipmentMeasurements.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('ShipmentMeasurements', function() {
    it('should create an instance of ShipmentMeasurements', function() {
      expect(instance).to.be.a(SellingPartnerApiForRetailProcurementShipments.ShipmentMeasurements);
    });

    it('should have the property grossShipmentWeight', function() {
      // verify property exists
      expect(instance).to.have.property('grossShipmentWeight');

      // set and verify value
      var expectedValue = generateMockData('Weight');
      instance.grossShipmentWeight = expectedValue;
      expect(instance.grossShipmentWeight).to.equal(expectedValue);
    });

    it('should have the property shipmentVolume', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentVolume');

      // set and verify value
      var expectedValue = generateMockData('Volume');
      instance.shipmentVolume = expectedValue;
      expect(instance.shipmentVolume).to.equal(expectedValue);
    });

    it('should have the property cartonCount', function() {
      // verify property exists
      expect(instance).to.have.property('cartonCount');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.cartonCount = expectedValue;
      expect(instance.cartonCount).to.equal(expectedValue);
    });

    it('should have the property palletCount', function() {
      // verify property exists
      expect(instance).to.have.property('palletCount');

      // set and verify value
      var expectedValue = generateMockData('Number');
      instance.palletCount = expectedValue;
      expect(instance.palletCount).to.equal(expectedValue);
    });

  });

  // Helper function to generate random test data
  function generateMockData(dataType, isArray = false) {
    if (!dataType) return {};

    // Handle array types
    if (isArray) {
      return [generateMockData(dataType), generateMockData(dataType)];
    }

    switch(dataType) {
      case 'String':
        return 'mock-' + Math.random().toString(36).substring(2, 10);
      case 'Number':
        return Math.floor(Math.random() * 1000);
      case 'Boolean':
        return Math.random() > 0.5;
      case 'Date':
        return new Date().toISOString();
      default:
        try {
          const ModelClass = SellingPartnerApiForRetailProcurementShipments[dataType];
          if (ModelClass) {
            const instance = Object.create(ModelClass.prototype);
            return instance;
          }
        } catch (e) {
          console.error("Error creating instance of", dataType);
          return {};
        }
        return {};
    }
  }

}));
