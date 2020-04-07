//   edit2:
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

///
var array =[1,2,3,4];
var sum=0;
for(let i=0;i<array.length;i++){
    sum = sum + array[i];
}
console.log(`total sum of numbers present in array = ${sum}`);
