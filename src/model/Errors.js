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
import Error from './Error';

/**
 * The Errors model module.
 * @module model/Errors
 * @version 4.1.1
 */
class Errors {
    /**
     * Constructs a new <code>Errors</code>.
     * @alias module:model/Errors
     */
    constructor() { 
        
        Errors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Errors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Errors} obj Optional instance to populate.
     * @return {module:model/Errors} The populated <code>Errors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Errors();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);

                if ('errors' !== 'errors') {
                  Object.defineProperty(obj, 'errors', {
                    get() {
                      return obj['errors'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Error>} errors
 */
Errors.prototype['errors'] = undefined;






export default Errors;

