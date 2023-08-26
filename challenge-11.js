function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

const num = parseInt(prompt("Faktöriyelini istediğiniz sayıyı giriniz:"));

if (isNaN(num)) {
    console.log("Lütfen geçerli bir sayı girin.");
} else {
    const factorial = calculateFactorial(num);
    console.log(`${num}! = ${factorial}`);
}