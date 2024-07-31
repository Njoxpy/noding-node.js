// Write a script using setTimeout to log "Hello, World!" to the console after 5 seconds.
/*
function greetUser() {
  console.log("Hello world");
}

setTimeout(greetUser, 5000);
*/

// Create a simple countdown timer using setInterval that counts down from 10 to 0, logging each number to the console.

let count = 10;
function countDown() {
  count -= 1;
  if (count === 0) {
    console.log(count);
    clearTimeout(countDown);
  }
}

setInterval(countDown);
