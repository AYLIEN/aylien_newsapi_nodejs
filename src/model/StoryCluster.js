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
 * The StoryCluster model module.
 * @module model/StoryCluster
 * @version 5.2.3
 */
class StoryCluster {
    /**
     * Constructs a new <code>StoryCluster</code>.
     * @alias module:model/StoryCluster
     */
    constructor() { 
        
        StoryCluster.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoryCluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StoryCluster} obj Optional instance to populate.
     * @return {module:model/StoryCluster} The populated <code>StoryCluster</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoryCluster();

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
            if (data.hasOwnProperty('phrases')) {
                obj['phrases'] = ApiClient.convertToType(data['phrases'], ['String']);

                if ('phrases' !== 'phrases') {
                  Object.defineProperty(obj, 'phrases', {
                    get() {
                      return obj['phrases'];
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
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');

                if ('size' !== 'size') {
                  Object.defineProperty(obj, 'size', {
                    get() {
                      return obj['size'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('stories')) {
                obj['stories'] = ApiClient.convertToType(data['stories'], ['Number']);

                if ('stories' !== 'stories') {
                  Object.defineProperty(obj, 'stories', {
                    get() {
                      return obj['stories'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * A unique identification for the cluster
 * @member {Number} id
 */
StoryCluster.prototype['id'] = undefined;

/**
 * Suggested labels for the cluster
 * @member {Array.<String>} phrases
 */
StoryCluster.prototype['phrases'] = undefined;

/**
 * The cluster score
 * @member {Number} score
 */
StoryCluster.prototype['score'] = undefined;

/**
 * Size of the cluster
 * @member {Number} size
 */
StoryCluster.prototype['size'] = undefined;

/**
 * Story ids which are in the cluster
 * @member {Array.<Number>} stories
 */
StoryCluster.prototype['stories'] = undefined;






export default StoryCluster;

