const API_KEY = "YOUR_API_KEY";
async function getStockData(symbol) {
  const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
  const data = await res.json();
  const quote = data["Global Quote"];
  document.getElementById("stock-name").textContent = quote["01. symbol"];
  document.getElementById("price").textContent = `$${quote["05. price"]}`;
  document.getElementById("change").textContent = quote["10. change percent"];
}
setInterval(() => getStockData("AAPL"), 5000);

