let number = 11;
const interval = setInterval(() => {
  number -= 1;
  console.log(number);
  if (number === 0) {
    clearInterval(interval);
    console.log("interval cleared");
  }
});
