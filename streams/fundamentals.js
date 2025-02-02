import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1;
    
    _read() {
        const chunck = this.index++;

        if(chunck > 100) {
            this.push(null);
        } else {
            this.push(chunck)
        }
    }
}

new OneToHundredStream().pipe(process.stdout)