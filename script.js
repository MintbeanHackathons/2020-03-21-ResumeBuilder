// Select Form
const form = document.getElementById('resumeInputForm')

// const nameInput = document.getElementById('formGroupNameInput')

// let name = nameInput.value
// console.log(nameInput)

// Methods

const handleFormSubmit = event => {
  event.preventDefault()
  const data = {}
  const dataContainer = document.getElementsByClassName('dataContainer')
  dataContainer.textContent = JSON.stringify(data)
}
