/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import HistogramInterval from './HistogramInterval';

/**
 * The Histograms model module.
 * @module model/Histograms
 * @version 4.7.0
 */
class Histograms {
    /**
     * Constructs a new <code>Histograms</code>.
     * @alias module:model/Histograms
     */
    constructor() { 
        
        Histograms.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Histograms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Histograms} obj Optional instance to populate.
     * @return {module:model/Histograms} The populated <code>Histograms</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Histograms();

            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');

                if ('field' !== 'field') {
                  Object.defineProperty(obj, 'field', {
                    get() {
                      return obj['field'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('interval.end')) {
                obj['interval.end'] = ApiClient.convertToType(data['interval.end'], 'Number');

                if ('interval.end' !== 'intervalEnd') {
                  Object.defineProperty(obj, 'intervalEnd', {
                    get() {
                      return obj['interval.end'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('interval.start')) {
                obj['interval.start'] = ApiClient.convertToType(data['interval.start'], 'Number');

                if ('interval.start' !== 'intervalStart') {
                  Object.defineProperty(obj, 'intervalStart', {
                    get() {
                      return obj['interval.start'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('interval.width')) {
                obj['interval.width'] = ApiClient.convertToType(data['interval.width'], 'Number');

                if ('interval.width' !== 'intervalWidth') {
                  Object.defineProperty(obj, 'intervalWidth', {
                    get() {
                      return obj['interval.width'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('intervals')) {
                obj['intervals'] = ApiClient.convertToType(data['intervals'], [HistogramInterval]);

                if ('intervals' !== 'intervals') {
                  Object.defineProperty(obj, 'intervals', {
                    get() {
                      return obj['intervals'];
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
        }
        return obj;
    }


}

/**
 * @member {String} field
 */
Histograms.prototype['field'] = undefined;

/**
 * The end interval of the histogram
 * @member {Number} interval.end
 */
Histograms.prototype['interval.end'] = undefined;

/**
 * The start interval of the histogram
 * @member {Number} interval.start
 */
Histograms.prototype['interval.start'] = undefined;

/**
 * The width of the histogram
 * @member {Number} interval.width
 */
Histograms.prototype['interval.width'] = undefined;

/**
 * The intervals of the histograms
 * @member {Array.<module:model/HistogramInterval>} intervals
 */
Histograms.prototype['intervals'] = undefined;

/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */
Histograms.prototype['published_at.end'] = undefined;

/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */
Histograms.prototype['published_at.start'] = undefined;






export default Histograms;

