const slides = document.querySelector('.p1');
    let isTransitioning = false;
    let current=0;

    function nextSlide() {
      if (!isTransitioning) {
        isTransitioning = true;
        slides.style.transform = 'translateX(-100%)';
        if (current === 0) {
          current = 1;
        } else {
          current = 0;
        }
      }
    }

    slides.addEventListener('transitionend', function () {
      if (isTransitioning) {
        slides.appendChild(slides.firstElementChild);
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        setTimeout(() => {
          slides.style.transition = 'transform 0.5s ease-in-out';
          isTransitioning = false;
        });
      }
    });