document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.project-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  let currentPage = 0;
  let cardsPerPage = getCardsPerPage();

  function getCardsPerPage() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getPageWidth() {
    const card = cards[0];
    const gap = 40; 
    return (card.offsetWidth + gap) * cardsPerPage;
  }

  function totalPages() {
    return Math.ceil(cards.length / cardsPerPage);
  }

  function updateCarousel() {
    cardsPerPage = getCardsPerPage();
    currentPage = Math.min(currentPage, totalPages() - 1);

    track.style.transform = `translateX(-${currentPage * getPageWidth()}px)`;

    updateIndicators();
    updateButtons();
  }

  function updateButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages() - 1;
  }

  function createIndicators() {
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalPages(); i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-indicator';
      if (i === currentPage) dot.classList.add('active');

      dot.onclick = () => {
        currentPage = i;
        updateCarousel();
      };

      indicatorsContainer.appendChild(dot);
    }
  }

  function updateIndicators() {
    document.querySelectorAll('.carousel-indicator').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentPage);
    });
  }

  prevBtn.onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      updateCarousel();
    }
  };

  nextBtn.onclick = () => {
    if (currentPage < totalPages() - 1) {
      currentPage++;
      updateCarousel();
    }
  };

  window.addEventListener('resize', () => {
    const oldCardsPerPage = cardsPerPage;
    cardsPerPage = getCardsPerPage();

    if (oldCardsPerPage !== cardsPerPage) {
      currentPage = 0; 
      createIndicators();
    }

    updateCarousel();
  });

  createIndicators();
  updateCarousel();
});


        
        const hamburger = document.querySelector('.hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeMenu = document.querySelector('.close-menu');
        const menuOverlay = document.querySelector('.menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

        
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeMenu.addEventListener('click', closeMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);

        
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        
        const texts = [
            "Desenvolvedor Front-end",
            "Designer UI/UX",
            "Desenvolvedor Python",
            
        ];
        let speed = 100;
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typedText = document.getElementById('typed-text');

        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                speed = 50;
            } else {
                typedText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                speed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                speed = 1000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                speed = 500;
            }

            setTimeout(typeWriter, speed);
        }

        
        typeWriter();

        
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6e44ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6e44ff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            }
        });