function sum() {
    let s = 0;
    let arr = [];
    for (let i = 0; i <= 100; i++){
        arr.push(i);
        if(i%2==0)
            s += i;
    } 
    alert("The sum is " + s);
}