import { getObstacleEvents } from './computer-vision';
interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering;
}

interface AutonomousCar extends AutonomousCarProps {
    respond(events: Events): void;
}
interface Events {
    [i: string]: boolean;
}
interface Control {
    execute(command: string): void;
}

interface Steering extends Control {
    turn(direction: string): void;
}
class SteeringControl implements Steering {
    execute(command: string) {
        console.log('Executing:', command);
    }
    turn(direction: string) {
        this.execute(`turn ${direction}`);
    }
}
class Car implements AutonomousCar {
    isRunning: boolean | undefined;
    steeringControl;
    constructor(props: AutonomousCarProps) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }

    respond(events: Events) {
        Object.keys(events).forEach(eventKey => {
            if (events[eventKey] === false) {
                return;
            }
            const directionMap: { [key: string]: string } = {
                ObstacleLeft: "right",
                ObstacleRight: "left",
            };
            
            if (directionMap[eventKey]) {
                this.steeringControl.turn(directionMap[eventKey]);
            }

        })
        if (!this.isRunning) {
            console.log("car is off");
            return;
        }
    }
}
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond(getObstacleEvents());
interface AutonomousCar {
    isRunning?: boolean;
}