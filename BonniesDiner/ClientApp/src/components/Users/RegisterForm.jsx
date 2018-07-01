
import * as React from "react";
import { Link } from "react-router";
import { Button, Input } from "../../common/components/index";

export const RegisterForm = (props) => {

    return (
        <div className="container">
            <div>
                <div style={{ marginLeft: "90px" }}>
                    <h3>Signup</h3>
                </div>
                <form id="form">
                    <Input
                        label="Name"
                        type="text"
                        name="firstName"
                        value={props.registerEntity.name}
                        onChange={props.onChange}
                        placeholder="Name"
                    />
                    <Input label="Email"
                        type="email"
                        name="email"
                        value={props.registerEntity.email}
                        onChange={props.onChange}
                        placeholder="Email"
                    />
                    <Input type="password"
                        label="Password"
                        name="password"
                        value={props.registerEntity.password}
                        onChange={props.onChange}
                        placeholder="Password"
                    />
                    <Input type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={props.registerEntity.confirmPassword}
                        onChange={props.onChange}
                        placeholder="Confirm Password"
                    />
                    <div style={{ marginLeft: "90px" }}>
                        <Button
                            label="Submit"
                            className="an-btn-small"
                            style={{ marginLeft: "10px", marginTop: "10px", position: "relative", top: "5px" }}
                            onClick={props.onSave}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}