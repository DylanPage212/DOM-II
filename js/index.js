let busImage = document.querySelector("header img"); //selector 1 & 2
    
busImage.addEventListener("mouseover", () => {
    busImage.style.border = "5px black solid";
});

busImage.addEventListener("mouseout", () => {
    busImage.style.border = "";
});

 let funBus = document.querySelector("header h2"); //selector 3

funBus.addEventListener("click", () => {
    funBus.style.color = "red";
})

let logoHeading = document.querySelector(".logo-heading"); //selector 4
logoHeading.addEventListener("dblclick", () => {
    logoHeading.style.color = "red";
})

let headerBackground = document.querySelector(".content-destination h2"); //selector 5

headerBackground.addEventListener("pointermove", () => {
   headerBackground.style.color = "red";
})

let scrollChange = document.querySelector(".text-content h2"); //selector 6
scrollChange.addEventListener("pointerleave", () => {
    scrollChange.style.border = "20px solid black"
})

let pointerUp = document.querySelector(".destination h4"); //selector 7
pointerUp.addEventListener("pointerover", () => {
    pointerUp.style.color = "blue"
})

let drag = document.querySelector(".content-destination img"); //selector 8
drag.addEventListener("drag", () => {
    drag.style.border = "5px black solid"
})

mouseEnter = document.querySelector(".img-content img");
mouseEnter.addEventListener("mousemove", () => {
    mouseEnter.style.color = "red";
})

