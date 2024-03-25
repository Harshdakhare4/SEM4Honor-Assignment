function getUniqueNumbers(array) {
    return array.reduce((uniqueArray, currentNumber) => {
        if (!uniqueArray.includes(currentNumber)) {
            uniqueArray.push(currentNumber);
        }
        return uniqueArray;
    }, []);
}

let numbersArray = [1, 2, 3, 4, 5, 3, 3, 7, 7, 1, 2, 1, 6];

let uniqueNumbers = getUniqueNumbers(numbersArray);

console.log("Unique numbers:", uniqueNumbers);
