const handleObject = require('./handleObject');
const handleArray = require('./handleArray')

// The function loops through the schema object and calls the appropriate functions based on the type of each key to eventually return a list of questions
function generateQuestions(schema) {
    var questionsArray = []
    for( const property in schema) {
        if( typeof schema[property] === 'object') {
            Array.isArray(schema[property]) ? console.log("we have an array") : handleObject(property, schema[property], questionsArray)
        }
    }
    return questionsArray
}

module.exports = generateQuestions;