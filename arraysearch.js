//searching
var arr=[10,11,12,13,14,15,16]
var element=15
var flag=0
for(let numb of arr){
    if(numb==element){
        flag=1
        break
    }
}
console.log(flag==0?"element not found":"element found");
   