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
 * The AggregatedSentiment model module.
 * @module model/AggregatedSentiment
 * @version 4.6.0
 */
class AggregatedSentiment {
    /**
     * Constructs a new <code>AggregatedSentiment</code>.
     * The aggregation of sentiments
     * @alias module:model/AggregatedSentiment
     */
    constructor() { 
        
        AggregatedSentiment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AggregatedSentiment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AggregatedSentiment} obj Optional instance to populate.
     * @return {module:model/AggregatedSentiment} The populated <code>AggregatedSentiment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AggregatedSentiment();

            if (data.hasOwnProperty('negative')) {
                obj['negative'] = ApiClient.convertToType(data['negative'], 'Number');

                if ('negative' !== 'negative') {
                  Object.defineProperty(obj, 'negative', {
                    get() {
                      return obj['negative'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('neutral')) {
                obj['neutral'] = ApiClient.convertToType(data['neutral'], 'Number');

                if ('neutral' !== 'neutral') {
                  Object.defineProperty(obj, 'neutral', {
                    get() {
                      return obj['neutral'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('positive')) {
                obj['positive'] = ApiClient.convertToType(data['positive'], 'Number');

                if ('positive' !== 'positive') {
                  Object.defineProperty(obj, 'positive', {
                    get() {
                      return obj['positive'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * Negative sentiments count
 * @member {Number} negative
 */
AggregatedSentiment.prototype['negative'] = undefined;

/**
 * Neutral sentiments count
 * @member {Number} neutral
 */
AggregatedSentiment.prototype['neutral'] = undefined;

/**
 * Positive sentiments count
 * @member {Number} positive
 */
AggregatedSentiment.prototype['positive'] = undefined;






export default AggregatedSentiment;

