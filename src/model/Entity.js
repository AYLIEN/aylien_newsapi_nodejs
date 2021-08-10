/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.0.1
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityInText from './EntityInText';
import EntityLinks from './EntityLinks';
import EntitySentiment from './EntitySentiment';

/**
 * The Entity model module.
 * @module model/Entity
 * @version 5.0.1
 */
class Entity {
    /**
     * Constructs a new <code>Entity</code>.
     * @alias module:model/Entity
     */
    constructor() { 
        
        Entity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entity} obj Optional instance to populate.
     * @return {module:model/Entity} The populated <code>Entity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entity();

            if (data.hasOwnProperty('body')) {
                obj['body'] = EntityInText.constructFromObject(data['body']);

                if ('body' !== 'body') {
                  Object.defineProperty(obj, 'body', {
                    get() {
                      return obj['body'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');

                if ('id' !== 'id') {
                  Object.defineProperty(obj, 'id', {
                    get() {
                      return obj['id'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = EntityLinks.constructFromObject(data['links']);

                if ('links' !== 'links') {
                  Object.defineProperty(obj, 'links', {
                    get() {
                      return obj['links'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('overall_frequency')) {
                obj['overall_frequency'] = ApiClient.convertToType(data['overall_frequency'], 'Number');

                if ('overall_frequency' !== 'overallFrequency') {
                  Object.defineProperty(obj, 'overallFrequency', {
                    get() {
                      return obj['overall_frequency'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('overall_prominence')) {
                obj['overall_prominence'] = ApiClient.convertToType(data['overall_prominence'], 'Number');

                if ('overall_prominence' !== 'overallProminence') {
                  Object.defineProperty(obj, 'overallProminence', {
                    get() {
                      return obj['overall_prominence'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('overall_sentiment')) {
                obj['overall_sentiment'] = EntitySentiment.constructFromObject(data['overall_sentiment']);

                if ('overall_sentiment' !== 'overallSentiment') {
                  Object.defineProperty(obj, 'overallSentiment', {
                    get() {
                      return obj['overall_sentiment'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('stock_tickers')) {
                obj['stock_tickers'] = ApiClient.convertToType(data['stock_tickers'], ['String']);

                if ('stock_tickers' !== 'stockTickers') {
                  Object.defineProperty(obj, 'stockTickers', {
                    get() {
                      return obj['stock_tickers'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = EntityInText.constructFromObject(data['title']);

                if ('title' !== 'title') {
                  Object.defineProperty(obj, 'title', {
                    get() {
                      return obj['title'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('types')) {
                obj['types'] = ApiClient.convertToType(data['types'], ['String']);

                if ('types' !== 'types') {
                  Object.defineProperty(obj, 'types', {
                    get() {
                      return obj['types'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EntityInText} body
 */
Entity.prototype['body'] = undefined;

/**
 * The unique ID of the entity
 * @member {String} id
 */
Entity.prototype['id'] = undefined;

/**
 * @member {module:model/EntityLinks} links
 */
Entity.prototype['links'] = undefined;

/**
 * Amount of entity surface form mentions in the article
 * @member {Number} overall_frequency
 */
Entity.prototype['overall_frequency'] = undefined;

/**
 * Describes how relevant an entity is to the article
 * @member {Number} overall_prominence
 */
Entity.prototype['overall_prominence'] = undefined;

/**
 * @member {module:model/EntitySentiment} overall_sentiment
 */
Entity.prototype['overall_sentiment'] = undefined;

/**
 * The stock tickers of the entity (might be empty)
 * @member {Array.<String>} stock_tickers
 */
Entity.prototype['stock_tickers'] = undefined;

/**
 * @member {module:model/EntityInText} title
 */
Entity.prototype['title'] = undefined;

/**
 * An array of the entity types
 * @member {Array.<String>} types
 */
Entity.prototype['types'] = undefined;






export default Entity;

