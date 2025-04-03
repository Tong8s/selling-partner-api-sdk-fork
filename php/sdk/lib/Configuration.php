<?php

/**
 * Configuration
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API.
 *
 * The Selling Partner API enables developers to programmatically retrieve information from various domains.
 * These APIs provide tools for building fast, flexible, and custom applications,
 * as well as demand-based decision support systems.
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

namespace SpApi;

use GuzzleHttp\Psr7\Request;
use SpApi\AuthAndAuth\LWAAccessTokenCache;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use SpApi\AuthAndAuth\LWAAuthorizationSigner;

/**
 * Configuration Class Doc Comment
 * PHP version 8.3.
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class Configuration
{
    public const BOOLEAN_FORMAT_INT = 'int';
    public const BOOLEAN_FORMAT_STRING = 'string';

    /**
     * Required inputs for config array.
     *
     * @var array
     */
    private const REQUIRED_INPUTS = ['clientId', 'clientSecret', 'endpoint', 'region'];

    /**
     * Boolean format for query string.
     */
    protected string $booleanFormatForQueryString = self::BOOLEAN_FORMAT_INT;

    /**
     * The host.
     */
    protected string $host = 'https://sellingpartnerapi-na.amazon.com';

    /**
     * User agent of the HTTP request, set to "selling-partner-api-sdk/{version}/PHP" by default.
     */
    protected string $userAgent = 'amazon-selling-partner-api-sdk/1.0.0/PHP';

    /**
     * Debug switch (default set to false).
     */
    protected bool $debug = false;

    /**
     * Debug file location (log to STDOUT by default).
     */
    protected string $debugFile = 'php://output';

    /**
     * Debug file location (log to STDOUT by default).
     */
    protected string $tempFolderPath;

    private static Configuration $defaultConfiguration;

    private LWAAuthorizationSigner $lwaAuthSigner;

    /**
     * Constructor.
     */
    public function __construct(
        array $config = [],
        ?LWAAuthorizationCredentials $lwaAuthorizationCredentials = null,
        bool $disableAccessTokenCache = false,
        ?LWAAccessTokenCache $lwaTokenCache = null
    ) {
        $this->tempFolderPath = sys_get_temp_dir();
        if ($lwaAuthorizationCredentials) {
            if ($disableAccessTokenCache) {
                $this->lwaAuthSigner = new LWAAuthorizationSigner($lwaAuthorizationCredentials);
            } else {
                if (!$lwaTokenCache) {
                    $lwaTokenCache = new LWAAccessTokenCache();
                }
                $this->lwaAuthSigner = new LWAAuthorizationSigner($lwaAuthorizationCredentials, $lwaTokenCache);
            }
        } elseif (!empty($config)) {
            $missing_variables = [];
            foreach (static::REQUIRED_INPUTS as $key) {
                if (!isset($config[$key])) {
                    $missing_variables[] = $key;
                }
            }
            if (!empty($missing_variables)) {
                throw new \InvalidArgumentException(
                    'The following variables are missing: '.implode(' ', $missing_variables)
                );
            }

            $lwaCredentials = new LWAAuthorizationCredentials([
                'clientId' => $config['clientId'],
                'clientSecret' => $config['clientSecret'],
                'endpoint' => $config['endpoint'],
                'refreshToken' => $config['refreshToken'] ?? null,
                'scopes' => $config['scopes'] ?? null,
            ]);

            $lwaTokenCache = $config['lwaTokenCache'] ?? null;

            if ($disableAccessTokenCache) {
                $this->lwaAuthSigner = new LWAAuthorizationSigner($lwaCredentials);
            } else {
                if (!$lwaTokenCache) {
                    $lwaTokenCache = new LWAAccessTokenCache();
                }
                $this->lwaAuthSigner = new LWAAuthorizationSigner($lwaCredentials, $lwaTokenCache);
            }
        } else {
            throw new \InvalidArgumentException(
                'Configuration must have valid config array or credential objects'
            );
        }
    }

    public function enableCache(?LWAAccessTokenCache $lwaAccessTokenCache = null): void
    {
        $this->lwaAuthSigner->getLwaClient()->setLWAAccessTokenCache(
            $lwaAccessTokenCache ?? new LWAAccessTokenCache()
        );
    }

    public function disableCache(): void
    {
        $this->lwaAuthSigner->getLwaClient()->setLWAAccessTokenCache(null);
    }

    public function sign(Request $request): Request
    {
        return $this->lwaAuthSigner->sign($request);
    }

    /**
     * Sets boolean format for query string.
     *
     * @param string $booleanFormat Boolean format for query string
     *
     * @return $this
     */
    public function setBooleanFormatForQueryString(string $booleanFormat): Configuration
    {
        $this->booleanFormatForQueryString = $booleanFormat;

        return $this;
    }

    /**
     * Gets boolean format for query string.
     *
     * @return string Boolean format for query string
     */
    public function getBooleanFormatForQueryString(): string
    {
        return $this->booleanFormatForQueryString;
    }

    /**
     * Sets the host.
     *
     * @param string $host Host
     *
     * @return $this
     */
    public function setHost(string $host): Configuration
    {
        $this->host = $host;

        return $this;
    }

    /**
     * Gets the host.
     *
     * @return string Host
     */
    public function getHost(): string
    {
        return $this->host;
    }

    /**
     * Sets the user agent of the api client.
     *
     * @param string $userAgent the user agent of the api client
     *
     * @return $this
     *
     * @throws \InvalidArgumentException
     */
    public function setUserAgent(string $userAgent): Configuration
    {
        if (!is_string($userAgent)) {
            throw new \InvalidArgumentException('User-agent must be a string.');
        }

        $this->userAgent = $userAgent;

        return $this;
    }

    /**
     * Gets the user agent of the api client.
     *
     * @return string user agent
     */
    public function getUserAgent(): string
    {
        return $this->userAgent;
    }

    /**
     * Sets debug flag.
     *
     * @param bool $debug Debug flag
     *
     * @return $this
     */
    public function setDebug(bool $debug): Configuration
    {
        $this->debug = $debug;

        return $this;
    }

    /**
     * Gets the debug flag.
     */
    public function getDebug(): bool
    {
        return $this->debug;
    }

    /**
     * Sets the debug file.
     *
     * @param string $debugFile Debug file
     *
     * @return $this
     */
    public function setDebugFile(string $debugFile): Configuration
    {
        $this->debugFile = $debugFile;

        return $this;
    }

    /**
     * Gets the debug file.
     */
    public function getDebugFile(): string
    {
        return $this->debugFile;
    }

    /**
     * Sets the temp folder path.
     *
     * @param string $tempFolderPath Temp folder path
     *
     * @return $this
     */
    public function setTempFolderPath(string $tempFolderPath): Configuration
    {
        $this->tempFolderPath = $tempFolderPath;

        return $this;
    }

    /**
     * Gets the temp folder path.
     *
     * @return string Temp folder path
     */
    public function getTempFolderPath(): string
    {
        return $this->tempFolderPath;
    }

    /**
     * Gets the default configuration instance.
     */
    public static function getDefaultConfiguration(): Configuration
    {
        if (null === self::$defaultConfiguration) {
            self::$defaultConfiguration = new Configuration();
        }

        return self::$defaultConfiguration;
    }

    /**
     * Sets the default configuration instance.
     *
     * @param Configuration $config An instance of the Configuration Object
     */
    public static function setDefaultConfiguration(Configuration $config)
    {
        self::$defaultConfiguration = $config;
    }

    /**
     * Gets the essential information for debugging.
     *
     * @return string The report for debugging
     */
    public static function toDebugReport(): string
    {
        $report = 'PHP SDK (SpApi) Debug Report:'.PHP_EOL;
        $report .= '    OS: '.php_uname().PHP_EOL;
        $report .= '    PHP Version: '.PHP_VERSION.PHP_EOL;
        $report .= '    The version of the OpenAPI document: 2024-11-01'.PHP_EOL;
        $report .= '    Temp Folder Path: '.self::getDefaultConfiguration()->getTempFolderPath().PHP_EOL;

        return $report;
    }

    /**
     * Returns an array of host settings.
     *
     * @return array an array of host settings
     */
    public function getHostSettings(): array
    {
        return [
            [
                'url' => 'https://sellingpartnerapi-na.amazon.com',
                'description' => 'No description provided',
            ],
        ];
    }

    /**
     * Returns URL based on the index and variables.
     *
     * @param int        $index     index of the host settings
     * @param null|array $variables hash of variable and the corresponding value (optional)
     *
     * @return string URL based on host settings
     */
    public function getHostFromSettings(int $index, ?array $variables = null): string
    {
        if (null === $variables) {
            $variables = [];
        }

        $hosts = $this->getHostSettings();

        // check array index out of bound
        if ($index < 0 || $index >= sizeof($hosts)) {
            throw new \InvalidArgumentException(
                "Invalid index {$index} when selecting the host. Must be less than ".sizeof($hosts)
            );
        }

        $host = $hosts[$index];
        $url = $host['url'];

        // go through variable and assign a value
        foreach ($host['variables'] ?? [] as $name => $variable) {
            // check to see if it's in the variables provided by the user
            if (array_key_exists($name, $variables)) {
                // check to see if the value is in the enum
                if (in_array($variables[$name], $variable['enum_values'], true)) {
                    $url = str_replace('{'.$name.'}', $variables[$name], $url);
                } else {
                    throw new \InvalidArgumentException(
                        "The variable `{$name}` in the host URL has invalid value "
                        .$variables[$name]
                        .'. Must be '
                        .join(',', $variable['enum_values'])
                        .'.'
                    );
                }
            } else {
                // use default value
                $url = str_replace('{'.$name.'}', $variable['default_value'], $url);
            }
        }

        return $url;
    }
}
