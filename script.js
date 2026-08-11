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
                "opacity 0.6s ease, transform 0.3s ease";

            observer.observe(card);

        });

    } else {

        cards.forEach(function (card) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        });

    }


    // ==========================================
    // LIGHTING PHOTO FULL-SCREEN VIEWER
    // ==========================================

    const serviceImages =
        document.querySelectorAll(".service-photo-placeholder img");

    if (serviceImages.length > 0) {

        // Create full-screen viewer

        const viewer = document.createElement("div");

        viewer.className = "photo-viewer";

        viewer.innerHTML = `
            <button class="photo-viewer-close" aria-label="Close">
                ×
            </button>

            <img class="photo-viewer-image" src="" alt="">
        `;

        document.body.appendChild(viewer);


        const viewerImage =
            viewer.querySelector(".photo-viewer-image");

        const closeButton =
            viewer.querySelector(".photo-viewer-close");


        // Open image

        serviceImages.forEach(function (image) {

            image.style.cursor = "pointer";

            image.addEventListener("click", function () {

                viewerImage.src = this.src;
                viewerImage.alt = this.alt;

                viewer.classList.add("show");

                document.body.style.overflow = "hidden";

            });

        });


        // Close button

        closeButton.addEventListener("click", function () {

            closePhotoViewer();

        });


        // Click outside image to close

        viewer.addEventListener("click", function (event) {

            if (event.target === viewer) {

                closePhotoViewer();

            }

        });


        // ESC key closes image

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                closePhotoViewer();

            }

        });


        function closePhotoViewer() {

            viewer.classList.remove("show");

            document.body.style.overflow = "";

            viewerImage.src = "";

        }

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
