import * as React from "react";

export class Layout extends React.Component {
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
                                <h3 className="navbar-brand">Bonnie's Diner</h3>

                                <div>
                                    <ul className="list-inline" style={{ marginLeft:"25px", color: "white" }}>
                                        <li className="active"><a href="#home"><i className="ion-home"></i>Home</a></li>
                                        <li className="active"><a href="/menupage"><i className="ion-document-text"></i>Menu</a></li>
                                        <li className="active"><a href="/login">Login</a></li>
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
