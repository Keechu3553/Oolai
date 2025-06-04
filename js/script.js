document.addEventListener('DOMContentLoaded', () => {
  console.log("🌿 Oolai site loaded and ready!");

  // Example: Smooth scroll for internal links
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
});
