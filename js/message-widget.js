(() => {
    const toggle = document.getElementById("messageToggle");
    const panel = document.getElementById("messagePanel");
    const close = document.getElementById("messageClose");
    const form = document.getElementById("messageForm");

    if (!toggle || !panel || !close || !form) return;

    const setOpen = (open) => {
        panel.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Tutup formulir pesan" : "Buka formulir pesan");
        if (open) {
            const firstInput = document.getElementById("messageName");
            if (firstInput) firstInput.focus();
        }
    };

    toggle.addEventListener("click", () => setOpen(panel.hidden));
    close.addEventListener("click", () => {
        setOpen(false);
        toggle.focus();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !panel.hidden) {
            setOpen(false);
            toggle.focus();
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const name = document.getElementById("messageName").value.trim();
        const email = document.getElementById("messageEmail").value.trim();
        const message = document.getElementById("messageText").value.trim();
        const subject = encodeURIComponent(`Pesan portofolio dari ${name}`);
        const body = encodeURIComponent(
            `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
        );

        // mailto opens the visitor's email app; it does not send silently from the website.
        window.location.href = `mailto:andremaul1806@gmail.com?subject=${subject}&body=${body}`;
    });
})();