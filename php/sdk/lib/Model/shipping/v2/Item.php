<?php
/**
 * Item
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Amazon Shipping API
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

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * Item Class Doc Comment
 *
 * @category Class
 * @description An item in a package.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Item implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Item';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'item_value' => '\SpApi\Model\shipping\v2\Currency',
             'description' => 'string',
             'item_identifier' => 'string',
             'quantity' => 'int',
             'weight' => '\SpApi\Model\shipping\v2\Weight',
             'liquid_volume' => '\SpApi\Model\shipping\v2\LiquidVolume',
             'is_hazmat' => 'bool',
             'dangerous_goods_details' => '\SpApi\Model\shipping\v2\DangerousGoodsDetails',
             'product_type' => 'string',
             'invoice_details' => '\SpApi\Model\shipping\v2\InvoiceDetails',
             'serial_numbers' => 'string[]',
             'direct_fulfillment_item_identifiers' => '\SpApi\Model\shipping\v2\DirectFulfillmentItemIdentifiers'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'item_value' => null,
            'description' => null,
            'item_identifier' => null,
            'quantity' => null,
            'weight' => null,
            'liquid_volume' => null,
            'is_hazmat' => null,
            'dangerous_goods_details' => null,
            'product_type' => null,
            'invoice_details' => null,
            'serial_numbers' => null,
            'direct_fulfillment_item_identifiers' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'item_value' => true,
        'description' => true,
        'item_identifier' => true,
        'quantity' => false,
        'weight' => true,
        'liquid_volume' => true,
        'is_hazmat' => true,
        'dangerous_goods_details' => true,
        'product_type' => true,
        'invoice_details' => true,
        'serial_numbers' => true,
        'direct_fulfillment_item_identifiers' => true
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
        'item_value' => 'itemValue',
                'description' => 'description',
                'item_identifier' => 'itemIdentifier',
                'quantity' => 'quantity',
                'weight' => 'weight',
                'liquid_volume' => 'liquidVolume',
                'is_hazmat' => 'isHazmat',
                'dangerous_goods_details' => 'dangerousGoodsDetails',
                'product_type' => 'productType',
                'invoice_details' => 'invoiceDetails',
                'serial_numbers' => 'serialNumbers',
                'direct_fulfillment_item_identifiers' => 'directFulfillmentItemIdentifiers'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'item_value' => 'setItemValue',
        'description' => 'setDescription',
        'item_identifier' => 'setItemIdentifier',
        'quantity' => 'setQuantity',
        'weight' => 'setWeight',
        'liquid_volume' => 'setLiquidVolume',
        'is_hazmat' => 'setIsHazmat',
        'dangerous_goods_details' => 'setDangerousGoodsDetails',
        'product_type' => 'setProductType',
        'invoice_details' => 'setInvoiceDetails',
        'serial_numbers' => 'setSerialNumbers',
        'direct_fulfillment_item_identifiers' => 'setDirectFulfillmentItemIdentifiers'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'item_value' => 'getItemValue',
        'description' => 'getDescription',
        'item_identifier' => 'getItemIdentifier',
        'quantity' => 'getQuantity',
        'weight' => 'getWeight',
        'liquid_volume' => 'getLiquidVolume',
        'is_hazmat' => 'getIsHazmat',
        'dangerous_goods_details' => 'getDangerousGoodsDetails',
        'product_type' => 'getProductType',
        'invoice_details' => 'getInvoiceDetails',
        'serial_numbers' => 'getSerialNumbers',
        'direct_fulfillment_item_identifiers' => 'getDirectFulfillmentItemIdentifiers'
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
        $this->setIfExists('item_value', $data ?? [], null);
        $this->setIfExists('description', $data ?? [], null);
        $this->setIfExists('item_identifier', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
        $this->setIfExists('weight', $data ?? [], null);
        $this->setIfExists('liquid_volume', $data ?? [], null);
        $this->setIfExists('is_hazmat', $data ?? [], null);
        $this->setIfExists('dangerous_goods_details', $data ?? [], null);
        $this->setIfExists('product_type', $data ?? [], null);
        $this->setIfExists('invoice_details', $data ?? [], null);
        $this->setIfExists('serial_numbers', $data ?? [], null);
        $this->setIfExists('direct_fulfillment_item_identifiers', $data ?? [], null);
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

        if ($this->container['quantity'] === null) {
            $invalidProperties[] = "'quantity' can't be null";
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
     * Gets item_value
     *
     * @return \SpApi\Model\shipping\v2\Currency|null
     */
    public function getItemValue(): ?\SpApi\Model\shipping\v2\Currency
    {
        return $this->container['item_value'];
    }

    /**
     * Sets item_value
     *
     * @param \SpApi\Model\shipping\v2\Currency|null $item_value item_value
     *
     * @return self
     */
    public function setItemValue(?\SpApi\Model\shipping\v2\Currency $item_value): self
    {
        if (is_null($item_value)) {
            array_push($this->openAPINullablesSetToNull, 'item_value');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('item_value', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['item_value'] = $item_value;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string|null
     */
    public function getDescription(): ?string
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string|null $description The product description of the item.
     *
     * @return self
     */
    public function setDescription(?string $description): self
    {
        if (is_null($description)) {
            array_push($this->openAPINullablesSetToNull, 'description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('description', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets item_identifier
     *
     * @return string|null
     */
    public function getItemIdentifier(): ?string
    {
        return $this->container['item_identifier'];
    }

    /**
     * Sets item_identifier
     *
     * @param string|null $item_identifier A unique identifier for an item provided by the client.
     *
     * @return self
     */
    public function setItemIdentifier(?string $item_identifier): self
    {
        if (is_null($item_identifier)) {
            array_push($this->openAPINullablesSetToNull, 'item_identifier');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('item_identifier', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['item_identifier'] = $item_identifier;

        return $this;
    }

    /**
     * Gets quantity
     *
     * @return int
     */
    public function getQuantity(): int
    {
        return $this->container['quantity'];
    }

    /**
     * Sets quantity
     *
     * @param int $quantity The number of units. This value is required.
     *
     * @return self
     */
    public function setQuantity(int $quantity): self
    {
        if (is_null($quantity)) {
            throw new \InvalidArgumentException('non-nullable quantity cannot be null');
        }
        $this->container['quantity'] = $quantity;

        return $this;
    }

    /**
     * Gets weight
     *
     * @return \SpApi\Model\shipping\v2\Weight|null
     */
    public function getWeight(): ?\SpApi\Model\shipping\v2\Weight
    {
        return $this->container['weight'];
    }

    /**
     * Sets weight
     *
     * @param \SpApi\Model\shipping\v2\Weight|null $weight weight
     *
     * @return self
     */
    public function setWeight(?\SpApi\Model\shipping\v2\Weight $weight): self
    {
        if (is_null($weight)) {
            array_push($this->openAPINullablesSetToNull, 'weight');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('weight', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['weight'] = $weight;

        return $this;
    }

    /**
     * Gets liquid_volume
     *
     * @return \SpApi\Model\shipping\v2\LiquidVolume|null
     */
    public function getLiquidVolume(): ?\SpApi\Model\shipping\v2\LiquidVolume
    {
        return $this->container['liquid_volume'];
    }

    /**
     * Sets liquid_volume
     *
     * @param \SpApi\Model\shipping\v2\LiquidVolume|null $liquid_volume liquid_volume
     *
     * @return self
     */
    public function setLiquidVolume(?\SpApi\Model\shipping\v2\LiquidVolume $liquid_volume): self
    {
        if (is_null($liquid_volume)) {
            array_push($this->openAPINullablesSetToNull, 'liquid_volume');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('liquid_volume', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['liquid_volume'] = $liquid_volume;

        return $this;
    }

    /**
     * Gets is_hazmat
     *
     * @return bool|null
     */
    public function getIsHazmat(): ?bool
    {
        return $this->container['is_hazmat'];
    }

    /**
     * Sets is_hazmat
     *
     * @param bool|null $is_hazmat When true, the item qualifies as hazardous materials (hazmat). Defaults to false.
     *
     * @return self
     */
    public function setIsHazmat(?bool $is_hazmat): self
    {
        if (is_null($is_hazmat)) {
            array_push($this->openAPINullablesSetToNull, 'is_hazmat');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('is_hazmat', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['is_hazmat'] = $is_hazmat;

        return $this;
    }

    /**
     * Gets dangerous_goods_details
     *
     * @return \SpApi\Model\shipping\v2\DangerousGoodsDetails|null
     */
    public function getDangerousGoodsDetails(): ?\SpApi\Model\shipping\v2\DangerousGoodsDetails
    {
        return $this->container['dangerous_goods_details'];
    }

    /**
     * Sets dangerous_goods_details
     *
     * @param \SpApi\Model\shipping\v2\DangerousGoodsDetails|null $dangerous_goods_details dangerous_goods_details
     *
     * @return self
     */
    public function setDangerousGoodsDetails(?\SpApi\Model\shipping\v2\DangerousGoodsDetails $dangerous_goods_details): self
    {
        if (is_null($dangerous_goods_details)) {
            array_push($this->openAPINullablesSetToNull, 'dangerous_goods_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('dangerous_goods_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['dangerous_goods_details'] = $dangerous_goods_details;

        return $this;
    }

    /**
     * Gets product_type
     *
     * @return string|null
     */
    public function getProductType(): ?string
    {
        return $this->container['product_type'];
    }

    /**
     * Sets product_type
     *
     * @param string|null $product_type The product type of the item.
     *
     * @return self
     */
    public function setProductType(?string $product_type): self
    {
        if (is_null($product_type)) {
            array_push($this->openAPINullablesSetToNull, 'product_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('product_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['product_type'] = $product_type;

        return $this;
    }

    /**
     * Gets invoice_details
     *
     * @return \SpApi\Model\shipping\v2\InvoiceDetails|null
     */
    public function getInvoiceDetails(): ?\SpApi\Model\shipping\v2\InvoiceDetails
    {
        return $this->container['invoice_details'];
    }

    /**
     * Sets invoice_details
     *
     * @param \SpApi\Model\shipping\v2\InvoiceDetails|null $invoice_details invoice_details
     *
     * @return self
     */
    public function setInvoiceDetails(?\SpApi\Model\shipping\v2\InvoiceDetails $invoice_details): self
    {
        if (is_null($invoice_details)) {
            array_push($this->openAPINullablesSetToNull, 'invoice_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('invoice_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['invoice_details'] = $invoice_details;

        return $this;
    }

    /**
     * Gets serial_numbers
     *
     * @return array|null
     */
    public function getSerialNumbers(): ?array
    {
        return $this->container['serial_numbers'];
    }

    /**
     * Sets serial_numbers
     *
     * @param array|null $serial_numbers A list of unique serial numbers in an Amazon package that can be used to guarantee non-fraudulent items. The number of serial numbers in the list must be less than or equal to the quantity of items being shipped. Only applicable when channel source is Amazon.
     *
     * @return self
     */
    public function setSerialNumbers(?array $serial_numbers): self
    {
        if (is_null($serial_numbers)) {
            array_push($this->openAPINullablesSetToNull, 'serial_numbers');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('serial_numbers', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['serial_numbers'] = $serial_numbers;

        return $this;
    }

    /**
     * Gets direct_fulfillment_item_identifiers
     *
     * @return \SpApi\Model\shipping\v2\DirectFulfillmentItemIdentifiers|null
     */
    public function getDirectFulfillmentItemIdentifiers(): ?\SpApi\Model\shipping\v2\DirectFulfillmentItemIdentifiers
    {
        return $this->container['direct_fulfillment_item_identifiers'];
    }

    /**
     * Sets direct_fulfillment_item_identifiers
     *
     * @param \SpApi\Model\shipping\v2\DirectFulfillmentItemIdentifiers|null $direct_fulfillment_item_identifiers direct_fulfillment_item_identifiers
     *
     * @return self
     */
    public function setDirectFulfillmentItemIdentifiers(?\SpApi\Model\shipping\v2\DirectFulfillmentItemIdentifiers $direct_fulfillment_item_identifiers): self
    {
        if (is_null($direct_fulfillment_item_identifiers)) {
            array_push($this->openAPINullablesSetToNull, 'direct_fulfillment_item_identifiers');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('direct_fulfillment_item_identifiers', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['direct_fulfillment_item_identifiers'] = $direct_fulfillment_item_identifiers;

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


