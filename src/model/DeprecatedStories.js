/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.6
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeprecatedStory from './DeprecatedStory';
import Warning from './Warning';

/**
 * The DeprecatedStories model module.
 * @module model/DeprecatedStories
 * @version 4.6.0
 */
class DeprecatedStories {
    /**
     * Constructs a new <code>DeprecatedStories</code>.
     * Stories containing deprecated entities
     * @alias module:model/DeprecatedStories
     */
    constructor() { 
        
        DeprecatedStories.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeprecatedStories</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedStories} obj Optional instance to populate.
     * @return {module:model/DeprecatedStories} The populated <code>DeprecatedStories</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeprecatedStories();

            if (data.hasOwnProperty('next_page_cursor')) {
                obj['next_page_cursor'] = ApiClient.convertToType(data['next_page_cursor'], 'String');

                if ('next_page_cursor' !== 'nextPageCursor') {
                  Object.defineProperty(obj, 'nextPageCursor', {
                    get() {
                      return obj['next_page_cursor'];
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
            if (data.hasOwnProperty('stories')) {
                obj['stories'] = ApiClient.convertToType(data['stories'], [DeprecatedStory]);

                if ('stories' !== 'stories') {
                  Object.defineProperty(obj, 'stories', {
                    get() {
                      return obj['stories'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('warnings')) {
                obj['warnings'] = ApiClient.convertToType(data['warnings'], [Warning]);

                if ('warnings' !== 'warnings') {
                  Object.defineProperty(obj, 'warnings', {
                    get() {
                      return obj['warnings'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The next page cursor
 * @member {String} next_page_cursor
 */
DeprecatedStories.prototype['next_page_cursor'] = undefined;

/**
 * The end of a period in which searched stories were published
 * @member {Date} published_at.end
 */
DeprecatedStories.prototype['published_at.end'] = undefined;

/**
 * The start of a period in which searched stories were published
 * @member {Date} published_at.start
 */
DeprecatedStories.prototype['published_at.start'] = undefined;

/**
 * An array of stories
 * @member {Array.<module:model/DeprecatedStory>} stories
 */
DeprecatedStories.prototype['stories'] = undefined;

/**
 * Notifies about possible issues that occurred when searching for stories
 * @member {Array.<module:model/Warning>} warnings
 */
DeprecatedStories.prototype['warnings'] = undefined;






export default DeprecatedStories;

