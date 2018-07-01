import * as React from "react";
import { RegisterContainer } from "../Users/RegisterContainer"


export const HomePageContainer = () => (
    <div className="banner-section">
        <div className="an-home-img-container" style={{ background: "url('https://www.hanoibackpackershotel.com/wp-content/uploads/2017/06/vegetarian_restaurants.jpg') center center no-repeat", backgroundSize: 'cover' }}>
            <div className="overlay"></div>
            <div className="home-banner-content">
                <div className="col-md-8" style={{ paddingTop: "0px" }}>
                    <div className="container">
                        <div className="col-md-8">
                            <h1 className="wow fadeInDown" style={{ visibility: "visible", animationName: "fadeInDown" }}><span>Bonnie's Famous Vegan Diner</span></h1>
                            <p className="wow fadeInUp" style={{ visibility: "visible", animationName: "fadeInUp" }}>Bonnie's Famous Diner is known for excellent dishes created by autonomous chefs.  With advanced robotics, almost everything in the restaurant is operated by machines - cooking, serving, and cleaning.</p>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <RegisterContainer
                    />
                </div>
            </div>

        </div>
    </div>
)