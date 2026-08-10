// ========================================
// MSK ELECTRICIAN - REVIEW SYSTEM
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // STAR RATING
    // ========================================

    const stars = document.querySelectorAll(".rating-stars button");
    const ratingInput = document.querySelector("#rating");

    stars.forEach((star, index) => {

        star.addEventListener("click", function (event) {

            event.preventDefault();

            const selectedRating = index + 1;

            // Save rating
            if (ratingInput) {
                ratingInput.value = selectedRating;
            }

            // Update stars
            stars.forEach((item, starIndex) => {

                if (starIndex < selectedRating) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }

            });

        });

    });


    // ========================================
    // REVIEW FORM
    // ========================================

    const reviewForm = document.querySelector("#review-form");

    if (reviewForm) {

        reviewForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const nameInput = document.querySelector("#review-name");
            const feedbackInput = document.querySelector("#review-feedback");

            const name = nameInput ? nameInput.value.trim() : "";
            const feedback = feedbackInput ? feedbackInput.value.trim() : "";
            const rating = ratingInput ? ratingInput.value : "";

            // Check rating
            if (!rating) {

                alert("Please select a star rating before submitting.");

                return;

            }

            // Check feedback
            if (!feedback) {

                alert("Please tell us about your experience.");

                return;

            }

            // ========================================
            // SUCCESS MESSAGE
            // ========================================

            const successMessage = document.querySelector(
                "#review-success"
            );

            if (successMessage) {

                successMessage.textContent =
                    "Thank you for sharing your experience with us.";

                successMessage.style.display = "block";

            } else {

                alert(
                    "Thank you" +
                    (name ? " " + name : "") +
                    "! Your feedback has been received."
                );

            }

            // Reset form
            reviewForm.reset();

            // Reset stars
            stars.forEach((star) => {
                star.classList.remove("active");
            });

            if (ratingInput) {
                ratingInput.value = "";
            }

        });

    }


    // ========================================
    // SERVICE CARD ANIMATION
    // ========================================

    const revealElements = document.querySelectorAll(
        ".service-card, .review-card, .review-heading, .review-form"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

});
