// format currency
const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    //option for minimum number of digits after the decimal point.
    minimumFractionDigits: 2
});

// set number of diners/customers
let numofDiners = 8;

// set price of meal before taxes
let comboMealPrice = 800;

// set sales tax rates (gst = federal, qst = provincial) as percentages (constants)
const taxes = {
    gst: 0.05,
    qst: 0.09975
}

// set tip amounts as percentages (diner/customer satisfaction)
const tipAmount = {
    a: 0.2,
    b: 0.15,
    c: 0.1,
    d: 0
};

// validate number of diners (must be greater than 0)
function checkDiners(numofDiners) {
    if ((Number.isInteger(numofDiners) == true) && (numofDiners > 0) == true) {
    return true;
}
else { return false;
}
}

if (checkDiners(numofDiners) == false) {
    console.log(numofDiners + " is not a valid number of diners. Please enter a positive number without decimals.");
}

//validate the price of the meal (must be a positive number; if missing decimals, it will be formatted to decimal later)
function checkMealPrice(comboMealPrice) {
    if (comboMealPrice > 0) {
    return true;
}
else { return false;
}
}

// validate the meal price and format it with decimal places (using formatter (currency) method above)
if (checkMealPrice(comboMealPrice) == true) {
    console.log("Total price before tax = " + formatter.format(comboMealPrice));
}
else {
    console.log("$" + comboMealPrice + " is not a valid value. Please enter a positive number.");
}


// tip percentage determined by diner/customer satisfaction
let chosenTipAmount = tipAmount.a * 100;
if (checkDiners(numofDiners) == true) {
    console.log("Tip percentage = " + chosenTipAmount + "%");
}
else {
    console.log("Could not calculate tip percentage. " + numofDiners + " is not a valid number of diners. Please enter a positive number without decimals.");
}

// calculate provincial and federal taxes
let fedTax = comboMealPrice * taxes.gst;
let provTax = comboMealPrice * taxes.qst;

if (checkMealPrice(comboMealPrice) == true) {
    console.log("GST = " + formatter.format(fedTax));
    console.log("QST = " + formatter.format(provTax));
}
else {
    console.log("Could not calculate sales tax. " + "$" + comboMealPrice + " is not a valid value. Please enter a positive number.");
}

// calculate total with taxes
let totalWithTaxes = comboMealPrice + fedTax + provTax;

if (checkMealPrice(comboMealPrice) == true) {
    console.log("Total with tax = " + formatter.format(totalWithTaxes));
}
else {
    console.log("Could not calculate total with tax. " + "$" + comboMealPrice + " is not a valid value. Please enter a positive number.");
}

// calculate total tip
let totalWithTip = totalWithTaxes * tipAmount.a;

if ((checkMealPrice(comboMealPrice) == true) && (checkDiners(numofDiners) == true)) {
    console.log("Total tip = " + formatter.format(totalWithTip));
}
else {
    console.log("Could not calculate total with tip. Either total meal price or number of diners are not valid values. Please enter a positive number with decimal for meal price, and/or positive integer for diners/customers.");
}

// calculate total amount to pay per diner/customer
let totalPerDiner = (totalWithTaxes + totalWithTip) / numofDiners;
if ((checkMealPrice(comboMealPrice) == true) && (checkDiners(numofDiners) == true)) {
     console.log("Total amount to pay per person = " + formatter.format(totalPerDiner));
 }
else {
    console.log("Could not calculate total per diner/customer. Either total meal price or number of diners are not valid values. Please enter a positive number with decimal for meal price, and/or positive integer for diners/customers.");
}