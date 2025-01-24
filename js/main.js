let x = +prompt("choose a number pls <3");
// تابع تشخیص اول بودن یا نبودن
function Prime(n) {
  let f = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      f++;
      let w = document.getElementById("find");
      w.innerHTML += `<h2>${i}</h2>`;
    }
  }
  if (f === 2) {
    let w = document.getElementById("find");
    w.innerHTML += `<h1>${n} is a Prime number</h1>`;
  } else {
    let w = document.getElementById("find");
    w.innerHTML += `<h1>${n} is not a Prime number</h1>`;
  }
}
Prime(x);
// تابع تشخیص فاکتوریل
function factorial(number) {
  let res = 1;
  for (i = 1; i <= number; i++) {
    res *= i;
  }
  return res;
}
let finall = factorial(x);
let w = document.getElementById("find");
w.innerHTML += `<h2>the factorial of the chosen number is ${finall}</h2>`;
