const inquirer = require('inquirer')
const fs = require('fs')
const schema = require('./schema.json')

// The program will loop through the imported schema object and call the appropriate function based on the type of each key
inquirer
  .prompt([
    {
        name: 'test',
        message: 'This is a test, does it work?'
    }
  ])
  .then(answers => {
    if(answers.test === 'yes') console.log("It works!")
    else console.log("It still works")
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
