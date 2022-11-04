"use strict";


// TODO: Fix the following parameter list
function parseToJSON(data) {
  
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return null;
  }
  
  // TODO: if an exception is raised
  // print the error to the console
  // and return null
}

let failData = "<h1>Hello World!</h1>"

let passData = JSON.stringify({ success: true });

console.log(parseToJSON(failData));

console.log(parseToJSON(passData));
