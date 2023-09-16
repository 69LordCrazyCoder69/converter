function convert() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  
  // Replace these with your own conversion rates
  const conversionRates = {
    Jirr: 0.5,
    Vodra: 1,
    Para: 5,
    // Add more conversion rates for different currencies
  };

  const convertedAmount = amount * conversionRates[toCurrency] / conversionRates[fromCurrency];
  document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
