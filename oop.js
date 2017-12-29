//The following code demonstrates OOP approach for a problem
//Problem: you have a company that wants to give raise (10000) to all the employees


// creating an Employee calss with two istance variables(name and salary)

class Employee {

    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
    }

    //methods are instance methods (aka instance)

    changeSalary(amt) {
        this._salary = this._salary + amt;
    }

    description() {
        console.log(this._name + " makes " + this._salary);
    }
}

let employees = [
    new Employee("Bob", 100000.0),
    new Employee("Jane", 125000.0)
]

employees.forEach(function (emp) {
    emp.changeSalary(10000.0);
});

employees.forEach(function (emp) {
    emp.description();
});