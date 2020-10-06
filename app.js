// let person1 = {
//     name: "Cody",
//     sayHello () { 
//         alert(`Hello my name is ${this.name}!`)
//      }

// }
// let person2 = {
//     name: "Koty",
//     sayHello() {
//         alert(`Hello my name is ${this.name}!`)
//     }

// }
// let person3 = {
//     name: "Justin",
//     sayHello() {
//         alert(`Hello my name is ${this.name}!`)
//     }

// }
// let person4 = {
//     name: "Halie",
//     sayHello() {
//         alert(`Hello my name is ${this.name}!`)
//     }

// }
// let person5 = {
//     name: "Frankie",
//     sayHello() {
//         alert(`Hello my name is ${this.name}!`)
//     }
// }
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

// class Person{
//     constructor(name,age,city){
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     greet() {
//         alert(`My name is ${this.name}, I am from ${this.city}, I am ${this.age} years old`)
//     }
// }

class Vehicle {
    constructor(manufacturer, wheels,type) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
        this.type = type;
    }
    greet() {
        console.log(`I am a ${this.type} and I'm made by ${this.manufacturer} and I have ${this.wheels}!`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheels, type, numOfDoors, truckbed) {
        super(manufacturer, wheels, type);
        this.numOfDoors = numOfDoors;
        this.truckbed = truckbed;
    }
    greet() {
        alert(`I am a ${this.type}, I have ${this.wheels} wheels, I'm made by ${this.manufacturer}, I have ${this.numOfDoors} doors, I also have a ${this.truckbed}!`)
    }
}
class Sedan extends Vehicle {
    constructor(manufacturer, wheels, type, numOfDoors, size, mpg) {
        super(manufacturer, wheels, type);
        this.numOfDoors = numOfDoors;
        this.size = size
        this.mpg = mpg
    }
    greet() {
        alert(`I am a ${this.type}, I have ${this.wheels} wheels, I'm made by ${this.manufacturer}, I have ${this.numOfDoors} doors, I am a ${this.size} sedan and get ${this.mpg} miles per gallon!`)
    }
}
class Motorcyle extends Vehicle {
    constructor(manufacturer, wheels, type, handlebars, numOfDoors) {
        super(manufacturer, wheels, type);
        this.handlebars = handlebars;
        this.numOfDoors = numOfDoors;
    }
    greet() {
        alert(`I am a ${this.type}, I have ${this.wheels} wheels, I'm made by ${this.manufacturer}, I have ${this.numOfDoors} doors, and I have ${this.handlebars}`)
    }
}

let v1 = new Truck('Dodge', 4, 'truck', 4, true);
let v2 = new Sedan('Ford', 4,'sedan', 4, 'small', 25);
let v3 = new Motorcyle('Ducati', 2, 'motorcycle', true, 0)

v1.greet();
v2.greet();
v3.greet();






// let p1 = new Person('Cody',30,'Trussville')
// let p2 = new Person('Koty',109,'Hell')
// let p3 = new Person('Justin',27,'Trussville')
// let p4 = new Person('Halie',23,'New Orleans')
// let p5 = new Person('Frankie',52,'Leeds')

// p1.greet();
// p2.greet();
// p3.greet();
// p4.greet();
// p5.greet();

