function isPrime(n) {
    // n is a positive integer
    // returns true if n is prime
    // otherwise returns false
    if (n < 2) {
        return false;
    }
    const m = Math.sqrt(n);
    for (let i = 2; i <= m; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}