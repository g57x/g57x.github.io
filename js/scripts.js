function opensesame() {
    
    var s = document.getElementById('enterSite').style;
    s.opacity = 1;
    (function fade(){(s.opacity-=.05)<0?s.display="none":setTimeout(fade,20)})();

var audioElem = document.getElementById("audio");
audioElem.play();
}

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {
    setInterval(loop, 400); 
}

var x = 0;
var titleText = ["|","G","G5","G57","G57X","G57","G5","G","|"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}

var audio = document.getElementById("audio");
  audio.volume = 1;
