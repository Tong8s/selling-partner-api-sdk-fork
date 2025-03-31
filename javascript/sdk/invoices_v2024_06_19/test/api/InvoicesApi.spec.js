/**
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * The version of the OpenAPI document: 2024-06-19
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
    define(['expect.js', 'sinon', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('sinon'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.sinon, root.TheSellingPartnerApiForInvoices);
  }
}(this, function(expect, sinon, TheSellingPartnerApiForInvoices) {
  'use strict';

  var instance;
  var sandbox;
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
          const ModelClass = TheSellingPartnerApiForInvoices[dataType];
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
const mockcreateInvoicesExportData = {
  request: {
    'body': generateMockData('ExportInvoicesRequest')
  },
  response: {
    data: generateMockData('ExportInvoicesResponse'),
    statusCode: 202,
    headers: {}
  }
};
const mockgetInvoiceData = {
  request: {
    'marketplaceId': generateMockData('String'),
    'invoiceId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetInvoiceResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetInvoicesData = {
  request: {
    'marketplaceId': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetInvoicesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetInvoicesAttributesData = {
  request: {
    'marketplaceId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetInvoicesAttributesResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetInvoicesDocumentData = {
  request: {
    'invoicesDocumentId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetInvoicesDocumentResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetInvoicesExportData = {
  request: {
    'exportId': generateMockData('String')
  },
  response: {
    data: generateMockData('GetInvoicesExportResponse'),
    statusCode: 200,
    headers: {}
  }
};
const mockgetInvoicesExportsData = {
  request: {
    'marketplaceId': generateMockData('String'),
  },
  response: {
    data: generateMockData('GetInvoicesExportsResponse'),
    statusCode: 200,
    headers: {}
  }
};

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    var apiClientInstance = new TheSellingPartnerApiForInvoices.ApiClient(testEndpoint);
    apiClientInstance.applyXAmzAccessTokenToRequest(testAccessToken);
    sandbox.stub(apiClientInstance, 'callApi');
    instance = new TheSellingPartnerApiForInvoices.InvoicesApi(apiClientInstance);
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('InvoicesApi', function() {
    describe('createInvoicesExport', function() {
      
      it('should successfully call createInvoicesExport', function(done) {
        instance.apiClient.callApi.resolves(mockcreateInvoicesExportData.response);

        const params = [
          mockcreateInvoicesExportData.request['body']
        ];
        instance.createInvoicesExport(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.ExportInvoicesResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call createInvoicesExportWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockcreateInvoicesExportData.response);

        const params = [
          mockcreateInvoicesExportData.request['body']
        ];
        instance.createInvoicesExportWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockcreateInvoicesExportData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockcreateInvoicesExportData.request['body']
        ];
        instance.createInvoicesExport(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getInvoice', function() {
      
      it('should successfully call getInvoice', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoiceData.response);

        const params = [
          mockgetInvoiceData.request['marketplaceId'],
          mockgetInvoiceData.request['invoiceId']
        ];
        instance.getInvoice(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.GetInvoiceResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInvoiceWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoiceData.response);

        const params = [
          mockgetInvoiceData.request['marketplaceId'],
          mockgetInvoiceData.request['invoiceId']
        ];
        instance.getInvoiceWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInvoiceData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetInvoiceData.request['marketplaceId'],
          mockgetInvoiceData.request['invoiceId']
        ];
        instance.getInvoice(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getInvoices', function() {
      
      it('should successfully call getInvoices', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesData.response);

        const params = [
          mockgetInvoicesData.request['marketplaceId'],
        ];
        instance.getInvoices(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.GetInvoicesResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInvoicesWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesData.response);

        const params = [
          mockgetInvoicesData.request['marketplaceId'],
        ];
        instance.getInvoicesWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInvoicesData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetInvoicesData.request['marketplaceId'],
        ];
        instance.getInvoices(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getInvoicesAttributes', function() {
      
      it('should successfully call getInvoicesAttributes', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesAttributesData.response);

        const params = [
          mockgetInvoicesAttributesData.request['marketplaceId']
        ];
        instance.getInvoicesAttributes(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.GetInvoicesAttributesResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInvoicesAttributesWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesAttributesData.response);

        const params = [
          mockgetInvoicesAttributesData.request['marketplaceId']
        ];
        instance.getInvoicesAttributesWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInvoicesAttributesData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetInvoicesAttributesData.request['marketplaceId']
        ];
        instance.getInvoicesAttributes(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getInvoicesDocument', function() {
      
      it('should successfully call getInvoicesDocument', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesDocumentData.response);

        const params = [
          mockgetInvoicesDocumentData.request['invoicesDocumentId']
        ];
        instance.getInvoicesDocument(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.GetInvoicesDocumentResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInvoicesDocumentWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesDocumentData.response);

        const params = [
          mockgetInvoicesDocumentData.request['invoicesDocumentId']
        ];
        instance.getInvoicesDocumentWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInvoicesDocumentData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetInvoicesDocumentData.request['invoicesDocumentId']
        ];
        instance.getInvoicesDocument(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getInvoicesExport', function() {
      
      it('should successfully call getInvoicesExport', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesExportData.response);

        const params = [
          mockgetInvoicesExportData.request['exportId']
        ];
        instance.getInvoicesExport(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.GetInvoicesExportResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInvoicesExportWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesExportData.response);

        const params = [
          mockgetInvoicesExportData.request['exportId']
        ];
        instance.getInvoicesExportWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInvoicesExportData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetInvoicesExportData.request['exportId']
        ];
        instance.getInvoicesExport(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });
    describe('getInvoicesExports', function() {
      
      it('should successfully call getInvoicesExports', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesExportsData.response);

        const params = [
          mockgetInvoicesExportsData.request['marketplaceId'],
        ];
        instance.getInvoicesExports(...params)
          .then(function(data) {
            expect(data instanceof TheSellingPartnerApiForInvoices.GetInvoicesExportsResponse).to.be.true;
            done();
          })
          .catch(done);
      });

      it('should successfully call getInvoicesExportsWithHttpInfo', function(done) {
        instance.apiClient.callApi.resolves(mockgetInvoicesExportsData.response);

        const params = [
          mockgetInvoicesExportsData.request['marketplaceId'],
        ];
        instance.getInvoicesExportsWithHttpInfo(...params)
          .then(function(response) {
            expect(response).to.have.property('statusCode');
            expect(response.statusCode).to.equal(mockgetInvoicesExportsData.response.statusCode)
            expect(response).to.have.property('headers');
            expect(response).to.have.property('data');
            done();
          })
          .catch(done);
      });

      it('should handle API errors', function(done) {
        var errorResponse = {
          errors: new Error('Expected error to be thrown'),
          statusCode: 400,
          headers: {}
        };
        instance.apiClient.callApi.rejects(errorResponse);

        const params = [
          mockgetInvoicesExportsData.request['marketplaceId'],
        ];
        instance.getInvoicesExports(...params)
          .then(function() {
            done(new Error('Expected error to be thrown'));
          })
          .catch(function(error) {
            expect(error).to.exist;
            expect(error.statusCode).to.equal(400)
            done();
          });
      });
    });

    describe('constructor', function() {
      it('should use default ApiClient when none provided', function() {
        var defaultInstance = new TheSellingPartnerApiForInvoices.InvoicesApi();
        expect(defaultInstance.apiClient).to.equal(TheSellingPartnerApiForInvoices.ApiClient.instance);
      });

      it('should use provided ApiClient', function() {
        var customClient = new TheSellingPartnerApiForInvoices.ApiClient();
        var customInstance = new TheSellingPartnerApiForInvoices.InvoicesApi(customClient);
        expect(customInstance.apiClient).to.equal(customClient);
      });
    });
  });
}));
