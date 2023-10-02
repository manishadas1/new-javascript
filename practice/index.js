// // Hoisting

// // var x = 7;
// // function getName() {
// //     console.log("Namaste Javascript");
// // }
// // getName();
// // console.log(x);
// // console.log(getName);

// // getName(); // we can invoke function before intializing it.
// // console.log(x);
// // var x = 7;
// // function getName() {
// //   console.log("Namaste Javascript");
// // }

// // getName();
// //  console.log(x); //x is not defined here
// //  function getName() {
// // console.log("Namaste Javascript");
// //  }

// // var x = 7;
// // function getName() {
// // console.log("Namaste Javascript");
// // }
// // console.log(getName);

// // getName();
// // console.log(x);
// // console.log(getName);
// // var x = 7;
// // function getName() {
// // console.log("Namaste Javascript");
// // }

// // getName(); //Here getName is not a function
// // console.log(x);
// // console.log(getName);
// // var x = 7;
// // var getName = () => {
// //     console.log("Namaste Javascript");
// // }

// // getName(); //Here getName is not a function
// // console.log(x);
// // console.log(getName);
// // var x = 7;
// // var getName2 = function() {
// // }
// // var getName = () => {
// //     console.log("Namaste Javascript");
// // }

// // var x = 1;
// // a();
// // b();
// // console.log(x);

// // function a() {
// //     var x = 10;
// //     console.log(x);
// // }

// // function b() {
// //     var x=100;
// //     console.log(x);
// // }

// // var a = 10;
// // function b() {
// //     var x = 10;
// // }
// // console.log(window.a);
// // console.log(a);
// // console.log(this.a);

// // console.log("hii");
// // var a = 45;
// // var b = "harry"; // b is a global variable
// // var c = null;
// // var d = undefined;
// // {
// //     let b='this';
// //     console.log(b);
// // }
// // console.log(b);

// // console.log("hii");
// // var a = 45;
// // var a = 2;
// // var b = "harry";
// // var c = null;
// // var d = undefined;
// // {
// //     let b='this';
// //     console.log(b);
// // }
// // console.log(b);

// // console.log("hii");
// // // var a = 45; //we can redeclare var bcoz it is a global variable.
// // // var a = 2;
// // let b = "manisha";
// // //let b = 4; // we can't redeclare let bcoz it is a block label variable.

// // let c = null;
// // let d = undefined;
// // {
// //     let b='this';
// //     console.log(b);
// // }
// // console.log(b);

// // console.log("hii");
// // let b = "manisha";
// // const author = "harry";
// //  //let author = 35; //throws an error bcoz constant cannot be changed.
// //  author=5;//we cannot assign to constant variable.
// // let c = null;
// // let d = undefined;
// // {
// //     let b='this';
// //     console.log(b);
// // }
// // console.log(b);

// //Even number between 1 to 10.
// // var a = 1;
// // for(a=1;a<=10;a++){
// //     if(a%2==0){
// //         console.log(a);
// //     }
// // }

// //Table of 5.
// // var i = 1;
// // while(i<51){
// //     if(i%5==0){
// //         console.log(i+" ");
// //     }
// //     i++;
// // }

// // var i ;
// // for(i=1;i<=51;i++)
// // {
// //     if(i%5==0)
// //     {
// //         console.log(i+" ")
// //     }
// // }

// //natural number
// // var i;
// // for(i=0;i<=20;i++)
// // {
// //     console.log(i);
// // }

// //UNDEFINED VS NOT DEFINED

// // var a = 7; //if we try to run this a only then it will show a is undefined.

// // console.log(x); //this is not defined (means which has not been allocated memory) bcoz we not defined the value of x.

// // console.log(a); // undefined (it is a keyword, it takes it's memory space. we can assume it is a placeholder in memory which is kept for the time been until variable will asign some other value. till that point it will store that placeholder which is known as undefined.)
// // var a = 7;
// // console.log(a); //7

// // var a;
// // console.log(a);// this a value will show undefined throughtout the whole program.

// // var a;
// // console.log(a);
// // if (a == undefined) {
// //     console.log("a is undefined")
// // }
// // else{
// //     console.log("a is not undefined")
// // }

// // var a;
// // console.log(a);
// // a=10;
// // if (a == undefined) {
// //     console.log("a is undefined")
// // }
// // else{
// //     console.log("a is not undefined")
// // }

// //javascript is a loosely type language or weakly typed language. it means it doesn't asign any specific datatypes to any variable. e.g. if we put string value in a then in other case we also put boolean or any data type.

// // var a;
// // console.log(a);
// // var a = 10;
// // console.log(a);
// // var a = "manisha";
// // console.log(a);

// // a = undefined; //undefined is a keyword so we shoudn't put it in to some variable. if we try to run this program it will run without any error. but is not a good practice.
// // console.log(a);

// // THE SCOPE CHAIN

// // function a(){
// //     console.log(b);//10
// // }
// // var b=10;
// // a();

// // function a() {
// //     c();
// //     function c(){
// //         console.log(b); //10
// //     }
// // }
// // var b = 10;
// // a();

// // function a() {
// //     var b = 10;
// //     c();
// //     function c(){
// //         console.log(b); //10
// //     }
// // }
// // a();

// //function a() {
// //  var b = 10;
// //c();
// // function c(){
// //}
// //}
// //a();
// //console.log(b); //not defined

// // scope is where you can access a specific variable or a function in our code.
// // scope is directly depends on the lexical environment.
// //lexcal environment is created whenever a execution context is created.lexcal environment is the local memory with the reference to the lexical environment of lexical parent.
// //lexical means herarchy or sequence. from the above examle we can say that the function c is lexically inside function a and a is present lexically inside the global space.
// //lexical environment means local memory along with lexical environment of the parent.in above program c is points to lexical envionment of a.a points to lexical envionment of global space and global space points to lexical environment of null bcoz it has no parent.
// //finding of spoce in lexical environment is known as scope chain.
// //here b is not found in lexical environment so b is not in the scope chain.

// // LET VS CONST AND THE TEMPORAL DEAD ZONE



// //let and const declaration are hoisted.




// // console.log(b);// undefined
// // let a = 11;
// // var b = 10;

// // console.log(a);
// // let a = 11; //cannot access a before initialization.
// // var b = 10;

// // console.log(b);
// // let a = 11;
// // console.log(a);//11
// // var b = 10;

// // A Temporal deadzone is the time since when let variable is hoisted and till it is initialized some value. Time between that is known as temporal deadzone.
// //when we try to access a variable inside a temporal deadzone it give us a refference error.
// // var is global object and it acquired space in global space and we can access it without initialization but let and const are acquire space in some other memory space and we cannot access them with out initialization.

// //console.log(a);
// //this is the temporal deadzone time from hoisting to intialization.
// //let a = 10; //when we try to access a variable inside a temporal deadzone it give us a refference error.
// //console.log(a);//aftre initialization we can access.

// // console.log(x);// x is not defined
// // console.log(b);//cannot access a before initialization.
// // let b = 100;
// // var a = 10;//undefined

// //var a = 10;
// //console.log(this.a);//undefined

// //var a = 10;
// //console.log(window.a);//it shows error bcoz window is a global object for browser

// // console.log("manisha");//identifier a has already been declared.
// // let a = 10;
// // let a = 100;
// //it is a syntax error and it doesn't execute a single line of code.

// // console.log("manisha");//identifier a has already been declared.
// // let a = 10;
// // var a = 100;
// //it is a syntax error

// // console.log("manisha");//manisha
// // var a = 10;
// // var a = 100;

// // let a;
// // a = 100;
// // console.log(a);//100

// // const a;
// // a = 100;
// // console.log(a);//missing initializer in const declaration.
// //it is a syntax error
// //we have to do initialization and declaration of a const variable in the single line.

// // const a = 100;
// // a = 10;
// // console.log(a);//assignment to a const variable // TypeError

// //TypeError : mean the variable is constant type. it should be initialized when it is declared. we cannot initialize it later on.
// //SyntaxError : const should be initialized when it is declared. this is the syntax. but if declaration is there only not initialization then this is a syntax error. lwt variable should not be repeat declarion.if we repeat then this is also a syntax error.
// //ReferenceError : when js tring to find out a variable in to memory space and you cannot access it this is a refference error.




// //BLOCK SCOPE AND SHADOWING IN JS




// //block is group of multiple statement can be use in a place where js expect a single statement.
// //it also known as compound statement.

// // if(true) //here js expect a single statement that is the correct syntax.
// // console.log("Hii");
// // //if we want to use multiple statement then we have to write those statement in between block.
// // if(true)
// // {
// //     var a = 10;
// //     console.log(a);
// // }

// // block scope means all the variable and function we can access in side this block.

// // {
// //   var a = 10;
// //   let b = 20;
// //   const c = 30;
// //   console.log(a);//10
// //   console.log(b);//20
// //   console.log(c);//30
// // }
// // console.log(a);//undefined
// // console.log(b);//error
// // console.log(c);
// //we cannot access b and c outside the block scope.but we can access a outside the block bcoz it is in the global space.

// // var a = 100;
// // {
// //     var a = 10;// when this block will execute the value of a which is 100  will change to 10. here this a variable whichh is present inside the block is shadows the variable a which is present outside the block. it means the block variable a is modify the value of outside variable a.bcoz they are pointing to the same memory location. it means a is in the global scope.when block is executed, the value of a which is 100 is modify with the value 10 in the global scope.this is shadowing in js.
// //     let b = 20;
// //     const c = 30;
// //     console.log(a);//10
// //     console.log(b);//20
// //     console.log(c);//30
// // }
// // console .log(a);//10

// // let b = 100;//here b is present in the script memory space
// // {
// //     var a = 10;
// //     let b = 20;
// //     const c = 30;
// //     console.log(a);//10
// //     console.log(b);//20//in the case of let shadowing is behave differently.inside the block it print 20
// //     console.log(c);//30
// // }
// // console .log(b);//100//but outside the block it modify the value to 100

// // const c = 100;//here b is present in the script memory space
// // {
// //     var a = 10;
// //     let b = 20;
// //     const c = 30;
// //     console.log(a);//10
// //     console.log(b);//20//in the case of let shadowing is behave differently.inside the block it print 20
// //     console.log(c);//30
// // }
// // console .log(c);//100
// // //in case of const shadowing behave the same as let.

// // const c = 100;
// // function x(){
// //     const c = 30;
// //     console.log(c);//30
// // }
// // x();
// // console.log(c);//100
// //shadowing behave same in case of function also.

// // let a = 20;
// // {
// //     var a = 20;//if we want to shadow let variable inside the block scope using the var we cannot do that.this is illigal shadowing. and it throws error.
// // }

// // var a = 20;
// // {
// //     let a = 20;//if we want to shadow var variable inside the block scope using the let we can do that.
// // }

// // const a = 20;
// // {
// //     const a = 100;
// //     {
// //         const a = 200;
// //         console.log(a);//200
// //     }
// // }

// // const a = 20;
// // {
// //     const a = 100;
// //     {
// //         const a = 200;
// //     }
// //    console.log(a);//100
// // }

// // const a = 20;
// // {
// //     const a = 100;
// //     {
// //         const a = 200;
// //     }
// // }
// //     console.log(a);//20

// //CLOSURES IN JS

// // function x(){
// //     var a = 7;
// //     function y(){
// //         console.log(a);
// //     }
// //     y();
// // }
// // x();
// //functions along with lexical environment is nothing but closure.

// // function x(){
// //     var a = function y(){
// //         console.log(a);// we can assign a function to a variable.
// //     }
// //     y();
// // }
// // x();

// // function x(){
// //         var a = 7;
// //         y();
// //     }
// //     x( function y(){
// //         console.log(a);
// //     });//we can pass the function inside a function as an parameter.

// // function x(){
// //         var a = 7;
// //         function y(){
// //             console.log(a);
// //         }
// //         return y;
// //     }
// //     var z = x();
// //     console.log(z);//function y

// // function x(){
// //     var a = 7;
// //     function y(){
// //         console.log(a);
// //     }
// //     return y;
// // }
// // var z = x();
// // console.log(z);
// // //....
// // z();

// // function x(){
// //     var a = 7;
// //     function y(){
// //         console.log(a);
// //     }
// //     a = 100;
// //     return y;
// // }
// // var z = x();
// // console.log(z);
// // //....
// // z();//100

// // function z() {
// //   var b = 900;
// //   function x() {
// //     var a = 7;
// //     function y() {
// //       console.log(a,b);
// //     }
// //     y();
// //   }
// //   x();
// // }
// // z();




// //setTimeout + closure in js






// // function x() {
// //   var i = 1;
// //   setTimeout(function () {
// //     //setTime is using for set a time to print. Here setTime is take the call back function amd store it in some where else and attaches a timer to it.then js procced for the next, it doesn't wait for anything. it goes to the next line and just print manisha. and once the timer expire it takes that funtion, put it again to call stack and run that.
// //     console.log(i);
// //   }, 3000);
// //   console.log("Manisha");
// // }
// // x();


// // function x() {
// //   for(var i=1;i<=5;i++){
// //     setTimeout(function(){
// //       console.log(i); //it will print six time 6. here closure saves the lexical value which is reference of i. i is a var so it takes the global memory space to store the value.at the end of the for loop the value of i is 6. so when js comming to the function after printing manisha it will print 6, six times bcoz the value of i is now 6. 
// //     }, i*1000);
// //   }
// //   console.log("manisha");
// // }
// // x();

// // function x() {
// //   for(let i=1;i<=5;i++){
// //     setTimeout(function(){
// //       console.log(i); //here js will print 1 to 5 bcoz i is a let variable and it take a block memory to save the value.when loop is execute 5 copies of i is created.so when js comming to the function after printing manisha it will print 1 to 5, six times bcoz in the block memory space there are 5 copies of i is present. 
// //     }, i*1000);
// //   }
// //   console.log("manisha");
// // }
// // x();

// // function x(){
// //   for(var i=1;i<=5;i++){
// //     function close(x){
// //       setTimeout(function(){
// //         console.log(x);
// //       }, x*1000);
// //     }
// //     close(i);
// //   }
// //   console.log("hii");
// // }
// // x();
 
// //example of closure 
// // function outer(){
// //   var i = 10;
// //   function inner(){
// //     console.log(i);
// //   }
// //   return inner;
// // }
// // var close = outer();
// // close();

// // function outer(){
// //   function inner(){
// //     console.log(i);
// //   }
// //   var i = 10;
// //   return inner;
// // }
// // var close = outer();
// // close();

// // function outer(){
// //   function inner(){
// //     console.log(i);
// //   }
// //   let i = 10;// if we change it from var to let it also behave the same
// //   return inner;
// // }
// // var close = outer();
// // close();

// // function outer(b){
// //   function inner(){
// //     console.log(i,b);
// //   }
// //   var i = 10;
// //   return inner;
// // }
// // var close = outer("hello");
// // close();

// // function outest(){
// //   var c = 11;
// //   function outer(b){
// //     function inner(){
// //       console.log(i,b,c);
// //     }
// //     let i = 10;
// //     return inner;
// //   }
// //   return outer;
// // }
// // var close = outest()("hii");
// // close();

// // function outest(){
// //   var c = 11;
// //   function outer(b){
// //     function inner(){
// //       console.log(i,b,c);
// //     }
// //     let i = 10;
// //     return inner;
// //   }
// //   return outer;
// // }
// // let i = 100; //it will again print the 10 hii 11.this line won't affect the code anymore. bcoz this is completely new variable.it won't create any name conflict. 
// // var close = outest()("hii");
// // close();

// // function outest(){
// //   var c = 11;
// //   function outer(b){
// //     function inner(){
// //       console.log(i,b,c);//in this case when i doesn't find the value of i in it's local lexical environment, it search the value of i in outside the outest function.
// //     }
// //     return inner;
// //   }
// //   return outer;
// // }
// // let i = 100;
// // var close = outest()("hii");
// // close();

// // function outest(){
// //   var c = 11;
// //   function outer(b){
// //     function inner(){
// //       console.log(i,b,c);//if i is not there it shows i is not defined 
// //     }
// //     return inner;
// //   }
// //   return outer;
// // }
// // var close = outest()("hii");
// // close();

// // var count = 0;
// //  function incrementCounter(){
// //     counter++;
// //     console.log(count);//here anybody can access the variable count.
// //   }

// // function counter(){
// //   var count = 0;
// //  return function incrementCounter(){
// //     count++;
// //     console.log(count);//when we wrap it inside a function.here the variable count is hidden.if someone trying to access it from outside it gives error.this is data hiding or encapsulation.we have to return this function so anyone can access this function and this varriable through function.
// //   }
// // }
// // var counter1 = counter();
// // counter1();
// // counter1();

// // function counter(){
// //   var count = 0;
// //  return function incrementCounter(){
// //     count++;
// //     console.log(count);//when we wrap it inside a function.here the variable count is hidden.if someone trying to access it from outside it gives error.this is data hiding or encapsulation.we have to return this function so anyone can access this function and this varriable through function.
// //   }
// // }
// // var counter1 = counter();
// // counter1();
// // counter1();
// // var counter2 = counter();//this is a completely new counter.again incrementCounter function forms a closure with new counter.so whenever a function is run it create a independent copy of itself.
// // counter2();

// //example of constructor function
// // function counter(){
// //   var count = 0;
// //  this.incrementCounter = function(){
// //     count++;
// //     console.log(count);
// //   }
// //   this.decrementCounter = function(){
// //     count--;
// //     console.log(count);
// //   }
// // }
// // var counter1 =new counter();

// // counter1.incrementCounter();
// // counter1.incrementCounter();
// // counter1.decrementCounter();
// //  //there could be over consumption of memory when we use closure bcoz everytime closure is formed it consumes a lot of memory and those closed over variables are not garbage collected. if we not handle properly it can also leed to freez the browser.
 
// //  function a(){
// //   var x = 0;
// //   return function b (){
// //     console.log(a);
// //   }
// //  }
// //  a();//Here x is not reffering by any function so it will go to the garbage collector.


// // //  function a(){
// // //   var x = 0, z = 10;
// // //   return function b (){
// // //     console.log(x);
// // //   }
// // //  }
// //  //var y = a();
// //  //....

// //  y();//here y is hold the value which is return function b that is refference of x. so whenever we call function a it gives us value of x. so here x is reuseable.but the variable z is also form closure with fun b but when we go outside of the fun the variable z is no longer available bcoz it has no use. it will go to the garbage collector. 




// //first class function





// //function statement : we write a function keyword and give a name to it.
// // function a(){
// //   console.log("hii");
// // }

// // //function expression : we can assign a function to a varriable.here function act as a value.here fun is a value which we are initializing to the variable a.this is the expression.
// // var b = function (){
// // console.log("hii")
// // }

// // //difference between fun stmnt and fun exprsn is hosting.in fun stmnt we can call fun a before creation of a fun. and it will print hii.but in case of fun expsn we can't call fun b before creating it.it will gives error.
// // a();
// // b();
// // function a(){
// //   console.log("hii");
// // }
// // var b = function (){
// // console.log("hello")
// // }

// // //function declaration : it is the same as function statement
// // function a(){
// //   console.log("hii");
// // }

// // //anonymous function : function without name.
// // function (){

// // }
// //  //when we will run it it throws error says syntax error: statement required a function name. so this fun don't have it's own identity.
// // //the use of anonymous fun is, it is use in the place where funs are used as values.
// // var b = function (){
// //   console.log("hello")
// //   }
  

// //   //Named function expression : named fun assign to a varriable
// //   var b = function x(){
// //     console.log("hello")
// //     }
// //     b();//hello
// //     x();//refference error bcoz we can access it only in it's local space.


// //     //Difference between parameters and arguments
// //     var b = function (m,k){//this is parameter.this identifier or the lebel or local variable in the fun scope.this m and k are the local variable inside the fun. you cannot access this m and k outside.
// //       console.log("hello")
// //       }
// //       b(1,2);//the value we are passing insise a function this is called argument. the lebel or identifier take those value are known as parameters.


// //       //First class function: the ability to use function as a value is known as first class function.
// // //passing function inside another function as argument
// // function a(){
// //   console.log("hii");
// // }  
// // var b = function (param1){
// //   console.log(param1);
// // }
// // b(function (){

// // })

// // //another example
// // function a(){
// //   console.log("hii");
// // }  
// // var b = function (param1){
// //   console.log(param1);
// // }
// // function xyz(){

// // }
// // b(xyz);

// // //a function can also return from another function.       
// // function a(){
// //   console.log("hii");
// // }  
// // var b = function (param1){
// //   return function (){

// //   }
// // }
// // console.log(b());






// // CALL BACK FUNCTION







// //when we take a function and pass it in to another function,then the function which we pass through another function is known as callback function. as we know js is synchronus. so by using call back function we can do asynchronus things in js.
   
// // setTimeout(function(){//setTimeout takes callback function.
// //   console.log("timer");
// // },3000);
// // function x(y) {
// //   console.log("x");
// //   y();
// // }
// // x(function y(){
// //   console.log("y");
// // });


// // when any opration blocks this call stack that is known as blocking the main thread.

// // function attachEventListeners(){
// //   let count = 0;
// //   document.getElementById("clickable").addEventListener("click", function xyz(){
// // console.log("button clicked", ++count);
// //   });
// // }
// // attachEventListeners();




// //EVENT LOOP




//  //call stack is present inside the js engine and js engine is present inside browser. 
//  //setTimeout(), DOM APIs, fetch(), local storage, console, location all are present inside web APIs inside the browser. to access all this superpower inside the js engine or in call stack we have to use goblal object window. e.g window.setTimeout().
//  //in js code we don't write like this {window.setTimeout()} bcoz window is the global object and all this web APIs present inside the global object or global scope so we can access them with out write window.


//  console.log("start");
//  document.getElementById("btn").addEventListener("click", function cb(){
//   console.log("callback");
//  });
//  console.log("end");


//  //when we access DOM APIs its basically access the html code and try to find out buttom inside it and return it.
//  //addEventListener register a callback function inside the web API add add an Event to it which in click.when the timer is completed the call back fun is ready to executed.
//  //when the user click on the click button this call back funtion pop up inside the call back Queue.
//  // then job of Event loop is to contineously moniter the call stack and call back queue. it contineously check weather the call stack is empty or not.if empty it will push the fun which is present inside the call back queue in to call stack for execution.

//  console.log("start");
//  setTimeout(function cbt() {
//   console.log("callback");
//  }, 5000);
//  fetch("http://api.netflix.com").then(function cbf() {
//   console.log("hii");
//  });
//  console.log("end");

// //here setTimeout is registered the call back fun cbt  inside the API environment and also starts a timer of 5000ms.
//  //fetch() basically do a request or a network call to the server(e.g netflix). then server return the data to the fetch(). so now the call back fun fetch is ready to executed.
//  //it fetch() get the data before the timer complete(timer is part of call back fun setTimeout()) then it will go to the microtask queue. 
//  //the call back fun also have a microtask queue. and it has the higher priority than call back queue. when call stack is empty, event loop gives the 1st chance to microstack queue to executed.after execution complete of all the task present inside microtask queue then event loop push the fun which is present inside the call back queue to call stack for execution. 

//  //ALL THE CALL BACK FUN WHICH COMES THROUGH PROMISES AND MUTATIONS OBSERVER WILL GO INSIDE THE MICROTASK QUEUE. 

//  //IF THE TASK PRESENT INSIDE THE MICROTASK QUEUE CREATES ANOTHER TASK ITSELF AND IT KEEP IT CONTINUE THEN THE TASK PRESENT INSIDE THE CALL BACK STACK NEVER GET A CHANCE TO EXECUTE. THIS IS CALLED STARVATION.





//  //JS ENGINE



 

//  //browser can only execute js code just bcoz it has the js runtime environment.
//  //inside js runtime environmen, js engine, APIs, Events, CQ AND MQ are present.
//  //spidermonkey is the 1st js engine.
//  //in js engine there are 3 phase. 1.parsing 2.compilation 3.execution
//  //in parsing phase the codes are broken down in to TOKENS.there is also present syntax parser which is takes the code and convert it in to ASt.
//  //Abstract syntax tree is like generate a big tree structure of our code. it basically hold the declaration, value...
//  // after completion of parsing phase this AST pass to the compilation phase.
//  // compilation phase has a JIT compilation(just in time). it have interpretter and also compiler.
//  //The AST goes to the interpretter. interpretter convert the AST to byte code from high label code.then the byte code go for the execution phase.
 


//  console.log("start");
//  setTimeout(function cbt() {
//   console.log("callback");
//  }, 5000);
 
//  console.log("end");

//  // we are writing this code to block the call stack for some time to undesrstand setTimeout() deeply.
  
//  let startdate = new Date().getTime();
//  let endDate = startdate;
//  while(endDate < startdate + 10000) {
//   endDate = new Date().getTime();
//  }
//  console.log("while expires");

//  console.log("start");
//  setTimeout(function cbt() {
//   console.log("callback");
//  }, 0);
 
//  console.log("end");
//  //start,end then callback

//  console.log("start");
//  function cb(){
//   console.log("callback");
//  }
//  setTimeout(cb, 0);
 
//  console.log("end");//here cb() will executed after execution of all code.
 
//  //if we have to defer some part of code it means the defer code will execute after execution og all code is document.then we can set the time is 0. 
 
 


//  //HIGHER ORDER FUNCTIONS




// //A fun which takes another fun as an argument or return a fun from it is known as higher order function.

// function x(){ //x is the call back fun
//   console.log("hii");
// }
// function y(x){// here y is higher order fun
//   x();
// }

//  //in the below program the problem is we are repeating the things a lot. it doesn't satisfy the DRY principle(don't repeat yourself). 
// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));



// //good programing practice with higher order function.



// const radius = [3, 2, 1, 4];

// const area = function(radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };
//  const diameter = function (radius) {
//   return 2 * radius;
//  };

//  const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//  }
//   return output;
//  };
 
//  console.log(calculate(radius, area));
//  console.log(calculate(radius, circumference));
//  console.log(calculate(radius, diameter)); 



//  //MAP FUNCTION


//  const arr = [5, 1, 3, 2, 6];

//  function double(x) {
//   return x * 2;
//  }

//  function triple(x) {
// return x * 3;
//  }

//  function binary(x) {
//   return x.toString(2);
//    }

//   const output = arr.map(double);//[10,2,6,4,12]
// console.log (output);
// const output = arr.map(triple);
// console.log (output);
// const output = arr.map(binary);
// console.log (output);

// //using array fun

// const arr = [5, 1, 3, 2, 6];
// const output = arr.map(x) => x.toString(2));
// console.log(output);


// //FILTER FUNCTON : it is used to filter out. like in below array we can fine out how many even or odd numbers are present or how many no.s are less than or greater that 4 by using this filter fun.

// //filter odd value

// const arr = [5, 1, 3, 2, 6];
// function isOdd(x){
//   return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);


// //filter even value


// const arr = [5, 1, 3, 2, 6];
// function isEven(x){
//   return x % 2 == 0;
// }
// const output = arr.filter(isEven);
// console.log(output);


// //filter greaterthan 4 value


// const arr = [5, 1, 3, 2, 6];
// function greaterThan4(x){
//   return x > 4;
// }
// const output = arr.filter(greaterThan4);
// console.log(output);

// //or

// const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((x) => x < 4);
// console.log(output);



// //REDUCE Function :  it takes multiple value and gives one resultant value. like it gives sum or max value of an Array.


// //find sum in normal way
// function findSum (){
//   let sum = 0;
//   for(let i = 0;i <= i.length; i++){
//   sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));


// //by using reduce()


// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);//here 0 is the second argument and fun is the 1st argument of reduce()



// // find max in normal way

// function findMax (){
//   let max = 0;
//   for(let i = 0;i <= i.length; i++){
//     if (arr[i] > max) {
//   max = arr[i];
//   }
// }
//   return max;
// }
// console.log(findMax(arr));



// //by using reduce()

// const output = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output); 


// //example


// const user = [
// { firstName: "manisha", lastName:"das", age:"23"},
// { firstName: "anisha", lastName:"swain", age:"22"},
// { firstName: "nisha", lastName:"shahoo", age:"23"},
// { firstName: "lisha", lastName:"pradhan", age:"25"}
// ]

// //acc ={23 : 2, 22 : 1, 25 : 1 }

// const output = users.reduce(function (acc, curr){
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   }else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

// //list of full name

// const output = users.map((x) => x.firstName + lastName);
// console.log(output);


// //print the 1st name whose age is less than 30.


// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);
  