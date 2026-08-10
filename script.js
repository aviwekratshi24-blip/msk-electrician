document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       STAR RATING
    ========================= */

    const stars = document.querySelectorAll(".rating-stars button");
    const ratingInput = document.querySelector("#rating");

    stars.forEach(function (star, index) {

        star.addEventListener("click", function (e) {

            e.preventDefault();

            const rating = index + 1;

            if (ratingInput) {
                ratingInput.value = rating;
            }

            stars.forEach(function (item, i) {

                if (i <= index) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }

            });

        });

    });


    /* =========================
       FEEDBACK FORM
    ========================= */

    const form = document.querySelector("#review-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const feedback = document.querySelector("#review-feedback");
            const name = document.querySelector("#review-name");

            const rating = ratingInput
                ? ratingInput.value
                : "";

            const feedbackText = feedback
                ? feedback.value.trim()
                : "";

            if (!rating) {
                alert("Please select a star rating.");
                return;
            }

            if (!feedbackText) {
                alert("Please share your experience.");
                return;
            }

            alert(
                "Thank you" +
                (name && name.value
                    ? " " + name.value
                    : "") +
                "! Your feedback has been received."
            );

            form.reset();

            stars.forEach(function (star) {
                star.classList.remove("active");
            });

            if (ratingInput) {
                ratingInput.value = "";
            }

        });

    }


    /* =========================
       SERVICE CARD ANIMATION
    ========================= */

    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
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
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "0.6s ease";

        observer.observe(card);

    });

});
