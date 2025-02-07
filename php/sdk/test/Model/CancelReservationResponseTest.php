<?php
/**
 * CancelReservationResponseTest
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
use OpenAPI\Client\Model\services\v1\CancelReservationResponse;

/**
 * CancelReservationResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;cancelReservation&#x60; operation.
 * @package     OpenAPI\Client
 */
class CancelReservationResponseTest extends TestCase
{

    private CancelReservationResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CancelReservationResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CancelReservationResponse"
     */
    public function testCancelReservationResponse()
    {
        $this->assertInstanceOf(CancelReservationResponse::class, $this->model);
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
