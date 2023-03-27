class Circle {

    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }
    circleLength() {
        return 2 * Math.PI * this.r
    }

    static circleLengthByRadius(r) {
        return 2 * Math.PI * r
    }

    circleCopy() {
        return new Circle(this.x, this.y, this.r)
    }


    static create(x, y, r) {
        return new Circle(x, y, r)
    }

    point(x, y) {
        const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);

        // Якщо відстань менше або дорівнює радіусу, то точка знаходиться в колі
        return distance <= this.radius;
    }

    toString() {
        return `Circle {x: ${this.x}, y: ${this.y}, radius: ${this.r}}`;
    }
}

let circle1 = new Circle(0, 0, 7);
let circumference = circle1.circleLength();
console.log(circumference); // 31.41592653589793
let circle2 = circle1.circleCopy()
console.log(circle2);

if (circle1.point(3, 4)) {
    console.log("Точка знаходиться всередині кола");
} else {
    console.log("Точка знаходиться ззовні кола");
}

console.log(circle1.toString())