var number = 0;
var i = 10000;
function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}

function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }

  return number > 1;
}

while (!(isPrime(i) && checkPalindrom(i.toString()))) {
  i--;
  number = i;
}

function showResult() {
  document.getElementById('number').innerHTML = 'Hello this number is : ' + number;
}
