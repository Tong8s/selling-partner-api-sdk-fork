<?php

/**
 * ShipmentEvent.
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
 * Selling Partner API for Finances.
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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

namespace SpApi\Model\finances\v0;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * ShipmentEvent Class Doc Comment.
 *
 * @category Class
 *
 * @description A shipment, refund, guarantee claim, or chargeback.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class ShipmentEvent implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'ShipmentEvent';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'amazon_order_id' => 'string',
        'seller_order_id' => 'string',
        'marketplace_name' => 'string',
        'store_name' => 'string',
        'order_charge_list' => '\SpApi\Model\finances\v0\ChargeComponent[]',
        'order_charge_adjustment_list' => '\SpApi\Model\finances\v0\ChargeComponent[]',
        'shipment_fee_list' => '\SpApi\Model\finances\v0\FeeComponent[]',
        'shipment_fee_adjustment_list' => '\SpApi\Model\finances\v0\FeeComponent[]',
        'order_fee_list' => '\SpApi\Model\finances\v0\FeeComponent[]',
        'order_fee_adjustment_list' => '\SpApi\Model\finances\v0\FeeComponent[]',
        'direct_payment_list' => '\SpApi\Model\finances\v0\DirectPayment[]',
        'posted_date' => '\DateTime',
        'shipment_item_list' => '\SpApi\Model\finances\v0\ShipmentItem[]',
        'shipment_item_adjustment_list' => '\SpApi\Model\finances\v0\ShipmentItem[]'];

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
        'amazon_order_id' => null,
        'seller_order_id' => null,
        'marketplace_name' => null,
        'store_name' => null,
        'order_charge_list' => null,
        'order_charge_adjustment_list' => null,
        'shipment_fee_list' => null,
        'shipment_fee_adjustment_list' => null,
        'order_fee_list' => null,
        'order_fee_adjustment_list' => null,
        'direct_payment_list' => null,
        'posted_date' => 'date-time',
        'shipment_item_list' => null,
        'shipment_item_adjustment_list' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'amazon_order_id' => true,
        'seller_order_id' => true,
        'marketplace_name' => true,
        'store_name' => true,
        'order_charge_list' => true,
        'order_charge_adjustment_list' => true,
        'shipment_fee_list' => true,
        'shipment_fee_adjustment_list' => true,
        'order_fee_list' => true,
        'order_fee_adjustment_list' => true,
        'direct_payment_list' => true,
        'posted_date' => true,
        'shipment_item_list' => true,
        'shipment_item_adjustment_list' => true,
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
        'amazon_order_id' => 'AmazonOrderId',
        'seller_order_id' => 'SellerOrderId',
        'marketplace_name' => 'MarketplaceName',
        'store_name' => 'StoreName',
        'order_charge_list' => 'OrderChargeList',
        'order_charge_adjustment_list' => 'OrderChargeAdjustmentList',
        'shipment_fee_list' => 'ShipmentFeeList',
        'shipment_fee_adjustment_list' => 'ShipmentFeeAdjustmentList',
        'order_fee_list' => 'OrderFeeList',
        'order_fee_adjustment_list' => 'OrderFeeAdjustmentList',
        'direct_payment_list' => 'DirectPaymentList',
        'posted_date' => 'PostedDate',
        'shipment_item_list' => 'ShipmentItemList',
        'shipment_item_adjustment_list' => 'ShipmentItemAdjustmentList',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'amazon_order_id' => 'setAmazonOrderId',
        'seller_order_id' => 'setSellerOrderId',
        'marketplace_name' => 'setMarketplaceName',
        'store_name' => 'setStoreName',
        'order_charge_list' => 'setOrderChargeList',
        'order_charge_adjustment_list' => 'setOrderChargeAdjustmentList',
        'shipment_fee_list' => 'setShipmentFeeList',
        'shipment_fee_adjustment_list' => 'setShipmentFeeAdjustmentList',
        'order_fee_list' => 'setOrderFeeList',
        'order_fee_adjustment_list' => 'setOrderFeeAdjustmentList',
        'direct_payment_list' => 'setDirectPaymentList',
        'posted_date' => 'setPostedDate',
        'shipment_item_list' => 'setShipmentItemList',
        'shipment_item_adjustment_list' => 'setShipmentItemAdjustmentList',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'amazon_order_id' => 'getAmazonOrderId',
        'seller_order_id' => 'getSellerOrderId',
        'marketplace_name' => 'getMarketplaceName',
        'store_name' => 'getStoreName',
        'order_charge_list' => 'getOrderChargeList',
        'order_charge_adjustment_list' => 'getOrderChargeAdjustmentList',
        'shipment_fee_list' => 'getShipmentFeeList',
        'shipment_fee_adjustment_list' => 'getShipmentFeeAdjustmentList',
        'order_fee_list' => 'getOrderFeeList',
        'order_fee_adjustment_list' => 'getOrderFeeAdjustmentList',
        'direct_payment_list' => 'getDirectPaymentList',
        'posted_date' => 'getPostedDate',
        'shipment_item_list' => 'getShipmentItemList',
        'shipment_item_adjustment_list' => 'getShipmentItemAdjustmentList',
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
        $this->setIfExists('amazon_order_id', $data ?? [], null);
        $this->setIfExists('seller_order_id', $data ?? [], null);
        $this->setIfExists('marketplace_name', $data ?? [], null);
        $this->setIfExists('store_name', $data ?? [], null);
        $this->setIfExists('order_charge_list', $data ?? [], null);
        $this->setIfExists('order_charge_adjustment_list', $data ?? [], null);
        $this->setIfExists('shipment_fee_list', $data ?? [], null);
        $this->setIfExists('shipment_fee_adjustment_list', $data ?? [], null);
        $this->setIfExists('order_fee_list', $data ?? [], null);
        $this->setIfExists('order_fee_adjustment_list', $data ?? [], null);
        $this->setIfExists('direct_payment_list', $data ?? [], null);
        $this->setIfExists('posted_date', $data ?? [], null);
        $this->setIfExists('shipment_item_list', $data ?? [], null);
        $this->setIfExists('shipment_item_adjustment_list', $data ?? [], null);
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
     * Gets amazon_order_id.
     */
    public function getAmazonOrderId(): ?string
    {
        return $this->container['amazon_order_id'];
    }

    /**
     * Sets amazon_order_id.
     *
     * @param null|string $amazon_order_id an Amazon-defined identifier for an order
     */
    public function setAmazonOrderId(?string $amazon_order_id): self
    {
        if (is_null($amazon_order_id)) {
            array_push($this->openAPINullablesSetToNull, 'amazon_order_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('amazon_order_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
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
     * @param null|string $seller_order_id a seller-defined identifier for an order
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
        $this->container['seller_order_id'] = $seller_order_id;

        return $this;
    }

    /**
     * Gets marketplace_name.
     */
    public function getMarketplaceName(): ?string
    {
        return $this->container['marketplace_name'];
    }

    /**
     * Sets marketplace_name.
     *
     * @param null|string $marketplace_name the name of the marketplace where the event occurred
     */
    public function setMarketplaceName(?string $marketplace_name): self
    {
        if (is_null($marketplace_name)) {
            array_push($this->openAPINullablesSetToNull, 'marketplace_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('marketplace_name', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['marketplace_name'] = $marketplace_name;

        return $this;
    }

    /**
     * Gets store_name.
     */
    public function getStoreName(): ?string
    {
        return $this->container['store_name'];
    }

    /**
     * Sets store_name.
     *
     * @param null|string $store_name the name of the store where the event occurred
     */
    public function setStoreName(?string $store_name): self
    {
        if (is_null($store_name)) {
            array_push($this->openAPINullablesSetToNull, 'store_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('store_name', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['store_name'] = $store_name;

        return $this;
    }

    /**
     * Gets order_charge_list.
     */
    public function getOrderChargeList(): ?array
    {
        return $this->container['order_charge_list'];
    }

    /**
     * Sets order_charge_list.
     *
     * @param null|array $order_charge_list a list of charge information on the seller's account
     */
    public function setOrderChargeList(?array $order_charge_list): self
    {
        if (is_null($order_charge_list)) {
            array_push($this->openAPINullablesSetToNull, 'order_charge_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_charge_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_charge_list'] = $order_charge_list;

        return $this;
    }

    /**
     * Gets order_charge_adjustment_list.
     */
    public function getOrderChargeAdjustmentList(): ?array
    {
        return $this->container['order_charge_adjustment_list'];
    }

    /**
     * Sets order_charge_adjustment_list.
     *
     * @param null|array $order_charge_adjustment_list a list of charge information on the seller's account
     */
    public function setOrderChargeAdjustmentList(?array $order_charge_adjustment_list): self
    {
        if (is_null($order_charge_adjustment_list)) {
            array_push($this->openAPINullablesSetToNull, 'order_charge_adjustment_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_charge_adjustment_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_charge_adjustment_list'] = $order_charge_adjustment_list;

        return $this;
    }

    /**
     * Gets shipment_fee_list.
     */
    public function getShipmentFeeList(): ?array
    {
        return $this->container['shipment_fee_list'];
    }

    /**
     * Sets shipment_fee_list.
     *
     * @param null|array $shipment_fee_list a list of fee component information
     */
    public function setShipmentFeeList(?array $shipment_fee_list): self
    {
        if (is_null($shipment_fee_list)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_fee_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_fee_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_fee_list'] = $shipment_fee_list;

        return $this;
    }

    /**
     * Gets shipment_fee_adjustment_list.
     */
    public function getShipmentFeeAdjustmentList(): ?array
    {
        return $this->container['shipment_fee_adjustment_list'];
    }

    /**
     * Sets shipment_fee_adjustment_list.
     *
     * @param null|array $shipment_fee_adjustment_list a list of fee component information
     */
    public function setShipmentFeeAdjustmentList(?array $shipment_fee_adjustment_list): self
    {
        if (is_null($shipment_fee_adjustment_list)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_fee_adjustment_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_fee_adjustment_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_fee_adjustment_list'] = $shipment_fee_adjustment_list;

        return $this;
    }

    /**
     * Gets order_fee_list.
     */
    public function getOrderFeeList(): ?array
    {
        return $this->container['order_fee_list'];
    }

    /**
     * Sets order_fee_list.
     *
     * @param null|array $order_fee_list a list of fee component information
     */
    public function setOrderFeeList(?array $order_fee_list): self
    {
        if (is_null($order_fee_list)) {
            array_push($this->openAPINullablesSetToNull, 'order_fee_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_fee_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_fee_list'] = $order_fee_list;

        return $this;
    }

    /**
     * Gets order_fee_adjustment_list.
     */
    public function getOrderFeeAdjustmentList(): ?array
    {
        return $this->container['order_fee_adjustment_list'];
    }

    /**
     * Sets order_fee_adjustment_list.
     *
     * @param null|array $order_fee_adjustment_list a list of fee component information
     */
    public function setOrderFeeAdjustmentList(?array $order_fee_adjustment_list): self
    {
        if (is_null($order_fee_adjustment_list)) {
            array_push($this->openAPINullablesSetToNull, 'order_fee_adjustment_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_fee_adjustment_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_fee_adjustment_list'] = $order_fee_adjustment_list;

        return $this;
    }

    /**
     * Gets direct_payment_list.
     */
    public function getDirectPaymentList(): ?array
    {
        return $this->container['direct_payment_list'];
    }

    /**
     * Sets direct_payment_list.
     *
     * @param null|array $direct_payment_list a list of direct payment information
     */
    public function setDirectPaymentList(?array $direct_payment_list): self
    {
        if (is_null($direct_payment_list)) {
            array_push($this->openAPINullablesSetToNull, 'direct_payment_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('direct_payment_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['direct_payment_list'] = $direct_payment_list;

        return $this;
    }

    /**
     * Gets posted_date.
     */
    public function getPostedDate(): ?\DateTime
    {
        return $this->container['posted_date'];
    }

    /**
     * Sets posted_date.
     *
     * @param null|\DateTime $posted_date fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate)
     */
    public function setPostedDate(?\DateTime $posted_date): self
    {
        if (is_null($posted_date)) {
            array_push($this->openAPINullablesSetToNull, 'posted_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('posted_date', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['posted_date'] = $posted_date;

        return $this;
    }

    /**
     * Gets shipment_item_list.
     */
    public function getShipmentItemList(): ?array
    {
        return $this->container['shipment_item_list'];
    }

    /**
     * Sets shipment_item_list.
     *
     * @param null|array $shipment_item_list a list of shipment items
     */
    public function setShipmentItemList(?array $shipment_item_list): self
    {
        if (is_null($shipment_item_list)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_item_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_item_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_item_list'] = $shipment_item_list;

        return $this;
    }

    /**
     * Gets shipment_item_adjustment_list.
     */
    public function getShipmentItemAdjustmentList(): ?array
    {
        return $this->container['shipment_item_adjustment_list'];
    }

    /**
     * Sets shipment_item_adjustment_list.
     *
     * @param null|array $shipment_item_adjustment_list a list of shipment items
     */
    public function setShipmentItemAdjustmentList(?array $shipment_item_adjustment_list): self
    {
        if (is_null($shipment_item_adjustment_list)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_item_adjustment_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_item_adjustment_list', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_item_adjustment_list'] = $shipment_item_adjustment_list;

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
