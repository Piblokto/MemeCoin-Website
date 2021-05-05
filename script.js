function coinprice()
{
    url = 'https://sochain.com//api/v2/get_price/DOGE/AUD'
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    coinprice = JSON.parse(xmlHttp.responseText)
    return coinprice.data.prices[0].price;
}


function currentprofit()
{
    const doge_amount = 20000
    const doge_investment = 1300

    url = 'https://sochain.com//api/v2/get_price/DOGE/AUD'
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    coinprice = JSON.parse(xmlHttp.responseText)
    cprice = coinprice.data.prices[0].price
    coinprice = cprice * doge_amount 
    current_profit = coinprice - doge_investment
    profit = current_profit.toFixed(2)
    profit_commas = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return profit_commas;
}