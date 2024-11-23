let images = document.querySelectorAll(".images img");
let modal =document.querySelector(".modal");
let mimg = document.querySelector(".modal img")


images.forEach(img => {
    

    img.addEventListener("click", function(){
        modal.style.display = "flex";
        mimg.src = img.src;

    });
});
modal.addEventListener("click", function(){
    modal.style.display = "none";
});
