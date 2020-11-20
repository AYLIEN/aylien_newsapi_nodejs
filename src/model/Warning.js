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
import ErrorLinks from './ErrorLinks';

/**
 * The Warning model module.
 * @module model/Warning
 * @version 4.3.0
 */
class Warning {
    /**
     * Constructs a new <code>Warning</code>.
     * @alias module:model/Warning
     */
    constructor() { 
        
        Warning.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Warning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Warning} obj Optional instance to populate.
     * @return {module:model/Warning} The populated <code>Warning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Warning();

            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');

                if ('detail' !== 'detail') {
                  Object.defineProperty(obj, 'detail', {
                    get() {
                      return obj['detail'];
                    }
                  });
                }
            }
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
            if (data.hasOwnProperty('links')) {
                obj['links'] = ErrorLinks.constructFromObject(data['links']);

                if ('links' !== 'links') {
                  Object.defineProperty(obj, 'links', {
                    get() {
                      return obj['links'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The detailed description of the warning.
 * @member {String} detail
 */
Warning.prototype['detail'] = undefined;

/**
 * The identfier of the warning, represents its origin.
 * @member {String} id
 */
Warning.prototype['id'] = undefined;

/**
 * @member {module:model/ErrorLinks} links
 */
Warning.prototype['links'] = undefined;






export default Warning;
