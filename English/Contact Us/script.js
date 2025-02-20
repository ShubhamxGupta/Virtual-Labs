function validateForm() {
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    if (name.value.trim() === "") {
        document.getElementById("name-error").textContent = "Name is required";
        isValid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("email-error").textContent =
            "Email is required";
        isValid = false;
    } else if (!email.value.includes("@")) {
        document.getElementById("email-error").textContent = "Invalid email";
        isValid = false;
    }

    if (message.value.trim() === "") {
        document.getElementById("message-error").textContent =
            "Message is required";
        isValid = false;
    }

    return isValid;
}
