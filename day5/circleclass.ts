import { log } from "console";

class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public toString(): string {
        return `Circle radius=${this.radius}, Circle color=${this.color}`;
    }

    public getArea(): number {
        return Math.PI * (this.radius**2);
    }

    public getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}
let circle1=new Circle(10,`blue`)
console.log(`Output Of circle1:\n`);
console.log(`Output Of circle1:\n`);
console.log(`Circle Radius:${circle1.getRadius()}`);
circle1.setRadius(5)
console.log(`Updated Circle Radius:${circle1.getRadius()}`);
console.log(circle1.toString());
console.log(`Circle colour:${circle1.getColor()}`);
circle1.setColor(`green`)
console.log(`Updated Circle colour:${circle1.getColor()}`);
console.log(circle1.toString());
console.log(`Area of Circle:${circle1.getArea().toFixed(2)}`);
console.log(`Circumference of a Circle:${circle1.getCircumference().toFixed(2)}`);




console.log(`------------------------------`);


let circle2=new Circle()
console.log(`Output Of circle2:\n`);
console.log(`Circle Radius:${circle2.getRadius()}`);
circle2.setRadius(2)
console.log(`Updated Circle Radius:${circle2.getRadius()}`);
console.log(circle2.toString());
console.log(`Circle colour:${circle2.getColor()}`);
circle2.setColor(`green`)
console.log(`Updated Circle colour:${circle2.getColor()}`);
console.log(circle2.toString());
console.log(`Area of Circle:${circle2.getArea().toFixed(2)}`);
console.log(`Circumference of a Circle:${circle2.getCircumference().toFixed(2)}`);

















