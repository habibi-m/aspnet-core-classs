function getPI() {
  'use strict'
  let MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    //MATH_CONSTANTS.PI = 99; //this is ignored
    MATH_CONSTANTS = {PI:'hasan'}
  } catch( ex ) {
    console.log(ex);
  }
  
  return MATH_CONSTANTS.PI;
}
  
const PI = getPI();
  
console.log(PI);