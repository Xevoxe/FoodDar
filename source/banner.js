//Setup Banner Timer
document.getElementById("banner-close").onclick =hideBanner;

window.setTimeout(showBanner,5000);
var banner = document.getElementById("banner");

//Show Banner Function
function showBanner(){
    window.timer = setInterval(animateBanner,7)
    banner.style.opacity = 100;
    banner.className +=" active"
}

var frameCount = -150;

function animateBanner()
{
    frameCount++;
    var frame = frameCount + "px";
    banner.style.marginTop = frame;
    if(frameCount === 0)
        window.clearInterval(window.timer);
}

function hideBanner()
{
    banner.classList.toggle("active");
    banner.style.display = "none"
}