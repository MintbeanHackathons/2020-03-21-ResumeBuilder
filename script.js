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
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: [],
  };
  const inputs = getInputs(resume);
  //Loops over each type of input
  Object.keys(inputs).forEach(inputType => {
    //Loops over array of inputs for each type, and puts their
    //names and values in the resume object
    let instance = {};
    inputs[inputType].forEach(input => {
      if (inputType === 'basics') {
        resume[inputType][input.name] = input.value;
      } else {
        if (instance[input.name] !== undefined) {
          resume[inputType].push(instance);
          instance = {};
        }
        instance[input.name] = input.value;
      }
    });
    if (inputType !== 'basics') {
      resume[inputType].push(instance);
    }
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

//NOT YET WORKING:
//SHOULD ADD FORM FOR MORE WORK IF USER CLICKS BUTTON

// function addMore() {
//   let work = document.getElementById('work');
//   //Create company div
//   let company = document.createElement('div');
//   company.innerText = 'Company: ';
//   let cInput = document.createElement('input');
//   cInput.class = 'work';
//   cInput.name = 'company';
//   cInput.type = 'text';
//   company.appendChild(cInput);
//   //Create position div
//   let position = document.createElement('div');
//   position.innerText = 'Position: ';
//   let pInput = document.createElement('input');
//   pInput.class = 'work';
//   pInput.name = 'position';
//   pInput.type = 'text';
//   position.appendChild(pInput);
//   //Create add button
//   let button = document.createElement('button');
//   button.innerText = 'Add Another';
//   button.onclick = addMore;
//   //Add all as children of work
//   work.appendChild(company);
//   work.appendChild(position);
//   work.appendChild(button);
// }
