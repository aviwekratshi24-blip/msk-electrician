// =====================================================
// MSK ELECTRICIAN
// =====================================================

document.addEventListener("DOMContentLoaded", function () {


    // =================================================
    // SERVICE CARD ANIMATION
    // =================================================

    const cards =
        document.querySelectorAll(".service-card");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.style.opacity = "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(entry.target);

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        cards.forEach(function (card) {

            card.style.opacity = "0";

            card.style.transform =
                "translateY(25px)";

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        });

    }


    // =================================================
    // STAR RATING
    // =================================================

    const stars =
        document.querySelectorAll(".rating-star");

    const ratingInput =
        document.getElementById("rating");

    const ratingText =
        document.getElementById("rating-text");


    let selectedRating = 0;


    const ratingMessages = {

        1:
            "Thank you for sharing your honest feedback.",

        2:
            "Thank you for taking the time to respond.",

        3:
            "Thank you for sharing your experience.",

        4:
            "We're glad to hear that your experience was positive.",

        5:
            "We're glad you had a great experience with our service."

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

        }

    }


    stars.forEach(function (star) {

        star.addEventListener(
            "click",
            function () {

                setRating(
                    Number(this.dataset.rating)
                );

            }
        );


        star.addEventListener(
            "mouseenter",
            function () {

                updateStars(
                    Number(this.dataset.rating)
                );

            }
        );

    });


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


    // =================================================
    // REVIEW FORM
    // =================================================

    const reviewForm =
        document.getElementById("review-form");


    const successMessage =
        document.getElementById("review-success");


    if (reviewForm) {

        reviewForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (selectedRating === 0) {

                    if (ratingText) {

                        ratingText.textContent =
                            "Please select a star rating.";

                    }

                    return;

                }


                const feedback =
                    document.getElementById(
                        "review-feedback"
                    );


                if (
                    !feedback ||
                    feedback.value.trim() === ""
                ) {

                    if (feedback) {

                        feedback.focus();

                        feedback.style.borderColor =
                            "#d9534f";

                    }

                    return;

                }


                feedback.style.borderColor =
                    "#dddddd";


                if (successMessage) {

                    successMessage.classList.add("show");

                }


                reviewForm.reset();

                selectedRating = 0;

                if (ratingInput) {

                    ratingInput.value = "";

                }

                updateStars(0);


                if (ratingText) {

                    ratingText.textContent =
                        "Thank you for sharing your experience.";

                }


                setTimeout(function () {

                    if (successMessage) {

                        successMessage.classList.remove(
                            "show"
                        );

                    }

                }, 5000);

            }
        );

    }

});

// ==========================================
// LIGHTING PHOTO VIEWER
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const photos = document.querySelectorAll(
        ".service-photo-grid img"
    );

    if (!photos.length) return;

    let currentPhoto = 0;

    // Create viewer
    const viewer = document.createElement("div");

    viewer.className = "photo-viewer";

    viewer.innerHTML = `
        <button class="photo-close" aria-label="Close">
            ×
        </button>

        <button class="photo-prev" aria-label="Previous photo">
            ‹
        </button>

        <img class="photo-viewer-image" src="" alt="">

        <button class="photo-next" aria-label="Next photo">
            ›
        </button>
    `;

    document.body.appendChild(viewer);


    const viewerImage =
        viewer.querySelector(".photo-viewer-image");

    const closeButton =
        viewer.querySelector(".photo-close");

    const previousButton =
        viewer.querySelector(".photo-prev");

    const nextButton =
        viewer.querySelector(".photo-next");


    // Show selected photo
    function showPhoto(index) {

        if (index < 0) {
            index = photos.length - 1;
        }

        if (index >= photos.length) {
            index = 0;
        }

        currentPhoto = index;

        viewerImage.src =
            photos[currentPhoto].src;

        viewerImage.alt =
            photos[currentPhoto].alt;

        viewer.classList.add("show");

        document.body.style.overflow = "hidden";
    }


    // Open photo
    photos.forEach(function (photo, index) {

        photo.style.cursor = "pointer";

        photo.addEventListener("click", function () {

            showPhoto(index);

        });

    });


    // Previous
    previousButton.addEventListener("click", function (event) {

        event.stopPropagation();

        showPhoto(currentPhoto - 1);

    });


    // Next
    nextButton.addEventListener("click", function (event) {

        event.stopPropagation();

        showPhoto(currentPhoto + 1);

    });


    // Close
    closeButton.addEventListener("click", function () {

        viewer.classList.remove("show");

        document.body.style.overflow = "";

    });


    // Click outside image to close
    viewer.addEventListener("click", function (event) {

        if (event.target === viewer) {

            viewer.classList.remove("show");

            document.body.style.overflow = "";

        }

    });


    // Keyboard controls
    document.addEventListener("keydown", function (event) {

        if (!viewer.classList.contains("show")) return;


        if (event.key === "ArrowRight") {

            showPhoto(currentPhoto + 1);

        }


        if (event.key === "ArrowLeft") {

            showPhoto(currentPhoto - 1);

        }


        if (event.key === "Escape") {

            viewer.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

});
