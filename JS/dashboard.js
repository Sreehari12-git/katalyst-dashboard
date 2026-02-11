
 document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
        window.location.href = "index.html";
    }
 });
    document.getElementById("logoutBtn").addEventListener("click", () => {
        sessionStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });

 document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
 });
 const startPicker = flatpickr("#startDate", {
    dateFormat: "Y-m-d",
    onChange: function (selectedDates) {
        if (selectedDates.length > 0) {
            endPicker.set("minDate", selectedDates[0]);
        }
    }
});

const endPicker = flatpickr("#endDate", {
    dateFormat: "Y-m-d",
    onChange: function (selectedDates) {
        const startDate = startPicker.selectedDates[0];
        const endDate = selectedDates[0];

        if (startDate && endDate <= startDate) {
            alert("End date must be greater than start date");
            endPicker.clear();
        }
    }
});

// Optional: click calendar icon opens start date picker
document.getElementById("calendarTrigger").addEventListener("click", function () {
    startPicker.open();
});
