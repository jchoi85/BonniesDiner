
//import * as React from "react";
//import { Link } from "react-router";
//import { Button, Input } from "../../common/components/form";

//export const RegisterForm = (props) => {

//    return (
//        <div className="container">
//            <div className="col-md-10 col-md-offset-4">
//                <div style={{ marginLeft: "90px" }}>
//                    <h3>Signup</h3>
//                </div>
//                <form id="form">
//                    <Input
//                        label="First Name"
//                        type="text"
//                        error={props.firstNameErrorMsg}
//                        name="firstName"
//                        value={props.registerEntity.firstName}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="First Name"
//                    />
//                    <Input
//                        label="Last Name"
//                        type="text"
//                        error={props.lastNameErrorMsg}
//                        name="lastName"
//                        value={props.registerEntity.lastName}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="Last Name"
//                    />
//                    <Input label="Email"
//                        type="email"
//                        error={props.emailErrorMsg}
//                        name="email"
//                        value={props.registerEntity.email}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="Email"
//                    />
//                    <Input label="Age"
//                        type="age"
//                        error={props.ageErrorMsg}
//                        name="age"
//                        value={props.registerEntity.age}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="Age"
//                    />
//                    <Input label="School"
//                        type="text"
//                        error={props.schoolErrorMsg}
//                        name="school"
//                        value={props.registerEntity.school}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="School"
//                    />
//                    <Input label="Subject"
//                        type="text"
//                        name="subject"
//                        value={props.registerEntity.subject}
//                        onChange={props.onChange}
//                        placeholder="Subject"
//                    />
//                    <Input type="password"
//                        label="Password"
//                        error={props.passwordErrorMsg}
//                        name="password"
//                        value={props.registerEntity.password}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="Password"
//                    />
//                    <Input type="password"
//                        label="Confirm Password"
//                        error={props.confirmPasswordErrorMsg}
//                        name="confirmPassword"
//                        value={props.registerEntity.confirmPassword}
//                        onChange={props.onChange}
//                        onBlur={props.onBlur}
//                        placeholder="Confirm Password"
//                    />
//                    <div style={{ marginLeft: "90px" }}>
//                        <Button
//                            label="Submit"
//                            className="an-btn-small"
//                            style={{ marginLeft: "10px", marginTop: "10px", position: "relative", top: "5px" }}
//                            onClick={props.onSave}
//                        />
//                    </div>
//                </form>
//            </div>
//        </div>
//    );
//}