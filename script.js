document.getElementById("eventForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value
    };

    const scriptURL = "YOUR_GOOGLE_SCRIPT_WEB_APP_URL";

    try {
        const res = await fetch(scriptURL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.result === "success") {
            document.getElementById("successMessage").innerHTML =
                "Alhamdulillah! Your registration has been received.";
            document.getElementById("successMessage").style.display = "block";
            form.reset();
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});
