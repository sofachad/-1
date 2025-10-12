function changeSlide(index) {
            const dots = document.querySelectorAll('.slider-dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            

            const images = ['[T-shirt Image]', '[Jeans Image]', '[Shirt Image]', '[T-shirt Image]'];
            const titles = ['T-shirt with Tape Details', 'Skinny Fit Jeans', 'Checkered Shirt', 'Sleeve Striped T-shirt'];
            const prices = ['$120', '$240', '$180', '$130'];
            
            document.querySelector('.slider-image').textContent = images[index];
            document.querySelector('.slider-container h4').textContent = titles[index];
            document.querySelector('.product-price').textContent = prices[index];
        }


        document.getElementById('newsletterForm').addEventListener('submit', function(event) {
            event.preventDefault();
            if (!this.checkValidity()) {
                event.stopPropagation();
            } else {
                alert('Thank you for subscribing!');
                this.reset();
                this.classList.remove('was-validated');
            }
            this.classList.add('was-validated');
        });