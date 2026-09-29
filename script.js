document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".navbar nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("open");
            menuBtn.classList.toggle("open");
        });

        // Close menu after clicking a link
        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                menuBtn.classList.remove("open");
            });
        });
    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


    /* =========================================
       GALLERY LIGHTBOX
    ========================================= */

    const galleryImages = document.querySelectorAll(".gallery-item img");

    // Create the lightbox dynamically
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">
            ×
        </button>

        <img class="lightbox-image" src="" alt="">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";
        });

    });


    // Close button
    lightboxClose.addEventListener("click", closeLightbox);


    // Close when clicking outside the image
    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    // Close with Escape key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });


    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       IMAGE REVEAL ANIMATION
    ========================================= */

    const galleryItems = document.querySelectorAll(".gallery-item");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    galleryItems.forEach(item => {
        revealObserver.observe(item);
    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const year = document.querySelector("footer p");

    if (year) {

        year.innerHTML = `© ${new Date().getFullYear()} Jordan`;

    }


    /* =========================================
       EMAIL LINK
    ========================================= */

    const emailLink = document.querySelector(".email-link");

    if (emailLink) {

        emailLink.addEventListener("click", () => {

            console.log("Opening email client...");

        });

    }

});