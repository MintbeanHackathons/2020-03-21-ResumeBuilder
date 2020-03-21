function handleString(stringName, questionsArray) {
    let question = {
        name: stringName,
        message: `Please enter your ${stringName}`
    }
    questionsArray.push(question)
}

module.exports = handleString;