// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
//I create the question according to the structure that inquirer need
const questions = [
    {
        name: 'projectTitle',
        message: 'What is your Project\'s Name?'
    },
    {
        name: 'projectDescription',
        message: 'Please write a short description of your project:'
    },
    {
        name: 'projectInstall',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        name: 'projectTest',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        name: 'projectUsage',
        message: 'What does the user need to know about using the repository:'
    },
    {
        name: 'projectGuidelines',
        message: 'What does the user need to know about contributing to the repository:'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT', 'BSD 2', 'BSD 3', 'Boost SW 1.0', 'Creative Commons Zero 1.0', 'Eclipse',  'Mozilla', 'None'],
        default: 'None'
    },
    {
        name: 'githubName',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        message: 'What is your email address?'
    }
    ,];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // I get the README content according to the user information provided with inquirer
    const dataReadme = generateMarkdown(data);
    // I use File System to create the README File
    fs.writeFile(fileName, dataReadme, (err) =>
        err ? console.log(err) : console.log('SuccessFully created your README file!')
    );
 }

// TODO: Create a function to initialize app
function init() {
    // I call inquirer, I set on the prompt the question that was defined before 
inquirer
    .prompt(questions)
    .then(data => {
        // Once I display the question and get the answers I call the function that will write the README
        // I decied that the file will be exported to a folder this is in order to avoid to delete the README of this project
        writeToFile("./exported/README.md", data);
    });
}
// Function call to initialize app
init();
