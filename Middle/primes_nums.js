// الأعداد الأولية في مصفوفة
function primes_nums(numbers) {
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num !== 1;
    };

    return numbers.filter(isPrime);

}
