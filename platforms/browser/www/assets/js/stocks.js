var key = "QQ7XUVIRA7DA3I9M";

var msftsymbol = "MSFT";
var interval = "5min";

var msftURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + msftsymbol + "&interval=" + interval + "&apikey=" + key;


//Add commas to number
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
}

//Very poor method to get all the data...but its a quick hack. :)

function msft() {
    $.ajax({
        url: msftURL,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {

            var symbol = data['Meta Data']['2. Symbol']

            var lastRefreshed = data['Meta Data']['3. Last Refreshed']

            var lastTradePriceOnly = data['Time Series (5min)'][lastRefreshed]['4. close']

            var lastVolume = data['Time Series (5min)'][lastRefreshed]['5. volume']

            $('#rDate').html(lastRefreshed);
            $('#stockSymbol').html(symbol);
            $('#stockPrice').html(lastTradePriceOnly);
            $('#stockVolume').html(numberWithCommas(lastVolume));
        }
    });
}

msft();




var symbolT = "TSLA";
var intervalT = "5min";

var URLT = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbolT + "&interval=" + intervalT + "&apikey=" + key;

function tsla() {
    $.ajax({
        url: URLT,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {

            var symbolT = data['Meta Data']['2. Symbol']

            var lastRefreshedT = data['Meta Data']['3. Last Refreshed']

            var lastTradePriceOnlyT = data['Time Series (5min)'][lastRefreshedT]['4. close']

            var lastVolumeT = data['Time Series (5min)'][lastRefreshedT]['5. volume']

            $('#stockSymbolT').html(symbolT);
            $('#stockPriceT').html(lastTradePriceOnlyT);
            $('#stockVolumeT').html(numberWithCommas(lastVolumeT));
        }
    });
}

tsla();


var symbolA = "AAPL";
var intervalA = "5min";

var URLA = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbolA + "&interval=" + intervalA + "&apikey=" + key;

function apple() {
    $.ajax({
        url: URLA,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {

            var symbolA = data['Meta Data']['2. Symbol']

            var lastRefreshedA = data['Meta Data']['3. Last Refreshed']

            var lastTradePriceOnlyA = data['Time Series (5min)'][lastRefreshedA]['4. close']

            var lastVolumeA = data['Time Series (5min)'][lastRefreshedA]['5. volume']

            $('#stockSymbolA').html(symbolA);
            $('#stockPriceA').html(lastTradePriceOnlyA);
            $('#stockVolumeA').html(numberWithCommas(lastVolumeA));
        }
    });
}

apple();



var symbolG = "GOOGL";
var intervalG = "5min";

var URLG = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbolG + "&interval=" + intervalG + "&apikey=" + key;

function google() {
    $.ajax({
        url: URLG,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {

            var symbolG = data['Meta Data']['2. Symbol']

            var lastRefreshedG = data['Meta Data']['3. Last Refreshed']

            var lastTradePriceOnlyG = data['Time Series (5min)'][lastRefreshedG]['4. close']

            var lastVolumeG = data['Time Series (5min)'][lastRefreshedG]['5. volume']

            $('#stockSymbolG').html(symbolG);
            $('#stockPriceG').html(lastTradePriceOnlyG);
            $('#stockVolumeG').html(numberWithCommas(lastVolumeG));
        }
    });
}

google();



var symbolF = "RACE";
var intervalF = "5min";

var URLF = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbolF + "&interval=" + intervalF + "&apikey=" + key;

function ferrari() {
    $.ajax({
        url: URLG,
        dataType: 'json',
        type: 'get',
        cache: false,
        success: function (data) {

            var symbolF = data['Meta Data']['2. Symbol']

            var lastRefreshedF = data['Meta Data']['3. Last Refreshed']

            var lastTradePriceOnlyF = data['Time Series (5min)'][lastRefreshedF]['4. close']

            var lastVolumeF = data['Time Series (5min)'][lastRefreshedF]['5. volume']

            $('#stockSymbolF').html(symbolF);
            $('#stockPriceF').html(lastTradePriceOnlyF);
            $('#stockVolumeF').html(numberWithCommas(lastVolumeF));
        }
    });
}

ferrari();