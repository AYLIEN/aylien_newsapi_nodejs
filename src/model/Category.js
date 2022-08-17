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
import CategoryLinks from './CategoryLinks';
import CategoryTaxonomy from './CategoryTaxonomy';

/**
 * The Category model module.
 * @module model/Category
 * @version 5.1.1
 */
class Category {
    /**
     * Constructs a new <code>Category</code>.
     * @alias module:model/Category
     */
    constructor() { 
        
        Category.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Category</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Category} obj Optional instance to populate.
     * @return {module:model/Category} The populated <code>Category</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Category();

            if (data.hasOwnProperty('confident')) {
                obj['confident'] = ApiClient.convertToType(data['confident'], 'Boolean');

                if ('confident' !== 'confident') {
                  Object.defineProperty(obj, 'confident', {
                    get() {
                      return obj['confident'];
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
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');

                if ('label' !== 'label') {
                  Object.defineProperty(obj, 'label', {
                    get() {
                      return obj['label'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');

                if ('level' !== 'level') {
                  Object.defineProperty(obj, 'level', {
                    get() {
                      return obj['level'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CategoryLinks.constructFromObject(data['links']);

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
            if (data.hasOwnProperty('taxonomy')) {
                obj['taxonomy'] = CategoryTaxonomy.constructFromObject(data['taxonomy']);

                if ('taxonomy' !== 'taxonomy') {
                  Object.defineProperty(obj, 'taxonomy', {
                    get() {
                      return obj['taxonomy'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * It defines whether the extracted category is confident or not
 * @member {Boolean} confident
 */
Category.prototype['confident'] = undefined;

/**
 * The ID of the category
 * @member {String} id
 */
Category.prototype['id'] = undefined;

/**
 * The label of the category
 * @member {String} label
 */
Category.prototype['label'] = undefined;

/**
 * The level of the category
 * @member {Number} level
 */
Category.prototype['level'] = undefined;

/**
 * @member {module:model/CategoryLinks} links
 */
Category.prototype['links'] = undefined;

/**
 * The score of the category
 * @member {Number} score
 */
Category.prototype['score'] = undefined;

/**
 * @member {module:model/CategoryTaxonomy} taxonomy
 */
Category.prototype['taxonomy'] = undefined;






export default Category;

