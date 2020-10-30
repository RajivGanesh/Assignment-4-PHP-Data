//  Print button
window.onload = function() {
    document.getElementById("printbtn").onclick = function () {
        window.print();
    }
}
//
//  FORM VALIDATION
//
    //  Conditions
const letters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;
var errorFlag = false;
var innerStop = false;
    // General form selectors
const form = document.getElementById('form');
const school_name = document.getElementById('school-name');
    //  Child section selectors
const childSurname = document.getElementById('child-surname');
const childFirstName= document.getElementById('child-firstname');
const childGenderM = document.getElementById('child-male');
const childGenderF = document.getElementById('child-female');
const childDoB = document.getElementById('child-dob');
const childPin = document.getElementById('child-pin');
const childAddress = document.getElementById('child-address');
const childImY = document.getElementById('immunized-y');
const childImN = document.getElementById('immunized-n');
const childNationality = document.getElementById('child-nationality');
    //  Family section selectors
const pgRelationship = document.getElementById('fam1-relation');
const pgName = document.getElementById('fam1-name');
const pgContact = document.getElementById('fam1-contact');
const pgAddress = document.getElementById('fam1-address');
    //  Document upload section selectors
const uBill = document.getElementById('file-bill');
const birthCert = document.getElementById('file-birthcert');
const immuCard = document.getElementById('file-immucard');
    //  Declaration section selectors
const decAppName = document.getElementById('d-app-name');
const decRelChild = document.getElementById('d-rel-child');
const decChildName = document.getElementById('d-child-name');
const decAgree = document.getElementById('declaration-agree');
    //
    //  Event Listener
    //
form.addEventListener('submit', (e) => {
    errorFlag = false;
    e.preventDefault();

    while (errorFlag == false) {
        //  Child information section
        validateSchoolName();
        validateChildSname();
        validateChildFname();
        validateChildGender();
        validateChildDoB();
        validateChildPin();
        validateChildAddress();
        validateChildImmunization();
        validateChildNationality();
        //  Family information section
        validateRelationship();
        validateParentName();
        validateParentContact();
        validateParentAddress();
        //  Document section
        validateUbill();
        validateBcert();
        validateImmu();
        //  Declaration section
        validateApplicant();
        validateRelationship();
        validateChildName();
        validateDeclaration();
        //  while loop stop
        if (innerStop == true)
        {
            errorFlag = true;
        }
    }
    //  Form validation alert
    if (innerStop == true && errorFlag == true) {
        alert('Form submitted');
    } else {
        alert('There was an error submitting the form, check the highlighted fields for errors, and re-submit the form.');
    }
});
    //
    //  School Name Validation
    //
function validateSchoolName() {
    const school_nameV = school_name.value.trim();

    if (school_nameV == '') {
        schoolNameError(school_name, 'You must enter the school you are applying for.');
    } else if (!school_nameV.match(letters)) {
        schoolNameError(school_name, 'Only alphabetic characters A-Z accepted.');
    } else {
        schoolNameValid(school_name, '');
    }

    function schoolNameError(input, message) {
        var inputBox = document.getElementById('school-name');
        var small = document.getElementById('school-name-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function schoolNameValid(input, message) {
        const inputBox = document.getElementById('school-name');
        const small = document.getElementById('school-name-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Child information section
    //
    //
    //  Child surname validation
    //
function validateChildSname() {
    const childSnameV = childSurname.value.trim();

    if (childSnameV == '') {
        childSurnameError(childSurname, 'You must enter the legal surname of the child');
    } else if (!childSnameV.match(letters)) {
        childSurnameError(childSurname, 'Only alphabetic characters A-Z accepted.');
    } else {
        childSurnameValid(childSurname, '')
    }

    function childSurnameError(input, message) {
        var inputBox = document.getElementById('child-surname');
        var small = document.getElementById('child-sname-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function childSurnameValid(input, message) {
        var inputBox = document.getElementById('child-surname');
        var small = document.getElementById('child-sname-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Child first name validation
    //
function validateChildFname() {
    const childFnameV = childFirstName.value.trim();

    if (childFnameV == '') {
        childFirstNameError(childFirstName, 'You must enter the legal first name of the child');
    } else if (!childFnameV.match(letters)) {
        childFirstNameError(childFirstName, 'Only alphabetic characters A-Z accepted.');
    } else {
        childFirstNameValid(childFirstName, '')
    }

    function childFirstNameError(input, message) {
        var inputBox = document.getElementById('child-firstname');
        var small = document.getElementById('child-fname-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function childFirstNameValid(input, message) {
        var inputBox = document.getElementById('child-firstname');
        var small = document.getElementById('child-fname-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Child Gender Validation
    //
function validateChildGender() {
    var small = document.getElementById('child-gender-error');

    var m = childGenderM.value;
    var f = childGenderF.value;
    var selection = '';

    if (childGenderM.checked == true) {
        selection = m;
        small.innerText = '';
        errorFlag = false;
    } else if (childGenderF.checked == true) {
        selection = f;
        small.innerText = '';
        errorFlag = false;
    } else {
        small.innerText = 'You must state the gender of the child.';
        errorFlag = true;
    }
}
    //
    //  Child date of birth validation
    //
function validateChildDoB() {
    var childDoBv = childDoB.value;

    if (childDoBv == '') {
        childDoBerror(childDoB, 'You must enter the date of birth of the child.');
    } else {
        childDoBvalid(childDoBv, '');
    }

    function childDoBerror(input, message) {
        var inputBox = document.getElementById('child-dob');
        var small = document.getElementById('child-dob-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }

    function childDoBvalid(input, message) {
        var dateEntered = new Date(childDoBv);
        var formattedDate = (dateEntered.getDate() + 1) + "-" + (dateEntered.getMonth() + 1) + "-" +  dateEntered.getFullYear();
        var inputBox = document.getElementById('child-dob');
        var small = document.getElementById('child-dob-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
        console.log(formattedDate);
    }
}
    //
    //  Child birth certificate pin validation
    //
function validateChildPin() {
    const childPinV = childPin.value.trim();

    if (childPinV == '') {
        childPinError(childPin, 'You must enter the birth certificate pin of the child.');
    } else if (!childPinV.match(numbers)) {
        childPinError(childPin, 'Only numeric characters 0-9 accepted.');
    } else {
        childPinValid(childPin, '')
    }

    function childPinError(input, message) {
        var inputBox = document.getElementById('child-pin');
        var small = document.getElementById('child-pin-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function childPinValid(input, message) {
        var inputBox = document.getElementById('child-pin');
        var small = document.getElementById('child-pin-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Child address validation
    //
function validateChildAddress() {
    const childAddressV = childAddress.value.trim();

    if (childAddressV == '') {
        childAddressError(childAddress, 'You must enter the household address of the child.');
    } else {
        childAddressValid(childAddress, '')
    }

    function childAddressError(input, message) {
        var inputBox = document.getElementById('child-address');
        var small = document.getElementById('child-address-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function childAddressValid(input, message) {
        var inputBox = document.getElementById('child-address');
        var small = document.getElementById('child-address-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Child immunization validation
    //
function validateChildImmunization() {
    var small = document.getElementById('child-immu-error');

    var n = childImN.value;
    var y = childImY.value;
    var selection = '';

    if (childImN.checked == true) {
        selection = n;
        small.innerText = '';
        errorFlag = false;
    } else if (childImY.checked == true) {
        selection = y;
        small.innerText = '';
        errorFlag = false;
    } else {
        small.innerText = 'You must state the immunization status of the child.';
        errorFlag = true;
    }
}
    //
    //  Child nationality validation
    //
function validateChildNationality() {
    const childNationalityV = childNationality.value.trim();

    if (childNationalityV == '') {
        childNationalityError(childNationality, 'You must enter the legal nationality of the child');
    } else if (!childNationalityV.match(letters)) {
        childNationalityError(childNationality, 'Only alphabetic characters A-Z accepted.');
    } else {
        childNationalityValid(childNationality, '')
    }

    function childNationalityError(input, message) {
        var inputBox = document.getElementById('child-nationality');
        var small = document.getElementById('child-nationality-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function childNationalityValid(input, message) {
        var inputBox = document.getElementById('child-nationality');
        var small = document.getElementById('child-nationality-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Family information section
    //
    //
    //  Relationship to child validation
    //
function validateRelationship() {
    const pgRelationshipV = pgRelationship.value.trim();

    if (pgRelationshipV == '') {
        pgRelationshipError(pgRelationship, 'You must state your relation to the child.');
    } else if (!pgRelationshipV.match(letters)) {
        pgRelationshipError(pgRelationship, 'Only alphabetic characters A-Z accepted.');
    } else {
        pgRelationshipValid(pgRelationship, '')
    }

    function pgRelationshipError(input, message) {
        var inputBox = document.getElementById('fam1-relation');
        var small = document.getElementById('fam1-relation-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function pgRelationshipValid(input, message) {
        var inputBox = document.getElementById('fam1-relation');
        var small = document.getElementById('fam1-relation-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Parent name validation
    //
function validateParentName() {
    const pgNameV = pgName.value.trim();

    if (pgNameV == '') {
        pgNameError(pgName, 'You must enter your full name.');
    } else if (!pgNameV.match(letters)) {
        pgNameError(pgName, 'Only alphabetic characters A-Z accepted.');
    } else {
        pgNameValid(pgName, '')
    }

    function pgNameError(input, message) {
        var inputBox = document.getElementById('fam1-name');
        var small = document.getElementById('fam1-name-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function pgNameValid(input, message) {
        var inputBox = document.getElementById('fam1-name');
        var small = document.getElementById('fam1-name-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Parent contact validation
    //
function validateParentContact() {
    const pgContactV = pgContact.value.trim();

    if (pgContactV == '') {
        pgContactError(pgContact, 'You must enter a valid contact number.');
    } else if (!pgContactV.match(numbers)) {
        pgContactError(pgContact, 'Only numeric characters 0-9 accepted.');
    } else {
        pgContactValid(pgContact, '')
    }

    function pgContactError(input, message) {
        var inputBox = document.getElementById('fam1-contact');
        var small = document.getElementById('fam1-contact-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function pgContactValid(input, message) {
        var inputBox = document.getElementById('fam1-contact');
        var small = document.getElementById('fam1-contact-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Parent address validation
    //
function validateParentAddress() {
    const pgAddressV = pgAddress.value.trim();

    if (pgAddressV == '') {
        pgAddressError(pgAddress, 'You must enter your valid household address.');
    } else {
        pgAddressValid(pgAddress, '')
    }

    function pgAddressError(input, message) {
        var inputBox = document.getElementById('fam1-address');
        var small = document.getElementById('fam1-address-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function pgAddressValid(input, message) {
        var inputBox = document.getElementById('fam1-address');
        var small = document.getElementById('fam1-address-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Document upload section
    //
    //
    //  Utility bill validation
    //
function validateUbill() {
    const uBillV = uBill.value.trim();

    if (uBillV == '') {
        uBillError(uBill, 'You must upload a recent utility bill');
    } else {
        uBillValid(uBill, '')
    }

    function uBillError(input, message) {
        var small = document.getElementById('file-bill-error');

        small.innerText = message;
        errorFlag = true;
    }
    function uBillValid(input, message) {
        var small = document.getElementById('file-bill-error');

        small.innerText = message;
        errorFlag = false;
    }
}
    //
    //  Birth certificate validation
    //
function validateBcert() {
    const birthCertV = birthCert.value.trim();

    if (birthCertV == '') {
        birthCertError(birthCert, 'You must upload the birth certificate of the child.');
    } else {
        birthCertValid(birthCert, '')
    }

    function birthCertError(input, message) {
        var small = document.getElementById('file-birthcert-error');

        small.innerText = message;
        errorFlag = true;
    }
    function birthCertValid(input, message) {
        var small = document.getElementById('file-birthcert-error');

        small.innerText = message;
        errorFlag = false;
    }
}
    //
    //  Immunization card validation
    //
function validateImmu() {
    const immuCardV = immuCard.value.trim();

    if (immuCardV == '') {
        immuCardError(immuCard, 'You must upload the immunization card of the child.');
    } else {
        immuCardValid(immuCard, '')
    }

    function immuCardError(input, message) {
        var small = document.getElementById('file-immucard-error');

        small.innerText = message;
        errorFlag = true;
    }
    function immuCardValid(input, message) {
        var small = document.getElementById('file-immucard-error');

        small.innerText = message;
        errorFlag = false;
    }
}
    //
    //  Declaration section
    //
    //
    //  Applicant validation
    //
function validateApplicant() {
    const decAppNameV = decAppName.value.trim();

    if (decAppNameV == '') {
        decAppNameError(decAppName, 'You must state your full name.');
    } else if (!decAppNameV.match(letters)) {
        decAppNameError(decAppName, 'Only alphabetic characters A-Z accepted.');
    } else {
        decAppNameValid(decAppName, '')
    }

    function decAppNameError(input, message) {
        var inputBox = document.getElementById('d-app-name');
        var small = document.getElementById('d-app-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function decAppNameValid(input, message) {
        var inputBox = document.getElementById('d-app-name');
        var small = document.getElementById('d-app-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Applicant relation validation
    //
function validateRelationship() {
    const decRelChildV = decRelChild.value.trim();

    if (decRelChildV == '') {
        decRelChildError(decRelChild, 'You must state your relation to the child.');
    } else if (!decRelChildV.match(letters)) {
        decRelChildError(decRelChild, 'Only alphabetic characters A-Z accepted.');
    } else {
        decRelChildValid(decRelChild, '')
    }

    function decRelChildError(input, message) {
        var inputBox = document.getElementById('d-rel-child');
        var small = document.getElementById('d-rel-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function decRelChildValid(input, message) {
        var inputBox = document.getElementById('d-rel-child');
        var small = document.getElementById('d-rel-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Child name validation
    //
function validateChildName() {
    const decChildNameV = decChildName.value.trim();

    if (decChildNameV == '') {
        decChildNameError(decChildName, 'You must state the full name of the child.');
    } else if (!decChildNameV.match(letters)) {
        decChildNameError(decChildName, 'Only alphabetic characters A-Z accepted.');
    } else {
        decChildNameValid(decChildName, '')
    }

    function decChildNameError(input, message) {
        var inputBox = document.getElementById('d-child-name');
        var small = document.getElementById('d-child-error');

        small.innerText = message;
        inputBox.className = 'input-box-error';
        errorFlag = true;
    }
    function decChildNameValid(input, message) {
        var inputBox = document.getElementById('d-child-name');
        var small = document.getElementById('d-child-error');

        small.innerText = message;
        inputBox.className = 'input-box-valid';
        errorFlag = false;
    }
}
    //
    //  Agreement validation
    //
function validateDeclaration() {
    var small = document.getElementById('d-agree');
    var a = decAgree.value;
    var selection = '';

    if (decAgree.checked == true) {
        selection = a;
        small.innerText = '';
        errorFlag = false;
        innerStop = true;
    } else {
        small.innerText = 'You must click the box to agree to the terms.';
        errorFlag = true;
    }
}
