/**
 * AYLIEN News API
 * The AYLIEN News API is the most powerful way of sourcing, searching and syndicating analyzed and enriched news content. It is accessed by sending HTTP requests to our server, which returns information to your client. 
 *
 * The version of the OpenAPI document: 5.0
 * Contact: support@aylien.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Sentiment from './Sentiment';

/**
 * The Sentiments model module.
 * @module model/Sentiments
 * @version 4.6.0
 */
class Sentiments {
    /**
     * Constructs a new <code>Sentiments</code>.
     * @alias module:model/Sentiments
     */
    constructor() { 
        
        Sentiments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Sentiments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Sentiments} obj Optional instance to populate.
     * @return {module:model/Sentiments} The populated <code>Sentiments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sentiments();

            if (data.hasOwnProperty('body')) {
                obj['body'] = Sentiment.constructFromObject(data['body']);

                if ('body' !== 'body') {
                  Object.defineProperty(obj, 'body', {
                    get() {
                      return obj['body'];
                    }
                  });
                }
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = Sentiment.constructFromObject(data['title']);

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
 * @member {module:model/Sentiment} body
 */
Sentiments.prototype['body'] = undefined;

/**
 * @member {module:model/Sentiment} title
 */
Sentiments.prototype['title'] = undefined;






export default Sentiments;

