/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7.2
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Rank from './Rank';

/**
 * The Rankings model module.
 * @module model/Rankings
 * @version 4.7.1
 */
class Rankings {
    /**
     * Constructs a new <code>Rankings</code>.
     * @alias module:model/Rankings
     */
    constructor() { 
        
        Rankings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rankings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rankings} obj Optional instance to populate.
     * @return {module:model/Rankings} The populated <code>Rankings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rankings();

            if (data.hasOwnProperty('alexa')) {
                obj['alexa'] = ApiClient.convertToType(data['alexa'], [Rank]);

                if ('alexa' !== 'alexa') {
                  Object.defineProperty(obj, 'alexa', {
                    get() {
                      return obj['alexa'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Rank>} alexa
 */
Rankings.prototype['alexa'] = undefined;






export default Rankings;

