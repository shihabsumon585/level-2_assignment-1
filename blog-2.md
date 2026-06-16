# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Introduction
`Pick` and `Omit` TypeScript এ দুটি দারুন ফিচার। যেগুলো Utility types অন্তর্ভুক্ত।

## Body Paragraph
আমরা যখন OOP এ গঠনমূলকভাবে কোড করি তখন আমাদের মূল উদ্দেশ্যই হচ্ছে কোড রিপিট না করা বা হওয়া। এই `Pick` and `Omit` সেই কাজটাই করে। কোড রিপিট হওয়া থেকে বাচাই। মনে করি, কোন প্যারেন্ট ক্লাসে `User` নামে একটি `interface` আছে। যেখানে `id, name, class, email, address, password` প্রোপার্টি আছে। `Student` নামের child ক্লাসে `User` এর কিছু তথ্য `name, class` দরকার। এখন `Pick` মেথড ব্যবহার করে শুধুমাত্র `name, class` প্রোপার্টি নেয়া সম্ভব। অপরদিকে `StudentInformation` নামের ক্লাসে `password` বাদে সবকিছুই দরকার। এখানে `Omit` ব্যবহার করে সহজেই `password` বাদ দিয়ে বাকি তথ্যগুলোকে আক্সেস করা সম্ভব।
```typescript
class Person {
    id: number;
    name: string;
    className: string;
    email: string;
    address: string;
    password: string;

    constructor(id: number, name: string, className: string, email: string, address: string, password: string) {
        this.id = id;
        this.name = name;
        this.className = className;
        this.email = email;
        this.address = address;
        this.password = password;
    }
}

type StudentProfile = Omit<Person, 'password'>; // এখানে Omit ব্যবহার করে password বাদে অবশিষ্ট প্রোপার্টি গুলোকে নিয়ে একটা নতুন type তৈরি করা গেলো।

class Student extends Person {
    getProfile(): StudentProfile {
        return {
            id: this.id,
            name: this.name,
            className: this.className,
            email: this.email,
            address: this.address
        };
    }
}

type StudentAttendanceInfo = Pick<Person, 'id' | 'name' | 'className'>; // Pick এর ব্যবহার করে id, name, className নেয়া গেলো।

const generateAttendanceSheet = (student: StudentAttendanceInfo) => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Class: ${student.className}`);
}
```

## Conclusion
`Pick, Omit` ব্যবহার করে খুব সহজেই কোড রিপিট করা বাচানো যায় এবং ফাইলের আকার কম করে।