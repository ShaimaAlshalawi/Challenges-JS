// الأعداد الأولية بين قيمتين
function isPrime(num) {
    if (num <= 1) {  
       return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
       if (num % i === 0) {
          return false;
       }
    }
    return true;
 }
 function getPrimesBetween(a, b) {
     var arr = [];
 
    for (let i = a; i <= b; i++) {
       if (isPrime(i)) {
          arr.push(i);
       }
    }
 
    return arr;
 
 }
 