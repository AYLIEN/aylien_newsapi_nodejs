/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.2.3
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntitySentiment from './EntitySentiment';
import EntitySurfaceForm from './EntitySurfaceForm';

/**
 * The EntityInText model module.
 * @module model/EntityInText
 * @version 5.2.3
 */
class EntityInText {
    /**
     * Constructs a new <code>EntityInText</code>.
     * @alias module:model/EntityInText
     */
    constructor() { 
        
        EntityInText.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityInText</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityInText} obj Optional instance to populate.
     * @return {module:model/EntityInText} The populated <code>EntityInText</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityInText();

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
        }
        return obj;
    }


}

/**
 * @member {module:model/EntitySentiment} sentiment
 */
EntityInText.prototype['sentiment'] = undefined;

/**
 * @member {Array.<module:model/EntitySurfaceForm>} surface_forms
 */
EntityInText.prototype['surface_forms'] = undefined;






export default EntityInText;

