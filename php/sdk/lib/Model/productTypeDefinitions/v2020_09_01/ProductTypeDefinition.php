<?php
/**
 * ProductTypeDefinition
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Product Type Definitions
 *
 * The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).  For more information, see the [Product Type Definitions API Use Case Guide](doc:product-type-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2020-09-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\productTypeDefinitions\v2020_09_01;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * ProductTypeDefinition Class Doc Comment
 *
 * @category Class
 * @description A product type definition represents the attributes and data requirements for a product type in the Amazon catalog. Product type definitions are used interchangeably between the Selling Partner API for Listings Items, Selling Partner API for Catalog Items, and JSON-based listings feeds in the Selling Partner API for Feeds.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ProductTypeDefinition implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ProductTypeDefinition';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'meta_schema' => '\SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink',
             'schema' => '\SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink',
             'requirements' => 'string',
             'requirements_enforced' => 'string',
             'property_groups' => 'array<string,\SpApi\Model\productTypeDefinitions\v2020_09_01\PropertyGroup>',
             'locale' => 'string',
             'marketplace_ids' => 'string[]',
             'product_type' => 'string',
             'display_name' => 'string',
             'product_type_version' => '\SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'meta_schema' => null,
            'schema' => null,
            'requirements' => null,
            'requirements_enforced' => null,
            'property_groups' => null,
            'locale' => null,
            'marketplace_ids' => null,
            'product_type' => null,
            'display_name' => null,
            'product_type_version' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'meta_schema' => true,
        'schema' => false,
        'requirements' => false,
        'requirements_enforced' => false,
        'property_groups' => false,
        'locale' => false,
        'marketplace_ids' => false,
        'product_type' => false,
        'display_name' => false,
        'product_type_version' => false
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
        'meta_schema' => 'metaSchema',
                'schema' => 'schema',
                'requirements' => 'requirements',
                'requirements_enforced' => 'requirementsEnforced',
                'property_groups' => 'propertyGroups',
                'locale' => 'locale',
                'marketplace_ids' => 'marketplaceIds',
                'product_type' => 'productType',
                'display_name' => 'displayName',
                'product_type_version' => 'productTypeVersion'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'meta_schema' => 'setMetaSchema',
        'schema' => 'setSchema',
        'requirements' => 'setRequirements',
        'requirements_enforced' => 'setRequirementsEnforced',
        'property_groups' => 'setPropertyGroups',
        'locale' => 'setLocale',
        'marketplace_ids' => 'setMarketplaceIds',
        'product_type' => 'setProductType',
        'display_name' => 'setDisplayName',
        'product_type_version' => 'setProductTypeVersion'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'meta_schema' => 'getMetaSchema',
        'schema' => 'getSchema',
        'requirements' => 'getRequirements',
        'requirements_enforced' => 'getRequirementsEnforced',
        'property_groups' => 'getPropertyGroups',
        'locale' => 'getLocale',
        'marketplace_ids' => 'getMarketplaceIds',
        'product_type' => 'getProductType',
        'display_name' => 'getDisplayName',
        'product_type_version' => 'getProductTypeVersion'
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

    public const REQUIREMENTS_LISTING = 'LISTING';
    public const REQUIREMENTS_LISTING_PRODUCT_ONLY = 'LISTING_PRODUCT_ONLY';
    public const REQUIREMENTS_LISTING_OFFER_ONLY = 'LISTING_OFFER_ONLY';
    public const REQUIREMENTS_ENFORCED_ENFORCED = 'ENFORCED';
    public const REQUIREMENTS_ENFORCED_NOT_ENFORCED = 'NOT_ENFORCED';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getRequirementsAllowableValues(): array
    {
        return [
            self::REQUIREMENTS_LISTING,
            self::REQUIREMENTS_LISTING_PRODUCT_ONLY,
            self::REQUIREMENTS_LISTING_OFFER_ONLY,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getRequirementsEnforcedAllowableValues(): array
    {
        return [
            self::REQUIREMENTS_ENFORCED_ENFORCED,
            self::REQUIREMENTS_ENFORCED_NOT_ENFORCED,
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
        $this->setIfExists('meta_schema', $data ?? [], null);
        $this->setIfExists('schema', $data ?? [], null);
        $this->setIfExists('requirements', $data ?? [], null);
        $this->setIfExists('requirements_enforced', $data ?? [], null);
        $this->setIfExists('property_groups', $data ?? [], null);
        $this->setIfExists('locale', $data ?? [], null);
        $this->setIfExists('marketplace_ids', $data ?? [], null);
        $this->setIfExists('product_type', $data ?? [], null);
        $this->setIfExists('display_name', $data ?? [], null);
        $this->setIfExists('product_type_version', $data ?? [], null);
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

        if ($this->container['schema'] === null) {
            $invalidProperties[] = "'schema' can't be null";
        }
        if ($this->container['requirements'] === null) {
            $invalidProperties[] = "'requirements' can't be null";
        }
        $allowedValues = $this->getRequirementsAllowableValues();
        if (!is_null($this->container['requirements']) && !in_array($this->container['requirements'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'requirements', must be one of '%s'",
                $this->container['requirements'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['requirements_enforced'] === null) {
            $invalidProperties[] = "'requirements_enforced' can't be null";
        }
        $allowedValues = $this->getRequirementsEnforcedAllowableValues();
        if (!is_null($this->container['requirements_enforced']) && !in_array($this->container['requirements_enforced'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'requirements_enforced', must be one of '%s'",
                $this->container['requirements_enforced'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['property_groups'] === null) {
            $invalidProperties[] = "'property_groups' can't be null";
        }
        if ($this->container['locale'] === null) {
            $invalidProperties[] = "'locale' can't be null";
        }
        if ($this->container['marketplace_ids'] === null) {
            $invalidProperties[] = "'marketplace_ids' can't be null";
        }
        if ($this->container['product_type'] === null) {
            $invalidProperties[] = "'product_type' can't be null";
        }
        if ($this->container['display_name'] === null) {
            $invalidProperties[] = "'display_name' can't be null";
        }
        if ($this->container['product_type_version'] === null) {
            $invalidProperties[] = "'product_type_version' can't be null";
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
     * Gets meta_schema
     *
     * @return \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink|null
     */
    public function getMetaSchema(): ?\SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink
    {
        return $this->container['meta_schema'];
    }

    /**
     * Sets meta_schema
     *
     * @param \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink|null $meta_schema meta_schema
     *
     * @return self
     */
    public function setMetaSchema(?\SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink $meta_schema): self
    {
        if (is_null($meta_schema)) {
            array_push($this->openAPINullablesSetToNull, 'meta_schema');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('meta_schema', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['meta_schema'] = $meta_schema;

        return $this;
    }

    /**
     * Gets schema
     *
     * @return \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink
     */
    public function getSchema(): \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink
    {
        return $this->container['schema'];
    }

    /**
     * Sets schema
     *
     * @param \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink $schema schema
     *
     * @return self
     */
    public function setSchema(\SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink $schema): self
    {
        if (is_null($schema)) {
            throw new \InvalidArgumentException('non-nullable schema cannot be null');
        }
        $this->container['schema'] = $schema;

        return $this;
    }

    /**
     * Gets requirements
     *
     * @return string
     */
    public function getRequirements(): string
    {
        return $this->container['requirements'];
    }

    /**
     * Sets requirements
     *
     * @param string $requirements Name of the requirements set represented in this product type definition.
     *
     * @return self
     */
    public function setRequirements(string $requirements): self
    {
        if (is_null($requirements)) {
            throw new \InvalidArgumentException('non-nullable requirements cannot be null');
        }
        $allowedValues = $this->getRequirementsAllowableValues();
        if (!in_array($requirements, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'requirements', must be one of '%s'",
                    $requirements,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['requirements'] = $requirements;

        return $this;
    }

    /**
     * Gets requirements_enforced
     *
     * @return string
     */
    public function getRequirementsEnforced(): string
    {
        return $this->container['requirements_enforced'];
    }

    /**
     * Sets requirements_enforced
     *
     * @param string $requirements_enforced Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates).
     *
     * @return self
     */
    public function setRequirementsEnforced(string $requirements_enforced): self
    {
        if (is_null($requirements_enforced)) {
            throw new \InvalidArgumentException('non-nullable requirements_enforced cannot be null');
        }
        $allowedValues = $this->getRequirementsEnforcedAllowableValues();
        if (!in_array($requirements_enforced, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'requirements_enforced', must be one of '%s'",
                    $requirements_enforced,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['requirements_enforced'] = $requirements_enforced;

        return $this;
    }

    /**
     * Gets property_groups
     *
     * @return array<string,\SpApi\Model\productTypeDefinitions\v2020_09_01\PropertyGroup>
     */
    public function getPropertyGroups(): array
    {
        return $this->container['property_groups'];
    }

    /**
     * Sets property_groups
     *
     * @param array<string,\SpApi\Model\productTypeDefinitions\v2020_09_01\PropertyGroup> $property_groups Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes.
     *
     * @return self
     */
    public function setPropertyGroups(array $property_groups): self
    {
        if (is_null($property_groups)) {
            throw new \InvalidArgumentException('non-nullable property_groups cannot be null');
        }
        $this->container['property_groups'] = $property_groups;

        return $this;
    }

    /**
     * Gets locale
     *
     * @return string
     */
    public function getLocale(): string
    {
        return $this->container['locale'];
    }

    /**
     * Sets locale
     *
     * @param string $locale Locale of the display elements contained in the product type definition.
     *
     * @return self
     */
    public function setLocale(string $locale): self
    {
        if (is_null($locale)) {
            throw new \InvalidArgumentException('non-nullable locale cannot be null');
        }
        $this->container['locale'] = $locale;

        return $this;
    }

    /**
     * Gets marketplace_ids
     *
     * @return array
     */
    public function getMarketplaceIds(): array
    {
        return $this->container['marketplace_ids'];
    }

    /**
     * Sets marketplace_ids
     *
     * @param array $marketplace_ids Amazon marketplace identifiers for which the product type definition is applicable.
     *
     * @return self
     */
    public function setMarketplaceIds(array $marketplace_ids): self
    {
        if (is_null($marketplace_ids)) {
            throw new \InvalidArgumentException('non-nullable marketplace_ids cannot be null');
        }
        $this->container['marketplace_ids'] = $marketplace_ids;

        return $this;
    }

    /**
     * Gets product_type
     *
     * @return string
     */
    public function getProductType(): string
    {
        return $this->container['product_type'];
    }

    /**
     * Sets product_type
     *
     * @param string $product_type The name of the Amazon product type that this product type definition applies to.
     *
     * @return self
     */
    public function setProductType(string $product_type): self
    {
        if (is_null($product_type)) {
            throw new \InvalidArgumentException('non-nullable product_type cannot be null');
        }
        $this->container['product_type'] = $product_type;

        return $this;
    }

    /**
     * Gets display_name
     *
     * @return string
     */
    public function getDisplayName(): string
    {
        return $this->container['display_name'];
    }

    /**
     * Sets display_name
     *
     * @param string $display_name Human-readable and localized description of the Amazon product type.
     *
     * @return self
     */
    public function setDisplayName(string $display_name): self
    {
        if (is_null($display_name)) {
            throw new \InvalidArgumentException('non-nullable display_name cannot be null');
        }
        $this->container['display_name'] = $display_name;

        return $this;
    }

    /**
     * Gets product_type_version
     *
     * @return \SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion
     */
    public function getProductTypeVersion(): \SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion
    {
        return $this->container['product_type_version'];
    }

    /**
     * Sets product_type_version
     *
     * @param \SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion $product_type_version product_type_version
     *
     * @return self
     */
    public function setProductTypeVersion(\SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion $product_type_version): self
    {
        if (is_null($product_type_version)) {
            throw new \InvalidArgumentException('non-nullable product_type_version cannot be null');
        }
        $this->container['product_type_version'] = $product_type_version;

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


