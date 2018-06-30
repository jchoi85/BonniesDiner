import * as React from "react";


export class BasicBanner {
    constructor(props) {

    }
    

    render() {
        const backgroundPic = {
            //For the background, please insert your photo to Assets then into image, all you have to do 
            //is name the photo in the props of where you are rendering ex. "app-setting-banner.jpg"
            background: "URL('/assets/img/" + this.props.photoName + "')",
            backgroundSize: "cover"
        }

        return (
            <div className="an-profile-banner" style={backgroundPic}>
                <div className="an-profile-overlay"></div>
                <div className="an-inner-page-title">
                    <div className="container">
                        <h1>{this.props.bannerTitle}</h1>
                    </div>
                </div>
            </div>
        )

    }
}