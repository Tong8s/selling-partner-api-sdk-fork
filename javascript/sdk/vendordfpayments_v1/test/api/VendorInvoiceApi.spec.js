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

import expect from 'expect.js';
import sinon from 'sinon';
import * as SellingPartnerApiForDirectFulfillmentPayments from '../../src/index.js';

let instance;
let sandbox;
const testEndpoint = 'https://localhost:3000';
const testAccessToken = "testAccessToken";

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
        const ModelClass = SellingPartnerApiForDirectFulfillmentPayments[dataType];
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

// Generate mock requests and responses for each operation
const mocksubmitInvoiceData = {
  request: {
    'body': generateMockData('SubmitInvoiceRequest')
  },
  response: {
    data: generateMockData('SubmitInvoiceResponse'),
    statusCode: 202,
    headers: {}
  }
};

describe('VendorInvoiceApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForDirectFulfillmentPayments.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForDirectFulfillmentPayments.VendorInvoiceApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('submitInvoice', () => {
    it('should successfully call submitInvoice', async () => {
      instance.apiClient.callApi.resolves(mocksubmitInvoiceData.response);

      const params = [
        mocksubmitInvoiceData.request['body']
      ];
      const data = await instance.submitInvoice(...params);

      expect(data instanceof SellingPartnerApiForDirectFulfillmentPayments.SubmitInvoiceResponse).to.be.true;
    });

    it('should successfully call submitInvoiceWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mocksubmitInvoiceData.response);

      const params = [
        mocksubmitInvoiceData.request['body']
      ];
      const response = await instance.submitInvoiceWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mocksubmitInvoiceData.response.statusCode)
      expect(response).to.have.property('headers');
      expect(response).to.have.property('data');
    });

    it('should handle API errors', async () => {
      const errorResponse = {
        errors: new Error('Expected error to be thrown'),
        statusCode: 400,
        headers: {}
      };
      instance.apiClient.callApi.rejects(errorResponse);

      try {
        const params = [
          mocksubmitInvoiceData.request['body']
        ];
        await instance.submitInvoice(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForDirectFulfillmentPayments.VendorInvoiceApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForDirectFulfillmentPayments.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForDirectFulfillmentPayments.ApiClient();
      const customInstance = new SellingPartnerApiForDirectFulfillmentPayments.VendorInvoiceApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
