import React, { Fragment } from "react";
import "@/style/popular-des/destination-card.css";


export default function DestinationCard({
    image,
    alt,
    city,
    url,
}: {
    image: string,
    alt: string,
    city: string,
    url: string,
}) {
    return (
        <Fragment>
            <a href={url} target="blank">
                <div className="card-container" id="destination-card-container">
                    <div className="destination-card-image">
                        <img src={image} alt={alt} />
                    </div>
                    <div className="destination-city">
                        {city}
                    </div>
                </div>
            </a>
        </Fragment>
    );
}