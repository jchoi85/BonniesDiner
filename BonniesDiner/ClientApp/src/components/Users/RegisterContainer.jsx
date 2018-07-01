//import * as React from "react";
//import { IRegisterEntity } from "../../interfaces/IRegisterEntity";
//import { IError, IKeyValue } from "../../interfaces";
//import { browserHistory } from "react-router";
//import { Validation } from "../../common/components/form/Validation";
//import { RegisterForm } from "./RegisterForm";
//import { Button } from "../../common/components/form/index";
//import { UserApi, webscrape } from "../../api/index";

//const FormErrors = (props) => {
//    return (
//        <div className="formErrors">
//            {Object.keys(props).map((fieldName, i) => {
//                if (props[fieldName].length > 0)
//                    return <p key={i}>{fieldName} {props[fieldName]}</p>
//            })}
//        </div>
//    );
//}

//export class RegisterContainer{
//    constructor(props) {
//        this.state = {
//            registerEntity: {
//                firstName: "",
//                lastName: "",
//                email: "",
//                age:0,
//                school: "",
//                subject: "",
//                password: "",
//                confirmPassword: ""
//            },
//            resetState: {
//                firstName: "",
//                lastName: "",
//                email: "",
//                age: 0,
//                school: "",
//                subject: "",
//                password: "",
//                confirmPassword: ""
//            },
//            //setting validation values to false
//            isFormValid: false,
//            isFirstNameValid: false,
//            isLastNameValid: false,
//            isEmailValid: false,
//            isSchoolValid: false,
//            isPasswordValid: false,
//            isConfirmPasswordValid: false,
//            formErrors: {
//                firstName: "",
//                lastName: "",
//                email: "",
//                school: "",
//                password: "",
//                confirmPassword: ""
//            }
//        };
//        this.onFieldChange = this.onFieldChange.bind(this);
//        this.onSave = this.onSave.bind(this);
//        this.validateForm = this.validateForm.bind(this);
//        this.validateField = this.validateField.bind(this);
//        this.onBlur = this.onBlur.bind(this);
//    }
  
//     onFieldChange(fieldName, fieldValue) {
//        const nextState = {
//            ...this.state,
//            registerEntity: {
//                ...this.state.registerEntity,
//                [fieldName]: fieldValue
//            }
//        }
//        this.setState(nextState);
//    }

//     onBlur(fieldName, fieldValue) {
//        const nextState = {
//            ...this.state,
//            registerEntity: {
//                ...this.state.registerEntity,
//                [fieldName]: fieldValue
//            }
//        }
//        this.setState(nextState, () => { this.validateField(fieldName, fieldValue) });
//    };

//     validateField(fieldName, fieldValue) {
//        let errorMessage = this.state.formErrors;
//        let isFirstNameValid = this.state.isFirstNameValid;
//        let isLastNameValid = this.state.isLastNameValid;
//        let isEmailValid = this.state.isEmailValid;
//        let isSchoolValid = this.state.isSchoolValid;
//        let isPasswordValid = this.state.isPasswordValid;
//        let isConfirmPasswordValid = this.state.isConfirmPasswordValid;

//        switch (fieldName) {
//            case "firstName":
//                let firstNameErrMsg = Validation.validateFirstName(fieldValue);
//                isFirstNameValid = !firstNameErrMsg.isNotValid;
//                errorMessage.firstName = firstNameErrMsg.errMsg;
//                break;
//            case "lastName":
//                let lastNameErrMsg = Validation.validateLastName(fieldValue);
//                isLastNameValid = !lastNameErrMsg.isNotValid;
//                errorMessage.lastName = lastNameErrMsg.errMsg;
//                break;
//            case "email":
//                let emailErrMsg = Validation.validateEmail(fieldValue);
//                isEmailValid = !emailErrMsg.isNotValid;
//                errorMessage.email = emailErrMsg.errMsg;
//                break;
//            case "school":
//                let schoolErrMsg = Validation.validateSchool(fieldValue);
//                isSchoolValid = !schoolErrMsg.isNotValid;
//                errorMessage.school = schoolErrMsg.errMsg;
//                break;
//            case "password":
//                let passwordErrMsg = Validation.validatePassword(fieldValue);
//                isPasswordValid = !passwordErrMsg.isNotValid;
//                errorMessage.password = passwordErrMsg.errMsg;
//                break;
//            case "confirmPassword":
//                if (this.state.registerEntity.confirmPassword == this.state.registerEntity.password) {
//                    isConfirmPasswordValid = true;
//                    errorMessage.confirmPassword = ""
//                } else {
//                    isConfirmPasswordValid = false;
//                    errorMessage.confirmPassword = "Passwords do not match"
//                }
//                break;
//            default: false;
//        }
//        this.setState({
//            formErrors: errorMessage,
//            isFirstNameValid: isFirstNameValid,
//            isLastNameValid: isLastNameValid,
//            isEmailValid: isEmailValid,
//            isSchoolValid: isSchoolValid,
//            isPasswordValid: isPasswordValid,
//            isConfirmPasswordValid: isConfirmPasswordValid
//        }, this.validateForm);
//    }

//    validateForm() {
//        this.setState({
//            isFormValid:
//                this.state.isFirstNameValid &&
//                this.state.isLastNameValid &&
//                this.state.isEmailValid &&
//                this.state.isSchoolValid &&
//                this.state.isPasswordValid &&
//                this.state.isConfirmPasswordValid
//        });
//    }

//     onSave() {
//        Object.keys(this.state.registerEntity).forEach((itm) => {
//            this.validateField(itm, this.state.registerEntity[itm]);
//        })
//        console.log(this.state.registerEntity);
//        UserApi.registerUser(this.state.registerEntity)
//            .then((response) => {
//                console.log(response)
//            })
//        this.setState({ registerEntity: this.state.resetState })

//    }

//     render() {
//        return (
//            <div className="mfp-content">
//                <RegisterForm
//                    onBlur={this.onBlur}
//                    onChange={this.onFieldChange}
//                    onSave={this.onSave}
//                    //buttonDisabled={!this.state.isFormValid}going with onclick validation instead of disabling the button so the user knows what they missed
//                    registerEntity={this.state.registerEntity}
//                    firstNameErrorMsg={this.state.formErrors.firstName}
//                    lastNameErrorMsg={this.state.formErrors.lastName}
//                    emailErrorMsg={this.state.formErrors.email}
//                    schoolErrorMsg={this.state.formErrors.school}
//                    passwordErrorMsg={this.state.formErrors.password}
//                    confirmPasswordErrorMsg={this.state.formErrors.confirmPassword}
//                />

//            </div>
//        );
//    }
//}