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
import ShareCount from './ShareCount';

/**
 * The ShareCounts model module.
 * @module model/ShareCounts
 * @version 3.0.0
 */
class ShareCounts {
    /**
     * Constructs a new <code>ShareCounts</code>.
     * @alias module:model/ShareCounts
     */
    constructor() { 
        
        ShareCounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ShareCounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShareCounts} obj Optional instance to populate.
     * @return {module:model/ShareCounts} The populated <code>ShareCounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShareCounts();

            if (data.hasOwnProperty('facebook')) {
                obj['facebook'] = ApiClient.convertToType(data['facebook'], [ShareCount]);
            }
            if (data.hasOwnProperty('google_plus')) {
                obj['google_plus'] = ApiClient.convertToType(data['google_plus'], [ShareCount]);
            }
            if (data.hasOwnProperty('linkedin')) {
                obj['linkedin'] = ApiClient.convertToType(data['linkedin'], [ShareCount]);
            }
            if (data.hasOwnProperty('reddit')) {
                obj['reddit'] = ApiClient.convertToType(data['reddit'], [ShareCount]);
            }
        }
        return obj;
    }


}

/**
 * Facebook shares count
 * @member {Array.<module:model/ShareCount>} facebook
 */
ShareCounts.prototype['facebook'] = undefined;

/**
 * Google Plus shares count
 * @member {Array.<module:model/ShareCount>} google_plus
 */
ShareCounts.prototype['google_plus'] = undefined;

/**
 * LinkedIn shares count
 * @member {Array.<module:model/ShareCount>} linkedin
 */
ShareCounts.prototype['linkedin'] = undefined;

/**
 * Reddit shares count
 * @member {Array.<module:model/ShareCount>} reddit
 */
ShareCounts.prototype['reddit'] = undefined;






export default ShareCounts;

