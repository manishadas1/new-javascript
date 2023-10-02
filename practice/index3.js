function rectangleArea(width, height) {
    const area= height*width;
    return area;
}
const width=5;
const height= 5;
const rectangle1area= rectangleArea(width, height)
//console.log(rectangleArea(50, 40));

console.log(`area of rectangle is: ${rectangle1area}` );


//simple conditional statement


function checkEvenOrOdd(number){
    if(number%2===0){
      console.log(`${number} "is even"`);
    }else{
        console.log(`${number} "is even"`);
    }
}

checkEvenOrOdd(2);


//Looping through an array

  function printArrayElement(arr){
    for(var i=0;i<arr.length;i++)
    console.log(arr[i]);
  }

  const myArray=[2, 3, 4, 5, 8];
  printArrayElement(myArray);


  //using array and function together calculate average


  function calculateAverage(number){
var sum = 0;
for(var i=0;i<number.length;i++){
    sum += number[i];
}
var average = sum/number.length;
return average;
  }

  var numbers=[30, 40, 37, 60, 80];
  var avg = calculateAverage(numbers);

  console.log(avg);



  //function with default parameters


  function greet(name = "guest") {
    console.log(`Hello, ${name}`);
  }
  greet();
  greet("Manisha");



  //to calculate factorial


  function factorial(n){
    if(n===0 || n===1){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
  }

  console.log(`factorial of 5 is: ${factorial(5)}`);

  