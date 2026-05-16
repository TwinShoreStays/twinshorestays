// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
  });
});

// Active nav link
const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Hero background ken-burns
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  setTimeout(() => heroBg.classList.add('loaded'), 100);
}

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.review-card, .property-card, .value-card, .service-item, .offering-card, .why-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Rental analysis form
const analysisForm = document.getElementById('analysisForm');
if (analysisForm) {
  analysisForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(analysisForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    analysisForm.style.opacity = '0.5';
    analysisForm.style.pointerEvents = 'none';
    
    setTimeout(() => {
      analysisForm.style.display = 'none';
      document.getElementById('analysisSuccess').style.display = 'block';
    }, 1000);
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.opacity = '0.5';
    contactForm.style.pointerEvents = 'none';
    setTimeout(() => {
      contactForm.style.display = 'none';
      document.getElementById('contactSuccess').style.display = 'block';
    }, 800);
  });
}
