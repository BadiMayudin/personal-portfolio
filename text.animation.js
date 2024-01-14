var reveal = document.querySelectorAll(".reveal")

.forEach((val)=>{
   let parentSpan = document.createElement("span");
    let childSpan = document.createElement("span");

    parentSpan.classList.add("parent");
    childSpan.classList.add("child");

    childSpan.textContent = val.textContent;

    parentSpan.appendChild(childSpan);

    val.innerHTML = "";

    val.appendChild(parentSpan)
});

