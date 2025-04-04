// JavaScript to add interactivity

// Button Click Event
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("myButton");
    let displayText = document.getElementById("displayText");

    button.addEventListener("click", function() {
        displayText.textContent = "Hello, I'm Tharun Singh! A Computer Science student at TPGIT Vellore, passionate about backend development and data analysis.";
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Profile Update
document.addEventListener("DOMContentLoaded", function() {
    let profileInfo = document.getElementById("profileInfo");
    profileInfo.innerHTML = `
        <strong>Tharun Singh</strong><br>
        📌 CSE Student at TPGIT Vellore<br>
        💻 Backend Development | Data Analysis<br>
        📚 Learning Python, Java, SQL, JavaScript<br>
        🔗 <a href="https://www.linkedin.com/in/tharun-singh-61b70335a" target="_blank">LinkedIn</a>
    `;
});