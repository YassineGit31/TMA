function changeLanguage(languageCode) {
    if (languageCode === 'fr') {
        window.location.href = "index-fr.html";
    } else if (languageCode === 'en') {
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("checkbox");
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    const toggleButton = document.querySelector(".toggle");

    checkbox.addEventListener("change", () => {
        menu.style.display = checkbox.checked ? "flex" : "none";
    });

    document.addEventListener("click", (event) => {
        if (
            checkbox.checked &&
            !nav.contains(event.target) &&
            !toggleButton.contains(event.target)
        ) {
            checkbox.checked = false;
            menu.style.display = "none";
        }
    });
});

// Toggle details function
function toggleDetails(id) {
    const element = document.getElementById(id);

    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        setTimeout(() => element.classList.add('show'), 0);
    } else {
        element.classList.remove('show');
        setTimeout(() => element.classList.add('hidden'), 400);
    }
}

// 
