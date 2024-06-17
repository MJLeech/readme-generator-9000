const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./generateMarkdown");
const { default: Choices } = require('inquirer/lib/objects/choices');

const questions = [
  {
    name:"title",
    message: 'What is the title for your readme?',
    default: 'Readme'
  },
  {
    name: 'description',
    message: 'please enter the description of your readme',
  },
  {
    name: 'installation',
    message: 'please enter instructions on installing your application',
  },
  {
    name: 'usage',
    message: 'please describe the usage of your application',
    
  },
  {
    type: 'list',
    name: 'licence',
    message: 'please choose a licence',
    choices: ['None','MIT','apache'],
    
  },
  {
    name: 'contributing',
    message: 'please enter instructions for contributing to this project',
    
  },
  {
    name: 'tests',
    message: 'what command should be run to test this application?',
    default: 'npm i'
  },
  {
    name: 'email',
    message: 'What is your email?',
    
  },
  {
    name: 'github',
    message: 'What is your github username?',
    
  },
];

function writeToFile(data) {
  fs.writeFile('README.md',data, (err) =>
    err ? console.error(err) : console.log('Generating Readme')
  );
}

function init() {
  inquirer
  .prompt(questions)
  .then(answers => {
    writeToFile(generateMarkdown(answers))
    console.log(generateMarkdown(answers))
  });
}

// Function call to initialize app
init();
