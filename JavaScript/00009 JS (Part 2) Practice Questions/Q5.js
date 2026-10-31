//Qs5. Write a program to find the largest of 3 numbers.

let a = 5;
let b = 0;
let c = 50;


if (a > b){
    if(a > c){
        console.log(a,"is largest number");
    }else {
        console.log(c, "is larget number");
    }
} else {
    if (b > c){
        console.log(b ,"is largest number.");
    } else {
        console.log(c, "is largest number");
    }
}