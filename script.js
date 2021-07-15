const form = Document.getElemnetById("form");
const username = Document.getElemnetById("username");
const phonenumber = Document.getElemnetById("phonenumber");
const email = Document.getElemnetById("email");
const password = Document.getElemnetById("password");
const confirmpassword = Document.getElemnetById("confirmpassword");

// add event

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    validate();
})

// email validation condition 

const isEmail = (emailVal) =>{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailVal.value.match(mailformat))
        setSuccessMsg(email);
    
    

}

// define the  validate function

const validate = () =>{
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const phonenumberval = phonenumber.value.trim();
    const passwordval = password.value.trim();
    const confirmpasswordval = confirmpassword.value.trim();
}

// validate username

if (usernameval === ""){
    setErrorMsg(username, 'username must be entered');

} else if (usernameval.length <= 2){
    setErrorMsg(username, 'username min 3 char');

}else{
    setSuccessMsg(username);
}

// validate email

if (emailVal === ""){
    setErrorMsg(email, 'email must be entered');

} else if (!isEmail(emailVal)){
    setErrorMsg(emailVal, 'Not a valid email');

}else{
    setSuccessMsg(email);
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-Control error";
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-Control success";
}

