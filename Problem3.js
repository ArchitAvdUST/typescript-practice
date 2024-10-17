var employees = [
    { id: 1002, name: "ABC", age: 30, salary: 30000, department: "Tester" },
    { id: 1001, name: "Archit", age: 22, salary: 50000, department: "Developer" },
    { id: 1003, name: "CDE", age: 42, salary: 40000, department: "Developer" }
];
var department = "Developer";
employees.forEach(function (employee) {
    if (employee.department === department) {
        console.log(employee);
    }
});
