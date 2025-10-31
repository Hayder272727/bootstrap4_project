// Array of online images for the lightbox
const images = [
  "https://images.unsplash.com/photo-1601758124092-1e3c34a8a58f?w=1200",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1200",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=1200",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200"
];

let currentIndex = 0;

// Function to open the lightbox
function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[index];
}

// Function to close the lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Function to move between slides
function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

// Optional: click outside to close
window.onclick = function(event) {
  const lightbox = document.getElementById("lightbox");
  if (event.target === lightbox) {
    closeLightbox();
  }
};
