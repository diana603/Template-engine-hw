// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }; // also need fields for employee 
    // call super function to update value 
    getRole() {
        return 'Manager';
    };
};

export default Manager 