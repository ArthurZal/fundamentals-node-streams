import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
    index = 1;
    
    _read() {
        setTimeout(()=> {
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

async function sendData() {
    
    try {
        const response = await fetch('http://localhost:3030', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: new OneToHundredStream(),
            duplex: 'half'
        });

        const responseText = await response.text();
        console.log(responseText);
    
    } catch (error) {
        console.log(error)
    }
}
sendData();
