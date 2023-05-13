num_gpa = 4.1;
letter_gpa = null;

function getGPALetter(grade_code)
{
    // switch method is used to check if the condition is true
    switch(true)
    {
        // case method is used to check if the condition is true
        case (grade_code == 4.3):
            return "A+";
        case (grade_code > 4):
            return "A";
        case (grade_code > 3.7):
            return "A-";
    }
}

code = "U";

// create function to determine student type by code.
// returnVal is a variable that will be returned by the function
function determineStudentType(code)
{
    let returnVal = null;

    switch(code)
    {
        // break is used to stop the switch statement
        // once break is reached, the switch statement will stop
        case "U":
            returnVal = "UnderGrad";
            break;
        case "G":
            returnVal = "Grad";
            break;
        default:
            returnVal = "Unknown";
    }

    return returnVal;
}

console.log(determineStudentType("U"));