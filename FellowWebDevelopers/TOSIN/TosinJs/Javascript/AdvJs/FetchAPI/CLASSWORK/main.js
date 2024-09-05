const apiKey = `fca_live_1NWdRJh2d4XwbmjN7ORbTOQsfh534yM1VSHDg86Q`;
const endpoint = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1NWdRJh2d4XwbmjN7ORbTOQsfh534yM1VSHDg86Q`

async function getData() {
    try {
        let response = await fetch(endpoint);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
        } else {
            console.log('Error:', response.status);
            console.log('Check your endpoint or API key');
        }
    } catch (error) {
        console.log('Fetch error:', error);
    }
}
getData();