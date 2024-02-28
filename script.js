function getTime() {
    const locationInput = document.getElementById('location').value;

    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=46.73917926727481&lon=2.3276588684885837&format=json&apiKey=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => {
        if(data.status === 'OK') {
            const time = new Date(data.formatted);
            const resultElement = document.getElementById('result');
            resultElement.textContent = `Current time in ${locationInput}: ${time.toLocaleString()}`;
        } else {
            const resultElement = document.getElementById('result');
            resultElement.textContent = 'Invalid location or API key';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const resultElement = document.getElementById('result');
        resultElement.textContent = 'An error occurred. Please try again later.';
    });
}
