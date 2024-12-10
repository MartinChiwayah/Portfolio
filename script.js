
// Smooth scrolling for nav links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
        if (link.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// JavaScript for the loading screen
window.onload = () => {
    const quotes = [
        "Greatness is earned, not given.",
        "In the shadows, we find strength.",
        "Every project is a story untold.",
        "Design is intelligence made visible.",
        "Code your dreams into reality."
    ];
    
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("loading-quote").innerText = randomQuote;

    // Hide the loading screen after 3 seconds
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 500); // Allow fade-out transition to complete
    }, 3000);
};
