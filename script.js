const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Svetlý';
  } else {
    toggleButton.textContent = 'Tmavý';
  }
});

        let slideIndex = 1;

        function showSlides(n) {
            let i;
            const slides = document.getElementsByClassName("mySlides");
            const dots = document.getElementsByClassName("dot");

            if (n > slides.length) {
                slideIndex = 1;
            }

            if (n < 1) {
                slideIndex = slides.length;
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        function plusSlides(n) {
            showSlides((slideIndex += n));
        }

        function currentSlide(n) {
            showSlides((slideIndex = n));
        }

        document.addEventListener('DOMContentLoaded', function () {
            showSlides(slideIndex);
        });
