const API_KEY = "demo"; // replace with your personal key if needed

let stockChart; // global variable for chart instance

document.getElementById("get-stock").addEventListener("click", () => {
    const symbol = document.getElementById("stock-symbol").value.toUpperCase();
    if(!symbol) return alert("Enter a stock symbol!");

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const timeSeries = data["Time Series (Daily)"];
            if(!timeSeries) return alert("Invalid symbol or API limit reached");

            // Get last 5 days
            const dates = Object.keys(timeSeries).slice(0, 5).reverse();
            const prices = dates.map(date => parseFloat(timeSeries[date]["4. close"]));

            // Update stock info
            document.getElementById("stock-name").textContent = symbol;
            document.getElementById("price").textContent = `$${prices[prices.length - 1].toFixed(2)}`;
            document.getElementById("change").textContent = `Change: ${(prices[prices.length - 1] - prices[prices.length - 2]).toFixed(2)}`;

            // Plot chart
            const ctx = document.getElementById("stockChart").getContext("2d");
            if(stockChart) stockChart.destroy(); // destroy old chart
            stockChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: symbol + ' Closing Prices',
                        data: prices,
                        borderColor: 'blue',
                        fill: false,
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: { beginAtZero: false }
                    }
                }
            });
        })
        .catch(err => console.error(err));
});
