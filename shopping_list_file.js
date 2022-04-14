// create a program that reads each item off of a shopping list (located in shoppingList.txt) and prints it to the console.

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
})

const printData = (data) => {
  console.log(`Item: ${data}`)
};

myInterface.on('line', printData);
