const touchArea = document.getElementById("touch-area");
const counter = document.getElementById("counter");

function updateCounter(event) {
  counter.textContent = event.touches.length;
  
  counter.textContent = cantidad;
  
 if (cantidad == 0) {
    touchArea.style.backgroundColor = "rgb(255, 255, 8)";
}

if (cantidad == 1) {
    touchArea.style.backgroundColor = "rgb(100, 255, 8)";
}

if (cantidad == 2) {
    touchArea.style.backgroundColor = "rgb(255, 30, 100)";
}

if (cantidad == 3) {
    touchArea.style.backgroundColor = "rgb(31, 175, 175)";
}

if (cantidad == 4) {
    touchArea.style.backgroundColor = "rgb(139, 36, 176)";
}

}




touchArea.addEventListener("touchstart", updateCounter, { passive: false });
touchArea.addEventListener("touchmove", updateCounter, { passive: false });
touchArea.addEventListener("touchend", updateCounter);
touchArea.addEventListener("touchcancel", updateCounter);

