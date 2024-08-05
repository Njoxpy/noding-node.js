/*
- The global object into the browser is window object
* in node global object is  
- inside the browser the window is global object.

Browser: Global object is window.
console.log(window)
Node.js: tHE GLObal object is global.
console.log(global)
*/


/*
- set timeout: log according to the time
- set interval: repeats after a time
 */


// console.log(global);

// setTimeout(() => {
//     console.log("node.js");
//     clearInterval(int);
// }, 22222)

// const int = setInterval(() => {
//     console.log("keeps repeating");
// }, 1111)


console.log(`${__dirname}`); // absolute path, directory name
console.log(`${__filename}`); // file path


/**
 * <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  crypto: [Getter]
}

 */