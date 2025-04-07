/**
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
import * as SellingPartnerApiForSolicitations from '../../src/index.js';

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
        const ModelClass = SellingPartnerApiForSolicitations[dataType];
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
const mockcreateProductReviewAndSellerFeedbackSolicitationData = {
  request: {
    'amazonOrderId': generateMockData('String'),
    'marketplaceIds': generateMockData('String', true)
  },
  response: {
    data: generateMockData('CreateProductReviewAndSellerFeedbackSolicitationResponse'),
    statusCode: 201,
    headers: {}
  }
};
const mockgetSolicitationActionsForOrderData = {
  request: {
    'amazonOrderId': generateMockData('String'),
    'marketplaceIds': generateMockData('String', true)
  },
  response: {
    data: generateMockData('GetSolicitationActionsForOrderResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('SolicitationsApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForSolicitations.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForSolicitations.SolicitationsApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('createProductReviewAndSellerFeedbackSolicitation', () => {
    it('should successfully call createProductReviewAndSellerFeedbackSolicitation', async () => {
      instance.apiClient.callApi.resolves(mockcreateProductReviewAndSellerFeedbackSolicitationData.response);

      const params = [
        mockcreateProductReviewAndSellerFeedbackSolicitationData.request['amazonOrderId'],
        mockcreateProductReviewAndSellerFeedbackSolicitationData.request['marketplaceIds']
      ];
      const data = await instance.createProductReviewAndSellerFeedbackSolicitation(...params);

      expect(data instanceof SellingPartnerApiForSolicitations.CreateProductReviewAndSellerFeedbackSolicitationResponse).to.be.true;
    });

    it('should successfully call createProductReviewAndSellerFeedbackSolicitationWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateProductReviewAndSellerFeedbackSolicitationData.response);

      const params = [
        mockcreateProductReviewAndSellerFeedbackSolicitationData.request['amazonOrderId'],
        mockcreateProductReviewAndSellerFeedbackSolicitationData.request['marketplaceIds']
      ];
      const response = await instance.createProductReviewAndSellerFeedbackSolicitationWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateProductReviewAndSellerFeedbackSolicitationData.response.statusCode)
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
          mockcreateProductReviewAndSellerFeedbackSolicitationData.request['amazonOrderId'],
          mockcreateProductReviewAndSellerFeedbackSolicitationData.request['marketplaceIds']
        ];
        await instance.createProductReviewAndSellerFeedbackSolicitation(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getSolicitationActionsForOrder', () => {
    it('should successfully call getSolicitationActionsForOrder', async () => {
      instance.apiClient.callApi.resolves(mockgetSolicitationActionsForOrderData.response);

      const params = [
        mockgetSolicitationActionsForOrderData.request['amazonOrderId'],
        mockgetSolicitationActionsForOrderData.request['marketplaceIds']
      ];
      const data = await instance.getSolicitationActionsForOrder(...params);

      expect(data instanceof SellingPartnerApiForSolicitations.GetSolicitationActionsForOrderResponse).to.be.true;
    });

    it('should successfully call getSolicitationActionsForOrderWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetSolicitationActionsForOrderData.response);

      const params = [
        mockgetSolicitationActionsForOrderData.request['amazonOrderId'],
        mockgetSolicitationActionsForOrderData.request['marketplaceIds']
      ];
      const response = await instance.getSolicitationActionsForOrderWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetSolicitationActionsForOrderData.response.statusCode)
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
          mockgetSolicitationActionsForOrderData.request['amazonOrderId'],
          mockgetSolicitationActionsForOrderData.request['marketplaceIds']
        ];
        await instance.getSolicitationActionsForOrder(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForSolicitations.SolicitationsApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForSolicitations.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForSolicitations.ApiClient();
      const customInstance = new SellingPartnerApiForSolicitations.SolicitationsApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
