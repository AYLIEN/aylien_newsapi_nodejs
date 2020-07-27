/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Autocomplete from './Autocomplete';

/**
 * The Autocompletes model module.
 * @module model/Autocompletes
 * @version 4.1.1
 */
class Autocompletes {
    /**
     * Constructs a new <code>Autocompletes</code>.
     * @alias module:model/Autocompletes
     */
    constructor() { 
        
        Autocompletes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Autocompletes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Autocompletes} obj Optional instance to populate.
     * @return {module:model/Autocompletes} The populated <code>Autocompletes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Autocompletes();

            if (data.hasOwnProperty('autocompletes')) {
                obj['autocompletes'] = ApiClient.convertToType(data['autocompletes'], [Autocomplete]);

                if ('autocompletes' !== 'autocompletes') {
                  Object.defineProperty(obj, 'autocompletes', {
                    get() {
                      return obj['autocompletes'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * An array of autocompletes
 * @member {Array.<module:model/Autocomplete>} autocompletes
 */
Autocompletes.prototype['autocompletes'] = undefined;






export default Autocompletes;

