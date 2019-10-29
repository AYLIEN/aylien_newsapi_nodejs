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
 * The StoryLinks model module.
 * @module model/StoryLinks
 * @version 3.0.0
 */
class StoryLinks {
    /**
     * Constructs a new <code>StoryLinks</code>.
     * @alias module:model/StoryLinks
     */
    constructor() { 
        
        StoryLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryLinks} obj Optional instance to populate.
     * @return {module:model/StoryLinks} The populated <code>StoryLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryLinks();

            if (data.hasOwnProperty('canonical')) {
                obj['canonical'] = ApiClient.convertToType(data['canonical'], 'String');
            }
            if (data.hasOwnProperty('coverages')) {
                obj['coverages'] = ApiClient.convertToType(data['coverages'], 'String');
            }
            if (data.hasOwnProperty('permalink')) {
                obj['permalink'] = ApiClient.convertToType(data['permalink'], 'String');
            }
            if (data.hasOwnProperty('related_stories')) {
                obj['related_stories'] = ApiClient.convertToType(data['related_stories'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The story canonical URL
 * @member {String} canonical
 */
StoryLinks.prototype['canonical'] = undefined;

/**
 * The coverages URL
 * @member {String} coverages
 */
StoryLinks.prototype['coverages'] = undefined;

/**
 * The story permalink URL
 * @member {String} permalink
 */
StoryLinks.prototype['permalink'] = undefined;

/**
 * The related stories URL
 * @member {String} related_stories
 */
StoryLinks.prototype['related_stories'] = undefined;






export default StoryLinks;

