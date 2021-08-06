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
 * The StoryTranslation model module.
 * @module model/StoryTranslation
 * @version 4.6.0
 */
class StoryTranslation {
    /**
     * Constructs a new <code>StoryTranslation</code>.
     * @alias module:model/StoryTranslation
     */
    constructor() { 
        
        StoryTranslation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryTranslation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryTranslation} obj Optional instance to populate.
     * @return {module:model/StoryTranslation} The populated <code>StoryTranslation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryTranslation();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');

                if ('body' !== 'body') {
                  Object.defineProperty(obj, 'body', {
                    get() {
                      return obj['body'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');

                if ('title' !== 'title') {
                  Object.defineProperty(obj, 'title', {
                    get() {
                      return obj['title'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * Translation of body
 * @member {String} body
 */
StoryTranslation.prototype['body'] = undefined;

/**
 * Translation of title
 * @member {String} title
 */
StoryTranslation.prototype['title'] = undefined;






export default StoryTranslation;

