document.addEventListener('DOMContentLoaded', function () {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSG8x8bbPptSkst7INyoAoflhAuvjlGYUCdbi_U_T6Ulqscq7flhvU5ED7tGWjjwQwTPakzmI20P0xF/pub?output=csv')
        .then(response => response.text())
        .then(data => {
            // Split the CSV data into rows
            const rows = data.split('\n');

            // Remove the header row if present
            const headerRow = rows[0].split(',');
            if (headerRow.length > 1) {
                rows.shift(); // Remove the first row (header)
            }

            // Populate the table with data
            const tableBody = document.querySelector('#data-table tbody');
            rows.forEach(rowData => {
                const rowValues = rowData.split(',');
                const newRow = document.createElement('tr');
                rowValues.forEach(value => {
                    const newCell = document.createElement('td');
                    newCell.textContent = value;
                    newRow.appendChild(newCell);
                });
                tableBody.appendChild(newRow);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
