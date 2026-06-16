# Why is `any` Labeled a "Type Safety Hole"?

## Introduction

`any` হলো TypeScript-এর একটি বিশেষ ধরনের type।

---

## Body Paragraph

মনে করি TypeScript-এ কোড লেখার সময় কোনো variable-এর type দিলাম `any`। এখন TypeScript সেই variable-এর value-কে মনে করবে যেকোনো ধরনের type হতে পারে।

আবার ধরি, সেই variable-এর value `string` type-এর, কিন্তু সেখানে যদি `number` type-এ ব্যবহৃত কোনো method ব্যবহার করি তাহলে TypeScript কোনো error দিবে না।

আবার সেই variable-এর value `number` type-এর হয়, কিন্তু সেখানে যদি `string` type-এ ব্যবহৃত কোনো method ব্যবহার করি তাহলেও TypeScript কোনো error দিবে না।

এভাবে যদি কেউ সেই variable-এ ভুল method ব্যবহার করে ফেলে, তাহলে TypeScript error দিবে না। কিন্তু আমরা জানি TypeScript একটি উন্নত মানের type-safe programming language। যার বিশেষত্ব হলো type safety প্রদান করা। কিন্তু `any` type আমাদের সেই type safety দেয় না।

### Example 1

```typescript
const userId: any = "shihab0917";

userId.toFixed();
```

> এখানে দেখে বোঝা যাচ্ছে `userId`-তে value হিসেবে একটি `string` আছে। আমরা জানি `string` value-এর উপর `toFixed()` method ব্যবহার করা যায় না। কিন্তু TypeScript কোনো error দিবে না। এখানে TypeScript-এর type safety loss হচ্ছে।

### Example 2

```typescript
const userId: any = 526852685;

userId.toUpperCase();
```

> এখানে দেখে বোঝা যাচ্ছে `userId`-তে value হিসেবে একটি `number` আছে। আমরা জানি `number` value-এর উপর `toUpperCase()` method ব্যবহার করা যায় না। কিন্তু TypeScript কোনো error দিবে না। এখানেও TypeScript-এর type safety loss হচ্ছে।

---

## Conclusion

তাহলে দেখা যাচ্ছে, `any` type ব্যবহার করলে type safety থাকে না। TypeScript compiler variable-এর প্রকৃত type যাচাই করতে পারে না এবং ভুল method ব্যবহারের ক্ষেত্রেও কোনো warning বা error দেখায় না।

এই কারণেই `any` type-কে **"Type Safety Hole"** বলা হয়।




# why is unknown the safer choice for handling unpredictable data?
## Introduction
`unknown` হচ্ছে TypeScript এর একটি বিশেষ ধরনের type।

## Body Paragraph
`any` use করলে যে আমাদের type safety break করে তা `unknown` use করলে অনেকটাই safe থাকা যায়। 
### Example
```typescript
const userId: unknown = "shihab0952";
userId.toUpperCase(); 

// এখানে TypeScript type error দেখাবে। কারণ: userId এর type unknown use করায় TypeScript বুঝে উঠতে পারে না যে ভ্যালু কি আছে বা আসবে। তাই TypeScript আগে কনফার্ম হতে বলে যে আগে তুমি কনফার্ম করো যে তুমি string তারপর মেথড ব্যবহার করতে পারবে। তাই type হিসেবে unknown ব্যবহার করলে অবশ্যই আগে type check করতে হবে। তারপর মেথড ব্যবহার করা যাবে। যেমন:

const checkUserId = (inputValue: unknown) => {
    if(typeof inputvalue === "string") {
        return userId.toUpperCase(); 
        // এবার আর ইরর দিবে না। কারণ TypeScript এখন আগে কনফার্ম হয়ে নিচ্ছে, যদি ভ্যালু string হয় তবেই মেথড আকশনে যাবে।
    } else {
        return ("userId is not a string");
    }
}
```
## Conclusion
দেখা যাচ্ছে `unknown` ব্যবহার করলে অজানা ডাটা নিয়ন্ত্রণ করা অনেকটাই সহজ। তাই বলা হয়: `unknown` is the safer choice for handling unpredictable data.



# Explain the concept of type narrowing.
Type narrowing মানে হলো অজানা type এর ডাটা handle করা। অর্থ্যৎ অজানা type এর ডাটা ব্যবহার আগে তার type নির্ধারণ করা। যার ফলে ইরর হওয়ার কোনো সুযোগ থাকে। 

এভাবেও বলা যায়, আমি কোথাও থেকে `unknown` type এর ডাটা পাচ্ছি। এখন এখানে যদি `toLowerCase()` মেথড ব্যবহার করতে চাই তাহলে তার শর্ত হলো আগে কনফার্ম করতে হবে, যে ডাটা পাচ্ছি তা `string` কিনা? যদি `string` হয় তবেই `toLowerCase()` মেথড রান করাবো নাহলে অন্য কিছু। উদাহরণ দিলে বিষয়টি ক্লিয়ার হওয়া যায়:
```typescript
const userId: unknown = "shihab0952";
const checkUserId = (inputValue: unknown) => {
    if(typeof inputvalue === "string") {
        return inputValue.toLowerCase();
    } else if (typeof inputValue === "number") {
        return inputValue.toString().toLowerCase();
    } else {
        return console.log(`This user don't have user ID. Please register carefully!`);
    }
}
```
> এখানে দেখা যাচ্ছে inputValue শুধুমাত্র `string` হলেই `toLowerCase()` মেথড রান হবে। আর যদি `number` হয় তাহলে `toString().toLowerCase()` মেথড রান হবে। এছাড়া অন্য যেকোনো কিছু `undefined, null, boolean` যায় আসুক না কেনো return হবে `This user don't have user ID. Please register carefully!` । এটাকেই বলা হয় type narrowing...

## Conclusion
Type narrowing হচ্ছে এমনটি একটি মাধ্যম যার মাধ্যমে `type` কে ছোট ছোট ভাগে ভাগ করে মেথড চালানো বা ব্যবহার করা। যাতে ইরর না আসে।