import React, { Fragment } from "react";
import "@/style/why-choose-us/why-choose-us.css";


export default function WhyChooseUs() {

    return (
        <Fragment>
            <div className="container" id="why-choose-us-container">
                <div className="title-and-tagline">
                    <h2 className="title">
                        Why Choose Us
                    </h2>
                    <div className="tagline">
                        Here are reasons you should plan trip with us
                    </div>
                </div>
                <div className="reasons-to-choose-service">
                    <div className="reason-to-choose-service">
                        <div className="reason-image">
                            <img 
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" 
                                alt=""
                            />
                        </div>
                        <div className="main-reason">
                            Handpicked Hotels
                        </div>
                        <div className="reason-description">
                            Lorem ipsum dolor sit amet, 
                            consect adipiscing elit. 
                            Aenean commodo ligula eget dolor. 
                            Aenean massa
                        </div>
                    </div>
                    <div className="reason-to-choose-service">
                        <div className="reason-image">
                            <img 
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" 
                                alt=""
                            />
                        </div>
                        <div className="main-reason">
                            World Class Service
                        </div>
                        <div className="reason-description">
                            Lorem ipsum dolor sit amet, 
                            consect adipiscing elit. 
                            Aenean commodo ligula eget dolor. 
                            Aenean massa
                        </div>
                    </div>
                    <div className="reason-to-choose-service">
                        <div className="reason-image">
                            <img 
                                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" 
                                alt=""
                            />
                        </div>
                        <div className="main-reason">
                            Best Price Guarantee
                        </div>
                        <div className="reason-description">
                            Lorem ipsum dolor sit amet, 
                            consect adipiscing elit. 
                            Aenean commodo ligula eget dolor. 
                            Aenean massa
                        </div>
                    </div>
                </div>
                <div 
                    className="genereal-reason-image"
                >
                    <img 
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg" 
                        alt="Golden Gat Bridge"
                    />
                </div>
                {/* <motion.div 
                    className="genereal-reason-image"
                    ref={container}
                    style={{y}}
                >
                    <img 
                        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg" 
                        alt="Golden Gat Bridge"
                    />
                </motion.div> */}
            </div>
        </Fragment>
    );
}