// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
    }; // also need fields for employee 
    // call super function to update value 
    getSchool() {
        return 'Intern';
    };
};

export default Intern 