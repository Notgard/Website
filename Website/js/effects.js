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


function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0%";
}