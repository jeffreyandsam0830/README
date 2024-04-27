document.addEventListener("DOMContentLoaded", function() {
    // Check if recent username and password are stored
    var recentUsername = localStorage.getItem("recentUsername");
    var recentPassword = localStorage.getItem("recentPassword");
    
    // Populate the input fields with recent username and password
    if (recentUsername && recentPassword) {
        document.getElementById("username").value = recentUsername;
        document.getElementById("password").value = recentPassword;
    }

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve username and password
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Store recent username and password
        localStorage.setItem("recentUsername", username);
        localStorage.setItem("recentPassword", password);

        // Simulate authentication (you would typically perform this on the server)
        if (username === "jeffrey" && password === "jeff08") {
            // Hide login form and show logout container
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("logoutContainer").style.display = "block";
            document.getElementById("loggedInUser").textContent = username;
            window.location.href = 'index.html';
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    document.getElementById("logoutButton").addEventListener("click", function() {
        // Show login form and hide logout container
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("logoutContainer").style.display = "none";

        // Clear input fields
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        // Clear recent username and password
        localStorage.removeItem("recentUsername");
        localStorage.removeItem("recentPassword");
    });
        // Add event listener for the "Forgot Password?" link
  document.getElementById("forgotPasswordLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior (redirecting)
    
    // Add your desired action for the "Forgot Password?" feature here
    alert("Please contact support for password recovery."); // You can replace this with your desired action

    // Add the URL of your password recovery page here
    window.location.href = "password_recovery.html"; // Replace "password_recovery.html" with the actual URL of your password recovery page
    

});

    });

