function changeSalary(employee, amt) {
    return [employee[0], employee[1] + amt];
}

function changeSalaries(employees, amt) {
    return employees.map(function (emp) {
        return changeSalary(emp, amt);
    });
}


var employees = [
    ["Bob", 100000.0],
    ["Jane", 125000.0]
];

var happierEmployees = changeSalaries(employees, 10000.0);

happierEmployees.forEach(function (emp) {
    console.log(emp[0] + " makes " + emp[1]);
});