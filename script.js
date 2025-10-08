<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real-Time Stock Ticker</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Real-Time Stock Ticker</h1>

    <input type="text" id="stock-symbol" placeholder="Enter stock symbol e.g., AAPL">
    <button id="get-stock">Get Stock Price</button>

    <div class="result">
      <h2 id="stock-name"></h2>
      <p id="price"></p>
      <p id="change"></p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
