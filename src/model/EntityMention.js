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
import EntityMentionIndex from './EntityMentionIndex';
import EntitySentiment from './EntitySentiment';

/**
 * The EntityMention model module.
 * @module model/EntityMention
 * @version 4.7.4
 */
class EntityMention {
    /**
     * Constructs a new <code>EntityMention</code>.
     * @alias module:model/EntityMention
     */
    constructor() { 
        
        EntityMention.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EntityMention</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EntityMention} obj Optional instance to populate.
     * @return {module:model/EntityMention} The populated <code>EntityMention</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EntityMention();

            if (data.hasOwnProperty('index')) {
                obj['index'] = EntityMentionIndex.constructFromObject(data['index']);

                if ('index' !== 'index') {
                  Object.defineProperty(obj, 'index', {
                    get() {
                      return obj['index'];
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
        }
        return obj;
    }


}

/**
 * @member {module:model/EntityMentionIndex} index
 */
EntityMention.prototype['index'] = undefined;

/**
 * @member {module:model/EntitySentiment} sentiment
 */
EntityMention.prototype['sentiment'] = undefined;






export default EntityMention;

