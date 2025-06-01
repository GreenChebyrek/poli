function zachita() {
    document.getElementById("zachita").style.visibility = 'visible';
    document.getElementById("Bezopasnost").style.visibility = 'hidden';
    document.getElementById("anon").style.visibility = 'hidden';
    document.getElementById("game").style.visibility = 'hidden';
    document.getElementById("Bopr").style.visibility = 'hidden';
    document.getElementById("NoInfo").style.visibility = 'hidden';
}
function Bezopasnost() {
    document.getElementById("zachita").style.visibility = 'hidden';
    document.getElementById("Bezopasnost").style.visibility = 'visible';
    document.getElementById("anon").style.visibility = 'hidden';
    document.getElementById("game").style.visibility = 'hidden';
    document.getElementById("Bopr").style.visibility = 'hidden';
    document.getElementById("NoInfo").style.visibility = 'hidden';
}
function anon() {
    document.getElementById("zachita").style.visibility = 'hidden';
    document.getElementById("Bezopasnost").style.visibility = 'hidden';
    document.getElementById("anon").style.visibility = 'visible';
    document.getElementById("game").style.visibility = 'hidden';
    document.getElementById("Bopr").style.visibility = 'hidden';
    document.getElementById("NoInfo").style.visibility = 'hidden';
}
function games() {
    document.getElementById("zachita").style.visibility = 'hidden';
    document.getElementById("Bezopasnost").style.visibility = 'hidden';
    document.getElementById("anon").style.visibility = 'hidden';
    document.getElementById("game").style.visibility = 'visible';
    document.getElementById("Bopr").style.visibility = 'hidden';
    document.getElementById("NoInfo").style.visibility = 'hidden';
}
function Bopr() {
    document.getElementById("zachita").style.visibility = 'hidden';
    document.getElementById("Bezopasnost").style.visibility = 'hidden';
    document.getElementById("anon").style.visibility = 'hidden';
    document.getElementById("game").style.visibility = 'hidden';
    document.getElementById("Bopr").style.visibility = 'visible';
    document.getElementById("NoInfo").style.visibility = 'hidden';

}
function NoInfo() {
    document.getElementById("zachita").style.visibility = 'hidden';
    document.getElementById("Bezopasnost").style.visibility = 'hidden';
    document.getElementById("anon").style.visibility = 'hidden';
    document.getElementById("game").style.visibility = 'hidden';
    document.getElementById("Bopr").style.visibility = 'hidden';
    document.getElementById("NoInfo").style.visibility = 'visible';
}
$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

