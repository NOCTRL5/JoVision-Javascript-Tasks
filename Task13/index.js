document.getElementById("submit").addEventListener('click', function () {
    const inputname =document.getElementById("name").value;
    fetch(`https://api.agify.io?name=${encodeURIComponent(inputname)}`)
        .then(respone => {
            if (!respone.ok) {
                throw Error("did not fetch");
            }
            return respone.json();
        })
        .then(data => {
            const { name, age } = data;
            alert(`Your name is: ${name}\nYour age is: ${age}`);
        })
        .catch(error => {
            window.alert('Failed to fetch IP address: ' + error.message);
        })
});