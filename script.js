// Handle form submission
document.getElementById('generateBtn').addEventListener('click', () => {
    document.getElementById('hiddenSubmit').click();
});

// Share functionality
document.getElementById('shareBtn').addEventListener('click', () => {
    const form = document.getElementById('coverForm');
    const inputs = form.querySelectorAll('input[name]');
    let url = window.location.origin + window.location.pathname.replace('index.html', 'print.html') + '?';
    
    inputs.forEach((input, index) => {
        url += input.name + '=' + encodeURIComponent(input.value);
        if (index < inputs.length - 1) url += '&';
    });
    
    navigator.clipboard.writeText(url)
        .then(() => {
            const btn = document.getElementById('shareBtn');
            btn.textContent = 'Copied!';
            btn.classList.add('success');
            setTimeout(() => {
                btn.textContent = 'Share Link';
                btn.classList.remove('success');
            }, 2000);
        })
        .catch(() => {
            const btn = document.getElementById('shareBtn');
            btn.textContent = 'Failed!';
            btn.classList.add('error');
            setTimeout(() => {
                btn.textContent = 'Share Link';
                btn.classList.remove('error');
            }, 2000);
        });
});

// Update label position when input has value
function updateLabelPositions() {
    document.querySelectorAll('.form-group label input').forEach(input => {
        const label = input.previousElementSibling;
        if (input.value.trim() !== '') {
            label.style.transform = 'translateY(-20px) scale(0.8)';
            label.style.color = '#3498db';
        } else {
            label.style.transform = '';
            label.style.color = '';
        }
    });
}

// Initialize label positions
updateLabelPositions();

// Add event listeners for dynamic label positioning
document.querySelectorAll('.form-group label input').forEach(input => {
    input.addEventListener('input', updateLabelPositions);
    input.addEventListener('focus', () => {
        const label = input.previousElementSibling;
        label.style.color = '#3498db';
    });
    input.addEventListener('blur', () => {
        const label = input.previousElementSibling;
        if (input.value.trim() === '') {
            label.style.color = '';
        }
    });
});
