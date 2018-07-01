import * as React from "react";

export class HomePageContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner-section">
                    <div className="an-home-img-container" style={{ background: "url('./Content/assets/img/creative-craft.jpg') center center no-repeat", backgroundSize: 'cover' }}>
                        <div className="overlay"></div>
                        <div className="home-banner-content">
                            <div className="col-md-8" style={{ paddingTop: "100px" }}>
                                <div className="container">
                                    <div className="col-md-8">
                                        <h1 className="wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}>Better <span>Professionals</span> are waiting for <b>you</b> to consult.</h1>
                                        <p className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>We are the creative agency company to help your business grow.</p>
                                        <button className="an-btn an-btn-default btn-big wow fadeIn" style={{ visibility: "hidden", animationName: "none" }}>Check Out Today's Build!</button>
                                    </div>
                                </div>
                            </div>
                            <p className="wow fadeInUp" style={{ paddingTop: "10px" }}> Join the Community! </p>
                            <div className="col-md-4">
                                <form action="#">
                                    <input type="text" className="an-form-control wow fadeInUp" placeholder="Tell Us Your First Name" />
                                    <input type="text" className="an-form-control wow fadeInUp" placeholder="Tell Us Your Last Name" />
                                    <input type="text" className="an-form-control wow fadeInUp" placeholder="Your Email Address (E.g example@mail.com)" />
                                    <input type="text" className="an-form-control wow fadeInUp" placeholder="Enter a Password" />
                                    <input type="text" className="an-form-control wow fadeInUp" placeholder="Confirm Your Password" />
                                    <button className="an-btn an-btn-default wow fadeInDown">Register</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }

}