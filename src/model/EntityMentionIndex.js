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

/**
 * The EntityMentionIndex model module.
 * @module model/EntityMentionIndex
 * @version 5.0.1
 */
class EntityMentionIndex {
    /**
     * Constructs a new <code>EntityMentionIndex</code>.
     * @alias module:model/EntityMentionIndex
     * @param end {Number} End index of a single entity mention in the text (counting from 0)
     * @param start {Number} Start index of a single entity mention in the text (counting from 0)
     */
    constructor(end, start) { 
        
        EntityMentionIndex.initialize(this, end, start);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, end, start) { 
        obj['end'] = end;
        obj['start'] = start;
    }

    /**
     * Constructs a <code>EntityMentionIndex</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityMentionIndex} obj Optional instance to populate.
     * @return {module:model/EntityMentionIndex} The populated <code>EntityMentionIndex</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityMentionIndex();

            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Number');

                if ('end' !== 'end') {
                  Object.defineProperty(obj, 'end', {
                    get() {
                      return obj['end'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number');

                if ('start' !== 'start') {
                  Object.defineProperty(obj, 'start', {
                    get() {
                      return obj['start'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * End index of a single entity mention in the text (counting from 0)
 * @member {Number} end
 */
EntityMentionIndex.prototype['end'] = undefined;

/**
 * Start index of a single entity mention in the text (counting from 0)
 * @member {Number} start
 */
EntityMentionIndex.prototype['start'] = undefined;






export default EntityMentionIndex;

