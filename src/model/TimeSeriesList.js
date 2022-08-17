/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.2.2
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TimeSeries from './TimeSeries';

/**
 * The TimeSeriesList model module.
 * @module model/TimeSeriesList
 * @version 5.2.2
 */
class TimeSeriesList {
    /**
     * Constructs a new <code>TimeSeriesList</code>.
     * @alias module:model/TimeSeriesList
     */
    constructor() { 
        
        TimeSeriesList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TimeSeriesList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeSeriesList} obj Optional instance to populate.
     * @return {module:model/TimeSeriesList} The populated <code>TimeSeriesList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimeSeriesList();

            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');

                if ('period' !== 'period') {
                  Object.defineProperty(obj, 'period', {
                    get() {
                      return obj['period'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('published_at.end')) {
                obj['published_at.end'] = ApiClient.convertToType(data['published_at.end'], 'Date');

                if ('published_at.end' !== 'publishedAtEnd') {
                  Object.defineProperty(obj, 'publishedAtEnd', {
                    get() {
                      return obj['published_at.end'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('published_at.start')) {
                obj['published_at.start'] = ApiClient.convertToType(data['published_at.start'], 'Date');

                if ('published_at.start' !== 'publishedAtStart') {
                  Object.defineProperty(obj, 'publishedAtStart', {
                    get() {
                      return obj['published_at.start'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('time_series')) {
                obj['time_series'] = ApiClient.convertToType(data['time_series'], [TimeSeries]);

                if ('time_series' !== 'timeSeries') {
                  Object.defineProperty(obj, 'timeSeries', {
                    get() {
                      return obj['time_series'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The size of each date range expressed as an interval to be added to the lower bound. 
 * @member {String} period
 */
TimeSeriesList.prototype['period'] = undefined;

/**
 * The end published date of the time series
 * @member {Date} published_at.end
 */
TimeSeriesList.prototype['published_at.end'] = undefined;

/**
 * The start published date of the time series
 * @member {Date} published_at.start
 */
TimeSeriesList.prototype['published_at.start'] = undefined;

/**
 * An array of time series
 * @member {Array.<module:model/TimeSeries>} time_series
 */
TimeSeriesList.prototype['time_series'] = undefined;






export default TimeSeriesList;

