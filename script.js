function toggleMenu() {
    const menu      = document.getElementById('menu'); 
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
   }
   
   function setActive(link) {
       const links = document.querySelectorAll('#menu a');
       
       links.forEach(l => l.classList.remove('active'));
       
       link.classList.add('active');
   }

   // script.js
window.addEventListener("scroll", () => {
    const items = document.querySelectorAll(".timeline-item");

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top >= 0 && rect.bottom <= windowHeight) {
            item.classList.add("in-view");
        } else {
            item.classList.remove("in-view");
        }
    });
});

window.addEventListener("resize", () => {
    const timeline = document.querySelector(".timeline");
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
        timeline.classList.add("desktop-view");
    } else {
        timeline.classList.remove("desktop-view");
    }
});

const techStackImages = [
    'https://via.placeholder.com/50', // Replace with tech stack icons
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
  ];
  
  const circle = document.getElementById('circle');
  
  techStackImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.transform = `rotate(${index * (360 / techStackImages.length)}deg) translate(120px) rotate(-${index * (360 / techStackImages.length)}deg)`;
    circle.appendChild(img);
  });
  

