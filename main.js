class Vehicle {
    constructor(make, model, year){
        for (let info of [make, model]){
            if (typeof info !== 'string')
                throw new Error (`${info} needs to be a string value`);
        }
        if (Number.isNaN(year) || year <= 0)
            throw new Error('You must write a positive year value.');

        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep';
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

const firstVehicle = new Vehicle('Honda', 'Truck', 1999);
console.log(firstVehicle);
console.log(firstVehicle.honk());
console.log(firstVehicle.toString());



class Car extends Vehicle{
    constructor(make, model, year){
        super (make, model, year);
        this.numWheels = 4;
    }
}

let firstCar = new Car('Toyota', 'Land Cruiser', 2020)
console.log(firstCar.toString());
console.log(firstCar.numWheels);

///////////////

class Moto extends Vehicle{
    constructor (make, model, year){
        super (make, model, year)
        this.numWheels = 2;
    }
    bark() {
        return 'Bark-bark!';
    }
}

let firstMoto = new Moto ('Yamaha', 'Welly Motorcycle', 2019)
console.log(firstMoto.toString());
console.log(firstMoto.bark());
console.log(firstMoto.numWheels);

////////////////////////////////////////////////////////

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(object) {
        if (!(object instanceof Vehicle)) {
            return "Only vehicles are allowed in here! Not wheels!";
        }

        if (this.vehicles.length >= this.capacity) {
            return "Sorry, granny, we're full.";
        }

        this.vehicles.push(object);
        return "Vehicle added.";
    }
}



let ourGarage = new Garage(3);

console.log(ourGarage.add(firstVehicle));
console.log(ourGarage.add(firstCar));
console.log(ourGarage.add(firstMoto));

let likeARollingStone = ('Колесо','Каменное', '3500 год до н.э.');
console.log(ourGarage.add(likeARollingStone));

let myGrandmothersCar = new Car('BMW', 'X6', 2019);
console.log(ourGarage.add(myGrandmothersCar));