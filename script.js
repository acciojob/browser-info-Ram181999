//your JS code here. If required.

 // Get browser name and version from the navigator object
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Create a message with the browser information
        const message = "You are using " + browserName + " version " + browserVersion;

        // Find the browser-info div and update its content
        const browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = message;