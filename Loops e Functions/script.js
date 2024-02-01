
/*
This means that whenever my code on HTML uses the function called countNumber, it will substitute the variable 
maxNumber wherever it's being used in the function for "500" and run the code which is inside "{}"
*/
function countNumber(maxNumber){

    /* For Loop example:
    for(i=0;i<100;i++){

        console.log(i);
    }
    */

    var i = 1

    while (i<= maxNumber) {

        console.log(i);
        i++;
    }


}