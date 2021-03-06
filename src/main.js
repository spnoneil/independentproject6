import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/currency-service.js';

function getExchange(response) {
  if (response.result) {
    const amount = $('#currencyAmount').val();
    const conversion = $('#conversionCurrency').val();
    const currencyArr = Object.entries(response.conversion_rates);
    for (let i = 0; i < currencyArr.length; i++)
      if (currencyArr[i][0] === conversion) {
        $('#output').text(`That'll get ya ${amount * currencyArr[i][1]} ${conversion}, there, pal!`);
        return;
      } else {
        $('#output').text(`${conversion} ain't real monies, man!`);
      }
  }
}

async function apiCall(baseCurrency) {
  const response = await CurrencyService.getCurrency(baseCurrency);
  if (response["error-type"] === "invalid-key") {
    $('#output').text("There seems to be something wrong with your API key. Please check to ensure it's been applied correctly!");
  } else if (response["error-type"] === "unsupported-code") {
    $('#output').text(baseCurrency + ' is not a real moneys, ya dingus! Try a correct 3 letter code!');
  }
  return getExchange(response);
}

function addTableClick() {
  $('tr').click(function() {
    let tableRows = this.getElementsByTagName('td');
    $('#baseCurrency').val(tableRows[0].outerText);
  });
}

$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    let baseCurrency = $("#baseCurrency").val();
    apiCall(baseCurrency);
  });
  addTableClick();
});