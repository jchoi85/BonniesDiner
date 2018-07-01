import * as React from "react";
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

export class Layout extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="an-home-section" id="home">
                    <header className="an-header">
                        <nav className="navbar navbar-default navbar-fixed-top" style={{
                            background: "#2c353a",
                            borderBottom: "1px solid #161b1d",
                            width: "200px"
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
                                <div>
                                    <ul style={{ color: "white" }}>
                                        <li className="active"><a href="#home"><i className="ion-home"></i>Home</a></li>
                                        <li className="active"><a href="/blogs"><i className="ion-document-text"></i>Blog</a></li>
                                        <li className="active"><a href="#contact"><i></i>Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>


                    <div style={{ width: "100%", minHeight: "100vh" }}>
                        <div className="">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
