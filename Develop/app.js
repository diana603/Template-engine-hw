const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output"); ``
const outputPath = path.join(OUTPUT_DIR, "team.html");
console.log(OUTPUT_DIR);
console.log(outputPath);
const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const questions = [
    {
        type: "input",
        name: "employeeType",
        message: " Please Select Employee Type ",
        choice: ["Manager", "Intern", "Engineer"]
    }
];



// creat new instances of classes with new data
const manager1 = new Manager("Diana", 11, "diana@gaeacoop.org", "D342");
const intern1 = new Intern("Diana", 11, "diana@gaeacoop.org", "UNH");
const engineer1 = new Engineer("Diana", 11, "diana@gaeacoop.org", "diana603");
const employees = [manager1, intern1, engineer1];

//initialize function
async function initialize() {
    //ask the questions so we can fill the class objects
    await inquirer
        .prompt(questions)
        .then(async answers => {
            console.log("int he function");
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });

    //get the renderedHTML (which is just a string of html tags)
    const renderHTML = await render(employees);

    //check if the output directory exists, if not create it
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }

    //writes renderedHTML to a file in outputpath
    fs.writeFile(outputPath, renderHTML, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("file created");
        }
    });

}

//call the initialie function above
initialize();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!




// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.  
// checking if output folder exist if not it will make one.// 


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
