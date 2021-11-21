var arr=[1000,2000,3000,40000]
// reduce fn
// total sum
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

// find highest number from this array
var high=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(high);

//lowest
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(min);
