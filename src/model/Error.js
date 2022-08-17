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
import ErrorLinks from './ErrorLinks';

/**
 * The Error model module.
 * @module model/Error
 * @version 4.7.3
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * @alias module:model/Error
     */
    constructor() { 
        
        Error.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Error} obj Optional instance to populate.
     * @return {module:model/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                if ('code' !== 'code') {
                  Object.defineProperty(obj, 'code', {
                    get() {
                      return obj['code'];
                    }
                  });
                }
            }
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');

                if ('status' !== 'status') {
                  Object.defineProperty(obj, 'status', {
                    get() {
                      return obj['status'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                if ('title' !== 'title') {
                  Object.defineProperty(obj, 'title', {
                    get() {
                      return obj['title'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
Error.prototype['code'] = undefined;

/**
 * @member {String} detail
 */
Error.prototype['detail'] = undefined;

/**
 * @member {String} id
 */
Error.prototype['id'] = undefined;

/**
 * @member {module:model/ErrorLinks} links
 */
Error.prototype['links'] = undefined;

/**
 * @member {Number} status
 */
Error.prototype['status'] = undefined;

/**
 * @member {String} title
 */
Error.prototype['title'] = undefined;






export default Error;

