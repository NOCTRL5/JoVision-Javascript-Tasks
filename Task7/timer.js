function timer() {
    var current = new Date();
    var h = current.getHours().toString().padStart(2, '0');
    var m = current.getMinutes().toString().padStart(2, '0');
    var s = current.getSeconds().toString().padStart(2, '0');
    var currentTime = h + ':' + m + ':' + s;
    document.getElementById('time').textContent = currentTime;
}
setInterval(timer, 1000);

timer();