/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.2.3
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Autocomplete model module.
 * @module model/Autocomplete
 * @version 5.2.3
 */
class Autocomplete {
    /**
     * Constructs a new <code>Autocomplete</code>.
     * @alias module:model/Autocomplete
     */
    constructor() { 
        
        Autocomplete.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Autocomplete</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Autocomplete} obj Optional instance to populate.
     * @return {module:model/Autocomplete} The populated <code>Autocomplete</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Autocomplete();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');

                if ('id' !== 'id') {
                  Object.defineProperty(obj, 'id', {
                    get() {
                      return obj['id'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');

                if ('text' !== 'text') {
                  Object.defineProperty(obj, 'text', {
                    get() {
                      return obj['text'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * ID of the autocomplete
 * @member {String} id
 */
Autocomplete.prototype['id'] = undefined;

/**
 * Text of the autocomplete
 * @member {String} text
 */
Autocomplete.prototype['text'] = undefined;






export default Autocomplete;

