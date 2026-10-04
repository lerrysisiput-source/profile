document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ACTIVE NAVIGATION
    // =========================

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


    // =========================
    // PAGE ENTRANCE ANIMATION
    // =========================

    requestAnimationFrame(function () {
        document.body.classList.add("page-loaded");
    });


    // =========================
    // PAGE TRANSITION
    // =========================

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = link.getAttribute("href");

            // Jangan ubah link:
            // - kosong
            // - anchor (#)
            // - external link
            // - mailto
            if (
                !target ||
                target.startsWith("#") ||
                target.startsWith("http") ||
                target.startsWith("mailto:")
            ) {
                return;
            }


            // Jangan melakukan animasi jika
            // link menuju halaman yang sedang dibuka
            const targetPage =
                target.split("/").pop();

            if (targetPage === currentPage) {
                return;
            }


            // Hentikan navigasi default
            event.preventDefault();


            // Mulai animasi keluar
            document.body.classList.remove("page-loaded");
            document.body.classList.add("page-leaving");


            // Pindah halaman setelah animasi selesai
            setTimeout(function () {

                window.location.href = target;

            }, 280);

        });

    });

});
