// ========================================
// MSK ELECTRICIAN WEBSITE
// ========================================

// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // SCROLL REVEAL ANIMATION
    // ========================================

    const revealElements = document.querySelectorAll(
        ".service-card, .review-card, .review-heading, .review-form"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Stop observing once it has appeared
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    // ========================================
    // REVIEW BUTTON
    // ========================================

    const reviewButton = document.querySelector(".review-button");

    if (reviewButton) {

        reviewButton.addEventListener("click", () => {

            const reviewForm = document.querySelector("#review-form");

            if (reviewForm) {

                reviewForm.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        });

    }


    // ========================================
    // STAR RATING
    // ========================================

    const stars = document.querySelectorAll(".rating-stars button");

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            stars.forEach((item, starIndex) => {

                if (starIndex <= index) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }

            });

        });

    });


    // ========================================
    // MOBILE NAVIGATION
    // ========================================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            // Keeps the navigation clean on mobile
            document.body.classList.remove("menu-open");

        });

    });

});
