const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output"); ``
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
    {
        type: "input",// multiple selection?? 
        name: "Type of Employee",
        message: " Please Enter "
    },
]
inquirer
    .prompt(questions)
    .then(answers => {

        console.log(answers);

        const Elias = new Engineer("gitHub")

        //user wants to create one manager and two intern and two engineers. lets assume what you have is an array of objects. the data returned would be name, id, email or different properties classes. once data is provided take it and inside the inquirer code and create one employee from .then create intern objects. 

        // based on user input creat new object. saved in an array once object is saved then creat html. 
        //1 ask info
        //create and save file  
        // hint 
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });
// creat new instances of classes with new data
const manager1 = new Manager("Diana", 11, "diana@gaeacoop.org", "D342");
console.log(manager1);
const intern1 = new Intern("Diana", 11, "diana@gaeacoop.org", "UNH");
console.log(manager1);
const engineer1 = new Engineer("Diana", 11, "diana@gaeacoop.org", "diana603");
console.log(manager1, intern1, engineer1);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
