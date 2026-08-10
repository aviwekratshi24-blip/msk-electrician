// ========================================
// MSK ELECTRICIAN
// WEBSITE JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {


    // ========================================
    // STAR RATING
    // ========================================

    const stars = document.querySelectorAll(
        ".rating-stars button"
    );

    const ratingInput = document.querySelector(
        "#rating"
    );

    const ratingText = document.querySelector(
        "#rating-text"
    );


    const ratingMessages = [
        "",
        "Poor",
        "Could be better",
        "Good",
        "Very good",
        "Excellent"
    ];


    stars.forEach(function (star) {

        star.addEventListener("click", function (event) {

            event.preventDefault();

            const rating = Number(
                star.getAttribute("data-rating")
            );


            // Save rating

            if (ratingInput) {

                ratingInput.value = rating;

            }


            // Highlight stars

            stars.forEach(function (item) {

                const itemRating = Number(
                    item.getAttribute("data-rating")
                );

                if (itemRating <= rating) {

                    item.classList.add("active");

                } else {

                    item.classList.remove("active");

                }

            });


            // Show rating description

            if (ratingText) {

                ratingText.textContent =
                    ratingMessages[rating];

            }

        });


        // Hover effect

        star.addEventListener("mouseenter", function () {

            const rating = Number(
                star.getAttribute("data-rating")
            );


            stars.forEach(function (item) {

                const itemRating = Number(
                    item.getAttribute("data-rating")
                );

                if (itemRating <= rating) {

                    item.style.color = "#f5b400";

                } else {

                    item.style.color = "#d7d7d7";

                }

            });

        });

    });


    // Reset hover colour

    const starsContainer = document.querySelector(
        ".rating-stars"
    );


    if (starsContainer) {

        starsContainer.addEventListener(
            "mouseleave",
            function () {

                stars.forEach(function (star) {

                    if (
                        !star.classList.contains("active")
                    ) {

                        star.style.color = "";

                    }

                });

            }
        );

    }



    // ========================================
    // REVIEW FORM
    // ========================================

    const reviewForm = document.querySelector(
        "#review-form"
    );

    const successMessage = document.querySelector(
        "#review-success"
    );


    if (reviewForm) {

        reviewForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput = document.querySelector(
                    "#review-name"
                );

                const feedbackInput = document.querySelector(
                    "#review-feedback"
                );


                const name = nameInput
                    ? nameInput.value.trim()
                    : "";

                const feedback = feedbackInput
                    ? feedbackInput.value.trim()
                    : "";

                const rating = ratingInput
                    ? ratingInput.value
                    : "";


                // Check rating

                if (!rating) {

                    alert(
                        "Please select a star rating."
                    );

                    return;

                }


                // Check feedback

                if (!feedback) {

                    alert(
                        "Please tell us about your experience."
                    );

                    if (feedbackInput) {

                        feedbackInput.focus();

                    }

                    return;

                }


                // Show success message

                if (successMessage) {

                    successMessage.style.display =
                        "block";

                    successMessage.textContent =
                        "Thank you" +
                        (name
                            ? " " + name
                            : "") +
                        ". We appreciate you taking the time to share your experience with us.";

                }


                // Clear form

                reviewForm.reset();


                // Clear rating

                stars.forEach(function (star) {

                    star.classList.remove("active");

                    star.style.color = "";

                });


                if (ratingInput) {

                    ratingInput.value = "";

                }


                if (ratingText) {

                    ratingText.textContent = "";

                }


                // Hide success message after 7 seconds

                setTimeout(function () {

                    if (successMessage) {

                        successMessage.style.display =
                            "none";

                    }

                }, 7000);

            }
        );

    }



    // ========================================
    // SERVICE CARD ANIMATION
    // ========================================

    const cards = document.querySelectorAll(
        ".service-card"
    );


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "0.6s ease";

        observer.observe(card);

    });



    // ========================================
    // REVIEW SECTION ANIMATION
    // ========================================

    const experienceElements =
        document.querySelectorAll(
            ".experience-heading, .experience-info, .review-form-container"
        );


    const experienceObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        experienceObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    experienceElements.forEach(
        function (element) {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(30px)";

            element.style.transition =
                "0.7s ease";

            experienceObserver.observe(
                element
            );

        }
    );

});
```
