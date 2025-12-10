document.addEventListener("DOMContentLoaded", () => {
    const roles = [
        "Data Scientist",
        "Python Developer",
        "AI/ML Engineer",
        "Web Developer",
        "Data Analyst"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.querySelector(".role");

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1200);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 60);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 200);
        }
    }

    type(); 
});
