let rotated = false;

function rotateImage() {
    const img = document.getElementById("photo");

    if (!rotated) {
        img.style.transform = "rotate(180deg)";
    } else {
        img.style.transform = "rotate(0deg)";
    }

    rotated = !rotated;
}
