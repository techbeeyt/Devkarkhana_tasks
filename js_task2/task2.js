/* 
1. Write a program that will convert integer decimal number to binary and vice versa
*/

convert_to_binary = () => {
    let int_dec = 122;
    let int_bin = "";

    while (int_dec > 0) {
        int_bin = (int_dec % 2) + int_bin;
        int_dec = parseInt(int_dec / 2);
    }

    console.log(122 + " to bindary: " + int_bin + "\n");
};

convert_to_binary();

/* 
2. Write a Program that will find out maximum number from any nested array.
Array example is [2,3,[5,6,[7,8],9]]

*/

let arr = [2, 3, [5, 6, [7, 8], 9]];

arr = arr.flat(Infinity);

let max = -Infinity;

arr.forEach((item) => {
    if (item > max) {
        max = item;
    }
});

console.log("Maximum number from the array is : " + max + "\n\n\n");

/* 

3. Write a program to calculate the frequency of words in a string.

*/

let str =
    "This is a string to calculate the frequency . It is easy to calculate the frequency of words";
let store_str = str;

str = str.replace(".", "");
str = str.replace("  ", " ");

str = str.split(" ");

let freq = {};

str.forEach((item) => {
    if (!freq[item]) {
        freq[item] = 0;
    }
    freq[item] += 1;
});
console.log(store_str);
console.log(freq);

console.log("#### The End ####");