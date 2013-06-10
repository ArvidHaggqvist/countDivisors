/* Based on the sieve of Eratosthenes, this program calculates how many available divisors a given number n has */

function countDivisors(n) {
    var LIMIT = n;
    var numbers = [];
    
    for(i=0;i<LIMIT;i++) {
        numbers[i] = i+2;
    }
    
    for (i=0;i<LIMIT;i++){
        if(LIMIT % numbers[i] !== 0) {
            numbers[i]=-1;
        }
        if (numbers[i]!== -1){
            if(LIMIT % numbers[i] !== 0) {
                for (j=2*numbers[i]-2;j<LIMIT;j+=numbers[i]) {
                    numbers[j]=-1;
                }
            }
        }
    }
    
    var sum = 0, divisibles = [];
    for (i=0;i<LIMIT;i++) {
        if (numbers[i]!== -1) {
            divisibles.push(numbers[i]);
        }
    }
    return divisibles.length + 1;
}