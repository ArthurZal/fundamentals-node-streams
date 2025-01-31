import { createServer } from 'node:http';

const hostName = 'localhost';
const port = 3000;

const server = createServer((req, res) => {
    res.end('server');
})

server.listen(port, hostName, () => {
    console.log(`Server running: http://${hostName}:${port}`);
})