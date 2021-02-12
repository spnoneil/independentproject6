import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js'

// function clearForm() {
//   $("")
// }

function getExchange(response) { //MATH GO HERE?
  if (response.result) {
    const amount = $('#currencyAmount').val();
    const conversion = $('#conversionCurrency').val();
    const currencyArr = Object.entries(response.conversion_rates)
    for (let i = 0; i < currencyArr.length; i++)
      if (currencyArr[i][0] === conversion) {
        $('#output').text(amount * currencyArr[i][1]);
      }
  } else {
    $('#output').text(`${response}`)
  }
}

async function apiCall(baseCurrency) {
  const response = await CurrencyService.getCurrency(baseCurrency);
  return getExchange(response);
}

$(document).ready(function() {
  $("#submitBtn").click(function() {
    let baseCurrency = $("#baseCurrency").val();
    apiCall(baseCurrency);

  });
})