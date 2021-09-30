// define fs module so we can work with the data.txt file
const fs = require('fs')
let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];
// 3. we clone our array to another value so the numbers array stay the same
change_numbers = [...numbers];

//2. using functions is better so we don't need to repeat the code
function Bubble_Sort_Asc(numbers)
{
change_numbers = numbers
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {   /* 
            1. the fix in code was in if condition of both sort methods because "i" won't move
            until j finishes its loop which is against the bubble sort algorithm rules
            */
        if(numbers[j] > numbers[j+1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}
return numbers;
}
//creating function for descending sort
function Bubble_Sort_Desc(numbers)
{
for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {   /* 
            1. the fix in code was in if condition of both sort methods because "i" won't move
            until "j" finishes its loop which is against the bubble sort algorithm rules
            */
        if(numbers[j] < numbers[j+1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}
return numbers;
}
console.log("Original numbers list: ", numbers)
// using the functions for ascending and descending
console.log("Numbers list After sorting: ", Bubble_Sort_Asc(change_numbers))
console.log("Numbers list After Desc sorting: ", Bubble_Sort_Desc(change_numbers))


/*
4.
1- read the data.tx file and split into array
2- do ascending bubble sort to the array
3- create and write the file to output.txt
*/
let text_convert = fs.readFileSync("data.txt","utf-8").split(',')
text_convert = Bubble_Sort_Asc(text_convert)
const data = fs.writeFileSync('output.txt', text_convert.join(','))