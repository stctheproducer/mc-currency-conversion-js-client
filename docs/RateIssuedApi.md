# StandardCurrencyConversionCalculator.RateIssuedApi

All URIs are relative to *https://sandbox.api.mastercard.com/settlement/currencyrate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**isRateIssuedUsingGET**](RateIssuedApi.md#isRateIssuedUsingGET) | **GET** /conversion-rate-issued | Determine if the settlement rate has been issued.



## isRateIssuedUsingGET

> SettlementRateIssuedRequest isRateIssuedUsingGET(opts)

Determine if the settlement rate has been issued.

Determine if the settlement rate has been issued.

### Example

```javascript
import StandardCurrencyConversionCalculator from 'standard_currency_conversion_calculator';

let apiInstance = new StandardCurrencyConversionCalculator.RateIssuedApi();
let opts = {
  'date': 2020-09-01 // String | The date by which the rate would have been issued.
};
apiInstance.isRateIssuedUsingGET(opts, (error, data, response) => {
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
 **date** | **String**| The date by which the rate would have been issued. | [optional] 

### Return type

[**SettlementRateIssuedRequest**](SettlementRateIssuedRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

