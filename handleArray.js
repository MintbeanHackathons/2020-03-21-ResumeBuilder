const handleObject = require('./handleObject.js')
const schema = require('./schema.json')

// This is a recursive function that calls on the string function which has the inquirer prompts
function handleArray(arrayName, array) {
    for( let i = 0; i < array.length; i++) {
        // if( typeof array[i] === 'string' ) handleString(property, object[property]);
        if( typeof array[i] === 'object') {
            Array.isArray(array[i]) ? handleArray(array, array[i]) : handleObject(array, array[i])
        }
    }
}
 module.exports = handleArray;