import toast from "react-hot-toast";

export function downloadExcelDefault(button, data, name, showToast = true) {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
    if (showToast) {
        showToastDefault('success', 'Donwload executado com sucesso.')
    }
}

export function showToastDefault(type, message, duration = 30000) {
    const toastTypes = {
        error: (msg) => toast.error(msg, { duration }),
        success: (msg) => toast.success(msg, { duration }),
    };
    if (toastTypes[type]) {
        console.log('exibe toast')
        toastTypes[type](message);
    }
}

export function convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));
    for (const row of data) {
        const values = headers.map(header => row[header]);
        csvRows.push(values.join(','));
    }
    return csvRows.join('\n');
}