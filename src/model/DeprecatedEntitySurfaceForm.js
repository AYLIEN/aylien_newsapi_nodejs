/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 4.7
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeprecatedEntitySurfaceForm model module.
 * @module model/DeprecatedEntitySurfaceForm
 * @version 4.7.0
 */
class DeprecatedEntitySurfaceForm {
    /**
     * Constructs a new <code>DeprecatedEntitySurfaceForm</code>.
     * @alias module:model/DeprecatedEntitySurfaceForm
     */
    constructor() { 
        
        DeprecatedEntitySurfaceForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeprecatedEntitySurfaceForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedEntitySurfaceForm} obj Optional instance to populate.
     * @return {module:model/DeprecatedEntitySurfaceForm} The populated <code>DeprecatedEntitySurfaceForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeprecatedEntitySurfaceForm();

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
DeprecatedEntitySurfaceForm.prototype['frequency'] = undefined;

/**
 * The indices of the entity text
 * @member {Array.<Array.<Number>>} indices
 */
DeprecatedEntitySurfaceForm.prototype['indices'] = undefined;

/**
 * The entity text
 * @member {String} text
 */
DeprecatedEntitySurfaceForm.prototype['text'] = undefined;






export default DeprecatedEntitySurfaceForm;

