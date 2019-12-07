"use strict";
// function log(message){
//         console.log(message);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// var message = 'Hello World';
// log(message);
// function doSomething(){
//     for (var i = 0; i < 5 ; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// doSomething();
// let count = 5;
// count = 'a';
/*class Point {
    x: number;
    y: number;
    draw() {
        console.log('X: '+ this.x + ', Y: ' + this.y);
    }
    // getDistance(another:Point){
    //     //...
    // }
}
let point = new Point();
point.x = 1;
point.y = 2;


point.draw();*/
// cleaner way:
/*
import { Point } from './point';
let point = new Point(1, 2);
point.draw();*/
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log('likesCount:' + component.likesCount + ' isSelected: ' + component.isSelected);
