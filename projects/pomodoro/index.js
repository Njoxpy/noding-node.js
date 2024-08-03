// get element
const btn = document.getElementById("btn");

let ellapsedSeconds = 0;
btn.addEventListener("click", (e) => {
  const alertDev = setInterval(() => {
    ellapsedSeconds += 1;
    console.log(ellapsedSeconds);
    if (ellapsedSeconds === 3000) {
      clearInterval(alertDev);
      console.log("take a break");
    }
  }, 60);
});
