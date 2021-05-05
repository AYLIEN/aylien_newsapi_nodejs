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
import EntityLinks from './EntityLinks';
import EntitySentiment from './EntitySentiment';
import EntitySurfaceForm from './EntitySurfaceForm';

/**
 * The Entity model module.
 * @module model/Entity
 * @version 4.4.0
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
            if (data.hasOwnProperty('indices')) {
                obj['indices'] = ApiClient.convertToType(data['indices'], [['Number']]);

                if ('indices' !== 'indices') {
                  Object.defineProperty(obj, 'indices', {
                    get() {
                      return obj['indices'];
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
            if (data.hasOwnProperty('prominence_score')) {
                obj['prominence_score'] = ApiClient.convertToType(data['prominence_score'], 'Number');

                if ('prominence_score' !== 'prominenceScore') {
                  Object.defineProperty(obj, 'prominenceScore', {
                    get() {
                      return obj['prominence_score'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('sentiment')) {
                obj['sentiment'] = EntitySentiment.constructFromObject(data['sentiment']);

                if ('sentiment' !== 'sentiment') {
                  Object.defineProperty(obj, 'sentiment', {
                    get() {
                      return obj['sentiment'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('stock_ticker')) {
                obj['stock_ticker'] = ApiClient.convertToType(data['stock_ticker'], 'String');

                if ('stock_ticker' !== 'stockTicker') {
                  Object.defineProperty(obj, 'stockTicker', {
                    get() {
                      return obj['stock_ticker'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('surface_forms')) {
                obj['surface_forms'] = ApiClient.convertToType(data['surface_forms'], [EntitySurfaceForm]);

                if ('surface_forms' !== 'surfaceForms') {
                  Object.defineProperty(obj, 'surfaceForms', {
                    get() {
                      return obj['surface_forms'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');

                if ('text' !== 'text') {
                  Object.defineProperty(obj, 'text', {
                    get() {
                      return obj['text'];
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
 * The unique ID of the entity
 * @member {String} id
 */
Entity.prototype['id'] = undefined;

/**
 * The indices of the entity text
 * @member {Array.<Array.<Number>>} indices
 */
Entity.prototype['indices'] = undefined;

/**
 * @member {module:model/EntityLinks} links
 */
Entity.prototype['links'] = undefined;

/**
 * Describes how relevant an entity is to the article
 * @member {Number} prominence_score
 */
Entity.prototype['prominence_score'] = undefined;

/**
 * @member {module:model/EntitySentiment} sentiment
 */
Entity.prototype['sentiment'] = undefined;

/**
 * The stock_ticker of the entity (might be null)
 * @member {String} stock_ticker
 */
Entity.prototype['stock_ticker'] = undefined;

/**
 * @member {Array.<module:model/EntitySurfaceForm>} surface_forms
 */
Entity.prototype['surface_forms'] = undefined;

/**
 * The entity text
 * @member {String} text
 */
Entity.prototype['text'] = undefined;

/**
 * An array of the entity types
 * @member {Array.<String>} types
 */
Entity.prototype['types'] = undefined;






export default Entity;

