document.getElementById("get ip").addEventListener('click', function () {
    fetch('https://api.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error("unable to fetch");
            }
            return response.json();
        })
        .then(data => {
            console.log("here's the ip:", data.ip);
            document.getElementById("get ip").innerText = data.ip;
        })
        .catch(error => {
            //console.log("Error");
            window.alert('Failed to fetch IP address: ' + error.message);
        });
});