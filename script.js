function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function filterVideos(category) {
    const allButtons = document.querySelectorAll('.category-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
  
    const selectedButton = Array.from(allButtons).find(btn => 
      btn.textContent.toLowerCase() === category
    );
    selectedButton.classList.add('active');
  
    const allCards = document.querySelectorAll('.project-card');
    allCards.forEach(card => {
      if (card.dataset.category === category || category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }