// const fs = require('fs');

function getInputs(resume) {
  let inputs = {};
  //Each key in the object corresponds to classes in the form
  //This fills inputs object with an array of inputs for each class
  Object.keys(resume).forEach(key => {
    inputs[key] = [...document.getElementsByClassName(key)];
  });
  return inputs;
}

function createResume() {
  event.preventDefault();
  //Initializes an object with Resume JSON structure
  let resume = {
    basics: { location: {} },
    work: {},
    volunteer: {},
    education: {},
    awards: {},
    publications: {},
    skills: {},
    languages: {},
    interests: {},
    references: {},
  };
  const inputs = getInputs(resume);
  //Loops over each type of input
  Object.keys(inputs).forEach(inputType => {
    //Loops over array of inputs for each type, and puts their
    //names and values in the resume object
    Object.values(inputs[inputType]).forEach(input => {
      resume[inputType][input.name] = input.value;
    });
  });
  //Loops over inputs within inputs from resume structure and fills
  //with appropriate names and values
  const locations = [...document.getElementsByClassName('location')];
  locations.forEach(input => {
    resume.basics.location[input.name] = input.value;
  });
  console.log(resume);
  //window.location.href = "/success";
}
