function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function filterVideos(category) {
    const allButtons = document.querySelectorAll('.category-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));
  
    // Find the selected button using its dataset or onclick attribute
    const selectedButton = Array.from(allButtons).find(btn => 
        btn.getAttribute('onclick').includes(category)
    );
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
  
    const allCards = document.querySelectorAll('.project-card');
    allCards.forEach(card => {
        if (card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Ensure only Blender videos are shown by default
document.addEventListener('DOMContentLoaded', () => {
    filterVideos('blender');
});
