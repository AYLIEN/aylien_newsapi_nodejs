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
 * The Author model module.
 * @module model/Author
 * @version 5.2.3
 */
class Author {
    /**
     * Constructs a new <code>Author</code>.
     * @alias module:model/Author
     */
    constructor() { 
        
        Author.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Author} obj Optional instance to populate.
     * @return {module:model/Author} The populated <code>Author</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Author();

            if (data.hasOwnProperty('avatar_url')) {
                obj['avatar_url'] = ApiClient.convertToType(data['avatar_url'], 'String');

                if ('avatar_url' !== 'avatarUrl') {
                  Object.defineProperty(obj, 'avatarUrl', {
                    get() {
                      return obj['avatar_url'];
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                if ('name' !== 'name') {
                  Object.defineProperty(obj, 'name', {
                    get() {
                      return obj['name'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * A URL which points to the author avatar
 * @member {String} avatar_url
 */
Author.prototype['avatar_url'] = undefined;

/**
 * A unique identification for the author
 * @member {Number} id
 */
Author.prototype['id'] = undefined;

/**
 * The extracted author full name
 * @member {String} name
 */
Author.prototype['name'] = undefined;






export default Author;

