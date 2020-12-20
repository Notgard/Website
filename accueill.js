var i = 0;
var txt = 'Projet PPP Cybersecurite';
var speed = 130;

function typeWriter() {

    if (i < txt.length) {
        if (txt.charAt(i) == '/') {
            document.getElementById("transition1").innerHTML += '<br>';
        } else {
            document.getElementById("transition1").innerHTML += txt.charAt(i);
        }

    }

    i++;
    setTimeout(typeWriter, speed);
}

var fullWidth = $(window).width();

function openNav() {
    if (fullWidth >= 330) {
        document.getElementById("mySidenav").style.display = "block";
    }
    document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
    if (fullWidth >= 330) {
        document.getElementById("mySidenav").style.display = "none";
    }
    document.getElementById("mySidenav").style.height = "0%";
}