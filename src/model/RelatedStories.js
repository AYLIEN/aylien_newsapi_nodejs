/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.1.1
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Story from './Story';

/**
 * The RelatedStories model module.
 * @module model/RelatedStories
 * @version 5.1.1
 */
class RelatedStories {
    /**
     * Constructs a new <code>RelatedStories</code>.
     * Story containing new V3 entities - available for new_v3_entities feature flag
     * @alias module:model/RelatedStories
     */
    constructor() { 
        
        RelatedStories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelatedStories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelatedStories} obj Optional instance to populate.
     * @return {module:model/RelatedStories} The populated <code>RelatedStories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelatedStories();

            if (data.hasOwnProperty('related_stories')) {
                obj['related_stories'] = ApiClient.convertToType(data['related_stories'], [Story]);

                if ('related_stories' !== 'relatedStories') {
                  Object.defineProperty(obj, 'relatedStories', {
                    get() {
                      return obj['related_stories'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('story_body')) {
                obj['story_body'] = ApiClient.convertToType(data['story_body'], 'String');

                if ('story_body' !== 'storyBody') {
                  Object.defineProperty(obj, 'storyBody', {
                    get() {
                      return obj['story_body'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('story_language')) {
                obj['story_language'] = ApiClient.convertToType(data['story_language'], 'String');

                if ('story_language' !== 'storyLanguage') {
                  Object.defineProperty(obj, 'storyLanguage', {
                    get() {
                      return obj['story_language'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('story_title')) {
                obj['story_title'] = ApiClient.convertToType(data['story_title'], 'String');

                if ('story_title' !== 'storyTitle') {
                  Object.defineProperty(obj, 'storyTitle', {
                    get() {
                      return obj['story_title'];
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
 * An array of related stories for the input story
 * @member {Array.<module:model/Story>} related_stories
 */
RelatedStories.prototype['related_stories'] = undefined;

/**
 * The input story body
 * @member {String} story_body
 */
RelatedStories.prototype['story_body'] = undefined;

/**
 * The input story language
 * @member {String} story_language
 */
RelatedStories.prototype['story_language'] = undefined;

/**
 * The input story title
 * @member {String} story_title
 */
RelatedStories.prototype['story_title'] = undefined;

/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */
RelatedStories.prototype['published_at.end'] = undefined;

/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */
RelatedStories.prototype['published_at.start'] = undefined;






export default RelatedStories;

