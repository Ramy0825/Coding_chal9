// Task 1 - Creating Employee Class
class Employee { // create an employee class
    constructor(name, id, department, salary) { // the diff things put into the class
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
     getDetails() {
        return `Employee: ${this.name}, 
        ID: ${this.id},
         Department: ${this.department}, 
        Salary: $${this.salary}`;
    }
     calculateAnnualSalary() { // to calculate the annual salary  and multiply it by 12
        return this.salary * 12; 
    }
};

// Task 2 - Creating a Manager Class
class Manager extends Employee { // make the employye a manager 
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }  ; 

    getDetails() {
        return `Manager: ${this.name}, 
        ID: ${this.id}, 
        Department: ${this.department}, 
        Salary: $${this.salary},
         Team Size: ${this.teamSize}`;
    }
    calculateAnnualSalary() {
        return (this.salary * 12) + this.calculateBonus();
    }
     calculateBonus() {
        return this.salary * 12 * 0.10;
    }
};;

// Task 3 - Creating a Company Class n
class Company {
    constructor(name) { // make a class for a company so it will include name of the company and the amount of employees 
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
     listEmployees() {
        for (let employee of this.employees) {
            console.log(employee.getDetails());
        }
    };

    // Task 4 - Implementing Payroll System
    calculateTotalPayroll() {
        let total = 0;
        for (let employee of this.employees) {
            total += employee.calculateAnnualSalary();
        }
        return total;
    }

    // Task 5 - Promoting an Employee to Manager
    promoteToManager(employee, teamSize) {
        let newManager = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
        this.addEmployee(newManager); 
        this.employees = this.employees.filter(emp => emp !== employee); // Remove old employee
    }
}

// Test Cases

// Task 3  Creating a Class Company 
const company = new Company("TechCorp");

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Task 4 - Payroll Calculation
console.log(company.calculateTotalPayroll());

// Task 5 - Promoting an Employee to Manager
company.promoteToManager(emp1, 3);
company.listEmployees();
