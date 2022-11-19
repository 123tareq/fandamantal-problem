
// practice problem 1 of(a)
var fruits=['Apple','Banana','Orange','Mango'];
console.log(fruits.indexOf('Banana'));
// array replace
var index =fruits.indexOf('Banana');
fruits.splice(index,1,'Mango');
console.log(fruits);





// parctice problem 1 of(b)

let fruitsItems=['Apple','Banana','Orange'];
 fruitsItems.pop
 ('Apple');
  fruitsItems.push('Watermelon');
console.log(fruitsItems);

// practice problem 2
var score;
if(score<=100 && score>=85){
  console.log("grade is A")
}else if(score<=85 && score>=60){
  console.log("grade is B")
}else if(score<=60 && score>=50){
  console.log("grade is C")
}else if(score<=50 && score>=40){
  console.log("grade is D")
}else{
  console.log("grade is F");
}




// practice probelm 3 (1)
var num1 = 13;
var num2 = 79;
const num3 = 45;
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);


// practice problem 3 (2)
var x=9;
var y=8;
var z=9;
if(x==y && y==z){
  console.log("Equilateral Triangle");
}else if(x == y  || y==z || z==x){
  console.log("Isosceles Triangle");
}else{
  console.log("Scalene Triangle");
}



















