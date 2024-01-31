// this variable will fetch the input (element on HTML) value inserted.
var weekDay = document.getElementById('inputWeekDay');


// this function will have the codes to exhibit the week day in full in accordance to the number inserted by the user.
function showWeekDay () {

    //this code will convert the value of the variable above as a string and return an integer or NaN.
    var dayOfWeek = parseInt(weekDay.value)

        switch (dayOfWeek) {

            /* these codes mean that in case the value/number of the variable inside of condition switch
            are 1, 2, 3, etc. display the week day in full.
            */
            case 1:
                alert ('monday');
                break

            case 2:
                alert ('tuesday');
                break

            case 3:
                alert ('wednesday');
                break

            case 4:
                alert ('thursday');
                break

            case 5:
                alert ('friday');
                break
        
            case 6:
                alert ('saturday');
                break
                    
            case 7:
                alert ('sunday');
                break

            // this code is in case the number inserted by the user does not correspond to any of the above conditional cases.
            default:
                alert ('Week day invalid!');

        }

}