// solutions 1:
type ArrayOfNumber = number[];
const filterEvenNumbers = (inputArray: ArrayOfNumber): ArrayOfNumber => {
    const evenNumbers = inputArray.filter(num => {
        if (num % 2 === 0) {
            return num;
        }
    })
    return evenNumbers;
}

