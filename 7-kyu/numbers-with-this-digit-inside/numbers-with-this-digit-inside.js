function numbersWithDigitInside(x, d) {
    let count = 0;
    let sum = 0;
    let product = 1;
    let found = false;
​
    for (let i = 1; i <= x; i++) {
        if (i.toString().includes(d.toString())) {
            count++;
            sum += i;
            product *= i;
            found = true;
        }
    }
​
    if (!found) {
        product = 0;
    }
​
    return [count, sum, product];
}
​