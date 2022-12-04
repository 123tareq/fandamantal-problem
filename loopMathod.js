// var numbers=[10,20,30,40,50,60,70,80,90];
// var largestNumber=0;
// for( i=0; i<=largestNumber;i++){
// if(numbers>largestNumber){
//     var largestNumber=numbers[i];
// }
// }
// console.log(largestNumber);

var arry=[1,2,3,4,5,6,7];
var bigNumber= arry[0];

for(var i=0; i<arry.length;i++){
    if(bigNumber<arry[i]){
        bigNumber=arry[i]
    }

}console.log(bigNumber);




var arrys = [
  'i want ',
  'i want to ',
  'i want to go there'
];

var tracker = 0; 
// 3,12,8
var longest;

for (var i = 0; i < arrys.length; i++) {
  if (arrys[i].length > tracker) {
     tracker = arrys[i].length;
    longest = arrys[i];
  }
}

console.log(longest);