export default function validateInfo(values) {
    let errors={};

    //names
    if(!values.firstname.trim()) {
        errors.firstname = "Username required"
    } else if (!/[A-Za-z]{1,50}/.test(values.firstname)) {
        errors.firstname = "Name must be Alphabetical letters and minimum 2 letters"
    }

    //email
    if(!values.email) {
        errors.firstname = "email is required"
    } else if (!/.+@my.bcit.ca|.+@bcit.ca/.test(values.email)) {
        errors.email = "Must end with @my.bcit.ca or @bcit.ca"
    }

    //student id
    if(!values.studentid) {
        errors.studentid = "student ID is required"
    } else if (!/^A+[0-9]{9}$/.test(values.studentid)) {
        errors.studentid = "Must begin with A0, and have 7 numbers afterwards"
    }

    //set
    if(!values.set) {
        errors.set = "It is required to select a set"
    }

    return errors
}