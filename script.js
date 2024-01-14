function reveal(){
    var reveal = document.querySelectorAll(".reveal")

.forEach((val)=>{
   let parentSpan = document.createElement("span");
    let childSpan = document.createElement("span");

    parentSpan.classList.add("parent");
    childSpan.classList.add("child");

    childSpan.innerHTML = val.innerHTML;

    parentSpan.appendChild(childSpan);

    val.innerHTML = "";

    val.appendChild(parentSpan)
});
}

reveal()

function loadinAnimation(){
    let tl = gsap.timeline();

tl.from("#black .child .is" , {
    x:"100%",
    opacity:0
})
tl.to("#black h1 .parent",{
    x:"-5%",
    delay:-0.4
})
tl.to("#black .child" , {
    y:"-100%",
    duration:1,
    ease: Circ.easeInOut
})
tl.to("#black" , {
   height:0,
   duration:1,
   ease: Circ.easeInOut
})
tl.to("#green" , {
   height:"100%",
   top:0,
   delay:-.8,
   duration:0.5,
   ease: Circ.easeInOut
})
tl.to("#green" , {
    height:0,
    top:0,
    delay:-.4,
    ease:Power1.easeOut
 })
}

// loadinAnimation()

function homeanimation(){
    gsap.set("#nav" , {
        y:"-100%",
        opacity:0
    })
}
document.querySelectorAll("#visual g").forEach(function(e){
    var character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.totalLength() + "px";
    character.style.strokeDashoffset = character.totalLength() + "px";
})
gsap.from("#Visual>g>g>path , #Visual>g>g>polyline" , {
    y:"-100%",
    x:"-100%",
    duration:2
})

homeanimation()