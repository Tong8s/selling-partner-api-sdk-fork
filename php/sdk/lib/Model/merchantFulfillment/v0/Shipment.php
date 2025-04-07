<?php

/**
 * Shipment.
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
 * Selling Partner API for Merchant Fulfillment.
 *
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\merchantFulfillment\v0;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * Shipment Class Doc Comment.
 *
 * @category Class
 *
 * @description The details of a shipment. Includes the shipment status.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class Shipment implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'Shipment';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'shipment_id' => 'string',
        'amazon_order_id' => 'string',
        'seller_order_id' => 'string',
        'item_list' => '\SpApi\Model\merchantFulfillment\v0\Item[]',
        'ship_from_address' => '\SpApi\Model\merchantFulfillment\v0\Address',
        'ship_to_address' => '\SpApi\Model\merchantFulfillment\v0\Address',
        'package_dimensions' => '\SpApi\Model\merchantFulfillment\v0\PackageDimensions',
        'weight' => '\SpApi\Model\merchantFulfillment\v0\Weight',
        'insurance' => '\SpApi\Model\merchantFulfillment\v0\CurrencyAmount',
        'shipping_service' => '\SpApi\Model\merchantFulfillment\v0\ShippingService',
        'label' => '\SpApi\Model\merchantFulfillment\v0\Label',
        'status' => '\SpApi\Model\merchantFulfillment\v0\ShipmentStatus',
        'tracking_id' => 'string',
        'created_date' => '\DateTime',
        'last_updated_date' => '\DateTime'];

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
        'shipment_id' => null,
        'amazon_order_id' => null,
        'seller_order_id' => null,
        'item_list' => null,
        'ship_from_address' => null,
        'ship_to_address' => null,
        'package_dimensions' => null,
        'weight' => null,
        'insurance' => null,
        'shipping_service' => null,
        'label' => null,
        'status' => null,
        'tracking_id' => null,
        'created_date' => 'date-time',
        'last_updated_date' => 'date-time'];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'shipment_id' => false,
        'amazon_order_id' => false,
        'seller_order_id' => true,
        'item_list' => false,
        'ship_from_address' => false,
        'ship_to_address' => false,
        'package_dimensions' => false,
        'weight' => false,
        'insurance' => false,
        'shipping_service' => false,
        'label' => false,
        'status' => false,
        'tracking_id' => true,
        'created_date' => false,
        'last_updated_date' => true,
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
        'shipment_id' => 'ShipmentId',
        'amazon_order_id' => 'AmazonOrderId',
        'seller_order_id' => 'SellerOrderId',
        'item_list' => 'ItemList',
        'ship_from_address' => 'ShipFromAddress',
        'ship_to_address' => 'ShipToAddress',
        'package_dimensions' => 'PackageDimensions',
        'weight' => 'Weight',
        'insurance' => 'Insurance',
        'shipping_service' => 'ShippingService',
        'label' => 'Label',
        'status' => 'Status',
        'tracking_id' => 'TrackingId',
        'created_date' => 'CreatedDate',
        'last_updated_date' => 'LastUpdatedDate',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'shipment_id' => 'setShipmentId',
        'amazon_order_id' => 'setAmazonOrderId',
        'seller_order_id' => 'setSellerOrderId',
        'item_list' => 'setItemList',
        'ship_from_address' => 'setShipFromAddress',
        'ship_to_address' => 'setShipToAddress',
        'package_dimensions' => 'setPackageDimensions',
        'weight' => 'setWeight',
        'insurance' => 'setInsurance',
        'shipping_service' => 'setShippingService',
        'label' => 'setLabel',
        'status' => 'setStatus',
        'tracking_id' => 'setTrackingId',
        'created_date' => 'setCreatedDate',
        'last_updated_date' => 'setLastUpdatedDate',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'shipment_id' => 'getShipmentId',
        'amazon_order_id' => 'getAmazonOrderId',
        'seller_order_id' => 'getSellerOrderId',
        'item_list' => 'getItemList',
        'ship_from_address' => 'getShipFromAddress',
        'ship_to_address' => 'getShipToAddress',
        'package_dimensions' => 'getPackageDimensions',
        'weight' => 'getWeight',
        'insurance' => 'getInsurance',
        'shipping_service' => 'getShippingService',
        'label' => 'getLabel',
        'status' => 'getStatus',
        'tracking_id' => 'getTrackingId',
        'created_date' => 'getCreatedDate',
        'last_updated_date' => 'getLastUpdatedDate',
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
        $this->setIfExists('shipment_id', $data ?? [], null);
        $this->setIfExists('amazon_order_id', $data ?? [], null);
        $this->setIfExists('seller_order_id', $data ?? [], null);
        $this->setIfExists('item_list', $data ?? [], null);
        $this->setIfExists('ship_from_address', $data ?? [], null);
        $this->setIfExists('ship_to_address', $data ?? [], null);
        $this->setIfExists('package_dimensions', $data ?? [], null);
        $this->setIfExists('weight', $data ?? [], null);
        $this->setIfExists('insurance', $data ?? [], null);
        $this->setIfExists('shipping_service', $data ?? [], null);
        $this->setIfExists('label', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('tracking_id', $data ?? [], null);
        $this->setIfExists('created_date', $data ?? [], null);
        $this->setIfExists('last_updated_date', $data ?? [], null);
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

        if (null === $this->container['shipment_id']) {
            $invalidProperties[] = "'shipment_id' can't be null";
        }
        if (null === $this->container['amazon_order_id']) {
            $invalidProperties[] = "'amazon_order_id' can't be null";
        }
        if (!is_null($this->container['seller_order_id']) && (mb_strlen($this->container['seller_order_id']) > 64)) {
            $invalidProperties[] = "invalid value for 'seller_order_id', the character length must be smaller than or equal to 64.";
        }

        if (null === $this->container['item_list']) {
            $invalidProperties[] = "'item_list' can't be null";
        }
        if (null === $this->container['ship_from_address']) {
            $invalidProperties[] = "'ship_from_address' can't be null";
        }
        if (null === $this->container['ship_to_address']) {
            $invalidProperties[] = "'ship_to_address' can't be null";
        }
        if (null === $this->container['package_dimensions']) {
            $invalidProperties[] = "'package_dimensions' can't be null";
        }
        if (null === $this->container['weight']) {
            $invalidProperties[] = "'weight' can't be null";
        }
        if (null === $this->container['insurance']) {
            $invalidProperties[] = "'insurance' can't be null";
        }
        if (null === $this->container['shipping_service']) {
            $invalidProperties[] = "'shipping_service' can't be null";
        }
        if (null === $this->container['label']) {
            $invalidProperties[] = "'label' can't be null";
        }
        if (null === $this->container['status']) {
            $invalidProperties[] = "'status' can't be null";
        }
        if (null === $this->container['created_date']) {
            $invalidProperties[] = "'created_date' can't be null";
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
     * Gets shipment_id.
     */
    public function getShipmentId(): string
    {
        return $this->container['shipment_id'];
    }

    /**
     * Sets shipment_id.
     *
     * @param string $shipment_id an Amazon-defined shipment identifier
     */
    public function setShipmentId(string $shipment_id): self
    {
        if (is_null($shipment_id)) {
            throw new \InvalidArgumentException('non-nullable shipment_id cannot be null');
        }
        $this->container['shipment_id'] = $shipment_id;

        return $this;
    }

    /**
     * Gets amazon_order_id.
     */
    public function getAmazonOrderId(): string
    {
        return $this->container['amazon_order_id'];
    }

    /**
     * Sets amazon_order_id.
     *
     * @param string $amazon_order_id an Amazon-defined order identifier, in 3-7-7 format
     */
    public function setAmazonOrderId(string $amazon_order_id): self
    {
        if (is_null($amazon_order_id)) {
            throw new \InvalidArgumentException('non-nullable amazon_order_id cannot be null');
        }
        $this->container['amazon_order_id'] = $amazon_order_id;

        return $this;
    }

    /**
     * Gets seller_order_id.
     */
    public function getSellerOrderId(): ?string
    {
        return $this->container['seller_order_id'];
    }

    /**
     * Sets seller_order_id.
     *
     * @param null|string $seller_order_id a seller-defined order identifier
     */
    public function setSellerOrderId(?string $seller_order_id): self
    {
        if (is_null($seller_order_id)) {
            array_push($this->openAPINullablesSetToNull, 'seller_order_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_order_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($seller_order_id) && (mb_strlen($seller_order_id) > 64)) {
            throw new \InvalidArgumentException('invalid length for $seller_order_id when calling Shipment., must be smaller than or equal to 64.');
        }

        $this->container['seller_order_id'] = $seller_order_id;

        return $this;
    }

    /**
     * Gets item_list.
     */
    public function getItemList(): array
    {
        return $this->container['item_list'];
    }

    /**
     * Sets item_list.
     *
     * @param array $item_list the list of items you want to include in a shipment
     */
    public function setItemList(array $item_list): self
    {
        if (is_null($item_list)) {
            throw new \InvalidArgumentException('non-nullable item_list cannot be null');
        }
        $this->container['item_list'] = $item_list;

        return $this;
    }

    /**
     * Gets ship_from_address.
     */
    public function getShipFromAddress(): Address
    {
        return $this->container['ship_from_address'];
    }

    /**
     * Sets ship_from_address.
     *
     * @param Address $ship_from_address ship_from_address
     */
    public function setShipFromAddress(Address $ship_from_address): self
    {
        if (is_null($ship_from_address)) {
            throw new \InvalidArgumentException('non-nullable ship_from_address cannot be null');
        }
        $this->container['ship_from_address'] = $ship_from_address;

        return $this;
    }

    /**
     * Gets ship_to_address.
     */
    public function getShipToAddress(): Address
    {
        return $this->container['ship_to_address'];
    }

    /**
     * Sets ship_to_address.
     *
     * @param Address $ship_to_address ship_to_address
     */
    public function setShipToAddress(Address $ship_to_address): self
    {
        if (is_null($ship_to_address)) {
            throw new \InvalidArgumentException('non-nullable ship_to_address cannot be null');
        }
        $this->container['ship_to_address'] = $ship_to_address;

        return $this;
    }

    /**
     * Gets package_dimensions.
     */
    public function getPackageDimensions(): PackageDimensions
    {
        return $this->container['package_dimensions'];
    }

    /**
     * Sets package_dimensions.
     *
     * @param PackageDimensions $package_dimensions package_dimensions
     */
    public function setPackageDimensions(PackageDimensions $package_dimensions): self
    {
        if (is_null($package_dimensions)) {
            throw new \InvalidArgumentException('non-nullable package_dimensions cannot be null');
        }
        $this->container['package_dimensions'] = $package_dimensions;

        return $this;
    }

    /**
     * Gets weight.
     */
    public function getWeight(): Weight
    {
        return $this->container['weight'];
    }

    /**
     * Sets weight.
     *
     * @param Weight $weight weight
     */
    public function setWeight(Weight $weight): self
    {
        if (is_null($weight)) {
            throw new \InvalidArgumentException('non-nullable weight cannot be null');
        }
        $this->container['weight'] = $weight;

        return $this;
    }

    /**
     * Gets insurance.
     */
    public function getInsurance(): CurrencyAmount
    {
        return $this->container['insurance'];
    }

    /**
     * Sets insurance.
     *
     * @param CurrencyAmount $insurance insurance
     */
    public function setInsurance(CurrencyAmount $insurance): self
    {
        if (is_null($insurance)) {
            throw new \InvalidArgumentException('non-nullable insurance cannot be null');
        }
        $this->container['insurance'] = $insurance;

        return $this;
    }

    /**
     * Gets shipping_service.
     */
    public function getShippingService(): ShippingService
    {
        return $this->container['shipping_service'];
    }

    /**
     * Sets shipping_service.
     *
     * @param ShippingService $shipping_service shipping_service
     */
    public function setShippingService(ShippingService $shipping_service): self
    {
        if (is_null($shipping_service)) {
            throw new \InvalidArgumentException('non-nullable shipping_service cannot be null');
        }
        $this->container['shipping_service'] = $shipping_service;

        return $this;
    }

    /**
     * Gets label.
     */
    public function getLabel(): Label
    {
        return $this->container['label'];
    }

    /**
     * Sets label.
     *
     * @param Label $label label
     */
    public function setLabel(Label $label): self
    {
        if (is_null($label)) {
            throw new \InvalidArgumentException('non-nullable label cannot be null');
        }
        $this->container['label'] = $label;

        return $this;
    }

    /**
     * Gets status.
     */
    public function getStatus(): string
    {
        return $this->container['status'];
    }

    /**
     * Sets status.
     *
     * @param string $status status
     */
    public function setStatus(string $status): self
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets tracking_id.
     */
    public function getTrackingId(): ?string
    {
        return $this->container['tracking_id'];
    }

    /**
     * Sets tracking_id.
     *
     * @param null|string $tracking_id the shipment tracking identifier provided by the carrier
     */
    public function setTrackingId(?string $tracking_id): self
    {
        if (is_null($tracking_id)) {
            array_push($this->openAPINullablesSetToNull, 'tracking_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tracking_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tracking_id'] = $tracking_id;

        return $this;
    }

    /**
     * Gets created_date.
     */
    public function getCreatedDate(): \DateTime
    {
        return $this->container['created_date'];
    }

    /**
     * Sets created_date.
     *
     * @param \DateTime $created_date date-time formatted timestamp
     */
    public function setCreatedDate(\DateTime $created_date): self
    {
        if (is_null($created_date)) {
            throw new \InvalidArgumentException('non-nullable created_date cannot be null');
        }
        $this->container['created_date'] = $created_date;

        return $this;
    }

    /**
     * Gets last_updated_date.
     */
    public function getLastUpdatedDate(): ?\DateTime
    {
        return $this->container['last_updated_date'];
    }

    /**
     * Sets last_updated_date.
     *
     * @param null|\DateTime $last_updated_date date-time formatted timestamp
     */
    public function setLastUpdatedDate(?\DateTime $last_updated_date): self
    {
        if (is_null($last_updated_date)) {
            array_push($this->openAPINullablesSetToNull, 'last_updated_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('last_updated_date', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['last_updated_date'] = $last_updated_date;

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
