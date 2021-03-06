/**
 * Standard Currency Conversion Calculator
 * This API provides a range of functions to get back currency conversion rates and amounts based on current Mastercard currency conversion values.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apisupport@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Currency model module.
 * @module model/Currency
 * @version 1.0.0
 */
class Currency {
    /**
     * Constructs a new <code>Currency</code>.
     * @alias module:model/Currency
     */
    constructor() { 
        
        Currency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Currency} obj Optional instance to populate.
     * @return {module:model/Currency} The populated <code>Currency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Currency();

            if (data.hasOwnProperty('alphaCd')) {
                obj['alphaCd'] = ApiClient.convertToType(data['alphaCd'], 'String');
            }
            if (data.hasOwnProperty('currNam')) {
                obj['currNam'] = ApiClient.convertToType(data['currNam'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Alpha code for the currency.
 * @member {String} alphaCd
 */
Currency.prototype['alphaCd'] = undefined;

/**
 * The full name of the currency.
 * @member {String} currNam
 */
Currency.prototype['currNam'] = undefined;






export default Currency;

