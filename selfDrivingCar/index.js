"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_vision_1 = require("./computer-vision");
var SteeringControl = /** @class */ (function () {
    function SteeringControl() {
    }
    SteeringControl.prototype.execute = function (command) {
        console.log('Executing:', command);
    };
    SteeringControl.prototype.turn = function (direction) {
        this.execute("turn ".concat(direction));
    };
    return SteeringControl;
}());
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    Car.prototype.respond = function (events) {
        var _this = this;
        Object.keys(events).forEach(function (eventKey) {
            if (events[eventKey] === false) {
                return;
            }
            var directionMap = {
                ObstacleLeft: "right",
                ObstacleRight: "left",
            };
            if (directionMap[eventKey]) {
                _this.steeringControl.turn(directionMap[eventKey]);
            }
        });
        if (!this.isRunning) {
            console.log("car is off");
            return;
        }
    };
    return Car;
}());
var steering = new SteeringControl();
var autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
