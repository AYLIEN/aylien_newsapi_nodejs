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
import EntityMention from './EntityMention';

/**
 * The EntitySurfaceForm model module.
 * @module model/EntitySurfaceForm
 * @version 5.0.1
 */
class EntitySurfaceForm {
    /**
     * Constructs a new <code>EntitySurfaceForm</code>.
     * @alias module:model/EntitySurfaceForm
     */
    constructor() { 
        
        EntitySurfaceForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntitySurfaceForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntitySurfaceForm} obj Optional instance to populate.
     * @return {module:model/EntitySurfaceForm} The populated <code>EntitySurfaceForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntitySurfaceForm();

            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');

                if ('frequency' !== 'frequency') {
                  Object.defineProperty(obj, 'frequency', {
                    get() {
                      return obj['frequency'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('mentions')) {
                obj['mentions'] = ApiClient.convertToType(data['mentions'], [EntityMention]);

                if ('mentions' !== 'mentions') {
                  Object.defineProperty(obj, 'mentions', {
                    get() {
                      return obj['mentions'];
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
        }
        return obj;
    }


}

/**
 * Amount of entity surface form mentions in the article
 * @member {Number} frequency
 */
EntitySurfaceForm.prototype['frequency'] = undefined;

/**
 * Mentions of the entity text
 * @member {Array.<module:model/EntityMention>} mentions
 */
EntitySurfaceForm.prototype['mentions'] = undefined;

/**
 * The entity text
 * @member {String} text
 */
EntitySurfaceForm.prototype['text'] = undefined;






export default EntitySurfaceForm;

