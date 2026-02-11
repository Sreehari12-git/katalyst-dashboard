document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form submission reload

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Demo credentials
    if (email === "sreehari@gnapi.tech" && password === "123456") {
        // ✅ Use sessionStorage instead of localStorage
        sessionStorage.setItem("loggedIn", "true");

        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        // Show error if credentials are wrong
        document.getElementById("error").innerText = "Invalid email or password";
    }
});
