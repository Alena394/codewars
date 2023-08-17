/*DESCRIPTION:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

//SOLUTION:
function getAverage(marks){
    let sumMarks = 0;
    for(let a=0; a<marks.length; a++){
      sumMarks+=marks[a];
    };
    return Math.floor(sumMarks/marks.length);
  }