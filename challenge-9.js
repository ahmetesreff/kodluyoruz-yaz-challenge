const num = parseInt(prompt("Bir sayı girin:"));

if (isNaN(num)) {
    console.log("Lütfen geçerli bir sayı girin.");
} else {
    if (num % 2 === 0) {
        console.log(num + " çift bir sayıdır.");
    } else {
        console.log(num + " tek bir sayıdır.");
    }
}