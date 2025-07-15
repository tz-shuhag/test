// Get URL parameters
function getUrlParams() {
    const params = {};
    window.location.search.substring(1).split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        if (key) params[key] = decodeURIComponent(value || '');
    });
    return params;
}

// Redirect if no parameters
if (!window.location.search) {
    window.location.href = window.location.origin + window.location.pathname.replace('print.html', 'index.html');
}

// Fill in the cover page data
const params = getUrlParams();
document.querySelectorAll('[data-field]').forEach(element => {
    const field = element.getAttribute('data-field');
    if (params[field]) {
        element.textContent = params[field];
    } else {
        element.style.display = 'none';
    }
});

// Print functionality
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});

// PDF download functionality
document.getElementById('downloadBtn').addEventListener('click', () => {
    const docDefinition = {
        pageSize: 'A4',
        pageOrientation: 'portrait',
        content: [
            { text: 'Assignment No: ' + (params.cn || ''), style: 'header' },
            { text: params.tn || '', style: 'subheader' },
            { text: params.td || '', style: 'subheader' },
            { text: params.ah || '', style: 'header', margin: [0, 20, 0, 20] },
            { 
                text: params.at || '', 
                style: 'assignmentTopic',
                margin: [0, 0, 0, 40]
            },
            { text: params.sn || '', style: 'studentName' },
            { text: 'ID: ' + (params.si || ''), style: 'studentInfo' },
            { text: 'Batch: ' + (params.sb || ''), style: 'studentInfo' },
            { text: 'Submission Date: ' + (params.sd || ''), style: 'subheader', margin: [0, 40, 0, 0] }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center'
            },
            subheader: {
                fontSize: 14,
                alignment: 'center',
                margin: [0, 0, 0, 10]
            },
            assignmentTopic: {
                fontSize: 16,
                alignment: 'center',
                border: [true, true, true, true],
                borderColor: ['#000', '#000', '#000', '#000'],
                borderWidth: [1, 1, 1, 1],
                padding: [10, 0]
            },
            studentName: {
                fontSize: 16,
                bold: true,
                alignment: 'center',
                margin: [0, 40, 0, 10]
            },
            studentInfo: {
                fontSize: 14,
                alignment: 'center',
                margin: [0, 0, 0, 10]
            }
        }
    };

    pdfMake.createPdf(docDefinition).download('CoverPage.pdf');
});
