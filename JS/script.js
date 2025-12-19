// Reservation Form Handling
const reservationForm = document.querySelector('.reservation-form');

if (reservationForm) {
  reservationForm.addEventListener('submit', function (e) {
    e.preventDefault(); 

    alert('Your table has been reserved successfully!');

    reservationForm.reset(); 
  });
}

// Navbar scroll effect
let nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

//Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) clearInterval(timer);
        }, step);
    }

    const counterSection = document.querySelector(".counter-section"); 
    const countersStarted = { started: false }; 

    if (counterSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersStarted.started) {
                    countersStarted.started = true;

                    counter("count1", 0, 1263, 3000);
                    counter("count2", 0, 1000, 3000);
                    counter("count3", 0, 754, 3000);
                    counter("count4", 0, 953, 3000);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counterSection);
    }
});

// ---------- Contact Form Handling ----------
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        alert('Your message has been sent successfully!');
        contactForm.reset(); 
    });
}


const steakURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
const pastaURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
const dessertURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";

function loadMenu(apiURL, containerId) {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById(containerId);
            container.innerHTML = "";

            data.meals.slice(0, 6).forEach(meal => {
                container.innerHTML += `
                <div class="menu-card-ai">
                    <div class="menu-card-img">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <span class="menu-tag">Chef Choice</span>
                    </div>

                    <div class="menu-card-content">
                        <h3 class="menu-title">${meal.strMeal}</h3>

                        <p class="menu-desc">
                            Delicious ${meal.strMeal} prepared with premium ingredients
                            and served fresh by our professional chefs.
                        </p>

                        <div class="menu-card-footer">
                            <span class="menu-price">$${(Math.random() * 20 + 10).toFixed(0)}</span>
                            <span class="menu-rating">⭐ ${(Math.random() * 1 + 4).toFixed(1)}</span>
                        </div>
                    </div>
                </div>
                `;
            });
        })
        .catch(error => {
            console.error("Error loading menu:", error);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadMenu(steakURL, "steaks-menu");
    loadMenu(pastaURL, "pasta-menu");
    loadMenu(dessertURL, "desserts-menu");
});




const heroSlides = document.querySelectorAll(".hero-slide");
let heroIndex = 0;

function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove("active"));
    heroSlides[index].classList.add("active");
}

setInterval(() => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
}, 1200);

