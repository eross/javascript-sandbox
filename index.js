// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
let x;
x = 43;
console.log(x);
const tst = (function () {
  function t1(data) {
    return '56';
  }
  return { t1 };
})();

console.log(tst.t1(44));

const sum = (x, y) => x + y;

sum(4, 12);
