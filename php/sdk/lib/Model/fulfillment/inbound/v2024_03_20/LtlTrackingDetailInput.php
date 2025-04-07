<?php

/**
 * LtlTrackingDetailInput.
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
 * The Selling Partner API for FBA inbound operations.
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\fulfillment\inbound\v2024_03_20;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * LtlTrackingDetailInput Class Doc Comment.
 *
 * @category Class
 *
 * @description Contains input information to update Less-Than-Truckload (LTL) tracking information.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class LtlTrackingDetailInput implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'LtlTrackingDetailInput';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'bill_of_lading_number' => 'string',
        'freight_bill_number' => 'string[]'];

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
        'bill_of_lading_number' => null,
        'freight_bill_number' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'bill_of_lading_number' => true,
        'freight_bill_number' => false,
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
        'bill_of_lading_number' => 'billOfLadingNumber',
        'freight_bill_number' => 'freightBillNumber',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'bill_of_lading_number' => 'setBillOfLadingNumber',
        'freight_bill_number' => 'setFreightBillNumber',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'bill_of_lading_number' => 'getBillOfLadingNumber',
        'freight_bill_number' => 'getFreightBillNumber',
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
        $this->setIfExists('bill_of_lading_number', $data ?? [], null);
        $this->setIfExists('freight_bill_number', $data ?? [], null);
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

        if (!is_null($this->container['bill_of_lading_number']) && (mb_strlen($this->container['bill_of_lading_number']) > 1024)) {
            $invalidProperties[] = "invalid value for 'bill_of_lading_number', the character length must be smaller than or equal to 1024.";
        }

        if (!is_null($this->container['bill_of_lading_number']) && (mb_strlen($this->container['bill_of_lading_number']) < 1)) {
            $invalidProperties[] = "invalid value for 'bill_of_lading_number', the character length must be bigger than or equal to 1.";
        }

        if (null === $this->container['freight_bill_number']) {
            $invalidProperties[] = "'freight_bill_number' can't be null";
        }
        if (count($this->container['freight_bill_number']) > 1) {
            $invalidProperties[] = "invalid value for 'freight_bill_number', number of items must be less than or equal to 1.";
        }

        if (count($this->container['freight_bill_number']) < 1) {
            $invalidProperties[] = "invalid value for 'freight_bill_number', number of items must be greater than or equal to 1.";
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
     * Gets bill_of_lading_number.
     */
    public function getBillOfLadingNumber(): ?string
    {
        return $this->container['bill_of_lading_number'];
    }

    /**
     * Sets bill_of_lading_number.
     *
     * @param null|string $bill_of_lading_number the number of the carrier shipment acknowledgement document
     */
    public function setBillOfLadingNumber(?string $bill_of_lading_number): self
    {
        if (is_null($bill_of_lading_number)) {
            array_push($this->openAPINullablesSetToNull, 'bill_of_lading_number');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('bill_of_lading_number', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($bill_of_lading_number) && (mb_strlen($bill_of_lading_number) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $bill_of_lading_number when calling LtlTrackingDetailInput., must be smaller than or equal to 1024.');
        }
        if (!is_null($bill_of_lading_number) && (mb_strlen($bill_of_lading_number) < 1)) {
            throw new \InvalidArgumentException('invalid length for $bill_of_lading_number when calling LtlTrackingDetailInput., must be bigger than or equal to 1.');
        }

        $this->container['bill_of_lading_number'] = $bill_of_lading_number;

        return $this;
    }

    /**
     * Gets freight_bill_number.
     */
    public function getFreightBillNumber(): array
    {
        return $this->container['freight_bill_number'];
    }

    /**
     * Sets freight_bill_number.
     *
     * @param array $freight_bill_number number associated with the freight bill
     */
    public function setFreightBillNumber(array $freight_bill_number): self
    {
        if (is_null($freight_bill_number)) {
            throw new \InvalidArgumentException('non-nullable freight_bill_number cannot be null');
        }

        if (count($freight_bill_number) > 1) {
            throw new \InvalidArgumentException('invalid value for $freight_bill_number when calling LtlTrackingDetailInput., number of items must be less than or equal to 1.');
        }
        if (count($freight_bill_number) < 1) {
            throw new \InvalidArgumentException('invalid length for $freight_bill_number when calling LtlTrackingDetailInput., number of items must be greater than or equal to 1.');
        }
        $this->container['freight_bill_number'] = $freight_bill_number;

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
