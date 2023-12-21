import React, { Fragment } from "react";
import DestinationCard from "../card/popular-destination";
import "@/style/popular-des/popular-destinations.css"

export default function PopularDestination() {
    return (
        <Fragment>
            <div className="container" id="popular-destinations">
                <div className="title-and-tagline">
                    <h2 className="title">
                        Popular Destinations
                    </h2>
                    <div className="tagline">
                        {`World's best tourist destinations`}
                    </div>
                </div>
                <div className="destinations-card">
                    <div className="destination-card">
                        <DestinationCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg" 
                            city="Tokyo"
                            url="https://themes.themegoods.com/grandtour/demo/destination/tokyo/"
                            alt="Tokyo City"
                        />
                    </div>
                    <div className="destination-card">
                        <DestinationCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg" 
                            city="Seoul"
                            url="https://themes.themegoods.com/grandtour/demo/destination/seoul/"
                            alt="Seoul City"
                        />
                    </div>
                    <div className="destination-card">
                        <DestinationCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg" 
                            city="Paris"
                            url="https://themes.themegoods.com/grandtour/demo/destination/paris/"
                            alt="Paris City"
                        />
                    </div>
                    <div className="destination-card">
                        <DestinationCard 
                            image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg" 
                            city="London"
                            url="https://themes.themegoods.com/grandtour/demo/destination/london/"
                            alt="London City"
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}