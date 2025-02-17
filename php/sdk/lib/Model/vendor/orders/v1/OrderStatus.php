<?php
/**
 * OrderStatus
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Retail Procurement Orders
 *
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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

namespace SpApi\Model\vendor\orders\v1;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * OrderStatus Class Doc Comment
 *
 * @category Class
 * @description Current status of a purchase order.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderStatus implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OrderStatus';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'purchase_order_number' => 'string',
             'purchase_order_status' => 'string',
             'purchase_order_date' => '\DateTime',
             'last_updated_date' => '\DateTime',
             'selling_party' => '\SpApi\Model\vendor\orders\v1\PartyIdentification',
             'ship_to_party' => '\SpApi\Model\vendor\orders\v1\PartyIdentification',
             'item_status' => '\SpApi\Model\vendor\orders\v1\OrderItemStatus[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'purchase_order_number' => null,
            'purchase_order_status' => null,
            'purchase_order_date' => 'date-time',
            'last_updated_date' => 'date-time',
            'selling_party' => null,
            'ship_to_party' => null,
            'item_status' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'purchase_order_number' => false,
        'purchase_order_status' => false,
        'purchase_order_date' => false,
        'last_updated_date' => true,
        'selling_party' => false,
        'ship_to_party' => false,
        'item_status' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'purchase_order_number' => 'purchaseOrderNumber',
                'purchase_order_status' => 'purchaseOrderStatus',
                'purchase_order_date' => 'purchaseOrderDate',
                'last_updated_date' => 'lastUpdatedDate',
                'selling_party' => 'sellingParty',
                'ship_to_party' => 'shipToParty',
                'item_status' => 'itemStatus'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'purchase_order_number' => 'setPurchaseOrderNumber',
        'purchase_order_status' => 'setPurchaseOrderStatus',
        'purchase_order_date' => 'setPurchaseOrderDate',
        'last_updated_date' => 'setLastUpdatedDate',
        'selling_party' => 'setSellingParty',
        'ship_to_party' => 'setShipToParty',
        'item_status' => 'setItemStatus'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'purchase_order_number' => 'getPurchaseOrderNumber',
        'purchase_order_status' => 'getPurchaseOrderStatus',
        'purchase_order_date' => 'getPurchaseOrderDate',
        'last_updated_date' => 'getLastUpdatedDate',
        'selling_party' => 'getSellingParty',
        'ship_to_party' => 'getShipToParty',
        'item_status' => 'getItemStatus'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    public const PURCHASE_ORDER_STATUS_OPEN = 'OPEN';
    public const PURCHASE_ORDER_STATUS_CLOSED = 'CLOSED';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPurchaseOrderStatusAllowableValues(): array
    {
        return [
            self::PURCHASE_ORDER_STATUS_OPEN,
            self::PURCHASE_ORDER_STATUS_CLOSED,
        ];
    }

    /**
     * Associative array for storing property values
     *
     * @var array
     */
    protected array $container = [];

    /**
     * Constructor
     *
     * @param array|null $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('purchase_order_number', $data ?? [], null);
        $this->setIfExists('purchase_order_status', $data ?? [], null);
        $this->setIfExists('purchase_order_date', $data ?? [], null);
        $this->setIfExists('last_updated_date', $data ?? [], null);
        $this->setIfExists('selling_party', $data ?? [], null);
        $this->setIfExists('ship_to_party', $data ?? [], null);
        $this->setIfExists('item_status', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if ($this->container['purchase_order_number'] === null) {
            $invalidProperties[] = "'purchase_order_number' can't be null";
        }
        if ($this->container['purchase_order_status'] === null) {
            $invalidProperties[] = "'purchase_order_status' can't be null";
        }
        $allowedValues = $this->getPurchaseOrderStatusAllowableValues();
        if (!is_null($this->container['purchase_order_status']) && !in_array($this->container['purchase_order_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'purchase_order_status', must be one of '%s'",
                $this->container['purchase_order_status'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['purchase_order_date'] === null) {
            $invalidProperties[] = "'purchase_order_date' can't be null";
        }
        if ($this->container['selling_party'] === null) {
            $invalidProperties[] = "'selling_party' can't be null";
        }
        if ($this->container['ship_to_party'] === null) {
            $invalidProperties[] = "'ship_to_party' can't be null";
        }
        if ($this->container['item_status'] === null) {
            $invalidProperties[] = "'item_status' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets purchase_order_number
     *
     * @return string
     */
    public function getPurchaseOrderNumber(): string
    {
        return $this->container['purchase_order_number'];
    }

    /**
     * Sets purchase_order_number
     *
     * @param string $purchase_order_number The buyer's purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     *
     * @return self
     */
    public function setPurchaseOrderNumber(string $purchase_order_number): self
    {
        if (is_null($purchase_order_number)) {
            throw new \InvalidArgumentException('non-nullable purchase_order_number cannot be null');
        }
        $this->container['purchase_order_number'] = $purchase_order_number;

        return $this;
    }

    /**
     * Gets purchase_order_status
     *
     * @return string
     */
    public function getPurchaseOrderStatus(): string
    {
        return $this->container['purchase_order_status'];
    }

    /**
     * Sets purchase_order_status
     *
     * @param string $purchase_order_status The status of the buyer's purchase order for this order.
     *
     * @return self
     */
    public function setPurchaseOrderStatus(string $purchase_order_status): self
    {
        if (is_null($purchase_order_status)) {
            throw new \InvalidArgumentException('non-nullable purchase_order_status cannot be null');
        }
        $allowedValues = $this->getPurchaseOrderStatusAllowableValues();
        if (!in_array($purchase_order_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'purchase_order_status', must be one of '%s'",
                    $purchase_order_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['purchase_order_status'] = $purchase_order_status;

        return $this;
    }

    /**
     * Gets purchase_order_date
     *
     * @return \DateTime
     */
    public function getPurchaseOrderDate(): \DateTime
    {
        return $this->container['purchase_order_date'];
    }

    /**
     * Sets purchase_order_date
     *
     * @param \DateTime $purchase_order_date The date the purchase order was placed. Must be in ISO-8601 date/time format.
     *
     * @return self
     */
    public function setPurchaseOrderDate(\DateTime $purchase_order_date): self
    {
        if (is_null($purchase_order_date)) {
            throw new \InvalidArgumentException('non-nullable purchase_order_date cannot be null');
        }
        $this->container['purchase_order_date'] = $purchase_order_date;

        return $this;
    }

    /**
     * Gets last_updated_date
     *
     * @return \DateTime|null
     */
    public function getLastUpdatedDate(): ?\DateTime
    {
        return $this->container['last_updated_date'];
    }

    /**
     * Sets last_updated_date
     *
     * @param \DateTime|null $last_updated_date The date when the purchase order was last updated. Must be in ISO-8601 date/time format.
     *
     * @return self
     */
    public function setLastUpdatedDate(?\DateTime $last_updated_date): self
    {
        if (is_null($last_updated_date)) {
            array_push($this->openAPINullablesSetToNull, 'last_updated_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('last_updated_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['last_updated_date'] = $last_updated_date;

        return $this;
    }

    /**
     * Gets selling_party
     *
     * @return \SpApi\Model\vendor\orders\v1\PartyIdentification
     */
    public function getSellingParty(): \SpApi\Model\vendor\orders\v1\PartyIdentification
    {
        return $this->container['selling_party'];
    }

    /**
     * Sets selling_party
     *
     * @param \SpApi\Model\vendor\orders\v1\PartyIdentification $selling_party selling_party
     *
     * @return self
     */
    public function setSellingParty(\SpApi\Model\vendor\orders\v1\PartyIdentification $selling_party): self
    {
        if (is_null($selling_party)) {
            throw new \InvalidArgumentException('non-nullable selling_party cannot be null');
        }
        $this->container['selling_party'] = $selling_party;

        return $this;
    }

    /**
     * Gets ship_to_party
     *
     * @return \SpApi\Model\vendor\orders\v1\PartyIdentification
     */
    public function getShipToParty(): \SpApi\Model\vendor\orders\v1\PartyIdentification
    {
        return $this->container['ship_to_party'];
    }

    /**
     * Sets ship_to_party
     *
     * @param \SpApi\Model\vendor\orders\v1\PartyIdentification $ship_to_party ship_to_party
     *
     * @return self
     */
    public function setShipToParty(\SpApi\Model\vendor\orders\v1\PartyIdentification $ship_to_party): self
    {
        if (is_null($ship_to_party)) {
            throw new \InvalidArgumentException('non-nullable ship_to_party cannot be null');
        }
        $this->container['ship_to_party'] = $ship_to_party;

        return $this;
    }

    /**
     * Gets item_status
     *
     * @return array
     */
    public function getItemStatus(): array
    {
        return $this->container['item_status'];
    }

    /**
     * Sets item_status
     *
     * @param array $item_status Detailed description of items order status.
     *
     * @return self
     */
    public function setItemStatus(array $item_status): self
    {
        if (is_null($item_status)) {
            throw new \InvalidArgumentException('non-nullable item_status cannot be null');
        }
        $this->container['item_status'] = $item_status;

        return $this;
    }


    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
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
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
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
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


