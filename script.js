function clearErrors() {

    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }


}
function seterror(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm() {
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length < 5) {
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length > 15) {
        seterror("email", "*Enter the correct email");
        returnval = false;
    }
    // for(let i=0; i<email.length;i++){
    //     if(email[i] == '@'){
    //         returnval = true;
    //         break;
    //     }
    //     returnval = false;
    // }
    

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10  ) {
        seterror("phone", "*Enter a valid phone no");
        returnval = false;
    }
    

    var password = document.forms['myForm']["fpass"].value;
    if(password == 'password' || password == 'name'){
        seterror("pass", "*Password is not strong!");
        returnval = false;
    }
    if (password.length < 8) {

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password is not strong!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should not match");
        returnval = false;
    }

    return returnval;
}
