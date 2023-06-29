function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }
  
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0.3
  });
  
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    observer.observe(section);
  });

  if (window.innerWidth > 1000) {
    window.addEventListener('scroll', function() {
      var arrow = document.querySelector('.up-arrow');
  
      if (window.scrollY > 500) {
        arrow.classList.add('show');
      } else {
        arrow.classList.remove('show');
      }
    });
  }
  