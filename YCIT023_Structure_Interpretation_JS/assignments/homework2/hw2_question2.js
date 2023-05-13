// given a list of letter grades for a particular student, determine their GPA
// use functions and a lookup table
// each course = 4.00 credits. If a student fails a course ("F"), they get 0.00 credits for that course
// total quality points = sum of (grade point value * credits)
// Student = James Doe

const credits = 4.00;

gpaLookup = {

    'A+': 4.3,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C': 2.0,
    'F': 0 
}

gradesByCourse = ["A+", "B+", "A", "F"]

function determineGPA() {  
    // get total quality points from gradesByCourse array
    function getPoints() {
        let TotalQualityPoints = 0;
        for (let i = 0; i < gradesByCourse.length; i++) {
            TotalQualityPoints += (gpaLookup[gradesByCourse[i]]) * credits;
        }  
        return TotalQualityPoints;
    }
    //console.log("Total quality points = ", getPoints());

    // get total credits
    function getCredits() {
         for (let i = 0; i < gradesByCourse.length; i++) {
            //console.log(gpaLookup[gradesByCourse[i]]);
            return totalCredits = (gradesByCourse.length) * credits;
        }
    }
    //console.log("Total credits = ", getCredits());

    // get GPA by dividing total quality points by total credits
    function getGPA() {
        return (getPoints() / getCredits()).toFixed(2);
    }
    console.log("James Doe's GPA for the term = ", getGPA());     
}

determineGPA();
