const inquirer = require('inquirer')
const fs = require('fs')
const schema = require('./schema.json')
const generateQuestions = require('./generateQuestions.js')

// 1. The first step is the generate our list of questions using the imported schema
const questions = generateQuestions(schema)

// 2. Next we use the inquirer package to prompt the user for the answers
inquirer
  .prompt(questions)
  .then(answers => {
    // 3. After all answers are completed, reconstruct object and use JSON.stringify before writing to file
    fs.writeFile('resume.json', JSON.stringify(answers), function(err) {
        if(err) throw err;
        console.log("File Saved")
    })
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
