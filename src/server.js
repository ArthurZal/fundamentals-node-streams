import { createServer } from 'node:http';

const hostName = 'localhost';
const port = 3000;

const server = createServer((req, res) => {
    const { method, url } = req;

    if(method === 'GET' && url === '/users') {

        return res.end('Lista de usuários');
    }
    if(method === 'POST' && url === '/users') {

        return res.end('Usuário criado com sucesso!');
    }


})

server.listen(port, hostName, () => {
    console.log(`Server running: http://${hostName}:${port}`);
})