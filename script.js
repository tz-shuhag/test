document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cover-page-form');

    const inputs = {
        'course-title': 'output-course-title',
        'course-code': 'output-course-code',
        'submitted-to-name': 'output-submitted-to-name',
        'submitted-to-details': 'output-submitted-to-details',
        'submitted-by-name': 'output-submitted-by-name',
        'submitted-by-details': 'output-submitted-by-details',
        'submission-date': 'output-submission-date'
    };

    function updateCoverPage() {
        for (const [inputId, outputId] of Object.entries(inputs)) {
            const inputElement = document.getElementById(inputId);
            const outputElement = document.getElementById(outputId);
            if (inputElement && outputElement) {
                outputElement.textContent = inputElement.value;
            }
        }
    }

    form.addEventListener('input', updateCoverPage);

    // Initial load
    updateCoverPage();
});