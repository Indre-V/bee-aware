// script found on Slack
document.addEventListener("DOMContentLoaded", function () {
    const checkboxToggle = document.getElementById("checkbox-toggle");
    const menuItems = document.querySelectorAll(".menu a");

    function closeMenu() {
        checkboxToggle.checked = false;
    }

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", closeMenu);
    });
});