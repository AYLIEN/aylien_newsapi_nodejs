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
import Entity from './Entity';

/**
 * The Entities model module.
 * @module model/Entities
 * @version 4.1.1
 */
class Entities {
    /**
     * Constructs a new <code>Entities</code>.
     * @alias module:model/Entities
     */
    constructor() { 
        
        Entities.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entities</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entities} obj Optional instance to populate.
     * @return {module:model/Entities} The populated <code>Entities</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entities();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], [Entity]);

                if ('body' !== 'body') {
                  Object.defineProperty(obj, 'body', {
                    get() {
                      return obj['body'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], [Entity]);

                if ('title' !== 'title') {
                  Object.defineProperty(obj, 'title', {
                    get() {
                      return obj['title'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * An array of extracted entities from the story body
 * @member {Array.<module:model/Entity>} body
 */
Entities.prototype['body'] = undefined;

/**
 * An array of extracted entities from the story title
 * @member {Array.<module:model/Entity>} title
 */
Entities.prototype['title'] = undefined;






export default Entities;

