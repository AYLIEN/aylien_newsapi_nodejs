/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7.4
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Trend from './Trend';

/**
 * The Trends model module.
 * @module model/Trends
 * @version 4.7.4
 */
class Trends {
    /**
     * Constructs a new <code>Trends</code>.
     * @alias module:model/Trends
     */
    constructor() { 
        
        Trends.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Trends</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trends} obj Optional instance to populate.
     * @return {module:model/Trends} The populated <code>Trends</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Trends();

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
            if (data.hasOwnProperty('trends')) {
                obj['trends'] = ApiClient.convertToType(data['trends'], [Trend]);

                if ('trends' !== 'trends') {
                  Object.defineProperty(obj, 'trends', {
                    get() {
                      return obj['trends'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The field of trends
 * @member {String} field
 */
Trends.prototype['field'] = undefined;

/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */
Trends.prototype['published_at.end'] = undefined;

/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */
Trends.prototype['published_at.start'] = undefined;

/**
 * An array of trends
 * @member {Array.<module:model/Trend>} trends
 */
Trends.prototype['trends'] = undefined;






export default Trends;

