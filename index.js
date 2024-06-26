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
    // Khởi tạo bản đồ
    var map = L.map('map').setView([51.505, -0.09], 13); // Đặt tọa độ ban đầu và mức zoom

    // Thêm layer bản đồ nền từ OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Tạo minimap
    var miniMap = new L.Control.MiniMap(
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 13,
            attribution: 'Minimap © OpenStreetMap contributors'
        }), {
            toggleDisplay: true,
            minimized: false
        }
    ).addTo(map);