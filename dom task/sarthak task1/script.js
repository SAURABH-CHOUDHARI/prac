const parent = document.querySelectorAll(".parent")

parent.forEach(elem => {
    elem.addEventListener("mousemove",(dets)=>{
        elem.childNodes[5].style.opacity = 1;
        elem.childNodes[5].style.left = dets.x+'px';
    })
    elem.addEventListener("mouseleave",()=>{
        elem.childNodes[5].style.opacity = 0;
    })
});
