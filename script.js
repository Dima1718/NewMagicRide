document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("showTextButton");
    const text = document.getElementById("text");

    button.addEventListener("click", () => {
        if (text.style.display === "none") {
            text.style.display = "block"; // Показываем текст
        } else {
            text.style.display = "none"; // Прячем текст, если он уже видим
        }
    });
});
