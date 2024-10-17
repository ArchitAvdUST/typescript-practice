type employee = {
    id: number,
    name: string,
    age: number,
    salary: number,
    department: string
}

let employees: employee[] = [
    {id:1002,name:"ABC",age:30,salary:30000,department:"Tester"},
    { id: 1001, name: "Archit", age: 22, salary: 50000, department: "Developer"},
    {id : 1003, name: "CDE", age: 42, salary: 40000, department:"Developer"}
];

let department = "Developer";

employees.forEach((employee) => { 
    if(employee.department === department){
        console.log(employee);
    }
});





