// var arr=[2,3,4,5,6,7,8]
// var sum=6;
// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }

// for(let numb of arr){
//     for(let numb1 of arr){
//         if(arr[numb]+arr[numb1]==sum){
//            console.log(arr[numb],arr[numb1]);
//          }
//              }
// }
//only applicable for sorted array
var arr=[2,3,4,5,6,7,8]
var sum=10;

var low=0,upper=arr.length-1;
while(low<upper)
{
    let total=arr[low]+arr[upper]
    //case1
    if(total==sum){
        console.log(`${arr[low]} ${arr[upper]}`);
        break;
    }
    // case2
    else if(total>sum){
        upper-=1
    }
    //case3
    else if(total<sum){
        low+=1
    }
}
