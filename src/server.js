import { createServer } from 'node:http';
import { json } from './middlewares/json.js';

const hostName = 'localhost';
const port = 3000;
const users = [];

const server = createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);

    if (method === 'GET' && url === '/users') {

        return res
            .end(JSON.stringify(users));
    }
    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body;

        users.push({
            id: 1,
            name,
            email,
        })

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end('Rota não encontrada!')

})

server.listen(port, hostName, () => {
    console.log(`Server running: http://${hostName}:${port}`);
})