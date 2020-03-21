// const fs = require('fs');

function createResume() {
  event.preventDefault();
  let resume = {};
  let inputs = [...document.getElementsByClassName('basics')];
  inputs.forEach(input => {
    resume[input.name] = input.value;
  });
  console.log(resume);
  //window.location.href = "/success";
}
