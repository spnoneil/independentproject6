import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

// function clearForm() {
//   $("#baseCurrency, #conversionCurrency, #currencyAmount").val("");
// }

function getExchange(response) {
  if (response.result) {
    const amount = $('#currencyAmount').val();
    const conversion = $('#conversionCurrency').val();
    const currencyArr = Object.entries(response.conversion_rates);
    for (let i = 0; i < currencyArr.length; i++)
      if (currencyArr[i][0] === conversion) {
        $('#output').text(`That'll get ya ${amount * currencyArr[i][1]} ${conversion}, there, pal!`);
      } else {
        $('#output').text(response.status);
      }
  } else {
    $('#output').text(`${response.status}`);
  }
}

async function apiCall(baseCurrency) {
  const response = await CurrencyService.getCurrency(baseCurrency);
  console.log(response);
  if (response["error-type"] === "unsupported-code") {
    $('#output').text(baseCurrency + ' is not a real moneys, ya dingus! Try a correct 3 letter code!');
  }
  return getExchange(response);
}

$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault()
    let baseCurrency = $("#baseCurrency").val();
    apiCall(baseCurrency);
    // clearForm();
  });
});