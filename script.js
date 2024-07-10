// Intro Text JavaScript
document.addEventListener("DOMContentLoaded", function() {
    const introText = document.querySelector(".intro-text");
    introText.style.opacity = 1;
    typeWriterEffect(introText.querySelector("h1"), 100);
    typeWriterEffect(introText.querySelector("p"), 50);
});

function typeWriterEffect(element, speed) {
    const text = element.innerText;
    element.innerText = "";
    let i = 0;
    const typeInterval = setInterval(function() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}