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
 * The Trend model module.
 * @module model/Trend
 * @version 3.0.0
 */
class Trend {
    /**
     * Constructs a new <code>Trend</code>.
     * @alias module:model/Trend
     */
    constructor() { 
        
        Trend.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Trend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trend} obj Optional instance to populate.
     * @return {module:model/Trend} The populated <code>Trend</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Trend();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The count of the trend
 * @member {Number} count
 */
Trend.prototype['count'] = undefined;

/**
 * The value of the trend
 * @member {String} value
 */
Trend.prototype['value'] = undefined;






export default Trend;

