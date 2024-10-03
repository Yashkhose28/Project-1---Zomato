document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling Effect for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Input Focus Animation
    const searchInput = document.querySelector('input[placeholder="Serach for Restaurant, cuisine or a dish"]');
    searchInput.addEventListener("focus", () => {
        searchInput.style.transform = "scale(1.1)";
    });
    searchInput.addEventListener("blur", () => {
        searchInput.style.transform = "scale(1)";
    });

    // Hover Animation for Menu Items
    const menuItems = document.querySelectorAll("header ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });
});
