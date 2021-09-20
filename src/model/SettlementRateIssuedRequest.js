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
import SettlementRateIssued from './SettlementRateIssued';

/**
 * The SettlementRateIssuedRequest model module.
 * @module model/SettlementRateIssuedRequest
 * @version 1.0.0
 */
class SettlementRateIssuedRequest {
    /**
     * Constructs a new <code>SettlementRateIssuedRequest</code>.
     * @alias module:model/SettlementRateIssuedRequest
     */
    constructor() { 
        
        SettlementRateIssuedRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SettlementRateIssuedRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SettlementRateIssuedRequest} obj Optional instance to populate.
     * @return {module:model/SettlementRateIssuedRequest} The populated <code>SettlementRateIssuedRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SettlementRateIssuedRequest();

            if (data.hasOwnProperty('data')) {
                obj['data'] = SettlementRateIssued.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SettlementRateIssued} data
 */
SettlementRateIssuedRequest.prototype['data'] = undefined;

/**
 * The date and time the API is being called in GMT.
 * @member {String} date
 */
SettlementRateIssuedRequest.prototype['date'] = undefined;

/**
 * The description of the API being called.
 * @member {String} description
 */
SettlementRateIssuedRequest.prototype['description'] = undefined;

/**
 * The name of the service being requested.
 * @member {String} name
 */
SettlementRateIssuedRequest.prototype['name'] = undefined;






export default SettlementRateIssuedRequest;

