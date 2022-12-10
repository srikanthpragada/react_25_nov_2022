class Circle 
{
    constructor(radius = 10) {
        // instance variable or field
        this.radius = radius 
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

c1 = new Circle()
c2 = new Circle(20)
console.log(c1.area())
