//NAVIGATIONSMENU
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


//PRESS PAGE

const images = [

  "press1.jpg", "press2.jpg", "press3.jpg", "press4.jpg", 
  "press5.jpg", "press6.jpg", "press7.jpg", "press8.jpg"
]

let i = 0 

function placeImage(x, y) {

  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"

  document.body.appendChild(img)

}

placeImage(500, 400)
placeImage(400, 500)
placeImage(600, 300)

