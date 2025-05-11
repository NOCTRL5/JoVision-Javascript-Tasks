function sum() {
    let s = 0;
    let arr = [];
    for (let i = 0; i <= 100; i++){
        arr.push(i);
        sum += i;
    }
    alert("The sum is " + sum);
}