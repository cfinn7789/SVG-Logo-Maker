const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require("./lib/shapes.js");
// The questions that will be prompted when starting the application
const questions = [
    {
        type: "input",
        name: 'text',
        message: "Logo is generated with 3 letters. Please input 3 letters: "
    },
    {
        type: "input",
        name: 'textcolor',
        message: "Please enter a color for the text (use a keyword or a hexadecimal number): "
    },
    {
        type: "list",
        name: 'shape',
        message: "Please choose a shape: ",
        choices: ["Triangle", "Circle", "Square"]
    },
    {
        type: "input",
        name: 'color',
        message: "Please enter a color for the shape (use a keyword or a hexadecimal number): "
    }
];
// This function writes data to the file system
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successfully generated logo!"))
}
// This function sets up the application
function init() {
    inquirer.prompt(questions)
      .then((answers) => {
        let shapeType = answers.shape === 'Circle' ? Circle : answers.shape === 'Triangle' ? Triangle : Square;
  
        const logo = new shapeType(answers.text, answers.textcolor, answers.color);
        console.log(logo);
        const logoSVG = logo.createSvg();
        writeToFile('logo.svg', logoSVG);
      });
  }

// Function call to initialize app
init();