/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.6
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ScopeLevel.
* @enum {}
* @readonly
*/
export default class ScopeLevel {
    
        /**
         * value: "international"
         * @const
         */
        "international" = "international";

    
        /**
         * value: "national"
         * @const
         */
        "national" = "national";

    
        /**
         * value: "local"
         * @const
         */
        "local" = "local";

    

    /**
    * Returns a <code>ScopeLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ScopeLevel} The enum <code>ScopeLevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

