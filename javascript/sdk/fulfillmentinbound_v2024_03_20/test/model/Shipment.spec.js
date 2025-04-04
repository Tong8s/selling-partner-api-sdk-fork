/**
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
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
    factory(root.expect, root.TheSellingPartnerApiForFbaInboundOperations);
  }
}(this, function(expect, TheSellingPartnerApiForFbaInboundOperations) {
  'use strict';

  var instance;

  beforeEach(function() {
    try{
     instance = new TheSellingPartnerApiForFbaInboundOperations.Shipment();
    } catch (e) {
     //Handle the cases when this model extends another model by using Model.call(this);
     instance = Object.create(TheSellingPartnerApiForFbaInboundOperations.Shipment.prototype);
    }
  });

  afterEach(function() {
    instance = null;
  })

  describe('Shipment', function() {
    it('should create an instance of Shipment', function() {
      expect(instance).to.be.a(TheSellingPartnerApiForFbaInboundOperations.Shipment);
    });

    it('should have the property amazonReferenceId', function() {
      // verify property exists
      expect(instance).to.have.property('amazonReferenceId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.amazonReferenceId = expectedValue;
      expect(instance.amazonReferenceId).to.equal(expectedValue);
    });

    it('should have the property contactInformation', function() {
      // verify property exists
      expect(instance).to.have.property('contactInformation');

      // set and verify value
      var expectedValue = generateMockData('ContactInformation');
      instance.contactInformation = expectedValue;
      expect(instance.contactInformation).to.equal(expectedValue);
    });

    it('should have the property dates', function() {
      // verify property exists
      expect(instance).to.have.property('dates');

      // set and verify value
      var expectedValue = generateMockData('Dates');
      instance.dates = expectedValue;
      expect(instance.dates).to.equal(expectedValue);
    });

    it('should have the property destination', function() {
      // verify property exists
      expect(instance).to.have.property('destination');

      // set and verify value
      var expectedValue = generateMockData('ShipmentDestination');
      instance.destination = expectedValue;
      expect(instance.destination).to.equal(expectedValue);
    });

    it('should have the property freightInformation', function() {
      // verify property exists
      expect(instance).to.have.property('freightInformation');

      // set and verify value
      var expectedValue = generateMockData('FreightInformation');
      instance.freightInformation = expectedValue;
      expect(instance.freightInformation).to.equal(expectedValue);
    });

    it('should have the property name', function() {
      // verify property exists
      expect(instance).to.have.property('name');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.name = expectedValue;
      expect(instance.name).to.equal(expectedValue);
    });

    it('should have the property placementOptionId', function() {
      // verify property exists
      expect(instance).to.have.property('placementOptionId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.placementOptionId = expectedValue;
      expect(instance.placementOptionId).to.equal(expectedValue);
    });

    it('should have the property selectedDeliveryWindow', function() {
      // verify property exists
      expect(instance).to.have.property('selectedDeliveryWindow');

      // set and verify value
      var expectedValue = generateMockData('SelectedDeliveryWindow');
      instance.selectedDeliveryWindow = expectedValue;
      expect(instance.selectedDeliveryWindow).to.equal(expectedValue);
    });

    it('should have the property selectedTransportationOptionId', function() {
      // verify property exists
      expect(instance).to.have.property('selectedTransportationOptionId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.selectedTransportationOptionId = expectedValue;
      expect(instance.selectedTransportationOptionId).to.equal(expectedValue);
    });

    it('should have the property selfShipAppointmentDetails', function() {
      // verify property exists
      expect(instance).to.have.property('selfShipAppointmentDetails');

      // set and verify value
      var expectedValue = generateMockData('SelfShipAppointmentDetails', true);
      instance.selfShipAppointmentDetails = expectedValue;
      expect(instance.selfShipAppointmentDetails).to.equal(expectedValue);
    });

    it('should have the property shipmentConfirmationId', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentConfirmationId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shipmentConfirmationId = expectedValue;
      expect(instance.shipmentConfirmationId).to.equal(expectedValue);
    });

    it('should have the property shipmentId', function() {
      // verify property exists
      expect(instance).to.have.property('shipmentId');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.shipmentId = expectedValue;
      expect(instance.shipmentId).to.equal(expectedValue);
    });

    it('should have the property source', function() {
      // verify property exists
      expect(instance).to.have.property('source');

      // set and verify value
      var expectedValue = generateMockData('ShipmentSource');
      instance.source = expectedValue;
      expect(instance.source).to.equal(expectedValue);
    });

    it('should have the property status', function() {
      // verify property exists
      expect(instance).to.have.property('status');

      // set and verify value
      var expectedValue = generateMockData('String');
      instance.status = expectedValue;
      expect(instance.status).to.equal(expectedValue);
    });

    it('should have the property trackingDetails', function() {
      // verify property exists
      expect(instance).to.have.property('trackingDetails');

      // set and verify value
      var expectedValue = generateMockData('TrackingDetails');
      instance.trackingDetails = expectedValue;
      expect(instance.trackingDetails).to.equal(expectedValue);
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
          const ModelClass = TheSellingPartnerApiForFbaInboundOperations[dataType];
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
