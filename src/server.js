import { createServer } from 'node:http';
import { json } from './middlewares/json.js';
import { Database } from './database.js';

const hostName = 'localhost';
const port = 3000;
const database = new Database();

const server = createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);

    if (method === 'GET' && url === '/users') {
        const users = database.select('users');

        return res.end(JSON.stringify(users));
    }
    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body;

        const user = {
            id: 1,
            name,
            email,
        }

        database.insert('users', user)

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end('Rota não encontrada!')

})

server.listen(port, hostName, () => {
    console.log(`Server running: http://${hostName}:${port}`);
})