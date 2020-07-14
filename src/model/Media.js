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
import MediaFormat from './MediaFormat';
import MediaType from './MediaType';

/**
 * The Media model module.
 * @module model/Media
 * @version 4.1.0
 */
class Media {
    /**
     * Constructs a new <code>Media</code>.
     * @alias module:model/Media
     */
    constructor() { 
        
        Media.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Media();

            if (data.hasOwnProperty('content_length')) {
                obj['content_length'] = ApiClient.convertToType(data['content_length'], 'Number');

                if ('content_length' !== 'contentLength') {
                  Object.defineProperty(obj, 'contentLength', {
                    get() {
                      return obj['content_length'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = MediaFormat.constructFromObject(data['format']);

                if ('format' !== 'format') {
                  Object.defineProperty(obj, 'format', {
                    get() {
                      return obj['format'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');

                if ('height' !== 'height') {
                  Object.defineProperty(obj, 'height', {
                    get() {
                      return obj['height'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MediaType.constructFromObject(data['type']);

                if ('type' !== 'type') {
                  Object.defineProperty(obj, 'type', {
                    get() {
                      return obj['type'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');

                if ('url' !== 'url') {
                  Object.defineProperty(obj, 'url', {
                    get() {
                      return obj['url'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');

                if ('width' !== 'width') {
                  Object.defineProperty(obj, 'width', {
                    get() {
                      return obj['width'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * The content length of media
 * @member {Number} content_length
 */
Media.prototype['content_length'] = undefined;

/**
 * @member {module:model/MediaFormat} format
 */
Media.prototype['format'] = undefined;

/**
 * The height of media
 * @member {Number} height
 */
Media.prototype['height'] = undefined;

/**
 * @member {module:model/MediaType} type
 */
Media.prototype['type'] = undefined;

/**
 * A URL which points to the media file
 * @member {String} url
 */
Media.prototype['url'] = undefined;

/**
 * The width of media
 * @member {Number} width
 */
Media.prototype['width'] = undefined;






export default Media;

