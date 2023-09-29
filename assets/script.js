const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// sélection l'élément du DOM avec la classe "arrow_left"
const arrowLeft = document.querySelector(".arrow_left");

// sélection l'élément du DOM avec la classe "arrow_right"
const arrowRight = document.querySelector(".arrow_right");

// sélection l'élément du DOM avec la classe " banner-image"
const bannerImg = document.querySelector(".banner-img");

// sélection la balise p dans le DOM après l'id banner
const bannerText = document.querySelector("#banner p");

// sélection l'élément du DOM avec la classe "dots"
const dotsContainer = document.querySelector(".dots");

// Variable stockant l'index de l'image actuelle
let currentSlideIndex = 0;



// Écouter le click flèche gauche
arrowLeft.addEventListener("click", () => {
  //modifier la valeur de l'index de l'image actuelle
  currentSlideIndex = currentSlideIndex - 1;
  //vérifie si l'index est inférieur à 0'
  if (currentSlideIndex < 0) {
    currentSlideIndex += slides.length;
  }
  //appelle la fonction pour mettre à jour
  updateBanner();
});

// Écouter le click flèche droite
arrowRight.addEventListener("click", () => {
  //modifier la valeur de l'index de l'image actuelle
  currentSlideIndex = currentSlideIndex + 1;
  //vérifie si l'index est supérieur ou égale à slides.length'
  if (currentSlideIndex >= slides.length ) {
    currentSlideIndex -= slides.length;
  }
  //appelle la fonction pour mettre à jour
  updateBanner();
});

//fonction pour mettre à jour les éléments du DOM
function updateBanner() {
// récupère l'object correspondant au nouvelle index dans slides
  const currentSlide = slides[currentSlideIndex];
//implémente les données dans les éléments correspondant 
  bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
  bannerText.innerHTML = currentSlide.tagLine;

  // Supprimer la classe 'dot_selected' de tous les dot.s
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("dot_selected"));

  // Ajouter la classe 'dot_selected' au dot correspondant à l'index actuelle
  dots[currentSlideIndex].classList.add("dot_selected");
}

// Appelez updateBanner une fois pour afficher la première image
updateBanner();
