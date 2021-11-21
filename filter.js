var arr=[2,6,7,3,4,5,8,9,10,11,12,13,14]
//filter
var evens=arr.filter(num=>num%2==0)
console.log(evens);
// get all numbers greater than 5
var greater_five=arr.filter(num=>num>5)
console.log(greater_five);
// print squares of all numbers greater than 5
var squares_five=arr.filter(num=>num>5).map(num=>num**2)
console.log(squares_five);
// print squares of all numbers in range of 5 to 10
var squares=arr.filter(num=>(num>5) && (num<=10)).map(num=>num**2)
console.log(squares);