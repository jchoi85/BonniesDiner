//import { IError } from "../../../interfaces/form";

//const IError = {
//    isNotValid: "",
//    errMsg: ""
//}

//const validateFirstName = (firstName) => {
//    if (firstName.length < 1) {
//        return { isNotValid: true, errMsg: "Please enter a first name" };
//    }
//    if (firstName.length > 50) {
//        return { isNotValid: true, errMsg: "First name too Long" };
//    }
//    return { isNotValid: false, errMsg: "" }
//}

//const validateLastName = (LastName) => {
//    if (LastName.length < 1) {
//        return { isNotValid: true, errMsg: "Please enter a last name" };
//    }
//    if (LastName.length > 100) {
//        return { isNotValid: true, errMsg: "Last name too Long" };
//    }
//    return { isNotValid: false, errMsg: "" };
//}


//const validateEmail = (email) => {
//    if (email.length < 0) {
//        return { isNotValid: true, errMsg: "Email is too short" };
//    }
//    else if (email.length > 128) {
//        return { isNotValid: true, errMsg: "Email is too long" };
//    }
//    //regular expression to check if email is in name@email.com format
//    else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
//        return { isNotValid: true, errMsg: "Must be a valid email" }
//    }
//    return { isNotValid: false, errMsg: "" };
//}

//const validatePassword = (password) => {
//    if (password.length < 4) {
//        return { isNotValid: true, errMsg: "Password is too short, must be at least 4 characters long" };
//    }
//    //else if (password.length > 128) {
//    //    return { isNotValid: true, errMsg: "Password is too long, must be 128 characters or less" };
//    //}
//    //else if (!/\d/.test(password)) {
//    //    return { isNotValid: true, errMsg: "Password must include a number" };
//    //}
//    //else if (!/[a-zA-Z]/.test(password)) {
//    //    return { isNotValid: true, errMsg: "Password must include a letter" };
//    //}
//    //else if (!/[!\@\#\$\%\^\&\*\(\)\_\+\-\=]/.test(password)) {
//    //    return { isNotValid: true, errMsg: "Password must contain 1 special character" };
//    //}
//    return { isNotValid: false, errMsg: "" };
//}

//const validateNotEmpty = (value) => {
//    if (value.length < 1) {
//        return { isNotValid: true, errMsg: "Please enter a value!" };
//    }
//    return { isNotValid: false, errMsg: "" };
//}

//const validateInput = (input) => {
//    return (input.length > 0) ? { isNotValid: false, errMsg: "" } : { isNotValid: true, errMsg: "Field cannot by empty." };
//}

//const validateAge = (input) => {
//    return (input > 0) ? { isNotValid: false, errMsg: "" } : { isNotValid: true, errMsg: "Age is required." };
//}

//const validateSchool = (School) => {
//    if (School.length < 1) {
//        return { isNotValid: true, errMsg: "Please enter a School Name" };
//    }
//    return { isNotValid: false, errMsg: "" };
//}

//export const Validation = {
//    validateFirstName,
//    validateLastName,
//    validateEmail,
//    validatePassword,
//    validateSchool,
//    validateAge
//}