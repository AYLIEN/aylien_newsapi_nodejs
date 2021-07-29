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
import Story from './Story';
import Warning from './Warning';

/**
 * The Stories model module.
 * @module model/Stories
 * @version 4.5.0
 */
class Stories {
    /**
     * Constructs a new <code>Stories</code>.
     * Stories containing new V3 entities - available for new_v3_entities feature flag
     * @alias module:model/Stories
     */
    constructor() { 
        
        Stories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Stories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stories} obj Optional instance to populate.
     * @return {module:model/Stories} The populated <code>Stories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stories();

            if (data.hasOwnProperty('next_page_cursor')) {
                obj['next_page_cursor'] = ApiClient.convertToType(data['next_page_cursor'], 'String');
            }
            if (data.hasOwnProperty('published_at.end')) {
                obj['published_at.end'] = ApiClient.convertToType(data['published_at.end'], 'Date');
            }
            if (data.hasOwnProperty('published_at.start')) {
                obj['published_at.start'] = ApiClient.convertToType(data['published_at.start'], 'Date');
            }
            if (data.hasOwnProperty('stories')) {
                obj['stories'] = ApiClient.convertToType(data['stories'], [Story]);
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], [Warning]);
            }
        }
        return obj;
    }


}

/**
 * The next page cursor
 * @member {String} next_page_cursor
 */
Stories.prototype['next_page_cursor'] = undefined;

/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */
Stories.prototype['published_at.end'] = undefined;

/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */
Stories.prototype['published_at.start'] = undefined;

/**
 * An array of stories
 * @member {Array.<module:model/Story>} stories
 */
Stories.prototype['stories'] = undefined;

/**
 * Notifies about possible issues that occurred when searching for stories
 * @member {Array.<module:model/Warning>} warnings
 */
Stories.prototype['warnings'] = undefined;






export default Stories;

