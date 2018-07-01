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
                                    <a className="navbar-brand" href="/">Hobbyist</a>
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


                    <footer className="an-footer">
                        <div className="container">
                            <div className="an-footer-bottom">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="an-widget">
                                            <a className="an-logo" href="#">Hobbyist</a>
                                            <p className="copyrights">© 2018 Hobbyist.<b>All rights reserved</b></p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-6">
                                        <div className="an-widget">
                                            <h4 className="an-small-title light-color">Contact</h4>
                                            <p>149 Back Street, NY</p>
                                            <p>W3 7QR</p>
                                            <p>+ 223 546 789</p>
                                            <p>directory@ex.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="an-widget">
                                            <h4 className="an-small-title light-color">Help</h4>
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                            It has roots in a piece of classNameical Latin.
                                        </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-md-push-1 col-sm-6">
                                        <div className="an-widget newsletter">
                                            <h4 className="an-small-title light-color">Subscribe to our news</h4>
                                            <form action="#" className="an-form">
                                                <input type="email" className="an-form-control dark" placeholder="E-mail" />
                                                <button type="submit" className="an-btn an-btn-default btn-submit-full"><i className="ion-ios-paperplane"></i></button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
