import input from "./input";

type employee = {
    id: number,
    name: string,
    email: string,
    password: string
    isVerified: boolean
    };

const emp1: employee = { id: 1001, name:"Archit", email:"archit@ust.com", password:"archit123", isVerified:true};

console.log(emp1);

let str:string;
async function addNewEmployee(){
    console.log("Enter new employee details:")
    let empId= await input(" Id: ");
    let empName = await input(" Name: ");
    let empEmail = await input(" Email: ");
    let empPass = await input("Password: ");
    const emp2: employee = { id: parseFloat(empId) , name: empName, email: empEmail, password: empPass, isVerified: true };
    console.log(emp2);
    process.exit();
}

addNewEmployee();