// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // State management
    let currentSection = 'introduction';

    // Function to update URL hash without scrolling
    function updateHash(hash) {
        history.pushState(null, null, hash);
    }

    // Function to handle section visibility
    function showSection(sectionId) {
        // Update state
        currentSection = sectionId;

        // Update UI
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-section') === sectionId);
        });

        contentSections.forEach(section => {
            section.classList.toggle('active', section.id === sectionId);
        });

        // Update URL
        updateHash(`#${sectionId}`);
    }

    // Event Handlers
    function handleNavClick(e) {
        const button = e.target;
        if (button.classList.contains('nav-button')) {
            const sectionId = button.getAttribute('data-section');
            showSection(sectionId);
        }
    }

    function handleHashChange() {
        const hash = window.location.hash.slice(1) || 'introduction';
        showSection(hash);
    }

    // Event Listeners
    document.querySelector('.nav-links').addEventListener('click', handleNavClick);
    window.addEventListener('hashchange', handleHashChange);

    // Handle initial load
    const initialSection = window.location.hash.slice(1) || 'introduction';
    showSection(initialSection);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            
            const sections = Array.from(navButtons).map(btn => btn.getAttribute('data-section'));
            const currentIndex = sections.indexOf(currentSection);
            
            let newIndex;
            if (e.key === 'ArrowRight') {
                newIndex = (currentIndex + 1) % sections.length;
            } else {
                newIndex = (currentIndex - 1 + sections.length) % sections.length;
            }
            
            showSection(sections[newIndex]);
        }
    });
});