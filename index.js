const inquirer = require('inquirer')
const fs = require('fs')
const schema = require('./schema.json')
const handleArray = require('./handleArray.js')
const handleObject = require('./handleObject.js')

// The program will loop through the imported schema object and call the appropriate function based on the type of each key
for( const property in schema) {
    if( typeof schema[property] === 'object') {
        Array.isArray(schema[property]) ? handleArray(property, schema[property]) : handleObject(property, schema[property])
    }
}

// inquirer
//   .prompt([
//     {
//         name: 'test',
//         message: 'This is a test, does it work?'
//     }
//   ])
//   .then(answers => {
//     if(answers.test === 'yes') console.log("It works!")
//     else console.log("It still works")
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else when wrong
//     }
//   });
