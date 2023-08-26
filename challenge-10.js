function findMaxNumber(numbers) {
    
    let max = numbers[0]; 
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    
    return max;
}

const numberArray = [4, 1241, 236, 12, 89, 67, 143, 84, 429, 521]; 

const maxNumber = findMaxNumber(numberArray);

console.log(maxNumber);