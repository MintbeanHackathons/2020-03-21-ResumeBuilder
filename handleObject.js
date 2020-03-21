const handleString = require('./handleString.js');
const handleArray = require('./handleArray.js')
const schema = require('./schema.json')

// This is a recursive function that calls on the string function which has the inquirer prompts
function handleObject(objectName, object, questionsArray) {
    for( const property in object) {
        if( typeof object[property] === 'string' ) handleString(property, questionsArray);
        if( typeof schema[property] === 'object') {
            Array.isArray(schema[property]) ? console.log("we have an array") : handleObject(property, schema[property], questionsArray)
        }
    }
}

module.exports = handleObject;