/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.1.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Location from './Location';
import RepresentativeStory from './RepresentativeStory';

/**
 * The Cluster model module.
 * @module model/Cluster
 * @version 5.1.0
 */
class Cluster {
    /**
     * Constructs a new <code>Cluster</code>.
     * @alias module:model/Cluster
     */
    constructor() { 
        
        Cluster.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Cluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Cluster} obj Optional instance to populate.
     * @return {module:model/Cluster} The populated <code>Cluster</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Cluster();

            if (data.hasOwnProperty('earliest_story')) {
                obj['earliest_story'] = ApiClient.convertToType(data['earliest_story'], 'Date');

                if ('earliest_story' !== 'earliestStory') {
                  Object.defineProperty(obj, 'earliestStory', {
                    get() {
                      return obj['earliest_story'];
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
            if (data.hasOwnProperty('latest_story')) {
                obj['latest_story'] = ApiClient.convertToType(data['latest_story'], 'Date');

                if ('latest_story' !== 'latestStory') {
                  Object.defineProperty(obj, 'latestStory', {
                    get() {
                      return obj['latest_story'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = Location.constructFromObject(data['location']);

                if ('location' !== 'location') {
                  Object.defineProperty(obj, 'location', {
                    get() {
                      return obj['location'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('representative_story')) {
                obj['representative_story'] = RepresentativeStory.constructFromObject(data['representative_story']);

                if ('representative_story' !== 'representativeStory') {
                  Object.defineProperty(obj, 'representativeStory', {
                    get() {
                      return obj['representative_story'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('story_count')) {
                obj['story_count'] = ApiClient.convertToType(data['story_count'], 'Number');

                if ('story_count' !== 'storyCount') {
                  Object.defineProperty(obj, 'storyCount', {
                    get() {
                      return obj['story_count'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Date');

                if ('time' !== 'time') {
                  Object.defineProperty(obj, 'time', {
                    get() {
                      return obj['time'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * Publication date of the earliest story in cluster
 * @member {Date} earliest_story
 */
Cluster.prototype['earliest_story'] = undefined;

/**
 * ID of the cluster which is a unique identification
 * @member {Number} id
 */
Cluster.prototype['id'] = undefined;

/**
 * Publication date of the latest story in cluster
 * @member {Date} latest_story
 */
Cluster.prototype['latest_story'] = undefined;

/**
 * @member {module:model/Location} location
 */
Cluster.prototype['location'] = undefined;

/**
 * @member {module:model/RepresentativeStory} representative_story
 */
Cluster.prototype['representative_story'] = undefined;

/**
 * Number of stories associated with the cluster
 * @member {Number} story_count
 */
Cluster.prototype['story_count'] = undefined;

/**
 * Time of the event
 * @member {Date} time
 */
Cluster.prototype['time'] = undefined;






export default Cluster;

