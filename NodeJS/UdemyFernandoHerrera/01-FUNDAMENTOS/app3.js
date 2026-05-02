const fs = require("fs");

const content = fs.readFileSync("./README.md", "utf-8");

const wordCount = content.split(" ");
const reactWordCount = content.match(/react/gi ?? []);

console.log('Palabras:', wordCount.length);
console.log('Palabras React:', reactWordCount.length);
