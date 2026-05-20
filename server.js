const http = require('http');


let transactions = [
];


// const fs = require('fs');
const server = http.createServer((req, res) => {


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.url === '/') {
        res.end(JSON.stringify(transactions));
        return;
    }
	
	else if (req.method === 'OPTIONS') {
    	res.writeHead(204);
    	res.end();
    	return;
	}
	
	else if (req.method === 'GET' && req.url === '/transactions') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(transactions));
    }

	else if (req.method === 'POST' && req.url === '/transactions') {

        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {

            const data = JSON.parse(body);

            transactions.push(data);

            res.writeHead(201, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(data));
        });
    }
	
	else if (req.method === 'DELETE' && req.url.startsWith('/transactions/')) {

        const id = parseInt(req.url.split('/')[2]);

        transactions = transactions.filter(txn => txn.id !== id);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(transactions));
    }
	
	else {
        res.statusCode = 404;
        res.end('Not Found');
    };


});

server.listen(3002, () => {
    console.log('Server is listening on port 3002');
});