async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    // Ensure amount and currencies are valid
    if (!amount || amount <= 0 || !fromCurrency || !toCurrency) {
        alert('Please enter a valid amount and select currencies.');
        return;
    }

    try {
        // Fetch exchange rates from API
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency];
        
        // Calculate and display converted amount
        const convertedAmount = amount * exchangeRate;
        document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
        
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch exchange rates. Please try again later.');
    }
}
