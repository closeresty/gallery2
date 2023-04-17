var video = document.querySelector("video");
var svgWords = document.getElementsByClassName("svgWords");

video.addEventListener("playing", function () {
    for (var i = 0; i < svgWords.length; i++) {
        svgWords[i].classList.remove("run-animation");
    }
    window.setTimeout(function () {
        for (var i = 0; i < svgWords.length; i++) {
            svgWords[i].classList.add("run-animation");
        }
    }, 60);
}, false);

video.addEventListener("ended", function () {
    video.play();
}, false);