"use strict";

// Fetch input from form
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let website = document.getElementById("website");
let summary = document.getElementById("summary");
let sendButton = document.getElementById("send");

let jsonFormat = {};

sendButton.addEventListener('click', function() {
  console.log(name, email);
});
