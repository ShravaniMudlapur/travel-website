document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.getElementById("explore-btn");
    const modal = document.getElementById("custom-modal");
    const closeModal = document.getElementById("close-modal");
    document.getElementById("menu-toggle").addEventListener("click", function() {
        document.querySelector(".nav-links").classList.toggle("active");
    });
    
    exploreBtn.addEventListener("click", function() {
        modal.style.display = "flex"; // Show the modal
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none"; // Close the modal
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});