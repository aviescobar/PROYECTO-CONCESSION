// Banner slider
document.addEventListener('DOMContentLoaded', function() {
      const banner = document.getElementById('banner');
      const images = banner.querySelectorAll('.banner-container img');
      const dotsContainer = banner.querySelector('.banner-dots');
      let currentSlide = 0;

      // Criar dots para navegação
      images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
       });

      // Função para trocar slide
      function goToSlide(index) {
