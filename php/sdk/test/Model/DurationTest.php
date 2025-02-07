<?php
/**
 * DurationTest
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
use OpenAPI\Client\Model\supplySources\v2020_07_01\Duration;

/**
 * DurationTest Class Doc Comment
 *
 * @category    Class
 * @description The duration of time.
 * @package     OpenAPI\Client
 */
class DurationTest extends TestCase
{

    private Duration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Duration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Duration"
     */
    public function testDuration()
    {
        $this->assertInstanceOf(Duration::class, $this->model);
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 123;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }

    /**
     * Test attribute "time_unit"
     */
    public function testPropertyTimeUnit()
    {
        $enumInstance = new \OpenAPI\Client\Model\supplySources\v2020_07_01\TimeUnit();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTimeUnit($testValue);
        $this->assertEquals($testValue, $this->model->getTimeUnit());
    }
}
