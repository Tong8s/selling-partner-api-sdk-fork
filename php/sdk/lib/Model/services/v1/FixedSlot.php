<?php

/**
 * FixedSlot.
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
 * Selling Partner API for Services.
 *
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\services\v1;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * FixedSlot Class Doc Comment.
 *
 * @category Class
 *
 * @description In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class FixedSlot implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'FixedSlot';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'start_date_time' => '\DateTime',
        'scheduled_capacity' => 'int',
        'available_capacity' => 'int',
        'encumbered_capacity' => 'int',
        'reserved_capacity' => 'int'];

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
        'start_date_time' => 'date-time',
        'scheduled_capacity' => 'int32',
        'available_capacity' => 'int32',
        'encumbered_capacity' => 'int32',
        'reserved_capacity' => 'int32'];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'start_date_time' => true,
        'scheduled_capacity' => true,
        'available_capacity' => true,
        'encumbered_capacity' => true,
        'reserved_capacity' => true,
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
        'start_date_time' => 'startDateTime',
        'scheduled_capacity' => 'scheduledCapacity',
        'available_capacity' => 'availableCapacity',
        'encumbered_capacity' => 'encumberedCapacity',
        'reserved_capacity' => 'reservedCapacity',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'start_date_time' => 'setStartDateTime',
        'scheduled_capacity' => 'setScheduledCapacity',
        'available_capacity' => 'setAvailableCapacity',
        'encumbered_capacity' => 'setEncumberedCapacity',
        'reserved_capacity' => 'setReservedCapacity',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'start_date_time' => 'getStartDateTime',
        'scheduled_capacity' => 'getScheduledCapacity',
        'available_capacity' => 'getAvailableCapacity',
        'encumbered_capacity' => 'getEncumberedCapacity',
        'reserved_capacity' => 'getReservedCapacity',
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
        $this->setIfExists('start_date_time', $data ?? [], null);
        $this->setIfExists('scheduled_capacity', $data ?? [], null);
        $this->setIfExists('available_capacity', $data ?? [], null);
        $this->setIfExists('encumbered_capacity', $data ?? [], null);
        $this->setIfExists('reserved_capacity', $data ?? [], null);
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
        return [];
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
     * Gets start_date_time.
     */
    public function getStartDateTime(): ?\DateTime
    {
        return $this->container['start_date_time'];
    }

    /**
     * Sets start_date_time.
     *
     * @param null|\DateTime $start_date_time start date time of slot in ISO 8601 format with precision of seconds
     */
    public function setStartDateTime(?\DateTime $start_date_time): self
    {
        if (is_null($start_date_time)) {
            array_push($this->openAPINullablesSetToNull, 'start_date_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('start_date_time', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['start_date_time'] = $start_date_time;

        return $this;
    }

    /**
     * Gets scheduled_capacity.
     */
    public function getScheduledCapacity(): ?int
    {
        return $this->container['scheduled_capacity'];
    }

    /**
     * Sets scheduled_capacity.
     *
     * @param null|int $scheduled_capacity Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.
     */
    public function setScheduledCapacity(?int $scheduled_capacity): self
    {
        if (is_null($scheduled_capacity)) {
            array_push($this->openAPINullablesSetToNull, 'scheduled_capacity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('scheduled_capacity', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['scheduled_capacity'] = $scheduled_capacity;

        return $this;
    }

    /**
     * Gets available_capacity.
     */
    public function getAvailableCapacity(): ?int
    {
        return $this->container['available_capacity'];
    }

    /**
     * Sets available_capacity.
     *
     * @param null|int $available_capacity Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.
     */
    public function setAvailableCapacity(?int $available_capacity): self
    {
        if (is_null($available_capacity)) {
            array_push($this->openAPINullablesSetToNull, 'available_capacity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('available_capacity', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['available_capacity'] = $available_capacity;

        return $this;
    }

    /**
     * Gets encumbered_capacity.
     */
    public function getEncumberedCapacity(): ?int
    {
        return $this->container['encumbered_capacity'];
    }

    /**
     * Sets encumbered_capacity.
     *
     * @param null|int $encumbered_capacity Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.
     */
    public function setEncumberedCapacity(?int $encumbered_capacity): self
    {
        if (is_null($encumbered_capacity)) {
            array_push($this->openAPINullablesSetToNull, 'encumbered_capacity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('encumbered_capacity', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['encumbered_capacity'] = $encumbered_capacity;

        return $this;
    }

    /**
     * Gets reserved_capacity.
     */
    public function getReservedCapacity(): ?int
    {
        return $this->container['reserved_capacity'];
    }

    /**
     * Sets reserved_capacity.
     *
     * @param null|int $reserved_capacity Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.
     */
    public function setReservedCapacity(?int $reserved_capacity): self
    {
        if (is_null($reserved_capacity)) {
            array_push($this->openAPINullablesSetToNull, 'reserved_capacity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('reserved_capacity', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['reserved_capacity'] = $reserved_capacity;

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
