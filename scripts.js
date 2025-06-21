
window.addEventListener('DOMContentLoaded', () => {
  const fadeIns = document.querySelectorAll('.fade-in');
  const slideIns = document.querySelectorAll('.slide-in');

  fadeIns.forEach(el => {
    el.style.opacity = '1';
  });

  slideIns.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
});
