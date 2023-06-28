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
  