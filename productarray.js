var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names

var product_names=products.map(prod=>prod[1])
console.log(product_names);


// print avaialable product name
var available_prod=products.filter(prod=>(prod[3]>0)).map(prod=>prod[1])
console.log(available_prod);


// print out of stock product details
var out_stock=products.filter(prod=>prod[3]==0)
console.log(out_stock);


// list all products whose price > 250
var price=products.filter(prod=>prod[2]>250)
console.log(price);

// high cost product
var high_cost=products.reduce((prod1,prod2)=>prod1[2]>prod2[2]?prod1:prod2)
console.log(high_cost);

// low cost product


var low_cost=products.reduce((prod1,prod2)=>(prod1[2]<prod2[2])?prod1[2]:prod2[2])
console.log(low_cost);

// is there any item available under 200
var under_200=products.filter(prod=>prod[2]<200)
console.log(under_200);