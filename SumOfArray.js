function sumArray(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
function sumArray(numbers) {
    let total = 0; // Initialize total to 0
    for (let number of numbers) { // Iterate through each number in the array
        total += number; // Add the current number to total
    }
    return total; // Return the total sum
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const result = sumArray(array);
console.log(result);
