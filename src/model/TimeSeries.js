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
import AggregatedSentiment from './AggregatedSentiment';

/**
 * The TimeSeries model module.
 * @module model/TimeSeries
 * @version 4.4.0
 */
class TimeSeries {
    /**
     * Constructs a new <code>TimeSeries</code>.
     * @alias module:model/TimeSeries
     */
    constructor() { 
        
        TimeSeries.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeSeries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeries} obj Optional instance to populate.
     * @return {module:model/TimeSeries} The populated <code>TimeSeries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeSeries();

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
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');

                if ('published_at' !== 'publishedAt') {
                  Object.defineProperty(obj, 'publishedAt', {
                    get() {
                      return obj['published_at'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = AggregatedSentiment.constructFromObject(data['sentiment']);

                if ('sentiment' !== 'sentiment') {
                  Object.defineProperty(obj, 'sentiment', {
                    get() {
                      return obj['sentiment'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The count of time series bin
 * @member {Number} count
 */
TimeSeries.prototype['count'] = undefined;

/**
 * The published date of the time series bin
 * @member {Date} published_at
 */
TimeSeries.prototype['published_at'] = undefined;

/**
 * @member {module:model/AggregatedSentiment} sentiment
 */
TimeSeries.prototype['sentiment'] = undefined;






export default TimeSeries;

