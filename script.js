document.getElementById('myForm').addEventListener('submit', function(e){
    e.preventDefault();// Prevents the form from submitting immediately
    // alert("ninja");

    const firstName = document.getElementById("firstname").value;
    const middleName = document.getElementById("middlename").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("phoneNbr").value;
    const City = document.getElementById("city").value;
    const street = document.getElementById("street").value;
    const zipCode = document.getElementById("zipCode").value;
    const message = document.getElementById("message").value;
    const age = parseInt(document.getElementById("age").value);

    document.getElementById("firstname").style.backgroundColor = "";
    document.getElementById("middlename").style.backgroundColor = "";
    document.getElementById("lastname").style.backgroundColor = "";
    document.getElementById("city").style.backgroundColor = "";
    document.getElementById("street").style.backgroundColor = "";
    document.getElementById("message").style.backgroundColor = "";
    document.getElementById("phoneNbr").style.backgroundColor = "";
    document.getElementById("email").style.backgroundColor = "";
    document.getElementById("zipCode").style.backgroundColor = "";
    document.getElementById("age").style.backgroundColor = "";

    if (firstName === '') {
        alert("First name is required.");
        document.getElementById("firstname").style.backgroundColor = "red";
        return false;
    } else if (!/^(?=.*[a-zA-Z])[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(firstName)) {
        alert("First name must contain only letters and spaces (no spaces at the end of the name).");
        document.getElementById("firstname").style.backgroundColor = "red";
        return false;
    } else if (middleName === '') {
        alert("Middle name is required.");
        document.getElementById("middlename").style.backgroundColor = "red";
        return false;
    } else if (!/^(?=.*[a-zA-Z])[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(middleName)) {
        alert("Middle name must contain only letters and spaces (no spaces at the end of the name).");
        document.getElementById("middlename").style.backgroundColor = "red";
        return false;
    } else if (lastName === '') {
        alert("Last name is required.");
        document.getElementById("lastname").style.backgroundColor = "red";
        return false;
    } else if (!/^(?=.*[a-zA-Z])[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(lastName)) {
        alert("Last name must contain only letters and spaces (no spaces at the end of the name).");
        document.getElementById("lastname").style.backgroundColor = "red";
        return false;
    } else if (City === '') {
        alert("City is required.");
        document.getElementById("city").style.backgroundColor = "red";
        return false;
    } else if (street === '') {
        alert("Street is required.");
        document.getElementById("street").style.backgroundColor = "red";
        return false;
    } else if (/\d/.test(street)) {
        alert("Street name cannot contain numbers.");
        document.getElementById("street").style.backgroundColor = "red";
        return false;
    } else if (message === '') {
        alert("Message is required.");
        document.getElementById("message").style.backgroundColor = "red";
        return false;
    } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-][0-9]{3}[-][0-9]{4}$/.test(number)) {
        document.getElementById("phoneNbr").style.backgroundColor = "red";
        alert("Invalid phone number format. Expected format: XXX-XXX-XXXX.");
        return false;
    } else if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        alert("Invalid email format.");
        document.getElementById("email").style.backgroundColor = "red";
        return false;
    } else if (!/^.....$/.test(zipCode)) {
        alert("Zip code must be exactly 5 characters.");
        document.getElementById("zipCode").style.backgroundColor = "red";
        return false;
    } else if (age < 18) {
        alert("You must be at least 18 years old to submit the form.");
        document.getElementById("age").style.backgroundColor = "red";
        return false;
    } else {
        alert("Form Submitted.");
        return false;
        
    }


}
);