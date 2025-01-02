document.getElementById("learningForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const outputDiv = document.getElementById("output");

    // Collecting form data
    const formData = new FormData(this);
    let pathwayDetails = "<h2>Your Personalized Learning Pathway</h2><ul>";

    formData.forEach((value, key) => {
        pathwayDetails += `<li><strong>${key.replace(/([A-Z])/g, ' $1')}: </strong>${value}</li>`;
    });

    pathwayDetails += "</ul>";

    // Displaying the output
    outputDiv.innerHTML = pathwayDetails;
});
