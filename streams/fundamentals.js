import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1;
    
    _read() {
        setTimeout(() => {
            const chunck = this.index++;

        if(chunck > 100) {
            this.push(null);
        } else {
            const buf = Buffer.from(String(chunck));
            
            this.push(buf)
        }
        }, 1000)
    }
}
class InverseNumberStream extends Transform {
    _transform(chunck, encoding, callback) {
        const transformedChunk = Number(chunck.toString()) * -1;

        callback(null, Buffer.from(String(transformedChunk)))
    }

}

class MultiplyByTenStream extends Writable {
    _write(chunck, encoding, callback) {
        console.log(Number(chunck.toString()) * 10)
        callback()
    }
}
new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())