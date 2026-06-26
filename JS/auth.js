document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "sreehari@gnapi.tech" && password === "123456") {
        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid email or password";
    }
});
