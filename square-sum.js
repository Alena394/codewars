/*DESCRIPTION:
Complete the square sum function so that it squares
each number passed into it and then sums the results together.*/

//SOLUTION:

function squareSum(numbers){
    let sum = 0;
    for(let a=0; a<numbers.length;a++){
    sum+=numbers[a]**2;
    };
 return sum;
};

