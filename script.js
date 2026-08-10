// ========================================
// MSK ELECTRICIAN WEBSITE
// MAIN JAVASCRIPT
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
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

} else {

    // Fallback for older browsers
    cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    });

}


// ========================================
// STAR RATING
// ========================================

const ratingButtons = document.querySelectorAll(
    ".rating-stars button"
);

const ratingInput = document.getElementById("rating");
const ratingText = document.getElementById("rating-text");

let selectedRating = 0;


// Rating descriptions
const ratingMessages = {
    1: "We appreciate your honesty.",
    2: "Thank you for your feedback.",
    3: "Thank you for sharing your experience.",
    4: "We're glad you had a good experience.",
    5: "Thank you — we're glad you were happy with the service."
};


// Make sure the stars actually work
ratingButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const rating = Number(this.dataset.rating);

        selectedRating = rating;

        // Save rating in hidden input
        if (ratingInput) {
            ratingInput.value = rating;
        }

        // Update star appearance
        ratingButtons.forEach((star) => {

            const starRating = Number(star.dataset.rating);

            if (starRating <= rating) {
                star.classList.add("active");
            } else {
                star.classList.remove("active");
            }

        });

        // Update text
        if (ratingText) {
            ratingText.textContent = ratingMessages[rating];
        }

    });


    // Hover effect
    button.addEventListener("mouseenter", function () {

        const hoverRating = Number(this.dataset.rating);

        ratingButtons.forEach((star) => {

            const starRating = Number(star.dataset.rating);

            if (starRating <= hoverRating) {
                star.style.color = "#f5b400";
            } else {
                star.style.color = "#d7d7d7";
            }

        });

    });

});


// Return to selected rating after mouse leaves
const ratingContainer = document.querySelector(".rating-stars");

if (ratingContainer) {

    ratingContainer.addEventListener("mouseleave", function () {

        ratingButtons.forEach((star) => {

            const starRating = Number(star.dataset.rating);

            if (starRating <= selectedRating) {
                star.style.color = "#f5b400";
            } else {
                star.style.color = "#d7d7d7";
            }

        });

    });

}


// ========================================
// REVIEW FORM
// ========================================

const reviewForm = document.getElementById("review-form");
const reviewSuccess = document.getElementById("review-success");

if (reviewForm) {

    reviewForm.addEventListener("submit", function (event) {

        // Stop the page from refreshing
        event.preventDefault();

        const nameInput = document.getElementById("review-name");
        const feedbackInput = document.getElementById("review-feedback");

        const name = nameInput ? nameInput.value.trim() : "";
        const feedback = feedbackInput
            ? feedbackInput.value.trim()
            : "";

        // Check rating
        if (selectedRating === 0) {

            if (ratingText) {
                ratingText.textContent =
                    "Please select a rating before submitting.";
                ratingText.style.color = "#c0392b";
            }

            return;
        }

        // Check feedback
        if (feedback === "") {

            if (feedbackInput) {
                feedbackInput.focus();
            }

            return;
        }

        // ========================================
        // SUCCESS MESSAGE
        // ========================================

        if (reviewSuccess) {

            reviewSuccess.style.display = "block";

            reviewSuccess.innerHTML =
                "Thank you for taking the time to share your experience with us.";

        }

        // Hide form fields after successful submission
        if (nameInput) {
            nameInput.value = "";
        }

        if (feedbackInput) {
            feedbackInput.value = "";
        }

        // Reset stars
        selectedRating = 0;

        if (ratingInput) {
            ratingInput.value = "";
        }

        ratingButtons.forEach((star) => {

            star.classList.remove("active");
            star.style.color = "#d7d7d7";

        });

        if (ratingText) {
            ratingText.textContent =
                "Thank you for your feedback.";
            ratingText.style.color = "#777777";
        }

    });

}


// ========================================
// SMOOTH NAVIGATION
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
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


// ========================================
// CONSOLE CHECK
// ========================================

console.log("MSK Electrician website loaded successfully.");
console.log("Star rating system ready.");
```
