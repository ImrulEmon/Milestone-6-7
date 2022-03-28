/**
 * Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
 */

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName
  function myFunction() {
    var carName = "Volvo";   // Function Scope
  }
  function myFunction() {
    let carName = "Volvo";   // Function Scope
  }
  function myFunction() {
    const carName = "Volvo";   // Function Scope
  }

  let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

var x = 2;       // Global scopegit 