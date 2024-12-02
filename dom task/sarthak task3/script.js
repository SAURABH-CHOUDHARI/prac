let btn = document.querySelector("button")
let body = document.querySelector("body")



let bugs = [
    "https://www.clipartmax.com/png/middle/8-81099_bug-clipart-transparent-background.png",
    "https://purepng.com/public/uploads/large/purepng.com-bugbugsinsectsarachnidsother-non-aquaticarthropods-17015282068237a5dg.png",
    "https://w7.pngwing.com/pngs/337/655/png-transparent-bed-bug-bite-pest-control-bed-bug-control-techniques-discuss-a-problem-mattress-animals-terrestrial-animal.png",
    "https://e7.pngegg.com/pngimages/377/1/png-clipart-insect-brown-marmorated-stink-bug-true-bugs-graphy-insect.png",
    "https://png.pngtree.com/png-vector/20230803/ourmid/pngtree-love-bug-clipart-vector-png-image_6867486.png"
]
btn.addEventListener("click", ()=>{
    let a = document.createElement('img')
    let ran = Math.floor(Math.random()*bugs.length)
    a.setAttribute('src', bugs[ran])
    a.style.left = `${Math.floor(Math.random()*100)}%`
    a.style.top = `${Math.floor(Math.random()*100)}%`
    a.style.rotate = `${Math.floor(Math.random()*360)}deg`
    body.appendChild(a)
})


