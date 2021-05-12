// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'projectTitle',
        message: 'What is your Project\'s Name?'
    },
    {
        name: 'projectDescription',
        message: 'Please write a short description of your project'
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
        message: 'What does the user need to know about using the repository'
    },
    {
        name: 'projectGuidelines',
        message: 'What does the user need to know about contibuting to the repository'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT', 'BSD 2', 'BSD 3', 'Boost SW 1.0', , 'Creative Commons Zero 1.0', 'Eclipse', 'GNU v3.0', 'GNU v2.0', 'GNU 2.1', 'Mozilla', 'The Unlicense', 'None'],
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
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('SuccessFully wrote to index.html!')
    );
 }

// TODO: Create a function to initialize app
function init() {
    
inquirer
    .prompt(questions)
    .then(answers => {
        console.info('Answers:', answers);
    });

}

// Function call to initialize app
init();
