fetch('https://docs.google.com/spreadsheets/d/16MaWeEJ7hcAIbHKGGYlInP3inWNRvzWYvbVw0CH9Iwk/pub?output=csv')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#data-table tbody');
        data.forEach(row => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
                <td>${row[3]}</td>
                <td>${row[4]}</td>
                <td>${row[5]}</td>
            `;
            tableBody.appendChild(newRow);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
