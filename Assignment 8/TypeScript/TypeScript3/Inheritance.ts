class Vehicle implements IVehicle {
    constructor(public color: string) {
    }
    start(type: string) {
        return 'the ' + this.color + ' ' + type + ' started';
    }
}

interface IVehicle {
    start(type: string): string;
}


class Car extends Vehicle {
    constructor(color: string) {
        super(color);
    }
    start() {
        return super.start('car');
    }
}

interface ITrunk {
    openTrunk(): void
}

interface IWindow {
    openWindow(): void
}

class Sedan extends Car implements ITrunk, IWindow {
    constructor(color: string) {
        super(color);
    }
    start() {
        return super.start() + ' and it is a Sedan';
    }
    openTrunk() {
    return 'Trunk is open';
        //console.log('Trunk is open');
    }
    openWindow() {
    return 'Window is open';
        //console.log('Window is open');
    }
}


class Truck extends Vehicle {
    constructor(color: string) {
        super(color);
    }
    start() {
        return super.start('truck');
    }
}


var car = new Car('green');
var sedan = new Sedan('red');
var span = document.createElement("span");
span.style.color = "blue";
span.innerText = sedan.openTrunk() + "\n" + sedan.openWindow() ;
document.body.appendChild(span);  

var truck = new Truck('blue');

