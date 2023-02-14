"use strict";
exports.__esModule = true;
var hasSuperPowers;
hasSuperPowers = true;
//you can convert type using the Boolean function
hasSuperPowers = Boolean(0);
//or you can use the !! operator to convert a string or number into a boolean
hasSuperPowers = !!'true';
//if the string has a value in it, it will return true, else it will return false
hasSuperPowers = !!'';
console.log(hasSuperPowers);
var height = 188;
//to convert to a boolean (will return 1)
height = (Number(true));
//convert to a number...
height = (Number('188'));
//using the + (unary) operator will do the same thing as wrapping it in Number
height = +('188');
height = +(true);
console.log(height);
console.log(typeof (height));
var hero;
hero = 'batman';
hero = String(122);
hero = String(true);
hero = (122).toString();
console.log(hero);
console.log(typeof (hero));
