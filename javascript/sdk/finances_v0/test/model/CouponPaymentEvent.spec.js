/**
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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
import * as SellingPartnerApiForFinances from '../../src/index.js';

let instance;

beforeEach(() => {
  try {
    instance = new SellingPartnerApiForFinances.CouponPaymentEvent();
  } catch (e) {
    //Handle the cases when this model extends another model by using Model.call(this);
    instance = Object.create(SellingPartnerApiForFinances.CouponPaymentEvent.prototype);
  }
});

afterEach(() => {
  instance = null;
});

describe('CouponPaymentEvent', () => {
  it('should create an instance of CouponPaymentEvent', () => {
    expect(instance).to.be.a(SellingPartnerApiForFinances.CouponPaymentEvent);
  });

  it('should have the property postedDate', () => {
    // verify property exists
    expect(instance).to.have.property('postedDate');

    // set and verify value
    const expectedValue = generateMockData('Date');
    instance.postedDate = expectedValue;
    expect(instance.postedDate).to.equal(expectedValue);
  });

  it('should have the property couponId', () => {
    // verify property exists
    expect(instance).to.have.property('couponId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.couponId = expectedValue;
    expect(instance.couponId).to.equal(expectedValue);
  });

  it('should have the property sellerCouponDescription', () => {
    // verify property exists
    expect(instance).to.have.property('sellerCouponDescription');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.sellerCouponDescription = expectedValue;
    expect(instance.sellerCouponDescription).to.equal(expectedValue);
  });

  it('should have the property clipOrRedemptionCount', () => {
    // verify property exists
    expect(instance).to.have.property('clipOrRedemptionCount');

    // set and verify value
    const expectedValue = generateMockData('Number');
    instance.clipOrRedemptionCount = expectedValue;
    expect(instance.clipOrRedemptionCount).to.equal(expectedValue);
  });

  it('should have the property paymentEventId', () => {
    // verify property exists
    expect(instance).to.have.property('paymentEventId');

    // set and verify value
    const expectedValue = generateMockData('String');
    instance.paymentEventId = expectedValue;
    expect(instance.paymentEventId).to.equal(expectedValue);
  });

  it('should have the property feeComponent', () => {
    // verify property exists
    expect(instance).to.have.property('feeComponent');

    // set and verify value
    const expectedValue = generateMockData('FeeComponent');
    instance.feeComponent = expectedValue;
    expect(instance.feeComponent).to.equal(expectedValue);
  });

  it('should have the property chargeComponent', () => {
    // verify property exists
    expect(instance).to.have.property('chargeComponent');

    // set and verify value
    const expectedValue = generateMockData('ChargeComponent');
    instance.chargeComponent = expectedValue;
    expect(instance.chargeComponent).to.equal(expectedValue);
  });

  it('should have the property totalAmount', () => {
    // verify property exists
    expect(instance).to.have.property('totalAmount');

    // set and verify value
    const expectedValue = generateMockData('Currency');
    instance.totalAmount = expectedValue;
    expect(instance.totalAmount).to.equal(expectedValue);
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
        const ModelClass = SellingPartnerApiForFinances[dataType];
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
