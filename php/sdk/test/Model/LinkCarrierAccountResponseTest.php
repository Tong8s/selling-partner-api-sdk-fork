<?php
/**
 * LinkCarrierAccountResponseTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\shipping\v2\LinkCarrierAccountResponse;

/**
 * LinkCarrierAccountResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The Response  for the LinkCarrierAccount operation.
 * @package     OpenAPI\Client
 */
class LinkCarrierAccountResponseTest extends TestCase
{

    private LinkCarrierAccountResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LinkCarrierAccountResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LinkCarrierAccountResponse"
     */
    public function testLinkCarrierAccountResponse()
    {
        $this->assertInstanceOf(LinkCarrierAccountResponse::class, $this->model);
    }

    /**
     * Test attribute "registration_status"
     */
    public function testPropertyRegistrationStatus()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\v2\AccountStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setRegistrationStatus($testValue);
        $this->assertEquals($testValue, $this->model->getRegistrationStatus());
    }
}
