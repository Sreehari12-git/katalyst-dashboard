
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
 flatpickr("#dateRange", {
  mode: "range",            // enables selecting start and end date
  dateFormat: "Y-m-d",      // format as YYYY-MM-DD
  onClose: function(selectedDates) {
    if (selectedDates.length === 2) {
      const startDate = selectedDates[0];
      const endDate = selectedDates[1];

      if (endDate <= startDate) {
        alert("End date must be greater than start date");
        document.getElementById("dateRange").value = "";
      }
    }
  }
});

