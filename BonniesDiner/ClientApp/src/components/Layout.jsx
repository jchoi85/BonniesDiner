import * as React from "react";

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
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    <a className="navbar-brand" href="/">Hobbyist</a>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="navbar">
                                        <li className="active" style={{ display: "inline" }}><a href="/"><i className="ion-home"></i>Home</a></li>
                                        <li className="active" style={{ display: "inline" }}><a href="/blogs"><i className="ion-document-text"></i>Blog</a></li>
                                        <li className="active" style={{ display: "inline" }}><a href="/contact"><i></i>Login</a></li>
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
                       
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
