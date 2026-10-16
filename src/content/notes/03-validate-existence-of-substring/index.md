---
title: "Validate the existence of a substring in ES5 and older"
tags: ["javascript"]
date: "Mar 4 2024"
---
The `String.prototype.includes()` method was introduced in the ES6 o ES2015, and  performs a search to determine whether a given string may be found within this string, returning true or false as appropriate.

But we can achieve the same result in older versions of JS using the `String.prototype.indexOf()` method: 

```javascript
var myString = "Hello, World!";
var substring = "World";

if (myString.indexOf(substring) !== -1) {
    console.log("Substring found!");
    return true;
} else {
    console.log("Substring not found.");
    return false;
}
```