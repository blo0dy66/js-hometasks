class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        let printedText = '';
        for (let i = 0; i < text.length; i++) {
            if (this.ink <= 0) {
                console.log('The marker is out of ink!');
                break;
            }
            if (text[i] !== ' ') {
                printedText += this.color;
                this.ink -= 0.5;
            } else {
                printedText += ' ';
            }
        }
        console.log(printedText);
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.ink = 100;
    }
}

const marker = new RefillableMarker('blue', 50);
marker.print('Hello world!');
marker.refill();
marker.print('This marker can be refilled.');