(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `output: ${name}`;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
let fullName = `Minson`;
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
let mattrix = [[1, 2, 3], [4, 6, 5]];
let sum = sumMatrix(mattrix);
showHello("greeting", `${sum}`);
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVk7SUFDakMsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQUZELDRCQUVDOzs7O0FDRkQsbUNBQW1DO0FBRW5DLElBQUksUUFBUSxHQUFXLFFBQVEsQ0FBQztBQUNoQyxtQkFBbUIsT0FBZSxFQUFFLElBQVk7SUFDNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELG1CQUFtQixNQUFrQjtJQUNqQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNyQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDZixDQUFDO0FBQ0QsSUFBSSxPQUFPLEdBQWUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7QUFDN0MsSUFBSSxHQUFHLEdBQVcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXJDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgb3V0cHV0OiAke25hbWV9YDtcclxufSIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vZ3JlZXRcIjtcclxuXHJcbmxldCBmdWxsTmFtZTogc3RyaW5nID0gYE1pbnNvbmA7XHJcbmZ1bmN0aW9uIHNob3dIZWxsbyhkaXZOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XHJcbiAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bU1hdHJpeChtYXRyaXg6IG51bWJlcltdW10pIHtcclxuICAgIHZhciBzdW0gPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgY3VycmVudFJvdyA9IG1hdHJpeFtpXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRSb3cubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtICs9IGN1cnJlbnRSb3dbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdW07XHJcbn1cclxubGV0IG1hdHRyaXg6IG51bWJlcltdW10gPSBbWzEsMiwzXSxbNCw2LDVdXSA7XHJcbmxldCBzdW06IG51bWJlciA9IHN1bU1hdHJpeChtYXR0cml4KTtcclxuXHJcbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsYCR7c3VtfWApOyJdfQ==
