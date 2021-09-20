# StandardCurrencyConversionCalculator.CurrenciesApi

All URIs are relative to *https://sandbox.api.mastercard.com/settlement/currencyrate*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrencyRateDataUsingGET**](CurrenciesApi.md#getCurrencyRateDataUsingGET) | **GET** /settlement-currencies | getCurrencyRateData



## getCurrencyRateDataUsingGET

> SettlementCurrencyRequest getCurrencyRateDataUsingGET()

getCurrencyRateData

List of supported currencies.

### Example

```javascript
import StandardCurrencyConversionCalculator from 'standard_currency_conversion_calculator';

let apiInstance = new StandardCurrencyConversionCalculator.CurrenciesApi();
apiInstance.getCurrencyRateDataUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SettlementCurrencyRequest**](SettlementCurrencyRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

