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
