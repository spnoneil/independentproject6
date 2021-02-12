import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js'

// function clearForm() {
//   $("")
// }

function getCurrency(response) { //MATH GO HERE?
  if (response.result) {
    const base = $('#baseCurrency').val();
    // const conversion = $('#conversionCurrency').val();
    const currencyArr = Object.entries(response.conversion_rates)
    for (let i = 0; i < currencyArr.length; i++)
      if (currencyArr[i][0] === base) {
        console.log(currencyArr[i])
      }
  } else {
    $('#output').text(`${response}`)
  }
}

async function apiCall(baseCurrency) {
  const response = await CurrencyService.getCurrency(baseCurrency);
  getCurrency(response);
}

$(document).ready(function() {
  $("#submitBtn").click(function() {
    let baseCurrency = $("#baseCurrency").val();
    apiCall(baseCurrency);
  });
})