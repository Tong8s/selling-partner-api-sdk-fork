/**
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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
import sinon from 'sinon';
import * as SellingPartnerApiForMerchantFulfillment from '../../src/index.js';

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
        const ModelClass = SellingPartnerApiForMerchantFulfillment[dataType];
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
const mockcancelShipmentData = {
  request: {
    'shipmentId': generateMockData('String')
  },
  response: {
    data: generateMockData('CancelShipmentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockcreateShipmentData = {
  request: {
    'body': generateMockData('CreateShipmentRequest')
  },
  response: {
    data: generateMockData('CreateShipmentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetAdditionalSellerInputsData = {
  request: {
    'body': generateMockData('GetAdditionalSellerInputsRequest')
  },
  response: {
    data: generateMockData('GetAdditionalSellerInputsResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetEligibleShipmentServicesData = {
  request: {
    'body': generateMockData('GetEligibleShipmentServicesRequest')
  },
  response: {
    data: generateMockData('GetEligibleShipmentServicesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetShipmentData = {
  request: {
    'shipmentId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetShipmentResponse'),
    statusCode: 200,
    headers: {}
  }
};

describe('MerchantFulfillmentApi', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const apiClientInstance = new SellingPartnerApiForMerchantFulfillment.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi(apiClientInstance);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('cancelShipment', () => {
    it('should successfully call cancelShipment', async () => {
      instance.apiClient.callApi.resolves(mockcancelShipmentData.response);

      const params = [
        mockcancelShipmentData.request['shipmentId']
      ];
      const data = await instance.cancelShipment(...params);

      expect(data instanceof SellingPartnerApiForMerchantFulfillment.CancelShipmentResponse).to.be.true;
    });

    it('should successfully call cancelShipmentWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcancelShipmentData.response);

      const params = [
        mockcancelShipmentData.request['shipmentId']
      ];
      const response = await instance.cancelShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcancelShipmentData.response.statusCode)
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
          mockcancelShipmentData.request['shipmentId']
        ];
        await instance.cancelShipment(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('createShipment', () => {
    it('should successfully call createShipment', async () => {
      instance.apiClient.callApi.resolves(mockcreateShipmentData.response);

      const params = [
        mockcreateShipmentData.request['body']
      ];
      const data = await instance.createShipment(...params);

      expect(data instanceof SellingPartnerApiForMerchantFulfillment.CreateShipmentResponse).to.be.true;
    });

    it('should successfully call createShipmentWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockcreateShipmentData.response);

      const params = [
        mockcreateShipmentData.request['body']
      ];
      const response = await instance.createShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockcreateShipmentData.response.statusCode)
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
          mockcreateShipmentData.request['body']
        ];
        await instance.createShipment(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getAdditionalSellerInputs', () => {
    it('should successfully call getAdditionalSellerInputs', async () => {
      instance.apiClient.callApi.resolves(mockgetAdditionalSellerInputsData.response);

      const params = [
        mockgetAdditionalSellerInputsData.request['body']
      ];
      const data = await instance.getAdditionalSellerInputs(...params);

      expect(data instanceof SellingPartnerApiForMerchantFulfillment.GetAdditionalSellerInputsResponse).to.be.true;
    });

    it('should successfully call getAdditionalSellerInputsWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetAdditionalSellerInputsData.response);

      const params = [
        mockgetAdditionalSellerInputsData.request['body']
      ];
      const response = await instance.getAdditionalSellerInputsWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetAdditionalSellerInputsData.response.statusCode)
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
          mockgetAdditionalSellerInputsData.request['body']
        ];
        await instance.getAdditionalSellerInputs(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getEligibleShipmentServices', () => {
    it('should successfully call getEligibleShipmentServices', async () => {
      instance.apiClient.callApi.resolves(mockgetEligibleShipmentServicesData.response);

      const params = [
        mockgetEligibleShipmentServicesData.request['body']
      ];
      const data = await instance.getEligibleShipmentServices(...params);

      expect(data instanceof SellingPartnerApiForMerchantFulfillment.GetEligibleShipmentServicesResponse).to.be.true;
    });

    it('should successfully call getEligibleShipmentServicesWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetEligibleShipmentServicesData.response);

      const params = [
        mockgetEligibleShipmentServicesData.request['body']
      ];
      const response = await instance.getEligibleShipmentServicesWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetEligibleShipmentServicesData.response.statusCode)
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
          mockgetEligibleShipmentServicesData.request['body']
        ];
        await instance.getEligibleShipmentServices(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });
  describe('getShipment', () => {
    it('should successfully call getShipment', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentData.response);

      const params = [
        mockgetShipmentData.request['shipmentId']
      ];
      const data = await instance.getShipment(...params);

      expect(data instanceof SellingPartnerApiForMerchantFulfillment.GetShipmentResponse).to.be.true;
    });

    it('should successfully call getShipmentWithHttpInfo', async () => {
      instance.apiClient.callApi.resolves(mockgetShipmentData.response);

      const params = [
        mockgetShipmentData.request['shipmentId']
      ];
      const response = await instance.getShipmentWithHttpInfo(...params);

      expect(response).to.have.property('statusCode');
      expect(response.statusCode).to.equal(mockgetShipmentData.response.statusCode)
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
          mockgetShipmentData.request['shipmentId']
        ];
        await instance.getShipment(...params);
        throw new Error('Expected error to be thrown');
      } catch (error) {
        expect(error).to.exist;
        expect(error.statusCode).to.equal(400);
      }
    });
  });

  describe('constructor', () => {
    it('should use default ApiClient when none provided', () => {
      const defaultInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi();
      expect(defaultInstance.apiClient).to.equal(SellingPartnerApiForMerchantFulfillment.ApiClient.instance);
    });

    it('should use provided ApiClient', () => {
      const customClient = new SellingPartnerApiForMerchantFulfillment.ApiClient();
      const customInstance = new SellingPartnerApiForMerchantFulfillment.MerchantFulfillmentApi(customClient);
      expect(customInstance.apiClient).to.equal(customClient);
    });
  });
});
