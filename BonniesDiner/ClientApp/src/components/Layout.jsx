import * as React from "react";
import AuthService from "../services/authService";

export class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAdmin: false
        };
        this.Auth = new AuthService();
    }

    componentDidMount() {


    }
       
    

    render() {
        return (
            <React.Fragment>
                <div className="an-home-section" id="home">
                    <header className="an-header" style={{ position: "fixed", zIndex: "1000" }}>
                        <nav className="navbar-default" style={{
                            background: "#2c353a",
                            borderBottom: "1px solid #161b1d"
                        }}>
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="/">Bonnie's Diner</a>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><a href="/"><i className="ion-home"></i>Home</a></li>
                                        <li className="active"><a href="/menupage"><i className="ion-document-text"></i>Menu</a></li>
                                        <li className="active"><a href="/manageorders"><i></i>Manage</a></li>

										<li className="active"><a href="/login"><i></i>Login</a></li>
	                                    <li className="active"><a href="/logout"><i></i>Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>


                    <div style={{ width: "100%", minHeight: "100vh", paddingTop: "50px" }}>
                        <div className="">
                            {this.props.children}
                        </div>
                    </div>


                    <footer className="an-footer" style={{ position: "fixed", height: "10px", width: "100%" }}>

                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
