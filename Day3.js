// prompt asks user to enter a numebr
let number=prompt("enter number")
// Number converts a collection of strings to number
number=Number(number)
// make a function to check if a number is odd or even
function checkoddeven(number){
    if(number%2==0){
        console.log(`${number} is even`);
    }else{
        console.log(`${number} is odd`);
    }
}
checkoddeven(number)
