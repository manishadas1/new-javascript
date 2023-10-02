const cars = ["saab" , "volvo" , "bmw"];
//   console.log(cars);
//   console.log(cars[0]);
//   cars[1]="opel";
//   console.log(cars);

// console.log(cars.toString());

// const person={firstName: "manisha" ,lastName: "das", age: 23};
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log (cars[cars.length-1]);
// console.log(cars.length);
// console.log(cars.sort());
// console.log(typeof cars);
// console.log(Array.isArray(cars));
// console.log(cars.join("*"));
// console.log(cars.pop());
// console.log(cars.push("volvo"));
// console.log(cars);
// console.log(cars.shift());
// console.log(cars.unshift("kia"));
// console.log(cars);
// console.log(delete cars[2]);
// delete cars[0];
// console.log(cars);
// cars[0]="kia";
// cars[2]="volvo";
// cars[3]="BMW";
// console.log(cars);
// const name=["lily" , "mili" , "rali"];
// console.log(cars.concat(name));
// const ary=[[1,2], [3,4], [5,6]];
// console.log(ary.flat());
// let car = cars.splice(1,0,"Mercides"); //problem
// console.log(car);
// console.log(cars.slice(1));//problem
// console.log(cars.splice(1,0,"Mercides"));
// console.log(cars.sort());
// console.log(cars.reverse());
 //const number = [20,80,60,5,6];
// console.log(number.sort(function(a, b){return a-b}));
// console.log(num ber.sort(function(a, b){return b-a}));
// console.log(number.sort(function(){return 0.5 - Math.random()}));
// let x = number.sort(function(a, b){return a-b});
// console.log(x[0]);
// let y = number.sort(function(a,b){return b - a});
// console.log(y[0]);
// console.log(arrayMax(number));
// function arrayMax(arr){
//     Math.max.apply(null, arr);   //problem
// }



// let text = number.forEach(y);

// function y(value){
//     return value;
// }
// console.log(text);
// const number2 = number.map(x);
// function x(value){
//     return value*2;
// }
// console.log(number2);

// const number3 = number.flatMap(x);
// function x(value){
//     return value*2;
// }
// console.log(number3);

// const over18=number.filter(z);
// function z(value){
//     return value > 18;
// }
// console.log(over18);

// const sum=number.reduce(m);
// function m(total , value){
//     return total+value;
// }
// console.log(sum);

//const numbers = [20,80,60,5,6];
// const allover18=numbers.every(z);
// function z(value){
//     return value > 18;
// }
// console.log(allover18);


// const allover18=numbers.some(z);
// function z(value){
//     return value > 18;
// }
// console.log(allover18);


// const position=cars.indexOf("bmw");
//  console.log(position);

// const numbers = [20,80,60,5,6];
// const allover18=numbers.find(z);
// function z(value){
//     return value > 18;
// }
// console.log(allover18);

// const numbers = [20,80,60,5,6];
// const allover18=numbers.findIndex(z);
// function z(value){
//     return value > 18;
// }
// console.log(allover18);

// const ary =ary.from("ABCDEFGH");
// console.log(ary);
 
// const keys=cars.keys();
// let text="";
// for (let x of keys){
//     text=x;
// }
// console.log(text);

// const keys=cars.entries();
// let text="";
// for (let x of entries){
//     text=x;
// }
// console.log(text);

// cars.includes("bmw");

// const q1 = ["jan" , "feb" , "march"];
// const q2 = ["apr" , "may" , "june"];
// const q3 = ["july" , "aug" , "sep"];
// const q4 = ["oct" , "nov" , "dec"];

// const year=[...q1,...q2,...q3,...q4];
// console.log(year);


// let text = "ABCDEFGHIJK it\'s LMNOPQRSTUVWXYZ";
// // let length = text.length;
// console.log(text);

// let txt = "hello \ dolly";
// console.log(txt);

// let x = "John";
// let y = new String("John");
// console.log(typeof x,typeof y);
// console.log(x===y);

// let y = new String("John");
// let z = new String("John");
// console.log(y==z)

// let y = "John";
// let z = "John";
// console.log(y==z)

// let text = "Apple, Banana, Kiwi";
// // console.log(text.slice(7 , 13));
// // console.log(text.slice(7));
// // console.log(text.slice(-12,-6));
// // console.log(text.slice(-12));
// console.log(text.substring(7 , 13));
// console.log(text.substr(7 , 6));//second parameter is the length


//let text = "Please visit Microsoft!";
//console.log(text.replace("Microsoft" , "w3school"));


// let text = "Please visit Microsoft!";
// //console.log(text.replace("MICROSOFT" , "w3school"));
// console.log(text.replace(/MICROSOFT/i , "w3school"));
// console.log(text.replace("/Microsoft/g" , "w3school"));

//let text = "Please visit Microsoft and Microsoft!";
//console.log(text.replace("Microsoft" , "w3school"));

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(text.replaceAll("cats" , "dogs"));


//  let text1 = "Hello World!";
// console.log(text1.toUpperCase());
// let text2 = "HELLO WORLD!";
// console.log(text2.toLowerCase());
// console.log(text1.concat(text2));
// console.log(text1.concat(" ",text2));

// let text= "      Hello World!       ";
// console.log(text);
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd());

// let text = "5";
// console.log(text.padStart(4,"0"));
// console.log(text.padEnd(4,"0"));

// let text1 = "Hello";
// console.log(text1.charAt(0));
// console.log(text1.charCodeAt(0));

// let text = "a,b,c,d,e,f";
// console.log(text.split(" "));
// console.log(text.split(","));
// console.log(text.split("|"));

// let text = "Please locate where 'locate' occurs!";
// // console.log(text.indexOf("locate"));
// // console.log(text.lastIndexOf("locate"));
// // console.log(text.indexOf("locate" , 15));
// // console.log(text.lastIndexOf("locate" , 15));
// console.log(text.search("locate"));// search and indexof are not equal. search() cann't take a second argument as parameter.

// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match("ain"));
// console.log(text.match(/ain/g));
// console.log(text.match(/ain/gi));

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(text.matchAll("cats"));
// console.log(text.matchAll(/cats/g));
// console.log(text.matchAll(/cats/gi));

//let text = "Hello world, welcome to the universe";
// console.log(text.includes("world"));
// console.log(text.includes("world" , 12));
// console.log(text.includes("world" ,6));
// console.log(text.startsWith("world"));
// console.log(text.startsWith("Hello"));
// console.log(text.startsWith("world" , 5));
// console.log(text.startsWith("world" , 6));

// console.log(text.endsWith("universe"));
// console.log(text.endsWith("Hello"));
// console.log(text.endsWith("world" , 11));
// console.log(text.endsWith("world" , 6));

// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text);

// let price = 10;
// let VAT = 0.25;
// let total = `total ${price * (1+VAT)}`;
// console.log(total);


// let x = 9.656;

//  let y= x.toFixed(0) + 
//   x.toFixed(2) + 
//   x.toFixed(4) + 
//   x.toFixed(6);
//   console.log(y);

// let x = 9.656;
// console.log(x.toPrecision()+","+
// x.toPrecision(2)+","+
// x.toPrecision(4)+","+
// x.toPrecision(6));

// let x = 123;
// console.log(x.valueOf()+" "+
// (123).valueOf()+" "+
// (100 + 23).valueOf());


// console.log(Number(true) + "\n" +
// Number(false) + "\n" +
// Number("10") + "\n" + 
// Number("  10") + "\n" +
// Number("10  ") + "\n" +
// Number(" 10  ") + "\n" +
// Number("10.33") + "\n" + 
// Number("10,33") + "\n" +
// Number("10 33") + "\n" +
// Number("John"));

// console.log(parseInt("-10") + "\n" +
//   parseInt("-10.33") + "\n" +
//   parseInt("10") + "\n" +
//   parseInt("10.33") + "\n" +
//   parseInt("10 6") + "\n" +  
//   parseInt("10 years") + "\n" +  
//   parseInt("years 10"));  

//console.log(Number.isInteger(10)+"\n"+
//Number.isInteger(10.5));

  //console.log(Number.isSafeInteger(10) + "\n" + Number.isSafeInteger(12345678901234567890));

//  console.log(Number.parseFloat("10") + "\n" +
// Number.parseFloat("10.33") + "\n" +
// Number.parseFloat("10 20 30") + "\n" +
// Number.parseFloat("10 years") + "\n" +
// Number.parseFloat("years 10"));

// console.log(Number.parseInt("-10") + "\n" +
// Number.parseInt("-10.33") + "\n" +
// Number.parseInt("10") + "\n" +
// Number.parseInt("10.33") + "\n" +
// Number.parseInt("10 6") + "\n" +  
// Number.parseInt("10 years") + "\n" +  
// Number.parseInt("years 10")); 

//let x = Number.EPSILON;
//console.log(x);

//let x = Number.MAX_VALUE;
//console.log(x);


//Math.round(x) returns the nearest integer:


// console.log(Math.round(4.6));
// console.log(Math.round(4.5));
// console.log(Math.round(4.4));

//Math.ceil(x) returns the value of x rounded up to its nearest integer:
// console.log(Math.ceil(4.9));
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(-4.2));


// Math.floor(x) returns the value of x rounded down to its nearest integer:

// console.log(Math.floor(4.9));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.4));
// console.log(Math.floor(4.2));
// console.log(Math.floor(-4.2));


// Math.trunc(x) returns the integer part of x:
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(4.7));
// console.log(Math.trunc(4.4));
// console.log(Math.trunc(4.2));
// console.log(Math.trunc(-4.2));


// Math.sign(x) returns if x is negative, null or positive:

// console.log(Math.sign(4));
// console.log(Math.sign(0));
// console.log(Math.sign(-4));

// Math.pow(x, y) returns the value of x to the power of y:

// console.log(Math.pow(8,2));
// console.log(Math.sqrt(16));

// //Math.abs(x) returns the absolute (positive) value of x:
// console.log(Math.abs(-4.3));
// console.log(Math.sin(90*Math.PI/180));
// console.log(90*Math.PI/180);
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.max(0, 150, 30, 20, -8, -200));
// console.log(Math.random(0, 150, 30, 20, -8, -200));
// console.log(Math.log(1));
// console.log(Math.log2(2));
// console.log(Math.log10(2));
// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)

//console.log(Math.floor(Math.random() * 100));


// console.log(new Date());
// let d = new Date();
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDay());
// console.log(d.getTime());
// console.log(Date.now());

// const minutes = 1000 * 60;
// const hours = minutes * 60;
// const days = hours * 24;
// const years = days * 365;
// console.log(Math.round(Date.now() / years));

//let d = new Date();
//console.log(d.setFullYear(2022 , 11 , 3));
//console.log(d.setMonth(5));


