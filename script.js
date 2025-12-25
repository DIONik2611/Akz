// Слайдер
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');

function changeSlide(dir) {
    if (slides.length === 0) return;
    currentSlide = currentSlide + dir;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[currentSlide].classList.add('active');
}

// Автосмена слайдов
if (slides.length > 0) {
    setInterval(function() {
        changeSlide(1);
    }, 3000);
}
