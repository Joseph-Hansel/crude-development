addToDatabase = () => {
    
    const newRecord = records[records.length - 1];

    newRecord.id = records.length;

    fetch("http://localhost:3002/transactions", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
    })
        .catch(error => console.error('Error sending data:', error));

};

removeFromDatabase = (id) => {

    fetch(`http://localhost:3002/transactions/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
        .catch(error => console.error('Error sending data:', error));

};
