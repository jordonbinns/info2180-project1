// Newsletter subscription behaviour
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".message");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email !== "") {
            messageDiv.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
        } else {
            messageDiv.textContent = "Please enter a valid email address.";
        }
    });
});
