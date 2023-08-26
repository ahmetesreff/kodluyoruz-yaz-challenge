const num1 = parseFloat(prompt("Birinci sayıyı girin:"));
const num2 = parseFloat(prompt("İkinci sayıyı girin:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Lütfen geçerli sayılar girin.");
} else {
    const sum = num1 + num2;
    console.log(`Girdiğiniz sayıların toplamı: ${sum}`);
}