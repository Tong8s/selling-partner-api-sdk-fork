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

import expect from 'expect.js';
import * as SellingPartnerApiForOrders from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForOrders.OrderItem();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForOrders.OrderItem.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('OrderItem', () => {
  it('should create an instance of OrderItem', () => {
    expect(instance).to.be.a(SellingPartnerApiForOrders.OrderItem);
  });

  it('should have the property ASIN', () => {
    // verify property exists
    expect(instance).to.have.property('ASIN');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.ASIN = expectedValue;
    expect(instance.ASIN).to.equal(expectedValue);
  });

  it('should have the property sellerSKU', () => {
    // verify property exists
    expect(instance).to.have.property('sellerSKU');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerSKU = expectedValue;
    expect(instance.sellerSKU).to.equal(expectedValue);
  });

  it('should have the property orderItemId', () => {
    // verify property exists
    expect(instance).to.have.property('orderItemId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.orderItemId = expectedValue;
    expect(instance.orderItemId).to.equal(expectedValue);
  });

  it('should have the property associatedItems', () => {
    // verify property exists
    expect(instance).to.have.property('associatedItems');

    // set and verify value
    const expectedValue = generateMockData('AssociatedItem', true);
    instance.associatedItems = expectedValue;
    expect(instance.associatedItems).to.equal(expectedValue);
  });

  it('should have the property title', () => {
    // verify property exists
    expect(instance).to.have.property('title');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.title = expectedValue;
    expect(instance.title).to.equal(expectedValue);
  });

  it('should have the property quantityOrdered', () => {
    // verify property exists
    expect(instance).to.have.property('quantityOrdered');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantityOrdered = expectedValue;
    expect(instance.quantityOrdered).to.equal(expectedValue);
  });

  it('should have the property quantityShipped', () => {
    // verify property exists
    expect(instance).to.have.property('quantityShipped');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.quantityShipped = expectedValue;
    expect(instance.quantityShipped).to.equal(expectedValue);
  });

  it('should have the property productInfo', () => {
    // verify property exists
    expect(instance).to.have.property('productInfo');

    // set and verify value
    const expectedValue = generateMockData('ProductInfoDetail');
    instance.productInfo = expectedValue;
    expect(instance.productInfo).to.equal(expectedValue);
  });

  it('should have the property pointsGranted', () => {
    // verify property exists
    expect(instance).to.have.property('pointsGranted');

    // set and verify value
    const expectedValue = generateMockData('PointsGrantedDetail');
    instance.pointsGranted = expectedValue;
    expect(instance.pointsGranted).to.equal(expectedValue);
  });

  it('should have the property itemPrice', () => {
    // verify property exists
    expect(instance).to.have.property('itemPrice');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.itemPrice = expectedValue;
    expect(instance.itemPrice).to.equal(expectedValue);
  });

  it('should have the property shippingPrice', () => {
    // verify property exists
    expect(instance).to.have.property('shippingPrice');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.shippingPrice = expectedValue;
    expect(instance.shippingPrice).to.equal(expectedValue);
  });

  it('should have the property itemTax', () => {
    // verify property exists
    expect(instance).to.have.property('itemTax');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.itemTax = expectedValue;
    expect(instance.itemTax).to.equal(expectedValue);
  });

  it('should have the property shippingTax', () => {
    // verify property exists
    expect(instance).to.have.property('shippingTax');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.shippingTax = expectedValue;
    expect(instance.shippingTax).to.equal(expectedValue);
  });

  it('should have the property shippingDiscount', () => {
    // verify property exists
    expect(instance).to.have.property('shippingDiscount');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.shippingDiscount = expectedValue;
    expect(instance.shippingDiscount).to.equal(expectedValue);
  });

  it('should have the property shippingDiscountTax', () => {
    // verify property exists
    expect(instance).to.have.property('shippingDiscountTax');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.shippingDiscountTax = expectedValue;
    expect(instance.shippingDiscountTax).to.equal(expectedValue);
  });

  it('should have the property promotionDiscount', () => {
    // verify property exists
    expect(instance).to.have.property('promotionDiscount');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.promotionDiscount = expectedValue;
    expect(instance.promotionDiscount).to.equal(expectedValue);
  });

  it('should have the property promotionDiscountTax', () => {
    // verify property exists
    expect(instance).to.have.property('promotionDiscountTax');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.promotionDiscountTax = expectedValue;
    expect(instance.promotionDiscountTax).to.equal(expectedValue);
  });

  it('should have the property promotionIds', () => {
    // verify property exists
    expect(instance).to.have.property('promotionIds');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.promotionIds = expectedValue;
    expect(instance.promotionIds).to.equal(expectedValue);
  });

  it('should have the property cODFee', () => {
    // verify property exists
    expect(instance).to.have.property('cODFee');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.cODFee = expectedValue;
    expect(instance.cODFee).to.equal(expectedValue);
  });

  it('should have the property cODFeeDiscount', () => {
    // verify property exists
    expect(instance).to.have.property('cODFeeDiscount');

    // set and verify value
    const expectedValue = generateMockData('Money');
    instance.cODFeeDiscount = expectedValue;
    expect(instance.cODFeeDiscount).to.equal(expectedValue);
  });

  it('should have the property isGift', () => {
    // verify property exists
    expect(instance).to.have.property('isGift');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.isGift = expectedValue;
    expect(instance.isGift).to.equal(expectedValue);
  });

  it('should have the property conditionNote', () => {
    // verify property exists
    expect(instance).to.have.property('conditionNote');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.conditionNote = expectedValue;
    expect(instance.conditionNote).to.equal(expectedValue);
  });

  it('should have the property conditionId', () => {
    // verify property exists
    expect(instance).to.have.property('conditionId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.conditionId = expectedValue;
    expect(instance.conditionId).to.equal(expectedValue);
  });

  it('should have the property conditionSubtypeId', () => {
    // verify property exists
    expect(instance).to.have.property('conditionSubtypeId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.conditionSubtypeId = expectedValue;
    expect(instance.conditionSubtypeId).to.equal(expectedValue);
  });

  it('should have the property scheduledDeliveryStartDate', () => {
    // verify property exists
    expect(instance).to.have.property('scheduledDeliveryStartDate');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.scheduledDeliveryStartDate = expectedValue;
    expect(instance.scheduledDeliveryStartDate).to.equal(expectedValue);
  });

  it('should have the property scheduledDeliveryEndDate', () => {
    // verify property exists
    expect(instance).to.have.property('scheduledDeliveryEndDate');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.scheduledDeliveryEndDate = expectedValue;
    expect(instance.scheduledDeliveryEndDate).to.equal(expectedValue);
  });

  it('should have the property priceDesignation', () => {
    // verify property exists
    expect(instance).to.have.property('priceDesignation');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.priceDesignation = expectedValue;
    expect(instance.priceDesignation).to.equal(expectedValue);
  });

  it('should have the property taxCollection', () => {
    // verify property exists
    expect(instance).to.have.property('taxCollection');

    // set and verify value
    const expectedValue = generateMockData('TaxCollection');
    instance.taxCollection = expectedValue;
    expect(instance.taxCollection).to.equal(expectedValue);
  });

  it('should have the property serialNumberRequired', () => {
    // verify property exists
    expect(instance).to.have.property('serialNumberRequired');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.serialNumberRequired = expectedValue;
    expect(instance.serialNumberRequired).to.equal(expectedValue);
  });

  it('should have the property isTransparency', () => {
    // verify property exists
    expect(instance).to.have.property('isTransparency');

    // set and verify value
    const expectedValue = generateMockData('Boolean');
    instance.isTransparency = expectedValue;
    expect(instance.isTransparency).to.equal(expectedValue);
  });

  it('should have the property iossNumber', () => {
    // verify property exists
    expect(instance).to.have.property('iossNumber');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.iossNumber = expectedValue;
    expect(instance.iossNumber).to.equal(expectedValue);
  });

  it('should have the property storeChainStoreId', () => {
    // verify property exists
    expect(instance).to.have.property('storeChainStoreId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.storeChainStoreId = expectedValue;
    expect(instance.storeChainStoreId).to.equal(expectedValue);
  });

  it('should have the property deemedResellerCategory', () => {
    // verify property exists
    expect(instance).to.have.property('deemedResellerCategory');

    // set and verify value
    const expectedValue = ['IOSS', 'UOSS', ][0];
    instance.deemedResellerCategory = expectedValue;
    expect(instance.deemedResellerCategory).to.equal(expectedValue);
  });

  it('should have the property buyerInfo', () => {
    // verify property exists
    expect(instance).to.have.property('buyerInfo');

    // set and verify value
    const expectedValue = generateMockData('ItemBuyerInfo');
    instance.buyerInfo = expectedValue;
    expect(instance.buyerInfo).to.equal(expectedValue);
  });

  it('should have the property buyerRequestedCancel', () => {
    // verify property exists
    expect(instance).to.have.property('buyerRequestedCancel');

    // set and verify value
    const expectedValue = generateMockData('BuyerRequestedCancel');
    instance.buyerRequestedCancel = expectedValue;
    expect(instance.buyerRequestedCancel).to.equal(expectedValue);
  });

  it('should have the property serialNumbers', () => {
    // verify property exists
    expect(instance).to.have.property('serialNumbers');

    // set and verify value
    const expectedValue = generateMockData('String', true);
    instance.serialNumbers = expectedValue;
    expect(instance.serialNumbers).to.equal(expectedValue);
  });

  it('should have the property substitutionPreferences', () => {
    // verify property exists
    expect(instance).to.have.property('substitutionPreferences');

    // set and verify value
    const expectedValue = generateMockData('SubstitutionPreferences');
    instance.substitutionPreferences = expectedValue;
    expect(instance.substitutionPreferences).to.equal(expectedValue);
  });

  it('should have the property measurement', () => {
    // verify property exists
    expect(instance).to.have.property('measurement');

    // set and verify value
    const expectedValue = generateMockData('Measurement');
    instance.measurement = expectedValue;
    expect(instance.measurement).to.equal(expectedValue);
  });

  it('should have the property shippingConstraints', () => {
    // verify property exists
    expect(instance).to.have.property('shippingConstraints');

    // set and verify value
    const expectedValue = generateMockData('ShippingConstraints');
    instance.shippingConstraints = expectedValue;
    expect(instance.shippingConstraints).to.equal(expectedValue);
  });

  it('should have the property amazonPrograms', () => {
    // verify property exists
    expect(instance).to.have.property('amazonPrograms');

    // set and verify value
    const expectedValue = generateMockData('AmazonPrograms');
    instance.amazonPrograms = expectedValue;
    expect(instance.amazonPrograms).to.equal(expectedValue);
  });

  it('should have the property exportInfo', () => {
    // verify property exists
    expect(instance).to.have.property('exportInfo');

    // set and verify value
    const expectedValue = generateMockData('ExportInfo');
    instance.exportInfo = expectedValue;
    expect(instance.exportInfo).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForOrders[dataType];
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
