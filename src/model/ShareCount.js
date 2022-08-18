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
 * The ShareCount model module.
 * @module model/ShareCount
 * @version 5.2.3
 */
class ShareCount {
    /**
     * Constructs a new <code>ShareCount</code>.
     * @alias module:model/ShareCount
     */
    constructor() { 
        
        ShareCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShareCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareCount} obj Optional instance to populate.
     * @return {module:model/ShareCount} The populated <code>ShareCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShareCount();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');

                if ('count' !== 'count') {
                  Object.defineProperty(obj, 'count', {
                    get() {
                      return obj['count'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('fetched_at')) {
                obj['fetched_at'] = ApiClient.convertToType(data['fetched_at'], 'Date');

                if ('fetched_at' !== 'fetchedAt') {
                  Object.defineProperty(obj, 'fetchedAt', {
                    get() {
                      return obj['fetched_at'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The number of shares
 * @member {Number} count
 */
ShareCount.prototype['count'] = undefined;

/**
 * The fetched date of the shares
 * @member {Date} fetched_at
 */
ShareCount.prototype['fetched_at'] = undefined;






export default ShareCount;

