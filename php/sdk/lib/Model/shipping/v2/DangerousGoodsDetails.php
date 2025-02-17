<?php
/**
 * DangerousGoodsDetails
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
 * DangerousGoodsDetails Class Doc Comment
 *
 * @category Class
 * @description Details related to any dangerous goods/items that are being shipped.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class DangerousGoodsDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'DangerousGoodsDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'united_nations_regulatory_id' => 'string',
             'transportation_regulatory_class' => 'string',
             'packing_group' => 'string',
             'packing_instruction' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'united_nations_regulatory_id' => null,
            'transportation_regulatory_class' => null,
            'packing_group' => null,
            'packing_instruction' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'united_nations_regulatory_id' => true,
        'transportation_regulatory_class' => true,
        'packing_group' => true,
        'packing_instruction' => true
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
        'united_nations_regulatory_id' => 'unitedNationsRegulatoryId',
                'transportation_regulatory_class' => 'transportationRegulatoryClass',
                'packing_group' => 'packingGroup',
                'packing_instruction' => 'packingInstruction'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'united_nations_regulatory_id' => 'setUnitedNationsRegulatoryId',
        'transportation_regulatory_class' => 'setTransportationRegulatoryClass',
        'packing_group' => 'setPackingGroup',
        'packing_instruction' => 'setPackingInstruction'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'united_nations_regulatory_id' => 'getUnitedNationsRegulatoryId',
        'transportation_regulatory_class' => 'getTransportationRegulatoryClass',
        'packing_group' => 'getPackingGroup',
        'packing_instruction' => 'getPackingInstruction'
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

    public const PACKING_GROUP_I = 'I';
    public const PACKING_GROUP_II = 'II';
    public const PACKING_GROUP_III = 'III';
    public const PACKING_INSTRUCTION_PI965_SECTION_IA = 'PI965_SECTION_IA';
    public const PACKING_INSTRUCTION_PI965_SECTION_IB = 'PI965_SECTION_IB';
    public const PACKING_INSTRUCTION_PI965_SECTION_II = 'PI965_SECTION_II';
    public const PACKING_INSTRUCTION_PI966_SECTION_I = 'PI966_SECTION_I';
    public const PACKING_INSTRUCTION_PI966_SECTION_II = 'PI966_SECTION_II';
    public const PACKING_INSTRUCTION_PI967_SECTION_I = 'PI967_SECTION_I';
    public const PACKING_INSTRUCTION_PI967_SECTION_II = 'PI967_SECTION_II';
    public const PACKING_INSTRUCTION_PI968_SECTION_IA = 'PI968_SECTION_IA';
    public const PACKING_INSTRUCTION_PI968_SECTION_IB = 'PI968_SECTION_IB';
    public const PACKING_INSTRUCTION_PI969_SECTION_I = 'PI969_SECTION_I';
    public const PACKING_INSTRUCTION_PI969_SECTION_II = 'PI969_SECTION_II';
    public const PACKING_INSTRUCTION_PI970_SECTION_I = 'PI970_SECTION_I';
    public const PACKING_INSTRUCTION_PI970_SECTION_II = 'PI970_SECTION_II';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPackingGroupAllowableValues(): array
    {
        return [
            self::PACKING_GROUP_I,
            self::PACKING_GROUP_II,
            self::PACKING_GROUP_III,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPackingInstructionAllowableValues(): array
    {
        return [
            self::PACKING_INSTRUCTION_PI965_SECTION_IA,
            self::PACKING_INSTRUCTION_PI965_SECTION_IB,
            self::PACKING_INSTRUCTION_PI965_SECTION_II,
            self::PACKING_INSTRUCTION_PI966_SECTION_I,
            self::PACKING_INSTRUCTION_PI966_SECTION_II,
            self::PACKING_INSTRUCTION_PI967_SECTION_I,
            self::PACKING_INSTRUCTION_PI967_SECTION_II,
            self::PACKING_INSTRUCTION_PI968_SECTION_IA,
            self::PACKING_INSTRUCTION_PI968_SECTION_IB,
            self::PACKING_INSTRUCTION_PI969_SECTION_I,
            self::PACKING_INSTRUCTION_PI969_SECTION_II,
            self::PACKING_INSTRUCTION_PI970_SECTION_I,
            self::PACKING_INSTRUCTION_PI970_SECTION_II,
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
        $this->setIfExists('united_nations_regulatory_id', $data ?? [], null);
        $this->setIfExists('transportation_regulatory_class', $data ?? [], null);
        $this->setIfExists('packing_group', $data ?? [], null);
        $this->setIfExists('packing_instruction', $data ?? [], null);
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

        if (!is_null($this->container['united_nations_regulatory_id']) && !preg_match("/^[0-9]{4}$/", $this->container['united_nations_regulatory_id'])) {
            $invalidProperties[] = "invalid value for 'united_nations_regulatory_id', must be conform to the pattern /^[0-9]{4}$/.";
        }

        if (!is_null($this->container['transportation_regulatory_class']) && !preg_match("/^[1-9](\\.[1-9])?$/", $this->container['transportation_regulatory_class'])) {
            $invalidProperties[] = "invalid value for 'transportation_regulatory_class', must be conform to the pattern /^[1-9](\\.[1-9])?$/.";
        }

        $allowedValues = $this->getPackingGroupAllowableValues();
        if (!is_null($this->container['packing_group']) && !in_array($this->container['packing_group'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'packing_group', must be one of '%s'",
                $this->container['packing_group'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getPackingInstructionAllowableValues();
        if (!is_null($this->container['packing_instruction']) && !in_array($this->container['packing_instruction'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'packing_instruction', must be one of '%s'",
                $this->container['packing_instruction'],
                implode("', '", $allowedValues)
            );
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
     * Gets united_nations_regulatory_id
     *
     * @return string|null
     */
    public function getUnitedNationsRegulatoryId(): ?string
    {
        return $this->container['united_nations_regulatory_id'];
    }

    /**
     * Sets united_nations_regulatory_id
     *
     * @param string|null $united_nations_regulatory_id The specific UNID of the item being shipped.
     *
     * @return self
     */
    public function setUnitedNationsRegulatoryId(?string $united_nations_regulatory_id): self
    {
        if (is_null($united_nations_regulatory_id)) {
            array_push($this->openAPINullablesSetToNull, 'united_nations_regulatory_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('united_nations_regulatory_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($united_nations_regulatory_id) && (!preg_match("/^[0-9]{4}$/", ObjectSerializer::toString($united_nations_regulatory_id)))) {
            throw new \InvalidArgumentException("invalid value for \$united_nations_regulatory_id when calling DangerousGoodsDetails., must conform to the pattern /^[0-9]{4}$/.");
        }

        $this->container['united_nations_regulatory_id'] = $united_nations_regulatory_id;

        return $this;
    }

    /**
     * Gets transportation_regulatory_class
     *
     * @return string|null
     */
    public function getTransportationRegulatoryClass(): ?string
    {
        return $this->container['transportation_regulatory_class'];
    }

    /**
     * Sets transportation_regulatory_class
     *
     * @param string|null $transportation_regulatory_class The specific regulatory class  of the item being shipped.
     *
     * @return self
     */
    public function setTransportationRegulatoryClass(?string $transportation_regulatory_class): self
    {
        if (is_null($transportation_regulatory_class)) {
            array_push($this->openAPINullablesSetToNull, 'transportation_regulatory_class');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('transportation_regulatory_class', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($transportation_regulatory_class) && (!preg_match("/^[1-9](\\.[1-9])?$/", ObjectSerializer::toString($transportation_regulatory_class)))) {
            throw new \InvalidArgumentException("invalid value for \$transportation_regulatory_class when calling DangerousGoodsDetails., must conform to the pattern /^[1-9](\\.[1-9])?$/.");
        }

        $this->container['transportation_regulatory_class'] = $transportation_regulatory_class;

        return $this;
    }

    /**
     * Gets packing_group
     *
     * @return string|null
     */
    public function getPackingGroup(): ?string
    {
        return $this->container['packing_group'];
    }

    /**
     * Sets packing_group
     *
     * @param string|null $packing_group The specific packaging group of the item being shipped.
     *
     * @return self
     */
    public function setPackingGroup(?string $packing_group): self
    {
        if (is_null($packing_group)) {
            array_push($this->openAPINullablesSetToNull, 'packing_group');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('packing_group', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getPackingGroupAllowableValues();
        if (!is_null($packing_group) && !in_array($packing_group, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'packing_group', must be one of '%s'",
                    $packing_group,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['packing_group'] = $packing_group;

        return $this;
    }

    /**
     * Gets packing_instruction
     *
     * @return string|null
     */
    public function getPackingInstruction(): ?string
    {
        return $this->container['packing_instruction'];
    }

    /**
     * Sets packing_instruction
     *
     * @param string|null $packing_instruction The specific packing instruction of the item being shipped.
     *
     * @return self
     */
    public function setPackingInstruction(?string $packing_instruction): self
    {
        if (is_null($packing_instruction)) {
            array_push($this->openAPINullablesSetToNull, 'packing_instruction');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('packing_instruction', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getPackingInstructionAllowableValues();
        if (!is_null($packing_instruction) && !in_array($packing_instruction, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'packing_instruction', must be one of '%s'",
                    $packing_instruction,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['packing_instruction'] = $packing_instruction;

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


