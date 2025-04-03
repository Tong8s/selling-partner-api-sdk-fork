<?php

/**
 * CreateReportSpecification.
 *
 * PHP version 8.3
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Reports.
 *
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\reports\v2021_06_30;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * CreateReportSpecification Class Doc Comment.
 *
 * @category Class
 *
 * @description Information required to create the report.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class CreateReportSpecification implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'CreateReportSpecification';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'report_options' => 'array<string,string>',
        'report_type' => 'string',
        'data_start_time' => '\DateTime',
        'data_end_time' => '\DateTime',
        'marketplace_ids' => 'string[]'];

    /**
     * Array of property to format mappings. Used for (de)serialization.
     *
     * @var string[]
     *
     * @phpstan-var array<string, string|null>
     *
     * @psalm-var array<string, string|null>
     */
    protected static array $openAPIFormats = [
        'report_options' => null,
        'report_type' => null,
        'data_start_time' => 'date-time',
        'data_end_time' => 'date-time',
        'marketplace_ids' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'report_options' => true,
        'report_type' => false,
        'data_start_time' => true,
        'data_end_time' => true,
        'marketplace_ids' => false,
    ];

    /**
     * If a nullable field gets set to null, insert it here.
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'report_options' => 'reportOptions',
        'report_type' => 'reportType',
        'data_start_time' => 'dataStartTime',
        'data_end_time' => 'dataEndTime',
        'marketplace_ids' => 'marketplaceIds',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'report_options' => 'setReportOptions',
        'report_type' => 'setReportType',
        'data_start_time' => 'setDataStartTime',
        'data_end_time' => 'setDataEndTime',
        'marketplace_ids' => 'setMarketplaceIds',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'report_options' => 'getReportOptions',
        'report_type' => 'getReportType',
        'data_start_time' => 'getDataStartTime',
        'data_end_time' => 'getDataEndTime',
        'marketplace_ids' => 'getMarketplaceIds',
    ];

    /**
     * Associative array for storing property values.
     */
    protected array $container = [];

    /**
     * Constructor.
     *
     * @param null|array $data Associated array of property values
     *                         initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('report_options', $data ?? [], null);
        $this->setIfExists('report_type', $data ?? [], null);
        $this->setIfExists('data_start_time', $data ?? [], null);
        $this->setIfExists('data_end_time', $data ?? [], null);
        $this->setIfExists('marketplace_ids', $data ?? [], null);
    }

    /**
     * Gets the string presentation of the object.
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Array of property to type mappings. Used for (de)serialization.
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization.
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Checks if a property is nullable.
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests).
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if (null === $this->container['report_type']) {
            $invalidProperties[] = "'report_type' can't be null";
        }
        if (null === $this->container['marketplace_ids']) {
            $invalidProperties[] = "'marketplace_ids' can't be null";
        }
        if (count($this->container['marketplace_ids']) > 25) {
            $invalidProperties[] = "invalid value for 'marketplace_ids', number of items must be less than or equal to 25.";
        }

        if (count($this->container['marketplace_ids']) < 1) {
            $invalidProperties[] = "invalid value for 'marketplace_ids', number of items must be greater than or equal to 1.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed.
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return 0 === count($this->listInvalidProperties());
    }

    /**
     * Gets report_options.
     *
     * @return null|array<string,string>
     */
    public function getReportOptions(): ?array
    {
        return $this->container['report_options'];
    }

    /**
     * Sets report_options.
     *
     * @param null|array<string,string> $report_options Additional information passed to reports. This varies by report type.
     */
    public function setReportOptions(?array $report_options): self
    {
        if (is_null($report_options)) {
            array_push($this->openAPINullablesSetToNull, 'report_options');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('report_options', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['report_options'] = $report_options;

        return $this;
    }

    /**
     * Gets report_type.
     */
    public function getReportType(): string
    {
        return $this->container['report_type'];
    }

    /**
     * Sets report_type.
     *
     * @param string $report_type The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     */
    public function setReportType(string $report_type): self
    {
        if (is_null($report_type)) {
            throw new \InvalidArgumentException('non-nullable report_type cannot be null');
        }
        $this->container['report_type'] = $report_type;

        return $this;
    }

    /**
     * Gets data_start_time.
     */
    public function getDataStartTime(): ?\DateTime
    {
        return $this->container['data_start_time'];
    }

    /**
     * Sets data_start_time.
     *
     * @param null|\DateTime $data_start_time The start of a date and time range, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
     */
    public function setDataStartTime(?\DateTime $data_start_time): self
    {
        if (is_null($data_start_time)) {
            array_push($this->openAPINullablesSetToNull, 'data_start_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('data_start_time', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['data_start_time'] = $data_start_time;

        return $this;
    }

    /**
     * Gets data_end_time.
     */
    public function getDataEndTime(): ?\DateTime
    {
        return $this->container['data_end_time'];
    }

    /**
     * Sets data_end_time.
     *
     * @param null|\DateTime $data_end_time The end of a date and time range, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
     */
    public function setDataEndTime(?\DateTime $data_end_time): self
    {
        if (is_null($data_end_time)) {
            array_push($this->openAPINullablesSetToNull, 'data_end_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('data_end_time', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['data_end_time'] = $data_end_time;

        return $this;
    }

    /**
     * Gets marketplace_ids.
     */
    public function getMarketplaceIds(): array
    {
        return $this->container['marketplace_ids'];
    }

    /**
     * Sets marketplace_ids.
     *
     * @param array $marketplace_ids A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise.
     */
    public function setMarketplaceIds(array $marketplace_ids): self
    {
        if (is_null($marketplace_ids)) {
            throw new \InvalidArgumentException('non-nullable marketplace_ids cannot be null');
        }

        if (count($marketplace_ids) > 25) {
            throw new \InvalidArgumentException('invalid value for $marketplace_ids when calling CreateReportSpecification., number of items must be less than or equal to 25.');
        }
        if (count($marketplace_ids) < 1) {
            throw new \InvalidArgumentException('invalid length for $marketplace_ids when calling CreateReportSpecification., number of items must be greater than or equal to 1.');
        }
        $this->container['marketplace_ids'] = $marketplace_ids;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return null|mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param null|int $offset Offset
     * @param mixed    $value  Value to be set
     */
    public function offsetSet($offset, mixed $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param int $offset Offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets a header-safe presentation of the object.
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }

    /**
     * Array of nullable properties.
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null.
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null.
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array.
     *
     * @param mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }
}
