const http = require('http');
const {Client} = require('pg');
require('dotenv').config();


const client = new Client({
    user: process.env.USER,
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});


client.connect().catch(err => console.error('Database connection error:', err));


const server = http.createServer((req, res) => {


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    if (req.url === '/') {

        (async () => {

            try{
                const result = await client.query('SELECT * FROM transactions');
                res.end(JSON.stringify(result.rows));
            }
            catch (err) {
                res.end('Error fetching transactions');
            }

        })();
        
        return;

    }
	
	else if (req.method === 'OPTIONS') {
    	res.writeHead(204);
    	res.end();
    	return;
	}
	
	else if (req.method === 'GET' && req.url === '/transactions') {

        try{
            const result = client.query('SELECT * FROM transactions');

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result.rows));
        }
        catch (err) {
            res.writeHead(500);
            res.end('Server error');
        };
    }

	else if (req.method === 'POST' && req.url === '/transactions') {

        let body = '';

        req.on('data', chunk => {
        body += chunk;
        });

        req.on('end', async() => {

            try{

                const data = JSON.parse(body);

                const { type, amount, explanation } = data;

                if (!type || !amount || !explanation) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({error: 'type, amount and explanation are required'}));
                }

                const result = await client.query(`INSERT INTO transactions (type, amount, explanation, time_date) 
                    VALUES ($1, $2, $3, NOW())
                    RETURNING *`, [type, amount, explanation]
                );

                res.writeHead(201, {'Content-Type': 'application/json'});

                res.end(JSON.stringify(result.rows[0]));

            }
            catch (err) {
                res.writeHead(500);
                res.end('Server error');
            };
        });
    }
	
	else if (req.method === 'DELETE' && req.url.startsWith('/transactions/')) {

        (async () => {

            try{
            
                const id = parseInt(req.url.split('/')[2]);

                const result = await client.query('DELETE FROM transactions WHERE id = $1 RETURNING *', [id]);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result.rows[0]));

            }
            catch(err){
                res.writeHead(500);
                res.end('Server error');
            };

        })();

    }
	
	else {
        res.statusCode = 404;
        res.end('Not found');
    };


});

server.listen(3002, () => {
    console.log('Server is listening on port 3002');
});