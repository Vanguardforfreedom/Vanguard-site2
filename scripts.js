
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
