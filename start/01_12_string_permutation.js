// Write your code here
function calc(n){
  if(n===0){
    return 1;
  } else return(n*calc(n-1));
}

console.log(calc(3));