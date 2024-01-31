
// creation of variables to obtain the input (element on HTML) values.
var inputPlayer1 = document.getElementById('player1');
var inputPlayer2 = document.getElementById('player2');


/* code for function which will contain a block of codes that will be executed on demand.
The 'showresult' means that whenever the button (element on HTML) is clicked the code inside the function will be executed.
*/
function showResult(){

    /* below there's code to show 3 different results: Player 1 won, Player 2 won or Draw.
    First, a code which will fetch the values inserted in each input.
    Second, code to display a message if any of the 3 conditions are met.
    Because the input element in HTML already has type=number it wouldn't be necessary to have parseFloat.
    */

    // code will fetch values inserted in each input. 'parseFloat' will convert the string or input values into numerical values, so the if condition can be measured and display the message according to the result. 
    var scorePlayer1 = parseFloat(inputPlayer1.value);
    var scorePlayer2 = parseFloat(inputPlayer2.value);

    // code below will display a message if any of the 3 conditions are met.
    if(scorePlayer1 > scorePlayer2) {
    
        alert('Player 1 won');

    } else if(scorePlayer1 < scorePlayer2) {

        alert('Player 2 won');
    }

        // this way would also be correct: else { alert ('jest remis')}
        else if(scorePlayer1 == scorePlayer2) {

        alert('Jest remis');
    
    }
}
