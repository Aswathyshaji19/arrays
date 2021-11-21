var arr=[2,6,7,3,4]
var newarr=[]
//creeate an array from this if num<5 num-1 if num>5 num+1 if num==5 then 5
for(let numb of arr){
    if(numb>5){
        newarr.push((numb+1))

    }
    else if(numb<5){
        newarr.push((numb-1))

    }
    else if(numb==5){
        newarr.push(numb)
    
    }

    }
    console.log(newarr);
