/* typescript primitive types:
  string, number, null, undefined, boolean, symbol, bigInt*/

import testfile from "./Testfile.js"

function logName() {
  const name: string = "Lucas";
  const msg: string = `Hello ${name}`;

  console.log(msg);
}

//this tells typescript to treat this file as a module
//otherwise the variable names will clash with the other variable names in other files
export {};
