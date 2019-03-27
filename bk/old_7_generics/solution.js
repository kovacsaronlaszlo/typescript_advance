"use strict";
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('alma', 10);
numberMap.setItem('körte', 2);
console.log(numberMap.getItem('alma'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('alma', '10');
stringMap.setItem('körte', '2');
console.log(stringMap.getItem('alma'));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();
