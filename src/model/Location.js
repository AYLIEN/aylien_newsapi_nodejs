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
 * The Location model module.
 * @module model/Location
 * @version 5.2.3
 */
class Location {
    /**
     * Constructs a new <code>Location</code>.
     * @alias module:model/Location
     */
    constructor() { 
        
        Location.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Location();

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');

                if ('city' !== 'city') {
                  Object.defineProperty(obj, 'city', {
                    get() {
                      return obj['city'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');

                if ('country' !== 'country') {
                  Object.defineProperty(obj, 'country', {
                    get() {
                      return obj['country'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');

                if ('state' !== 'state') {
                  Object.defineProperty(obj, 'state', {
                    get() {
                      return obj['state'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The city of the location
 * @member {String} city
 */
Location.prototype['city'] = undefined;

/**
 * The country code of the location. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. 
 * @member {String} country
 */
Location.prototype['country'] = undefined;

/**
 * The state of the location
 * @member {String} state
 */
Location.prototype['state'] = undefined;






export default Location;

