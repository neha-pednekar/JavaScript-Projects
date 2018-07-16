var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.start = function (type) {
        return 'the ' + this.color + ' ' + type + ' started';
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color) {
        return _super.call(this, color) || this;
    }
    Car.prototype.start = function () {
        return _super.prototype.start.call(this, 'car');
    };
    return Car;
}(Vehicle));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(color) {
        return _super.call(this, color) || this;
    }
    Sedan.prototype.start = function () {
        return _super.prototype.start.call(this) + ' and it is a Sedan';
    };
    Sedan.prototype.openTrunk = function () {
        return 'Trunk is open';
        //console.log('Trunk is open');
    };
    Sedan.prototype.openWindow = function () {
        return 'Window is open';
        //console.log('Window is open');
    };
    return Sedan;
}(Car));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(color) {
        return _super.call(this, color) || this;
    }
    Truck.prototype.start = function () {
        return _super.prototype.start.call(this, 'truck');
    };
    return Truck;
}(Vehicle));
var car = new Car('green');
var sedan = new Sedan('red');
var span = document.createElement("span");
span.style.color = "blue";
span.innerText = sedan.openTrunk() + "\n" + sedan.openWindow();
document.body.appendChild(span);
var truck = new Truck('blue');
