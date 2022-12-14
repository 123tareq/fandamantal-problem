
// probelm 1

function radiansToDegrees(radians)
{
  var piValu = Math.PI;
  return radians * (180.0/piValu);
}
          
console.log(radiansToDegrees(1));






// // problem no 2
function isString(string) { 
	if ( string === " ") { 
		return true; 
	} 
	return false; 
}

console.log(isString("radianToDegree.js"))



// // probelm 3


function oillprice(disel,octane,pactole){
const diselCountity=2;
const octeneCountity=3;
const pactoleCountity=4;
return diselCountity*disel+octeneCountity*octane+pactoleCountity*pactole;
}
console.log((oillprice(114,135,130)));



// problem 4


	const frind={name:"Kamal", frind:"Jamal"};
const frind2={name:"Jamal", frind:"Kamal"}
function isBestFrind(frind,frind2){
	if((frind[0]=== frind2[1] && frind[1]=== frind2[0])){
console.log(true)	
}else{
		console.log(false);
	}
	return frind,frind2;
}
isBestFrind(frind,frind2);





// problem 5;
// how many bus neded
function needPublicBus(travlers){
	const busCapacity=50;

	return travlers/busCapacity;
}
	console.log(needPublicBus(1200))

// how many MicroBus Neded
	function needMicroBus(travlers){
		const microBusCapacity= 11;
		const need= travlers/microBusCapacity;
		return need.toFixed();
	}
	console.log(needMicroBus(50))



// how much Bus Fare total cost depends on visitors
	function publicBusFare(visitors){
		const busFare=250;
		 return visitors*busFare;
	}
	console.log(publicBusFare(112));


	// how many Micro Bus Fare total Cost depends on visitors.

	function microBusFare(Passngers){
		const microFareCost=950;
		return Passngers*microFareCost;

	}
	console.log(microBusFare(50));





