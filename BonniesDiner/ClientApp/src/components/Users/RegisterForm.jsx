
import * as React from "react";
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
                        name="Username"
                        value={props.registerEntity.Name}
                        onChange={props.onChange}
                        placeholder="Name"
                    />
                    <Input label="Email"
                        type="email"
                        name="Email"
                        value={props.registerEntity.Email}
                        onChange={props.onChange}
                        placeholder="Email"
                    />
                    <Input type="password"
                        label="Password"
                        name="Password"
                        value={props.registerEntity.Password}
                        onChange={props.onChange}
                        placeholder="Password"
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