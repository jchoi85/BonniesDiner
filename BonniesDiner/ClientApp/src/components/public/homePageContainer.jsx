import * as React from "react";
import { RegisterContainer } from "../Users/RegisterContainer"

export class HomePageContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="banner-section" style={{ marginLeft: "200px" }}>
                    <div className="an-home-img-container" style={{ background: "url('./Content/assets/img/creative-craft.jpg') center center no-repeat", backgroundSize: 'cover' }}>
                        <div className="overlay"></div>
                        <div className="home-banner-content">
                            <div className="col-md-12 row" style={{ paddingTop: "100px", textAlign: "center" }}>
                                <div className="container">
                                    <div className="col-md-12">
                                        <h1 style={{ textAlign: "center" }}>Bonnie's Famous Vegan Diner</h1>
                                        <h3 className="wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}>
                                            Bonnie's Famous Diner is known for excellent dishes created by autonomous chefs.  With advanced robotics, almost everything in the restaurant is operated by machines - cooking, serving, and cleaning.</h3>
                                        <p className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>We are the creative agency company to help your business grow.</p>
                                        <button className="an-btn an-btn-default btn-big wow fadeIn" style={{ visibility: "hidden", animationName: "none" }}>Check Out Today's Build!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <RegisterContainer
                                />
                            </div>
                        </div>

export const HomePageContainer = () => (
    <div className="">
        <div className="an-home-img-container" style={{ background: "url('https://www.hanoibackpackershotel.com/wp-content/uploads/2017/06/vegetarian_restaurants.jpg') center center no-repeat", backgroundSize: 'cover' }}>
            <div className="overlay"></div>
            <div className="home-banner-content">
                <div className="col-md-8" style={{ paddingTop: "0px" }}>
                    <div className="container">
                        <div className="col-md-8">
                            <h1 className="wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}>Better <span>Professionals</span> are waiting for <b>you</b> to consult.</h1>
                            <p className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>We are the creative agency company to help your business grow.</p>
                            <button className="an-btn an-btn-default btn-big wow fadeIn" style={{ visibility: "hidden", animationName: "none" }}>Check Out Today's Build!</button>
                        </div>
                    </div>
                </div>
                <p className="wow fadeInUp" style={{ paddingTop: "10px" }}> Join the Community! </p>
            </div>

        </div>
    </div>
)