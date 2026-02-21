// JavaScript

// Smooth Scroll Navbar
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Popup CTA
const popup = document.getElementById("popupCTA");
const btn = document.getElementById("orderBtn");
const close = document.querySelector(".popup .close");

btn.addEventListener("click", function(e){
    e.preventDefault();
    popup.style.display = "flex";
    popup.querySelector(".popup-content").style.transform = "scale(0.7)";
    setTimeout(() => {
        popup.querySelector(".popup-content").style.transform = "scale(1)";
    }, 50);
});

close.addEventListener("click", function(){
    popup.style.display = "none";
});

window.addEventListener("click", function(e){
    if(e.target == popup){ 
        popup.style.display = "none"; 
    }
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    // يمكن هنا ربط الفورم بالـ Backend
    alert(`شكرًا ${name}! تم إرسال رسالتك، سنتواصل معك قريبًا.`);
    this.reset();
});

// Animations on Scroll (Fade-In)
const faders = document.querySelectorAll(".fade-in");
const options = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        appearOnScroll.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => { appearOnScroll.observe(fader); });
