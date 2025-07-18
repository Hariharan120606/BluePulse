// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Project filter
const filterBtns = document.querySelectorAll('.projects-filter button');
const projects = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.cat;
    projects.forEach(proj => {
      if (category === 'all' || proj.dataset.cat === category) {
        proj.style.display = 'block';
      } else {
        proj.style.display = 'none';
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
projects.forEach(proj => {
  proj.addEventListener('click', () => {
    lbImg.src = proj.querySelector('img').src;
    lightbox.style.display = 'flex';
  });
});
lightbox.addEventListener('click', e => {
  if (e.target !== lbImg) lightbox.style.display = 'none';
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const msg = contactForm.querySelector('#message');
    if (!name.value || !email.value.includes('@') || !msg.value) {
      alert('Please fill in all fields with valid information.');
      return;
    }
    alert('Message sent! Thank you.');
    contactForm.reset();
  });
}
