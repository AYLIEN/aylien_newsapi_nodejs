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

/**
 * The Entity model module.
 * @module model/Entity
 * @version 4.1.1
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
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');

                if ('score' !== 'score') {
                  Object.defineProperty(obj, 'score', {
                    get() {
                      return obj['score'];
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
 * The indices of the entity text
 * @member {Array.<Array.<Number>>} indices
 */
Entity.prototype['indices'] = undefined;

/**
 * @member {module:model/EntityLinks} links
 */
Entity.prototype['links'] = undefined;

/**
 * The entity score
 * @member {Number} score
 */
Entity.prototype['score'] = undefined;

/**
 * The entity text
 * @member {String} text
 */
Entity.prototype['text'] = undefined;

/**
 * An array of the dbpedia types
 * @member {Array.<String>} types
 */
Entity.prototype['types'] = undefined;






export default Entity;

