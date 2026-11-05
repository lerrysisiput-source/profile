document.addEventListener("DOMContentLoaded", function () {

    const translations = {
        en: {
            language_label: "Select language",
            nav_home: "Home",
            nav_about: "About Me",
            nav_projects: "Projects",
            nav_contact: "Contact",
            home_greeting: "Hello, I'm",
            home_role: "Informatics Student",
            home_description: "An informatics student with an interest in game development, passionate about creating engaging gaming experiences through creative ideas and technology.",
            home_journey: "The Beginning of My Journey",
            home_personal_space: "My Personal Space",
            about_title: "About Me",
            about_heading: "The Beginning",
            about_paragraph_one: "I am an Informatics student at Gunadarma University with an interest in developing my skills in game development. I am passionate about programming and curious about how code can be transformed into interactive experiences that others can enjoy.",
            about_paragraph_two: "I am still at the beginning of my journey, but I want to keep learning, experimenting, and creating new things. My goal is to grow into a Game Developer who can create games that are fun, meaningful, and memorable for players.",
            about_education: "Education",
            about_education_degree: "Informatics",
            about_education_school: "Gunadarma University",
            about_skills: "Skills",
            about_skills_area: "Programming",
            about_skills_detail: "Python, MySQL, C++ (Currently Learning)",
            about_interests: "Interests",
            about_interest_game: "Game Development",
            about_interest_tech: "Technology & Programming",
            projects_title: "My Projects",
            projects_number: "No.",
            projects_project: "Project",
            projects_built_with: "Built With",
            projects_link: "Link",
            contact_label: "GET IN TOUCH",
            contact_title: "Let's Connect",
            contact_intro: "Contact me via email or social media. I am open to discussions, collaborations, and new opportunities.",
            contact_find_online: "Find Me Online",
            space_eyebrow: "BEYOND THE CODE",
            space_heading: "My Personal Space",
            space_description: "A little more about what I listen to, where I connect, and what I play.",
            space_spotify_title: "My Spotify Playlist",
            space_spotify_subtitle: "Currently on repeat",
            space_spotify_description: "A playlist of songs I enjoy listening to.",
            space_spotify_link: "Open in Spotify",
            space_discord_title: "Discord Profile",
            space_discord_subtitle: "Let's connect and play",
            space_discord_description: "Connect with me for conversations, gaming, and community.",
            space_discord_caption: "Discord Profile",
            space_steam_title: "Steam Profile",
            space_steam_subtitle: "My gaming library",
            space_steam_description: "Take a look at my Steam profile and the games I enjoy.",
            space_steam_caption: "Steam Profile",
            widget_eyebrow: "LET'S TALK",
            widget_title: "Send a Message",
            widget_close: "Close form",
            widget_description: "Have a question or want to discuss something? Send me a message using this form.",
            widget_name: "Name",
            widget_name_placeholder: "Your name",
            widget_email: "Email",
            widget_email_placeholder: "name@email.com",
            widget_message: "Message",
            widget_message_placeholder: "Write your message...",
            widget_send: "Send Message",
            widget_note: "The send button will open your email application to send the message.",
            widget_open: "Open message form",
            widget_toggle: "Message",
            title_home: "Andre Maulana - Portfolio",
            title_about: "About Me - Andre Maulana",
            title_projects: "Projects - Andre Maulana",
            title_contact: "Contact - Andre Maulana"
        },
        id: {
            language_label: "Pilih bahasa",
            nav_home: "Beranda",
            nav_about: "Tentang Saya",
            nav_projects: "Proyek",
            nav_contact: "Kontak",
            home_greeting: "Halo, saya",
            home_role: "Mahasiswa Informatika",
            home_description: "Saya mahasiswa Informatika yang tertarik pada pengembangan game dan bersemangat menciptakan pengalaman bermain yang menarik melalui ide kreatif dan teknologi.",
            home_journey: "Awal Perjalanan Saya",
            home_personal_space: "Ruang Pribadi Saya",
            about_title: "Tentang Saya",
            about_heading: "Awal Perjalanan",
            about_paragraph_one: "Saya adalah mahasiswa Informatika di Universitas Gunadarma yang tertarik mengembangkan kemampuan di bidang pengembangan game. Saya menyukai pemrograman dan ingin memahami bagaimana kode dapat diubah menjadi pengalaman interaktif yang dapat dinikmati orang lain.",
            about_paragraph_two: "Perjalanan saya masih di tahap awal, tetapi saya ingin terus belajar, bereksperimen, dan menciptakan hal-hal baru. Tujuan saya adalah berkembang menjadi Game Developer yang mampu membuat game yang seru, bermakna, dan berkesan bagi para pemain.",
            about_education: "Pendidikan",
            about_education_degree: "Informatika",
            about_education_school: "Universitas Gunadarma",
            about_skills: "Keahlian",
            about_skills_area: "Pemrograman",
            about_skills_detail: "Python, MySQL, C++ (Sedang Dipelajari)",
            about_interests: "Minat",
            about_interest_game: "Pengembangan Game",
            about_interest_tech: "Teknologi & Pemrograman",
            projects_title: "Proyek Saya",
            projects_number: "No.",
            projects_project: "Proyek",
            projects_built_with: "Teknologi",
            projects_link: "Tautan",
            contact_label: "HUBUNGI SAYA",
            contact_title: "Mari Terhubung",
            contact_intro: "Hubungi saya melalui email atau media sosial. Saya terbuka untuk berdiskusi, berkolaborasi, dan menjajaki peluang baru.",
            contact_find_online: "Temukan Saya di Media Sosial",
            space_eyebrow: "LEBIH DARI SEKADAR KODE",
            space_heading: "Ruang Pribadi Saya",
            space_description: "Sedikit tentang musik yang saya dengarkan, tempat saya terhubung, dan game yang saya mainkan.",
            space_spotify_title: "Playlist Spotify Saya",
            space_spotify_subtitle: "Sedang sering diputar",
            space_spotify_description: "Playlist berisi lagu-lagu yang saya suka dengarkan.",
            space_spotify_link: "Buka di Spotify",
            space_discord_title: "Profil Discord",
            space_discord_subtitle: "Mari terhubung dan bermain",
            space_discord_description: "Terhubung dengan saya untuk berbincang, bermain game, dan bergabung dalam komunitas.",
            space_discord_caption: "Profil Discord",
            space_steam_title: "Profil Steam",
            space_steam_subtitle: "Koleksi game saya",
            space_steam_description: "Lihat profil Steam saya dan game yang saya nikmati.",
            space_steam_caption: "Profil Steam",
            widget_eyebrow: "MARI BERBINCANG",
            widget_title: "Kirim Pesan",
            widget_close: "Tutup formulir",
            widget_description: "Punya pertanyaan atau ingin berdiskusi? Kirimkan pesan kepada saya melalui formulir ini.",
            widget_name: "Nama",
            widget_name_placeholder: "Nama Anda",
            widget_email: "Email",
            widget_email_placeholder: "nama@email.com",
            widget_message: "Pesan",
            widget_message_placeholder: "Tulis pesan Anda...",
            widget_send: "Kirim Pesan",
            widget_note: "Tombol kirim akan membuka aplikasi email Anda untuk mengirim pesan.",
            widget_open: "Buka formulir pesan",
            widget_toggle: "Pesan",
            title_home: "Andre Maulana - Portofolio",
            title_about: "Tentang Saya - Andre Maulana",
            title_projects: "Proyek - Andre Maulana",
            title_contact: "Kontak - Andre Maulana"
        }
    };

    const languageSelector = document.getElementById("languageSelector");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const titleKeys = {
        "index.html": "title_home",
        "about.html": "title_about",
        "project.html": "title_projects",
        "contact.html": "title_contact"
    };

    function applyLanguage(language) {
        const selectedTranslations = translations[language] || translations.en;
        document.documentElement.lang = language === "id" ? "id" : "en";

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const translatedText = selectedTranslations[element.dataset.i18n];
            if (translatedText) {
                element.textContent = translatedText;
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            const translatedText = selectedTranslations[element.dataset.i18nPlaceholder];
            if (translatedText) {
                element.setAttribute("placeholder", translatedText);
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
            const translatedText = selectedTranslations[element.dataset.i18nAriaLabel];
            if (translatedText) {
                element.setAttribute("aria-label", translatedText);
            }
        });

        document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
            const translatedText = selectedTranslations[element.dataset.i18nTitle];
            if (translatedText) {
                element.setAttribute("title", translatedText);
            }
        });

        const titleKey = titleKeys[currentPage];
        if (titleKey) {
            document.title = selectedTranslations[titleKey];
        }
    }

    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const initialLanguage = savedLanguage === "id" ? "id" : "en";
    if (languageSelector) {
        languageSelector.value = initialLanguage;
        languageSelector.addEventListener("change", function () {
            const selectedLanguage = languageSelector.value === "id" ? "id" : "en";
            window.localStorage.setItem("portfolio-language", selectedLanguage);
            applyLanguage(selectedLanguage);
        });
    }
    applyLanguage(initialLanguage);

    // =========================
    // ACTIVE NAVIGATION
    // =========================

    const navLinks = document.querySelectorAll(".navbar nav a");

    function updateActiveNavigation() {
        const currentUrl = new URL(window.location.href);
        const currentHash = currentUrl.hash || (currentPage === "index.html" ? "#home" : "");

        navLinks.forEach(function (link) {
            const target = new URL(link.href, currentUrl);
            const isCurrentSection = target.pathname === currentUrl.pathname &&
                target.hash === currentHash;
            link.classList.toggle("active", isCurrentSection);
        });
    }

    updateActiveNavigation();
    window.addEventListener("hashchange", updateActiveNavigation);


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