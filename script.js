// Banner slider
document.addEventListener('DOMContentLoaded', function() {
      const banner = document.getElementById('banner');
      const images = banner.querySelectorAll('.banner-container img');
      const dotsContainer = banner.querySelector('.banner-dots');
      let currentSlide = 0;

      // Criar dots para navegação
