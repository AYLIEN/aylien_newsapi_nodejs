/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.1.1
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DunsNumber from './DunsNumber';

/**
 * The ExternalIds model module.
 * @module model/ExternalIds
 * @version 5.1.1
 */
class ExternalIds {
    /**
     * Constructs a new <code>ExternalIds</code>.
     * External Ids of an entity
     * @alias module:model/ExternalIds
     */
    constructor() { 
        
        ExternalIds.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalIds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIds} obj Optional instance to populate.
     * @return {module:model/ExternalIds} The populated <code>ExternalIds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalIds();

            if (data.hasOwnProperty('duns')) {
                obj['duns'] = ApiClient.convertToType(data['duns'], [DunsNumber]);

                if ('duns' !== 'duns') {
                  Object.defineProperty(obj, 'duns', {
                    get() {
                      return obj['duns'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * DUNS number(s) of the entity
 * @member {Array.<module:model/DunsNumber>} duns
 */
ExternalIds.prototype['duns'] = undefined;






export default ExternalIds;
