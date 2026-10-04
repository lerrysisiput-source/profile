document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href) {
            return;
        }

        const linkPage = href.split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    // =========================
    // PAGE TRANSITION
    // =========================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = link.getAttribute("href");

            // Biarkan link eksternal, anchor, dan mailto
            // berjalan seperti biasa.
            if (
                !target ||
                target.startsWith("#") ||
                target.startsWith("http") ||
                target.startsWith("mailto:")
            ) {
                return;
            }

            const targetPage = target.split("/").pop();

            // Jika sedang berada di halaman yang sama,
            // tidak perlu menjalankan transisi.
            if (targetPage === currentPage) {
                return;
            }

            event.preventDefault();

            // Tampilkan overlay gelap.
            // Body tidak dibuat opacity: 0,
            // sehingga tidak muncul layar putih.
            document.body.classList.add("page-leaving");

            // Pindah halaman setelah overlay muncul.
            setTimeout(function () {
                window.location.href = target;
            }, 280);

        });

    });

});


// =========================
// BROWSER BACK / FORWARD
// =========================

window.addEventListener("pageshow", function () {
    document.body.classList.remove("page-leaving");
});