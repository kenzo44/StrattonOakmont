var key = "QQ7XUVIRA7DA3I9M";

var symbol = "MSFT";
var interval = "5min";

var url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=" + interval + "&apikey=" + key;


$.ajax({
    url: url,
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function (data) {

        var symbol = data['Meta Data']['2. Symbol']
        
        var lastRefreshed = data['Meta Data']['3. Last Refreshed']
        
        var lastTradePriceOnly = data['Time Series (5min)'][lastRefreshed]['4. close']
        
        var lastVolume = data['Time Series (5min)'][lastRefreshed]['5. volume']

        
    
        console.log(symbol);
        console.log(lastRefreshed);
        console.log(lastTradePriceOnly);
        console.log(lastVolume);
    }
});


