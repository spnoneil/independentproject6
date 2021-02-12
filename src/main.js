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
    console.log(response) // gets full object!
    $('#output').text(`${response.conversion_rates}`)
  } else {
    $('#output').text(`${response}`)
  }
}

async function apiCall(baseCurrency) {
  const response = await CurrencyService.getCurrency(baseCurrency);
  console.log(response)
  getCurrency(response);
}

$(document).ready(function() {
  $("#submitBtn").click(function() {
    let baseCurrency = $("#baseCurrency").val();
    apiCall(baseCurrency);
  });
})