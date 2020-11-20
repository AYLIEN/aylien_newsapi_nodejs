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
import StoryTranslation from './StoryTranslation';

/**
 * The StoryTranslations model module.
 * @module model/StoryTranslations
 * @version 4.3.0
 */
class StoryTranslations {
    /**
     * Constructs a new <code>StoryTranslations</code>.
     * Translations of the story. Each language has it&#39;s own key and object
     * @alias module:model/StoryTranslations
     */
    constructor() { 
        
        StoryTranslations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryTranslations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryTranslations} obj Optional instance to populate.
     * @return {module:model/StoryTranslations} The populated <code>StoryTranslations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryTranslations();

            if (data.hasOwnProperty('en')) {
                obj['en'] = StoryTranslation.constructFromObject(data['en']);

                if ('en' !== 'en') {
                  Object.defineProperty(obj, 'en', {
                    get() {
                      return obj['en'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StoryTranslation} en
 */
StoryTranslations.prototype['en'] = undefined;






export default StoryTranslations;

