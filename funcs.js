function isFive(num) {
  // Your code here
if(num===5){
return true;
}
return false;
}

function isOdd(number) {
  // Your code here
  
  if(typeof number !== "number"){
     throw new Error("Wrong input, Please enter a number!");
  }

	  else if(number%2===0){
   return false;
   }
  return true;
}

function myRange(min, max, step = 1) {
  // Your code here
      let answer=[];
	if(min<max){
        for(let i=min ; i<=max; i+=step){
         answer.push(i);
	}
	}
  return answer;
}


module.exports = { isFive, isOdd, myRange };
