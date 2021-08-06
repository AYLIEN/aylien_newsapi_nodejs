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

/**
 * The Summary model module.
 * @module model/Summary
 * @version 4.6.0
 */
class Summary {
    /**
     * Constructs a new <code>Summary</code>.
     * @alias module:model/Summary
     */
    constructor() { 
        
        Summary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Summary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Summary} obj Optional instance to populate.
     * @return {module:model/Summary} The populated <code>Summary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Summary();

            if (data.hasOwnProperty('sentences')) {
                obj['sentences'] = ApiClient.convertToType(data['sentences'], ['String']);

                if ('sentences' !== 'sentences') {
                  Object.defineProperty(obj, 'sentences', {
                    get() {
                      return obj['sentences'];
                    }
                  });
                }
            }
        }
        return obj;
    }


}

/**
 * An array of the suggested summary sentences
 * @member {Array.<String>} sentences
 */
Summary.prototype['sentences'] = undefined;






export default Summary;

