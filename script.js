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

const stars = document.querySelectorAll(
    ".rating-stars button"
);

const ratingInput = document.getElementById("rating");

const ratingText = document.getElementById(
    "rating-text"
);

console.log("MSK: Stars found =", stars.length);


// Current selected rating
let selectedRating = 0;


// ----------------------------------------
// STAR CLICK
// ----------------------------------------

stars.forEach((star) => {

    star.addEventListener("click", (event) => {

        event.preventDefault();
        event.stopPropagation();

        selectedRating = Number(
            star.getAttribute("data-rating")
        );

        console.log(
            "MSK: Star clicked =",
            selectedRating
        );


        // Save rating
        if (ratingInput) {

            ratingInput.value = selectedRating;

        }


        // Highlight selected stars
        stars.forEach((singleStar) => {

            const number = Number(
                singleStar.getAttribute("data-rating")
            );

            if (number <= selectedRating) {

                singleStar.classList.add("active");

            } else {

                singleStar.classList.remove("active");

            }

        });


        // Rating message
        if (ratingText) {

            const messages = {

                1: "Thank you for your honest feedback.",

                2: "Thank you for sharing your experience.",

                3: "Thank you for sharing your experience with us.",

                4: "We're glad you had a good experience.",

                5: "We're glad you were happy with our service."

            };

            ratingText.textContent =
                messages[selectedRating];

            ratingText.style.color = "#777777";

        }

    });


    // ------------------------------------
    // STAR HOVER
    // ------------------------------------

    star.addEventListener("mouseenter", () => {

        const hoverRating = Number(
            star.getAttribute("data-rating")
        );

        stars.forEach((singleStar) => {

            const number = Number(
                singleStar.getAttribute("data-rating")
            );

            if (number <= hoverRating) {

                singleStar.classList.add("hover");

            } else {

                singleStar.classList.remove("hover");

            }

        });

    });

});


// ----------------------------------------
// REMOVE HOVER
// ----------------------------------------

const starContainer = document.querySelector(
    ".rating-stars"
);

if (starContainer) {

    starContainer.addEventListener(
        "mouseleave",
        () => {

            stars.forEach((star) => {

                star.classList.remove("hover");

            });

        }
    );

}


// ========================================
// REVIEW FORM
// ========================================

const reviewForm = document.getElementById(
    "review-form"
);

if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const feedback =
                document.getElementById(
                    "review-feedback"
                );

            const success =
                document.getElementById(
                    "review-success"
                );


            // --------------------------------
            // CHECK RATING
            // --------------------------------

            if (selectedRating === 0) {

                if (ratingText) {

                    ratingText.textContent =
                        "Please select a rating first.";

                    ratingText.style.color =
                        "#c0392b";

                }

                return;

            }


            // --------------------------------
            // CHECK FEEDBACK
            // --------------------------------

            if (
                !feedback ||
                feedback.value.trim() === ""
            ) {

                feedback.focus();

                return;

            }


            // --------------------------------
            // SUCCESS
            // --------------------------------

            if (success) {

                success.style.display = "block";

                success.textContent =
                    "Thank you for taking the time to share your experience with us.";

            }

        }
    );

}


// ========================================
// WEBSITE LOADED
// ========================================

console.log(
    "MSK Electrician: script loaded successfully."
);
```
