var expenses=[20000,22000,17000,27000,30000]
// console.log(typeof(expenses));
// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }
// amount- variable name
// of -inorder to take values
// for(let amount of expenses){
//     console.log(amount);
// }
//qustn : print expenses >25000 //27k,30k

// for(let amount of expenses){

//     if(amount>25000){
//         console.log(amount);
//     }
// }

// q2; find total expenses;
// var total_exp=0;
// for(let amount of expenses){
//     total_exp+=Number(amount);

// }
// console.log(total_exp);

// q3; find highest_exp
// var high_exp=expenses[0]// highest expenses
// for(let amount of expenses){

//     if(amount>high_exp){
//         high_exp=amount

//     }
// }
// console.log(high_exp);

// q4: lowest expenses

var low_exp=expenses[0]// low=20000
for(let amount of expenses){
    if(amount<low_exp){
        low_exp=amount
    }

}
console.log(low_exp);





