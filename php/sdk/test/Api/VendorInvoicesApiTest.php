<?php
/**
 * VendorInvoicesApiTest
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Vendor Invoices v1
 *
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Please update the test case below to test the endpoint.
 */

namespace SpApi\Test\Api;

use SpApi\ApiException;
use SpApi\Api\vendor\invoices\v1\VendorInvoicesApi;
use SpApi\ObjectSerializer;

/**
 * VendorInvoicesApiTest Class Doc Comment
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class VendorInvoicesApiTest extends BaseTestCase
{
    private VendorInvoicesApi $apiInstance;
    public function setUp(): void
    {
        parent::setUp();
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('VendorInvoicesApi', $this->getName());
        $this->apiInstance = new VendorInvoicesApi($this->config, null, null);
        // Change Time Format if it requires
        $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('VendorInvoicesApi');
        if ($specificTimeFormat) {
            ObjectSerializer::setDateTimeFormat($specificTimeFormat);
        }
    }

    /**
     * Test case for submitInvoices_202
     */
    public function testSubmitInvoices202()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitInvoices202', 'VendorInvoicesApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Success.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference identifier.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/SubmitInvoicesResponse&quot;
      },
      &quot;example&quot; : {
        &quot;payload&quot; : {
          &quot;transactionId&quot; : &quot;20190904171225-e1275c33-d75b-4bfe-b95c-15a9abfc09cc&quot;
        }
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;invoices&quot; : [ {
                &quot;id&quot; : &quot;TestInvoice202&quot;,
                &quot;date&quot; : &quot;2020-06-08T12:00:00.000Z&quot;,
                &quot;billToParty&quot; : {
                  &quot;partyId&quot; : &quot;TES1&quot;
                },
                &quot;invoiceType&quot; : &quot;Invoice&quot;,
                &quot;remitToParty&quot; : {
                  &quot;partyId&quot; : &quot;ABCDE&quot;
                },
                &quot;invoiceTotal&quot; : {
                  &quot;amount&quot; : &quot;112.05&quot;,
                  &quot;currencyCode&quot; : &quot;USD&quot;
                }
              } ]
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;payload&quot; : {
          &quot;transactionId&quot; : &quot;20190904171225-e1275c33-d75b-4bfe-b95c-15a9abfc09cc&quot;
        }
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'submitInvoices'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('VendorInvoicesApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitInvoicesWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(202, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 202, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 202);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitInvoices_400
     */
    public function testSubmitInvoices400()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitInvoices400', 'VendorInvoicesApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Request has missing or invalid parameters and cannot be parsed.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference identifier.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/SubmitInvoicesResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;invoices&quot; : [ {
                &quot;invoiceType&quot; : &quot;Invoic&quot;
              } ]
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InvalidInput&quot;,
          &quot;message&quot; : &quot;Value &#39;Invoic&#39; is not valid with respect to enumeration &#39;[CreditNote, Invoice]&#39;. It must be a value from the enumeration.&quot;,
          &quot;details&quot; : &quot;&quot;
        }, {
          &quot;code&quot; : &quot;InvalidInput&quot;,
          &quot;message&quot; : &quot;The value &#39;Invoic&#39; of element &#39;invoiceType&#39; is not valid.&quot;,
          &quot;details&quot; : &quot;&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'submitInvoices'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('VendorInvoicesApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitInvoicesWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(400, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 400, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 400);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitInvoices_403
     */
    public function testSubmitInvoices403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitInvoices_404
     */
    public function testSubmitInvoices404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitInvoices_413
     */
    public function testSubmitInvoices413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitInvoices_415
     */
    public function testSubmitInvoices415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitInvoices_429
     */
    public function testSubmitInvoices429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitInvoices_500
     */
    public function testSubmitInvoices500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitInvoices_503
     */
    public function testSubmitInvoices503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
