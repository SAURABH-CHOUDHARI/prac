let img = document.querySelectorAll("img");

// img.addEventListener("click", function () {
//     array.forEach(element => {
//         img.style.scale = "2";
//     });
// });
// img.forEach(img => {
//     img.addEventListener("click", function () {
//         img.style.transform = "scale(3)";
//             img.addEventListener("click", function () {
//                 img.style.transform = "scale(1)";
//             });
//     });
// });
const images = document.querySelectorAll("img");
let scaledImage = null; 


images.forEach(img => {
    img.addEventListener("click", function (e) {
        e.stopPropagation();


        if (scaledImage === this) return;


        if (scaledImage) {
            scaledImage.style.transform = "scale(1)";
        }


        this.style.transform = "scale(2)";
        scaledImage = this;
    });
});

document.addEventListener("click", () => {
    if (scaledImage) {
        scaledImage.style.transform = "scale(1)";
        scaledImage = null;
    }
});