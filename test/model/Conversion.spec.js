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
    instance = new StandardCurrencyConversionCalculator.Conversion();
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

  describe('Conversion', function() {
    it('should create an instance of Conversion', function() {
      // uncomment below and update the code to test Conversion
      //var instane = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be.a(StandardCurrencyConversionCalculator.Conversion);
    });

    it('should have the property conversionRate (base name: "conversionRate")', function() {
      // uncomment below and update the code to test the property conversionRate
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property crdhldBillAmt (base name: "crdhldBillAmt")', function() {
      // uncomment below and update the code to test the property crdhldBillAmt
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property transAmt (base name: "transAmt")', function() {
      // uncomment below and update the code to test the property transAmt
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property fxDate (base name: "fxDate")', function() {
      // uncomment below and update the code to test the property fxDate
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property transCurr (base name: "transCurr")', function() {
      // uncomment below and update the code to test the property transCurr
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property crdhldBillCurr (base name: "crdhldBillCurr")', function() {
      // uncomment below and update the code to test the property crdhldBillCurr
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property bankFee (base name: "bankFee")', function() {
      // uncomment below and update the code to test the property bankFee
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "errorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "errorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instance = new StandardCurrencyConversionCalculator.Conversion();
      //expect(instance).to.be();
    });

  });

}));
