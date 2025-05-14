function button1() {
    let numbers = []
    for (let i = 0; i <= 100; i++) {
        if (i % 3 != 0) {
            numbers.push(i);
        }
    }
    let result = numbers;
    console.log(result);
}
function button2() {
    let numbers = [];
    for (let i = 0; i <= 150; i++) {
        numbers.push(i);
    }
    let result = numbers;
    console.log(result);
}
function button3() {
    let numbers = [];
    for (let i = 0; i <= 150; i++) {
        numbers.push(i+3);
    }
    let result = numbers;
    console.log(result);
}
function button4() {
    let numbers = [];
    let result = [];
    for (let i = 0; i <= 100; i++) 
        numbers.push(i);
    for (let i = 20; i <= 40; i++) 
        result.push(numbers[i]);
    console.log(result);
}
function button5() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
    let result = shuffleArray(numbers);
    console.log(result);
    result.reverse();
    console.log(result);
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}