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

// solutions 2:
const reverseString = (inputString: string): string => {
    let reverseString = "";
    for (let index = (inputString.length - 1); index >= 0; index--) {
        reverseString = reverseString + inputString[index];
    }
    return reverseString;
}

// solutions 3:
type StringOrNumber = string | number;
const checkType = (inputValue: StringOrNumber): StringOrNumber => {
    if (typeof inputValue === "string") {
        return "String";
    } else {
        return "Number";
    }
}


