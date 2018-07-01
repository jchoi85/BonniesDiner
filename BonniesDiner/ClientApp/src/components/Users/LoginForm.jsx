
import * as React from "react";
import { Button, Input } from "../../common/components/index";

export const LoginForm = (props) => {
    return (
        <div className="col-md-offset-2" style={{ background: "url('http://backgroundcheckall.com/wp-content/uploads/2017/12/vegan-background-12.jpg') center center no-repeat", backgroundSize: 'cover' }}>
            <div >
        <form className="tg-loginform" method="post">
            <fieldset>
                <div className="form-group">
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        label="E-mail"
                        value={props.loginEntity.email}
                        onChange={props.onChange}
                    />
                </div>
                <div className="form-group">
                    <Input type="password"
                        name="password"
                        placeholder="Password"
                        label="Password"
                        value={props.loginEntity.password}
                        onChange={props.onChange}
                        onEnter={props.onLoginEnter}
                    />
                </div>
                <div className="form-group">
                    <Button label="Login Now"
                        onClick={props.onSubmit}
                        className="tg-btn tg-btn-lg"
                        disabled={false}
                    />
                </div>
                <div className="tg-description">
                    <p>Don't have an account? <a href="/#home">Signup</a></p>
                </div>
            </fieldset>
                </form>
            </div>
        </div>
    )
};

