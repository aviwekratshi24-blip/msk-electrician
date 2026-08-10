// ==========================================
// MSK ELECTRICIAN WEBSITE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // SERVICE CARD ANIMATION
    // ==========================================

    const cards = document.querySelectorAll(".service-card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        cards.forEach(function (card) {

            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";
            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        });

    }


    // ==========================================
    // STAR RATING
    // ==========================================

    const stars = document.querySelectorAll(".rating-star");
    const ratingInput = document.getElementById("rating");
    const ratingText = document.getElementById("rating-text");

    let selectedRating = 0;

    const ratingMessages = {

        1: "Thank you for sharing your honest feedback.",

        2: "Thank you for taking the time to respond.",

        3: "Thank you for sharing your experience.",

        4: "We're glad to hear that your experience was positive.",

        5: "We're glad you had a great experience with our service."

    };


    function updateStars(rating) {

        stars.forEach(function (star) {

            const starRating =
                Number(star.dataset.rating);

            if (starRating <= rating) {

                star.classList.add("active");
                star.textContent = "★";

            } else {

                star.classList.remove("active");
                star.textContent = "☆";

            }

        });

    }


    function setRating(rating) {

        selectedRating = rating;

        if (ratingInput) {

            ratingInput.value = rating;

        }

        updateStars(rating);

        if (ratingText) {

            ratingText.textContent =
                ratingMessages[rating] || "";

            ratingText.style.color = "#777777";

        }

    }


    // ==========================================
    // STAR CLICK
    // ==========================================

    stars.forEach(function (star) {

        star.addEventListener("click", function () {

            const rating =
                Number(this.dataset.rating);

            setRating(rating);

        });


        // Preview stars when hovering

        star.addEventListener("mouseenter", function () {

            const rating =
                Number(this.dataset.rating);

            updateStars(rating);

        });

    });


    // ==========================================
    // RESTORE SELECTED RATING
    // ==========================================

    const starContainer =
        document.querySelector(".rating-stars");

    if (starContainer) {

        starContainer.addEventListener(
            "mouseleave",
            function () {

                updateStars(selectedRating);

            }
        );

    }


    // ==========================================
    // REVIEW FORM
    // ==========================================

    const reviewForm =
        document.getElementById("review-form");

    const successMessage =
        document.getElementById("review-success");


    if (reviewForm) {

        reviewForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // Check rating

                if (selectedRating === 0) {

                    if (ratingText) {

                        ratingText.textContent =
                            "Please select a star rating.";

                        ratingText.style.color =
                            "#d9534f";

                    }

                    return;

                }


                // Check feedback

                const feedback =
                    document.getElementById("review-feedback");


                if (!feedback ||
                    feedback.value.trim() === "") {

                    if (feedback) {

                        feedback.focus();

                        feedback.style.borderColor =
                            "#d9534f";

                    }

                    return;

                }


                // Remove error styling

                feedback.style.borderColor =
                    "#dddddd";


                // Show success message

                if (successMessage) {

                    successMessage.classList.add("show");

                }


                // Clear form

                reviewForm.reset();


                // Reset rating

                selectedRating = 0;

                if (ratingInput) {

                    ratingInput.value = "";

                }


                updateStars(0);


                if (ratingText) {

                    ratingText.textContent =
                        "Thank you for sharing your experience.";

                    ratingText.style.color =
                        "#777777";

                }


                // Hide success message after 5 seconds

                setTimeout(function () {

                    if (successMessage) {

                        successMessage.classList.remove("show");

                    }

                }, 5000);

            }
        );

    }


    // ==========================================
    // SMOOTH NAVIGATION
    // ==========================================

    const navLinks =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ==========================================
    // SERVICE PAGE BUTTONS
    // ==========================================
    // Service cards use normal links to open
    // separate service pages such as:
    //
    // residential.html
    // commercial.html
    // lighting.html
    // repairs.html
    // db-board.html
    // plugs-switches.html
    //
    // No JavaScript is required to open them.
    // This section simply makes sure service
    // links work normally.

    const serviceLinks =
        document.querySelectorAll(".service-card a");

    serviceLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const destination =
                this.getAttribute("href");

            if (destination) {

                window.location.href = destination;

            }

        });

    });


    // ==========================================
    // GET A QUOTE BUTTONS
    // ==========================================

    const quoteButtons =
        document.querySelectorAll(
            'a[href="#contact"]'
        );


    quoteButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {

                event.preventDefault();

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
