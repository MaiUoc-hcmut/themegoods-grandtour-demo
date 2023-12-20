import React, { Fragment } from "react";
import BestValueTripCard from "../card/best-value-trip";
import "@/style/best-value-trip/best-value-trip.css"


export default function BestValueTrip() {
    return (
        <Fragment>
            <div className="container" id="best-value-trip">
                <div className="title-and-tagline">
                    <h2 className="title">
                        Best Value Trips
                    </h2>
                    <div className="tagline">
                        Best offers trip from us
                    </div>
                </div>
                <div className="best-value-trips-card">
                    <div className="best-value-trip-card">
                        <BestValueTripCard  
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                            url="https://themes.themegoods.com/grandtour/demo/tour/french-autumn/"
                            name="French Autumn"
                            categories={["City Tours", "Urban"]}
                            price={5000}
                            rating={4}
                            nreview={4}
                            duration={5}
                        />
                    </div>
                    <div className="best-value-trip-card">
                        <BestValueTripCard  
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                            url="https://themes.themegoods.com/grandtour/demo/tour/grand-switzerland/"
                            name="Grand Switzerland"
                            categories={["Shopping", "Mountain", "Snow & Ice"]}
                            price={6000}
                            rating={4}
                            nreview={4}
                            duration={6}
                        />
                    </div>
                    <div className="best-value-trip-card">
                        <BestValueTripCard  
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                            url="https://themes.themegoods.com/grandtour/demo/tour/discover-japan/"
                            name="Discover Japan"
                            categories={["City Tours", "Iconic"]}
                            price={3000}
                            newPrice={2500}
                            rating={4}
                            nreview={4}
                            duration={5}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}