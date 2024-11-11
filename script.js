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
            images[currentSlide].classList.remove('active');
            dotsContainer.children[currentSlide].classList.remove('active');
            currentSlide = index;
            images[currentSlide].classList.add('active');
            dotsContainer.children[currentSlide].classList.add('active');
       }

      // Event listeners para botões de navegação
      banner.querySelector('.prev').addEventListener('click', () => {
            const newIndex = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
            goToSlide(newIndex);
      });

       banner.querySelector('.next').addEventListener('click', () => {
             const newIndex = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
             goToSlide(newIndex);
       });

      // Autoplay do banner
















            
