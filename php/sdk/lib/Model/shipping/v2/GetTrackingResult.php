<?php

/**
 * GetTrackingResult.
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
 * Amazon Shipping API.
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\shipping\v2;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * GetTrackingResult Class Doc Comment.
 *
 * @category Class
 *
 * @description The payload for the getTracking operation.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class GetTrackingResult implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'GetTrackingResult';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'tracking_id' => 'string',
        'alternate_leg_tracking_id' => 'string',
        'event_history' => '\SpApi\Model\shipping\v2\Event[]',
        'promised_delivery_date' => '\DateTime',
        'summary' => '\SpApi\Model\shipping\v2\TrackingSummary'];

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
        'tracking_id' => null,
        'alternate_leg_tracking_id' => null,
        'event_history' => null,
        'promised_delivery_date' => 'date-time',
        'summary' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'tracking_id' => false,
        'alternate_leg_tracking_id' => false,
        'event_history' => false,
        'promised_delivery_date' => false,
        'summary' => false,
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
        'tracking_id' => 'trackingId',
        'alternate_leg_tracking_id' => 'alternateLegTrackingId',
        'event_history' => 'eventHistory',
        'promised_delivery_date' => 'promisedDeliveryDate',
        'summary' => 'summary',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'tracking_id' => 'setTrackingId',
        'alternate_leg_tracking_id' => 'setAlternateLegTrackingId',
        'event_history' => 'setEventHistory',
        'promised_delivery_date' => 'setPromisedDeliveryDate',
        'summary' => 'setSummary',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'tracking_id' => 'getTrackingId',
        'alternate_leg_tracking_id' => 'getAlternateLegTrackingId',
        'event_history' => 'getEventHistory',
        'promised_delivery_date' => 'getPromisedDeliveryDate',
        'summary' => 'getSummary',
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
        $this->setIfExists('tracking_id', $data ?? [], null);
        $this->setIfExists('alternate_leg_tracking_id', $data ?? [], null);
        $this->setIfExists('event_history', $data ?? [], null);
        $this->setIfExists('promised_delivery_date', $data ?? [], null);
        $this->setIfExists('summary', $data ?? [], null);
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

        if (null === $this->container['tracking_id']) {
            $invalidProperties[] = "'tracking_id' can't be null";
        }
        if (null === $this->container['alternate_leg_tracking_id']) {
            $invalidProperties[] = "'alternate_leg_tracking_id' can't be null";
        }
        if (null === $this->container['event_history']) {
            $invalidProperties[] = "'event_history' can't be null";
        }
        if (null === $this->container['promised_delivery_date']) {
            $invalidProperties[] = "'promised_delivery_date' can't be null";
        }
        if (null === $this->container['summary']) {
            $invalidProperties[] = "'summary' can't be null";
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
     * Gets tracking_id.
     */
    public function getTrackingId(): string
    {
        return $this->container['tracking_id'];
    }

    /**
     * Sets tracking_id.
     *
     * @param string $tracking_id the carrier generated identifier for a package in a purchased shipment
     */
    public function setTrackingId(string $tracking_id): self
    {
        if (is_null($tracking_id)) {
            throw new \InvalidArgumentException('non-nullable tracking_id cannot be null');
        }
        $this->container['tracking_id'] = $tracking_id;

        return $this;
    }

    /**
     * Gets alternate_leg_tracking_id.
     */
    public function getAlternateLegTrackingId(): string
    {
        return $this->container['alternate_leg_tracking_id'];
    }

    /**
     * Sets alternate_leg_tracking_id.
     *
     * @param string $alternate_leg_tracking_id the carrier generated reverse identifier for a returned package in a purchased shipment
     */
    public function setAlternateLegTrackingId(string $alternate_leg_tracking_id): self
    {
        if (is_null($alternate_leg_tracking_id)) {
            throw new \InvalidArgumentException('non-nullable alternate_leg_tracking_id cannot be null');
        }
        $this->container['alternate_leg_tracking_id'] = $alternate_leg_tracking_id;

        return $this;
    }

    /**
     * Gets event_history.
     */
    public function getEventHistory(): array
    {
        return $this->container['event_history'];
    }

    /**
     * Sets event_history.
     *
     * @param array $event_history a list of tracking events
     */
    public function setEventHistory(array $event_history): self
    {
        if (is_null($event_history)) {
            throw new \InvalidArgumentException('non-nullable event_history cannot be null');
        }
        $this->container['event_history'] = $event_history;

        return $this;
    }

    /**
     * Gets promised_delivery_date.
     */
    public function getPromisedDeliveryDate(): \DateTime
    {
        return $this->container['promised_delivery_date'];
    }

    /**
     * Sets promised_delivery_date.
     *
     * @param \DateTime $promised_delivery_date the date and time by which the shipment is promised to be delivered
     */
    public function setPromisedDeliveryDate(\DateTime $promised_delivery_date): self
    {
        if (is_null($promised_delivery_date)) {
            throw new \InvalidArgumentException('non-nullable promised_delivery_date cannot be null');
        }
        $this->container['promised_delivery_date'] = $promised_delivery_date;

        return $this;
    }

    /**
     * Gets summary.
     */
    public function getSummary(): TrackingSummary
    {
        return $this->container['summary'];
    }

    /**
     * Sets summary.
     *
     * @param TrackingSummary $summary summary
     */
    public function setSummary(TrackingSummary $summary): self
    {
        if (is_null($summary)) {
            throw new \InvalidArgumentException('non-nullable summary cannot be null');
        }
        $this->container['summary'] = $summary;

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
