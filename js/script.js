const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
});nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});document.getElementById('year').textContent = new Date().getFullYear();const form = document.getElementById('enquiryForm');
const toast = document.getElementById('toast');form.addEventListener('submit', event => {
  event.preventDefault();
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 5000);
  form.reset();
});



const filterButtons = document.querySelectorAll('.gallery-tabs button');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        filterButtons.forEach(btn =>
            btn.classList.remove('active')
        );

        button.classList.add('active');

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {
            const category = item.dataset.category;

            if (filter === 'all' || category === filter) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightboxImage.src = item.querySelector('img').src;
        lightbox.classList.add('show');
    });
});

document.getElementById('closeLightbox')
.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('show');
    }
});