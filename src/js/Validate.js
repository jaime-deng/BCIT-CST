export default function validateInfo(values) {
    const errors= {};
   
    let isValid = true;
    //names
    if(!values.firstname.trim()) {
        errors.firstname = "Username required";
        isValid = false;
    } else if (!/[A-Za-z]{1,50}/.test(values.firstname)) {
        errors.firstname = "Name must be Alphabetical letters and minimum 2 letters";
        isValid = false;
    }

    //email
    if(!values.email) {
        errors.email = "email is required";
        isValid = false;
    } else if (!/.+@my.bcit.ca|.+@bcit.ca/.test(values.email)) {
        errors.email = "Must end with @my.bcit.ca or @bcit.ca";
        isValid = false;
    }

    //student id
    if(!values.studentid) {
        errors.studentid = "student ID is required";
        isValid = false;
    } else if (!/^A+[0-9]{9}$/.test(values.studentid)) {
        errors.studentid = "Must begin with A0, and have 7 numbers afterwards";
        isValid = false;
    }

    //set
    if(!values.set) {
        errors.set = "It is required to select a set";
        isValid = false;
    }

    return isValid ? false : errors
}