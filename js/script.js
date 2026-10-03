document.addEventListener("DOMContentLoaded", function () {

    // Highlight the current page in the navigation.
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {
        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });


    // Page entrance animation.
    requestAnimationFrame(function () {
        document.body.classList.add("page-loaded");
    });


    // Smooth page-to-page transition.
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const target = link.getAttribute("href");

            // Keep external links and same-page links untouched.
            if (
                !target ||
                target.startsWith("#") ||
                target.startsWith("http") ||
                target.startsWith("mailto:")
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-leaving");

            setTimeout(function () {
                window.location.href = target;
            }, 350);
        });
    });

});