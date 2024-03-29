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

/**
 * The CategoryLinks model module.
 * @module model/CategoryLinks
 * @version 5.2.3
 */
class CategoryLinks {
    /**
     * Constructs a new <code>CategoryLinks</code>.
     * @alias module:model/CategoryLinks
     */
    constructor() { 
        
        CategoryLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CategoryLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CategoryLinks} obj Optional instance to populate.
     * @return {module:model/CategoryLinks} The populated <code>CategoryLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CategoryLinks();

            if (data.hasOwnProperty('parent')) {
                obj['parent'] = ApiClient.convertToType(data['parent'], 'String');

                if ('parent' !== 'parent') {
                  Object.defineProperty(obj, 'parent', {
                    get() {
                      return obj['parent'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], ['String']);

                if ('parents' !== 'parents') {
                  Object.defineProperty(obj, 'parents', {
                    get() {
                      return obj['parents'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = ApiClient.convertToType(data['self'], 'String');

                if ('self' !== 'self') {
                  Object.defineProperty(obj, 'self', {
                    get() {
                      return obj['self'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * A URL pointing to the parent category
 * @member {String} parent
 */
CategoryLinks.prototype['parent'] = undefined;

/**
 * A collection of URLs pointing to the category parents
 * @member {Array.<String>} parents
 */
CategoryLinks.prototype['parents'] = undefined;

/**
 * A URL pointing to the category
 * @member {String} self
 */
CategoryLinks.prototype['self'] = undefined;






export default CategoryLinks;

