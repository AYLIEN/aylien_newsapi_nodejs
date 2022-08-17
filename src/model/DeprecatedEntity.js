/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7.4
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeprecatedEntitySurfaceForm from './DeprecatedEntitySurfaceForm';
import EntityLinks from './EntityLinks';
import EntitySentiment from './EntitySentiment';

/**
 * The DeprecatedEntity model module.
 * @module model/DeprecatedEntity
 * @version 4.7.4
 */
class DeprecatedEntity {
    /**
     * Constructs a new <code>DeprecatedEntity</code>.
     * @alias module:model/DeprecatedEntity
     */
    constructor() { 
        
        DeprecatedEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeprecatedEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedEntity} obj Optional instance to populate.
     * @return {module:model/DeprecatedEntity} The populated <code>DeprecatedEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeprecatedEntity();

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
                obj['surface_forms'] = ApiClient.convertToType(data['surface_forms'], [DeprecatedEntitySurfaceForm]);

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
DeprecatedEntity.prototype['id'] = undefined;

/**
 * The indices of the entity text
 * @member {Array.<Array.<Number>>} indices
 */
DeprecatedEntity.prototype['indices'] = undefined;

/**
 * @member {module:model/EntityLinks} links
 */
DeprecatedEntity.prototype['links'] = undefined;

/**
 * Describes how relevant an entity is to the article
 * @member {Number} prominence_score
 */
DeprecatedEntity.prototype['prominence_score'] = undefined;

/**
 * @member {module:model/EntitySentiment} sentiment
 */
DeprecatedEntity.prototype['sentiment'] = undefined;

/**
 * The stock_ticker of the entity (might be null)
 * @member {String} stock_ticker
 */
DeprecatedEntity.prototype['stock_ticker'] = undefined;

/**
 * @member {Array.<module:model/DeprecatedEntitySurfaceForm>} surface_forms
 */
DeprecatedEntity.prototype['surface_forms'] = undefined;

/**
 * The entity text
 * @member {String} text
 */
DeprecatedEntity.prototype['text'] = undefined;

/**
 * An array of the entity types
 * @member {Array.<String>} types
 */
DeprecatedEntity.prototype['types'] = undefined;






export default DeprecatedEntity;

