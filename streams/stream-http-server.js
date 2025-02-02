import { createServer } from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
    _transform(chunck, encoding, callback) {
        const transformedChunk = Number(chunck.toString()) * -1;

        console.log(transformedChunk);

        callback(null, Buffer.from(String(transformedChunk)))
    }

}

const server = createServer(async (req, res)=> {
    const buffers = [];

    for await (const chunck of req) {
        buffers.push(chunck)
    }

    const fullStreamContent = Buffer.concat(buffers).toString();
    console.log(fullStreamContent);

    res.end(fullStreamContent);
})

server.listen(3030, () => {
    console.log(`Server running: http://localhost:3030`)
})