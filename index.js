const inquirer = require('inquirer');
const fs = require('fs'); // fs is the file system
const {Triangle, Circle, Square} = require("./lib/shapes.js");

const questions = [
    {
        type: "input",
        name: 'text',
        message: "Logo is generated with 3 letters. Please input 3 letters: "
    },
    {
        type: "input",
        name: 'text-color',
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
        name: 'shape-color',
        message: "Please enter a color for the shape (use a keyword or a hexadecimal number): "
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Successfully generated logo!'))
}