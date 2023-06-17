const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("../service-worker.js")
            .then((swRegister) => {
                console.log("Service Worker Registered!");
            })
            .catch((error) => {
                console.log("Service Worker Failded!", error);
            });
    });
}