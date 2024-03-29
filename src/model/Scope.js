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
import ScopeLevel from './ScopeLevel';

/**
 * The Scope model module.
 * @module model/Scope
 * @version 5.2.3
 */
class Scope {
    /**
     * Constructs a new <code>Scope</code>.
     * @alias module:model/Scope
     */
    constructor() { 
        
        Scope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Scope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Scope} obj Optional instance to populate.
     * @return {module:model/Scope} The populated <code>Scope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Scope();

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
            if (data.hasOwnProperty('level')) {
                obj['level'] = ScopeLevel.constructFromObject(data['level']);

                if ('level' !== 'level') {
                  Object.defineProperty(obj, 'level', {
                    get() {
                      return obj['level'];
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
 * The scope by city
 * @member {String} city
 */
Scope.prototype['city'] = undefined;

/**
 * The source scope by country code. It supports [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. 
 * @member {String} country
 */
Scope.prototype['country'] = undefined;

/**
 * @member {module:model/ScopeLevel} level
 */
Scope.prototype['level'] = undefined;

/**
 * The scope by state
 * @member {String} state
 */
Scope.prototype['state'] = undefined;






export default Scope;

