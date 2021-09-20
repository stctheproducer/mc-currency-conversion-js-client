# StandardCurrencyConversionCalculator.ConversionRateApi

All URIs are relative to *https://sandbox.api.mastercard.com/settlement/currencyrate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConversionDetailUsingGET**](ConversionRateApi.md#getConversionDetailUsingGET) | **GET** /conversion-rate | Get the currency conversion rate details.



## getConversionDetailUsingGET

> ConversionRateRequest getConversionDetailUsingGET(fxDate, transCurr, crdhldBillCurr, transAmt, opts)

Get the currency conversion rate details.

Get the currency conversion rate details.

### Example

```javascript
import StandardCurrencyConversionCalculator from 'standard_currency_conversion_calculator';

let apiInstance = new StandardCurrencyConversionCalculator.ConversionRateApi();
let fxDate = 2020-09-01; // String | Date of the requested FX rates.
let transCurr = ALL; // String | Currency of the transaction.
let crdhldBillCurr = DZD; // String | Cardholder billing currency.
let transAmt = 23; // Number | Amount in the transaction currency.
let opts = {
  'bankFee': 5 // Number | Additional fees imposed by the bank.
};
apiInstance.getConversionDetailUsingGET(fxDate, transCurr, crdhldBillCurr, transAmt, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fxDate** | **String**| Date of the requested FX rates. | 
 **transCurr** | **String**| Currency of the transaction. | 
 **crdhldBillCurr** | **String**| Cardholder billing currency. | 
 **transAmt** | **Number**| Amount in the transaction currency. | 
 **bankFee** | **Number**| Additional fees imposed by the bank. | [optional] 

### Return type

[**ConversionRateRequest**](ConversionRateRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

