function submit() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const timestamp = new Date().toLocaleString();
    const person = {
        name: name,
        age: age,
        timestamp: timestamp
    };
    const { name: personName, age: personAge, timestamp: personTimestamp } = person;
    alert(`Your name is: ${personName}\nYour age is: ${personAge}\nTimestamp: ${personTimestamp}`);
}
