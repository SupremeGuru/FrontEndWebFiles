const apiKey = '6905108a87fceab1eea48a00';
const endpoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

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