// Asynch await function to obtain cryptocurrency price data from API
async function getCrypto() {
    // Try statement
    try {
        let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Ckaspa%2Cclearcryptos&vs_currencies=usd")
        // Converts repsonse to .json format
        let data = await res.json()

        console.log(data)
        let btc = document.getElementById("bitcoin-price")
        let eth = document.getElementById("ethereum-price")
        let xrp = document.getElementById("ripple-price")
        let kas = document.getElementById("kaspa-price")
        // How to add an additional cryptocurrency:
        // let ccx = document.getElementById("clearcryptos-price")
        
        btc.innerText = data.bitcoin.usd
        eth.innerText = data.ethereum.usd
        xrp.innerText = data.ripple.usd
        kas.innerText = data.kaspa.usd
        // Add additional cryptocurrency to index.html
        // ccx.innerText = data.clearcryptos.usd
    } 
    // Catch statement
    catch (err) {
        console.log(`error ${err}`)
    }

}
// Function call
getCrypto();