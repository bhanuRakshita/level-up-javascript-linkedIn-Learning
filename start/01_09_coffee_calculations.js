// Write your code here
coffeeBill = [2,3,1,5]

function calcBill(arr,unitPrice){
  let totalPrice = arr.reduce(
    (acc,currValue)=>acc=acc+currValue*unitPrice)

  return(`Total price is ${totalPrice}`);
}

console.log(calcBill(coffeeBill, 1.25));
