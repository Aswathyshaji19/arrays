var arr=[2,6,7,3,4]
//creeate an array from this if num<5 num-1 if num>5 num+1 if num==5 then 5
var mapout=arr.map(num=>num<5?num-1:num>5?num+1:num)
console.log(mapout);