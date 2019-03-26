"use strict";
var MyMath;
(function (MyMath) {
    function calculateRentangle(width, height) {
        return width * height;
    }
    MyMath.calculateRentangle = calculateRentangle;
})(MyMath || (MyMath = {}));
