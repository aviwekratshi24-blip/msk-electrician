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

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach((card) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

} else {

    cards.forEach((card) => {

        card.style.opacity = "1";

        card.style.transform =
            "translateY(0)";

    });

}


// ========================================
// FEEDBACK FORM
// ========================================

const reviewForm =
    document.getElementById("review-form");


if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("review-name");

            const feedback =
                document.getElementById(
                    "review-feedback"
                );

            const success =
                document.getElementById(
                    "review-success"
                );


            // Check name
            if (
                !name ||
                name.value.trim() === ""
            ) {

                name.focus();

                return;

            }


            // Check feedback
            if (
                !feedback ||
                feedback.value.trim() === ""
            ) {

                feedback.focus();

                return;

            }


            // Show success message
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
    "MSK Electrician website loaded successfully."
);
```
