
    var employees=[
        [1000,"ram","developer",25000,1990,2005],
        [1001,"ravi","developer",27000,2000,2003],
        [1002,"raju","ba",26000,1995,2005],
        [1003,"nikil","mrkt",24000,2000,2007]
    
    ]
// some boolean values
// is there any employee working as developer
var isDeveloper=employees.some(emp=>emp[2]=="developer")
console.log(isDeveloper);
//is there any employee exp>15
var exp_emp=employees.some(emp=>(emp[5]-emp[4])>15)
console.log(exp_emp);


// for each- iterating purpose
employees.forEach(emp=>console.log(emp[1]))










// find name ram  
//find has  single parameter, first case only returns 
var find_by_name=employees.find(emp=>emp[1]=="ram")
console.log(find_by_name);


var dev_det=employees.find(emp=>emp[2]=="developer")
console.log(dev_det);





// sort employess based on salary descending order

var sort_emp=employees.sort((emp1,emp2)=>emp2[3]-emp1[3])
console.log(sort_emp);



// find highest salary
var max_sal=employees.reduce((emp1,emp2)=>emp1[3]>emp2[3]?emp1:emp2)
console.log(max_sal);

// another method

var max_sal=employees.map(emp=>emp[3]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(max_sal);

//lowest salary
var min_sal=employees.reduce((emp1,emp2)=>emp1[3]<emp2[3]?emp1:emp2)
console.log(min_sal);



   //  q1 print employee names
   for(let emp of employees){
       console.log(emp[1]);
   }
var emp_names=employees.map(emp=>emp[1])
console.log(emp_names);




    // q2  print developers name
    for(let emp of employees){
        if(emp[2]=="developer"){
            console.log(emp[1]);
        }
    }

    //q3 print emp name and exp of each employee?
for(let emp of employees){
    var exp=emp[5]-emp[4]
    console.log(emp[1],exp);

}
var emp_exp=employees.map(emp=>[(emp[5]-emp[4]),emp[1]])
console.log(emp_exp);




    // q4 print details of employees whose salary >25000
     for(let emp of employees){
         if(emp[3]>"25000"){
             console.log(emp[1]);
         }
     }

var sal_gt_25k=employees.filter(emp=>emp[3]>25000)
console.log(sal_gt_25k);


// qn print  details of developers who is taking salary>25000
var developers_gt_25k=employees.filter(emp=>emp[2]=="developer" && emp[3]>25000)
console.log(developers_gt_25k);

// qn print employee details whose exp>5 yr
var ex_gt_5=employees.filter(emp=>(emp[5]-emp[4])>5)
console.log(ex_gt_5);

    // add 2000 rsof bonus for all employees

var sal_bonus=employees.map(emp=>emp[3]+2000)
console.log(sal_bonus);

// pushing an employee detail
var new_employee=[1004,"anu","developer",35000,2015,2020]
employees.push(new_employee)
console.log(employees);




    
    //q7 print most experienced employee

        for(let emp of employees){
                var exp=emp[5]-emp[4]
                console.log(emp[1],exp);
            
            } 


        var most_exp=employees.reduce((emp1,emp2)=>(emp1[5]-emp1[4])>emp2[5]-emp2[4]?emp1:emp2)
        console.log(most_exp);
    

    

    