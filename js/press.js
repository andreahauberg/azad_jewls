const images = [
    "img/press1.jpg", "img/press2.jpg", "img/press3.jpg", "img/press4.jpg",
    "img/press5.jpg", "img/press6.jpg", "img/press7.jpg", "img/press8.jpg"
  ];
  
  let i = 0;
  
  function placeImage(x, y) {
    const nextImage = images[i];
  
    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(-50%, -50%) scale(0.1) rotate(" + (Math.random() * 20 - 10) + "deg)";
  
    const mainElement = document.querySelector("main");
    mainElement.appendChild(img); // Tilføj billedet til <main></main>
  
    i = i + 1;
  
    if (i >= images.length) {
      i = 0;
    }
  }
  
  function reloadPage() {
    location.reload();
  }
  
  window.addEventListener("resize", reloadPage);
  
  document.addEventListener("mousedown", function (event) {
    const mainElement = document.querySelector("main");
    if (event.target === mainElement) {
      event.preventDefault();
      placeImage(event.pageX, event.pageY);
    }
  });
  
  document.addEventListener("touchend", function (event) {
    const mainElement = document.querySelector("main");
    if (event.target === mainElement) {
      event.preventDefault();
      placeImage(event.pageX, event.pageY);
    }
  });
  