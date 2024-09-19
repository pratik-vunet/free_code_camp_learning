"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObstacleEvents = getObstacleEvents;
function getObstacleEvents() {
    var coinFlip = Boolean(Math.random() > 0.5);
    return {
        'ObstacleLeft': coinFlip,
        'ObstacleRight': !coinFlip
    };
}
