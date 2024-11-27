const ham = document.querySelector(".ham_menu");
const offmenu = document.querySelector(".offscreen");

ham.addEventListener("click", function(){
    ham.classList.toggle('active');
    offmenu.classList.toggle('active');
})