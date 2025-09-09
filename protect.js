// protect.js
const BASE_URL = "https://script.google.com/macros/s/AKfycbx4Bx-4lSDrBsB1_i6E4reHBiKgKP1zhtVWryVoN8L90Bx72JHSNPaA12aV__fYbRA-/exec";
// 1. Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

// 2. Disable Specific Keys (Ctrl+U, Ctrl+Shift+I, F12, Ctrl+S, etc.)
document.addEventListener("keydown", function (e) {
    if (
        (e.ctrlKey && e.key.toLowerCase() === "u") || // View Source
        (e.ctrlKey && e.key.toLowerCase() === "s") || // Save
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || // Inspect
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") || // Console
        (e.ctrlKey && e.key.toLowerCase() === "c") || // Copy
        (e.key === "F12") // DevTools
    ) {
        e.preventDefault();
    }
}, false);

// 3. Prevent Copy / Cut / Paste
document.addEventListener("copy", function (e) {
    e.preventDefault();
});
document.addEventListener("cut", function (e) {
    e.preventDefault();
});
document.addEventListener("paste", function (e) {
    e.preventDefault();
});

// protect.js
(function () {
    let allowedHost = "sunshine-portal.github.io";   // ✅ only hostname
    let loginURL = "https://sunshine-portal.github.io/bayana/login.html";

    const currentPage = window.location.pathname.split("/").pop();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    // Agar galat host se open ho ya direct protect.js load ho
    if (
        document.referrer === "" ||
        document.referrer === null ||
        window.location.hostname !== allowedHost ||
        window.location.pathname.endsWith("protect.js")
    ) {
        // ✅ Agar already login page par ho to dobara redirect mat karo
        if (currentPage !== "login.html") {
            window.location.replace(loginURL);
        }
    }

    // ✅ Agar login nahi hai aur koi aur page khola gaya hai (dashboard etc.)
    if (!isLoggedIn && currentPage !== "login.html") {
        window.location.replace(loginURL);
    }
})();
