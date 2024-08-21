document.getElementById('currencyForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const host = 'api.frankfurter.app';
    let EURamount = document.getElementById('amount').value;
    let toCur = document.getElementById('currency').value;

    try {
        let response = await fetch(`https://${host}/latest?amount=${EURamount}&to=${toCur}`);
        let data = await response.json();
        let formattedAmount = data.rates[toCur].toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        
        document.getElementById('result').innerText = `${EURamount} EUR sind zurzeit ${formattedAmount} ${toCur}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Es gab einen Fehler bei der Umrechnung.';
        console.error('Fehler:', error);
    }
});
    
