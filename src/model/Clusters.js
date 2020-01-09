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
import Cluster from './Cluster';

/**
 * The Clusters model module.
 * @module model/Clusters
 * @version 3.0.0
 */
class Clusters {
    /**
     * Constructs a new <code>Clusters</code>.
     * @alias module:model/Clusters
     */
    constructor() { 
        
        Clusters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Clusters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Clusters} obj Optional instance to populate.
     * @return {module:model/Clusters} The populated <code>Clusters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Clusters();

            if (data.hasOwnProperty('cluster_count')) {
                obj['cluster_count'] = ApiClient.convertToType(data['cluster_count'], 'Number');
            }
            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], [Cluster]);
            }
            if (data.hasOwnProperty('next_page_cursor')) {
                obj['next_page_cursor'] = ApiClient.convertToType(data['next_page_cursor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total number of clusters
 * @member {Number} cluster_count
 */
Clusters.prototype['cluster_count'] = undefined;

/**
 * An array of clusters
 * @member {Array.<module:model/Cluster>} clusters
 */
Clusters.prototype['clusters'] = undefined;

/**
 * The next page cursor
 * @member {String} next_page_cursor
 */
Clusters.prototype['next_page_cursor'] = undefined;






export default Clusters;
