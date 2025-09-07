function show() {
    document.getElementById('sidebar').classList.toggle('active');
}

function toggleloginbox() {
     
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display == 'block') ? 'none' : 'block';

    var dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active')

    var overlayblur = document.getElementById('overlayblur');
    overlayblur.classList.toggle('active')

}

function playVideo(id) {
    document.getElementById(id).play();
}

function pauseVideo(id) {
    document.getElementById(id).pause();
}

function hideOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

var countDownDate = new Date("april 27, 2024 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
}

}, 1000);



