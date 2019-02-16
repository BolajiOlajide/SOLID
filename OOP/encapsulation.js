let employee = {
    baseSalary: 10000,
    rate: 20,
    overtime: 10,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

// to get the wage of any employee we can simply call employee.getWage()
console.log(employee.getWage());
console.log();

// We can create a class that can be used to generate different employees
class Employee {
    constructor(baseSalary, overtime, rate) {
        this.baseSalary = baseSalary;
        this.overtime = overtime;
        this.rate = rate;
    }

    getWage() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

const proton = new Employee(10000, 10, 20);
console.log(proton.getWage());

const kez = new Employee(20000, 10, 10);
console.log(kez.getWage());
