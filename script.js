// Demo API key for testing
const API_KEY = "demo"; // Replace "demo" with your own Alpha Vantage API key for unlimited requests

document.getElementById("get-stock").addEventListener("click", () => {
    const symbol = document.getElementById("stock-symbol").value.toUpperCase();

    if(!symbol) {
        alert("Please enter a stock symbol!");
        return;
    }

    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const quote = data["Global Quote"];
            if (quote && quote["05. price"]) {
                document.getElementById("stock-name").textContent = quote["01. symbol"];
                document.getElementById("price").textContent = `$${parseFloat(quote["05. price"]).toFixed(2)}`;
                document.getElementById("change").textContent = quote["10. change percent"];
            } else {
                document.getElementById("stock-name").textContent = "Invalid Symbol or API limit reached";
                document.getElementById("price").textContent = "";
                document.getElementById("change").textContent = "";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("stock-name").textContent = "Error fetching data";
            document.getElementById("price").textContent = "";
            document.getElementById("change").textContent = "";
        });
});
