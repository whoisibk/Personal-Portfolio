 // Hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Typing effect
        const texts = ['Software Developer', 'Problem Solver', 'Code Enthusiast'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typing-text');

        function type() {
            const currentText = texts[textIndex];
            
            if (!isDeleting && charIndex <= currentText.length) {
                typingElement.textContent = currentText.substring(0, charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else if (isDeleting && charIndex >= 0) {
                typingElement.textContent = currentText.substring(0, charIndex);
                charIndex--;
                setTimeout(type, 50);
            } else if (charIndex === currentText.length + 1) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
            } else if (charIndex === -1) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }

        setTimeout(type, 1000);