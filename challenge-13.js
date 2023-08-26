function isPrime(number) {
    if (number <= 1) {
        return false;
    } else if (number <= 3) {
        return true;
    }
    
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    
    return true;
};

const num = parseInt(prompt("Bir sayı girin:"));

if (isNaN(num)) {
    console.log("Lütfen geçerli bir sayı girin.");
} else {
    if (isPrime(num)) {
        console.log(num + " asal bir sayıdır.");
    } else {
        console.log(num + " asal bir sayı değildir.");
    }
};