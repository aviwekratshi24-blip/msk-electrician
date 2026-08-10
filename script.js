// ========================================
// MSK ELECTRICIAN - SCRIPT
// ========================================


// ========================================
// SERVICE CARD ANIMATIONS
// ========================================

const cards = document.querySelectorAll(".service-card");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

} else {

    cards.forEach((card) => {

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    });

}


// ========================================
// STAR RATING
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const stars = document.querySelectorAll(
        ".rating-stars button"
    );

    const ratingInput = document.getElementById("rating");

    const ratingText = document.getElementById(
        "rating-text"
    );

    console.log("Stars found:", stars.length);


    // ------------------------------------
    // CLICK STAR
    // ------------------------------------

    stars.forEach(function (star) {

        star.addEventListener("click", function (event) {

            event.preventDefault();

            const rating = parseInt(
                this.getAttribute("data-rating")
            );

            console.log("Selected rating:", rating);


            // Save rating
            if (ratingInput) {
                ratingInput.value = rating;
            }


            // Highlight stars
            stars.forEach(function (singleStar) {

                const singleRating = parseInt(
                    singleStar.getAttribute("data-rating")
                );

                if (singleRating <= rating) {

                    singleStar.classList.add("active");

                } else {

                    singleStar.classList.remove("active");

                }

            });


            // Rating message
            if (ratingText) {

                if (rating === 1) {
                    ratingText.textContent =
                        "Thank you for your honest feedback.";
                }

                else if (rating === 2) {
                    ratingText.textContent =
                        "Thank you for sharing your experience.";
                }

                else if (rating === 3) {
                    ratingText.textContent =
                        "Thank you for sharing your experience with us.";
                }

                else if (rating === 4) {
                    ratingText.textContent =
                        "We're glad you had a good experience.";
                }

                else if (rating === 5) {
                    ratingText.textContent =
                        "We're glad you were happy with our service.";
                }

            }

        });


        // ------------------------------------
        // HOVER
        // ------------------------------------

        star.addEventListener("mouseenter", function () {

            const hoverRating = parseInt(
                this.getAttribute("data-rating")
            );

            stars.forEach(function (singleStar) {

                const singleRating = parseInt(
                    singleStar.getAttribute("data-rating")
                );

                if (singleRating <= hoverRating) {

                    singleStar.classList.add("hover");

                } else {

                    singleStar.classList.remove("hover");

                }

            });

        });

    });


    // ------------------------------------
    // REMOVE HOVER
    // ------------------------------------

    const starContainer = document.querySelector(
        ".rating-stars"
    );

    if (starContainer) {

        starContainer.addEventListener(
            "mouseleave",
            function () {

                stars.forEach(function (star) {

                    star.classList.remove("hover");

                });

            }
        );

    }

});


// ========================================
// REVIEW FORM
// ========================================

const reviewForm = document.getElementById(
    "review-form"
);

if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const ratingInput =
                document.getElementById("rating");

            const ratingText =
                document.getElementById("rating-text");

            const feedback =
                document.getElementById("review-feedback");

            const success =
                document.getElementById("review-success");


            // No rating selected
            if (
                !ratingInput ||
                ratingInput.value === ""
            ) {

                if (ratingText) {

                    ratingText.textContent =
                        "Please select a rating first.";

                    ratingText.style.color =
                        "#c0392b";

                }

                return;

            }


            // No feedback
            if (
                !feedback ||
                feedback.value.trim() === ""
            ) {

                feedback.focus();

                return;

            }


            // Success
            if (success) {

                success.style.display = "block";

                success.textContent =
                    "Thank you for taking the time to share your experience with us.";

            }

        }
    );

}
```
