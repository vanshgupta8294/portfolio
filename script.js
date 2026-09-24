// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll("section, .glass-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            // Animation sirf ek baar chalegi
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));


// ===============================
// Dark / Light Theme Toggle
// ===============================

const toggle = document.getElementById("themeToggle");

if (toggle) {

    // Saved theme load
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");
        toggle.textContent = "☀️";

    }

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");

        toggle.textContent = isLight ? "☀️" : "🌙";

        localStorage.setItem("theme", isLight ? "light" : "dark");

    });

}


// ===============================
// Cursor Glow + Dot
// ===============================

const glow = document.querySelector(".cursor-glow");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

    if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    }

    if (dot) {
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";
    }

});


// ===============================
// Optimized Particle Background
// ===============================

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    // Sirf 25 particles (fast performance)
    const PARTICLE_COUNT = 25;

    for (let i = 0; i < PARTICLE_COUNT; i++) {

        particles.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            r: Math.random() * 2 + 1,

            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4

        });

    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(96,165,250,.75)";

        particles.forEach(p => {

            ctx.beginPath();

            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            ctx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x <= 0 || p.x >= canvas.width) p.dx *= -1;
            if (p.y <= 0 || p.y >= canvas.height) p.dy *= -1;

        });

        requestAnimationFrame(animate);

    }

    animate();

    window.addEventListener("resize", resizeCanvas);

}
// ===============================
// Floating Back to Top Button
// ===============================

const scrollTopBtn = document.getElementById("scrollTopBtn");

// Scroll hone par button show/hide hoga
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Click karte hi smooth top
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});