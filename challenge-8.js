const num = parseFloat(prompt("Bir sayı girin:"));

if (isNaN(num)) {
    console.log("Lütfen geçerli bir sayı girin.");
} else {
    const square = num * num;
    console.log(`${num}'nin karesi: ${square}`);
}