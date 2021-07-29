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
import Location from './Location';
import Rankings from './Rankings';
import Scope from './Scope';

/**
 * The Source model module.
 * @module model/Source
 * @version 4.5.0
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * @alias module:model/Source
     */
    constructor() { 
        
        Source.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('home_page_url')) {
                obj['home_page_url'] = ApiClient.convertToType(data['home_page_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('links_in_count')) {
                obj['links_in_count'] = ApiClient.convertToType(data['links_in_count'], 'Number');
            }
            if (data.hasOwnProperty('locations')) {
                obj['locations'] = ApiClient.convertToType(data['locations'], [Location]);
            }
            if (data.hasOwnProperty('logo_url')) {
                obj['logo_url'] = ApiClient.convertToType(data['logo_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rankings')) {
                obj['rankings'] = Rankings.constructFromObject(data['rankings']);
            }
            if (data.hasOwnProperty('scopes')) {
                obj['scopes'] = ApiClient.convertToType(data['scopes'], [Scope]);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A general explanation about the source
 * @member {String} description
 */
Source.prototype['description'] = undefined;

/**
 * The domain name of the source which is extracted from the source URL
 * @member {String} domain
 */
Source.prototype['domain'] = undefined;

/**
 * The home page URL of the source
 * @member {String} home_page_url
 */
Source.prototype['home_page_url'] = undefined;

/**
 * The source id which is a unique value
 * @member {Number} id
 */
Source.prototype['id'] = undefined;

/**
 * The number of websites that link to the source
 * @member {Number} links_in_count
 */
Source.prototype['links_in_count'] = undefined;

/**
 * The source locations which are tend to be the physical locations of the source, e.g. BBC headquarter is located in London. 
 * @member {Array.<module:model/Location>} locations
 */
Source.prototype['locations'] = undefined;

/**
 * A URL which points to the source logo
 * @member {String} logo_url
 */
Source.prototype['logo_url'] = undefined;

/**
 * The source name
 * @member {String} name
 */
Source.prototype['name'] = undefined;

/**
 * @member {module:model/Rankings} rankings
 */
Source.prototype['rankings'] = undefined;

/**
 * The source scopes which is tend to be scope locations of the source, e.g. BBC scopes is international. 
 * @member {Array.<module:model/Scope>} scopes
 */
Source.prototype['scopes'] = undefined;

/**
 * The title of the home page URL
 * @member {String} title
 */
Source.prototype['title'] = undefined;






export default Source;

