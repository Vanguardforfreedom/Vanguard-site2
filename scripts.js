
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el, i) => {
    setTimeout(() => el.style.opacity = '1', 300 + i * 200);
  });
});
