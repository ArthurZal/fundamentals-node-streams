import { createServer } from 'node:http';

const server = createServer((req, res)=> {

})

server.listen(3030, () => {
    console.log(`Server running: http://localhost:3030`)
})