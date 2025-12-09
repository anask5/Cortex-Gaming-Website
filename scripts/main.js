  // --- 2. GLOBAL COOKIE BANNER (Add this new section) ---
  const cookiePlaceholder = document.getElementById("cookie-placeholder");
  if (cookiePlaceholder) {
      fetch('cookie.html')
          .then(response => response.text())
          .then(data => {
              // Inject the cookie banner HTML
              cookiePlaceholder.innerHTML = data;

              // --- 3. RUN THE COOKIE LOGIC (Moved from cookie.js) ---
              // Now that the HTML exists, find the elements
              const cookieBanner = document.getElementById('cookie-banner');
              const acceptButton = document.getElementById('accept-cookies');

              if (cookieBanner && acceptButton) {
                  // Check if already accepted
                  if (!localStorage.getItem('cookiesAccepted')) {
                      // If not, show the banner
                      cookieBanner.style.display = 'flex';
                      setTimeout(() => {
                          cookieBanner.classList.add('cookie-banner-visible');
                      }, 100);
                  } else {
                      // If yes, remove it
                      cookieBanner.remove();
                  }

                  // Add click listener
                  acceptButton.addEventListener('click', function() {
                      cookieBanner.classList.remove('cookie-banner-visible');
                      localStorage.setItem('cookiesAccepted', 'true');
                      cookieBanner.addEventListener('transitionend', () => {
                          cookieBanner.remove();
                      });
                  });
              }
          });
  }
  // this is for testimonals
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');

  setInterval(() => {
      slides[currentSlide].classList.remove('active-slide');

      currentSlide = (currentSlide + 1) % slides.length; // Move to next slide, or wrap to 0

      slides[currentSlide].classList.add('active-slide');
  }, 5000); // 5000ms = 5 seconds
  document.addEventListener('DOMContentLoaded', () => {
      // Find the server status elements
      const statusText = document.querySelector('.server-status');
      const statusDot = document.querySelector('.status-dot');

      if (statusText && statusDot) {
          // 90% chance to be "Online", 10% chance to be "Offline"
          if (Math.random() < 0.1) {
              // Set to Offline
              statusText.innerHTML = '<span class="status-dot offline"></span> Server: Offline';
          }
          // Otherwise, it just stays "Online" as set in the HTML
      }

      // global footer so we dont have to edit individually

  });
  document.addEventListener("DOMContentLoaded", function() {
      // Find the placeholder element
      const footerPlaceholder = document.getElementById("footer-placeholder");

      if (footerPlaceholder) {
          // Fetch the footer content
          fetch('footer.html')
              .then(response => response.text())
              .then(data => {
                  // Inject the footer HTML into the placeholder
                  footerPlaceholder.innerHTML = data;
              });
      }
  });

  document.addEventListener('DOMContentLoaded', function() {

      // ... (your existing footer/cookie/auth code) ...

      // --- START: Glow Card Effect ---
      const cards = document.querySelectorAll('.glow-card');

      cards.forEach((card) => {
          card.addEventListener('mousemove', (e) => {
              // Get mouse position relative *to the card*
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              // Update the CSS custom properties
              card.style.setProperty('--x', `${x}px`);
              card.style.setProperty('--y', `${y}px`);
          });
      });
      // --- END: Glow Card Effect ---

  });
