import { createServer } from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
    _transform(chunck, encoding, callback) {
        const transformedChunk = Number(chunck.toString()) * -1;

        console.log(transformedChunk);

        callback(null, Buffer.from(String(transformedChunk)))
    }

}

const server = createServer((req, res)=> {
    return req
        .pipe(new InverseNumberStream())
        .pipe(res)
})

server.listen(3030, () => {
    console.log(`Server running: http://localhost:3030`)
})