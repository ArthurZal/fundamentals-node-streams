import { createServer } from 'node:http';

const hostName = 'localhost';
const port = 3000;
const users = [];

const server = createServer((req, res) => {
    const { method, url } = req;

    if(method === 'GET' && url === '/users') {

        return res
            .setHeader('content-type', 'application/json')
            .end(JSON.stringify(users));
    }
    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Arthur Oliveira',
            email: 'zallarthur@gmai.com'
        })

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end('Rota não encontrada!')

})

server.listen(port, hostName, () => {
    console.log(`Server running: http://${hostName}:${port}`);
})