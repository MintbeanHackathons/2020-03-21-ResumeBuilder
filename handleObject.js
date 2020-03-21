const handleString = require('./handleString.js');
const handleArray = require('./handleArray.js')
const schema = require('./schema.json')

// This is a recursive function that calls on the string function which has the inquirer prompts
function handleObject(objectName, object) {
    for( const property in object) {
        if( typeof object[property] === 'string' ) handleString(property, object[property]);
        if( typeof schema[property] === 'object') {
            Array.isArray(schema[property]) ? handleArray(property, schema[property]) : handleObject(property, schema[property])
        }
    }
}

module.exports = handleObject;