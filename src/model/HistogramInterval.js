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

/**
 * The HistogramInterval model module.
 * @module model/HistogramInterval
 * @version 4.5.0
 */
class HistogramInterval {
    /**
     * Constructs a new <code>HistogramInterval</code>.
     * @alias module:model/HistogramInterval
     */
    constructor() { 
        
        HistogramInterval.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistogramInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistogramInterval} obj Optional instance to populate.
     * @return {module:model/HistogramInterval} The populated <code>HistogramInterval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistogramInterval();

            if (data.hasOwnProperty('bin')) {
                obj['bin'] = ApiClient.convertToType(data['bin'], 'Number');

                if ('bin' !== 'bin') {
                  Object.defineProperty(obj, 'bin', {
                    get() {
                      return obj['bin'];
                    }
                  });
                }
            }
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
        }
        return obj;
    }


}

/**
 * Histogram bin
 * @member {Number} bin
 */
HistogramInterval.prototype['bin'] = undefined;

/**
 * Histogram bin size
 * @member {Number} count
 */
HistogramInterval.prototype['count'] = undefined;






export default HistogramInterval;

