
document.getElementById('get ip').addEventListener('click', function () {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            console.log("Here's the ip:", data.ip);
        })
        .catch(error => console.error('Error fetching ip:', error));
});
