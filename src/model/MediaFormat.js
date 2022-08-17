/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7.3
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class MediaFormat.
* @enum {}
* @readonly
*/
export default class MediaFormat {
    
        /**
         * value: "BMP"
         * @const
         */
        "BMP" = "BMP";

    
        /**
         * value: "GIF"
         * @const
         */
        "GIF" = "GIF";

    
        /**
         * value: "JPEG"
         * @const
         */
        "JPEG" = "JPEG";

    
        /**
         * value: "PNG"
         * @const
         */
        "PNG" = "PNG";

    
        /**
         * value: "TIFF"
         * @const
         */
        "TIFF" = "TIFF";

    
        /**
         * value: "PSD"
         * @const
         */
        "PSD" = "PSD";

    
        /**
         * value: "ICO"
         * @const
         */
        "ICO" = "ICO";

    
        /**
         * value: "CUR"
         * @const
         */
        "CUR" = "CUR";

    
        /**
         * value: "WEBP"
         * @const
         */
        "WEBP" = "WEBP";

    
        /**
         * value: "SVG"
         * @const
         */
        "SVG" = "SVG";

    

    /**
    * Returns a <code>MediaFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MediaFormat} The enum <code>MediaFormat</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

