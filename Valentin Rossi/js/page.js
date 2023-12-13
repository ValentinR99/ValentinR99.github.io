const fulImgBox = document.getElementById("fulImgBox");

const fulImg = document.getElementById("fulImg");

function closeImg () {
    fulImgBox.style.display ="none";
}
function openFulImg (reference) {
    fulImgBox.style.display ="flex";
    fulImg.src = reference;
}