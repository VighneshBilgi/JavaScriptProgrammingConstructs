console.log('Unit Conversion');

// a. If 1 foot = 12 inches, then 42 inches = ?
var feetToInches = 12;
console.log('a. If 1 foot = 12 inches, then 42 inches = ?');
console.log('42 inches = ', 42/feetToInches, ' feet');

// b. Rectangular Plot of 60 feet x 40 feet in meters
console.log('b. Rectangular Plot of 60 feet x 40 feet in meters');
var feetToMeters = 0.3048;

var length = 60 * feetToMeters;
var breadth =  40 * feetToMeters;
var area = length * breadth;

console.log('Length of plot (in meters) is : ', length);
console.log('Breadth of plot (in meters) is : ',breadth);
console.log('Area of plot (in meters squared) is : ',area);

// c. Calculate area of 25 such plots in acres
console.log('c. Calculate area of 25 such plots in acres');
var acreToMetersSquared = 4046.86;

console.log('Area of 25 plots (in acres) are : ',25*area/acreToMetersSquared);