/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.2.1
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Author from './Author';
import Category from './Category';
import Entity from './Entity';
import Media from './Media';
import Sentiments from './Sentiments';
import ShareCounts from './ShareCounts';
import Source from './Source';
import StoryLinks from './StoryLinks';
import StoryTranslations from './StoryTranslations';
import Summary from './Summary';

/**
 * The Story model module.
 * @module model/Story
 * @version 5.1.1
 */
class Story {
    /**
     * Constructs a new <code>Story</code>.
     * @alias module:model/Story
     */
    constructor() { 
        
        Story.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Story</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Story} obj Optional instance to populate.
     * @return {module:model/Story} The populated <code>Story</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Story();

            if (data.hasOwnProperty('author')) {
                obj['author'] = Author.constructFromObject(data['author']);

                if ('author' !== 'author') {
                  Object.defineProperty(obj, 'author', {
                    get() {
                      return obj['author'];
                    }
                  });
                }
            }
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
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);

                if ('categories' !== 'categories') {
                  Object.defineProperty(obj, 'categories', {
                    get() {
                      return obj['categories'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('characters_count')) {
                obj['characters_count'] = ApiClient.convertToType(data['characters_count'], 'Number');

                if ('characters_count' !== 'charactersCount') {
                  Object.defineProperty(obj, 'charactersCount', {
                    get() {
                      return obj['characters_count'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], ['Number']);

                if ('clusters' !== 'clusters') {
                  Object.defineProperty(obj, 'clusters', {
                    get() {
                      return obj['clusters'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('entities')) {
                obj['entities'] = ApiClient.convertToType(data['entities'], [Entity]);

                if ('entities' !== 'entities') {
                  Object.defineProperty(obj, 'entities', {
                    get() {
                      return obj['entities'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('hashtags')) {
                obj['hashtags'] = ApiClient.convertToType(data['hashtags'], ['String']);

                if ('hashtags' !== 'hashtags') {
                  Object.defineProperty(obj, 'hashtags', {
                    get() {
                      return obj['hashtags'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                if ('id' !== 'id') {
                  Object.defineProperty(obj, 'id', {
                    get() {
                      return obj['id'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('industries')) {
                obj['industries'] = ApiClient.convertToType(data['industries'], [Category]);

                if ('industries' !== 'industries') {
                  Object.defineProperty(obj, 'industries', {
                    get() {
                      return obj['industries'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);

                if ('keywords' !== 'keywords') {
                  Object.defineProperty(obj, 'keywords', {
                    get() {
                      return obj['keywords'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');

                if ('language' !== 'language') {
                  Object.defineProperty(obj, 'language', {
                    get() {
                      return obj['language'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('license_type')) {
                obj['license_type'] = ApiClient.convertToType(data['license_type'], 'Number');

                if ('license_type' !== 'licenseType') {
                  Object.defineProperty(obj, 'licenseType', {
                    get() {
                      return obj['license_type'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = StoryLinks.constructFromObject(data['links']);

                if ('links' !== 'links') {
                  Object.defineProperty(obj, 'links', {
                    get() {
                      return obj['links'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ApiClient.convertToType(data['media'], [Media]);

                if ('media' !== 'media') {
                  Object.defineProperty(obj, 'media', {
                    get() {
                      return obj['media'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('paragraphs_count')) {
                obj['paragraphs_count'] = ApiClient.convertToType(data['paragraphs_count'], 'Number');

                if ('paragraphs_count' !== 'paragraphsCount') {
                  Object.defineProperty(obj, 'paragraphsCount', {
                    get() {
                      return obj['paragraphs_count'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('published_at')) {
                obj['published_at'] = ApiClient.convertToType(data['published_at'], 'Date');

                if ('published_at' !== 'publishedAt') {
                  Object.defineProperty(obj, 'publishedAt', {
                    get() {
                      return obj['published_at'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('published_datetime')) {
                obj['published_datetime'] = ApiClient.convertToType(data['published_datetime'], 'Date');

                if ('published_datetime' !== 'publishedDatetime') {
                  Object.defineProperty(obj, 'publishedDatetime', {
                    get() {
                      return obj['published_datetime'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('sentences_count')) {
                obj['sentences_count'] = ApiClient.convertToType(data['sentences_count'], 'Number');

                if ('sentences_count' !== 'sentencesCount') {
                  Object.defineProperty(obj, 'sentencesCount', {
                    get() {
                      return obj['sentences_count'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = Sentiments.constructFromObject(data['sentiment']);

                if ('sentiment' !== 'sentiment') {
                  Object.defineProperty(obj, 'sentiment', {
                    get() {
                      return obj['sentiment'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('social_shares_count')) {
                obj['social_shares_count'] = ShareCounts.constructFromObject(data['social_shares_count']);

                if ('social_shares_count' !== 'socialSharesCount') {
                  Object.defineProperty(obj, 'socialSharesCount', {
                    get() {
                      return obj['social_shares_count'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = Source.constructFromObject(data['source']);

                if ('source' !== 'source') {
                  Object.defineProperty(obj, 'source', {
                    get() {
                      return obj['source'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = Summary.constructFromObject(data['summary']);

                if ('summary' !== 'summary') {
                  Object.defineProperty(obj, 'summary', {
                    get() {
                      return obj['summary'];
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
            if (data.hasOwnProperty('translations')) {
                obj['translations'] = StoryTranslations.constructFromObject(data['translations']);

                if ('translations' !== 'translations') {
                  Object.defineProperty(obj, 'translations', {
                    get() {
                      return obj['translations'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('words_count')) {
                obj['words_count'] = ApiClient.convertToType(data['words_count'], 'Number');

                if ('words_count' !== 'wordsCount') {
                  Object.defineProperty(obj, 'wordsCount', {
                    get() {
                      return obj['words_count'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Author} author
 */
Story.prototype['author'] = undefined;

/**
 * Body of the story
 * @member {String} body
 */
Story.prototype['body'] = undefined;

/**
 * Suggested categories for the story
 * @member {Array.<module:model/Category>} categories
 */
Story.prototype['categories'] = undefined;

/**
 * Character count of the story body
 * @member {Number} characters_count
 */
Story.prototype['characters_count'] = undefined;

/**
 * An array of clusters the story is associated with
 * @member {Array.<Number>} clusters
 */
Story.prototype['clusters'] = undefined;

/**
 * An array of entities
 * @member {Array.<module:model/Entity>} entities
 */
Story.prototype['entities'] = undefined;

/**
 * An array of suggested Story hashtags
 * @member {Array.<String>} hashtags
 */
Story.prototype['hashtags'] = undefined;

/**
 * ID of the story which is a unique identification
 * @member {Number} id
 */
Story.prototype['id'] = undefined;

/**
 * An array of industries categories
 * @member {Array.<module:model/Category>} industries
 */
Story.prototype['industries'] = undefined;

/**
 * Extracted keywords mentioned in the story title or body
 * @member {Array.<String>} keywords
 */
Story.prototype['keywords'] = undefined;

/**
 * Language of the story
 * @member {String} language
 */
Story.prototype['language'] = undefined;

/**
 * License type of the story
 * @member {Number} license_type
 */
Story.prototype['license_type'] = undefined;

/**
 * @member {module:model/StoryLinks} links
 */
Story.prototype['links'] = undefined;

/**
 * An array of extracted media such as images and videos
 * @member {Array.<module:model/Media>} media
 */
Story.prototype['media'] = undefined;

/**
 * Paragraph count of the story body
 * @member {Number} paragraphs_count
 */
Story.prototype['paragraphs_count'] = undefined;

/**
 * Acquisition time of the story
 * @member {Date} published_at
 */
Story.prototype['published_at'] = undefined;

/**
 * Publication time of the story, if available, otherwise time of acquisition
 * @member {Date} published_datetime
 */
Story.prototype['published_datetime'] = undefined;

/**
 * Sentence count of the story body
 * @member {Number} sentences_count
 */
Story.prototype['sentences_count'] = undefined;

/**
 * @member {module:model/Sentiments} sentiment
 */
Story.prototype['sentiment'] = undefined;

/**
 * @member {module:model/ShareCounts} social_shares_count
 */
Story.prototype['social_shares_count'] = undefined;

/**
 * @member {module:model/Source} source
 */
Story.prototype['source'] = undefined;

/**
 * @member {module:model/Summary} summary
 */
Story.prototype['summary'] = undefined;

/**
 * Title of the story
 * @member {String} title
 */
Story.prototype['title'] = undefined;

/**
 * @member {module:model/StoryTranslations} translations
 */
Story.prototype['translations'] = undefined;

/**
 * Word count of the story body
 * @member {Number} words_count
 */
Story.prototype['words_count'] = undefined;






export default Story;

