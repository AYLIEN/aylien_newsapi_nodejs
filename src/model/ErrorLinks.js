/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ErrorLinks model module.
 * @module model/ErrorLinks
 * @version 4.6.0
 */
class ErrorLinks {
    /**
     * Constructs a new <code>ErrorLinks</code>.
     * @alias module:model/ErrorLinks
     */
    constructor() { 
        
        ErrorLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorLinks} obj Optional instance to populate.
     * @return {module:model/ErrorLinks} The populated <code>ErrorLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorLinks();

            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'String');

                if ('about' !== 'about') {
                  Object.defineProperty(obj, 'about', {
                    get() {
                      return obj['about'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('docs')) {
                obj['docs'] = ApiClient.convertToType(data['docs'], 'String');

                if ('docs' !== 'docs') {
                  Object.defineProperty(obj, 'docs', {
                    get() {
                      return obj['docs'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {String} about
 */
ErrorLinks.prototype['about'] = undefined;

/**
 * @member {String} docs
 */
ErrorLinks.prototype['docs'] = undefined;






export default ErrorLinks;

