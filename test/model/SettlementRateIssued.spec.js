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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StandardCurrencyConversionCalculator);
  }
}(this, function(expect, StandardCurrencyConversionCalculator) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StandardCurrencyConversionCalculator.SettlementRateIssued();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SettlementRateIssued', function() {
    it('should create an instance of SettlementRateIssued', function() {
      // uncomment below and update the code to test SettlementRateIssued
      //var instane = new StandardCurrencyConversionCalculator.SettlementRateIssued();
      //expect(instance).to.be.a(StandardCurrencyConversionCalculator.SettlementRateIssued);
    });

    it('should have the property rateIssued (base name: "rateIssued")', function() {
      // uncomment below and update the code to test the property rateIssued
      //var instance = new StandardCurrencyConversionCalculator.SettlementRateIssued();
      //expect(instance).to.be();
    });

  });

}));
