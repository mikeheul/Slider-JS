const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slides = document.querySelectorAll(".slide")
const result = document.querySelector(".result")

let i = 0

next.addEventListener('click', function () {
    if(i == slides.length - 1) { // si on est sur le dernier alors revenir au premier
        i = 0; 
        activeSlide(slides[i])
    } else {
        i++; 
        activeSlide(slides[i])
    }
})

prev.addEventListener('click', function () {
    if(i == 0) { // si on est sur le premier alors revenir au dernier
        i = slides.length - 1
        activeSlide(slides[i])
    } else {
        i--
        activeSlide(slides[i])
    }
})

function activeSlide(slide) {
    slides.forEach(s => s.classList.remove('active'))  // on enlève la classe "active" de tous les éléments
    slide.classList.add('active') // on ajoute la classe "active" à l'élément concerné
    result.innerHTML = slide.querySelector("img").getAttribute("alt") // on récupère l'attribut "alt" de l'image pour l'afficher
}