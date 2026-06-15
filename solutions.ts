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

// solutions 4:
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};


// solutions 5:
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const toggleReadStatus = (inputObject: Book) => {
    const newObject = { ...inputObject, isRead: true };
    return newObject;
}


// solutions 6:
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// solutions 7:
const getIntersection = (array1: number[], array2: number[]): number[] => {
    const filteredArray = array1.filter(num => {
        return array2.includes(num);
    })
    return filteredArray;
}

