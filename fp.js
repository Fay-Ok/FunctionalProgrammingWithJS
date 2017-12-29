//The following code demonstrates FP approach for a problem
//Problem: you have a company that wants to give raise (10000) to all the employees
//Two pure functions that are responsible for one task


function changeSalary(employee, amt) {
    return [employee[0], employee[1] + amt];
}

//Map takes a collection transform the data and returns a new collection

function changeSalaries(employees, amt) {
    return employees.map(function (emp) {
        return changeSalary(emp, amt);
    });
}


//FP prefers plain array 
//we ahve array of array representing the list of of employees


var employees = [
    ["Bob", 100000.0],
    ["Jane", 125000.0]
];

var happierEmployees = changeSalaries(employees, 10000.0);

happierEmployees.forEach(function (emp) {
    console.log(emp[0] + " makes " + emp[1]);
});