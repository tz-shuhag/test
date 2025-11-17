document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cover-page-form');

    // Defines which input fields map directly to which output fields
    const directMappings = {
        'report-title': 'output-report-title',
        'course-title': 'output-course-title',
        'course-code': 'output-course-code',
        'submitted-to-name': 'output-submitted-to-name',
        'submitted-to-details': 'output-submitted-to-details',
        'submitted-by-name': 'output-submitted-by-name',
        'submission-date': 'output-submission-date'
    };

    function updateCoverPage() {
        // Handle all the direct input-to-output mappings
        for (const [inputId, outputId] of Object.entries(directMappings)) {
            const inputElement = document.getElementById(inputId);
            const outputElement = document.getElementById(outputId);
            if (inputElement && outputElement) {
                outputElement.textContent = inputElement.value;
            }
        }

        // --- Handle special combined fields ---
        
        // Combine ID and Batch/Section for the 'Submitted By' details
        const submitterId = document.getElementById('submitter-id').value;
        const submitterBatch = document.getElementById('submitter-batch').value;
        const outputSubmittedByDetails = document.getElementById('output-submitted-by-details');
        
        if (outputSubmittedByDetails) {
            outputSubmittedByDetails.textContent = `ID : ${submitterId}\n${submitterBatch}`;
        }
    }

    // Add an event listener to the form to update the page on any input change
    form.addEventListener('input', updateCoverPage);

    // Call the function once on initial page load to populate the fields
    updateCoverPage();
});```

Simply update your repository with this new code, and your cover page generator will work as you've requested.